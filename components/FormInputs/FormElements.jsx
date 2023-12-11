import React from 'react'

const InputTextBox = ({ inpType, inpHolder, inpName, inpValue, inpChange }) => {
  return (
    <input type={inpType} 
        placeholder={inpHolder}
        name={inpName} 
        value={inpValue}
        onChange={inpChange}
        className='w-full outline-0 outline-none 
            border-b-2 border-[#FFFFFF] px-3 py-2
            bg-transparent placeholder:text-white'
    />
  )
}

const InputTextArea = ({ textHolder, textName, textValue, textChange }) => {
    return (
      <textarea  
          placeholder={textHolder}
          name={textName} 
          value={textValue}
          onChange={textChange}
          rows={4}
          className='w-full outline-0 outline-none 
            border-b-2 border-[#FFFFFF] px-3 py-2
            bg-transparent placeholder:text-white'
      />
    )
  }

export { InputTextBox, InputTextArea } 
