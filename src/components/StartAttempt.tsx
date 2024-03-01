import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    return (
        <div>
            <Button
                onClick={() => (setAttempts(attempts - 1), setInProgress(true))}
                disabled={inProgress || attempts === 0}
            >
                Start Quiz
                <br></br>
                <span>{attempts}</span>
            </Button>
            <Button onClick={() => setInProgress(false)} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(attempts + 1)}
                disabled={inProgress}
            >
                Mulligan
                <br></br>
                <span></span>
            </Button>
        </div>
    );
}
