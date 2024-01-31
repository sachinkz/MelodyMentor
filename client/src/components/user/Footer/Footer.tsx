import Image from 'next/image'
import logo from 'public/logo.png'
const Footer = () => {
  return (
    <footer className='bg-slate-100 -ml-5 flex  flex-col items-center  min-w-screen justify-center pl-[150px] max-md:pl-[20px] pr-[150px] pt-[50px] pb-[50px] max-md:pr-5'>
      <div className='flex justify-between flex-wrap items-center pb-5 max-sm:flex-col w-full'>
        <div className='flex items-center'>
          <Image src={logo} alt='MelodyMentor-logo' className='max-sm:w-[40px] max-lg:w-[50px]' width={70} height={70} />
          <h1 className='font-extrabold text-5xl text-violet-500 max-md:text-2xl max-sm:text-xl max-lg:text-3xl'>MelodyMentor</h1>
        </div>
        <div className='flex gap-2'>
          <i className='bx text-black text-3xl bxl-facebook-circle max-sm:text-lg'></i>
          <i className='bx text-black text-3xl bxl-twitter max-sm:text-lg'></i>
          <i className='bx text-black text-3xl bxl-linkedin-square max-sm:text-lg' ></i>
          <i className='bx text-black text-3xl bxl-instagram-alt max-sm:text-lg' ></i>
        </div>
      </div>
      <div className='grid place-items-center gap-5 grid-cols-4 max-lg:grid-cols-2 max-lg:grid-rows-2 w-full'>
        <div className='flex justify-center flex-col p-5'>
          <h1 className='uppercase text-black font-extrabold pb-3'>Resource</h1>
          <h3 className='text-black font-semibold'>Apps</h3>
          <h3 className='text-black font-semibold'>Docs</h3>
          <h3 className='text-black font-semibold'>FAQ</h3>
        </div>
        <div className='flex justify-center flex-col p-5'>
          <h1 className='uppercase text-black font-extrabold pb-3'>Pricing</h1>
          <h3 className='text-black font-semibold'>Premium</h3>
          <h3 className='text-black font-semibold'>Promos</h3>
          <h3 className='text-black font-semibold'>Overview</h3>
        </div>
        <div className='flex justify-center flex-col p-5'>
          <h1 className='uppercase text-black font-extrabold pb-3'>Company</h1>
          <h3 className='text-black font-semibold'>About Us</h3>
          <h3 className='text-black font-semibold'>Blog</h3>
          <h3 className='text-black font-semibold'>Careers</h3>
        </div>
        <div className='flex justify-center flex-col p-5'>
          <h1 className='uppercase text-black font-extrabold pb-3'>Social</h1>
          <h3 className='text-black font-semibold'>Facebook</h3>
          <h3 className='text-black font-semibold'>Twitter</h3>
          <h3 className='text-black font-semibold'>LinkedIn</h3>
        </div>

      </div>
    </footer>
  )
}

export default Footer