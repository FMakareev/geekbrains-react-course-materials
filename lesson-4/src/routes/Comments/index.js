import React from "react";
import { Stack, Card } from "react-bootstrap";
import {Redirect, useParams} from "react-router-dom";

import { MOCK_POSTS } from "../../helpers/mock";

export const Comments = (props) => {
  const { postId } = useParams();
  const post = MOCK_POSTS.find((item) => item.id === postId);

  if (!post) {
    return <Redirect to="/posts" />;
  }

  if (post.commentsCount === 0) {
    return <div>not found</div>
  }

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
