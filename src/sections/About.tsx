import { useState } from "react";
import Globe from "react-globe.gl";

import { Button } from "../components/Button";
import { links } from "../constants";
import { asset } from "../lib/assets";

export const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    void navigator.clipboard.writeText(links.contactEmail);

    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space mx-auto my-20 max-w-7xl" id="about">
      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={asset("/assets/profile.jpg")}
              alt="Ảnh cá nhân"
              className="h-fit w-full rounded-2xl object-cover object-top sm:h-[276px]"
            />

            <div>
              <p className="grid-headtext">Xin chào, tôi là Đinh Tiến Cường</p>
              <p className="grid-subtext">
                Tôi là sinh viên VNU-UET, lớp K70I-CS6, đang học học phần UET.A12.
                Tôi quan tâm đến ứng dụng AI trong học tập, sáng tạo nội dung và quản
                lý thông tin cá nhân một cách có trách nhiệm.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={asset("/assets/grid2.png")}
              alt="Kỹ năng số"
              className="h-fit w-full object-contain sm:w-[276px]"
            />

            <div>
              <p className="grid-headtext">Kỹ năng và công cụ</p>
              <p className="grid-subtext">
                Quản lý tệp tin, tìm kiếm học thuật, Google Drive/OneDrive, Trello,
                Canva, CapCut, viết prompt, AI tạo sinh và liêm chính học thuật.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="flex h-fit w-full items-center justify-center rounded-3xl sm:h-[326px]">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                showAtmosphere
                globeImageUrl={asset("/assets/earth-night.jpg")}
                bumpImageUrl={asset("/assets/earth-topology.png")}
                labelsData={[
                  {
                    lat: 16.0471,
                    lng: 108.2068,
                    text: "Việt Nam",
                    color: "white",
                    size: 20,
                  },
                ]}
              />
            </div>

            <div>
              <p className="grid-headtext">
                Học tập và kết nối trong môi trường số.
              </p>

              <p className="grid-subtext">
                Portfolio này được xây dựng như một hồ sơ học tập trực tuyến, có thể
                tiếp tục cập nhật sau khi kết thúc học phần.
              </p>

              <Button href="#projects" containerClass="mt-10 w-full" isBeam>
                Xem dự án học tập
              </Button>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src={asset("/assets/grid3.png")}
              alt="Mục tiêu portfolio"
              className="h-fit w-full object-contain sm:h-[266px]"
            />

            <div>
              <p className="grid-headtext">Mục tiêu portfolio</p>
              <p className="grid-subtext">
                Hệ thống hóa sản phẩm học tập từ Bài 1 đến Bài 7A, thể hiện quá
                trình rèn luyện kỹ năng số và lưu trữ minh chứng để dễ truy cập, chia
                sẻ, hoàn thiện.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src={asset("/assets/grid4.png")}
              alt="Liên hệ"
              className="h-fit w-full object-cover sm:h-[276px] sm:object-top md:h-[126px]"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Thông tin liên hệ</p>

              <div className="copy-container">
                <Button onClick={handleCopy} containerClass="w-full">
                  <img
                    src={hasCopied ? asset("/assets/tick.svg") : asset("/assets/copy.svg")}
                    alt={hasCopied ? "Đã sao chép" : "Sao chép"}
                    className="size-5"
                  />
                  {hasCopied ? "Đã sao chép" : "Sao chép email"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
