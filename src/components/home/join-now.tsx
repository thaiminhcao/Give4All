import JoinNowBanner from '@/assets/images/join_now_banner.png';
import Image from '@/components/ui/image';
import { LongArrowUp } from '@/components/icons/long-arrow-up';
import ActiveLink from '@/components/ui/links/active-link';

export default function JoinNow() {
    return (
      <>
        <div className="mx-auto w-full p-5 pt-4 xs:p-6 xs:pt-5 flex flex-row max-w-6xl">
            {/* Left */}
            <div className='pt-10 w-8/12'>
              <div className="divide-y divide-black">
                <div className="flex flex-row">
                  <div className='w-8/12'>
                    <h2 className="text-cyan-700 font-black lg:text-6xl text-3xl">
                      Support
                    </h2>
                    <p className="py-8 text-gray-500 text-lg">Users contribute funds to charitable causes.</p>
                  </div>
                  <div className="w-4/12">
                    <button className="rounded-full text-cyan-700 py-2 border-cyan-700 border-2 hover:bg-cyan-700 hover:text-white">
                      <LongArrowUp
                        className="h-12 w-16 rotate-90"
                      />
                    </button>
                  </div>
                </div>
                <div className="flex flex-row pt-10">
                  <div className='w-8/12'>
                    <h2 className="text-cyan-700 font-black lg:text-6xl text-3xl">
                      Create
                    </h2>
                    <p className="pt-8 text-gray-500 text-lg">Users set up fundraising campaigns to support others in need.</p>
                  </div>
                  <div className="w-4/12">
                    <ActiveLink  href="/create-project">
                      <button className="rounded-full text-cyan-700 py-2 border-cyan-700 border-2 hover:bg-cyan-700 hover:text-white">
                        <LongArrowUp
                          className="h-12 w-16 rotate-90"
                        />
                      </button>
                    </ActiveLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className='w-4/12'>
              <Image
                src={JoinNowBanner}
                alt="Banner image"
              />
            </div>
          </div>
      </>
    );
  }
  