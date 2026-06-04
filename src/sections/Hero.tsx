import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, type Vector3 } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";

import { Button } from "../components/Button";
import { CanvasLoader } from "../components/CanvasLoader";
import { Cube } from "../components/Cube";
import { HeroCamera } from "../components/HeroCamera";
import { HackerRoom } from "../components/HackerRoom";
import { ReactLogo } from "../components/ReactLogo";
import { Rings } from "../components/Rings";
import { Target } from "../components/Target";
import { calculateSizes } from "../lib/utils";

export const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="relative flex min-h-screen w-full flex-col">
      <div className="c-space mx-auto mt-20 flex w-full flex-col gap-4 sm:mt-36">
        <p className="text-center font-generalsans text-xl font-medium text-white sm:text-3xl">
          [Điền họ tên]
        </p>

        <p className="hero_tag text-gray_gradient">Digital Portfolio</p>

        <p className="mx-auto max-w-3xl text-center text-base leading-8 text-white-600 sm:text-xl">
          Hồ sơ học tập cá nhân cho học phần Nhập môn Công nghệ số và Ứng dụng
          Trí tuệ nhân tạo. Portfolio này tổng hợp CV, kỹ năng số, sản phẩm học
          tập và phần tự tổng kết quá trình học.
        </p>
      </div>

      <div className="absolute inset-0 size-full">
        <Canvas className="size-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition as Vector3}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition as Vector3} />
              <ReactLogo position={sizes.reactLogoPosition as Vector3} />
              <Rings
                position={sizes.ringPosition as [number, number, number]}
              />
              <Cube position={sizes.cubePosition as Vector3} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="c-space absolute bottom-7 left-0 right-0 z-10 w-full">
        <Button
          isBeam
          containerClass="sm:w-fit w-full sm:min-w-96"
          href="#about"
        >
          Khám phá portfolio
        </Button>
      </div>
    </section>
  );
};
