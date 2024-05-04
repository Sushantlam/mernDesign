import React from 'react'
import First from '../../assets/Image.png';
import Sec from '../../assets/Image (1).png';
import Third from '../../assets/Image (2).png';
import { FiTwitter } from "react-icons/fi";
import {  FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";

const Core = () => {
  return (
    <div className='   w-full   '>
            <div className=' flex  px-[32px] py-[40px] gap-[32px] lg:py-[16px ] h-[100%] flex-col md:gap-[48px] lg:gap-[32px]  lg:px-[16px] w-full lg:max-w-[1280px] lg:mx-auto lg:h-[100%]'>
             <div className=' flex flex-col w-full justify-between  mx-auto gap-[8px] lg:w-[800px]'>
              <h3 className=' text-[24px] font-semibold font-inter text-black-primary tracking-tight leading-[32px] text-center md:font-bold md:tracking-tight md:text-[32px] md:text-center md:leading-[40px]'>The Core of Our Team</h3>
              <p className='text-[16px] font-semibold font-inter text-gray-primary tracking-tight leading-[24px] md:font-normal md:text-center md:tracking-tight md:text-[16px] md:leading-[24px]'>Organically grow the holistic world view of disruptive innovation via workplace diversity  and empowerment of people and great talent that truly rocks.</p>

             </div>

             <div className=' flex  flex-wrap lg:flex-row justify-between items-center gap-[32px] '>
             <div className=' h-[391px] w-[336px] lg:h-[454px] flex flex-col gap-[16px] lg:w-[384px]'>
                   <div className=' h-[285px] lg:h-[384px] w-full'>
                    <img src={First} className=' h-[100%] w-full object-cover' alt="" />

                   </div>
                   <div className=' flex flex-col justify-between gap-3'>
                    <div>

                    <h3  className='text-[28px] font-semibold font-inter text-blackk-primary tracking-tight leading-[36px] md:font-semibold md:tracking-tight md:text-[22px] md:leading-[30px]'>Morgan Drew</h3>
                    <p className='text-[16px] font-semibold font-inter text-gray-primary tracking-tight leading-[24px] md:font-normal md:tracking-tight md:text-[16px] md:leading-[24px]'>Manager</p>
                                 
                  
</div>
<div className=' flex gap-4'>
<FiTwitter color='black' style={{height: '20px', width: '20px'}}/>
<FaFacebook  color='black' style={{height: '20px', width: '20px'}}/>
<FaLinkedin  color='black'style={{height: '20px', width: '20px'}}/>

<BsFillSendFill  color='black' style={{height: '20px', width: '20px'}}/>

</div>
                   </div>
                </div>
                <div className=' h-[391px] w-[336px] lg:h-[454px] flex flex-col gap-[16px] lg:w-[384px]'>
                   <div className=' h-[285px] lg:h-[384px] w-full'>
                    <img src={Sec} className=' h-[100%] w-full object-cover' alt="" />

                   </div>
                   <div className=' flex flex-col justify-between gap-3'>
                    <div>

                    <h3  className='text-[28px] font-semibold font-inter text-blackk-primary tracking-tight leading-[36px] md:font-semibold md:tracking-tight md:text-[22px] md:leading-[30px]'>Jeffery Walker</h3>
                    <p className='text-[16px] font-semibold font-inter text-gray-primary tracking-tight leading-[24px] md:font-normal md:tracking-tight md:text-[16px] md:leading-[24px]'>Lead designer</p>
                        
                 
                  
</div>
<div className=' flex gap-4'>
<FiTwitter color='black' style={{height: '20px', width: '20px'}}/>
<FaFacebook  color='black' style={{height: '20px', width: '20px'}}/>
<FaLinkedin  color='black'style={{height: '20px', width: '20px'}}/>

<BsFillSendFill  color='black' style={{height: '20px', width: '20px'}}/>

</div>
                   </div>
                </div>
                <div className=' h-[391px] w-[336px] lg:h-[454px] flex flex-col gap-[16px] lg:w-[384px]'>
                   <div className=' h-[285px] lg:h-[384px] w-full'>
                    <img src={Third} className=' h-[100%] w-full object-cover' alt="" />

                   </div>
                   <div className=' flex flex-col justify-between gap-3'>
                    <div>

                  
                    <h3  className='text-[28px] font-semibold font-inter text-blackk-primary tracking-tight leading-[36px] md:font-semibold md:tracking-tight md:text-[22px] md:leading-[30px]'>Andrew Steve</h3>
                    <p className='text-[16px] font-semibold font-inter text-gray-primary tracking-tight leading-[24px] md:font-normal md:tracking-tight md:text-[16px] md:leading-[24px]'>UI/UX Designer</p>
                   
</div>
<div className=' flex gap-4'>
<FiTwitter color='black' style={{height: '20px', width: '20px'}}/>
<FaFacebook  color='black' style={{height: '20px', width: '20px'}}/>
<FaLinkedin  color='black'style={{height: '20px', width: '20px'}}/>

<BsFillSendFill  color='black' style={{height: '20px', width: '20px'}}/>

</div>
                   </div>
                </div>

             </div>
             <div>

             </div>
             
             </div>
             </div>
  )
}

export default Core