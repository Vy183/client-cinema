import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./TabBarItem.css";

class TabBarItem extends Component {
    render() {
        return (
            <Card className="my-2 border-0">
                <div className="tabbar-img">
                    <Card.Img variant="top" src={this.props.phim.img} />
                    <div className="tabbar-img-overlay ">
                        <Link to={'/chi-tiet/' + this.props.phim.id}>
                            <Button
                                variant="light"
                                className="tabbar-img-button"
                            >
                                Mua vé
                            </Button>
                        </Link>
                    </div>
                </div>
                <Card.Body className="content">
                    <Card.Title>{this.props.phim.title_VN}</Card.Title>
                    <Card.Text>{this.props.phim.title_EN}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default TabBarItem;
