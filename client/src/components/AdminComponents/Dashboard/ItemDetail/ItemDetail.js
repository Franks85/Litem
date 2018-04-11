import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteItem } from "../../../../actions";
import { Link } from "react-router-dom";
import { Button, Modal, Icon } from "react-materialize";
import styled from "styled-components";

const ItemContainer = styled.div`
  padding: 20px;
  font-weight: "bold";
  background: papayawhip;
  min-height: 300px;
`;

const ItemField = styled.p`
  padding: 10px 0px;
  text-transform: uppercase;
  color: palevioletred;
`;

const SpanField = styled.span`
  color: rgba(0, 0, 0, 0.87);
  margin-left: 5px;
`;

class ItemDetail extends Component {
  deleteAction = () => {
    this.props.deleteItem(this.props.item);
  };

  componentWillUpdate(nextProps) {
    if (nextProps.deleteSuccess !== this.props.deleteSuccess) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    let content;
    if (this.props.item.length) {
      content = this.props.item.map(item => {
        return (
          <ItemContainer key={item._id}>
            <Modal
              header="DELETE ITEM"
              trigger={
                <Button
                  floating
                  large
                  className="red right"
                  waves="light"
                  icon="delete"
                />
              }
              actions={
                <div>
                  <Button
                    modal="close"
                    waves="light"
                    className="red darken-2"
                    onClick={this.deleteAction}
                  >
                    <Icon left>delete</Icon>
                    Yes
                  </Button>
                  <Button flat modal="close" waves="light">
                    Cancel
                  </Button>
                </div>
              }
            >
              <p className="red-text">
                If you click on yes this item will be removed permanently from
                database, continue?
              </p>
            </Modal>

            <h4>ITEM REF: {item.refCode}</h4>

            <ItemField>
              Description: <SpanField>{item.description}</SpanField>
            </ItemField>
            <ItemField>
              Publication Date:
              <SpanField>
                {new Date(item.pubDate).toLocaleDateString()}
              </SpanField>
            </ItemField>
            <ItemField>
              Saved On:{" "}
              <SpanField>
                {new Date(item.adviceDate).toLocaleDateString()}
              </SpanField>
            </ItemField>
          </ItemContainer>
        );
      });
    } else {
      content = (
        <div>
          <div
            className="alert alert-danger fade show"
            style={{ paddingTop: "40" }}
          >
            {this.props.errMsg}
          </div>
          <h5>
            <Link to="/dashboard">Back to Dashboard</Link>
          </h5>
        </div>
      );
    }

    return <div>{content}</div>;
  }
}

const mapStateToProps = state => {
  return {
    item: state.admin.itemDetail,
    errMsg: state.admin.searchFailMsg,
    deleteSuccess: state.admin.deleteSuccessMsg
  };
};

export default connect(mapStateToProps, { deleteItem })(ItemDetail);
