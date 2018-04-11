import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchItems, searchItem } from "../../../actions/index";
import Pagination from "../../../UI/pagination/pagination";
import SearchBar from "../../../UI/SearchBar/searchBar";

class Dashboard extends Component {
  state = {
    pageOfItems: [],
    searchValue: ""
  };

  componentDidMount() {
    this.props.fetchItems();
  }

  componentDidUpdate(nextProps) {
    if (nextProps.itemDetail !== this.props.itemDetail) {
      this.props.history.push("/dashboard/detail");
    }
  }

  onChangePage = pageOfItems => {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  };

  handleSearchChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  handleSearchClick = () => {
    this.props.searchItem(this.state.searchValue);
  };

  render() {
    const perPageList = this.state.pageOfItems.map(item => {
      return (
        <div
          className="card red lighten-4"
          style={{ padding: "40px 0px" }}
          key={item._id}
        >
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
              Publication Date:
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

    const deleteMsg = (
      <div className="row">
        <div className="col s12">
          <div className="alert alert-success fade show">
            {this.props.deleteMsg}
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <h4 style={{ marginTop: 40 }}>Welcome to your admin dashboard! </h4>
        <p>Click on the red button to start inserting your data. </p>
        {this.props.deleteMsg ? deleteMsg : null}
        <h4>Search Item by RefCode:</h4>
        <SearchBar
          onChange={this.handleSearchChange}
          onClick={this.handleSearchClick}
          value={this.state.searchValue}
          style={{ margin: "40px 0px" }}
        />
        {perPageList}
        <Pagination
          style={{ marginTop: "60px" }}
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
    items: state.admin.items,
    itemDetail: state.admin.itemDetail,
    deleteMsg: state.admin.deleteSuccessMsg
  };
};

export default connect(mapStateToProps, { fetchItems, searchItem })(Dashboard);
