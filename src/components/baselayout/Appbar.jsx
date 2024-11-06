import React from 'react'
import { MdOutlineMenu } from 'react-icons/md'
import { Icons } from '../../assets/icons'
import AppbarProfile from './AppbarProfile'
import ModeCtrl from './ModeCtrl'
import AppbarLang from './AppbarLang'
import { useDispatch } from 'react-redux'
import { setSidebarOpen } from '../../redux/slices/sidebarSlice'

const Appbar = () => {
  // const isSidebarOpen = useSelector((state)=>state.sidebar.isSidebarOpen)
  const dispatch = useDispatch()
  // console.log(isSidebarOpen);

  return (
    <div className='appbar-wrapper lg:ml-[calc(20%+14px)] lg:w-[calc(80%-28px)] w-full py-3 px-6 bg-white dark:bg-neutral-900 rounded-sm dark:shadow-[0_0_0.25rem_rgba(255,255,255,0.3)] shadow-[0_0_0.25rem_rgba(165,163,174,0.3)]'>
      <div className="appbar_content flex justify-between items-center">
        <div className="appbar-left flex items-center gap-x-3">
          <button className='lg:hidden' onClick={()=>dispatch(setSidebarOpen())}>
            <MdOutlineMenu size={24}/>
          </button>
          <h3 className='appbar-title text-xl font-semibold'>Dashbord</h3>
        </div>
        <div className="appbar-right flex items-center gap-4">

          <div className="appbar-search">
            <form>
              <div className="input-group flex items-center bg-neutral-300 dark:bg-neutral-800 h-10 lg:h-11 lg:w-80 py-0 px-2 lg:py-1 lg:px-3 rounded-md">
                <span className='input-icon w-5 flex place-content-center'>
                  <img src={Icons.SearchBlue} alt="input icon" />
                </span>
                <input type="text" placeholder='Search here ...' className='border-none outline-none text-[15px] px-3 bg-neutral-300 dark:bg-neutral-800 text-neutral-950 dark:text-white placeholder-neutral-800 dark:placeholder-neutral-500 min-w-20 lg:min-w-80 sm:min-w-60'/>
              </div>
            </form>
          </div>

          <AppbarLang/>

          <button className='w-8 h-8 rounded-md relative hidden lg:block'>
            <img src={Icons.NotificationOrange} alt="" className='w-6' />
            <span className='w-1.5 h-1.5 rounded-full bg-red-600 absolute top-1 right-1'></span>
          </button>

          <AppbarProfile/>
          <ModeCtrl/>
        </div>
      </div>
    </div>
  )
}

export default Appbar