import { useEffect, useState } from "react";
import ActiveLink from '@/components/ui/links/active-link';
import Input from '@/components/ui/forms/input';
import { LongArrowUp } from '@/components/icons/long-arrow-up';
import Textarea from '@/components/ui/forms/textarea';
import { useContractSend } from '@/lib/contract/useContractWrite';
import { useContractCall } from "@/lib/contract/useContractRead";
// Import the toast library to display notifications
import { toast } from "react-toastify";
import Datepicker from "react-tailwindcss-datepicker"; 

export default function CreateProjectForm() {
    // The following states are used to store the values of the input fields
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [raised, setRaised] = useState<string | number>(0);
    const [expiresAt, setExpiresAt] = useState({ 
      startDate: null,
      endDate: null 
    }); 
    const [tag, setTag] = useState("");

    const handleDateChange = (newValue:any) => {
      setExpiresAt(newValue); 
    } 
    const [loading, setLoading] = useState("");

    // call get project Tax
    const { data : projectTax}: any = useContractCall("projectTax");

    // Clear the input fields after the project is added
    const clearForm = () => {
      setTitle("");
      setDescription("");
      setImageURL("");
      setRaised(0);
      setExpiresAt({
        startDate: null,
        endDate: null 
      });
      setTag("");
    };

    // Validate a url
    function isValidUrl(url:string) {
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
        toast.warn("Please enter valid project name (2 characters or more & not only whitespace")
        return false;
      }
      if (!isValidUrl(imageURL)) {
        toast.warn("Please enter a valid image url")
        return false;
      }
      if (Number(raised) < 1) {
        toast.warn("Please enter a valid project price (> 0)")
        return false;
      }
      if (description.trim() == '' || description.length < 2) {
        toast.warn("Please enter a valid project location (2 characters or more & not only whitespace)")
        return false;
      }
      if (expiresAt.startDate == '' || expiresAt.endDate == '') {
        toast.warn("Please enter a valid project expire time")
        return false;
      }
      if (tag.trim() == '' || tag.length < 2) {
        toast.warn("Please enter a valid project tags (2 characters or more & not only whitespace)")
        return false;
      }
      return true
    }

     // Use the useContractSend hook to use our writeProduct function on the marketplace contract and add a product to the marketplace
    // const { writeAsync: createProject } = useContractSend("writeProduct", [
    //   debouncedProductName,
    //   debouncedProductImage,
    //   debouncedProductDescription,
    //   debouncedProductLocation,
    //   productPriceInWei,
    // ]);

    // Define function that handles the creation of a project through the contract
    const handleCreateProject = async () => {
      setLoading("Creating...");
      if (!isComplete()) throw new Error("Please fill all fields");
      // if (!createProject) {
      //   throw "Failed to create project";
      // }
      // // Create the project by calling the writeproject function on the contract
      // const purchaseTx = await createProject();
      // setLoading("Waiting for confirmation...");
      // // Wait for the transaction to be mined
      // await purchaseTx.wait();
      // // Close the modal and clear the input fields after the project is added
      // clearForm();
    };

    // Define function that handles the creation of a project, if a user submits the project form
    const addProject = async (e: any) => {
      e.preventDefault();
      try {
        // Display a notification while the project is being added
        await toast.promise(handleCreateProject(), {
          pending: "Creating project...",
          success: "project created successfully",
          error: "Something went wrong. Try again.",
        });
        // Display an error message if something goes wrong
      } catch (e: any) {
        console.log({ e });
        toast.error(e?.message || "Something went wrong. Try again.");
        // Clear the loading state after the project is added
      } finally {
        setLoading("");
      }
    };

    return (
      <>
      <div className="pt-8 text-sm max-w-8xl">
          <div className="flex">
            <ActiveLink href="/create-project" className="flex">
              <button className="rounded-full flex">
                <LongArrowUp
                  className="h-6 w-8 -rotate-90"
                />
              </button>
              <p>Finish Later</p>
            </ActiveLink>
          </div>
          <div className="mx-auto w-full p-5 pt-4 xs:p-6 xs:pt-5 max-w-2xl">
            <h2 className="font-bold lg:text-4xl text-2xl flex justify-center">
              Tell Us About Your Project
            </h2>
          </div>
          <form onSubmit={addProject}>
            <div className="mx-auto w-full">
              <h2 className="font-bold lg:text-2xl text-xl">
                Project name
              </h2>
              <p className="relative text-gray-500 mb-2">
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
              <h2 className="font-bold lg:text-2xl text-xl">
                About the project
              </h2>
              <p className="relative text-gray-500 mb-2">
                Tell us more comprehensive overview of your project, highlighting its key features, and goals.
              </p>
              <Textarea placeholder="Provide a detailed description of your item" />
            </div>
            <div className="mx-auto w-full pt-4">
              <h2 className="font-bold lg:text-2xl text-xl">
                Project Image
              </h2>
              <p className="relative text-gray-500 mb-2">
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
              <h2 className="font-bold lg:text-2xl text-xl">
                Donation limit
              </h2>
              <p className="relative text-gray-500 mb-2">
                The maximum amount is 100 dollars. If you wish to donate more, you need to be verified through our system.
              </p>
              <Input
                onChange={(e) => {
                  setRaised(e.target.value);
                }}
                placeholder="1 ETH"
                inputClassName="spin-button-hidden"
              />
            </div>
            <div className="mx-auto w-full pt-4">
              <h2 className="font-bold lg:text-2xl text-xl">
                Expiry date
              </h2>
              <p className="relative text-gray-500 mb-2">
                The desired time to end the project - only 365 days.
              </p>
              <Datepicker
                toggleClassName="absolute bg-blue-300 rounded-r-lg text-white right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed" 
                asSingle={true}
                value={expiresAt} 
                onChange={handleDateChange} 
                minDate={new Date((new Date()).getTime() + (24 * 60 * 60 * 1000))} // min next day
                maxDate={new Date((new Date()).getTime() + (365 * 24 * 60 * 60 * 1000))} // max 365 day
              /> 
            </div>
            <div className="mx-auto w-full pt-4">
              <h2 className="font-bold lg:text-2xl text-xl">
                Tags
              </h2>
              <p className="relative text-gray-500 mb-2">
                Categorizing projects into relevant fields
              </p>
              <Input
                onChange={(e) => {
                  setTag(e.target.value);
                }}
                placeholder="Tag"
                inputClassName="spin-button-hidden"
              />
            </div>
            <div className="p-6 flex gap-10 xs:mt-8 justify-center">
              {/* <ActiveLink href="/thank-you"> */}
              <button type="submit"
              disabled={!!loading || !isComplete}
              className="rounded-lg text-white p-1 px-10 bg-yellow-500 text-xl font-bold hover:bg-yellow-400">
                {loading ? loading : "Public"}
              </button>
              {/* </ActiveLink> */}
            </div>
          </form>
      </div>
      </>
    );
  }
  