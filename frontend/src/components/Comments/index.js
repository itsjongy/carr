// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getComments } from "../../store/comment";
// import './Comments.css';

// const Comments = () => {
//     const dispatch = useDispatch();
//     const commentObj = useSelector(state => state.commentState.entries)
//     const comments = Object.values(commentObj)

//     useEffect(() => {
//         dispatch(getComments());
//     }, [dispatch]);

//     return (
//         <div className="p">
//             p
//             {/* {comments.map(comment => (
//                 <ul key={comment.id}>
//                     <p>{comment.comment}</p>
//                 </ul>
//             ))} */}
//         </div>
//     )
// };

// export default Comments;
