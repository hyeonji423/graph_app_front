import React from 'react'
import HeadTitle from './HeadTitle'
import { Icons } from './../../assets/icons'
import { SALES_LISTS } from '../arrayLists/menuLists'

const Sales = () => {
  return (
    <div className='block-wrap w-full'>
      <div className='block-head flex items-center justify-between'>
        <HeadTitle title="Today's Sales"/>
        <div className="block-head-export">
          <button className='export-btn flex items-center gap-1.5 border border-solid border-neutral-500 rounded-lg py-0.5 px-2'>
            <img src={Icons.ExportDark} alt="export" className='invert-[1] brightness-[100%]' />
            <span className='next'>Export</span>
          </button>
        </div>
      </div>

      <div className="seles-cards sm:grid sm:grid-cols-4 gap-4 mt-6 flex flex-wrap">
        {
          SALES_LISTS.map((item, index)=>(
            <div key={index} className='card-item rounded-md py-4 px-4 border border-neutral-700 w-[calc(50%-8px)] sm:w-auto'>
              <div className="card-item-icon rounded-full w-10 h-10 flex items-center justify-center border border-neutral-800 dark:border-neutral-400">
                <img src={item.src} alt={item.title} className='w-6 brightness-0 dark:brightness-[100%]' />
              </div>
              <div className="card-item-value font-bold text-xl mt-3 mb-1">{item.value}</div>
              <p className='card-item-title font-semibold mb-3'>{item.title}</p>
              <span className='card-item-text text-[14px]'>{item.text}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Sales