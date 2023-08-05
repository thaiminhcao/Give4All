import ActiveLink from '@/components/ui/links/active-link';
export default function Project() {
    return (
        <>
            <div className="">
                <ActiveLink href="/project-details">
                    <button className="rounded-lg text-white p-1 px-10 bg-yellow-500 text-xl font-bold">Project-Details</button>
                </ActiveLink>
            </div>
        </>
    );
}