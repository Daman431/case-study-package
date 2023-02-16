import React, { ReactNode } from 'react'
interface IThoughtBubble {
    children: ReactNode;
}

const ThoughtBubble = ({ children }: IThoughtBubble) => {
    return (
        <div className={`!bg-[url(./assets/thought_bubble.svg)] !aspect-[1.63] p-[50px] max-w-[550px] bg-contain bg-no-repeat absolute left-[20%] font-[400] bottom-[45%] zoomOut flex`}>
            <div className='!my-auto'>
                {children}
            </div>
        </div>
    )
}

export default ThoughtBubble