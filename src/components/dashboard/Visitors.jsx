import React, { useEffect } from 'react'
import HeadTitle from './HeadTitle'
import { useSelector, useDispatch } from 'react-redux'
import { fetchVisitors } from '../../redux/slices/apiSlice'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import PropTypes from 'prop-types';

const formatLegendValue = (value) =>{
  return value.replace('_', ' ') // 언더바를 공백으로 변경
}

const formatTooltipValue = (name, value) =>{
  return `${name.replace('_', ' ')} : ${value}`
}

const CustomTooltip = ({ payload })=>{
  if(!payload || !payload.length) return null;

  return(
    <div className='custom-recharts-tooltip'>
      <p className="recharts-tooltip-label">{payload[0].payload?.month}</p>
      <ul className="recharts-tooltip-item-list">
        {
          payload.map((item, index)=>(
            <li key={index}>{formatTooltipValue(item.name, item.value)}</li>
          ))
        }
      </ul>
    </div>
  )
}

CustomTooltip.propTypes={
  payload: PropTypes.any
}

const Visitors = () => {
  const state = useSelector((state)=> state.apis.visitorsData)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchVisitors())
  }, [dispatch]) //dispatch가 변경될 때 한 번 실행

  return (
    <div className='block-wrap w-full'>
      <HeadTitle title="Visitors Insights"/>
      <div className="line-chart w-full h-[230px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={state} margin={{top: 10, right: 5, left: -20, bottom: 0}}>
            
          <CartesianGrid strokeDasharray="3 0" stroke="#333" vertical={false} horizontal={true}/>
          <XAxis dataKey="month" tickSize={0} axisLine={false} padding={{left:0}} tick={({payload, x, y, dy})=>(
            <text x={x} y={y+20} dy={dy} fill='#999' fontSize={14} textAnchor='middle'>{payload.value}</text>
            )}/>
          <YAxis tickSize={0} axisLine={false} ticks={[0, 100, 200, 300, 400]} tick={{fill:'#999', fontSize:14}} />
          <Tooltip content={<CustomTooltip/>} />
          <Legend iconType='dot' formatter={formatLegendValue} />
          <Line dataKey="new_customer" dot={false} type="basis" stroke="#f64e60" strokeWidth={2} />
          <Line dataKey="loyal_customer" dot={false} type="basis" stroke="#a700ff" strokeWidth={2} />
          <Line dataKey="unique_customer" dot={false} type="basis" stroke="#3cd856" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Visitors