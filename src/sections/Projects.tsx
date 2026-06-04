import { useGSAP } from "@gsap/react";
import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { Suspense, useState } from "react";

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
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
    );
  }, [selectedProjectIndex]);

  return (
    <section className="c-space my-20" id="projects">
      <p className="head-text">Dự án học tập</p>
      <p className="mt-3 max-w-3xl text-white-600">
        Mỗi bài tập được trình bày như một dự án nhỏ với mục tiêu, quy trình,
        kết quả đạt được và kỹ năng rút ra. Các khu vực minh chứng có thể thay
        bằng ảnh chụp, PDF, video hoặc đường link thật.
      </p>

      <div className="mt-12 grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="relative flex flex-col gap-5 px-5 py-10 shadow-2xl shadow-black-200 sm:p-10">
          <div className="absolute right-0 top-0">
            <img
              src={currentProject.spotlight}
              alt="Hiệu ứng ánh sáng"
              className="pointer-events-none h-96 w-full select-none rounded-xl object-cover"
            />
          </div>

          <div
            className="w-fit rounded-lg p-3 backdrop-blur-3xl backdrop-filter"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="Biểu tượng dự án"
              className="size-10 shadow-sm"
            />
          </div>

          <div className="my-5 flex flex-col gap-5 text-white-600">
            <p className="animatedText text-2xl font-semibold text-white">
              {currentProject.title}
            </p>

            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
            <p className="animatedText rounded-lg border border-white-500/20 bg-black-300/60 p-4 text-sm">
              Minh chứng: [Thêm ảnh chụp màn hình, PDF, video hoặc đường link
              sản phẩm tại đây]
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-3">
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

            <a href={currentProject.href} className="flex items-center gap-2 text-white-600">
              <p>Minh chứng placeholder</p>
              <img
                src={asset("/assets/arrow-up.png")}
                className="size-3"
                alt="Mũi tên"
              />
            </a>
          </div>

          <div className="mt-7 flex items-center justify-between">
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

            <span className="text-sm text-white-600">
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

        <div className="h-96 rounded-lg border border-black-300 bg-black-200 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />

            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>

            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};
