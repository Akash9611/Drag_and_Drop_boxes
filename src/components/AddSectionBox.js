import React, { useState } from 'react'
import SectionBoxComponent from './SectionBoxComponent';

const AddSectionBox = () => {
    const [showSectionDropdown, setShowSectionDropdown] = useState(false);
    const [createdSections, setCreatedSections] = useState([]);


    // toggling Add-Sections button 
    const selectionHandler = () => {
        setShowSectionDropdown(showSectionDropdown => !showSectionDropdown)
    }

    // passing/adding & checking the dropdown clicked value
    const selectItemOnClick = (value) => {
        if (!createdSections.includes(value)) { //add the value in [] if value(list item)is not already present
            setCreatedSections([...createdSections, value])
        }
    }

    //Drag and drop functionality logic for Sections
    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('index', index);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, index) => {
        e.preventDefault();
        const oldIndex = e.dataTransfer.getData('index');
        const newCreatedSections = [...createdSections];
        newCreatedSections.splice(index, 0, newCreatedSections.splice(oldIndex, 1)[0]);
        setCreatedSections(newCreatedSections);
    };
    // console.log(createdSections); send this to backend to store the new positions of Sections div

    return (
        <div className='pt-4 overflow-hidden'>
            <div className='flex justify-between mb-4 md:gap-20 lg:gap-60 gap-10'>

                {/* Section Toggle */}
                <div className='md:pr-10 pr-7 z-10'>
                    <button type='button' onClick={selectionHandler} className='p-2 px-4 bg-green-500 ml-3'>Add</button>

                    {/* Section Dropdown list  */}
                    {showSectionDropdown &&
                        <div className='bg-secondary-dark-bg overflow-hidden mt-1 fixed left-2' >
                            <ul className='bg-secondary-dark-bg text-start cursor-pointer'>
                                <li onClick={() => selectItemOnClick('box1')} className='border border-black md:p-1 md:px-4 px-4 md:text-base text-sm  hover:border-2 hover:border-blue-200'>Box1</li>
                                <li className='border border-black md:p-1 p-[2px] md:px-4 px-4 md:text-base text-sm  hover:border-2 hover:border-blue-200' onClick={() => selectItemOnClick('box2')}>Box2</li>
                                <li className='border border-black md:p-1 p-[2px] md:px-4 px-4 md:text-base text-sm  hover:border-2 hover:border-blue-200' onClick={() => selectItemOnClick('box3')}>Box3</li>
                                <li className='border border-black md:p-1 p-[2px] md:px-4 px-4 md:text-base text-sm  hover:border-2 hover:border-blue-200' onClick={() => selectItemOnClick('box4')}>Bo4</li>
                                <li className='border border-black md:p-1 p-[2px] md:px-4 px-4 md:text-base text-sm  hover:border-2 hover:border-blue-200' onClick={() => selectItemOnClick('box5')}>Box5</li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
            {/* Mapping Sections Div/Boxes */}
            <div className='w-auto flex items-center justify-center flex-col'>
                {createdSections.map((itemVal, index) => (
                    //passing values to { item, onDragStart, onDragOver, onDrop } props
                    <SectionBoxComponent key={index}
                        item={itemVal}
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, index)}
                    />
                ))}
                {/* <button type='submit' onClick={handleAddProduct}>Add</button> */}
            </div>
        </div>
    )
}

export default AddSectionBox