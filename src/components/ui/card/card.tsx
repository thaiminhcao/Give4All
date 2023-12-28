import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import { useRouter } from 'next/navigation';
const Card = (props: Project) => {
  const percentRaised = (Number(props.balanceOf) / Number(props.raised)) * 100;
  const displayPercenRaised =
    (percentRaised <= 100 ? percentRaised : 100) + '%';

  const [hasCategory, setHasCategory] = useState(false);
  const [project, setProject] = useState<Project>(props);

  useEffect(() => {
    setProject(props);

    if (project.tags[0]) {
      setHasCategory(true);
    }
  }, []);

  const shortenAddress = (address: string) => {
    return address.slice(0, 6) + '...' + address.slice(-4);
  };

  const convertTimestampToDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) * 1000);
    const day = date.getDate();
    const year = date.getFullYear();
    const monthName = date.toLocaleString('default', { month: 'long' });

    return `${day} ${monthName} ${year}`;
  };

  const weiToEth = (wei: bigint) => {
    const ether = Number(wei) / 10 ** 18; // 1 ether = 10^18 wei
    const formattedEther = ether.toFixed(4); // Format to 4 decimal places
    return parseFloat(formattedEther);
  };
  const { push } = useRouter();
  const handleNavigate = (id: number) => {
    push(`/project-details/?id=${id}`);
  };
  return (
    <div
      className="flex w-72 flex-col items-center"
      onClick={() => handleNavigate(Number(props.id))}
      style={{ cursor: 'pointer' }}
    >
      <Image
        className="h-52 w-72 rounded-tl-lg rounded-tr-lg border border-b-0 border-cyan-700"
        src={project.imageURL}
        width={325}
        height={213}
        alt={project.title}
      />
      <div className="w-72 rounded-bl-lg rounded-br-lg border border-t-0 border-cyan-700 bg-white p-3">
        {hasCategory ? (
          <div className="mb-4 w-fit rounded bg-cyan-700 px-3 text-center text-base font-semibold text-white">
            {project.tags[0]}
          </div>
        ) : (
          <div className="mb-4 w-fit rounded px-3 text-center text-base font-semibold text-white">
            _
          </div>
        )}
        <div className="mb-2 flex items-center">
          <Image
            className="h-6 w-6 rounded-full"
            src="https://randomuser.me/api/portraits/men/48.jpg"
            width={25}
            height={25}
            alt={project.owner}
          />
          <div className="ml-4 text-xs font-semibold text-zinc-500">
            {shortenAddress(project.owner)}
          </div>
        </div>
        <div className="mt-4 text-xs font-semibold text-black">
          {project.title}
        </div>
        <div className="mt-7 flex flex-row justify-between">
          <div className="text-xs font-medium text-stone-300">Raised of</div>
          <div className="ml-2 text-xs font-medium text-black">
            {weiToEth(project.raised)}
          </div>
          <div className="ml-auto text-xs font-medium text-black">
            {convertTimestampToDate(project.createAt)}
          </div>
        </div>
        <div className="mt-2 h-1 w-full rounded-full border border-cyan-700 bg-white dark:bg-gray-700">
          <div
            className="h-full rounded-full bg-cyan-700"
            style={{ width: displayPercenRaised }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Card;
