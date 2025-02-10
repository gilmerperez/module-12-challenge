import React from "react";

import brutallyMinimal from "src\images\brutally-minimal.jpg";
import landingPage from "src\images\landing-page.jpg";
import colorPaletteGenerator from "src\images\color-palette-generator.jpg";
import moodBoard from "src\images\mood-board.jpg";
import cssSnippetCheatSheet from "src\images\css-snippet-cheatsheet.jpg";
import rockPaperScissors from "src\images\rock-paper-scissors.jpg";

const projects = [
  {
    title: "Brutally Minimal",
    src: brutallyMinimal,
    description: "This project is a simple, modern, and minimalist webpage designed to showcase a 'brutally minimal' aesthetic. It uses basic HTML, CSS, and some responsive design principles to create a clean and functional layout.",
    deployedUrl: "https://gilmerperez.github.io/brutally-minimal/",
    githubRepo: "https://github.com/gilmerperez/brutally-minimal"
  },
  {
    title: "Landing Page",
    src: landingPage,
    description: "A landing page using HTML and CSS. Implements a contact form as well as a polished UI.",
    deployedUrl: "https://gilmerperez.github.io/simple-html-css-landing-page/",
    githubRepo: "https://github.com/gilmerperez/simple-html-css-landing-page"
  },
  {
    title: "Color Palette Generator",
    src: colorPaletteGenerator,
    description: "A website where the user can input numbers for Red, Green, and Blue to make a color. Create 5 of these colors to make a Palette, then save and name the palette to then display it on a separate page.",
    deployedUrl: "https://gilmerperez.github.io/Color-Code-Palette/",
    githubRepo: "https://github.com/gilmerperez/Color-Code-Palette"
  },
  {
    title: "Mood Board",
    src: moodBoard,
    description: "This project involves building a dynamic mood board where users can add images or text, drag them onto the board, and save their mood board for later use. The application allows users to interact with elements dynamically and ensures that their mood board persists using local storage.",
    deployedUrl: "https://gilmerperez.github.io/mood-board/",
    githubRepo: "https://github.com/gilmerperez/mood-board"
  },
  {
    title: "CSS Snippet Cheat Sheet",
    src: cssSnippetCheatSheet,
    description: "A webpage that hosts a collection of CSS snippets. This will serve as both a learning tool and a reference for future CSS work.",
    deployedUrl: "https://gilmerperez.github.io/css-snippet-cheat-sheet/",
    githubRepo: "https://github.com/gilmerperez/css-snippet-cheat-sheet"
  },
  {
    title: "Rock Paper Scissors Game",
    src: rockPaperScissors,
    description: "This project involves building a game of Rock, Paper, Scissors using only JavaScript. Users can play against an automated opponent, track their results, and analyze their choices.",
    deployedUrl: "https://gilmerperez.github.io/rock-paper-scissors/",
    githubRepo: "https://github.com/gilmerperez/rock-paper-scissors"
  },
];

const Project = ({ project }) => {
  return (
    <div className="col-12 col-md-6 col-lg-6 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={project.src}
          className="card-img-top"
          alt={project.title}
          loading="lazy"
        />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description}</p>
          <a href={project.deployedUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          <a href={project.githubRepo} className="btn btn-secondary ms-2" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export { projects }; // Exporting the projects array for use in Portfolio.jsx
export default Project;

