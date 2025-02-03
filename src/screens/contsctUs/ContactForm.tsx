import React from 'react'

const ContactForm = () => {
  return (
    <section className='container mx-auto'>
        <div className='border rounded-2xl h-[300px] w-[50%] m-auto bg-white'>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
    </section>
  )
}

export default ContactForm