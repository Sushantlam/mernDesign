import React from 'react';
import First from '../../assets/Icon.png';
import data from './data';

const Message = () => {
  console.log(data);
  return (
    <div className='  w-full md:h-[908px] lg:h-[454px] md:py-[16px] lg:py-[64px] bg-white'>
      <div className='px-[16px] pt-[32px] pb-[40px] h-[100%] md:px-[32px] md:py-[40px] lg:max-w-[1280px] lg:mx-auto lg:h-[100%]'>
        <div>
          <h3 className='text-[24px] font-semibold font-inter text-black-primary tracking-tight leading-[32px] text-center md:font-bold md:tracking-tight md:text-[32px] md:text-center md:leading-[40px]'>Messaging for all</h3>
          <p className='hidden lg:block lg:pt-[8px] lg:font-normal lg:text-center lg:text-gray-primary lg:tracking-[-0.1px] lg:text-[16px] lg:leading-[24px]'>User generated content in real-time will have multiple touchpoints for offshoring.</p>
        </div>
        <div className=' hidden lg:flex lg:justify-between lg:items-center lg:gap-[32px] lg:mt-[40px]'>
          {data.slice(0, 3).map((e, index) => (
            <div key={e.id} className=' min-h-[182px] w-[384px] flex flex-col justify-center gap-[16px]'>
              <div className='h-[48px] w-[48px] rounded-full bg-blue-500 relative p-[8px]'>
                <div className='h-[32px] w-[32px] relative'>
                  <img src={e.image} style={{ height: '26.67px', width: '26.67px', position: 'absolute', top: '2.67px', left: '2.67px' }} alt='' />
                </div>
              </div>
              <div className='flex flex-col md:gap-[16px] lg:gap-[12px]'>
                <h4 className='text-[36px] font-semibold font-inter text-black-primary tracking-tight leading-[44px] md:font-semibold md:tracking-tight md:text-[22px] md:leading-[30px]'>{e.heading}</h4>
                <p className='text-[18px] text-gray-primary font-normal font-inter tracking-[0.1px] leading-[26px] md:font-normal md:tracking-[-0.1px] md:text-[16px] md:leading-[24px]'>{e.para}</p>
                <p className='text-blue-600'>{e.learning}</p>
              </div>
            </div>
          ))}
          </div>
          <div className='flex flex-wrap mt-[62px] justify-between gap-[32px] lg:hidden'>
      
          {data.slice(0, 6).map((e, index) => (
            <div key={e.id} className='min-h-[182px] w-[full] md:w-[336px] flex flex-col justify-center gap-[16px]'>
              <div className='h-[48px] w-[48px] rounded-full bg-blue-500 relative p-[8px]'>
                <div className='h-[32px] w-[32px] relative'>
                  <img src={e.image} style={{ height: '26.67px', width: '26.67px', position: 'absolute', top: '2.67px', left: '2.67px' }} alt='' />
                </div>
              </div>
              <div className='flex flex-col md:gap-[16px] gap-[8px]'>
                <h4 className='text-[20px] font-semibold font-inter text-black-primary tracking-tight leading-[28px] md:font-semibold md:tracking-tight md:text-[22px] md:leading-[30px]'>{e.heading}</h4>
                <p className='text-[18px] text-gray-primary font-normal font-inter tracking-[0.1px] leading-[26px] md:font-normal md:tracking-[-0.1px] md:text-[16px] md:leading-[24px]'>{e.para}</p>
                <p className='text-blue-600'>{e.learning}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Message;
