import React, { Component } from 'react'

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';


import ChallengeSearch from './ChallengeSearch'
import ChallengeRating from './ChallengeRating'
import ChallengeCompletion from './ChallengeCompletion'
import ChallengeNote from './ChallengeNote'
// import AddChallenge from './AddChallenge'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class AllChallenges extends Component {
  state = {
     activeTab: '1'
  }

  toggle = (tab)=>{
    if (this.state.activeTab !== tab) {
       this.setState({
         activeTab: tab
       });
     }
  }

  render () {
    return (
      <div>

        <Router>
        
          <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              tag={Link}
              to="/challenges/search"
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Search Challenges
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/challenges/ratings"
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Ratings Graph
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/challenges/completion"
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Challenge Completion
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/challenges/notifications"
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Challenge Notifications
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Route path="/challenges/" component={ChallengeSearch}/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <Route path="/challenges/ratings" component={ChallengeRating}/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <Route path="/challenges/completion" component={ChallengeCompletion}/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                <Route path="/challenges/notifications" component={ChallengeNote}/>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
          </div>
        </Router>
      </div>
    )
  }
}
export default AllChallenges
