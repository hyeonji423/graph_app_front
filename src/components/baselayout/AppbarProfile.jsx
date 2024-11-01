import React from 'react'
import { Images } from './../../assets/images'
import { Icons } from '../../assets/icons'

const AppbarProfile = () => {
  return (
    <div className='appbar-profile profile-dropdown cursor-pointer'>
      <div className='drop-info flex items-center gap-x-2'>
        <div className="drop-info-img h-8 w-8 overflow-hidden rounded-full">
          <img src={Images.ProfileImage} alt="" className='w-full h-full object-cover' />
        </div>
        <div className="drop-info-text">
          <div className="text-group flex flex-col min-w-20 mt-2 justify-center leading-4">
            <span className='overflow-hidden'>Marshall</span>
            <span className='text-sm text-neutral-400 font-light'>Admin</span>
          </div>
        </div>
        <img src={Icons.ChevronDownDark} alt="" className='w-5 h-5 dark:invert-[1] dark:brightness-[100%]'/>
      </div>
    </div>
  )
}

export default AppbarProfile