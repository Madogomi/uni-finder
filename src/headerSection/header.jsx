import { Link } from 'react-router';
import reactImg from '../assets/react.svg'

function Header() {
    return ( <header
                className="p-2
                          flex
                          bg-[#b1a8a8]
                          gap-[1%]
                          justify-start
                          items-center
                          relative"
                data-aos="zoom-in"
                data-aos-duration="100"
                data-aos-easing="ease-in-out"
             >
                 <img src={reactImg} alt="logo" className="h-10" />
                 <h1 className="text-3xl font-black"
                 data-aos="zoom-in-right"
                 data-aos-duration="100"
                 data-aos-easing="ease-in-out">Unifinder</h1>

                 <nav className='flex gap-1 absolute right-1'>
                    <Link className="bg-black rounded-xl hover:bg-[#504949] text-white p-1" to="/">Home</Link>
                    <Link className="bg-black rounded-xl hover:bg-[#504949] text-white p-1" to="/about">About Us</Link>
                 </nav>
             </header> );
}

export default Header;