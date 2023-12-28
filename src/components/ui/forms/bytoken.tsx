import React, { useState } from 'react';
import Input from '@/components/ui/forms/input';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useContractSend } from '@/lib/contract/useContractWrite';
import { useAccount } from 'wagmi';
import { utils } from 'web3';

export default function BuyTokenForm() {
  const [amountToken, setAmount] = useState(0);
  const [loading, setLoading] = useState('');
  const { push } = useRouter();
  const { address } = useAccount();

  const weiAmount = utils.toWei(amountToken.toString(), 'ether');

  const clearForm = () => {
    setAmount(0);
  };
  const isComplete = () => {
    return true;
  };
  const { writeAsync: createProject } = useContractSend(
    'buyToken',
    [],
    BigInt(weiAmount)
  );
  const handleCreateProject = async () => {
    setLoading('Buying...');
    if (!isComplete()) throw new Error('Please fill all fields');
    if (!createProject) {
      throw 'Failed to buy token. Please try again.';
    }
    // Create the project by calling the write project function on the contract
    const purchaseTx = await createProject();
    setLoading('Waiting...');
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
        pending: 'Buying token...',
        success: 'Buy token successfully',
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
            BUY TOKEN
          </h1>
          <div className="h-px w-96 border border-black"></div>

          <div className="mx-auto w-full pt-4">
            <h2 className="text-xl font-bold lg:text-2xl">Buy GFA token</h2>
            <p className="relative mb-2 text-gray-500">
              Input ETH for buying GFA token.
            </p>
            <Input
              onChange={(e) => {
                setAmount(Number(e.target.value));
              }}
              placeholder="0.1 ETH = 1000 GFA"
              inputClassName="spin-button-hidden"
            />
          </div>

          <div className="flex w-full justify-center gap-10 p-6 xs:mt-8">
            <button
              type="submit"
              onSubmit={addProject}
              className="w-full rounded-lg bg-yellow-500 p-1 px-10 text-xl font-bold text-white hover:bg-yellow-400"
              disabled={!!loading || !isComplete}
            >
              {loading ? loading : 'Buy token'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
