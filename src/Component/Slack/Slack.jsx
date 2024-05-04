import React from 'react'
import First from '../../assets/Logo.png';
import Sec from '../../assets/Company Logo (1).png';
import Third from '../../assets/Company Logo (2).png';
import Fourth from '../../assets/Company Logo (3).png';
import Fifth from '../../assets/Company Logo (4).png';
import Six from '../../assets/Company Logo (5).png';


const Slack = () => {
  return (
    <div className='   w-full  lg:px-[32px]   '>
      <div className='  flex  px-[32px] py-[40px] gap-[32px] h-[100%] flex-wrap   justify-between   lg:flex-row lg:justify-between lg:items-center  lg:gap-[64px]  lg:px-[16px] w-full lg:max-w-[1280px] lg:mx-auto lg:h-[100%]'>
        <div className=' h-[32px] w-[128px]'>
        <img src={First} className=' h-[100%] w-[100%] object-cover' alt="" />
        </div>
        <div className=' h-[32px] w-[128px]'>
        <img src={Sec} className=' h-[100%] w-[100%]' alt="" />
        </div>
       
        <div className=' h-[32px] w-[128px]'>
        <img src={Third} className=' h-[100%] w-[100%]' alt="" />
        </div>
       
        <div className=' h-[32px] w-[128px]'>
        <img src={Fourth} className=' h-[100%] w-[100%]' alt="" />
        </div>
       
        <div className=' h-[32px] w-[128px]'>
        <img src={Fifth} className=' h-[100%] w-[100%]' alt="" />
        </div>
       
        <div className=' h-[32px] w-[128px]'>
        <img src={Six} className=' h-[100%] w-[100%]' alt="" />
        </div>
       
      
      </div> 
      </div>
  )
}

export default Slack