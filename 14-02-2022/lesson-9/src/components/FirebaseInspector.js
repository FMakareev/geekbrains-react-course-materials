import { useEffect, useState, useCallback } from "react";
import ReactJson from "react-json-view";
import { Stack } from "react-bootstrap";

export const FirebaseInspector = ({ firebaseRef }) => {
    const [content, setContent] = useState(null);

    const onChange = useCallback((snapshot) => {
        setContent(snapshot.val());
    }, []);

    useEffect(() => {
        if (!firebaseRef) {
            return undefined;
        }
        firebaseRef.on("value", onChange);

        return () => {
            firebaseRef.off("value", onChange);
        };
    }, [firebaseRef]);

    return (
        <Stack gap={3}>
            <h3>Firebase inspector</h3>
            <ReactJson src={content} />
        </Stack>
    );
};
