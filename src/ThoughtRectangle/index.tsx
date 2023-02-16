import React, { ReactNode } from 'react'

interface IThoughtRectangle {
    children: ReactNode;
    className?: string;
}

const ThoughtRectangle = ({children, className}:IThoughtRectangle) => {
  return (
      <div className={` bg-[#FFF2CD] rounded-[50%/10%] tv !aspect-[3.03] p-[30px] max-w-[613px] shadow-[3.14286px_3.14286px_0px_#FFE18D]  !bg-cover bg-no-repeat absolute left-[10%] font-[400] bottom-0 top-0 h-max my-auto align-middle flex ${className}`}>
          <div className='!my-auto'>
              {children}
          </div>
      </div>
  )
}

export default ThoughtRectangle