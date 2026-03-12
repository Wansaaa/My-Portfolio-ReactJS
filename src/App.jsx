import DataImage, { listProyek, listTools } from './data';
import cv from '../public/assets/files/cv.pdf';

function App() {
  return (
    <main>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 light:bg-zinc-400 w-fit p-4 rounded-2xl transition hover:bg-zinc-700 light:hover:bg-zinc-500">
            <div className="my-profile w-10 rounded-md">
              <img src={DataImage.HeroImage} alt="My Profile" loading="lazy" />
            </div>
            <q className="text-white light:text-zinc-800">Great programmers are born from practice. 😁</q>
          </div>

          <h1 className="text-5xl/tight font-bold mb-6 text-white light:text-zinc-900">Hi, I'm Ichwan Sanusi</h1>

          <p className="text-base/loose mb-6 text-zinc-300 light:text-zinc-600">I'm passionate about building modern, responsive, and user-friendly web interfaces.</p>

          <div className="flex items-center sm:gap-4 gap-2">
            <a href={cv} download="My CV" className="bg-violet-700 text-white p-4 rounded-2xl transition hover:bg-violet-600">
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>

            <a href="#project" className="bg-zinc-700 text-white p-4 rounded-2xl transition hover:bg-zinc-600 light:bg-zinc-200 light:text-zinc-900 light:hover:bg-zinc-400">
              My Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <div className="my-profile rounded-b-4xl md:ml-auto mt-4 md:mt-0 sm:m-auto md:m-0 animate__animated animate__fadeInUp animate__delay-4s">
          <img src={DataImage.HeroImage} alt="My Profile" className="w-[500px]" loading="lazy" />
        </div>
      </div>

      {/* About */}
      <div className="about mt-32 py-10" id="about">
        <div className="xl:w-2/3 lg:w-3/4 mx-auto p-7 bg-zinc-800 light:bg-zinc-400 light:text-zinc-200 rounded-lg" data-aos="fade-up" data-aos-duration="1000">
          <div className="sm:hidden">
            <div className="flex items-center justify-center mb-10">
              <div className="my-profile w-16 rounded-full border-2 border-slate-500 me-4">
                <img src={DataImage.HeroImage} alt="My Profile" loading="lazy" />
              </div>
              <div>
                <h1 className="text-base font-bold text-violet-500">Ichwan Sanusi</h1>
                <p className="font-thin text-xs light:text-white">Frond-End Developer</p>
              </div>
            </div>
          </div>
          <p className="text-base/loose sm:mb-10  text-justify">
            Hello, I'm Ichwan Sanusi, a Front-End Developer who focuses on building modern, responsive, and user-friendly web interfaces. I enjoy turning ideas into interactive digital experiences through clean and structured code. I’m
            passionate about creating visually appealing and functional websites while continuously learning new technologies to improve my skills and deliver better web experiences.
          </p>
          <div className="sm:block hidden">
            <div className="flex items-center justify-center ">
              <div className="my-profile w-16 rounded-full border-2 border-slate-500 me-4">
                <img src={DataImage.HeroImage} alt="My Profile" loading="lazy" />
              </div>
              <div>
                <h1 className="text-base font-bold text-violet-500">Ichwan Sanusi</h1>
                <p className="font-thin text-xs">Frond-End Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">
            Tools & Technologies
          </h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            These are some of the tools and technologies I frequently use to build modern websites and create user interface designs.
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 light:border-zinc-400 rounded-md hover:bg-zinc-800 light:hover:bg-zinc-400 group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
              >
                <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 " loading="lazy" />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Akhir About */}

      {/* Project */}
      <div className="project mt-32 py-10" id="project">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">
          My Project
        </h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Here are some of the projects I have worked on.
        </p>
        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((project) => (
            <div key={project.id} className="p-4 bg-zinc-800 light:bg-zinc-400 rounded-md flex flex-col" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={project.dad}>
              <img src={project.gambar} alt="Project Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4 light:text-zinc-800">{project.nama}</h1>
                <p className="text-base/loose mb-4 light:text-zinc-800">{project.desk}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <p key={i} className="py-1 px-3 border bg-zinc-600 border-zinc-500 rounded-md font-semibold light:text-zinc-200 light:bg-zinc-600">
                    {tool}
                  </p>
                ))}
              </div>
              <div className="mt-auto pt-6 text-center">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-violet-800 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600 light:text-zinc-200">
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Akhir Project */}

      {/* Contact */}
      <div className="Contact mt-32 py-10" id="contact">
        <h1 className="text-4xl font-bold text-center mb-2" data-aos="fade-up" data-aos-duration="1000">
          Contact
        </h1>
        <p className="text-base/loose text-center mb-5 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Feel free to reach out if you'd like to collaborate or discuss a project.
        </p>
        <form
          action="https://formsubmit.co/ichwansanusi60@gmail.com"
          method="POST"
          className="bg-zinc-800 light:bg-zinc-200 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full Name</label>
              <input type="text" name="name" placeholder="Enter your name" required className="border border-zinc-500 p-2 rounded-md" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Enter your email" required className="border border-zinc-500 p-2 rounded-md" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">Message</label>
              <textarea name="message" cols="45" rows="7" placeholder="Write your message" required className="border border-zinc-500 p-2 rounded-md"></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600 light:text-zinc-200">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Akhir Contact */}
    </main>
  );
}

export default App;
