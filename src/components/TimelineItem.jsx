import React from 'react';

function TimelineItem({year, title, duration, details}) {
   {/*Timeline Item UI And Styling With Data To Iterate*/}
   return (
      <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
         <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
               {/*Year Box With Styling*/}
               <span className="inline-block px-2 py-1 font-semibold text-white bg-gradient-to-r from-orange-400 to-purple-500 dark:bg-gradient-to-r from-orange-400 to-purple-500 text-stone-900 rounded-md drop-shadow-md">
                  {year}
               </span>
               {/*Event Title Text With Styling*/}
               <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                  {title}
               </h3>
               {/*Duration In Years Text With Styling*/}
               <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                  {duration}
               </div>
            </p>
            {/*Event Details Text With Styling*/}
            <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
               {details}
            </p>
         </li>
      </ol>
   )
}

export default TimelineItem;