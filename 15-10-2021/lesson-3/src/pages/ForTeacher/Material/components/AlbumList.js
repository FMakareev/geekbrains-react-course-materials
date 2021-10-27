import React from "react";
import { Container, Grid } from "@material-ui/core";
import { AlbumItem } from "./AlbumItem";

export const AlbumList = ({ list }) => {
  return (
    <Container>
      <Grid container>
        {list.map((item) => (
          <Grid item md={4} sm={6} xs={12}>
            <AlbumItem {...item} key={item.id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

AlbumList.defaultProps = {
  list: []
};
