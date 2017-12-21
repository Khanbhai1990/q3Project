import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, InputGroup, InputGroupAddon, Input } from 'reactstrap';


class UserSearch extends Component {
  state={
    user: ""
  }
  render () {
    let usersClone = this.props.users.map(user =>({...user}))
    let findUser = usersClone.filter( usr => {
            return usr.name.split("", this.state.user.length).join("").toLowerCase() == this.state.user.toLowerCase()
          })
    let populate = findUser.length == 0 ? usersClone:findUser
    let UsersPopulate = populate.map(user=>{
            return (
                    <tr key={user.id} >
                      <th scope="row">{user.id}</th>
                       <td>{user.name}</td>
                       <td>{user.email}</td>
                       <td>{user.age}</td>
                       <td>{user.gender}</td>
                       <td>{user.address}</td>
                    </tr>
                    )
                })



    return (
      <div>
        <h5>Users</h5>
        <InputGroup>
                <Input className="input-size" type="text"
                  value={this.state.user}
                  onChange={(e) => this.setState({ user: e.target.value })}
                  placeholder="Search for users..."
                  />
        </InputGroup>

          <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Local</th>
            </tr>
          </thead>
          <tbody>
              {UsersPopulate}
          </tbody>
        </Table>


      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, null)(UserSearch)
