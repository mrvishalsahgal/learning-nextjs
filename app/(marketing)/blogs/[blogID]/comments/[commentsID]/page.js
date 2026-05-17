export default async function CommentsPage({ params }) {
  const { blogID, commentsID } = await params;
  return (
    <>
      <h2>Comments</h2>
      <p> Comments ID: {commentsID} </p>
      <p> Blog ID: {blogID} </p>
    </>
  );
}
