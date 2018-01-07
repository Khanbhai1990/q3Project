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
  Switch,
  Redirect
} from 'react-router-dom'

import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
const Auth = new AuthService();

class App extends Component {
  state = {
     activeTab: window.location.pathname
  }

  componentDidMount() {
  this.props.getUsers()
  this.props.getChallenges()
  this.props.getActivities()
  }

  handleLogout(){
    Auth.logout()
    this.props.history.replace('/login');
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
        <p className="App-intro">
            <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
        </p>


        <Router>
          <Switch>
            <Route exact path='/' render={props => (
                <Redirect to={window.location.pathname == "/"? "/users": window.location.pathname} />
              )}
            />
          <div>
            <TopNav />
        <Nav tabs>
          <NavItem>
            <NavLink
              tag={Link}
              to="/users"
              className={classnames({ active: this.state.activeTab == window.location.pathname})}
              onClick={() => { this.toggle('/users')}}
            >
              Users Tab
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/challenges"
              className={classnames({ active: this.state.activeTab == window.location.pathname})}
              onClick={() => { this.toggle('/challenges')}}
            >
              Challenges Tab
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="/users">
            <Row>
              <Col sm="12">
                <Route path="/users" component={AllUsers}/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="/challenges">
            <Row>
              <Col sm="12">
                <Route path="/challenges" component={AllChallenges}/>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
            <Footer />
          </div>
          </Switch>
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

export default withAuth(connect(null, mapDispatchToProps)(App));
