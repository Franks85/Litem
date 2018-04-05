import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchItems } from "../../../actions/index";

class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    const itemsList = this.props.items.reverse().map(item => {
      return (
        <div className="card red lighten-4" key={item._id}>
          <div className="card-content" style={{ textTransform: 'uppercase', fontWeight: 'bold'}}>
            <span className="card-title blue-text">ITEM REF: {item.refCode}</span>
            <p>Description: <span>{item.description}</span></p>
            <p>Publication Date: <span>{new Date(item.pubDate).toLocaleDateString()}</span></p>
            <p className="right">
              Sent On: {new Date(item.adviceDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h4 style={{ marginTop: 40 }}>Welcome to your admin dashboard! </h4>
        <p>Click on the red button to start inserting your data. </p>
        {itemsList}
        <div className="fixed-action-btn">
          <Link
            to="/dashboard/dataEntry"
            className="btn-floating btn-large red"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.admin.items
  };
};

export default connect(mapStateToProps, { fetchItems })(Dashboard);
