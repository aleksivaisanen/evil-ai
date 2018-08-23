import React, { Component } from 'react';
import { Container, Row, Col, Input, Button } from 'reactstrap';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      input : "",
      timeout: new Date(),
      timer: 0,
      success: false
    }
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {this.setState({timer : Math.floor((this.state.timeout - new Date())/1000)})}, 1000)
  }

  onChange = (e) => {
    this.setState({input: e.target.value});
  }

  submit = (e) => {
    e.preventDefault();
    const correctWord = "digit";
    if(this.state.input === correctWord && this.state.timer <= 0 ){
      console.log("wohoo")
      this.setState(
        { input : "", 
          success: true
        })
    } else {
      console.log("bähää")
      this.setState({timeout:new Date(Date.now() + 30000)});
    }
  }

  render() {
    return (
      <Container className="cont">
        <Row>
          <Col className="column" xl={{ size: 6, offset: 3 }}>
            <h1 className="header">SALASANA</h1>
            <Input value={this.state.input} onChange={this.onChange}/>
            <br/>
            <Button onClick={this.submit} block>Sammuta</Button>
            <br/>
            {this.state.timer > 0 && !this.state.success &&
              <p className="text-center">Väärä salasana, yritä uudelleen {this.state.timer} sekunnin kuluttua!</p>
            }
            {this.state.success && 
              <div className="shutdown">
                <Container>
                  <br />
                  <br />
                  <br />
                  <p className="text-center">Tekoäly sammutettu.</p>
                </Container>
              </div>
            }
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
