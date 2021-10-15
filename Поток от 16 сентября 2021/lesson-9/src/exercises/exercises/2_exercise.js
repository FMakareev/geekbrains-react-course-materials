import { Button, ButtonGroup } from "react-bootstrap";
import { rootRef } from "../../firebase";
import { ExerciseLayout, FirebaseInspector } from "../../components";
import exercise from "./2_exercise.json";

export const ExerciseTwo = () => {
    return (
        <ExerciseLayout
            title="Дочерние и динамические ссылки"
            description={exercise.text}
        >
            <ButtonGroup>
                <Button
                    onClick={() => {
                        // @TODO: сюда код

                        rootRef.child("test").child(Date.now()).set({
                            test: "test",
                            create: Date.now()
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
            <FirebaseInspector firebaseRef={rootRef} />
        </ExerciseLayout>
    );
};
