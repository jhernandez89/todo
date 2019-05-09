import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';


// contains all static elements like header (if there were multiple routes involved)
// dynamic elements (via routes) are represented as children
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
              {children}
            </Row>
          </Container>
        </div>
      </div>
    )
  }
};

export default Layout;
