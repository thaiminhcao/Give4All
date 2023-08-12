import React from 'react';

export default function DonationForm() {
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [moreInfo, setMoreInfo] = useState('');
    // const [comment, setComment] = useState('');
    // const userData = {
    //     username,
    //     email,
    //     moreInfo,
    //     comment
    // };
    return (
        <div className="relative z-50  bg-white rounded-lg justify-items-center ">
            <form action="" className="  p-8">
                <div className="grid space-y-2 w-96 h-full bg-white bg-opacity-30">
                    <h1 className="text-black text-4xl font-bold text-center">DONATION FORM</h1>
                    <div className="w-96 h-px border border-black"></div>
                    <label htmlFor="username" className="text-black text-2xl font-medium">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="username"
                        // value={username}
                        // onChange={e => setUsername(e.target.value)}
                        className="w-96 h-12 bg-neutral-100 rounded py-2"
                        placeholder="Enter your name"
                    />
                    <label htmlFor="email" className="text-black text-2xl font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        // value={email}
                        // onChange={e => setEmail(e.target.value)}
                        className="w-96 h-12 bg-neutral-100 rounded py-2"
                        placeholder="Enter your email"
                    />
                    <label htmlFor="moreInfo" className="text-black text-2xl font-medium">
                        More Info
                    </label>
                    <input
                        type="text"
                        id="moreInfo"
                        name="moreInfo"
                        // value={moreInfo}
                        // onChange={e => setMoreInfo(e.target.value)}
                        className="w-96 h-12 bg-neutral-100 rounded py-2"
                        placeholder="About yourself"
                    />
                    <label htmlFor="comment" className="text-black text-2xl font-medium">
                        Comment
                    </label>
                    <input
                        type="text"
                        id="comment"
                        name="comment"
                        // value={comment}
                        // onChange={e => setComment(e.target.value)}
                        className="w-96 h-60 bg-neutral-100 rounded py-2 "
                        placeholder="Comment something..."
                    />
                    <button type="submit" className="w-auto h-10 bg-yellow-500 rounded hover:bg-yellow-600">
                        Process to pay
                    </button>
                </div>
            </form>
        </div>


    );
}
