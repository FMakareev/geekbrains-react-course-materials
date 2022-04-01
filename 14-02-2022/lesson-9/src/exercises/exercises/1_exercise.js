import { Button, ButtonGroup } from "react-bootstrap";
import { ExerciseLayout, FirebaseInspector } from "../../components";
import {rootRef} from "../../firebase";


export const ExerciseOne = () => {

    return (
        <ExerciseLayout
            title="Ссылка на объект в БД, запись данных и удаление"
        >
            <ButtonGroup>
                <Button
                    onClick={() => {
                        rootRef.set({
                            test: 1,
                            date: Date.now(),
                            name: 'Hello',
                            foo: 'bar'
                        })
                    }}
                >
                    Set
                </Button>
                <Button
                    onClick={() => {
                        rootRef.set({
                            test2: 'asd'
                        })
                    }}
                >
                    Set 2
                </Button>
                <Button
                    onClick={() => {
                        rootRef.update({
                            test3: 'test3',
                            name: 'Hello 2',
                        })
                    }}
                >
                    Update
                </Button>

                <Button
                    variant="outline-danger"
                    onClick={() => {
                        // rootRef.set(null)
                        rootRef.remove()
                    }}
                >
                    Clear
                </Button>
            </ButtonGroup>

            <FirebaseInspector firebaseRef={rootRef} />
        </ExerciseLayout>
    );
};
