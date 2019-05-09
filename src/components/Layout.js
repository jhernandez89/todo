import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

class Layout extends Component {
  render () {
    const { children } = this.props;
    return (
      <Container fluid={true}>
        <Row>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </Row>
      </Container>
    )
  }
}

export default Layout;