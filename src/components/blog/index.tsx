import sortDataByProjectList from '@/helper';
import ChatCard from '../ui/chat-card';
import useBlog from './useBlog';
export default function Blog() {
  const { data, projectList } = useBlog();
  const result = sortDataByProjectList(projectList ?? [], data as []);
  return (
    <>
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <h2 className="text-center text-6xl font-bold text-cyan-700">
          Give4All Blog
        </h2>
        {projectList?.map((item, index) => (
          <ChatCard
            getProjects={result?.get(item)}
            address={item}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
