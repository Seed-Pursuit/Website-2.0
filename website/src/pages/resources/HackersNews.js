import React, { useState, useEffect } from 'react';

const HackersNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = 'd6ffc9b586ad4e46944db8aa0a7c2922';
    const apiUrl = `https://newsapi.org/v2/everything?q=startup&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-20">
      <h1 className="text-4xl text-black mb-4">Startup News</h1>
      {loading ? (
        <p className="text-lg text-black">Loading...</p>
      ) : (
        <div>
          {news.map((article, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-xl text-black">{article.title}</h2>
              <p className="text-gray-500">{article.description}</p>
              <a href={article.url} className="text-blue-600 hover:underline">
                Read more
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HackersNews;
