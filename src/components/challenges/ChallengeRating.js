import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Button } from 'reactstrap';
import {
  XYPlot,
  XAxis,
  YAxis,
  MarkSeries,
  LabelSeries
} from 'react-vis';



class ChallengeRating extends Component {



  render () {


    let myRealData = []

    let challengesClone = this.props.challenges.map(challenge => ({...challenge}))
    let completionArr;
    let voteArr;
    let completionReduce;
    let currentCompVal;
    let currentVoteVal;
    const reducer = (acc, val) => acc + val;

    let myData2 = challengesClone.map(challenge => {
      completionArr = this.props.activities.filter(activity => {
        if (activity.challenge_id == challenge.id){
              return activity.completion
        }
      }).map(activity => activity.completion)
      voteArr = this.props.activities.filter(activity => {
        if (activity.challenge_id == challenge.id){
              return activity.vote
        }
      }).map(activity => activity.vote)

        if (completionArr.length > 1){
          currentCompVal = completionArr != 0 ? completionArr.reduce(reducer):0
        }else if (completionArr.length === 1){
          currentCompVal = 1
        } else {
          currentCompVal = 0
        }
      currentVoteVal = voteArr != 0 ? voteArr.reduce(reducer):0
      myRealData.push({x:currentCompVal, y:currentVoteVal, label: challenge.title, size:currentCompVal, rotation: 25})

    })

    console.log("My real data includes", myRealData)
    return (

      <div>
     <XYPlot
       yDomain={[-5, 10]}
       xDomain={[-1, 5]}
       width={700}
       height={700}>
       <XAxis />
       <YAxis />
       <MarkSeries
         className="mark-series-example"
         strokeWidth={1}
         sizeRange={[5, 15]}
         data={myRealData}/>
       <LabelSeries
         animation
         allowOffsetToBeReversed
         data={myRealData} />
     </XYPlot>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    challenges: state.challenges,
    activities: state.activities
  }
}



export default connect(mapStateToProps, null)(ChallengeRating)
