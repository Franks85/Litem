import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchItems, searchItem } from "../../../actions/index";
import Pagination from "../../../UI/pagination/pagination";
import SearchBar from "../../../UI/SearchBar/searchBar";
import {
  ItemField,
  SpanField,
  ItemContainer
} from "../../../UI/itemStyle/itemStyle";
import { Row, Col, Preloader } from "react-materialize";

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
    const perPageList = this.props.loading ? (
      <Row>
        <Col s={4}>
          <Preloader flashing />
        </Col>
      </Row>
    ) : (
      this.state.pageOfItems.map(item => {
        return (
          <div key={item._id}>
            <ItemContainer>
              <h5>
                ITEM REF: <SpanField>{item.refCode}</SpanField>
              </h5>
              <ItemField className="right">
                Saved On:
                <SpanField>
                  {new Date(item.adviceDate).toLocaleDateString()}
                </SpanField>
              </ItemField>
              <ItemField>
                Description:
                <SpanField>{item.description}</SpanField>
              </ItemField>
              <ItemField>
                Publication Date:
                <SpanField>
                  {new Date(item.pubDate).toLocaleDateString()}
                </SpanField>
              </ItemField>
            </ItemContainer>
            <div style={{ padding: "12px 0px" }} />
          </div>
        );
      })
    );

 

    const fullItemsList = (!this.props.items.error)
      ? this.props.items.sort(function(a, b) {
          return new Date(b.adviceDate) - new Date(a.adviceDate);
        })
      : null;

    const deleteMsg = (
      <div className="row">
        <div className="col s12">
          <div className="alert alert-success fade show">
            {this.props.deleteMsg}
          </div>
        </div>
      </div>
    );

    const searchBar = this.props.items ? (
      <SearchBar
        onChange={this.handleSearchChange}
        onClick={this.handleSearchClick}
        value={this.state.searchValue}
      />
    ) : null;

    return (
      <div className="container">
        <h4 style={{ marginTop: 40 }}>Welcome to your admin dashboard! </h4>
        <p>Click on the red button to start inserting your data. </p>
        {this.props.deleteMsg ? deleteMsg : null}
        <h5>Search Item by RefCode:</h5>
        <div className="row">
          <div className="col s12">{searchBar}</div>
        </div>
        <h5>Items List</h5>
        <div className="row">
          <div className="col-s12">{perPageList}</div>
        </div>
        <div className="row">
          <div className="col-s12">
            <Pagination
              items={fullItemsList}
              onChangePage={this.onChangePage}
            />
          </div>
        </div>
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
    deleteMsg: state.admin.deleteSuccessMsg,
    loading: state.admin.loading,
    authenticated: state.auth.authenticated
  };
};

export default connect(mapStateToProps, { fetchItems, searchItem })(Dashboard);
