import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            {/*Intro Big Title Name Text With Styling*/}
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Mark Howard</h1>
            {/*Intro Mid Title Username Text With Styling*/}
            <h2 className="text-2xl md:text-4xl mb-1 md:mb-3 font-semibold">markydoodled</h2>
            {/*Intro Summary Tag Text With Styling*/}
            <p className="text-base md:text-xl mb-3 font-medium">Digital Tinkerer</p>
            {/*Intro Personal Description Summary Text With Styling*/}
            <p className="text-sm max-w-xl mb-6 font-bold">Hi, I’m Mark. I’m Interested In Developing For The Apple Ecosystem. Currently I Am Learning Swift And SwiftUI. I’m Always Looking To Collaborate On SwiftUI Projects With The Community To Advance My Skills, And Am Always Happy To Help With Trying To Diagnose Bugs Or Suggest Ideas.</p>
            {/*GitHub Profile Link*/}
            <a href="https://github.com/markydoodled/" target="_blank" rel="noreferrer" className="text-sm md:text-base font-bold text-blue-500 dark:text-blue-300 hover:underline">GitHub Profile</a>
        </div>
    )
}

export default Intro
