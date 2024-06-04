export default function CommentCard({comment}){
  return(
    <div className="comment-box">
      <p>{comment.description}</p>
      <p>{comment.date}</p>
    </div>
  )
}