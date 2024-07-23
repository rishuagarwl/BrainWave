import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"


const timeline = [
    {
        Logo: Logo1,
        heading:"Leadership",
        Description:"Fully committes to the success company",
    },
    {
        Logo: Logo2,
        heading:"Leadership",
        Description:"Fully committes to the success company",
    },
    {
        Logo: Logo3,
        heading:"Leadership",
        Description:"Fully committes to the success company",
    },
    {
        Logo: Logo4,
        heading:"Leadership",
        Description:"Fully committes to the success company",
    },
]

const TimelineSection = () => {
  return (
    <div>
        <div className='flex lg:flex-row flex-col gap-20  items-center '>

            <div className="lg:w-[45%] flex flex-col gap-14 lg:gap-3">
            {timeline.map((element, index) => {
                return (
                <div className="flex flex-col lg:gap-3" key={index}>
                    <div className="flex gap-6" key={index}>
                    <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                        <img src={element.Logo} alt="" />
                    </div>
                    <div>
                        <h2 className="font-semibold text-[18px]">{element.heading}</h2>
                        <p className="text-base">{element.Description}</p>
                    </div>
                    </div>
                    <div
                    className={`hidden ${
                        timeline.length - 1 === index ? "hidden" : "lg:block"
                    }  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
                    ></div>
                </div>
                );
            })}
            </div>

            <div className='relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]'>
                <img src={timelineImage} 
                    alt='timelineImage' 
                    className='shadow-white object-cover h-[400px] lg:h-fit shadow-[20px_20px_0px_0px] '/>

                <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7
                                left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <div className='flex flex-row gap-3 items-center border-r border-caribbeangreen-300 
                    px-7 lg:px-14'>
                        <p className='text-3xl font-bold w-[75px]'>10</p>
                        <p className='text-caribbeangreen-300 text-sm w-[75px]'>Years of Experience</p> 
                    </div>

                    <div className='flex flex-row gap-8 items-center px-7 lg:px-14'>
                        <p className='text-3xl font-bold'>250</p>
                        <p className='text-caribbeangreen-300 text-sm'>Type of Courses</p> 
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default TimelineSection