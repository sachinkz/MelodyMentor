import Link from "next/link";
import SIdeNavbar from "../SideNavbar/SIdeNavbar";

type drawerProps = {
    closeDrawer: () => void
    onStartPage: boolean
}
const Sidedrawer = (props: drawerProps) => {

    const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.closeDrawer();
    }


    return (
        <div className="absolute w-[200px] max-w-[250px] top-16 right-0  overflow-y-visible bg-[#353535] z-50 p-auto lg:hidden">
            <ul className='flex flex-col items-center gap-7 py-5'>
            <Link className={`font-bold active:bg-violet-200 px-2 py-1 rounded w-[80%] ${!props.onStartPage ?' border-2 rounded-md' :''} flex justify-center`} href='/home'><li onClick={() => handleClose}>Home</li></Link>
            <Link className={`font-bold active:bg-violet-200 px-2 py-1 rounded w-[80%] ${!props.onStartPage ?' border-2 rounded-md' :''} flex justify-center`} href='/liveclass'><li onClick={() => handleClose}>Live Sessions</li></Link>
            <Link className={`font-bold active:bg-violet-200 px-2 py-1 rounded w-[80%] ${!props.onStartPage ?' border-2 rounded-md' :''} flex justify-center`} href='/home'><li onClick={() => handleClose}>Songs</li></Link>
            <Link className={`font-bold active:bg-violet-200 px-2 py-1 rounded w-[80%] ${!props.onStartPage ?' border-2 rounded-md' :''} flex justify-center`} href='/home'><li onClick={() => handleClose}>I am tutor</li></Link>
            <Link className={`font-bold active:bg-violet-200 px-2 py-1 rounded w-[80%] ${!props.onStartPage ?' border-2 rounded-md' :''} flex justify-center`} href='/auth/membership'><li onClick={() => handleClose}>Subscribe</li></Link>
            <Link className='font-bold active:bg-violet-200 px-2 py-1 w-[80%] flex justify-center border-2 rounded-md bg-white text-black' href='/auth/register'><li onClick={() => handleClose}>SignUp</li></Link>
            </ul>
            {!props.onStartPage&&(
                <div onClick={()=>handleClose}>
                    <hr className="opacity-30 mb-5" />
                    <SIdeNavbar show={true}/>
                </div>
            )}
        </div>
    )
}

export default Sidedrawer