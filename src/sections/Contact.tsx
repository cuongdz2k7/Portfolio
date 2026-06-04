import { Button } from "../components/Button";
import { clientReviews, links } from "../constants";
import { asset } from "../lib/assets";
import type { ReactNode } from "react";

export const Contact = () => {
  return (
    <section className="c-space my-20" id="contact">
      <div className="mx-auto w-full max-w-5xl rounded-3xl border border-white-500/10 bg-black-200/85 backdrop-blur-md overflow-hidden shadow-2xl relative">
        {/* Background Terminal texture */}
        <img
          src={asset("/assets/terminal.png")}
          alt="Bảng thông tin nộp bài"
          className="absolute inset-0 h-full w-full object-cover opacity-30 pointer-events-none animate-pulse"
          style={{ animationDuration: '6s' }}
        />

        {/* macOS Window Header (Title Bar) */}
        <div className="relative z-10 flex items-center justify-between px-4 py-3 bg-[#16161a]/95 border-b border-white-500/10">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_8px_rgba(255,95,86,0.5)]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_8px_rgba(255,189,46,0.5)]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_8px_rgba(39,201,63,0.5)]" />
          </div>
          <div className="text-xs sm:text-sm font-semibold text-neutral-400 font-mono">macOS - bash</div>
          <div className="w-12"></div> {/* Spacing to center title */}
        </div>

        {/* macOS Window Body (Content) */}
        <div className="relative z-10 p-6 sm:p-10 flex flex-col justify-center">
          <h3 className="head-text text-center mx-auto">Thông tin nộp bài</h3>

          <p className="mt-3 max-w-3xl mx-auto text-center text-base sm:text-lg leading-8 text-white-600">
            Portfolio này là sản phẩm tổng hợp cho bài tập dự án cá nhân, trình bày
            thông tin cá nhân, học phần, minh chứng và phần tổng kết quá trình học.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <InfoPanel title="Thông tin cá nhân">
              <InfoRow label="Họ tên" value="Đinh Tiến Cường" />
              <InfoRow label="Email" value={links.contactEmail} />
              <InfoRow label="Mã sinh viên" value="[Điền mã sinh viên]" />
            </InfoPanel>

            <InfoPanel title="Thông tin học phần">
              <InfoRow label="Trường" value="VNU-UET" />
              <InfoRow label="Lớp" value="K70I-CS6" />
              <InfoRow label="Lớp học phần" value="UET.A12" />
            </InfoPanel>

            <InfoPanel title="Minh chứng nộp bài">
              <InfoRow label="Website" value="GitHub Pages Portfolio" />
              <InfoRow label="Minh chứng" value="[Thêm link Google Drive/PDF/video tại đây]" />
              <InfoRow label="Trạng thái" value="Đã hoàn thành" />
            </InfoPanel>

            <InfoPanel title="Tổng kết quá trình học">
              <p className="leading-8 text-white-600">
                Sau học phần, tôi hiểu rằng năng lực số không chỉ là biết dùng công
                cụ, mà còn là biết tổ chức thông tin, đánh giá nguồn, hợp tác trực
                tuyến và ứng dụng AI một cách có trách nhiệm.
              </p>
            </InfoPanel>
          </div>

          <div className="mt-10">
            <h4 className="text-xl font-bold text-white mb-6 text-center">Đánh giá & Kỹ năng số đạt được</h4>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {clientReviews.map(({ id, name, position, review }) => (
                <div
                  key={id}
                  className="rounded-xl border border-white-500/10 bg-black-300/80 p-4 transition-all duration-300 hover:border-white-500/20"
                >
                  <p className="font-semibold text-white">{name}</p>
                  <p className="mt-1 text-sm text-white-600">{position}</p>
                  <p className="mt-4 text-sm leading-7 text-white-600">{review}</p>
                </div>
              ))}
            </div>
          </div>

          <Button href="#projects" containerClass="mt-10 w-full md:max-w-md mx-auto" isBeam>
            Quay lại dự án
          </Button>
        </div>
      </div>
    </section>
  );
};

interface InfoPanelProps {
  children: ReactNode;
  title: string;
}

const InfoPanel = ({ children, title }: InfoPanelProps) => (
  <section className="rounded-xl border border-white-500/10 bg-black-300/80 p-5">
    <h4 className="mb-4 text-lg font-bold text-white">{title}</h4>
    <div className="grid gap-3 text-white-600">{children}</div>
  </section>
);

interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow = ({ label, value }: InfoRowProps) => (
  <div className="rounded-lg bg-black-200/80 p-4 leading-7">
    <strong className="text-white">{label}:</strong> {value}
  </div>
);
