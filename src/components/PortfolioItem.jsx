import React from "react";

function PortfolioItem({title, imgUrl, stack, link}) {
   {/*Portfolio Item UI And Styling With Data To Iterate*/}
    return (
      //Clickable Link To GitHub Repo For Project
        <a href={link} target="_blank" rel="noopener noreferrer" className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden drop-shadow-md">
         {/*Project Cover Image URL To Load With Styling*/}
         <img src={imgUrl} alt="portfolio" className="w-full h-55 md:h-55 object-cover cursor-pointer" />
         <div className="w-full p-4">
            {/*Title Text For Project With Styling*/}
            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
            {/*Iterate Item Tag Text With Styling For Each Project*/}
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
               {stack.map(item => (
                  <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                     {item}
                  </span>
               ))}
            </p>
         </div>
      </a>
    )
}

export default PortfolioItem