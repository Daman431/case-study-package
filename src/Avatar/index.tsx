import * as React from 'react';
interface IAvatar {
    imgSrc: string;
    addMoney?: boolean;
    className?: string;
}

const Avatar = ({ imgSrc, addMoney, className }: IAvatar) => {
    const money = ''
    return (
        <div className={`absolute bottom-[10%] left-[6%] scale-[.9] ${className}`}>
            <img src={imgSrc}></img>
            {
                addMoney && <img src={money} className='absolute top-[-10px] left-[0%]'></img>
            }
        </div>
    )
}

export default Avatar