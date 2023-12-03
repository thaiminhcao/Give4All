import { Star } from '@/components/icons/star-icon';
import { useModal } from '@/components/modal-views/context';
import { useContractCalls } from '@/lib/contract/useContractReads';
import { Project, GetRates, Donations } from '@/types';
import { useRouter } from 'next/router';
import React from 'react';
import PineChart from '../ui/charts/pine-chart';
import sortDataByProjectList from '@/helper';

export default function ProjectDetails() {
  const { openModal } = useModal();

  //get address from params
  const router = useRouter();
  const { address }: any = router.query;
  const functionName = [
    'title',
    'description',
    'imageURL',
    'raised',
    'expiresAt',
    'status',
    // 'supporters',
    // 'denials',
  ];
  const abi = 'project';
  const getProject = useContractCalls({
    functionName,
    abi,
    address: address,
  });
  console.log(getProject, 'getProject');
  const data = getProject?.map((item) => item.result) ?? [];
  const result = sortDataByProjectList(address ?? [], data as []);
  // Cancel render UI when projects do not exist or have error occurred.
  if (!getProject) {
    return;
  }
  // make address shorter and create percentage raised
  const shortenAddress = (address: string) => {
    return address.slice(0, 6) + '...' + address.slice(-4);
  };

  const title = result.get(address)?.title;
  const description = result.get(address)?.description;
  const imageURL = result.get(address)?.imageURL;
  const raised = result.get(address)?.raised;
  const expiresAt = result.get(address)?.expiresAt;

  // const percentRaised = Number(project.balanceOf / project.raised) * 100;
  // const displayPercenRaised = (percentRaised <= 100 ? percentRaised : 100) + "%";

  // get top 5 users with the highest score
  const daysLeft = Math.round((Number(expiresAt) - Date.now() / 1000) / 86400);
  // const rates = getProject[1].data[0].result as GetRates[] ?? [];
  // const sortedData = [...rates].sort((a, b) => b.score - a.score);
  // const top5Users = sortedData.slice(0, 5).map(item => item.user);

  // get number of supporters
  const supporters = result.get(address)?.supporters ?? 0;

  //get denials
  const denials = result.get(address)?.denials ?? 0;
  return (
    <>
      <div className="mb-4 text-4xl font-semibold text-black ">
        Project Details
      </div>
      <div className="w-full flex-nowrap justify-items-start pt-8">
        <PineChart />
        <div className="flex flex-nowrap ">
          <div className="mr-4 h-auto w-3/5 rounded-lg">
            <img className="h-full w-full" src={imageURL} />
          </div>

          <div className="ml-40 w-3/5 space-y-4 p-5 pt-4 xs:p-6 xs:pt-5">
            <div className="flex flex-col">
              <h1 className="w-24 text-base font-semibold text-black">
                {shortenAddress(address)}
              </h1>
              <img
                className="h-12 w-12 rounded-full"
                src="https://via.placeholder.com/50x50"
              />
              <div className="UCalendarAlt relative h-6 w-6" />
            </div>
            <div className="w-96 text-4xl font-semibold text-black">
              {title}
            </div>
            <div className="grid grid-cols-3 gap-x-16">
              <div className="h-32 w-36 rounded bg-cyan-100 ">
                <h1 className="mt-8 justify-center  text-center text-3xl font-normal text-black">
                  {daysLeft}
                </h1>
                <h1 className="justify-center text-center text-sm font-normal  text-black">
                  Days Left
                </h1>
              </div>

              <div className="h-32 w-36 rounded bg-cyan-100 ">
                <h1 className="mt-8 justify-center  text-center  text-3xl font-normal text-black">
                  {supporters}
                </h1>
                <h1 className="justify-center text-center text-sm font-normal  text-black ">
                  Supporters
                </h1>
              </div>
              <div className="h-32 w-36 rounded bg-cyan-100 ">
                <h1 className="mt-8 justify-center text-center text-3xl  font-normal text-black">
                  {denials}
                </h1>
                <h1 className="justify-center text-center text-sm font-normal  text-black">
                  Opponents
                </h1>
              </div>
            </div>
            <div className="flex">
              <h1 className="w-32 text-xl font-semibold text-black">
                Raised of
              </h1>
              <h1 className="w-32 text-xl font-semibold text-black">
                {raised?.toString()}
              </h1>
            </div>
            <div className="mt-2 h-1 w-full rounded-full border border-cyan-700 bg-white dark:bg-gray-700">
              {/* <div className="bg-cyan-700 h-full rounded-full" style={{ width: displayPercenRaised }}></div> */}
            </div>
            <div className="flex gap-x-8">
              <button
                className="Rectangle60 h-10 w-36 rounded-lg bg-yellow-500"
                onClick={() => openModal('DONATION_VIEW')}
              >
                Donate
              </button>
              <button
                className="Rectangle60 h-10 w-36 rounded-lg bg-yellow-500"
                onClick={() => openModal('DENY_VIEW')}
              >
                Deny
              </button>
            </div>
          </div>
          <div className="ml-40 h-96 w-2/5">
            <div className=" rounded-lg border border-cyan-700 bg-white text-center text-2xl font-semibold text-black ">
              TOP RATED
              <div className="ml-6 mr-4 flex pt-5 ">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://via.placeholder.com/50x50"
                />

                <h1 className="pl-3 pt-3 text-base font-semibold text-black">
                  {' '}
                  {/* {top5Users[0]}{' '} */}
                </h1>
              </div>
              <div className=" ml-6 mr-4 flex pt-5">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://via.placeholder.com/50x50"
                />

                <h1 className="pl-3 pt-3 text-base font-semibold text-black">
                  {' '}
                  {/* {top5Users[1]} */}
                </h1>
              </div>
              <div className="ml-6 mr-4 flex pt-5">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://via.placeholder.com/50x50"
                />

                <h1 className="pl-3 pt-3 text-base font-semibold text-black">
                  {/* {top5Users[2]} */}
                </h1>
              </div>
              <div className=" ml-6 mr-4 flex pt-5">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://via.placeholder.com/50x50"
                />

                <h1 className="pl-3 pt-3 text-base  font-semibold text-black">
                  {/* {top5Users[3]} */}
                </h1>
              </div>
              <div className=" mb-8 ml-6 mr-4 flex pt-5">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://via.placeholder.com/50x50"
                />

                <h1 className="pl-3 pt-3 text-base font-semibold text-black">
                  {/* {top5Users[4]} */}
                </h1>
              </div>
            </div>
            <div className="mt-14 flex flex-nowrap">
              <h1 className="text-3xl font-semibold text-black">Rating</h1>
              <Star className="ml-4 h-auto w-3.5 sm:w-auto" />
              <Star className="ml-4 h-auto w-3.5 sm:w-auto" />
              <Star className="ml-4 h-auto w-3.5 sm:w-auto" />
              <Star className="ml-4 h-auto w-3.5 sm:w-auto" />
              <Star className="ml-4 h-auto w-3.5 sm:w-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full flex-nowrap justify-items-start pt-8">
        <div className="flex flex-nowrap ">
          <h1 className="w-auto text-3xl font-semibold text-black">
            Best Project In 2023
          </h1>
        </div>

        <div className="flex flex-nowrap">
          <div className="h-auto w-4/5">
            <h1 className="mt-4 w-4/5 text-base font-normal text-black">
              {description}
            </h1>
            <img className="w-4/5 rounded-lg" src={imageURL} />
          </div>
          <div className="w-2/5">
            <div className=" mt-8 rounded-lg border border-cyan-700 bg-white text-center text-2xl font-semibold text-black">
              <div className="ml-6 mr-4 flex pt-5">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://via.placeholder.com/50x50"
                />
                <div className="mb-2 rounded-lg bg-gray-100 p-3">
                  <h1 className="text-left text-base font-semibold text-black">
                    Harry Jame
                  </h1>
                  <p className="text-sm text-gray-700">Comment something</p>
                </div>
              </div>
              <div className=" ml-6 mr-4 flex pt-5">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://via.placeholder.com/50x50"
                />

                <div className="mb-2 rounded-lg bg-gray-100 p-3">
                  <h1 className="text-left text-base font-semibold text-black">
                    Nancy Shin
                  </h1>
                  <p className="text-sm text-gray-700">Comment something</p>
                </div>
              </div>
              <div className="ml-6 mr-4 flex pt-5">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://via.placeholder.com/50x50"
                />
                <div className="mb-2 rounded-lg bg-gray-100 p-3">
                  <h1 className="text-left text-base font-semibold text-black">
                    Robert Johsua
                  </h1>
                  <p className="break-words text-left text-sm text-gray-700">
                    Comment something âcc âcc âccac âcca âcc âcc âcc âcca âcca
                    âccac âccaca âccac adasdas đâsd đâsd đâsda adsasdas ádasda
                    ádasdasd ádasdasd ádasdasd ádasdass
                  </p>
                </div>
              </div>

              <div className=" ml-6 mr-4 flex pt-5">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://via.placeholder.com/50x50"
                />
                <div className="mb-2 rounded-lg bg-gray-100 p-3">
                  <h1 className="text-left text-base font-semibold text-black">
                    Tail Black
                  </h1>
                  <p className="text-sm text-gray-700">Comment something</p>
                </div>
              </div>
              <div className=" mb-8 ml-6 mr-4 flex pt-5">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://via.placeholder.com/50x50"
                />

                <div className="mb-2 rounded-lg bg-gray-100 p-3">
                  <h1 className="text-left text-base font-semibold text-black">
                    Tail Black
                  </h1>
                  <p className="text-sm text-gray-700">
                    Comment somethinggggggg
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
