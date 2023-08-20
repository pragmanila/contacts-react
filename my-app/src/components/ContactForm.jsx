import React from 'react'

export default function ContactForm() {
    const handleSubmit = (e) =>{
        e.preventDefault();
    } 
  return (
    <form className='flex flex-col relative justify-center items-center gap-3 
    bg-white p-5 w-full sm:h-4/6 sm:w-5/12 opacity-100'
    onSubmit={handleSubmit}>
       
        <p className='font-serif font-bold text-xl'>ADD CONTACT</p>
        <div className='flex items-center w-full'>
            <label htmlFor="" className='hidden sm:block w-12/12 sm:w-3/12 text-end px-2'>First Name</label>
            <input className='border-2 w-full border-teal-900 rounded-md p-1 sm:w-9/12' placeholder='First Name' type="text" />
        </div>
        <div className='flex items-center w-full'>
            <label htmlFor="" className='hidden sm:block w-12/12 sm:w-3/12 text-end px-2'>Middle Name</label>
            <input className='border-2 w-full border-teal-900 rounded-md p-1 sm:w-9/12' placeholder='Middle Name' type="text" />
        </div>
        <div className='flex items-center w-full'>
            <label htmlFor="" className='hidden sm:block w-12/12 sm:w-3/12 text-end px-2'>Last Name</label>
            <input className='border-2 w-full border-teal-900 rounded-md p-1 sm:w-9/12' placeholder='Last Name' type="text" />
        </div>
        <div className='flex items-center w-full'>
            <label htmlFor="" className='hidden sm:block w-12/12 sm:w-3/12 text-end px-2'>Contact</label>
            <input className='border-2 w-full border-teal-900 rounded-md p-1 sm:w-9/12' placeholder='Contact' type="text" />
        </div>
        <div className='flex items-center w-full'>
            <label htmlFor="" className='hidden sm:block w-12/12 sm:w-3/12 text-end px-2'>Email</label>
            <input className='border-2 w-full border-teal-900 rounded-md p-1 sm:w-9/12' placeholder='Email' type="email" />
        </div>
        <div className='w-full'>
            <button className='bg-teal-700 w-full py-1 rounded-md font-semibold text-white hover:bg-teal-950 duration-200'>Save</button>
        </div>
    </form>
  )
}
