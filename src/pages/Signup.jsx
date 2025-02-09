import React from 'react'
import signUpImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

const Signup = () => {
  return (
    <Template 
      title="Join the millions learning to code with BrainWave for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signUpImg}
      formType="signup"
      />
  )
}

export default Signup