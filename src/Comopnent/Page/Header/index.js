import React from 'react';
import img from "../../Assect/shivam.jpeg"

const Header = () => {
    return (
        <div className='px-10 bg-gradient-to-r from-indigo-500 py-5'>
           <div className='border rounded flex justify-between py-5 px-5 '>
            <p className='text-4xl font-bold'>Shivam Tiwari</p>
            <p className='border font-bold  rounded-md py-3 px-3 cursor-pointer hover:bg-gradient-to-r hover:from-sky-500'>Contact Us</p>

           </div>
            
        </div>
    );
}

export default Header;
