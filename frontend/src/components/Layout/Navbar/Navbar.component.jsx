import { useState, Fragment } from "react";
import { useHistory, withRouter, Link } from "react-router-dom";

import SearchBar from "../../Common/SearchBar/SearchBar.component";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Fragment>
            <nav
                className="px-4 sm:px-6 sticky top-0 z-10 bg-white"
                role="navigation"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center py-6">
                        <Link
                            to="/"
                            className="text-gray-900 text-3xl font-extrabold tracking-tight"
                        >
                            Ticket-Logger
                        </Link>

                        <div
                            className="px-4 cursor-pointer md:hidden"
                            onClick={toggle}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </div>

                        <div className="md:block hidden">
                            <SearchBar
                                className={"Search-Bar relative text-gray-600"}
                            />
                            {
                                // !token ?
                                // <Fragment>
                                //     <Link
                                //     to="/partners/signup"
                                //     className="ml-8 whitespace-nowrap text-base font-light text-gray-500 hover:text-purple-400"
                                // >
                                //     Be one of our partners!
                                // </Link>
                                // <Link
                                //     to="/signup"
                                //     className="ml-8 whitespace-nowrap text-base font-light text-gray-500 hover:text-green-400"
                                // >
                                //     Looking for properties? Join us.
                                // </Link>
                                // <Link
                                //     to="/signin"
                                //     className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-400 hover:bg-red-500"
                                // >
                                //     Sign In
                                // </Link>
                                // </Fragment>
                                // :
                                // <Fragment>
                                // <Link
                                //     to={role === "user" ? "/recommendations" : "/properties"}
                                //     className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                                // >
                                //     {role === "user" ? "Recommendations" : "Properties"}
                                // </Link>
                                // <Link
                                //     to="/account"
                                //     className="ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                                // >
                                //     Account
                                // </Link>
                                // <a
                                //     onClick={()=>handleClick()}
                                //     className="ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                                // >
                                //     Logout
                                // </a>
                                // </Fragment>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;
