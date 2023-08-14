import { Star } from '@/components/icons/star-icon';
import { useModal } from '@/components/modal-views/context';
import { useContractCalls } from '@/lib/contract/useContractReads';
import { Project, GetRates, Donations } from '@/types';
import { useRouter } from 'next/router';
import React from 'react';

export default function ProjectDetails() {
  const { openModal } = useModal();

  //get id from params
  const router = useRouter();
  const { id } = router.query;
  const getProject = useContractCalls(["getProject", "getRates", "getDonations", "getDenials"], [Number(id)]) ?? [];

  // Cancel render UI when projects do not exist or have error occurred.
  if (!getProject
    || !getProject[0].data
    || !getProject[1].data
    || !getProject[2].data
    || !getProject[3].data
    || !getProject[0].data[0].result
    || !getProject[1].data[0].result
    || !getProject[2].data[0].result
    || !getProject[3].data[0].result
    || getProject[0].error
    || getProject[1].error
    || getProject[2].error
    || getProject[3].error
  ) {
    return;
  }
  const project = getProject[0].data[0].result as Project;

  // make address shorter and create percentage raised
  const shortenAddress = (address: string) => {
    return address.slice(0, 6) + "..." + address.slice(-4);
  };
  const percentRaised = Number(project.balanceOf / project.raised) * 100;
  const displayPercenRaised = (percentRaised <= 100 ? percentRaised : 100) + "%";

  // get top 5 users with the highest score
  const daysLeft = Math.round((Number(project.expiresAt) - (Date.now() / 1000)) / 86400)
  const rates = getProject[1].data[0].result as GetRates[] ?? [];
  const sortedData = [...rates].sort((a, b) => b.score - a.score);
  const top5Users = sortedData.slice(0, 5).map(item => item.user);

  // get number of supporters
  const supporters = getProject[2].data[0].result.length;

  //get denials
  const denials = getProject[3].length ?? 0;
  return (
    <>
      <div className="text-black text-4xl font-semibold mb-4 ">
        Project Details
      </div>
      <div className="pt-8 flex-nowrap justify-items-start w-full">
        <div className="flex flex-nowrap ">

          <div className="w-3/5 h-auto rounded-lg mr-4">
            <img className="w-full h-full" src={project.imageURL} />
          </div>

          <div className="w-3/5 p-5 pt-4 xs:p-6 xs:pt-5 space-y-4 ml-40">
            <div className="w-44 h-11 bg-cyan-700 rounded text-center text-white text-2xl font-semibold justify-center">{project.tags}</div>
            <div className="flex flex-col">
              <h1 className="w-24 text-black text-base font-semibold">
                {shortenAddress(project.owner)}
              </h1>
              <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/50x50" />
              <div className="UCalendarAlt w-6 h-6 relative" />
            </div>
            <div className="w-96 text-black text-4xl font-semibold">{project.title}</div>
            <div className="grid grid-cols-3 gap-x-16">
              <div className="w-36 h-32 bg-cyan-100 rounded ">
                <h1 className='text-center text-black  font-normal justify-center text-3xl mt-8'>{daysLeft}</h1>
                <h1 className='text-center text-black text-sm font-normal  justify-center'>Days Left</h1>

              </div>

              <div className="w-36 h-32 bg-cyan-100 rounded ">
                <h1 className='text-center text-black  font-normal  justify-center text-3xl mt-8'>{supporters}</h1>
                <h1 className='text-center text-black text-sm font-normal  justify-center '>Supporters</h1>

              </div>
              <div className="w-36 h-32 bg-cyan-100 rounded ">
                <h1 className='text-center text-black text-3xl font-normal  justify-center mt-8'>{denials}</h1>
                <h1 className='text-center text-black text-sm font-normal  justify-center'>Opponents</h1>

              </div>
            </div>
            <div className="flex">

              <h1 className="w-32 text-black text-xl font-semibold">Raised of</h1>
              <h1 className="w-32 text-black text-xl font-semibold">{project.raised.toString()}</h1>
            </div>
            <div className="mt-2 w-full bg-white rounded-full h-1 border border-cyan-700 dark:bg-gray-700">
              <div className="bg-cyan-700 h-full rounded-full" style={{ width: displayPercenRaised }}></div>
            </div>
            <div className="flex gap-x-8">
              <button
                className="Rectangle60 w-36 h-10 bg-yellow-500 rounded-lg"
                onClick={() => openModal('DONATION_VIEW')}
              >
                Donate
              </button>
              <button
                className="Rectangle60 w-36 h-10 bg-yellow-500 rounded-lg"
                onClick={() => openModal('DENY_VIEW')}
              >
                Deny
              </button>

            </div>

          </div>
          <div className='ml-40 w-2/5 h-96'>
            <div className=" bg-white rounded-lg border border-cyan-700 text-center text-black text-2xl font-semibold ">
              TOP RATED
              <div className="flex pt-5 ml-6 mr-4 ">
                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/50x50" />

                <h1 className='text-black text-base font-semibold pl-3 pt-3'> {top5Users[0]} </h1>
              </div>
              <div className=" flex pt-5 ml-6 mr-4">
                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/50x50" />

                <h1 className='text-black text-base font-semibold pl-3 pt-3'> {top5Users[1]}</h1>
              </div>
              <div className="flex pt-5 ml-6 mr-4">
                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/50x50" />

                <h1 className='text-black text-base font-semibold pl-3 pt-3'>{top5Users[2]}</h1>
              </div>
              <div className=" flex pt-5 ml-6 mr-4">
                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/50x50" />

                <h1 className='text-black text-base font-semibold  pl-3 pt-3'>{top5Users[3]}</h1>
              </div>
              <div className=" flex pt-5 ml-6 mr-4 mb-8">
                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/50x50" />

                <h1 className='text-black text-base font-semibold pl-3 pt-3'>{top5Users[4]}</h1>
              </div>
            </div>
            <div className="mt-14 flex flex-nowrap">
              <h1 className="text-black text-3xl font-semibold">Rating</h1>
              <Star className="h-auto w-3.5 sm:w-auto ml-4" />
              <Star className="h-auto w-3.5 sm:w-auto ml-4" />
              <Star className="h-auto w-3.5 sm:w-auto ml-4" />
              <Star className="h-auto w-3.5 sm:w-auto ml-4" />
              <Star className="h-auto w-3.5 sm:w-auto ml-4" />
            </div>
          </div>

        </div>
      </div>
      <div className="pt-8 flex-nowrap justify-items-start w-full mt-10">
        <div className="flex flex-nowrap ">
          <h1 className="w-auto text-black text-3xl font-semibold">Best Project In 2023</h1>
        </div>

        <div className='flex flex-nowrap'>
          <div className='w-4/5 h-auto'>
            <h1 className="w-4/5 text-black text-base font-normal mt-4">
              {project.description}
            </h1>
            <img className="w-4/5 rounded-lg" src={project.imageURL} />
          </div>
          <div className="w-2/5">
            <div className=" bg-white rounded-lg border border-cyan-700 text-center text-black text-2xl font-semibold mt-8">

              <div className="flex pt-5 ml-6 mr-4">
                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/50x50" />
                <div className='bg-gray-100 rounded-lg p-3 mb-2'>
                  <h1 className='text-black text-base font-semibold text-left'>Harry Jame</h1>
                  <p className='text-gray-700 text-sm'>Comment something</p>
                </div>
              </div>
              <div className=" flex pt-5 ml-6 mr-4">
                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/50x50" />

                <div className='bg-gray-100 rounded-lg p-3 mb-2'>
                  <h1 className='text-black text-base font-semibold text-left'>Nancy Shin</h1>
                  <p className='text-gray-700 text-sm'>Comment something</p>
                </div>
              </div>
              <div className="flex pt-5 ml-6 mr-4">
                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/50x50" />
                <div className='bg-gray-100 rounded-lg p-3 mb-2'>
                  <h1 className='text-black text-base font-semibold text-left'>Robert Johsua</h1>
                  <p className='text-gray-700 text-sm break-words text-left'>Comment something âcc âcc âccac âcca âcc âcc âcc âcca âcca âccac âccaca âccac adasdas đâsd đâsd đâsda adsasdas ádasda ádasdasd ádasdasd ádasdasd ádasdass</p>
                </div>
              </div>

              <div className=" flex pt-5 ml-6 mr-4">
                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/50x50" />
                <div className='bg-gray-100 rounded-lg p-3 mb-2'>
                  <h1 className='text-black text-base font-semibold text-left'>Tail Black</h1>
                  <p className='text-gray-700 text-sm'>Comment something</p>
                </div>
              </div>
              <div className=" flex pt-5 ml-6 mr-4 mb-8">
                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/50x50" />

                <div className='bg-gray-100 rounded-lg p-3 mb-2'>
                  <h1 className='text-black text-base font-semibold text-left'>Tail Black</h1>
                  <p className='text-gray-700 text-sm'>Comment something</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  );
}
