import { useGSAP } from "@gsap/react";
import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { Suspense, useState } from "react";
import type { ReactNode } from "react";

import { CanvasLoader } from "../components/CanvasLoader";
import { DemoComputer } from "../components/DemoComputer";
import { myProjects } from "../constants";
import { asset } from "../lib/assets";

export const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const currentProject = myProjects[selectedProjectIndex];
  const projectCount = myProjects.length;

  const handleNavigation = (direction: "previous" | "next" = "next") => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      }

      return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      ".animatedText",
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.55, stagger: 0.08, ease: "power2.out" }
    );
  }, [selectedProjectIndex]);

  return (
    <section className="my-24 w-full px-5 sm:px-10 xl:px-16 2xl:px-24" id="projects">
      <div className="mx-auto w-full max-w-[1800px]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="head-text">Dự án học tập</p>
            <p className="mt-4 max-w-5xl text-base leading-8 text-white-600 sm:text-lg">
              Mỗi bài tập được trình bày như một dự án nhỏ với mục tiêu, quy trình, kết quả,
              kỹ năng rút ra và khu vực minh chứng. Các placeholder có thể thay bằng ảnh chụp,
              PDF, video hoặc đường link sản phẩm thật khi nộp bài.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-white-500/15 bg-black-200/80 px-5 py-3 text-sm text-white-600">
            <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_18px_rgba(74,222,128,0.8)]" />
            7 bài tập trọng tâm đã hoàn thành
          </div>
        </div>

        <div className="mt-12 grid w-full grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(340px,0.45fr)]">
          <article className="relative overflow-hidden rounded-2xl border border-white-500/10 bg-black-200/80 p-5 shadow-2xl shadow-black-200 sm:p-8 lg:p-10">
            <div className="absolute right-0 top-0 opacity-80">
              <img
                src={currentProject.spotlight}
                alt=""
                className="pointer-events-none h-80 w-96 select-none object-cover"
              />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 rounded-xl p-3 backdrop-blur-3xl backdrop-filter"
                    style={currentProject.logoStyle}
                  >
                    <img
                      src={currentProject.logo}
                      alt="Biểu tượng dự án"
                      className="size-10 shadow-sm"
                    />
                  </div>

                  <div>
                    <p className="animatedText text-2xl font-bold leading-tight text-white sm:text-3xl">
                      {currentProject.title}
                    </p>
                    <p className="animatedText mt-3 max-w-4xl text-base leading-8 text-white-600">
                      {currentProject.desc}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-300">
                  <span className="h-2 w-2 rounded-full bg-green-300" />
                  Đã hoàn thành
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
                <InfoBlock title="Mục tiêu">
                  <p>{currentProject.goal}</p>
                </InfoBlock>

                <InfoBlock title="Kết quả đạt được">
                  <p>{currentProject.result}</p>
                </InfoBlock>

                <InfoBlock className="lg:col-span-2" title="Quy trình thực hiện">
                  <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {currentProject.process.map((step, index) => (
                      <li key={step} className="flex gap-3">
                        <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </InfoBlock>

                <InfoBlock title="Kỹ năng rút ra">
                  <div className="flex flex-wrap gap-2">
                    {currentProject.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white-500/15 bg-white/[0.06] px-3 py-1.5 text-sm text-white-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </InfoBlock>

                <InfoBlock title="Minh chứng">
                  <p className="rounded-lg border border-dashed border-white-500/25 bg-black-300/70 p-4 text-white-600">
                    {currentProject.evidence}
                  </p>
                </InfoBlock>
              </div>

              <div className="mt-8 flex flex-col gap-5 border-t border-white-500/10 pt-6 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-wrap items-center gap-3">
                  {currentProject.tags.map((tag) => (
                    <div
                      key={`${currentProject.title}-${tag.name}`}
                      className="tech-logo"
                      title={tag.name}
                    >
                      <img src={tag.path} alt={tag.name} />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-6 md:justify-end">
                  <button
                    className="arrow-btn"
                    onClick={() => handleNavigation("previous")}
                    aria-label="Dự án trước"
                  >
                    <img
                      src={asset("/assets/left-arrow.png")}
                      alt="Mũi tên trái"
                      className="size-4"
                    />
                  </button>

                  <span className="min-w-14 text-center text-sm text-white-600">
                    {selectedProjectIndex + 1} / {projectCount}
                  </span>

                  <button
                    className="arrow-btn"
                    onClick={() => handleNavigation("next")}
                    aria-label="Dự án tiếp theo"
                  >
                    <img
                      src={asset("/assets/right-arrow.png")}
                      alt="Mũi tên phải"
                      className="size-4"
                    />
                  </button>
                </div>
              </div>
            </div>
          </article>

          <aside className="mx-auto aspect-square w-full max-w-[520px] self-start overflow-hidden rounded-2xl border border-white-500/10 bg-black-200 xl:sticky xl:top-28">
            <Canvas>
              <ambientLight intensity={Math.PI} />
              <directionalLight position={[10, 10, 5]} />

              <Center>
                <Suspense fallback={<CanvasLoader />}>
                  <group scale={1.9} position={[0, -1.5, 0]} rotation={[0, -0.1, 0]}>
                    <DemoComputer texture={currentProject.texture} />
                  </group>
                </Suspense>
              </Center>

              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
            </Canvas>
          </aside>
        </div>
      </div>
    </section>
  );
};

interface InfoBlockProps {
  children: ReactNode;
  className?: string;
  title: string;
}

const InfoBlock = ({ children, className = "", title }: InfoBlockProps) => (
  <section
    className={`animatedText rounded-xl border border-white-500/10 bg-black-300/45 p-5 text-base leading-8 text-white-600 ${className}`}
  >
    <h3 className="mb-3 text-lg font-bold text-white">{title}</h3>
    {children}
  </section>
);
