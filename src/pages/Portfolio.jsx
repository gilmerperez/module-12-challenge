import Project, { projects } from "../components/Project";


const Portfolio = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">
        My Portfolio
        <br />
        <i className="fa-solid fa-briefcase mt-2"></i>
      </h1>

      <div className="row">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
