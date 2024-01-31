
type drawerProps={
    closeDrawer:()=>void
}
const Sidedrawer = (props:drawerProps) => {

    const handleClose=(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        props.closeDrawer();
    }
  return (
    <div className="absolute top-14 right-0 bg-slate-100 z-100 p-10 md:hidden">
        <ul className='flex flex-col items-center gap-7'>
            <li><a onClick={handleClose} className='font-bold text-black active:bg-violet-200 px-2 py-1 rounded' href="#">Home</a></li>
            <li><a onClick={handleClose} className='font-bold text-black active:bg-violet-200 px-2 py-1 rounded' href="#">Courses</a></li>
            <li><a onClick={handleClose} className='font-bold text-black active:bg-violet-200 px-2 py-1 rounded' href="#">About</a></li>
            <li><a onClick={handleClose} className='bg-white border-2 border-black text-black font-bold px-2 py-1 rounded-xl hover:text-white hover:bg-black' href="#">SignUp</a></li>
        </ul>
    </div>
  )
}

export default Sidedrawer