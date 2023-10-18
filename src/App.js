import { useState, useEffect } from 'react';

function App() {
  const [positiveNews, setPositiveNews] = useState([]);

  useEffect(() => {
    const fetchPositiveNews = async () => {
      try {
        const response = await fetch('/positivenews'); // Fetch positive news from the server
        if (response.ok) {
          const data = await response.json();
          setPositiveNews(data);
          console.log(data);
        } else {
          console.error('Error fetching positive news:', response.status);
        }
      } catch (error) {
        console.error('Error fetching positive news:', error);
      }
    };

    fetchPositiveNews(); // Fetch positive news when the component mounts
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div className="App">
      <div>
        <h2>Positive News</h2>
        <ul>
          {positiveNews.map((article, index) => (
            <li key={index}>
              <strong>{article.title}</strong> - {article.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
