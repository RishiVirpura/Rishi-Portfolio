import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

  const backendSkills = ["Pandas", "Keras", "Scikit-learn", "Flask", "Matplotlib", "React", "React Native"];

  const Languages = ["Python", "R", "HTML", "CSS", "C", "Javascript"];

  const Libraries = ["Pandas", "Keras", "Scikit-learn", "Flask", "Matplotlib", "React", "React Native", "Dash"];

  const Technologies = ["Git", "Github", "Visual Studio Code", "SQL", "AWS", "REST APIs", "R Studio"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-300 to-emerald-500 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <p className="text-violet-100 mb-6">
              I am currently open for full-time work and have been studying for an AWS Solutions Architect Certificate!
              Recently I've been reading Catch 22, and playing Slay the Spire 2.
            </p>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl text-violet-100 font-bold mb-4"> Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {Languages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-emerald-500/10 text-emerald-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl text-violet-100 font-bold mb-4"> Libraries/Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {Libraries.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-emerald-500/10 text-emerald-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {Technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div> */}

            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all text-center">
                <h3 className="text-xl text-violet-100 font-bold mb-4"> Technologies</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {Technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-emerald-500/10 text-emerald-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Bachelor of Science in Computer Science and Engineering </strong> - University of Connecticut
                  (2021-2025)
                </li>
                <li>
                <strong>Relevant Coursework:</strong> Data Structures, Introduction to Software Egnineering, Big Data Analytics
                Principles of Databases, Introduction to Machine Learning, and Systems Programming.
                </li>
                <li>
                <strong>3.84 GPA</strong>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Undergraduate Research Assistant at the University of Connecticut (May 2024 - May 2025){" "}
                  </h4>
                  <p>
                  Built a full-stack application using React Native, Python Flask, and MySQL to collect, standardize, and retrieve multi-sensor data — configuring backend integrations and resolving technical blockers across the full stack.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Technical Instructor at The Coder School (September 2025 - Present){" "}
                  </h4>
                  <p>
                  Served as the primary technical resource for 10+ K12 students per week, resolving coding errors through systematic troubleshooting and communicating solutions clearly to clients (parents and students).
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Undergraduate Teacher Assistant at the University of Connecticut (August 2024 - May 2025){" "}
                  </h4>
                  <p>
                  Supported 60+ students across weekly office hours, diagnosing individual coding misconceptions and delivering targeted, actionable feedback — consistently resolving high volumes of technical questions per session. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </RevealOnScroll>
    </section>
  );
};