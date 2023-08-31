import React from 'react'

const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 lg:px-7 lg:py-4 px-4 py-2 border font-poppins lg:text-lg md:text-sm text-[10px] leading-none 
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-purple text-white border-purple"
      } rounded-full ${fullWidth && 'w-full'}"}`}
      >
        {label}
        {iconURL && <img 
            src={iconURL}
            alt="arrow right icon"
            className="ml-2 rounded-full w-5 h-5"
        />}
    </button>
  )
}

export default Button