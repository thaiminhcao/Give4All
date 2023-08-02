import ActiveLink from '@/components/ui/links/active-link';

export default function Project() {
  return (
    <>
      <div className="pt-8 flex flex-col">

        <div className="text-black text-4xl font-semibold mb-4">
          Project Details
        </div>

        <div className="flex flex-wrap">

          <div className="w-96 h-96 rounded-lg mr-4">
            <img className="w-full h-full" src="https://via.placeholder.com/580x606" />
          </div>

          <div className="mx-auto max-w-2xl p-5 pt-4 xs:p-6 xs:pt-5 space-y-4">
            <div className="w-44 h-11 bg-cyan-700 rounded text-center text-white text-2xl font-semibold justify-center" >Education</div>
            <div className='grid grid-cols-2'>
              <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/50x50" />
              <div className="UCalendarAlt w-6 h-6 relative" />
            </div>
            <div className="grid grid-cols-3 gap-x-4">
              <h1 className="w-36 h-32 bg-cyan-100 rounded text-center text-black text-sm font-normal flex items-center justify-center">
                Days Left
              </h1>
              <h1 className="w-36 h-32 bg-cyan-100 rounded text-center text-black text-sm font-normal flex items-center justify-center">
                Supporters
              </h1>
              <h1 className="w-36 h-32 bg-cyan-100 rounded text-center text-black text-sm font-normal flex items-center justify-center">
                Opponents
              </h1>
            </div>
            <div className="flex">
              <h1 className="w-32 text-black text-xl font-semibold">Raised of</h1>
              <h1 className="w-32 text-black text-xl font-semibold">45,000,000</h1>
            </div>
            <div className="w-96 h-1 bg-white rounded-sm border border-cyan-700" />
            <div className="flex">
              <button className="Rectangle60 w-36 h-10 bg-yellow-500 rounded-lg">Donate</button>
              <button className="Rectangle61 w-36 h-10 bg-white rounded-lg border border-cyan-700 ml-4">Deny</button>
            </div>
          </div>

          <div className='grid grid-cols-3 ' style={{ marginTop: '100px' }}>
            <div className='grid grid-cols-2 col-span-2'>
              <div >
                <h1 className="w-96 text-black text-3xl font-semibold"> Best Project In 2023</h1>

                <h1 className="w-full text-black text-base font-normal " style={{ marginTop: '20px' }}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corp oris suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illume.
                </h1>
              </div>
            </div>
            <div className='grid grid-cols-1 '>
              <h1>hihi</h1>
            </div>
          </div>

        </div>
      </div>

    </>
  );
}
