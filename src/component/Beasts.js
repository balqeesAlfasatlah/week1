import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card , Row , Col } from 'react-bootstrap';

export class Beats extends Component {

    constructor(props) {
        super(props);
        this.state = {
            click: 0
        }
    }


    increaseClick = () => {
        this.setState({
            click: this.state.click + 1
        })
    }

    render() {
        return (
            // <div>
            //     <img onClick={this.increaseClick} src = {this.props.image_url} style={{width:'300px'}}></img>
            //    <h2 style ={{color :'#6495ED'}}>{this.props.title}</h2>
            //    <p style ={{color :'#6495ED'}}>{this.props.description}</p> 
            //    <p>❤️{this.state.click}</p>
            // </div>

            <Row >
                {Array.from({ length: 1}).map((_, idx) => (
                    <Col>
                        <Card style={{width:'300px'}}>
                            <Card.Img variant="top" onClick={this.increaseClick} src = {this.props.image_url} />
                            <Card.Body>
                                <Card.Title>{this.props.title}</Card.Title>
                                <Card.Text>
                                {this.props.description}
                                </Card.Text>
                                <Card.Text>
                                ❤️{this.state.click}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        )
    }
}

export default Beats
