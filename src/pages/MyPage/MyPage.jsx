import UserPosts from "../../redux/components/UserPosts";
import UserProfile from "../../redux/components/UserProfile/UserProfile";
import React, { useEffect ,useState} from "react";
import { useDispatch } from "react-redux";
import { __getPosts } from "../../redux/modules/postsSlice";
import { __getComments } from "../../redux/modules/commentsSlice";
import { __getUsers } from "../../redux/modules/usersSlice";
import UserLikes from "../../redux/components/UserLikes";
import { Container } from "./style";

const MyPage = () => {
  const dispatch = useDispatch();
  const [num,setNum]=useState();

  

  useEffect(() => {
    dispatch(__getPosts());
    dispatch(__getComments());
    dispatch(__getUsers());
  }, [dispatch]);
  
  return (
    <Container>
      <UserProfile />
      <UserPosts />
      <UserLikes />
    </Container>
  );
};

export default MyPage;
