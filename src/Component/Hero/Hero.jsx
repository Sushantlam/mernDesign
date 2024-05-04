import React from 'react'

const Hero = () => {
    return (
        <div className='h-[376px] w-full md:h-[352px]  lg:h-[492px] bg-hero-bg  '>
            <div className='px-[16px] pt-[32px] pb-[40px] h-[100%] flex justify-center items-center md:h-[100%] md:flex-row md:justify-center md:items-center  lg:max-w-[1280px] lg:mx-auto lg:h-[100%] lg:flex lg:justify-center lg:items-center '>
                <div className='h-[304px] w-[343px] flex flex-col gap-[32px] md:w-[672px] md:h-[210px]  md:flex-col md:gap-[5px] lg:w-[640px] lg:h-[232px]'>
                    <p className=' text-[14px] font-semibold font-inter tracking-[0.1px] leading-[20px] text-center text-blue-primary'>1% OF THE INDUSTRY</p>
                    <div className=' flex flex-col justify-between items-center gap-[16px]'>
                        <div>
                        <h3 className="text-[36px] font-semibold font-inter text-black-primary tracking-tight leading-[44px] text-center md:font-bold md:tracking-tight md:text-[52px] md:text-center md:leading-[60px]">
    Hype got you here. Stay for the best ever help.
</h3>

                        </div>

                        <p className="text-[18px] text-gray-primary font-normal font-inter tracking-[0.1px] leading-[26px] text-center md:font-normal md:tracking-[-0.1px] md:text-[18px] md:leading-[26px]">
                            We’ve been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we decided to build upon it - successfully.
                        </p>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default Hero