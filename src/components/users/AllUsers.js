import React, { Component } from 'react'

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import UserSearch from './UserSearch'
import UsersByMap from './UsersByMap'
import UsersByAge from './UsersByAge'
import UserNote from './UserNote'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class AllUsers extends Component {
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
              UserSearch tab
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              UsersByMap tab
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              UsersByAge tab
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              UserNote
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Route path="/" component={UserSearch}/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <Route path="/" component={UsersByMap}/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <Route path="/" component={UsersByAge}/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                <Route path="/" component={UserNote}/>
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
export default AllUsers
