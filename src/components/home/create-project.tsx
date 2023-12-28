import Input from '@/components/ui/forms/input';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useAccount } from 'wagmi';
import CustomButton from '../ui/button/custom-button';

export default function CreateProject() {
  const { isConnected } = useAccount();
  const router = useRouter();
  return (
    <>
      <div className="pt-8 text-sm">
        <div className="mx-auto w-full max-w-2xl p-5 pt-4 xs:p-6 xs:pt-5">
          <h2 className="flex justify-center text-3xl font-bold lg:text-6xl">
            Create Project
          </h2>
          <p className="flex justify-center pt-4 text-lg text-gray-500">
            Inspiring Transparency and Building a Better Future Together
          </p>
        </div>
        <div className="mx-auto mb-8 w-full max-w-3xl rounded-lg border-2 border-blue-200 p-12">
          <h2 className="text-2xl font-bold lg:text-4xl">
            Let's get you started
          </h2>
          <p className="relative mb-2 pt-8 text-gray-500">
            Name of Project (You can change later)
          </p>
          <Input
            placeholder="Project name"
            inputClassName="spin-button-hidden"
          />
          <div className="flex justify-center gap-10 p-6 xs:mt-8">
            <CustomButton
              title="Begin"
              style="yellow"
              handlerClick={() => {
                isConnected
                  ? router.push('/create-project-form')
                  : toast.warn('Please connect wallet');
              }}
            />
            <CustomButton title="Maybe Later" style="cyan" />
          </div>
        </div>
      </div>
    </>
  );
}
