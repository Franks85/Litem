import React, { Component } from "react";
import { Col, Row, Carousel } from "react-materialize";
import carouselImage1 from '../../../UI/images/lithome.jpg'

export class SearchService extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col s={12}>
            <Carousel
              options={{ fullWidth: true }}
              fixedItem={<div style={{paddingBottom: '70px'}}><h2>Search Service</h2>
                <button className="btn">MORE</button>
              </div>}
              images={[carouselImage1]}
            />
              
          </Col>
        </Row>
      </div>
    );
  }
}

export default SearchService;
