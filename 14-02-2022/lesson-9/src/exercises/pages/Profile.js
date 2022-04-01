import React from "react";
import { useSelector } from "react-redux";
import ReactJson from "react-json-view";
import { Stack } from "react-bootstrap";

import { getUser } from "../../store/user/reducer";

export const Profile = () => {
    const user = useSelector(getUser);

    return (
        <Stack gap={3}>
            <h1>Profile</h1>
            <ReactJson src={user.toJSON()} />
        </Stack>
    );
};
