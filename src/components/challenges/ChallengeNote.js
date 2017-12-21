import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editChallenge, deleteChallenge } from '../../actions/challenges'
import { bindActionCreators } from 'redux'

import { Table, Button, Label} from 'reactstrap';


class ChallengeNote extends Component {
  render () {
    let challengesClone = this.props.challenges.map(challenge =>({...challenge}))
    let voteArr;
    let voteReduce;
    const reducer = (acc, val) => acc + val;
    let ChallengePopulate = challengesClone.map(challenge => {
      voteArr = this.props.activities.filter(activity => {
        if (activity.challenge_id == challenge.id) {
          return activity.vote
        }
      }).map(v => v.vote)


      voteReduce = voteArr != 0 ? voteArr.reduce(reducer):0
        if (voteReduce<-2){
          return (

          <tr key={challenge.id}>
            <th scope="row">{challenge.id}</th>
            <td>{challenge.title}</td>
            <td style={{ color:"red"}}>{voteReduce}</td>
            <td><Button onClick={() => this.props.editChallenge(challenge.id)}
              type="button"
              className="btn btn-secondary"
              >
              {challenge.unlisted.toString()}
            </Button>
            </td>
            <td><Button onClick={() => this.props.deleteChallenge(challenge.id)}
              type="button"
              className="btn btn-secondary"
              >
              Delete Challenge
            </Button>
            </td>
            <td> <Label for="exampleText">"UNPOPULAR!"</Label></td>
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
            <th>Title</th>
            <th>Vote Count</th>
            <th>Unlisted</th>
            <th>Delete</th>
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
    challenges: state.challenges,
    activities: state.activities
  }
}
function mapDispatchToProps(dispatch) {
  return {
    editChallenge: bindActionCreators(editChallenge, dispatch),
    deleteChallenge: bindActionCreators(deleteChallenge, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeNote)
