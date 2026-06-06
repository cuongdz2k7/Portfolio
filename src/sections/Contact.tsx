import { Button } from "../components/Button";
import { links } from "../constants";
import type { ReactNode } from "react";

export const Contact = () => {
  return (
    <section className="c-space my-20 overflow-hidden" id="contact">
      <div className="relative mx-auto flex w-full max-w-[1100px] flex-col overflow-hidden rounded-[2rem] border border-white-500/10 bg-[#09090b] shadow-[0_28px_90px_rgba(0,0,0,0.55)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(255,255,255,0.14),transparent_22%),radial-gradient(circle_at_88%_0%,rgba(96,165,250,0.13),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0)_34%)]" />

        <div className="relative z-10 flex shrink-0 items-center justify-between border-b border-white-500/10 bg-[#19191f]/95 px-4 py-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56] shadow-[0_0_8px_rgba(255,95,86,0.5)]" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E] shadow-[0_0_8px_rgba(255,189,46,0.5)]" />
            <span className="h-3 w-3 rounded-full bg-[#27C93F] shadow-[0_0_8px_rgba(39,201,63,0.5)]" />
          </div>
          <div className="font-mono text-xs font-semibold text-neutral-400 sm:text-sm">
            macOS - bash
          </div>
          <div className="w-12" />
        </div>

        <div className="relative z-10 flex flex-col justify-center px-5 py-8 sm:px-8 sm:py-10">
          <div className="mx-auto max-w-3xl rounded-3xl border border-white-500/10 bg-white/[0.045] px-5 py-7 text-center shadow-[0_18px_50px_rgba(0,0,0,0.32)] backdrop-blur-md sm:px-8">
            <h3 className="head-text mx-auto">Thông tin nộp bài</h3>

            <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-white-600 sm:text-lg">
              Portfolio này là sản phẩm tổng hợp cho bài tập dự án cá nhân, trình bày
              thông tin cá nhân, học phần, minh chứng và phần tổng kết quá trình học.
            </p>
          </div>

          <div className="relative z-20 mx-auto -mt-3 grid w-full max-w-5xl gap-5 md:grid-cols-3">
            <InfoPanel title="Thông tin cá nhân">
              <InfoRow label="Họ tên" value="Đinh Tiến Cường" />
              <InfoRow label="Email" value={links.contactEmail} />
              <InfoRow label="Mã sinh viên" value="25021659" />
            </InfoPanel>

            <InfoPanel title="Thông tin học phần">
              <InfoRow label="Trường" value="VNU-UET" />
              <InfoRow label="Lớp" value="K70I-CS6" />
              <InfoRow label="Lớp học phần" value="UET.A12" />
            </InfoPanel>

            <InfoPanel title="Minh chứng nộp bài">
              <InfoRow label="Website" value="GitHub Pages Portfolio" />
              <InfoRow label="Minh chứng" value="7 gói bài tập tuần 1-7 đã được gắn trong từng dự án" />
              <InfoRow label="Trạng thái" value="Đã hoàn thành" />
            </InfoPanel>
          </div>

          <div className="mx-auto mt-8 w-full max-w-5xl rounded-3xl border border-white-500/10 bg-[#17171d]/90 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.32)] backdrop-blur-md sm:p-6">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-green-400">
              Nhìn lại quá trình
            </h4>
            <h3 className="mt-1 text-2xl font-bold text-white">Tổng kết học phần</h3>
            <p className="mt-3 text-base leading-8 text-white-600 sm:text-lg">
              Sau quá trình học tập, tôi hiểu rõ hơn rằng năng lực số không chỉ là biết dùng công cụ, mà còn là biết tổ chức thông tin, giao tiếp có trách nhiệm và ứng dụng AI một cách có kiểm soát.
            </p>
          </div>

          <div className="mx-auto mt-8 w-full max-w-5xl">
            <h3 className="mb-5 text-center text-2xl font-bold text-white">Kỹ năng đạt được</h3>
            <div className="grid gap-4 md:grid-cols-2">
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

          <div className="mx-auto mt-10 w-full max-w-5xl rounded-3xl border border-white-500/10 bg-[#17171d]/80 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.26)] backdrop-blur-md sm:p-6">
            <h4 className="text-center font-mono text-sm font-semibold uppercase tracking-wider text-[#FFBD2E]">
              Rubric tự đánh giá
            </h4>
            <h3 className="mb-6 mt-1 text-center text-2xl font-bold text-white">
              Định hướng hoàn thiện portfolio
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
  <section className="rounded-3xl border border-white-500/10 bg-[#1b1b21]/95 p-4 shadow-[0_16px_44px_rgba(0,0,0,0.32)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white-500/20 sm:p-5">
    <h4 className="mb-3 text-lg font-bold text-white">{title}</h4>
    <div className="grid gap-3 text-white-600">{children}</div>
  </section>
);

interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow = ({ label, value }: InfoRowProps) => (
  <div className="rounded-xl bg-[#0d0d10]/95 p-3 leading-7 shadow-inner shadow-black/40 sm:p-4">
    <strong className="text-white">{label}:</strong> {value}
  </div>
);

interface SkillCardProps {
  category: string;
  title: string;
  desc: string;
}

const SkillCard = ({ category, title, desc }: SkillCardProps) => (
  <div className="rounded-3xl border border-white-500/10 bg-[#1b1b21]/95 p-5 shadow-[0_16px_44px_rgba(0,0,0,0.28)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white-500/20">
    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-green-400">{category}</span>
    <h4 className="mb-3 mt-1 text-lg font-bold text-white">{title}</h4>
    <p className="text-sm leading-7 text-white-600 sm:text-base">{desc}</p>
  </div>
);

interface RubricCardProps {
  title: string;
  desc: string;
  borderClass: string;
  textClass: string;
}

const RubricCard = ({ title, desc, borderClass, textClass }: RubricCardProps) => (
  <div className={`rounded-3xl border p-4 shadow-[0_14px_34px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 sm:p-5 ${borderClass}`}>
    <h4 className={`text-lg font-bold ${textClass} mb-3`}>{title}</h4>
    <p className="text-xs leading-6 text-white-600 sm:text-sm">{desc}</p>
  </div>
);
