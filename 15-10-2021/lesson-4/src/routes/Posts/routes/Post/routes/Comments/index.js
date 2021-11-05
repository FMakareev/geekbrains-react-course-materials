import React from "react";
import { Stack, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { MOCK_POSTS } from "../../../../helpers/mock";

export const Comments = (props) => {
  const { postId } = useParams();
  const post = MOCK_POSTS.find((item) => item.id === postId);

  return (
    <Stack gap={3}>
      {post.comments.map(({ comment, id, author, authorEmail, createAt }) => (
        <Card key={id}>
          <Card.Body>
            <Card.Title>{author}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {authorEmail} - {createAt}
            </Card.Subtitle>
            <Card.Text>{comment}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Stack>
  );
};
