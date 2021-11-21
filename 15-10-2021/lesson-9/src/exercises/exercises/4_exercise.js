import { useState, useEffect } from "react";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { rootRef } from "../../firebase";
import { ExerciseLayout, FirebaseInspector } from "../../components";
import faker from "faker";

export const ExerciseFour = () => {
    const [selectedId, setSelectedId] = useState(null);


    useEffect(() => {

      rootRef.on('value', (snapshot) => {
        console.log('value', snapshot.val());
      })
      rootRef.on('child_added', (snapshot) => {
        console.log('child_added', snapshot.val());
      })
      rootRef.on('child_changed', (snapshot) => {
        console.log('child_changed', snapshot.val());
      })
      rootRef.on('child_removed', (snapshot) => {
        console.log('child_removed', snapshot.val());
      })
      rootRef.on('child_moved', (snapshot) => {
        console.log('child_moved', snapshot.val());
      })

    }, [])

    return (
        <ExerciseLayout title="Работа со списками">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        type="text"
                        onChange={(event) => {
                            setSelectedId(event.target.value);
                        }}
                    />
                </Form.Group>
            </Form>
            <ButtonGroup>
                <Button
                    onClick={() => {
                        // @TODO: сюда код
                        rootRef.push({
                            createAt: Date.now(),
                            name: faker.name.findName()
                        });
                    }}
                >
                    Push
                </Button>
                <Button
                    onClick={() => {
                        // @TODO: сюда код
                        rootRef.child(selectedId).update({
                            updatedAt: Date.now(),
                            lastName: faker.name.findName()
                        });
                    }}
                >
                    Update
                </Button>
                <Button
                    variant="outline-danger"
                    onClick={() => {
                        rootRef.child(selectedId).remove();
                    }}
                >
                    Remove
                </Button>
                <Button
                    variant="outline-danger"
                    onClick={() => {
                        rootRef.remove();
                    }}
                >
                    Clear all
                </Button>
            </ButtonGroup>
            <FirebaseInspector firebaseRef={rootRef} />
        </ExerciseLayout>
    );
};
