import React from 'react'
import {Icons} from '../../assets/icons'
import { MdOutlineClose } from "react-icons/md"

const Sidebar = () => {
  return (
    <div className='sidebar-wrapper dark:bg-neutral-900 bg-white py-5 px-4 dark:shadow-[0_0.125rem_0.25rem_rgba(180,180,180,0.3)] shadow-[0_0.125rem_0.25rem_rgba(165,163,174,0.3)] w-[30%] h-full flex flex-col rounded-sm z-[999] fixed left-0'>
      <div className='sidebar-top mb-8 flex items-center justify-between'>
        <div className="sidebar-brand flex items-center justify-center gap-x-3">
          <span className='brand-logo bg-indigo-800 rounded-md w-8 h-8 flex place-content-center'>
            <img src={Icons.LogoWhite} alt="logo" className='w-6' />
          </span>
          <span className='brand-text'>HyeonJi</span>
        </div>
        <button className='sidebar-close text-black p-[0.125rem] rounded-sm bg-neutral-500 cursor-pointer hover:bg-neutral-200'>
          <MdOutlineClose />
        </button>
      </div>
      <div className="sidebar-body"></div>
    </div>
  )
}

export default Sidebar