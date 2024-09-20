import React from "react";
const Navbar = () => {
    return (
        <div className="flex text-white items-center justify-between shadow-sm py-4 mx-5">
            <div className="flex text-xl items-center gap-6">
                <h2 className="">Home</h2>
                <h2 className="">Profile</h2>
            </div>

            <div>
                <h1 className="font-bold text-4xl">Carental</h1>
            </div>

            <div>
                <h2 className="text-xl" >Settings</h2>
            </div>


        </div>
    );
}

export default Navbar;