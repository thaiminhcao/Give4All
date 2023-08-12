import Image from "next/image";
import { Project } from "@/types";
import { useRouter } from 'next/navigation';
const Card = (props: Project) => {
  const percentRaised = Number(props.balanceOf / props.raised) * 100;
  const displayPercenRaised = (percentRaised <= 100 ? percentRaised : 100) + "%";

  const shortenAddress = (address: string) => {
    return address.slice(0, 6) + "..." + address.slice(-4);
  };

  const convertTimestampToDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) * 1000);
    const day = date.getDate();
    const year = date.getFullYear();
    const monthName = date.toLocaleString("default", { month: "long" });

    return `${day} ${monthName} ${year}`;
  };

  const weiToEth = (wei: bigint) => {
    const ether = Number(wei) / 10 ** 18; // 1 ether = 10^18 wei
    const formattedEther = ether.toFixed(4); // Format to 4 decimal places
    return parseFloat(formattedEther);
  }
  const { push } = useRouter();
  const handleNavigate = (id: number) => {
    push(`/project-details/?id=${id}`);
  };
  return (
    <div className="flex flex-col items-center w-72" onClick={() => handleNavigate(Number(props.id))} style={{ cursor: "pointer" }}>
      <Image className="w-72 h-52 rounded-tl-lg rounded-tr-lg border border-b-0 border-cyan-700"
        src={props.imageURL}
        width={325}
        height={213}
        alt={props.title}
      />
      <div className="w-72 bg-white rounded-bl-lg rounded-br-lg border border-t-0 border-cyan-700 p-3" >
        {props.tags[0] ? (
          <div className="w-fit mb-4 text-center text-white text-base font-semibold bg-cyan-700 rounded px-3">{props.tags[0]}</div>
        ) : (
          <div className="w-fit mb-4 text-center text-white text-base font-semibold rounded px-3">_</div>
        )}
        <div className="flex items-center mb-2">
          <Image className="w-6 h-6 rounded-full"
            src="https://randomuser.me/api/portraits/men/48.jpg"
            width={25}
            height={25}
            alt={props.owner}
          />
          <div className="ml-4 text-zinc-500 text-xs font-semibold">{shortenAddress(props.owner)}</div>
        </div>
        <div className="text-black text-xs font-semibold mt-4">{props.title}</div>
        <div className="mt-7 flex flex-row justify-between">
          <div className="text-stone-300 text-xs font-medium">Raised of</div>
          <div className="ml-2 text-black text-xs font-medium">{weiToEth(props.raised)}</div>
          <div className="ml-auto text-black text-xs font-medium">{convertTimestampToDate(props.createAt)}</div>
        </div>
        <div className="mt-2 w-full bg-white rounded-full h-1 border border-cyan-700 dark:bg-gray-700">
          <div className="bg-cyan-700 h-full rounded-full" style={{ width: displayPercenRaised }}></div>
        </div>
      </div>
    </div>

  );
};
export default Card;
