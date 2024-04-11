import ReactEcharts  from 'echarts-for-react'
import './css.css'
import { options, pie_option } from './echartsOptions'

function MyEcharts(props){
  return (<div className="charts-item">
        <ReactEcharts
        option={props.option}
        notMerge
        lazyUpdate />
        </div>)
}
export default function Home() {
  return (
    <div className="home-page">
      <MyEcharts option={options()[0]}></MyEcharts>
      <MyEcharts option={options()[1]}></MyEcharts>
      <MyEcharts option={options()[2]}></MyEcharts>
      <MyEcharts option={pie_option}></MyEcharts>
    </div>
  )
}
