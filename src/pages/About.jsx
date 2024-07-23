import React from 'react'
import HighlightText from "../components/core/HomePage/HighlightText"
import BannerImg1 from "../assets/Images/aboutus1.webp"
import BannerImg2 from "../assets/Images/aboutus2.webp"
import BannerImg3 from "../assets/Images/aboutus3.webp"
import Quote from '../components/core/AboutPage/Quote'
import FoundingStory from "../assets/Images/FoundingStory.png"
import StatsComponent from '../components/core/AboutPage/Stats'
import LearningGrid from '../components/core/AboutPage/LearningGrid'
import ContactFormSection from '../components/core/AboutPage/ContactFormSection'
import Footer from '../components/common/Footer'
import ReviewSlider from '../components/common/ReviewSlider'


const About = () => {
  return (
    <div className='mx-auto text-white'>
        {/* Section 1 */}

        <section className="bg-richblack-700">
            <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
                <header className="mx-auto py-20 text-4xl font-semibold lg:w-[60%]">
                    Driving Innovation in Online Education for a 
                    <HighlightText text={"Brighter Future"}/>
                    <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
                    BrainWave is at the forefront of driving innovation in online education. 
                    We're passionate about creating a brighter future by 
                    offering cutting-edge courses, leveraging emerging technologies, 
                    and nurturing a vibrant learning community.
                    </p>
                </header>
                <div className="sm:h-[70px] lg:h-[150px]"></div>
                <div className="absolute bottom-0  grid w-[100%] translate-y-[30%] 
                grid-cols-3 gap-3 lg:gap-5 ">
                    <img src={BannerImg1}/>
                    <img src={BannerImg2}/>
                    <img src={BannerImg3}/>
                </div>
            </div>
        </section>

        {/* Section 2 */}

        <section className="border-b border-richblack-700">
            <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
              <div className="h-[100px] "></div>
              <Quote/>
            </div>
        </section>

        {/* Section 3 */}

        <section>
            <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between  text-richblack-500">
                 {/* 1st upper half  */}
              <div className='flex flex-col items-center  gap-10 lg:flex-row justify-between '>
                    {/* left box */}
                <div className="my-24 flex lg:w-[50%] flex-col gap-10">
                  <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] "> 
                    Our founding story
                  </h1>
                  <p className='text-base font-medium lg:w-[95%] text-richblack-300'>
                    Our e-learning platform was born out of a shared vision and passion for transforming education. 
                    It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, 
                    flexible, and high-quality learning opportunities in a rapidly evolving digital world.
                  </p>

                  <p className="text-base font-medium text-richblack-300 lg:w-[95%]"  >
                    As experienced educators ourselves, we witnessed firsthand the limitations and challenges 
                    of traditional education systems. We believed that education should not be confined to the 
                    walls of a classroom or restricted by geographical boundaries. We envisioned a platform that 
                    could bridge gaps and empower individuals from all walks of life to unlock their full potential.
                  </p>

                </div>
                    
                    {/* right box */}
                <div>
                  <img src={FoundingStory} 
                  className="shadow-[0_0_20px_0] shadow-[#FC6767]"/>
                </div> 
            </div>
                
                {/* 2nd lower half */}
            <div className="flex flex-col items-center  lg:flex-row justify-between">
              {/* left box */}
              <div className="my-24 flex lg:w-[40%] flex-col gap-10">
                <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] "> 
                  Our Vision 
                </h1>
                <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                    With this vision in mind, we set out on a journey to create an e-learning platform that would 
                    revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a 
                    robust and intuitive platform that combines cutting-edge technology with engaging content, 
                    fostering a dynamic and interactive learning experience.
                </p>
              </div>

              {/* right box */}
              <div className="my-24 flex lg:w-[40%] flex-col gap-10">
                <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                    Our Mission
                </h1>
                <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                    Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, 
                    where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in 
                    an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, 
                    live sessions, and networking opportunities
                </p>
            
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <StatsComponent />

        {/* Section 5 w-11/12 max-w-maxContent justify-between  */}
        <section className="mt-20 flex flex-col mx-auto gap-10 w-11/12 ">
          <LearningGrid/>
          <ContactFormSection/>
        </section>

        <section className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white" >
          <div className="text-center text-4xl font-semibold mt-8">
            Review from other learners
          </div>
        </section>
        <ReviewSlider/>
        <Footer/>          
    </div>       
  )    
}

export default About


