import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts'
const StatisticsChart = ({on}) => {

  const option ={
    // color: ['black'] ,


    //To save Image
    toolbox:{
      feature:{
         saveAsImage:{},
      }
    },
    //  To make every axis value of line visible on hover we use tooltip
    tooltip:{
        trigger:"axis",
        axisPointer:{
          type:"cross"
        },
        backgroundColor:"rgba(0,0,0,0.59)",
        borderWidth:0
    },



    xAxis:[
      {
        type:"category",
        // boundaryGap:false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      }
    ],
    yAxis:[
      {
        type:"value",
        splitLine:{
          show:false,
        }
      }
    ],
    series:[
      {
        type:on? "bar":"line",
        smooth:true,
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: '#8a2be2', // dark purple
            },
            {
              offset: 0.25,
              color: '#4b0082', // deep blue
            },
            {
              offset: 0.5,
              color: '#00bfff', // sky blue
            },
            {
              offset: 0.75,
              color: '#1e90ff', // dodger blue
            },
            {
              offset: 1,
              color: '#00ced1', // dark turquoise
            },
          ]),
          width: 4,
        },
        areaStyle: {
          opacity: 0.5,
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: '#8a2be2', // dark purple
            },
            {
              offset: 0.25,
              color: '#4b0082', // deep blue
            },
            {
              offset: 0.5,
              color: '#00bfff', // sky blue
            },
            {
              offset: 0.75,
              color: '#1e90ff', // dodger blue
            },
            {
              offset: 1,
              color: '#00ced1', // dark turquoise
            },
          ]),
        },
        
      emphasis:{
       focus:"series"
      } , 
      
  



        // Bar
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: '#8a2be2', // dark purple
            },
            {
              offset: 0.25,
              color: '#4b0082', // deep blue
            },
            {
              offset: 0.5,
              color: '#00bfff', // sky blue
            },
            {
              offset: 0.75,
              color: '#1e90ff', // dodger blue
            },
            {
              offset: 1,
              color: '#00ced1', // dark turquoise
            },
          ]),
        },
        
        // Bar




        showSymbol:false,
        data:[28000, 19000, 32000, 18000, 41000, 30000, 26000]
      }
    ]

  }

  return (
    
<div>
<ReactECharts option={option}
  
  />

</div>
   
  )
}

export default StatisticsChart