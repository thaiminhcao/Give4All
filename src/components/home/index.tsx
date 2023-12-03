import ActiveLink from '@/components/ui/links/active-link';

export default function Home() {
  return (
    <>
      <div className="pt-8 text-sm">
        <div className="mx-auto w-full max-w-2xl p-5 pt-4 xs:p-6 xs:pt-5">
          <h2 className="flex justify-center text-4xl font-medium text-cyan-700 lg:text-8xl">
            Do Something
          </h2>
          <h2 className="flex justify-center text-4xl font-medium text-cyan-700 lg:text-8xl">
            Better Now
          </h2>
          <p className="flex justify-center pt-8 text-lg text-gray-500">
            Supporting Charitable Initiatives that Create Lasting Change and
            Uplift
          </p>
          <p className="flex justify-center text-lg text-gray-500">
            Lives in Communities Across the Globe
          </p>
          <div className="flex justify-center gap-10 p-6 xs:mt-8">
            <ActiveLink href="/join-now">
              <button className="rounded-lg bg-yellow-500 p-1 px-10 text-xl font-bold text-white">
                Join Now
              </button>
            </ActiveLink>
            <ActiveLink href="/explore">
              <button className="rounded-lg border-2 border-cyan-700 p-1 px-8 text-xl font-bold text-cyan-700">
                Explore
              </button>
            </ActiveLink>
          </div>
        </div>
      </div>
    </>
  );
}
