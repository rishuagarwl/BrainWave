import React from 'react'
import InstructorImg from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import CTAButton from "./Button"
import { FaArrowRight } from 'react-icons/fa'

const InstructorSection = () => {
  return (
    <div >
        <div className='flex flex-col lg:flex-row gap-20 items-center'>
            
            <div className='lg:w-[50%]'>
                <img 
                  src={InstructorImg} 
                  alt="" 
                  className='shadow-white shadow-[-20px_-20px_0_0]' />
            </div>
            
            <div className='lg:w-[50%] flex flex-col gap-10'>
                <div className='text-4xl font-semibold lg:w-[50%]'>
                    Become an 
                    <HighlightText text={"Instructor"} />
                </div>
                <p className='font-medium w-[90%] text-[17px] text-justify text-richblack-300'>
                    Instructor from around the world teach millions of students on BrainWave.
                    We provide the tools and skills to teach what you love.
                </p>

                <div className='w-fit'>
                    <CTAButton active={true} linkto={"/signup"}>
                    <div className='flex  gap-3 items-center '>
                        Start Learning Today
                        <FaArrowRight />
                    </div> 
                    </CTAButton>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default InstructorSection