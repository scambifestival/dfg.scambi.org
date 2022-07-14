import React from 'react';
import ReactPlayer from 'react-player'

const Header = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto my-10 text-left flex flex-col justify-between xl:items-center  xl:flex-row'>
                <div>
                    <h1 className='leading-none'>Scambi Festival</h1>
                    <h3>The Festival of Paneuretic Workshops, free for all to attend</h3>
                </div>
                <p className='font-semibold'>
                    <span className='text-2xl'>August 25 - 28, 2022</span> <br />
                    <span className='text-lg'>La Pigna, Sanremo, Italy</span>
                </p>
            </div>
            <div className='min-h-[20rem] mx-5 flex justify-center md:min-h-[32rem] md:mx-10 md:mt-10 xl:mt-16'>
                <ReactPlayer width='100%' height='auto' url='https://vimeo.com/658183199' />
            </div>
        </div>
    );
};

export default Header;