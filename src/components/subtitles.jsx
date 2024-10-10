import React from 'react'

const Subtitles = ({text1, text2}) => {
  return (
    <div className='text-white flex text-[30px] gap-2 pb-12'>
        <span>{text1}</span>
        <span className='font-bold'>{text2}</span>
    </div>
  )
}

export default Subtitles