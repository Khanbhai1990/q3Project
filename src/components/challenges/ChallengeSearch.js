import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, InputGroup, InputGroupAddon, Input } from 'reactstrap';


class ChallengeSearch extends Component {
  state={
    challenge: ""
  }
  render () {
    let challengesClone = this.props.challenges.map(challenge =>({...challenge}))
    let findChallenge = challengesClone.filter( chall => {
            return chall.title.split("", this.state.challenge.length).join("").toLowerCase() == this.state.challenge.toLowerCase()
          })
    let populate = findChallenge.length == 0 ? challengesClone:findChallenge
    let voteArr;
    const reducer = (acc, val) => acc + val;
    let ChallengePopulate = populate.map(challenge => {
      voteArr = this.props.activities.filter(activity => {
        if (activity.challenge_id == challenge.id) {
          return activity.vote
        }
      }).map(v => v.vote)


    
      return (<tr key={challenge.id}>
        <th scope="row">{challenge.id}</th>
        <td>{challenge.title}</td>
        <td>{challenge.unlisted.toString()}</td>
        <td>{voteArr != 0 ? voteArr.reduce(reducer):0}</td>

      </tr>)
    })


    return (
      <div>
        <h5>Challenges</h5>
        <InputGroup>
                <Input className="input-size" type="text"
                  value={this.state.challenge}
                  onChange={(e) => this.setState({ challenge: e.target.value })}
                  placeholder="Search for challenges..."
                  />
        </InputGroup>

          <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Unlisted</th>
              <th>Vote Count</th>
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

export default connect(mapStateToProps, null)(ChallengeSearch)
