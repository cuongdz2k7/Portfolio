import { Button } from "../components/Button";
import { asset } from "../lib/assets";

export const Contact = () => {
  return (
    <section className="c-space my-20" id="contact">
      <div className="relative flex min-h-screen flex-col items-center justify-center">
        <img
          src={asset("/assets/terminal.png")}
          alt="Terminal"
          className="absolute inset-0 h-full min-h-screen"
        />

        <div className="contact-container rounded-2xl border border-black-300 bg-black-200/80 p-8 backdrop-blur-md">
          <h3 className="head-text">Thông tin nộp bài</h3>

          <p className="mt-3 text-lg leading-8 text-white-600">
            Portfolio này là sản phẩm tổng hợp cho bài tập dự án cá nhân. Bạn có
            thể thay các placeholder bằng thông tin thật, thêm link minh chứng và
            xuất bản website lên GitHub Pages, Netlify hoặc Vercel.
          </p>

          <div className="mt-10 grid gap-4 text-white-600">
            <div className="rounded-xl bg-black-300 p-4">
              <strong className="text-white">Họ tên:</strong> [Điền họ tên]
            </div>
            <div className="rounded-xl bg-black-300 p-4">
              <strong className="text-white">Lớp/Mã sinh viên:</strong> [Điền
              thông tin]
            </div>
            <div className="rounded-xl bg-black-300 p-4">
              <strong className="text-white">Email:</strong> [Điền email]
            </div>
            <div className="rounded-xl bg-black-300 p-4">
              <strong className="text-white">Minh chứng:</strong> [Thêm link
              Google Drive/PDF/video tại đây]
            </div>
          </div>

          <Button href="#projects" containerClass="mt-10 w-full" isBeam>
            Quay lại dự án
          </Button>
        </div>
      </div>
    </section>
  );
};
