import React, { useState } from 'react';
import Input from '@/components/ui/forms/input';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useContractSend } from '@/lib/contract/useContractWrite';
export default function DonationForm() {
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState("");
    const { push } = useRouter();
    const router = useRouter();
    const { id } = router.query;
    const clearForm = () => {
        setComment("");
    };
    const isComplete = () => {
        if (comment.trim() == '' || comment.length < 10) {
            toast.warn("Please enter valid comment (more than 10 characters & not only whitespace")
            return false;
        }
        return true
    }
    const { writeAsync: createProject } = useContractSend("donation", [
        id,
        comment,
    ]);

    const handleCreateProject = async () => {
        setLoading("Donating...");
        if (!isComplete()) throw new Error("Please fill all fields");
        if (!createProject) {
            throw "Failed to deny";
        }
        // Create the project by calling the writeproject function on the contract
        const purchaseTx = await createProject();
        setLoading("Waiting for confirmation...");
        // Wait for the transaction to be mined
        await new Promise(resolve => setTimeout(resolve, 5000));
        // Clear the Input fields after the project is added
        clearForm();
    };
    const addProject = async (e: any) => {
        e.preventDefault();
        try {
            // Display a notification while the project is being added
            await toast.promise(handleCreateProject(), {
                pending: "Creating project...",
                success: "project created successfully",
            });
            // redirect to thank you page
            await new Promise(resolve => setTimeout(resolve, 2000));
            push('/thank-you')
            // Display an error message if something goes wrong
        } catch (e: any) {
            console.log({ e });
            toast.error(e?.message || "Something went wrong. Try again.");
            // Clear the loading state after the project is added
        } finally {
            setLoading("");
        }
    }
    return (
        <div className="relative z-50  bg-white rounded-lg justify-items-center ">
            <form onSubmit={addProject} className="  p-8">
                <div className="grid space-y-2 w-96 h-full bg-white bg-opacity-30">
                    <h1 className="text-black text-4xl font-bold text-center">DONATION FORM</h1>
                    <div className="w-96 h-px border border-black"></div>
                    <div className="mx-auto w-full pt-4">
                        <label htmlFor="username" className="text-black text-2xl font-medium">
                            Name
                        </label>
                        <Input
                            inputClassName="spin-button-hidden"
                            className="w-96 h-12 bg-neutral-100 rounded py-2"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="mx-auto w-full pt-4">
                        <label htmlFor="email" className="text-black text-2xl font-medium">
                            Email
                        </label>
                        <Input
                            inputClassName="spin-button-hidden"
                            className="w-96 h-12 bg-neutral-100 rounded py-2"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="mx-auto w-full pt-4">
                        <label htmlFor="email" className="text-black text-2xl font-medium">
                            Donation
                        </label>
                    </div>

                    <div className="mx-auto w-full pt-4">
                        <label htmlFor="moreInfo" className="text-black text-2xl font-medium">
                            More Info
                        </label>
                        <Input
                            inputClassName="spin-button-hidden"
                            className="w-96 h-12 bg-neutral-100 rounded py-2"
                            placeholder="About yourself"
                        />
                    </div>

                    <div className="mx-auto w-full pt-4">
                        <label htmlFor="comment" className="text-black text-2xl font-medium">
                            Comment
                        </label>
                        <Input
                            value={comment}
                            onChange={(e) => {
                                setComment(e.target.value);
                            }}
                            inputClassName="spin-button-hidden"
                            className="w-96 h-12 bg-neutral-100 rounded py-2"
                            placeholder="Comment something..."
                        />
                    </div>

                    <div className="p-6 flex gap-10 xs:mt-8 justify-center w-full">
                        <button type="submit"
                            onSubmit={addProject}
                            className="rounded-lg w-full text-white p-1 px-10 bg-yellow-500 text-xl font-bold hover:bg-yellow-400"
                            disabled={!!loading || !isComplete}
                        >{loading ? loading : "Donate"}
                        </button>
                    </div>

                </div>
            </form>
        </div>


    );
}