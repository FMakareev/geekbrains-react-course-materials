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
                        // @todo:
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
                        // @todo:
                        rootRef.set({
                            name: 'Hello2',
                            foo: 'bar2'
                        })
                    }}
                >
                    Set 2
                </Button>
                <Button
                    onClick={() => {
                        // @todo:
                        rootRef.update({
                            any: 'field',

                        })
                    }}
                >
                    Update
                </Button>

                <Button
                    variant="outline-danger"
                    onClick={() => {
                        // @todo:
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
