import React, { Component } from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { renderDropdownList } from "../../../utils/form/dropdownList";
import axios from "axios";
import "react-widgets/dist/css/react-widgets.css";
import items from "../../publicComponents/SearchService/SearchServiceForm/selectItemsList";
import {
  ItemField,
  SpanField,
  ItemContainer,
  SubTitle
} from "../../../UI/itemStyle/itemStyle";
import { Row, Col, Preloader } from "react-materialize";

class SearchBar extends Component {
  state = {
    itemList: [],
    loading: true,
    errorMsg: ""
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.errorMsg !== this.state.errorMsg) {
    }
  }

  submit = values => {
    return axios.post("/api/search", values).then(res => {
      const msg = res.data.error;
      if (msg) {
        this.setState({ errorMsg: msg });
      } else {
        this.setState({
          itemList: res.data,
          loading: false,
          errorMsg: ""
        });
      }
    });
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    console.log(this.state.errorMsg);
    const { itemList, loading, errorMsg } = this.state;
    const results =
      loading && submitting ? (
        <Row>
          <Col s={4}>
            <Preloader flashing />
          </Col>
        </Row>
      ) : (
        itemList.map(item => {
          return (
            <div key={item.id}>
              <ItemContainer>
                <ItemField>
                  Category:
                  <SpanField>{item.name}</SpanField>
                </ItemField>
                <ItemField>
                  Description:
                  <SpanField>{item.description}</SpanField>
                </ItemField>
              </ItemContainer>
              <div style={{ padding: "12px 0px" }} />
            </div>
          );
        })
      );
    return (
      <div>
        <div className="row center" style={{ padding: 30 }}>
          <h4 className="pink-text">Select your item from the list above</h4>
        </div>
        <div className="row">
          <div className="col offset-m3 m6 s12">
            <form onSubmit={handleSubmit(this.submit)}>
              <Field
                name="itemSelected"
                component={renderDropdownList}
                data={items}
                placeholder="Select a item.."
              />
              <button
                type="submit"
                disabled={pristine || submitting}
                className="teal btn-flat white-text right"
              >
                Search
                <i className="material-icons right">done</i>
              </button>
              <div style={{ paddingTop: "80px" }}>
                {errorMsg && (
                  <div className="row center">
                    <div className="col s12">
                      <div className="alert alert-danger fade show">
                        <strong>{errorMsg}</strong>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="row" style={{ padding: 20 }}>
                {!loading && !errorMsg && <SubTitle>Your results</SubTitle>}
              </div>
              <div className="row">
                {!errorMsg && <div className="col-s12">{results}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "searchBar"
})(SearchBar);
