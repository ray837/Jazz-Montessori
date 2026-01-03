import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='h-full bg-[#2f2c50]'>
<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 text-white '>
<div className='flex flex-col justify-between gap-5 px-10 py-15'>
    <h1 className='text-3xl'>Jazz Montessori</h1>
    <h1>Jazz Montessori, based in Bangalore, provides Montessori-inspired early learning for children aged 10 months to 6 years, supporting their most important early steps.<br/></h1>

<h1>Visit us to experience how Jazz Montessori supports your child’s first and most important steps during the formative early years.</h1>
</div>
<div className='flex flex-col gap-10 px-10 py-15'> <h1 className='text-3xl'>Links</h1>
<div className='w-1/2 flex flex-col gap-3'>
<a>Google Maps</a>
<hr class=" mt-2 "></hr>
<a>Whatsapp</a>
<hr class="light-hr mt-2"></hr>
<a>Instagram</a>
<hr class="light-hr mt-2"></hr>
<a>Facebook</a>
<hr class="light-hr mt-2"></hr>
</div>
 
</div>
<div className='flex flex-col justify-between gap-5 px-10 py-15'>
    <h1 className='text-3xl'>Contacts</h1>
    <h1 className='text-2xl font-bold'>Email</h1>
    <a>rayidahmed@gmail.com</a>

      <h1 className='text-2xl font-bold'>Phone</h1>
    <a>(+91) 9945574837</a>

     <h1 className='text-2xl font-bold'>Address</h1>
    <p>Marathalli, Bangalore</p>
</div>
<div className='flex flex-col  gap-5 px-10 py-15'>
    <h1 className='text-3xl mb-7'>Enquire</h1>
    <p>If you would like to enquire , please reachout to our Whatsapp</p>
 <button className="w-1/2 border border-white text-white px-6 py-2 rounded-md active:scale-95 hover:bg-white hover:text-[#252340]">
    WhatsApp
  </button>
</div>
</div>
    </div>
    <div className='flex bg-[#252340] h-15 w-full text-white items-center justify-center text-sm font-light'>
<a>© 2018 Rayid Ahmed. All Rights Reserved. Designed & Developed By Rayid</a>
    </div>
    </>
  )
}

export default Footer