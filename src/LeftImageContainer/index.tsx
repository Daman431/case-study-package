import React from 'react'

interface ILeftImageContainer {
    imgSrc: string;
}

const LeftImageContainer = ({ imgSrc }: ILeftImageContainer) => {
    return (
        <div className={`p-[30px] absolute left-[5%] max-w-[45%] font-[400] bottom-0 top-0 h-max my-auto align-middle`}>
            <img src={imgSrc} className='object-contain' ></img>
        </div>
    )
}

export default LeftImageContainer