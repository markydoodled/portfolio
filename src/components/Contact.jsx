import React from "react";
import Title from "./Title";

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                {/*Link To Where Submitted Responses Are Sent To*/}
                <form action="mail_handler.php" method="POST" className="flex flex-col w-full md:w-7/12">
                    {/*Contact Title With Title File Styling*/}
                    <Title>Contact</Title>
                    {/*Input Name Field With Styling*/}
                    <input type="text" name="name" placeholder="Name..." className="p-2 bg-transparent border-2 rounded-md focus:outline-none" />
                    {/*Input Email Field With Styling*/}
                    <input type="text" name="email" placeholder="Email..." className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none" />
                    {/*Input Message Field With Styling*/}
                    <textarea name="message" placeholder="Message..." rows="10" className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none" />
                    {/*Submit Button With Styling*/}
                    <button type="submit" className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-400 to-purple-500 drop-shadow-md hover:stroke-white">
                        Work With Me!
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact