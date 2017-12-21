import React, { Component } from 'react'
import { Container, Row, Col, Card, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addChallenge} from '../../actions/challenges'

class AddChallenge extends Component {
  state =  {
    title:'hello',
    unlisted: true
  }

  handleSubmit = (e) => {
  e.preventDefault()
  this.props.addChallenge(this.state)
  this.setState({
          title: '',
          unlisted: true
        })
}
  render () {
    return (
      <div>
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="title">Title</Label>
                    <Input
                      type="text"
                      id="title"
                      onChange={(e) => this.setState({ title: e.target.value })}
                      value={this.state.title}
                    />
        </FormGroup>
        <FormGroup check>
              <Label check>
                <Input type="radio"  value={true} name="radio1" />{true}
                Listed
              </Label>
        </FormGroup>
        <FormGroup check>
              <Label check>
                <Input type="radio" value={false} name="radio1" />{false}
                Unlisted
              </Label>
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addChallenge: bindActionCreators(addChallenge, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(AddChallenge);
