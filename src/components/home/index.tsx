export default function Home() {
  return (
    <>
    <div className="pt-8 text-sm xl:pt-10">
      <div className="mx-auto w-full p-5 pt-4 xs:p-6 xs:pt-5 max-w-2xl">
          <h2 className="text-cyan-700 font-medium lg:text-8xl text-4xl flex justify-center">
            Do Something 
          </h2>
          <h2 className="text-cyan-700 font-medium lg:text-8xl text-4xl flex justify-center">
            Better Now
          </h2>
          <p className="pt-8 text-gray-500 flex justify-center text-lg">
            Supporting Charitable Initiatives that Create Lasting Change and Uplift 
          </p>
          <p className="text-gray-500 flex justify-center text-lg">
            Lives in Communities Across the Globe
          </p>
          <div className="p-6 flex gap-10 xs:mt-8 justify-center">
            <button className="rounded-lg text-white p-1 px-10 bg-yellow-500 text-xl font-bold">Join Now</button>
            <button className="rounded-lg text-cyan-700 p-1 px-8 border-cyan-700 border-2 text-xl font-bold">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}
