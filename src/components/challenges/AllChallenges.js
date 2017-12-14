import React, { Component } from 'react'

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import ChallengeSearch from './ChallengeSearch'
import ChallengeRating from './ChallengeRating'
import ChallengeCompletion from './ChallengeCompletion'
import ChallengeNote from './ChallengeNote'

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
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              ChallengeSearch tab
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              ChallengeRating tab
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              ChallengeCompletion tab
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
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
                <Route path="/" component={ChallengeSearch}/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <Route path="/" component={ChallengeRating}/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <Route path="/" component={ChallengeCompletion}/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                <Route path="/" component={ChallengeNote}/>
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
