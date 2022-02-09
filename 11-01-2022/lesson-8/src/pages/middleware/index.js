import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsersWithThunk} from "../../store/users/action";
import {getError, getLoading, getUsers} from "../../store/users/selector";
import {Error} from "../../components/Error";
import {Button, Card, ListGroup, Stack} from "react-bootstrap";
import {Loader} from "../../components/Loader";



export const MiddlewareExample = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading)
  const error = useSelector(getError)
  const data = useSelector(getUsers)

  useEffect(() => {
    dispatch(getUsersWithThunk())
  }, []);

  return (
    <div>

      {
        error && <Error reload={() => {
          dispatch(getUsersWithThunk())
        }} />
      }

      <ListGroup>
        {
          data?.data?.map((user) =>(<Card key={user.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user.avatar} />
            <Card.Body>
              <Card.Text>
                {user.first_name} {user.last_name} {user.email}
              </Card.Text>
            </Card.Body>
          </Card>))
        }
      </ListGroup>
      {
        isLoading && <Loader/>
      }
      <Stack>
        {
          Array.from({length: data?.total_pages})
            .map((_, index) => (<Button
              onClick={() => {
                dispatch(getUsersWithThunk(index + 1));
              }}
            >
              {index + 1}
            </Button>))}
      </Stack>

    </div>
  );
};
