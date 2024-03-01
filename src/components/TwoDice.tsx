import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState(2);
    const [rightDie, setRightDie] = useState(3);

    const checkGameState = () => {
        if (leftDie === rightDie) {
            if (leftDie === 1) {
                return "Lose";
            } else {
                return "Win";
            }
        } else {
            return "";
        }
    };

    const gameStateMessage = checkGameState();

    return (
        <div>
            <span data-testid="left-die">left-Dice:{leftDie}</span>
            <Button onClick={() => setLeftDie(d6())}>Roll Left</Button>
            <br></br>
            <span data-testid="right-die">right-Dice:{rightDie}</span>
            <Button onClick={() => setRightDie(d6())}>Roll Right</Button>
            <br></br>
            {gameStateMessage && <div>{gameStateMessage}</div>}
        </div>
    );
}
