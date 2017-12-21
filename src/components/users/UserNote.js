import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { editUser } from '../../actions/users'
import { bindActionCreators } from 'redux'

import { Table, Button, Label } from 'reactstrap';

class UserNote extends Component {
  render () {
    let usersClone = this.props.users.map(user =>({...user}))
    let activeArr;
    let voteArr;
    let activeReduce;
    let voteReduce;
    const reducer = (acc, val) => acc + val;
    let ChallengePopulate = usersClone.map(user => {
      activeArr = this.props.activities.filter(activity => {
        if (activity.user_id == user.id) {
          return activity.active
        }
      }).map(activity => activity.active)

      voteArr = this.props.activities.filter(activity => {
        if (activity.user_id == user.id) {
          return activity.vote
        }
      }).map(v => v.vote)

      voteReduce = voteArr != 0 ? voteArr.reduce(reducer):0

        if (activeArr.length>2 || voteReduce<-3){

          return (

          <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td style={activeArr.length>2 ? { color:"red"}:{ color:"green"}}>{activeArr.length}</td>
            <td style={voteReduce<-3 ? { color:"red"}:{ color:"green"}}>{voteReduce}</td>
            <td><Label for="exampleText">{activeArr.length>2 ? "Active Much?":"Debby Downer?"}</Label></td>
          </tr>
        )
      }

    })


    return (
      <div>
        <h5>Notifications</h5>
        <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Active</th>
            <th>Up Vote</th>
          </tr>
        </thead>
        <tbody>
            {ChallengePopulate}
        </tbody>
      </Table>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    activities: state.activities
  }
}
// function mapDispatchToProps(dispatch) {
//   return {
//     editUser: bindActionCreators(editUser, dispatch)
//   }
// }

export default connect(mapStateToProps, null)(UserNote)
