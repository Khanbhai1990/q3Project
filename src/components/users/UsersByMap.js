import React from 'react'
import { connect } from 'react-redux'
import {Treemap} from 'react-vis';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const UsersByMap = (props) => {

  const myData = {
   "title": "analytics",
   "color": "#FF7F50",
   opacity: 0.1,
   children: [
    {
     "children": [
      {"title": "Arizona", "color": "#FF7F50",style: {background: 'green', opacity:0.5}, "size": 2}
     ]
    },
    {
     "children": [
      {"title": "California", "color": "#FF7F50", "size": 1}
     ]
    },
    {
     "children": [
      {"title": "Washington", "color": "#FF7F50", "size": 1}
     ]
    }
   ]
  }


  let stateObj = {
   "title": "analytics",
   "color": "#FF7F50",
   opacity: 0.1,
   children: []
  }

  let stateAccum = 0
  let stateAccum2 = 0
  let usersClone = props.users.map(user =>({...user}))
  let checkState;
  let arrOfStates =[]

  let BigLoop= usersClone.map((user) => {
      stateAccum = 0
      checkState = usersClone.map((state, index) =>{
                  if (state.address == user.address){
                    stateAccum++
                  }
          })
            arrOfStates.push({state:user.address, score:stateAccum} )
      })

        arrOfStates = arrOfStates.filter((arr, index, self) =>
        index === self.findIndex((fineArr) => (
          fineArr.state === arr.state && fineArr.score === arr.score
        ))
      )

  let StatePopulate = arrOfStates.map(row => {
    stateObj.children.push(
      {
        children: [
          {"title":row.state , "color": "#FF7F50", style: {background: getRandomColor()}, "size": row.score}
        ]
      }
    )
  })

  return (
  <div>

    <Treemap
        title={'My New Treemap'}
        width={700}
        height={700}
        data={stateObj}
        />
  </div>
  )
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}
export default connect(mapStateToProps, null)(UsersByMap)
