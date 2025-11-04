import { Link } from "react-router";

function Footer() {
    return ( <footer className="bg-black text-center text-white p-2 absolute bottom-0 left-0 right-0">
                 <section className="flex gap-1 items-center justify-center">
                    <Link to={"/"} className="p-2 font-semibold underline block mb-2">Home</Link>
                    <Link to={"/about"} className="p-2 font-semibold underline block mb-2">About Us</Link>
                    <Link to={"/contact"} className="p-2 font-semibold underline block mb-2">Contact Me</Link>
                 </section>
                 <p className="text-center">&copy;{new Date().getFullYear()} Unifinder. All rights reserved.</p>
             </footer> );
}

export default Footer;