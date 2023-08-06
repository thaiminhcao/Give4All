import ActiveLink from '@/components/ui/links/active-link';
import Input from '@/components/ui/forms/input';
import { LongArrowUp } from '@/components/icons/long-arrow-up';
import Textarea from '@/components/ui/forms/textarea';

export default function CreateProjectForm() {
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
          <div className="mx-auto w-full">
            <h2 className="font-bold lg:text-2xl text-xl">
              Project name
            </h2>
            <p className="relative text-gray-500 mb-2">
              What are you calling it
            </p>
            <Input
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
              Donation limit
            </h2>
            <p className="relative text-gray-500 mb-2">
              The maximum amount is 100 dollars. If you wish to donate more, you need to be verified through our system.
            </p>
            <Input
              placeholder="1 ETH"
              inputClassName="spin-button-hidden"
            />
          </div>
          <div className="mx-auto w-full pt-4">
            <h2 className="font-bold lg:text-2xl text-xl">
              Expiry date
            </h2>
            <p className="relative text-gray-500 mb-2">
              The desired time to end the project.
            </p>
            <Input
              placeholder="Date"
              inputClassName="spin-button-hidden"
            />
          </div>
          <div className="mx-auto w-full pt-4">
            <h2 className="font-bold lg:text-2xl text-xl">
              Tag
            </h2>
            <p className="relative text-gray-500 mb-2">
              Categorizing projects into relevant fields
            </p>
            <Input
              placeholder="Tag"
              inputClassName="spin-button-hidden"
            />
          </div>
          <div className="p-6 flex gap-10 xs:mt-8 justify-center">
            <ActiveLink href="/thank-you">
              <button className="rounded-lg text-white p-1 px-10 bg-yellow-500 text-xl font-bold hover:bg-yellow-400">Public</button>
            </ActiveLink>
          </div>
      </div>
      </>
    );
  }
  