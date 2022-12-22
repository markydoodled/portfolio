import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            {/*Intro Big Title Username Text And Styling*/}
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">markydoodled</h1>
            {/*Intro Summary Tag Text And Styling*/}
            <p className="text-base md:text-xl mb-3 font-medium">Digital Tinkerer</p>
            {/*Intro Personal Description Summary Text And Styling*/}
            <p className="text-sm max-w-xl mb-6 font-bold">Hi, I’m Mark. I’m Interested In Developing For Apple Systems. Currently I Am Learning Swift And SwiftUI. Soon I'll Be Looking Into Making Web Apps With ASP.NET Core And Android Apps Using Kotlin. I’m Always Looking To Collaborate On SwiftUI Projects With The Community And Am Always Happy To Help With Trying To Diagnose Bugs Or Suggest Ideas.</p>
        </div>
    )
}

export default Intro