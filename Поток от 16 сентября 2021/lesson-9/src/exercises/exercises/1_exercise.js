import { Button, ButtonGroup } from "react-bootstrap";
import { rootRef } from "../../firebase";
import { ExerciseLayout, FirebaseInspector } from "../../components";
import exercise from "./1_exercise.json";

// {
//     root: {
//         chats: {
//         }
//     }
// }

export const ExerciseOne = () => {
    return (
        <ExerciseLayout
            title="Ссылка на объект в БД, запись данных и удаление"
            description={exercise.text}
        >
            <ButtonGroup>
                <Button
                    onClick={() => {
                        // @todo:
                        rootRef.set({
                            test: "test",
                            date: Date.now()
                        });
                    }}
                >
                    Set
                </Button>
                <Button
                    onClick={() => {
                        // @todo:

                        rootRef.update({
                            name: "name"
                        });
                    }}
                >
                    Update
                </Button>

                <Button
                    variant="outline-danger"
                    onClick={() => {
                        // @todo:
                        rootRef.set(null);
                    }}
                >
                    Clear
                </Button>
            </ButtonGroup>

            <FirebaseInspector firebaseRef={rootRef} />
        </ExerciseLayout>
    );
};
