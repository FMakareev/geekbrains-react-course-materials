import {Button, ButtonGroup} from "react-bootstrap";
import {rootRef, chatsRef} from "../../firebase";
import {ExerciseLayout, FirebaseInspector} from "../../components";




export const ExerciseTwo = () => {
  return (
    <ExerciseLayout
      title="Дочерние и динамические ссылки"
    >
      <ButtonGroup>
        <Button
          onClick={() => {
            // @todo:
            rootRef.child('chats').set({
              date: Date.now(),
            })
            rootRef.child('messages').set({
              date: Date.now(),
            })
            rootRef.child('profile').set({
              date: Date.now(),
            })

          }}
        >
          Set
        </Button>
        <Button
          onClick={() => {
            // @todo:

            const messagesRef = rootRef.child('messages').child(Date.now())
            console.log(messagesRef.toString());
            messagesRef.push({
              text: 'text',
            })
          }}
        >
          Set
        </Button>
        <Button
          variant="outline-danger"
          onClick={() => {
            // @todo:
          }}
        >
          Clear
        </Button>
      </ButtonGroup>
      <FirebaseInspector firebaseRef={rootRef}/>
    </ExerciseLayout>
  );
};
