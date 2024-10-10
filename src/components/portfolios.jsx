import React from 'react'

const Portfolios = ({projectLink, image, description}) => {
  return (
    <div>
        <a href={projectLink} target='_blank'>
            <img src={image} alt="Image representing the featured portfolio" className='h-[400px] w-full object-cover' />
        </a>
        <p className='text-white text-[19px] text-center p-4'>{description}</p>
    </div>
  )
}

export default Portfolios