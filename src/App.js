import './index.css';
import authors from './data';
import Author from './Author';
function App() {
  return (
    <>
      <h1>Meet Our Amazing Authors</h1>

      <section className="author-list">
        {authors.map((author, index) => {
          // const { photo, name, title, bio, id } = author;
          return <Author {...author} key={author.id} number={index} />;
        })}
      </section>
    </>
  );
}

export default App;
