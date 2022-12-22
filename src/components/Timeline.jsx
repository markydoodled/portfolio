import React from "react";
import TimelineItem from "./TimelineItem";
import timeline from "../data/timeline";
import Title from "./Title";

function Timeline() {
    {/*Iterate Timeline Item Into One UI Component*/}
    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12">
                {/*Timeline Title With Title File Styling*/}
                <Title>Timeline</Title>
                {timeline.map(item => (
                    <TimelineItem 
                        year={item.year}
                        title={item.title}
                        duration={item.duration}
                        details={item.details}
                    />
                ))}
            </div>
        </div>
    )
}

export default Timeline