import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className='w-[100%] h-[auto] bg-[#1D1D1D] pt-[5%] pb-[5%] xl:pt-[2%] xl:pb-[2%] flex justify-center items-center'>
          
          <div className='lg:w-[70%] xl:w-[70%] xl:h-[100px] h-[auto] sm:flex sm:justify-between sm:items-center  xl:flex xl:justify-between xl:items-center xl:grid xl:grid-cols-2 xl:gap-4'>
              
              <div className="h-[100%] flex flex-wrap justify-center items-center">
                <Link to="/"> <img src="https://media-hosting.imagekit.io//bcbf8bf2cfbc400d/harsh-raval-high-resolution-logo-transparent.png?Expires=1836308407&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ngaa-yGT0ns-71WvWNcfKw5WEWuQrbR09uMGsuLbjb2SUxfMXkd9vJb8GMWE-SfTaiO51a1qCq6quYV2enX4jSVNJRN5ZQSMOTZA1AdYd7c3Im84YUYeJRcU9uNwho9RcbE4dAaUZsRfjyHdJB5oc2wlv6Meq6KuYGRWoPOEgKNjrp9BhICT9zBjqT4kdk80Jl~Z4PtQAlRohhBLFpoGznMGsnZXvIRtST4AvoBWL3Xqc-SFBTZ5cGl8X6AoeyqFzcpmrY7nSH7S~OlNs0Wu-LOh9PDz3v0YHPWDZ1QFW6-hc4gHKbjszYkYqxDv4v3YZTdos4Rbr~dEVM4tjfSOZg__" alt="" className='w-[50px] sm:w-[60px] xl:w-[140px] ' /> </Link>
                <h1 className='mt-[2%] xl:mt-[0%] w-[100%] text-center text-[15px] xl:text-[18px] text-[gray]'><i class="ri-copyright-line"></i> Designed & Built by <span className='text-[#4bffa5]'>Harsh Raval</span></h1>
              </div>
              
              <div className='h-[100%] flex flex-wrap justify-center items-center mt-[7%] sm:mt-[0%] md:mt-[0%] md:lg-[0%]  xl:mt-[0%] xl:mt-[0%]'>
              <Link to="/"> <img src="https://media-hosting.imagekit.io//f2fb5f596ec842f1/React.png?Expires=1835458770&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ygyOIyb2sjVEosqAlXH1d50Kjo14vcVLSoEgGRl62WrQ3RgfHhZhy7WkBWrrDZAUeW~g8nDZvX8zmY8Ya1VRfCg92FwfjWZ1IsMD0UQ6XYt0qgmoGrw-M0WQcqaxE~3x7Q15beViF6fqbUr9ZRbDxhqBKQMOSmUWEHj0qc2UmQj34m5mvu8MIgKy5bWMil-rfFMo356Fqy6STvJGYDG2hKF5i28dyLz45ilSQ622cvDfpJ9766ugDGBnXf1aoqsgkhY5V~wEx40rAhjnFfBRBuUiqT2iqHi9v5f3gc11tgYlA13UqgIkw50fT0i8E8g2b1GaojDtG9X7LrgsGZ~SPQ__" alt="" className='w-[45px] hover:drop-shadow-2xl: 1 35px 35px rgba(0, 0, 0, 0.25)' id='built' /> </Link>
              <h1 className='w-[100%] text-center text-[18px] text-[gray]'>Built Using <span className='text-[#4bffa5]'>React-JS</span></h1>
              </div>
          </div>
    
    </section>
  )
}

export default Footer
