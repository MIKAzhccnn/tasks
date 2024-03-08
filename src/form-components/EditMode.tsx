import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editing, setEditing] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: "Your Name",
        isStudent: true
    });
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode"
                label="Edit Mode"
                onChange={() => setEditing(!editing)}
            />
            {!editing && (
                <p>
                    {userInfo.name}{" "}
                    {userInfo.isStudent ? "is a student" : "is not a student"}
                </p>
            )}
            {editing && (
                <div>
                    <Form.Control
                        type="textbox"
                        value={userInfo.name}
                        onChange={(e) =>
                            setUserInfo({ ...userInfo, name: e.target.value })
                        }
                    />
                    <Form.Check
                        type="checkbox"
                        id="is-student"
                        label="Is a student?"
                        checked={userInfo.isStudent}
                        onChange={(e) =>
                            setUserInfo({
                                ...userInfo,
                                isStudent: e.target.checked
                            })
                        }
                    />
                </div>
            )}
        </div>
    );
}
