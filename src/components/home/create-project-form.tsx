import { useState } from 'react';
import ActiveLink from '@/components/ui/links/active-link';
import Input from '@/components/ui/forms/input';
import { LongArrowUp } from '@/components/icons/long-arrow-up';
import Textarea from '@/components/ui/forms/textarea';
import { useContractSend } from '@/lib/contract/useContractWrite';
// Import the toast library to display notifications
import { toast } from 'react-toastify';
import Datepicker from 'react-tailwindcss-datepicker';
import { useRouter } from 'next/navigation';

export default function CreateProjectForm() {
  const { push } = useRouter();

  // The following states are used to store the values of the input fields
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState(''); // save in server
  const [raised, setRaised] = useState<string | number>(0);
  const [expiresAt, setExpiresAt] = useState({
    startDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    endDate: null,
  });
  const [amountTokenDeposit, setAmountTokenDeposit] = useState(0);
  const [tag, setTag] = useState<string[]>([]); // optional save in server

  const handleDateChange = (newValue: any) => {
    setExpiresAt(newValue);
  };
  const [loading, setLoading] = useState('');

  // Clear the input fields after the project is added
  const clearForm = () => {
    setTitle('');
    setDescription('');
    setImageURL('');
    setRaised(0);
    setExpiresAt({
      startDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
      endDate: null,
    });
    setTag([]);
    setAmountTokenDeposit(0);
  };

  // Validate a url
  function isValidUrl(url: string) {
    let isValid = false;

    try {
      const parsedUrl = new URL(url);
      isValid = true;
    } catch (error) {
      isValid = false;
    }

    return isValid;
  }

  // Check if all the input fields are filled
  const isComplete = () => {
    if (title.trim() == '' || title.length < 2) {
      toast.warn(
        'Please enter valid project name (2 characters or more & not only whitespace'
      );
      return false;
    }
    if (!isValidUrl(imageURL)) {
      toast.warn('Please enter a valid image url');
      return false;
    }
    if (Number(raised) < 1) {
      toast.warn('Please enter a valid project price (> 0)');
      return false;
    }
    if (description.trim() == '' || description.length < 2) {
      toast.warn('Please enter a valid project description');
      return false;
    }
    if (expiresAt.endDate == '') {
      toast.warn('Please enter a valid project expire time');
      return false;
    }
    return true;
  };

  // Use the useContractSend hook to use our createProject function
  const { writeAsync: createProject } = useContractSend('createProject', [
    title,
    description,
    imageURL,
    raised,
    Date.parse(expiresAt.startDate.toString()) / 1000, // convert to time stamp
    amountTokenDeposit,
  ]);
  // Define function that handles the creation of a project through the contract
  const handleCreateProject = async () => {
    setLoading('Creating...');
    if (!isComplete()) throw new Error('Please fill all fields');
    if (!createProject) {
      throw 'Failed to create project';
    }
    // Create the project by calling the writeproject function on the contract
    const purchaseTx = await createProject();
    setLoading('Waiting for confirmation...');
    // Wait for the transaction to be mined
    await new Promise((resolve) => setTimeout(resolve, 5000));
    // Clear the input fields after the project is added
    clearForm();
  };

  // Define function that handles the creation of a project, if a user submits the project form
  const addProject = async (e: any) => {
    e.preventDefault();
    try {
      // Display a notification while the project is being added
      await toast.promise(handleCreateProject(), {
        pending: 'Creating project...',
        success: 'project created successfully',
      });
      // redirect to thank you page
      await new Promise((resolve) => setTimeout(resolve, 2000));
      push('/thank-you');
      // Display an error message if something goes wrong
    } catch (e: any) {
      console.log({ e });
      toast.error(e?.message || 'Something went wrong. Try again.');
      // Clear the loading state after the project is added
    } finally {
      setLoading('');
    }
  };

  return (
    <>
      <div className="max-w-8xl pt-8 text-sm">
        <div className="flex">
          <ActiveLink href="/create-project" className="flex">
            <button className="flex rounded-full">
              <LongArrowUp className="h-6 w-8 -rotate-90" />
            </button>
            <p>Finish Later</p>
          </ActiveLink>
        </div>
        <div className="mx-auto w-full max-w-2xl p-5 pt-4 xs:p-6 xs:pt-5">
          <h2 className="flex justify-center text-2xl font-bold lg:text-4xl">
            Tell Us About Your Project
          </h2>
        </div>
        <form onSubmit={addProject}>
          <div className="mx-auto w-full">
            <h2 className="text-xl font-bold lg:text-2xl">Project name</h2>
            <p className="relative mb-2 text-gray-500">
              What are you calling it
            </p>
            <Input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Project name"
              inputClassName="spin-button-hidden"
            />
          </div>
          <div className="mx-auto w-full pt-4">
            <h2 className="text-xl font-bold lg:text-2xl">About the project</h2>
            <p className="relative mb-2 text-gray-500">
              Tell us more comprehensive overview of your project, highlighting
              its key features, and goals.
            </p>
            <Textarea
              placeholder="Provide a detailed description of your item"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="mx-auto w-full pt-4">
            <h2 className="text-xl font-bold lg:text-2xl">Project Image</h2>
            <p className="relative mb-2 text-gray-500">
              Thumbnail for your project
            </p>
            <Input
              onChange={(e) => {
                setImageURL(e.target.value);
              }}
              placeholder="https://example.com/image.png"
              inputClassName="spin-button-hidden"
            />
          </div>
          <div className="mx-auto w-full pt-4">
            <h2 className="text-xl font-bold lg:text-2xl">Donation limit</h2>
            <p className="relative mb-2 text-gray-500">
              The maximum amount is 100 dollars. If you wish to donate more, you
              need to be verified through our system.
            </p>
            <Input
              onChange={(e) => {
                setRaised(e.target.value);
              }}
              placeholder="1 GFA"
              inputClassName="spin-button-hidden"
            />
          </div>
          <div className="mx-auto w-full pt-4">
            <h2 className="text-xl font-bold lg:text-2xl">Expiry date</h2>
            <p className="relative mb-2 text-gray-500">
              The desired time to end the project - only 365 days.
            </p>
            <Datepicker
              toggleClassName="absolute bg-blue-300 rounded-r-lg text-white right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
              asSingle={true}
              value={expiresAt}
              onChange={handleDateChange}
              minDate={new Date(new Date().getTime() + 24 * 60 * 60 * 1000)} // min next day
              maxDate={
                new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000)
              } // max 365 day
            />
          </div>
          <div className="mx-auto w-full pt-4">
            <h2 className="text-xl font-bold lg:text-2xl">Tags</h2>
            <p className="relative mb-2 text-gray-500">
              Categorizing projects into relevant fields (Optional)
            </p>
            <Input
              onChange={(e) => {
                setTag([e.target.value]);
              }}
              placeholder="Tag"
              inputClassName="spin-button-hidden"
            />
          </div>
          <div className="mx-auto w-full pt-4">
            <h2 className="text-xl font-bold lg:text-2xl">
              AmountTokenDeposit
            </h2>
            <p className="relative mb-2 text-gray-500">
              Amount token deposit (Default is 0)
            </p>
            <Input
              onChange={(e) => {
                setAmountTokenDeposit(Number(e.target.value));
              }}
              placeholder="0"
              inputClassName="spin-button-hidden"
            />
          </div>
          <div className="flex justify-center gap-10 p-6 xs:mt-8">
            <button
              type="submit"
              disabled={!!loading || !isComplete}
              className="rounded-lg bg-yellow-500 p-1 px-10 text-xl font-bold text-white hover:bg-yellow-400"
            >
              {loading ? loading : 'Public'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
