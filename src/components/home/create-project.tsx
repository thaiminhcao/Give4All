import ActiveLink from '@/components/ui/links/active-link';
import Input from '@/components/ui/forms/input';

export default function CreateProject() {
    return (
      <>
      <div className="pt-8 text-sm">
          <div className="mx-auto w-full p-5 pt-4 xs:p-6 xs:pt-5 max-w-2xl">
            <h2 className="font-bold lg:text-6xl text-3xl flex justify-center">
              Create Project
            </h2>
            <p className="pt-4 text-gray-500 flex justify-center text-lg">
              Inspiring Transparency and Building a Better Future Together
            </p>
          </div>
          <div className="mx-auto w-full p-12 max-w-3xl mb-8 border-2 border-blue-200 rounded-lg">
            <h2 className="font-bold lg:text-4xl text-2xl">
              Let's get you started
            </h2>
            <p className="relative pt-8 text-gray-500 mb-2">
              Name of Project (You can change later)
            </p>
            <Input
              placeholder="Project name"
              inputClassName="spin-button-hidden"
            />
            <div className="p-6 flex gap-10 xs:mt-8 justify-center">
              <ActiveLink  href="/create-project-form">
                <button className="rounded-lg text-white p-1 px-10 bg-yellow-500 text-xl font-bold hover:bg-yellow-400">Begin</button>
              </ActiveLink>
              <button className="rounded-lg text-cyan-700 p-1 px-8 bg-cyan-100 text-xl font-bold hover:bg-cyan-200">Maybe Later</button>
            </div>
          </div>
      </div>
      </>
    );
  }
  