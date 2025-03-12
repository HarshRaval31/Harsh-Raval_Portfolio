import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "../CSS/Pointer.css"
import "../JS/Headline.js"
// import Loader from '../Pages/Loader.jsx'


function Header() {
  let [toggle, setToggle] = useState(false)

  let navbar = useRef(null)
  let Menubar = ()=>{
    setToggle(!toggle)
  }

  const ulclose = ()=>{
    setToggle(false)
  }

  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const cursorinner = document.querySelector('.cursor2');
    const links = document.querySelectorAll('a');
    
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      cursorinner.style.left = `${x}px`;
      cursorinner.style.top = `${y}px`;
    };

    const handleMouseDown = () => {
      cursor.classList.add('click');
      cursorinner.classList.add('cursorinnerhover');
    };

    const handleMouseUp = () => {
      cursor.classList.remove('click');
      cursorinner.classList.remove('cursorinnerhover');
    };

    const handleMouseOver = (item) => {
      cursor.classList.add('hover');
    };

    const handleMouseLeave = (item) => {
      cursor.classList.remove('hover');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    links.forEach(item => {
      item.addEventListener('mouseover', () => handleMouseOver(item));
      item.addEventListener('mouseleave', () => handleMouseLeave(item));
    });

    
    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      links.forEach(item => {
        item.removeEventListener('mouseover', () => handleMouseOver(item));
        item.removeEventListener('mouseleave', () => handleMouseLeave(item));
      });
    };
  }, []);



  return (
    
    <div className='w-[100%] bg-[#0C0C0C] h-[120px] flex justify-evenly items-center lg:flex lg:justify-around lg:items-center xl:flex xl:justify-around xl:items-center'>
        
        <div className='Logo flex justify-center items-center w-[30%] h-[100%]'>
           <Link to={"/"} ><img src="https://media-hosting.imagekit.io//bcbf8bf2cfbc400d/harsh-raval-high-resolution-logo-transparent.png?Expires=1836308407&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ngaa-yGT0ns-71WvWNcfKw5WEWuQrbR09uMGsuLbjb2SUxfMXkd9vJb8GMWE-SfTaiO51a1qCq6quYV2enX4jSVNJRN5ZQSMOTZA1AdYd7c3Im84YUYeJRcU9uNwho9RcbE4dAaUZsRfjyHdJB5oc2wlv6Meq6KuYGRWoPOEgKNjrp9BhICT9zBjqT4kdk80Jl~Z4PtQAlRohhBLFpoGznMGsnZXvIRtST4AvoBWL3Xqc-SFBTZ5cGl8X6AoeyqFzcpmrY7nSH7S~OlNs0Wu-LOh9PDz3v0YHPWDZ1QFW6-hc4gHKbjszYkYqxDv4v3YZTdos4Rbr~dEVM4tjfSOZg__" alt="" className='xl:w-[45%] lg:w-[55%]' /></Link>
        </div>
        
        <nav className={`lg:w-[60%] lg:h-[100%] lg:w-[50%]   xl:w-[50%] xl:h-[100%] flex justify-center items-center lg:block xl:block ${toggle == true ? 'block' : 'hidden'}`} ref={navbar}>
            <ul className='absolute top-[120px] left-0 pt-[5%] pb-[5%] bg-[#1D1D1D] lg:bg-[#0C0C0C] flex flex-col items-start ps-10 leading-[50px] w-full h-[auto] lg:w-[100%] lg:h-[100%] lg:relative lg:top-0  lg:flex lg:flex-row lg:justify-between lg:items-center   xl:w-[100%] xl:h-[100%] xl:relative xl:top-0  xl:flex xl:flex-row xl:justify-between xl:items-center lg:block'>
                <li><Link to={"/"} id="icons"><i class="ri-home-4-line"></i> &nbsp;Home</Link></li>
                <li><Link to={"/about"} id="icons"><i class="ri-information-2-line"></i> &nbsp;About</Link></li>
                <li><Link to={"/education"} id="icons"><i class="ri-graduation-cap-line"></i> &nbsp;Education</Link></li>
                <li><Link to={"/skills"} id="icons"><i class="ri-presentation-line"></i> &nbsp;Skills</Link></li>
                <li><Link to={"/projects"} id="icons"><i class="ri-stack-line"></i> &nbsp;Projects</Link></li>
                <li><Link to={"/contact"} id="icons"><i class="ri-phone-line"></i> &nbsp;Contact</Link></li>
                <i class="ri-close-fill text-[white] lg:hidden xl:hidden text-[23px] absolute right-5 text-[30px]" onClick={ulclose}></i>
            </ul>
        </nav>

        <i className="ri-menu-line text-[white] lg:hidden xl:hidden text-[23px]" onClick={Menubar}></i>
        
        <button className='resume  text-[black] text-[18px] xl:text-[20px] rounded-lg bg-[#4BFFA5] w-[105px] h-[30px] xl:h-[40px] '>
           <a href="https://drive.google.com/file/d/11aH20E5Mv0ljcFbNgycP-31ndNKf_kQK/view?usp=drive_link" download target='_blank' > Resume</a> 
        </button>
    

        <div className={`w-[3%]  fixed  bottom-0 right-[3.5%] sm:right-[3.5%] md:right-[1%]  flex items-center justify-center xl:right-[10px] right-0  xl:w-[5%] h-[100%] ${toggle == true ? "text-[white]" : "text-[white]" } `} id="follow" >
                  <center><p className='follow text-[14px] md:text-[17px] xl:text-[18px]'>Follow&nbsp;&nbsp;Me&nbsp;&nbsp;On</p> <div id='flicon'> <a href="https://www.linkedin.com/in/harsh-raval-89787a2aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'> <i class="ri-linkedin-fill md:text-[25px]  lg:text-[30px]  xl:text-[30px]"></i> </a> <br /> <a href="https://github.com/HarshRaval31" target='_blank'>  <i class="ri-github-fill md:text-[25px] lg:text-[30px] xl:text-[30px]"></i></a>  </div>
                 </center>
        </div>

      {/* <!-- pointer --> */}
      <div className="cursor"></div>
      <div className="cursor2"></div>




     </div>
  ) 
}

export default Header
