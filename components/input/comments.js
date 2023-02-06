import { useState, useEffect } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
  const { eventId } = props;
  const [commentList,setCommentList] =useState([])

  const [showComments, setShowComments] = useState(false);
  useEffect(()=>{
    fetch(`/api/comments/${eventId}`).then(response => response.json()).then((response)=>{
      setCommentList(response.data)
      console.log(commentList,"commentList")
    })
  },[showComments])
  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);

    if(showComments){

    }
  }

  async function addCommentHandler(commentData) {
    // send data to API
    console.log(commentData,"comment data");
    const response = await fetch(`/api/comments/${eventId}`,{
      method:'POST',
      body:JSON.stringify(commentData),
      headers:{
        'Content-type':'Application/json'
      }
    })
    const data = await response.json()
    setCommentList([data,...commentList])
    console.log(data,"saved successfully")
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={commentList} />}
    </section>
  );
}

export default Comments;
