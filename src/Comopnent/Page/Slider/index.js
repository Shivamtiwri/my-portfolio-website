import React from 'react';
import img from "../../Assect/shivam.jpeg"

const Slider = () => {
    return (
        <div id="abc">
            <div className='py-5 flex justify-between px-10'>
                <span className='flex flex-col justify-center items-center'>
                <p className='text-white text-3xl'>REACT JS DEVELOPER</p>
                <p className='text-7xl font-bold text-white my-2 '>SHIVAM </p>
                <p className='text-7xl font-bold text-white pl-10 my-1'>TIWARI </p>
                <span className='text-white'>
                    <p className='text-xl'>I'm  a React js  </p>
                    <p className='text-xl'>developer and i work  </p>
                    <p className='text-xl'>WFO from Lucknow</p>
                </span>

                </span>
                <span>
                    <img src={img} alt='shivam tiwari' className='h-96 w-96 rounded-full'/>

                </span>
               
            </div>
            
        </div>
    );
}

export default Slider;
