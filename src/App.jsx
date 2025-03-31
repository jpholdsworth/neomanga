import './App.css';
import MangaData from '../manga-data';

function App() {
  return (
    // STORE NAME - NeoManga 
    // TAGLINE - "Unleash the Power of the Next Generation"

    // HEADER with search and shopping cart
      // About
      // Upcoming EVENTS / Blogs
      // NEW ARRIVALS / Coming soon ?

      // Grid layout of manga
      // filter side
    // FOOTER 
    <>
      {MangaData.map((item) => 
        <div key={item.id}>
          <img src={item.image} alt={`${item.title} volume ${item.vol}`} />
          <p>{item.title + " Volume No: " + item.vol}</p>
          <p>{item.author.name}</p>
          <p>{item.price}</p>
        </div>
      )}
    </>
  );
}

export default App
