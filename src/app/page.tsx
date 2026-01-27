"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import data from "./data.json";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const [openModalId, setOpenModalId] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const { projects, certificates } = data;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-scroll-fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="w-full">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md h-[65px] w-full text-black z-50 shadow-sm">
        <div className="flex justify-between items-center px-6 md:px-[45px] h-full">
          <div onClick={() => scrollToSection("hero-section")} className="text-[20px] select-none font-bold cursor-pointer">Puxpui</div>
          {isClicked && (
            <div className="hidden md:flex gap-[25px] items-center font-semibold text-[17px]">
              <button onClick={() => scrollToSection("hero-section")} className="nav-hover text-black hover:text-sky-400 transition">Home</button>
              <button onClick={() => scrollToSection("about-section")} className="nav-hover text-black hover:text-sky-400 transition">About Me</button>
              <button onClick={() => scrollToSection("project-section")} className="nav-hover text-black hover:text-sky-400 transition">Project</button>
              <button onClick={() => scrollToSection("certificate-section")} className="nav-hover text-black hover:text-sky-400 transition">Certificate</button>
              <button onClick={() => scrollToSection("contact-section")} className="nav-hover text-black hover:text-sky-400 transition">Contact</button>
              <Link href="/graduated-projects" className="nav-hover text-black hover:text-sky-400 transition">Graduated Projects</Link>
            </div>
          )}
        </div>
      </nav>

      <div id="hero-section" className="flex justify-center items-center h-screen text-[50px] font-semibold flex-col relative">
        {!isClicked ? (
          <div className="animate-bounce text-[100px] cursor-pointer hover:scale-110 transition-transform" onClick={() => setIsClicked(true)}>
            🌏
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="text-5xl font-semibold animate-fade-in-slow">
              Hi, I'm <span className="text-blue-300">Pui</span>
            </div>
            <div className="text-3xl mt-2 animate-slide-up-delay">
              Game & Software Developer
            </div>
            <div className="flex gap-6 text-4xl mt-6 animate-slide-up-delay-2">
              <div className="hover:scale-125 transition">💻</div>
              <div className="hover:scale-125 transition">🎮</div>
              <div className="hover:scale-125 transition">🚀</div>
            </div>
            <div className="flex justify-center mt-10 animate-bounce cursor-pointer hover:scale-110 transition-transform" onClick={() => scrollToSection("about-section")}>
              <div className="animate-fade-in w-[50px] h-[50px] flex items-center justify-center">
                <svg viewBox="-19.04 0 75.804 75.804" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(90)">
                  <g id="SVGRepo_iconCarrier">
                    <g id="Group_65" data-name="Group 65" transform="translate(-831.568 -384.448)">
                      <path id="Path_57" data-name="Path 57" d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z" fill="#6e6e6e"></path>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>

      {isClicked && (
        <>
          <div id="about-section" className="flex justify-center items-center bg-gradient-to-b from-gray-50 to-white bg-opacity-95 px-8 z-50">
            <div className="w-full h-[90vh] overflow-y-auto no-scrollbar rounded-2xl p-8 bg-clear">
              <div className="grid grid-cols-2 gap-6 mt-8 max-w-2xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="flex justify-end text-gray-500 text-[15px]">1 March 2006</p>
                  <div className="text-4xl mb-3">🎂</div>
                  <h3 className="font-semibold text-lg mb-2">I was born</h3>
                  <p className="text-gray-600 text-base">จุดเริ่มต้นของผมเกิดขึ้นที่นี่</p>
                  <p className="text-gray-600 text-base">อำเภอเล็ก ๆ ในจังหวัดหนองคาย</p>
                </div>
                <div></div>
                <div></div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="flex justify-end text-gray-500 text-[15px]">2012</p>
                  <div className="text-4xl mb-3">💻</div>
                  <h3 className="font-semibold text-lg mb-2">Interested in Technology</h3>
                  <p className="text-gray-600 text-base">ผมเริ่มสนใจ Technology ตอนอายุ 6 ขวบ</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="flex justify-end text-gray-500 text-[15px]">9 April 2021</p>
                  <div className="text-4xl mb-3">🎓</div>
                  <h3 className="font-semibold text-lg mb-2">Graduation</h3>
                  <p className="text-gray-600 text-base">สำเร็จการศึกษา<br />ระดับมัธยมศึกษาตอนต้น</p>
                </div>
                <div></div>
                <div></div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="flex justify-end text-gray-500 text-[15px]">18 March 2024</p>
                  <div className="text-4xl mb-3">🎓</div>
                  <h3 className="font-semibold text-lg mb-2">Graduation</h3>
                  <p className="text-gray-600 text-base">สำเร็จการศึกษา<br />ระดับประกาศนียบัตรวิชาชีพ<br />สาขาคอมพิวเตอร์ธุรกิจ</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="flex justify-end text-gray-500 text-[15px]">2026</p>
                  <div className="text-4xl mb-3">📖</div>
                  <h3 className="font-semibold text-lg mb-2">Studying</h3>
                  <p className="text-gray-600 text-base">กำลังศึกษา<br />ระดับประกาศนียบัตรวิชาชีพขั้นสูง<br />สาขาเทคโนโลยีธุรกิจดิจิทัล</p>
                </div>
              </div>
              <div className="mt-40 max-w-2xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-md w-[1/2]">
                  <h3 className="font-semibold text-lg mb-2">About Me</h3>
                  <p className="text-gray-600 text-center text-base"> Hi! I'm a student in Digital Business Technology.<br />I've been passionate about technology and computers since I was six years old<br />It's always felt like magic to me. I love exploring how things work behind the screen<br />and I truly believe that programming has the power to change the world for the better.<br />My goal is to use technology to create innovative solutions that make people's lives easier and more meaningful.</p>
                </div>
              </div>
              <div className="flex justify-center mt-10 animate-bounce cursor-pointer hover:scale-110 transition-transform" onClick={() => scrollToSection("project-section")}>
                <div className="w-[50px] h-[50px] flex items-center justify-center">
                  <svg viewBox="-19.04 0 75.804 75.804" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(90)">
                    <g id="SVGRepo_iconCarrier">
                      <g id="Group_65" data-name="Group 65" transform="translate(-831.568 -384.448)">
                        <path id="Path_57" data-name="Path 57" d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z" fill="#6e6e6e"></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div id="project-section" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-50 px-8">
            <div className="max-w-6xl w-full">
              <h2 className="text-5xl font-bold mb-12 mt-20 text-center">Projects</h2>
              <div className="flex justify-center mb-8">
                <Link href="/graduated-projects" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-colors font-semibold">
                  View Graduated Projects →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <div key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                    <div className="p-8 flex-grow">
                      <img
                        className="w-full h-[250px] mb-4 object-cover rounded cursor-pointer hover:opacity-90 transition-opacity"
                        src={project.image}
                        alt={project.title}
                        onClick={() => setLightboxImage(project.image)}
                      />
                      <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                    <div className="p-8 pt-0 flex justify-center">
                      <button onClick={() => setOpenModalId(project.id)} className="button-class px-6 py-2 rounded-lg transition-colors w-[2/3]">View More</button>
                    </div>
                    {openModalId === project.id && (
                      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4" onClick={() => setOpenModalId(null)}>
                        <div className="bg-white p-6 rounded-xl max-w-2xl w-full shadow-lg relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                          <button className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl w-8 h-8 flex items-center justify-center" onClick={() => setOpenModalId(null)}>✖</button>
                          <img
                            className="w-full h-[300px] object-cover rounded-lg mb-4 cursor-pointer hover:opacity-90 transition-opacity"
                            src={project.image}
                            alt={project.title}
                            onClick={() => {
                              setLightboxImage(project.image);
                              setOpenModalId(null);
                            }}
                          />
                          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                          <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors">View on GitHub</a>}
                            {project.youtubeLink && <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">Watch on YouTube</a>}
                            {project.googleSiteLink && <a href={project.googleSiteLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">View on Google Site</a>}
                            {project.download && <a href={project.download} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">Download</a>}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="certificate-section" className="pt-[100px] min-h-screen flex flex-col justify-center items-center bg-white px-8">
            <h2 className="text-4xl font-bold mb-8">Certificate</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {certificates.map((cert) => (
                <div key={cert.id} className="bg-white text-white rounded-2xl shadow-lg w-100 flex flex-col items-center">
                  <img className="cursor-pointer hover:opacity-90 transition-opacity rounded-t-2xl" src={cert.image} alt={cert.title} onClick={() => setLightboxImage(cert.image)} />
                  <p className="pt-4 text-black text-center p-2 mb-6">{cert.title}<br />{cert.institution}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="contact-section" className="min-h-screen flex flex-col justify-center items-center bg-white px-8">
            <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://www.facebook.com/puxpui" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5 3.657 9.128 8.438 9.879v-6.987H7.898v-2.892h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.892h-2.33V21.879C18.343 21.128 22 17 22 12z" /></svg>
                Facebook
              </a>
              <a href="mailto:pukpuidesu666@gmail.com" className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.104.897 2 2 2h16c1.103 0 2-.896 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 5.017-8-5.017V6h16zm-16 12V9.489l7.555 4.735c.313.196.696.196 1.009 0L20 9.489V18H4z" /></svg>
                Email
              </a>
              <a href="https://github.com/Puxpui" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61C4.422 18.073 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.997.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.931 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3-.404c1.02.004 2.045.138 3 .404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.628-5.479 5.922.429.37.823 1.096.823 2.21 0 1.595-.014 2.882-.014 3.273 0 .32.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                GitHub
              </a>
              <Link href="/graduated-projects" className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm3.5-10c.828 0 1.5-.672 1.5-1.5S16.328 9 15.5 9 14 9.672 14 10.5s.672 1.5 1.5 1.5zm-7 0c.828 0 1.5-.672 1.5-1.5S9.328 9 8.5 9 7 9.672 7 10.5 7.672 12 8.5 12zm3.5 6.5c2.33 0 4.31-1.46 5.07-3.5H6.93c.76 2.04 2.74 3.5 5.07 3.5z" /></svg>
                Graduated Projects
              </Link>
            </div>
          </div>
        </>
      )}

      {lightboxImage && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 cursor-zoom-out" onClick={() => setLightboxImage(null)}>
          <button className="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl w-12 h-12 flex items-center justify-center z-10" onClick={() => setLightboxImage(null)}>
            ✖
          </button>
          <img src={lightboxImage} alt="Lightbox view" className="max-w-full max-h-[90vh] object-contain cursor-default" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <footer className="select-none w-full bg-gray-100 text-gray-600 py-4 text-center mt-10">
        © 2025 Puxpui, All rights reserved.
        <div>

        </div>
      </footer>
    </div>
  );
}