import React from 'react'

const HeadTitle = (props) => {
  return (
    <div>
      <div className='block-head'>
        <div className='block-title mt-1'>
          <h3 className='md:text-lg text-sm font-semibold'>{props.title}</h3>
        </div>
      </div>
    </div>
  )
}

export default HeadTitle