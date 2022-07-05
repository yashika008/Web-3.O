import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';
import logo from '../../images/logo.png'
const NavbarItem = ({ title, classProps}) => {
return(
<li className={'mx-4 cursor-pointer ${classProps}'}>{title}</li>
);
}
const Navbar = () => {
const[toggleMenu, setToggleMenu] = useState(false);

return(
    /*Use w-{fraction} or w-full to set an element to a percentage based width. md means 
    on medium devices justify is going to be on center. p-4 sets padding to 4*/
    <nav className='w-full flex md:justify-center justify-between items-center p-4'>
    <div className='md:flex-[0.5] flex-initial justify-center items-center'>

    <img src={logo} alt="logo" className='w-32 cursor-pointer' /> 
    </div>
  {/* The map() method creates a new array populated with the results of calling a provided function on every element in the calling array*/}
    <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
{["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
<NavbarItem key={item + index} title={item}/>
))}
<li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>Login</li>
    </ul>
    <div className='flex relative'>
        {toggleMenu
        ? <AiOutlineClose fontSize ={28} className="text-white md:hidden cursor-pointer" onClick = {() => setToggleMenu(false)} />
        :<HiMenuAlt4 fontSize ={28} className="text-white md:hidden cursor-pointer" onClick = {() => setToggleMenu(true)} />}
        {toggleMenu && (
            <ul
            className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2x1 md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism
            text-white animate-slide-in
            '>
            <li className='text-x1 w-full my-8'>
            <AiOutlineClose onClick={() => setToggleMenu(false)} />
            
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
<NavbarItem key={item + index} title={item} classProps = "my-8 text-lg "/>
))}
            </ul>
        )}
    </div>
    </nav>
);
}

export default Navbar;