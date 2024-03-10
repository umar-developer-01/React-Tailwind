import { useState, useEffect } from 'react';
import Workcation from "../assets/airbnb.jpeg";
import Button from './navBarWork/button';
import Anchor from './navBarWork/anchor';



const NavBar = () => {
    const [isOpen, setisOpen] = useState(false);

    const handleToggle = () => {
        setisOpen((prev) => !prev);
    }
    useEffect(() => {
        const handleResize = () => {
            // Check if the screen size is 'sm' or larger
            if (window.innerWidth >= 640) {
                setisOpen(true);
            } else {
                setisOpen(false);
            }
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Call handleResize once to set the initial state
        handleResize();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <header className="bg-pink-600 sm:flex sm:justify-between sm:px-4 sm:py-3">
                <div className="flex items-center justify-between px-4 py-3 sm:p-0">
                    <div>
                        <img src={Workcation} alt="workcation" className="h-6" />
                    </div>

                    <div className="sm:hidden">
                        <button onClick={handleToggle} type="button" className="text-gray-800 hover:text-white focus:text-white block">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 fill-current">
                                {isOpen && <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />}
                                {!isOpen && <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />}
                            </svg>
                        </button>
                    </div>
                </div>

                {isOpen && <div className="px-2 pt-2 pb-4 sm:flex">
                    <Anchor route={"/home"} className={"block px-2 py-1 text-white font-semibold rounded hover:bg-pink-300"} name={"List your property"} />
                    <Anchor route={"/contact-us"} className={"block px-2 py-1 mt-1 text-white font-semibold rounded hover:bg-pink-300 sm:mt-0 sm:ml-2"} name={"Trips"} />
                    <Anchor route={"/work"} className={"block px-2 py-1 mt-1 text-white font-semibold rounded hover:bg-pink-300 sm:mt-0 sm:ml-2"} name={"Message"} />
                </div>}
            </header>
        </>
    )
}

export default NavBar