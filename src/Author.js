const Author = (props) => {
  const { photo, name, title, bio, number } = props;
  return (
    <section className="author">
      <article className="container">
        <img src={photo} alt={name} className="img" />
        <div className="name-title">
          <h2 className="name">{name}</h2>
          <h4 className="title">{title}</h4>
          <span className="number"># {number + 1}</span>
        </div>
      </article>
      <p>{bio}</p>
    </section>
  );
};
export default Author;
