import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import TopNav from './components/TopNav'
import Footer from './components/Footer'
import AllUsers from './components/users/AllUsers'
import AllChallenges from './components/challenges/AllChallenges'

import './App.css';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUsers } from './actions/users'
import { getChallenges } from './actions/challenges'
import { getActivities } from './actions/activities'


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class App extends Component {
  state = {
     activeTab: '1'
  }

  componentDidMount() {
  this.props.getUsers()
  this.props.getChallenges()
  this.props.getActivities()
}

toggle = (tab)=>{
  if (this.state.activeTab !== tab) {
     this.setState({
       activeTab: tab
     });
   }
}
  render() {

    return (
      <div className="App">
        <Router>
          <div>
            <TopNav />
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Users Tab
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Challenges Tab
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Route path="/" component={AllUsers}/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <Route path="/" component={AllChallenges}/>
              </Col>
            </Row>
          </TabPane>
        </TabContent>




            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: bindActionCreators(getUsers, dispatch),
    getChallenges: bindActionCreators(getChallenges, dispatch),
    getActivities: bindActionCreators(getActivities, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
