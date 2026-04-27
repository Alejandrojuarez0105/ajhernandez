"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#020d18] px-6 py-24 font-mono">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-5 border-b border-[#1e3a5f]">
        <span className="text-[#ff8800] text-sm tracking-widest">
          aehernandez.dev
        </span>
        <div className="hidden md:flex gap-6">
          {["inicio", "sobre mí", "stack", "proyectos", "contacto"].map((s) => (
            <a
              key={s}
              href={`#${s.replace(" ", "-")}`}
              className="text-[#475569] text-xs tracking-widest hover:text-[#ff8800] transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </nav>

      <div
        className={`w-full max-w-5xl flex flex-col items-center gap-7 transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
      >
        {/* Badge disponible */}
        <div className="flex items-center gap-2 bg-[#0d1525] border border-[#1e3a5f] rounded-full px-4 py-1.5 text-[#ff8800] text-xs tracking-widest">
          <span className="w-2 h-2 rounded-full bg-[#ff8800] animate-pulse" />
          Disponible para proyectos
        </div>

        {/* Nombre */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#e2f0ff] text-center leading-tight">
          Alejandro Emmanuel
          <br />
          <span className="text-[#ff8800]">Juárez Hernández</span>
        </h1>

        <p className="text-[#ff8800] text-sm tracking-widest">
          // Full Stack Developer & Database Engineer
        </p>

        {/* Terminal */}
        <div className="w-full bg-[#060d18] border border-[#1e3a5f] rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 bg-[#0d1525] border-b border-[#1e3a5f] px-4 py-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="text-[#475569] text-xs ml-2 tracking-widest">
              terminal — aehernandez.dev
            </span>
          </div>
          <div className="p-5 text-sm leading-loose">
            <p>
              <span className="text-[#ff8800]">const</span>{" "}
              <span className="text-[#e2f0ff]"> alejandro</span>
              <span className="text-[#ff8800]"> = {"{"}</span>
            </p>
            <p>
              &nbsp;&nbsp;<span className="text-[#ff8800]">role</span>
              <span className="text-[#ff8800]">:</span>
              <span className="text-[#e2f0ff]">
                {" "}
                "Full Stack Developer & DB Engineer"
              </span>
              <span className="text-[#ff8800]">,</span>
            </p>
            <p>
              &nbsp;&nbsp;<span className="text-[#ff8800]">frontend</span>
              <span className="text-[#ff8800]">:</span>
              <span className="text-[#e2f0ff]">
                {" "}
                ["React", "TypeScript", "JavaScript", "Vite", "Tailwind",
                "HTML", "CSS"]
              </span>
              <span className="text-[#ff8800]">,</span>
            </p>
            <p>
              &nbsp;&nbsp;<span className="text-[#ff8800]">backend</span>
              <span className="text-[#ff8800]">:</span>
              <span className="text-[#e2f0ff]">
                {" "}
                ["Node.js", "Python", "Java", "C#", "C", "C++"]
              </span>
              <span className="text-[#ff8800]">,</span>
            </p>
            <p>
              &nbsp;&nbsp;<span className="text-[#ff8800]">databases</span>
              <span className="text-[#ff8800]">:</span>
              <span className="text-[#e2f0ff]">
                {" "}
                ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "Neo4j",
                "Supabase"]
              </span>
              <span className="text-[#ff8800]">,</span>
            </p>
            <p>
              &nbsp;&nbsp;<span className="text-[#ff8800]">herramientas</span>
              <span className="text-[#ff8800]">:</span>
              <span className="text-[#e2f0ff]">
                {" "}
                ["Git", "GitHub", "VS Code", "Postman", "Linux", "Windows",
                "Markdown", "Visual Studio 2022"]
              </span>
              <span className="text-[#ff8800]">,</span>
            </p>
            <p>
              &nbsp;&nbsp;<span className="text-[#ff8800]">available</span>
              <span className="text-[#ff8800]">:</span>
              <span className="text-[#ff8800]"> true</span>
            </p>
            <p>
              <span className="text-[#ff8800]">{"}"}</span>
            </p>
            <p className="mt-2">
              <span className="text-[#334155]">$ </span>
              <span className="text-[#ff8800]">_</span>
              <span className="inline-block w-2 h-3.5 bg-[#ff8800] ml-0.5 animate-pulse align-middle" />
            </p>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-[#475569] text-sm text-center leading-relaxed max-w-md">
          Construyo soluciones completas: desde la base de datos hasta la
          interfaz.
          <br />
          Backend sólido, frontend limpio, datos bien modelados.
        </p>

        {/* Botones */}
        <div className="flex gap-5 flex-wrap justify-center mt-2">
          <a
            href="#contacto"
            className="bg-[#ff8800] text-[#020d18] font-bold px-10 py-4 rounded-xl text-sm tracking-wide flex items-center justify-center min-w-[180px] shadow-lg hover:scale-105 hover:shadow-[0_0_20px_#ff8800] transition-all duration-300"
          >
            Hablemos →
          </a>
          <a
            href="#proyectos"
            className="text-[#ff8800] border border-[#1e3a5f] px-10 py-4 rounded-xl text-sm tracking-wide flex items-center justify-center min-w-[180px] hover:border-[#ff8800] hover:scale-105 transition-all duration-300"
          >
            Ver proyectos ↓
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-8 flex-wrap justify-center pt-6 border-t border-[#1e3a5f] w-full">
          {[
            { num: "4+", lbl: "años programando" },
            { num: "6+", lbl: "motores de BD" },
            { num: "20+", lbl: "repos en GitHub" },
            { num: "10+", lbl: "tecnologías" },
          ].map(({ num, lbl }) => (
            <div key={lbl} className="text-center">
              <p className="text-xl font-bold text-[#ff8800]">{num}</p>
              <p className="text-[#475569] text-xs mt-1 tracking-widest">
                {lbl}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
