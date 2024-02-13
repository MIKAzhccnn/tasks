import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import GTR_R32 from "./images/GTR_R32.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">UD CISC275 Tasks</header>
            <h1>GTR R32 showcase</h1>
            <p>Zhicheng Liu said, Hello World!</p>
            <img src={GTR_R32} alt="GTR!!!" />
            <br></br>
            R32 is:
            <ul>
                <li>FAST</li>
                <li>STRONG</li>
                <li>BEAUTY</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <br></br>
            <Container>
                <Row>
                    <div>
                        <Col>
                            R32 Has The Drift Race Tuned Mode
                            <div className="rectangle"></div>
                        </Col>

                        <Col>
                            Also Has The Circuit Race Tuned type
                            <div className="rectangle"></div>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default App;
