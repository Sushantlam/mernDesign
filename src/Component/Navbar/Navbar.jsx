import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';
import { MdLocalPhone, MdEmail } from 'react-icons/md';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/Lookscout.png';
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <>
      
        
        <div className='w-full  bg-hero-bg'>
          <div className='  flex justify-between items-center w-full h-[64px] p-[16px] md:justify-between md:items-center md:h-[86px] md:w-auto md:mx-auto md:px-4 md:text-white lg:justify-between lg:items-center lg:h-[86px] lg:max-w-[1280px] lg:mx-auto lg:px-[32px] '>

         <div className=' flex justify-between items-center gap-[64px] text-black'>

        
          <Link to='/'>  <img src={logo} className=' h-[32px] w-[128px] lg:h-[40px] lg:w-[160px]' alt="" /></Link>
          <ul className='hidden lg:flex lg:justify-between lg:items-center lg:gap-[32px]'>
    <li className='p-3'>
      <span className="font-inter font-semibold text-[15px]" style={{ lineHeight: '22px' }}>Home</span>
    </li>
  
  
    <li className='p-3'>
      <span className="font-inter font-semibold text-[15px]" style={{ lineHeight: '22px' }}>Our Products</span>
    </li>
  
  
    <li className='p-3'>
      <span className="font-inter font-semibold flex justify-between items-center gap-[10px] text-[15px]" style={{ lineHeight: '22px' }}>Resources   <FaChevronDown  size={13} /></span>
    </li>
  
  <Link to='/contact'>
    <li className='p-3'>
      <span className="font-inter font-semibold text-[15px]" style={{ lineHeight: '22px' }}>Contacts</span>
    </li>
  </Link>
  
</ul>

            
            </div>

            <div className='hidden  lg:flex lg:justify-between lg:items-center lg:gap-[24px]'>
            <button className="font-inter text-blue-500 font-semibold text-lg" style={{ fontWeight: '600', fontSize: '15px', lineHeight: '22px' }}>Sign Up</button>
<button className="font-inter font-semibold text-lg bg-blue-500 px-[18px] py-[12px] rounded" style={{ fontWeight: '600', fontSize: '15px', lineHeight: '22px' }}>Log in</button>


            </div>

            <div onClick={handleNav} className='block pr-3  lg:hidden ' >
              {nav ? <AiOutlineClose size={20}  color='black'/> : < AiOutlineMenu size={20} color='black'/>}
            </div>

            <ul className={nav ? 'fixed left-0 top-0 w-[80%] pt-16 pl-10  z-50 h-full bg-green-85bc22 border-r border-r-gray-900 ease-in-out duration-100' : 'ease-in-out duration-100 fixed left-[-100%]'}>
            <Link to='/'>   <img src={logo} className=' h-[32px] w-[128px]' alt="" /></Link>
            <li className='p-3'>Home</li>
         <li className='p-3'>Our Products</li>
            <li className='p-3'>Resources</li>
            <Link to='/contact'> <li className='p-3'>Contact</li></Link>
           
            </ul>

          </div>
        </div>
        <hr className="border-t-1 border-gray-300" />
     
    </>
  )
}

export default Navbar