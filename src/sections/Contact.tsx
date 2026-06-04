import { Button } from "../components/Button";
import { links } from "../constants";
import { asset } from "../lib/assets";
import type { ReactNode } from "react";

export const Contact = () => {
  return (
    <section className="c-space my-20" id="contact">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-white-500/10 bg-[#0c0c0e]/95 backdrop-blur-md overflow-hidden shadow-2xl relative flex flex-col">
        {/* Background Terminal texture */}
        <img
          src={asset("/assets/terminal.png")}
          alt="Bảng thông tin nộp bài"
          className="absolute inset-0 h-full w-full object-cover opacity-15 pointer-events-none"
        />

        {/* macOS Window Header (Title Bar) */}
        <div className="relative z-10 flex items-center justify-between px-4 py-3 bg-[#16161a]/95 border-b border-white-500/10 shrink-0">
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

          {/* Grid of 3 info panels */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
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
          </div>

          {/* Section: Nhìn lại quá trình - Tổng kết học phần */}
          <div className="mt-10 rounded-xl border border-white-500/10 bg-black-300/80 p-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-green-400 font-mono">Nhìn lại quá trình</h4>
            <h3 className="text-2xl font-bold text-white mt-1">Tổng kết học phần</h3>
            <p className="mt-4 text-base sm:text-lg leading-8 text-white-600">
              Sau quá trình học tập, tôi hiểu rõ hơn rằng năng lực số không chỉ là biết dùng công cụ, mà còn là biết tổ chức thông tin, giao tiếp có trách nhiệm và ứng dụng AI một cách có kiểm soát.
            </p>
          </div>

          {/* Section: Kỹ năng đạt được */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Kỹ năng đạt được</h3>
            <div className="grid gap-5 md:grid-cols-2">
              <SkillCard
                category="Tư duy tổ chức"
                title="Tư duy tổ chức và xử lý thông tin"
                desc="Tôi biết cách sắp xếp tệp tin, quản lý dữ liệu cá nhân, tìm kiếm thông tin học thuật bằng từ khóa phù hợp và đánh giá nguồn tin trước khi sử dụng."
              />
              <SkillCard
                category="Ứng dụng AI"
                title="Sử dụng AI để hỗ trợ học tập"
                desc="Tôi học được cách viết prompt rõ mục tiêu, cung cấp ngữ cảnh, kiểm tra lại kết quả và dùng AI như một công cụ hỗ trợ thay vì thay thế hoàn toàn tư duy cá nhân."
              />
              <SkillCard
                category="Hợp tác số"
                title="Làm việc trong môi trường trực tuyến"
                desc="Các hoạt động về giao tiếp, họp nhóm và Trello giúp tôi hiểu tầm quan trọng của phân công công việc, minh bạch tiến độ và phản hồi đúng thời điểm."
              />
              <SkillCard
                category="Liêm chính"
                title="Học tập có trách nhiệm"
                desc="Tôi nhận thức rõ hơn về an toàn thông tin, đạo văn, trích dẫn nguồn và trách nhiệm khi dùng AI để tạo hoặc chỉnh sửa nội dung học thuật."
              />
            </div>
          </div>

          {/* Section: Rubric tự đánh giá */}
          <div className="mt-12 rounded-xl border border-white-500/10 bg-[#16161a]/60 p-6 sm:p-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#FFBD2E] font-mono text-center">Rubric tự đánh giá</h4>
            <h3 className="text-2xl font-bold text-white mt-1 text-center mb-8">Định hướng hoàn thiện portfolio</h3>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <RubricCard
                title="Xuất sắc"
                desc="Portfolio có thiết kế chuyên nghiệp, đầy đủ minh chứng, trình bày rõ tư duy và thể hiện khả năng ứng dụng công nghệ số vượt yêu cầu."
                borderClass="border-green-500/20 hover:border-green-500/40 bg-green-500/5"
                textClass="text-green-400"
              />
              <RubricCard
                title="Tốt"
                desc="Portfolio có cấu trúc rõ, hoàn thành hầu hết yêu cầu, nội dung dễ theo dõi và có minh chứng phù hợp cho các bài tập."
                borderClass="border-blue-500/20 hover:border-blue-500/40 bg-blue-500/5"
                textClass="text-blue-400"
              />
              <RubricCard
                title="Trung bình"
                desc="Portfolio có nội dung cơ bản nhưng cần bổ sung thêm minh chứng, phân tích và liên kết giữa các sản phẩm học tập."
                borderClass="border-yellow-500/20 hover:border-yellow-500/40 bg-yellow-500/5"
                textClass="text-yellow-400"
              />
              <RubricCard
                title="Cần cải thiện"
                desc="Portfolio còn thiếu nội dung hoặc minh chứng quan trọng, cần hoàn thiện lại cấu trúc, trình bày và tính xác thực."
                borderClass="border-red-500/20 hover:border-red-500/40 bg-red-500/5"
                textClass="text-red-400"
              />
            </div>
          </div>

          <Button href="#projects" containerClass="mt-12 w-full md:max-w-md mx-auto" isBeam>
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

interface SkillCardProps {
  category: string;
  title: string;
  desc: string;
}

const SkillCard = ({ category, title, desc }: SkillCardProps) => (
  <div className="rounded-xl border border-white-500/10 bg-black-300/80 p-5 transition-all duration-300 hover:border-white-500/20">
    <span className="text-xs font-semibold uppercase tracking-wider text-green-400 font-mono">{category}</span>
    <h4 className="text-lg font-bold text-white mt-1 mb-3">{title}</h4>
    <p className="text-sm sm:text-base leading-7 text-white-600">{desc}</p>
  </div>
);

interface RubricCardProps {
  title: string;
  desc: string;
  borderClass: string;
  textClass: string;
}

const RubricCard = ({ title, desc, borderClass, textClass }: RubricCardProps) => (
  <div className={`rounded-xl border p-5 transition-all duration-300 ${borderClass}`}>
    <h4 className={`text-lg font-bold ${textClass} mb-3`}>{title}</h4>
    <p className="text-xs sm:text-sm leading-6 text-white-600">{desc}</p>
  </div>
);
