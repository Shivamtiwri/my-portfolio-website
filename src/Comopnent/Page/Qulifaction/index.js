import React from 'react';


const Qulifaction = () => {
    return (
        <div className='bg-sky-200 py-10'>
            <p className='text-center text-5xl font-bold capitalize border-b-2 border-black py-2'>qulifaction</p>
            <div className='flex justify-between gap-5 my-10 px-20 '>
                <span className='border border-black p-10 '>
                    <p className='text-4xl font-bold my-2 '>CLASS: X UP BOARD</p>
                    <p className='text-xl font-bold my-2'>RAM LAL INTER COLLOGE CHAUHAN PURWA (GONDA)</p>
                    <p className='font-bold  underline my-2 text-pink-500 '>04/2018 To 03/2019</p>
                    <span className='flex gap-5 my-2'>
                        <p className='text-red-500 font-bold'>Percentage:</p><p className='font-bold'>73.5%</p>
                    </span>
                </span>
                <span className='border border-black p-10 '>
                    <p className='text-4xl font-bold my-2 '>DIPLOMA IN COMUTER SCIENCE & ENGG...</p>
                    <p className='text-xl font-bold my-2'>GOVERMNENT POLYTECHNIC AADAMAPUR TARABGANJ (GONDA)</p>
                    <p className='font-bold  underline my-2 text-pink-500 '>08/2019 To 07/2022</p>
                    <span className='flex gap-5 my-2'>
                        <p className='text-red-500 font-bold '>Percentage:</p><p className='font-bold'>77.67%</p>
                    </span>
                </span>
               
            </div>
            
        </div>
    );
}

export default Qulifaction;
