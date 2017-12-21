import React from 'react'
import { connect } from 'react-redux'

import {XYPlot, XAxis, YAxis, HorizontalBarSeries} from 'react-vis';

const UsersByAge = (props) => {



  let accum1 = 0
  let accum2 = 0
  let accum3 = 0
  let accum4 = 0
  let accum5 = 0


    let usersClone = props.users.map(user =>({...user}))

    console.log("usersClone here", accum1)

    let populate = usersClone.map(user =>{

          if (user.age >= 15 && user.age <= 21) accum1++
          if (user.age >= 22 && user.age <= 26) accum2++
          if (user.age >= 27 && user.age <= 40) accum3++
          if (user.age >= 41 && user.age <= 50) accum4++
          if (user.age >= 51) accum5++
        })

    let UsersArr = [
          {x: accum1, y: '15 to 21'},
          {x: accum2, y: '22 to 26'},
          {x: accum3, y: '27 to 40'},
          {x: accum4, y: '41 to 50'},
          {x: accum5, y: '51 to -'}
        ]
console.log("users here", UsersArr)
  return (
    <div>
      <XYPlot
        yType={'ordinal'}
        width={700}
        height={600}>
        <HorizontalBarSeries
          data={UsersArr}
           />
          <XAxis />
          <YAxis />
      </XYPlot>
  </div>
  )
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, null)(UsersByAge)
