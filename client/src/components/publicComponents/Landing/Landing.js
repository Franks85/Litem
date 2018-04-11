import React from "react";
import frontImage from '../../../UI/images/lithome.jpg'
import { Card, CardTitle } from 'react-materialize'

const landing = props => {
  return (
    <div style={{ textAlign: "center" }}>
      <Card
        className='m6 s12 text-center medium'
        header={<CardTitle image={frontImage}>LOST ITEM</CardTitle>}
        actions={[<a href="#">GET STARTED</a>]}
      >
        <h5>A simple App for searching your lost stuff!</h5>
      </Card>
    </div>
  );
};

export default landing;
