import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Portfolio render error:", error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <main className="min-h-screen bg-black-100 px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl rounded-2xl border border-black-300 bg-black-200 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-white-600">
            Digital Portfolio
          </p>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            Portfolio học tập cá nhân
          </h1>
          <p className="mt-6 text-lg leading-8 text-white-600">
            Website đang hiển thị chế độ dự phòng vì trình duyệt không tải được
            một phần hiệu ứng 3D. Nội dung chính vẫn gồm CV, dự án học phần và
            phần tổng kết quá trình học.
          </p>
          <ul className="mt-8 grid gap-3 text-white-700">
            <li>Bài 1: Tệp tin và thư mục</li>
            <li>Bài 2: Tìm kiếm và đánh giá thông tin học thuật</li>
            <li>Bài 3: Viết prompt hiệu quả</li>
            <li>Bài 4: Hợp tác trực tuyến</li>
            <li>Bài 5: AI tạo sinh</li>
            <li>Bài 6: AI có trách nhiệm</li>
            <li>Bài 7A: Trợ lý nghiên cứu AI</li>
          </ul>
        </div>
      </main>
    );
  }
}
