import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

class Layout extends Component {
  render () {
    const { children } = this.props;
    return (
      <div id="app_wrapper">
        <div>
          <Container fluid={true}>
            <Row id="header">
              <h2>ToDo</h2>
            </Row>
            <Row>
              <BrowserRouter>
                {children}
              </BrowserRouter>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Layout;