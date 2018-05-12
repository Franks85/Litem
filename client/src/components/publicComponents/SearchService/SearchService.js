import React, { Component } from 'react'
import { Col, Row } from 'react-materialize'
import styled from 'styled-components'
import SSF1 from './SearchServiceForm/SSF1'
import SSF2 from './SearchServiceForm/SSF2'
import SSF3 from './SearchServiceForm/SSF3'

const Main = styled.div`
  min-height: 300px;
  background-color: papayawhip;
  text-align: center;
`

const Title = styled.h3`
  color: palevioletred;
  padding: 25px;
`

const InfoBox = styled.div`
  padding: 0px 25px 15px 25px;
  margin-bottom: 40px;
  text-align: left;
  font-size: 18px;
`

export class SearchService extends Component {
  state = {
    page: 1
  };

  nextPage = () => {
    this.setState({
      page: this.state.page + 1
    })
  };

  previousPage = () => {
    this.setState({
      page: this.state.page - 1
    })
  };
  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <div>
        <Row>
          <Col s={12}>
            <Main>
              <Title>Search Items Service</Title>
              <InfoBox>
                <p>
                  Please insert the requested information. The service is
                  organized in compliance with the &ldquo;privacy&rdquo; law (Legislative
                  Decree 196/2003). Fields marked with * are mandatory.
                </p>
                {page === 1 && <SSF1 onSubmit={this.nextPage} />}
                {page === 2 && (
                  <SSF2
                    previousPage={this.previousPage}
                    onSubmit={this.nextPage}
                  />
                )}
                {page === 3 && (
                  <SSF3 previousPage={this.previousPage} onSubmit={onSubmit} />
                )}
              </InfoBox>
            </Main>
          </Col>
        </Row>
      </div>
    )
  }
}

export default SearchService
