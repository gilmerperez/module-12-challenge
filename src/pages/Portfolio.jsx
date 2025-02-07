import React from "react";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Brutally Minimal",
      img: "assets\project-images\brutally-minimal.jpg",
      description: "This project is a simple, modern, and minimalist webpage designed to showcase a 'brutally minimal' aesthetic. It uses basic HTML, CSS, and some responsive design principles to create a clean and functional layout.",
      deployedUrl: "https://gilmerperez.github.io/brutally-minimal/",
      githubRepo: "https://github.com/gilmerperez/brutally-minimal"
    },
    {
      title: "Landing Page",
      img: "assets\project-images\landing-page.jpg",
      description: "A landing page using HTML and CSS. Implements a contact form as well as a polished UI.",
      deployedUrl: "https://gilmerperez.github.io/simple-html-css-landing-page/",
      githubRepo: "https://github.com/gilmerperez/simple-html-css-landing-page/settings/pages"
    },
    {
      title: "Color Palette Generator",
      img: "assets/project-images/color-palette-generator.jpg",
      description: "A website where the user can input numbers for Red, Green, and Blue to make a color. Create 5 of these colors to make a Palette, then save and name the palette to then display it on a separate page.",
      deployedUrl: "https://gilmerperez.github.io/Color-Code-Palette/",
      githubRepo: "https://github.com/gilmerperez/Color-Code-Palette"
    },
    {
      title: "Mood Board",
      img: "assets\project-images\mood-board.jpg",
      description: "This project involves building a dynamic mood board where users can add images or text, drag them onto the board, and save their mood board for later use. The application allows users to interact with elements dynamically and ensures that their mood board persists using local storage.",
      deployedUrl: "https://gilmerperez.github.io/mood-board/",
      githubRepo: "https://github.com/gilmerperez/mood-board"
    },
    {
      title: "CSS Snippet Cheat Sheet",
      img: "assets\project-images\css-snippet-cheatsheet.jpg",
      description: "A webpage that hosts a collection of CSS snippets. This will serve as both a learning tool and a reference for future CSS work.",
      deployedUrl: "https://gilmerperez.github.io/css-snippet-cheat-sheet/",
      githubRepo: "https://github.com/gilmerperez/css-snippet-cheat-sheet"
    },
    {
      title: "Rock Paper Scissors Game",
      img: "assets\project-images\rock-paper-scissors.jpg",
      description: "This project involves building a game of Rock, Paper, Scissors using only JavaScript. Users can play against an automated opponent, track their results, and analyze their choices.",
      deployedUrl: "assets\project-images\rock-paper-scissors.jpg",
      githubRepo: "https://github.com/gilmerperez/rock-paper-scissors"
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">My Portfolio</h1>

      <div className="row">
        {portfolioItems.map((item, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-6 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <button className="btn btn-primary">View Project</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
