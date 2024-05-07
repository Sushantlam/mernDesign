import React, { useState } from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import { MdEmail, MdLocalPhone } from 'react-icons/md'
import { FaLocationArrow } from 'react-icons/fa'
import axios from 'axios';

const Contact = () => {
  
  const[credential,setData]=useState({
    firstName: '',
    emailAddress: '',
    phoneNumber: '',
    getinTouch: "Facebook",
    message: '',
   
})
const[check, setChecked] = useState(false)

const handleChnage=(e)=>{
  const {id, value}= e.target
  setData({...credential, [id]: value})
  
}

const handleClick =async(e)=>{
  e.preventDefault()
 
 try {
  
    const res = await axios.post('https://backend-1-i3uq.onrender.com/email', credential)
    console.log(res);
    if(res)
{
  setData({
    firstName:'' ,
    emailAddress: '',
    phoneNumber: '',
    getinTouch: "Facebook",
    message: '',
  })

  }
  
  
  
 
 } 
 catch (error) {

  console.log(error);
  
  
 }
    }

    console.log(credential);
  return (

    

    <>
    <Navbar/>

    <div className='flex flex-col justify-center items-center py-[64px] gap-4 lg:flex-row lg:justify-between lg:items-center lg:max-w-[1280px] lg:gap-4 lg:mx-auto lg:px-[30px]'>
      <div className='flex flex-col max-w-[400px] h-[200px] justify-center items-center gap-3 border rounded border-gray-200 px-10 shadow-slate-50 py-5'>
      <MdLocalPhone size={50} />
      <h3 className=' font-extrabold'>Phone</h3>
      <p>A wonderful serenity has taken possession of my entire soul, like these.</p>
       <p className=' font-semibold'>+977-9813481120</p>
       
      </div>
      <div className='flex flex-col max-w-[400px] h-[200px] justify-center items-center gap-3 border rounded border-gray-200 px-10 shadow-slate-50 py-5'>
      <MdEmail size={50} />
      <h3 className=' font-extrabold'>Email</h3>
      <p>A wonderful serenity has taken possession of my entire soul, like these.</p>
       <p className='font-semibold'>info@lookscout.com</p>
       
      </div>
      <div className='flex flex-col max-w-[400px] h-[200px] justify-center items-center gap-3 border rounded border-gray-200 px-10 shadow-slate-50 py-5'>
      <FaLocationArrow size={20} />
      <h3 className=' font-extrabold'>Location</h3>
      <p>A wonderful serenity has taken possession of my entire soul, like these.</p>
      <p>Lookscout, Kalanki, 44600 </p>
      
      
       
      </div>
     </div>
    <div className=' bg-bg-black  w-full   '>
    <div className=' flex    py-[40px] gap-[32px] lg:py-[16px ] h-[100%] flex-col md:gap-[48px] lg:gap-[32px]  lg:px-[16px] w-full lg:max-w-[1280px] lg:mx-auto lg:h-[100%]'>
     <div className=' flex flex-col w-[343px] justify-between md:w-[704px] md:h-[104px]  mx-auto gap-[8px] lg:w-[800px]'>
      <h3 className=' text-[24px] font-bold font-inter text-white tracking-[-2%] leading-[32px] text-center md:font-bold md:tracking-tight md:text-[32px] md:text-center md:leading-[40px]'>Get In Touch With Us</h3>
      <p className='text-[16px] font-semibold font-inter text-center text-gray-primary tracking-tight leading-[24px] md:font-normal md:text-center md:tracking-tight md:text-[16px] md:leading-[24px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>

     </div>

     <div className=' flex justify-between w-full   px-[32px] '>
     <div className='p-[32px] text-white bg-bg-form rounded-lg flex flex-wrap  justify-between items-center gap-[24px] h-full w-full' >
      <div className=' flex flex-col gap-2 w-full md:w-[45%] '>
      <label  htmlFor="">Firstname</label>
      <input type="text" id="firstName" value={credential.firstName} onChange={handleChnage} className=' py-[12px] px-[16px] rounded-lg bg-colo' placeholder='John Doe' required/>
      </div>
      <div className='  flex flex-col gap-2 w-full  md:w-[45%]'>
      <label  htmlFor="">Email Address</label>
      <input type="email" id="emailAddress" value={credential.emailAddress} onChange={handleChnage} className=' py-[12px] px-[16px] rounded-lg bg-colo' placeholder='@email.com' required/>
      </div>
      
      <div className='  flex flex-col gap-2 w-full md:w-[45%]'>
      <label  htmlFor="">Phone Number</label>
      <input type="text" id="phoneNumber" value={credential.phoneNumber} onChange={handleChnage} className=' py-[12px] px-[16px] rounded-lg bg-colo' placeholder='+9712345678' required />
      </div>

      <div class="flex flex-col gap-2 w-full md:w-[45%]">
  <label htmlFor="cars">Get In Touch With Us</label>
  <select name="cars"  id="getinTouch" onChange={handleChnage} value={credential.getinTouch} class="w-full max-w-full py-[12px] px-[16px] rounded-lg bg-colo">
    <option value="Facebook" class="w-full md:w-auto">Facebook</option>
    <option value="Linkedin" class="w-full md:w-auto">Linkedin</option>
    <option value="Twitter" class="w-full md:w-auto">Twitter</option>
    <option value="Instagram" class="w-full md:w-auto">Instagram</option>
  </select>
</div>

      <div className='  flex flex-col gap-2 w-[100%]'>
      <label htmlFor="">Message</label>
      <textarea name="" id="message" onChange={handleChnage} value={credential.message} placeholder='Put your query ' className=' py-[12px] px-[16px] h-[147px] rounded-lg bg-colo' required></textarea>
      </div>
      <div className=' flex flex-col gap-3'>
      <div className=' flex gap-2 items-center'>
        <input type="checkbox"  onChange={()=> setChecked(!check)}/>
        <p>I agree with Lookscout Privacy Policy</p>
        
      </div>
      <div className=' block'>
        <button disabled={!check} className=' py-[12px] px-[18px] bg-blue-primary rounded-lg' onClick={handleClick}>Submit</button>
      </div>

      </div>
    
     
      
    


      </div>

     </div>
    </div></div>
    <Footer/>
    </>
  )
}

export default Contact