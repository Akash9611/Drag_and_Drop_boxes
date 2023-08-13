import React, { useEffect, useState } from 'react'
import SectionComponent from './SectionComponent';

//Start updating
const AddProducts = () => {
    const [showBoxDropdown, setShowBoxDropdown] = useState(false);
    // const [selectedItem, setSelectedItem] = useState('');
    const [createdBox, setCreatedBox] = useState([]);


    // toggling Add-Sections button 
    const selectionHandler = () => {
        setShowBoxDropdown(showBoxDropdown => !showBoxDropdown)
    }

    // passing/adding & checking the dropdown clicked value
    const selectItemOnClick = (value) => {
        // setSelectedItem(value);

        if (!createdBox.includes(value)) { //add the value in [] if value(list item)is not already present
            setCreatedBox([...createdBox, value])
        }
    }

    // console.log(createdBox); send this to backend to store the new positions of Sections div

    return (
        <div className='pt-4 overflow-hidden flex flex-col items-center'>
            <div className='flex mx-14 md:gap-20 lg:gap-60 gap-10'>
                {/* Dropdown Toggle */}
                <div className='md:pr-10 pr-7 z-10 fixed md:top-4 top-0 md:left-80 left-1'>
                    <button type='button' onClick={selectionHandler} className='p-2 bg-green-500'>Add Box</button>

                    {/* Section Dropdown list  */}
                    {showBoxDropdown &&
                        <div className='bg-slate-200 rounded-md overflow-hidden mt-1 fixed' >
                            <ul className='bg-secondary-dark-bg text-start cursor-pointer'>
                                <li onClick={() => selectItemOnClick('BOX1')} className='border-b border-black rounded md:p-1 p-[2px] md:px-4 px-4 md:text-base text-sm  hover:border-2 hover:border-blue-200'>BOX1</li>

                                <li className='border-b border-black rounded md:p-1 p-[2px] md:px-4 px-4 md:text-base text-sm  hover:border-2 hover:border-blue-200' onClick={() => selectItemOnClick('BOX2')}>BOX2</li>

                                <li className='border-b border-black rounded md:p-1 p-[2px] md:px-4 px-4 md:text-base text-sm  hover:border-2 hover:border-blue-200' onClick={() => selectItemOnClick('BOX3')}>BOX3</li>

                                <li className='border-b border-black rounded md:p-1 p-[2px] md:px-4 px-4 md:text-base text-sm  hover:border-2 hover:border-blue-200' onClick={() => selectItemOnClick('BOX4')}>BOX4</li>

                                <li className='border-b border-black rounded md:p-1 p-[2px] md:px-4 px-4 md:text-base text-sm  hover:border-2 hover:border-blue-200' onClick={() => selectItemOnClick('BOX5')}>BOX5</li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
            {/* Mapping Sections Div/Boxes */}
            {createdBox.map((itemVal, index) => (
                //passing values to { item, onDragStart, onDragOver, onDrop } props
                <SectionComponent key={index}
                    item={itemVal}
                    className='flex justify-center items-center'
                />
            ))}
        </div>
    )
}

export default AddProducts