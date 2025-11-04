import { Link } from "react-router";


function NotFound() {
    return ( <div className="text-center">
              <h2 className="mt-[10%] text-2xl font-bold">Oops! Page not found.</h2>
              <p className="mb-5 text-xl">The page you're looking for does not exist.</p>
              <Link to="/" className="m-5 bg-black rounded-4xl text-white p-4">Go back home</Link>
             </div> );
}

export default NotFound;