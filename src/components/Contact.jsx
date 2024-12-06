import React from "react";
import Title from "./Title";

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
            <style>
                {`
                @keyframes gradientFlow {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }

                .gradient-flow {
                    background: linear-gradient(270deg, orange-400, purple-500);
                    background-size: 600% 600%;
                    animation: gradientFlow 5s ease infinite;
                }
                `}
            </style>
                {/*Link To Where Submitted Responses Are Sent To*/}
                <form action="mail_handler.php" method="POST" className="flex flex-col w-full md:w-7/12">
                    {/*Contact Title With Title File Styling*/}
                    <Title>Contact</Title>
                    {/*Input Name Field With Styling*/}
                    <input type="text" name="name" placeholder="Name..." className="p-2 bg-transparent border-2 rounded-md focus:outline-none" />
                    {/*Input Email Field With Styling*/}
                    <input type="email" name="email" placeholder="Email..." className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none" required />
                    {/*Input Message Field With Styling*/}
                    <textarea name="message" placeholder="Message..." rows="10" className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none" />
                    {/*Submit Button With Styling*/}
                    <button type="submit" className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-400 to-purple-500 drop-shadow-md hover:stroke-white hover:underline gradient-flow">
                        Work With Me!
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact