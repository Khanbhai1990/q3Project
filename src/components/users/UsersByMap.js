import React from 'react'
import {RadialChart, XYPlot, LabelSeries} from 'react-vis';


const UsersByMap = (props) => {

  const myData = [{angle: 1, label: 'woah!', fontSize: '8px'}, {angle: 5, label:"test"}, {angle: 2, label:"test"}]

  const myData2 = [
  {x: 0, y: 0, label: 'woah!', fontSize: 10},
  {x: 1, y: 0, label: 'dope city', yOffset: 5},
  {x: 0, y: 1, label: 'cool Dog friend', xOffset: 5, rotation: 34}
]


  return (
  <div>

    <RadialChart
        showLabels
        data={myData}
        width={700}
        height={600} />
  </div>
  )
}
export default UsersByMap
