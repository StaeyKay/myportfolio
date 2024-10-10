import React from 'react'

const ResumeCards = ({duration, title, summary, location}) => {
  return (
    <div className='bg-[#333333] p-8 rounded-2xl space-y-3'>
        <p className='text-[12px]'>{duration}</p>
        <h4 className='text-[#BAC964] text-[20px]'>{title}</h4>
        <p className='text-[#FFFFFF66] text-[16px]'>{summary}</p>
        <p className='text-[#858585] text-[16px]'>{location}</p>
    </div>
  )
}

export default ResumeCards