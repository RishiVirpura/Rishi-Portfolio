import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-300 to-emerald-500 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-400/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl text-violet-100 font-bold mb-2">Soil Temperature Prediction with Machine Learning</h3>
              <p className="text-violet-100 mb-4">
                Trained a linear regression model to predict soil temperature from historical data.
                Achieved ±2°F prediction accuracy, improving potential for agricultural decision-making.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "SKLearn", "Pandas", "Numpy", "MatPlotLib", "Selenium"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-emerald-400/10 text-emerald-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/RishiVirpura/SoilTempPrediction"
                  className="text-emerald-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl text-violet-100 font-bold mb-2">Portfolio Website</h3>
              <p className="text-violet-100 mb-4">
                The website you are currently viewing! Built to show off my personal experience and skills.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Javascript", "TailwindCSS", "EmailJS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-emerald-500/10 text-emerald-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/RishiVirpura/Rishi-Portfolio"
                  className="text-emerald-500 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl text-violet-100 font-bold mb-2">RC Car Remodeling for UCONN Senior Design Project</h3>
              <p className="text-violet-100 mb-4">
                Refurbished an RC Car to allow users to control it using their phone or laptop through a website.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Raspberry Pi", "Flask", "Socket.IO"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-emerald-500/10 text-emerald-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/GzzDaniel/SDP051"
                  className="text-emerald-500 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            
          </div>
        </div>
        </RevealOnScroll>
    </section>
  );
};