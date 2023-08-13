import React from 'react';

const SectionBoxComponent = ({ item, onDragStart, onDragOver, onDrop }) => {

    switch (item) {
        case 'box1':
            return (<div className='w-[60%] min-h-[100px] h-auto px-2 text-start md:mx-8 mx-4 rounded-xl shadow-white shadow-sm mb-1 bg-slate-500 overflow-hidden'
                draggable
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDrop={onDrop}>
                <h1 className='font-bold text-white'> Box1</h1>
            </div>)

        case 'box2':
            return (<div className='w-[60%] min-h-[100px] h-auto px-2 text-start md:mx-8 mx-4 rounded-xl shadow-white shadow-sm mb-1 bg-slate-500 overflow-hidden'
                draggable
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDrop={onDrop}>
                <h1 className='font-bold text-white'>Box2</h1>
            </div>)

        case 'box3':
            return (<div className='w-[60%] min-h-[100px] h-auto px-2 text-start md:mx-8 mx-4 rounded-xl shadow-white shadow-sm mb-1 bg-slate-500 overflow-hidden'
                draggable
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDrop={onDrop}>
                <h1 className='font-bold text-white'>Box3</h1>
            </div>)

        case 'box4':
            return (<div className='w-[60%] min-h-[100px] h-auto px-2 text-start md:mx-8 mx-4 rounded-xl shadow-white shadow-sm mb-1 bg-slate-500 overflow-hidden'
                draggable
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDrop={onDrop}>
                <h1 className='font-bold text-white'>Box4</h1>
            </div>)

        case 'box5':
            return (<div className='w-[60%] min-h-[100px] h-auto px-2 text-start md:mx-8 mx-4 rounded-xl shadow-white shadow-sm mb-1 bg-slate-500 overflow-hidden'
                draggable
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDrop={onDrop}>
                <h1 className='font-bold text-white'>Box5</h1>
            </div>)

        default:
            return null;
    }
}

export default SectionBoxComponent