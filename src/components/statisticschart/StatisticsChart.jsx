import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts'
const StatisticsChart = () => {

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
        type:"line",
        smooth:true,
        lineStyle:{
           color: new echarts.graphic.LinearGradient(0,0,0,1,[
            {
              offset:0,
              color:"rgb(255,191,0)"
            },
            {
              offset:1,
              color:"#F450D3"
            }
           ]),
           width:4
        },

        areaStyle:{
          opactity:.5,
          color: new echarts.graphic.LinearGradient(0,0,0,0.8,[
            {
              offset:0,
              color:"#FE4C00"
            },
            {
              offset:1,
              color:"rgba(255,144,70,0.1)"
            }
           ]),
        },
      emphasis:{
       focus:"series"
      } , 
      
  



        // Bar
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0,0,0,1,[
            {
              offset:0,
              color:"rgb(255,191,0)"
            },
            {
              offset:1,
              color:"#F450D3"
            }
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