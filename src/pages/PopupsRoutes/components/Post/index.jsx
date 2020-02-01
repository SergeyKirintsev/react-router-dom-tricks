/* global parseInt */
import React from "react";
import { useParams, withRouter, Link, useRouteMatch } from "react-router-dom";

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import posts from "../../data/posts";
import PostCard from "./PostCard";
import useStyles from "./styles";

const Post = ({ history }) => {
  const { url } = useRouteMatch();
  const { id } = useParams();
  const styles = useStyles();

  const post = posts.find(post => post.id === parseInt(id));

  if (!post) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Button
        className={styles.back}
        variant="contained"
        color="secondary"
        onClick={history.goBack}
      >
        Go Back
      </Button>
      <PostCard post={post} />
      <div>
        <Button
          variant="contained"
          color="secondary"
          className={styles.button}
          startIcon={<DeleteIcon />}
          component={Link}
          to={`${url}?popup=sign-in`}
        >
          Sign In
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          endIcon={<SaveIcon />}
          component={Link}
          to={`${url}?popup=sign-up`}
        >
          Sign Up
        </Button>
        <Button
          variant="contained"
          color="default"
          className={styles.button}
          startIcon={<CloudUploadIcon />}
          component={Link}
          to={`${url}?popup=notifications`}
        >
          Notifications
        </Button>
      </div>
    </div>
  );
};

export default withRouter(Post);