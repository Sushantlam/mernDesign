import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const Faq = () => {
  return (
    <div className='   w-full   '>
    <div className=' flex   px-[32px] py-[40px] gap-[32px] lg:py-[16px ] h-[100%] flex-col md:gap-[48px] lg:gap-[32px]  lg:px-[16px] w-full lg:max-w-[1280px] lg:mx-auto lg:h-[100%]'>
     <div className=' flex flex-col w-full justify-between  mx-auto gap-[8px] lg:w-[800px]'>
      <h3 className=' text-[24px] font-bold font-inter text-black-primary tracking-[-2%] leading-[32px] text-center md:font-bold md:tracking-tight md:text-[32px] md:text-center md:leading-[40px]'>Frequently asked questions</h3>
      <p className='text-[16px] font-semibold font-inter text-gray-primary tracking-tight leading-[24px] md:font-normal md:text-center md:tracking-tight md:text-[16px] md:leading-[24px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>

     </div>
      <div className=' flex justify-between flex-col items-center border border-gray-400 lg:w-[1216px] lg:mx-auto '>
        <div className=' flex justify-between items-center min-h-[92px] w-full md:min-h-[80px] '>
            <div className=' py-[20px] px-[32px]'>
                <h3 className='  font-medium tracking-tight text-[18px] leading-[28px]'>Authentification Issues</h3>
                <p className=' font-normal tracking-tight text-[16px] leading-[24px]'>Porttitor nec est nisi, id nunc.</p>
            </div>
            <div className=' h-full w-[119px] flex justify-center items-center'>
                <h3 className=' text-center text-blue-primary bg-back-bg px-[12px] rounded-md py-[4px]'>New</h3>
            </div>

        </div>
        <hr className="border h-[0.1px] w-full border-gray-300" />
        <div className=' flex justify-between min-h-[92px] items-center w-full md:min-h-[80px]  '>
        <div className=' py-[20px] px-[32px]'>
                <h3 className='  font-medium tracking-tight text-[18px] leading-[28px]'>Mi est diam hendrerit ut ipsum, sodales aliquam mauris neque.</h3>
                    </div>
            <div className=' hidden lg:h-full  lg:min-w-[119px] lg:gap-3 lg:flex lg:justify-between lg:items-center lg:px-[10px]'>
                <div>

              
                <h3 className='  lg:font-normal lg:tracking-tight lg:text-[16px] lg:leading-[24px]'>Updated Lastweek</h3>
                </div>
                <div >
                <FaChevronDown className=' hidden lg:block' size={10} />
                </div>
               
            </div>

        </div>
        <hr className="border h-[0.1px] w-full border-gray-300" />
        <div className=' flex justify-between min-h-[92px] items-center w-full md:min-h-[80px]  '>
        <div className=' py-[20px] px-[32px]'>
                <h3 className='  font-medium tracking-tight text-[18px] leading-[28px]'>Cras vitae, scelerisque tortor augue.</h3>
                 </div>
            <div className=' hidden lg:h-full  lg:min-w-[119px] lg:gap-3 lg:flex lg:justify-between lg:items-center lg:px-[10px]'>
                <div>

              
                <h3 className='  lg:font-normal lg:tracking-tight lg:text-[16px] lg:leading-[24px]'>Updated today</h3>
                </div>
                <div >
                <FaChevronDown className=' hidden lg:block' size={10} />
                </div>
               
            </div>

        </div>
        <hr className="border h-[0.1px] w-full border-gray-300" />
        
        <div className=' flex justify-between min-h-[92px] items-center w-full md:min-h-[80px]  '>
        <div className=' py-[20px] px-[32px]'>
                <h3 className='  font-medium tracking-tight text-[18px] leading-[28px]'>Venenatis malesuada turpis sit integer felis rhoncus dictum eget ut.</h3>
                </div>
            <div className=' hidden lg:h-full  lg:min-w-[119px] lg:gap-3 lg:flex lg:justify-between lg:items-center lg:px-[10px]'>
                <div>

              
                <h3 className='  lg:font-normal lg:tracking-tight lg:text-[16px] lg:leading-[24px]'>Updated 2 days ago</h3>
                </div>
                <div >
                <FaChevronDown className=' hidden lg:block' size={10} />
                </div>
               
            </div>

        </div>
        <hr className="border h-[0.1px] w-full border-gray-300" />
        <div className=' flex justify-between min-h-[92px] items-center w-full md:min-h-[80px]  '>
        <div className=' py-[20px] px-[32px]'>
                <h3 className='  font-medium tracking-tight text-[18px] leading-[28px]'>Pretium ultricies donec non mollis senectus lectus libero tellus.</h3>
                    </div>
            <div className=' hidden lg:h-full  lg:min-w-[119px] lg:gap-3 lg:flex lg:justify-between lg:items-center lg:px-[10px]'>
                <div>

              
                <h3 className='  lg:font-normal lg:tracking-tight lg:text-[16px] lg:leading-[24px]'>Updated 3 days ago</h3>
                </div>
                <div >
                <FaChevronDown className=' hidden lg:block' size={10} />
                </div>
               
            </div>

        </div>
        <hr className="border h-[0.1px] w-full border-gray-300" />
        



      </div>
     </div>
     </div>
  )
}

export default Faq