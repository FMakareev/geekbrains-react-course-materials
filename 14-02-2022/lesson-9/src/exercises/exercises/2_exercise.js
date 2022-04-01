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
            rootRef.child('foo').child('foo2').child('foo3').set({
              date: Date.now(),
              name: 'foo'
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
            const messagesRef = rootRef.child('messages')
            messagesRef.push({
              text: 'text',
            })
          }}
        >
          Set
        </Button>
      </ButtonGroup>
      <FirebaseInspector firebaseRef={rootRef}/>
    </ExerciseLayout>
  );
};
