import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTargetReality } from '../../redux/slices/apiSlice'
import HeadTitle from './HeadTitle'
import { BarChart, Bar, ResponsiveContainer, XAxis } from 'recharts';
import { TARGET_REALITY_LISTS } from '../arrayLists/menuLists';

const TargetReality = () => {
  const state = useSelector((state)=> state.apis.tragetRealityData)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchTargetReality())
  }, [dispatch])

  // console.log(state);

  return (
    <div className='block-wrap mt-[14px] lg:ml-[14px] lg:w-auto w-full'>
      <HeadTitle title='Target VS Reality'/>
      <div className="bar-chart w-full h-[180px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={state} margin={{top:5, right:5, left:5, bottom:5}}>
          <Bar dataKey="reality" fill="#4ab58e" radius={[4,4,0,0]} barSize={16} />
          <Bar dataKey="target" fill="#ffcf00" radius={[4,4,0,0]} barSize={16} />
          
          <XAxis dataKey="month" tickSize={0} axisLine={false} tick={({payload, x, y, dy})=>(
            <text x={x} y={y+25} dy={dy} textAnchor='middle' fill='#999' fontSize={14}>{payload.value}</text>
          )} />

        </BarChart>
      </ResponsiveContainer>
      </div>
      <div className="block-foot">
        <div className="legend-info mt-4 flex flex-col gap-2">
          {
            TARGET_REALITY_LISTS.map((item, index)=>(
              <div key={index} className='flex items-center justify-between'>
                <div className="info-item-left flex items-center gap-2.5">
                  <div className={`info-item-icon w-10 h-10 rounded-sm flex items-center justify-center ${index === 0 ? 'bg-[#e2fff3]':'bg-[#fff4de]'}`}>
                    <img src={item.icon} alt="" className='w-6' />
                  </div>
                  <div className="info-item-text">
                    <h4 className='text-base text-neutral-900 dark:text-neutral-300'>{item.title}</h4>
                    <p className='text-xs text-[#a5aea3] dark:text-neutral-500'>{item.subtitle}</p>
                  </div>
                </div>

                <div className="info-item-right">
                  <p className={`info-item-value font-semibold ${index === 0 ? 'text-[#00e096] dark:text-neutral-300':'text-[#ffa412] dark:text-neutral-300'}`}>{item.value}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}


export default TargetReality