import React from 'react';

const InputTextBox = ({ inpType, inpPatten, fieldError, inpHolder, inpName, inpValue, inpChange }) => {
  return (
    <input type={inpType} 
        placeholder={inpHolder}
        name={inpName} 
        value={inpValue}
        pattern={inpPatten}
        onChange={inpChange}
        className={`w-full outline-0 outline-none 
          border-b-2 ${fieldError ? 'border-red-500' : 'border-[#FFFFFF]'}  px-3 py-2
          bg-transparent placeholder:text-white`}
    />
  )
}

const InputTextBox2 = ({ inpType, inpPatten,  fieldError, inpHolder, inpName, inpRef }) => {
  return (
    <input type={inpType} 
        pattern={inpPatten} 
        placeholder={inpHolder}
        name={inpName} 
        ref={inpRef}
        className={`w-full outline-0 outline-none 
          border-b-2 ${fieldError ? 'border-red-500' : 'border-[#FFFFFF]'}  px-3 py-2
          bg-transparent placeholder:text-white`}
    />
  )
}

const InputTextArea = ({ fieldError, textHolder, textName, textValue, textChange }) => {
  return (
    <textarea  
        placeholder={textHolder}
        name={textName} 
        value={textValue}
        onChange={textChange}
        rows={4}
        className={`w-full outline-0 outline-none 
          border-b-2 ${fieldError ? 'border-red-500' : 'border-[#FFFFFF]'} px-3 py-2
          bg-transparent placeholder:text-white`}
    />
  )
}

const InputTextArea2 = ({ fieldError, textHolder, textName, textRef }) => {
  return (
    <textarea  
        placeholder={textHolder}
        name={textName} 
        ref={textRef}
        rows={4}
        className={`w-full outline-0 outline-none 
          border-b-2 ${fieldError ? 'border-red-500' : 'border-[#FFFFFF]'} px-3 py-2
          bg-transparent placeholder:text-white`}
    />
  )
}

export { InputTextBox, InputTextBox2, InputTextArea, InputTextArea2 } 
