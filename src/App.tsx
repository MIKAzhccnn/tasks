import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import GTR_R32 from "./images/GTR_R32.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">UD CISC275 Tasks</header>
            <h1>GTR R32 fan page</h1>
            <br></br>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Zhicheng Liu said, Hello World! What a lovely day with the R32!
            </p>
            <br></br>
            R32 is:
            <ul>
                <li>FAST</li>
                <li>STRONG</li>
                <li>BEAUTY</li>
            </ul>
            <br></br>
            <Container>
                <Row>
                    <Col>
                        <div className="rectangularBackground">
                            <span
                                style={{
                                    color: "white",
                                    fontSize: 50
                                }}
                            >
                                Sunshine and the GTR!!!
                            </span>
                        </div>
                    </Col>
                    <Col>
                        <div className="rectangularBackground">
                            <img src={GTR_R32} alt="GTR_R32" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
