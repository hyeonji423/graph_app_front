import React, { useState } from 'react'
import { Icons } from '../../assets/icons'
import { MdOutlineClose } from "react-icons/md"
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { MENU_LISTS, routes } from '../arrayLists/menuLists'


const Sidebar = () => {
  const [currentTab, setCurrentTab] = useState(0)
  const selectMenuHandler = (index) => {
    setCurrentTab(index)
  }

  return (
    <div className='sidebar-wrapper dark:bg-neutral-900 bg-white py-5 px-4 dark:shadow-[0_0.125rem_0.25rem_rgba(180,180,180,0.3)] shadow-[0_0.125rem_0.25rem_rgba(165,163,174,0.3)] w-[20%] h-full flex flex-col rounded-sm z-[999] fixed left-0'>
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

      <div className="sidebar-body flex w-full mt-[8rem] ">
        <BrowserRouter>
          <Routes>
            {
              routes.map((route, index)=>(
                <Route key={index} path={route.path} element={route.element}/>
              ))
            }
          </Routes>
          <div className="sidebar-menu w-full">
            <ul className='menu-lists grid gap-y-1.5'>
              {
                MENU_LISTS.map((menu, index)=>(
                  <li key={index}>
                    <Link to={routes[index].path} className={`h-11 flex items-center gap-x-4 py-0.5 px-5 dark:text-neutral-300
                      ${index === currentTab ? 'bg-indigo-800 dark:text-white rounded-sm' : ''}`}
                      onClick={()=>selectMenuHandler(index)}>

                      <span className='menu-link-icdon w-5'>
                        <img src={menu.icon} alt={menu.alt} />
                      </span>

                      <span className='menu-link-text'>
                        {menu.title}
                      </span>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default Sidebar