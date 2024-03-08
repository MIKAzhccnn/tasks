import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userInput, setUserInput] = useState("");
    function updateInput(event: React.ChangeEvent<HTMLInputElement>) {
        setUserInput(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Control
                type="text"
                value={userInput}
                onChange={updateInput}
            />
            <p>{userInput === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
