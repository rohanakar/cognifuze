import About from "./About";
import "./cognifuze.css";

export default () => {
  return (
    <>
      <div
        className="section"
        style={{ backgroundImage: "url('/assets/antoine-barres.jpg')" }}
      >
        <div className="overlay"></div>
        <div className="clouds z-10"></div>
        <h1 className="hero-title z-10">CogniFuze</h1>
        <h2 className="hero-subtitle z-10">
          Fusing Cognitive thinking to build a better world
        </h2>
      </div>
      <About />
    </>
  );
};
