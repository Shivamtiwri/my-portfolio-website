import React from 'react';
import img from "../../Assect/shivam.jpeg"

const Header = () => {
    return (
        <div>
            <div className='flex items-center justify-between bg-blue-100 px-5 py-5 '>
                <p className='font-bold text-black text-4xl'>Shivam Tiwari</p>
                <img src={img} alt='' className='rounded-full h-52 w-52'/>
            </div>
            
        </div>
    );
}

export default Header;
