import React from 'react'

const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button className={`justify-center items-center gap-2 px-7 py-4 border font-poppins text-lg leading-none 
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