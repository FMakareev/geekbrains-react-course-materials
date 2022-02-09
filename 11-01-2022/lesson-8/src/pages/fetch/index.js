import React, {useState, useEffect} from 'react';
import {Loader} from "../../components/Loader";
import {Error} from "../../components/Error";
import {ListGroup, Card, Button, Stack} from "react-bootstrap";

/**
 * @param {number} page
 * @param {number} per_page
 * @param {number} total
 * @param {number} total_pages
 * @param {Array} data
 * */
const initialState = {
  page: 1,
  per_page: 6,
  total: 0,
  total_pages: 0,
  data: [],
}

export const FetchExample = (props) => {
  const [users, setUsers] = useState(initialState);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const resetUsers = () => {
    setUsers(initialState);
  }
  const resetDataUsers = () => {
    setUsers({
      ...users,
      data: [],
    });
  }

  const fetchLoadMoreUsers = async (page = 1) => {
    setError(undefined);
    setLoading(true);
    try {
      const response = await fetch(`https://reqres.in/api/users?page=${page}&per_page=2`);

      if(!response.ok) {
        throw new Error('users not loading');
      }

      const result = await response.json()

      setUsers({
        ...result,
        data: [
          ...users.data,
          ...result.data
        ]
      });

    } catch (e) {
      setError(e);
    }
    setLoading(false);
  }

  const fetchUsers = async (page = 1) => {
    setError(undefined);
    setLoading(true);
    try {
      const response = await fetch(`https://reqres.in/api/users?page=${page}&per_page=2`);

      if(!response.ok) {
        throw new Error('users not loading');
      }

      const result = await response.json()

      setUsers(result);

    } catch (e) {
      setError(e);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <div>

      {
        error && <Error reload={() => {
          resetUsers();
          fetchUsers();
        }} />
      }

      <ListGroup>
        {
          users?.data?.map((user) =>(<Card key={user.id} style={{ width: '18rem' }}>
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
          Array.from({length: users.total_pages})
          .map((_, index) => (<Button
            onClick={() => {
              resetDataUsers();
              fetchUsers(index + 1)
             }}
          >
          {index + 1}
        </Button>))}
      </Stack>
      <Button
        onClick={() => {
        if(users.page + 1 <= users.total_pages ) {
          fetchLoadMoreUsers(users.page + 1)
        }
      }}
      >
        load more ...
      </Button>
    </div>
  );
};
