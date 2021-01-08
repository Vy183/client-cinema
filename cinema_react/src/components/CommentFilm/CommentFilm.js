import { Container, Avatar } from "@material-ui/core";
import React, { Component } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";

import dataComment from "../../assest/dummydata/dataComment";
import avatar1 from "../../assest/img/ava1.jpg";
import './CommentFilm.css';

export default class CommentFilm extends Component {
  state = {
    bluan: "",
    dataComment: [],
  };

  componentDidMount = () => {
    this.setState({ dataComment: dataComment });
  };

  changeValueHandle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitFormHandle = (e) => {
    e.preventDefault();
    console.log(this.state.bluan);
    const newComment = [...this.state.dataComment];

    newComment.unshift({
      id: Math.random(),
      avartar: avatar1,
      name: "VyyPii123",
      content: this.state.bluan,
      date: Date().toLocaleString(),
    });

    this.setState({ dataComment: newComment, bluan: "" });
  };

  render() {
    return (
      <Container style={{border: '1px solid red'}}>
        <div className="d-flex">
          <Avatar
            variant="square"
            className="mt-5"
            style={{ width: "75px", height: "75px" }}
          >
            H
          </Avatar>
          <Form onSubmit={this.submitFormHandle}>
            <Form.Group controlId="exampleForm.Comment" className="mx-3 mt-4">
              <Form.Label>Bình luận</Form.Label>
              <Form.Control
                name="bluan"
                as="textarea"
                rows={2}
                style={{ resize: 'none', width: '120vh' }}
                onChange={this.changeValueHandle}
                value={this.state.bluan}
              />
            </Form.Group>
            <Button variant="info" className="mb-2 btn-bluan" type="submit">
              Bình Luận
            </Button>
          </Form>
        </div>
        {this.state.dataComment.map((comment) => {
          return (
            <div className="d-flex">
              <div className="mt-2">
                <img
                  src={comment.avartar}
                  alt=""
                  style={{ width: "75px", height: "75px" }}
                />
              </div>
              <div md={8} className="mx-3 my-2">
                <h5>{comment.name}</h5>
                <p>{comment.content}</p>
                <div style={{ fontSize: "11px" }}>{comment.date}</div>
              </div>
            </div>

            
          );
        })}
      </Container>
    );
  }
}
