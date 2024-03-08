/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "gray"
];
export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <Form.Check
                    inline
                    type="radio"
                    label={
                        <div style={{ background: color, padding: "2px" }}>
                            {color}
                        </div>
                    }
                    name="color-button"
                    checked={selectedColor === color}
                    onChange={() => setSelectedColor(color)}
                />
            ))}
            <div>
                You have chosen{" "}
                <div
                    data-testid="colored-box"
                    style={{
                        background: selectedColor,
                        padding: "2px"
                    }}
                >
                    {selectedColor}
                </div>
                .
            </div>
        </div>
    );
}
