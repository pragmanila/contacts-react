import React from 'react'
import ContactForm from './ContactForm'

export default function ContactModal({handleModal, selectedContact}) {
  return (
    <div className='flex justify-center items-center 
    fixed w-screen h-screen bg-black top-0 left-0
    '>
        <span className='absolute top-5 right-5 cursor-pointer text-white hover:text-red-300 duration-200'
        onClick={handleModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
        </span>
        <ContactForm selectedContact={selectedContact}/>
    </div>
  )
}
