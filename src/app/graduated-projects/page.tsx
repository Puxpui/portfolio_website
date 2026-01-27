"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import data from "../data.json";

export default function GraduatedProjects() {
  const [openModalId, setOpenModalId] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Filter for graduated projects (id 1 and 2)
  const graduatedProjects = data.projects.filter(p => p.id === 1 || p.id === 2);

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
    <div className="w-full pt-[65px] min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md h-[65px] w-full text-black z-50 shadow-sm">
        <div className="flex justify-between items-center px-6 md:px-[45px] h-full">
          <Link href="/" className="text-[20px] select-none font-bold cursor-pointer hover:text-sky-400 transition">
            Puxpui
          </Link>
          <div className="flex gap-[25px] items-center font-semibold text-[17px]">
            <Link href="/" className="nav-hover text-black hover:text-sky-400 transition">
              Home
            </Link>
            <Link href="/" className="nav-hover text-black hover:text-sky-400 transition">
              Back
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex justify-center items-center h-[300px] text-center px-6 scroll-fade-up opacity-0">
        <div>
          <h1 className="text-[50px] md:text-[60px] font-bold mb-4">
            โปรเจคจบ <span className="text-sky-400">ปวส. & ปวช.</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-gray-600 max-w-2xl mx-auto">
            ผลงานการจบการศึกษา ด้านเทคโนโลยีธุรกิจดิจิทัล
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-6 md:px-[45px] py-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {graduatedProjects.map((project) => (
            <div key={project.id} className="scroll-fade-up opacity-0">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Image Container */}
                <div
                  className="relative h-[300px] overflow-hidden cursor-pointer bg-gray-200 flex-shrink-0 group"
                  onClick={() => setLightboxImage(project.image)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold">Click to view</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h2 className="text-[24px] font-bold mb-3 text-black">{project.title}</h2>
                    <p className="text-gray-600 text-[16px] leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 flex-wrap mt-auto">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-sky-400 transition font-semibold text-[14px]"
                      >
                        GitHub
                      </a>
                    )}
                    {project.download && (
                      <a
                        href={project.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-red-700 transition font-semibold text-[14px]"
                      >
                        Download
                      </a>
                    )}
                    {project.youtubeLink && (
                      <a
                        href={project.youtubeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold text-[14px]"
                      >
                        YouTube
                      </a>
                    )}
                    {project.googleSiteLink && (
                      <a
                        href={project.googleSiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-[14px]"
                      >
                        View Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="max-w-4xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage}
              alt="Project"
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black p-2 rounded-full text-[24px] font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="select-none w-full bg-gray-100 text-gray-600 py-4 text-center mt-10">
        © 2025 Puxpui, All rights reserved.
        <div>
            <Link href="/" className="text-sky-400 hover:text-sky-300 font-semibold transition">
            กลับไปหน้าหลัก
          </Link>
        </div>
      </footer>
    </div>
  );
}
