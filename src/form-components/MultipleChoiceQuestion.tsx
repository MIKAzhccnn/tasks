import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState(options[0]);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Label>Choose your answer</Form.Label>
            <Form.Select
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </Form.Select>
            {userAnswer === expectedAnswer ? <p>✔️</p> : <p>❌</p>}
        </div>
    );
}
