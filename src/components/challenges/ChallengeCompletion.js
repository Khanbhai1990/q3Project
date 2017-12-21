import React from 'react'
import { connect } from 'react-redux'
import {RadialChart, XYPlot, LabelSeries} from 'react-vis';


const ChallengeCompletion = (props) => {


  let myRealData = []

  let challengesClone = props.challenges.map(challenge => ({...challenge}))
  let completionArr;
  let completionReduce;
  let currentVal;
  const reducer = (acc,val) => acc + val;
  let myData2 = challengesClone.map(challenge => {
    completionArr = props.activities.filter(activity => {
      if (activity.challenge_id == challenge.id){
        return activity.completion
      }
    }).map(activity => activity.completion)
      console.log("this is completionArr", completionArr)
      if (completionArr.length > 1){
        currentVal = completionArr != 0 ? completionArr.reduce(reducer):0
      } else if (completionArr.length === 1){
        currentVal = 1
      } else {
        currentVal = 0
      }
    myRealData.push({angle:currentVal, label: challenge.title + "|"})

  })
console.log("this is myRealData", myRealData)

  return (
  <div>
    <h3>Challenge Completion PieChart</h3>
    <RadialChart
        showLabels
        data={myRealData}
        width={700}
        height={600} />
  </div>
  )
}

function mapStateToProps(state) {
  return {
    challenges: state.challenges,
    activities: state.activities
  }
}



export default connect(mapStateToProps, null)(ChallengeCompletion)
