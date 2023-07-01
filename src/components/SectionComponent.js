import React, { useState } from 'react';

//Sections Div
const SectionComponent = ({ item }) => {

    switch (item) {
        case 'BOX1':
            return (<div className='md:w-[500px] w-[200px] min-h-[140px] h-auto px-2 text-center md:mx-8 mx-4 rounded-xl shadow-white shadow-sm bg-stone-500 mb-1 overflow-hidden'>
                <h1 className='font-bold'> BOX1 </h1>
            </div>)

        case 'BOX2':
            return (<div className='md:w-[500px] w-[200px] min-h-[140px] h-auto px-2 text-center md:mx-8 mx-4 rounded-xl shadow-white shadow-sm bg-stone-500 mb-1 overflow-hidden'>
                <h1 className='font-bold'>BOX2</h1>
            </div>)

        case 'BOX3':
            return (<div className='md:w-[500px] w-[200px] min-h-[140px] h-auto px-2 text-center md:mx-8 mx-4 rounded-xl shadow-white shadow-sm bg-stone-500 mb-1 overflow-hidden'>
                <h1 className='font-bold'>BOX3</h1>
            </div>)

        case 'BOX4':
            return (<div className='md:w-[500px] w-[200px] min-h-[140px] h-auto px-2 text-center md:mx-8 mx-4 rounded-xl shadow-white shadow-sm bg-stone-500 mb-1 overflow-hidden'>
                <h1 className='font-bold'>BOX4</h1>
            </div>)

        case 'BOX5':
            return (<div className='md:w-[500px] w-[200px] min-h-[140px] h-auto px-2 text-center md:mx-8 mx-4 rounded-xl shadow-white shadow-sm bg-stone-500 mb-1 overflow-hidden'>
                <h1 className='font-bold'>BOX5</h1>
            </div>)

        default:
            return null;
    }
}

export default SectionComponent