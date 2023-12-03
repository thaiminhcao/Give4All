import React, { useState } from 'react';
import Input from '@/components/ui/forms/input';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useContractSend } from '@/lib/contract/useContractWrite';
export default function DonationForm() {
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState('');
  const { push } = useRouter();
  const router = useRouter();
  const { id } = router.query;
  const [raised, setRaised] = useState<string | number>(0);
  const clearForm = () => {
    setComment('');
    setRaised(0);
  };
  const isComplete = () => {
    if (comment.trim() == '' || comment.length < 10) {
      toast.warn(
        'Please enter valid comment (more than 10 characters & not only whitespace'
      );
      return false;
    }
    return true;
  };
  const { writeAsync: createProject } = useContractSend('donation', [
    id,
    comment,
  ]);

  const handleCreateProject = async () => {
    setLoading('Donating...');
    if (!isComplete()) throw new Error('Please fill all fields');
    if (!createProject) {
      throw 'Failed to deny';
    }
    // Create the project by calling the write project function on the contract
    const purchaseTx = await createProject();
    setLoading('Waiting for confirmation...');
    // Wait for the transaction to be mined
    await new Promise((resolve) => setTimeout(resolve, 5000));
    // Clear the Input fields after the project is added
    clearForm();
  };
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
    <div className="relative z-50  justify-items-center rounded-lg bg-white ">
      <form onSubmit={addProject} className="  p-8">
        <div className="grid h-full w-96 space-y-2 bg-white bg-opacity-30">
          <h1 className="text-center text-4xl font-bold text-black">
            DONATION FORM
          </h1>
          <div className="h-px w-96 border border-black"></div>

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
              placeholder="1 ETH"
              inputClassName="spin-button-hidden"
            />
          </div>

          <div className="mx-auto w-full pt-4">
            <label
              htmlFor="comment"
              className="text-2xl font-medium text-black"
            >
              Comment
            </label>
            <Input
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
              inputClassName="spin-button-hidden"
              className="h-12 w-96 rounded bg-neutral-100 py-2"
              placeholder="Comment something..."
            />
          </div>

          <div className="flex w-full justify-center gap-10 p-6 xs:mt-8">
            <button
              type="submit"
              onSubmit={addProject}
              className="w-full rounded-lg bg-yellow-500 p-1 px-10 text-xl font-bold text-white hover:bg-yellow-400"
              disabled={!!loading || !isComplete}
            >
              {loading ? loading : 'Donate'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
