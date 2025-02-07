import React from "react";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Project One",
      image: "bootstrap-themes.png",
      description: "A fantastic project using Bootstrap.",
    },
    {
      title: "Project Two",
      image: "bootstrap-themes.png",
      description: "A great web development project.",
    },
    {
      title: "Project Three",
      image: "bootstrap-themes.png",
      description: "A creative solution with responsive design.",
    },
    {
      title: "Project Four",
      image: "bootstrap-themes.png",
      description: "A stunning portfolio example.",
    },
    {
      title: "Project Five",
      image: "bootstrap-themes.png",
      description: "A modern, sleek, and fast UI.",
    },
    {
      title: "Project Six",
      image: "bootstrap-themes.png",
      description: "A smooth and interactive user experience.",
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
