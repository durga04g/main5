
import React from "react";
import "./App.css";

const dramas = [
  {
    title: "True-Beauty",
    description: "A heartwarming tale of love and sacrifice.",
    image: "/Images/true.jpg",
    url: 'https://www.viki.com/tv/37374c-true-beauty',
  },
  {
    title: "Put your head on my shoulder",
    description: "An epic journey of self-discovery and courage.",
    image: "/Images/put.jpg",
    url: 'https://www.viki.com/tv/40605c-put-your-head-on-my-shoulder',
  },
  {
    title: "F4-thailad",
    description: "A gripping thriller that keeps you on the edge of your seat.",
    image: "/Images/f.jpg",
    url: 'https://www.viki.com/tv/39527c-f4-thailand-boys-over-flowers',
  },
];

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Drama Heaven</h1>
      </header>
      <main className="main">
        {dramas.map((drama, index) => (
          <div className="drama-card" key={index}>
            <img src={drama.image} alt={drama.title} className="drama-image" />
            <a href={drama.url} target="_blank" rel="noopener noreferrer">
            <h2>{drama.title}</h2>
            </a>
            <p>{drama.description}</p>
          </div>
        ))}
      </main>
      <h2>About</h2>
      <p>K-dramas, or Korean dramas, are Korean-language television shows that originated in South Korea </p>
      <h2>History</h2>
      <p>The first K-drama was Death Row Prisoner, directed by Choi-Chang Bong in 1956. The genre became popular in the 1960s and 1970s, and in the 1990s, they began to gain international popularity.</p>
      <h2>Popularity</h2>
      <p>K-dramas are popular worldwide for their: 
        Storytelling: Thoughtful, character-led stories that appeal to international audiences 
        Visuals: Attention to aesthetic details and costumes 
        Female gaze: Depiction of life and love from a female view</p>
    </div>
  );
}

export default App;