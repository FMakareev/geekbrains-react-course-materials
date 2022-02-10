import { useEffect, useState, useCallback } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import ReactJson from "react-json-view";

import { rootRef } from "../../firebase";

import { ExerciseLayout } from "../../components";

export const ExerciseThree = () => {
    const [content, setContent] = useState(null);

    const onChange = useCallback((snapshot) => {
      debugger
      setContent(snapshot.val())
    }, []);

    useEffect(() => {
        // @TODO
      rootRef.on('value', onChange);

      return () => {
        rootRef.off('value', onChange);
      }
    }, []);

    return (
        <ExerciseLayout title="Чтение данных">
            <ButtonGroup>
                <Button
                    onClick={() => {
                        rootRef.push({
                            name: "test",
                            title:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
                        });
                    }}
                >
                    Set
                </Button>
                <Button
                    variant="outline-danger"
                    onClick={() => {
                        rootRef.remove();
                    }}
                >
                    Clear
                </Button>
            </ButtonGroup>
            <ReactJson src={content} />
        </ExerciseLayout>
    );
};
