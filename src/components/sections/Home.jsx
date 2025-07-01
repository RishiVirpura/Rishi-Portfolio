import { RevealOnScroll } from "../RevealOnScroll";
import ProfilePic from "../../assets/Me!.png";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
        <RevealOnScroll>
        <div className="grid grid-cols-2">
        <div className="flex items-center justify-center min-h-screen">
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-emerald-500 bg-clip-text text-transparent leading-right">
            Hi, I'm Rishi!
          </h1>

          <p className="text-violet-100 text-lg mb-8 max-w-lg mx-auto">
          I am an aspiring software engineer and data analyst with a strong foundation in Python, machine learning, and web development. 
          I am experienced in full-stack projects, sensor-based applications, and predictive modeling.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-violet-100 text-indigo-950 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-violet-100/50 text-violet-100 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
        </div>
        <div className="flex items-center justify-center min-h-screen">
        <div className="text-center z-10 px-4">
            <img className="rounded-md" src={ProfilePic} alt="ProfilePic" />
        </div>
        </div>
        </div>
        </RevealOnScroll>
    </section>
  );
};