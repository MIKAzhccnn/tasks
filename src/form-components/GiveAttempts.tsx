import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [remainingAttempts, setRemainingAttempts] = useState(3);
    const [requestAttempts, setRequestAttempts] = useState("0");
    function decreaseAttempts() {
        if (remainingAttempts > 0) {
            setRemainingAttempts(remainingAttempts - 1);
        }
    }

    function increaseAttempts() {
        const newAttempts = parseInt(requestAttempts);
        if (!isNaN(newAttempts)) {
            setRemainingAttempts(remainingAttempts + newAttempts);
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {remainingAttempts}</p>
            <Form.Control
                type="number"
                value={requestAttempts}
                onChange={(e) => setRequestAttempts(e.target.value)}
            />
            <button
                onClick={decreaseAttempts}
                disabled={remainingAttempts === 0}
            >
                Use
            </button>
            <button onClick={increaseAttempts}>Gain</button>
        </div>
    );
}
