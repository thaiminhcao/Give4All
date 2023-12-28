import ActiveLink from '@/components/ui/links/active-link';
import CustomButton from '../ui/button/custom-button';

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
              <CustomButton style="yellow" title="Join Now" />
            </ActiveLink>
            <ActiveLink href="/explore">
              <CustomButton title="Explore" style="cyan" />
            </ActiveLink>
          </div>
        </div>
      </div>
    </>
  );
}
