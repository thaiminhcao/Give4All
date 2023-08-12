import Slider from "@/components/ui/slider"
import Card from "../ui/card";
import { Project } from "@/types";
import { useContractCall } from "@/lib/contract/useContractRead";
import { useRouter } from 'next/navigation';
export default function ProjectList() {
  const projects: Project[] = useContractCall("getProjects").data as Project[];
  const { push } = useRouter();
  const handleNavigate = (id: number) => {
    push(`/project-details/?id=${id}`);
  };

  return (
    <div className="mx-auto w-full p-5 pt-4 xs:p-6 xs:pt-5 max-w-5xl">
      <h2 className="text-center text-cyan-700 text-6xl font-bold">
        Explore Our Projects
      </h2>
      <p className="mt-7 text-center text-zinc-500 text-xl font-normal">
        Discover the Beauty of Charitable Endeavors
      </p>

      <Slider options={{ align: "center" }}>
        {projects.map((project, i) => (
          <div
            key={i}
            className="pl-1 flex-[0_0_90%] md:flex-[0_0_30%]"
            onClick={() => handleNavigate(Number(project.id))}
          >
            <Card {...project} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
