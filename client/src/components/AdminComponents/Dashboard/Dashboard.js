import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchItems } from "../../../actions/index";
import Pagination from "../../../UI/pagination/pagination";

class Dashboard extends Component {
  state = {
    pageOfItems: []
  };

  componentDidMount() {
    this.props.fetchItems();
  }

  onChangePage = pageOfItems => {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  };

  render() {

    const perPageList = this.state.pageOfItems.map(item => {
      return (
        <div className="card red lighten-4" key={item._id}>
          <div
            className="card-content"
            style={{ textTransform: "uppercase", fontWeight: "bold" }}
          >
            <span className="card-title blue-text">
              ITEM REF: {item.refCode}
            </span>
            <p>
              Description: <span>{item.description}</span>
            </p>
            <p>
              Publication Date:{" "}
              <span>{new Date(item.pubDate).toLocaleDateString()}</span>
            </p>
            <p className="right">
              Saved On: {new Date(item.adviceDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      );
    });

    const fullItemsList = this.props.items.sort(function(a, b) {
      return new Date(b.adviceDate) - new Date(a.adviceDate);
    });

    return (
      <div>
        <h4 style={{ marginTop: 40 }}>Welcome to your admin dashboard! </h4>
        <p>Click on the red button to start inserting your data. </p>
        {perPageList}
        <Pagination
          style={{ marginTop: "40" }}
          items={fullItemsList}
          onChangePage={this.onChangePage}
        />
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
