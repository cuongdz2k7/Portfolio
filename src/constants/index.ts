export const links = {
  contactEmail: "[Điền email]",
  sourceCode: "#projects",
};

export const navLinks = [
  {
    id: 1,
    name: "Trang chủ",
    href: "#",
  },
  {
    id: 2,
    name: "Giới thiệu",
    href: "#about",
  },
  {
    id: 3,
    name: "Dự án",
    href: "#projects",
  },
  {
    id: 4,
    name: "CV",
    href: "#cv",
  },
  {
    id: 5,
    name: "Tổng kết",
    href: "#reflection",
  },
] as const;

export const clientReviews = [
  {
    id: 1,
    name: "Tư duy tổ chức",
    position: "Quản lý dữ liệu cá nhân",
    img: "/assets/review1.png",
    review:
      "Tôi biết cách sắp xếp tệp tin, đặt tên tài liệu, tổ chức thư mục học tập và lưu trữ minh chứng theo cấu trúc rõ ràng.",
  },
  {
    id: 2,
    name: "Khai thác thông tin",
    position: "Tìm kiếm và đánh giá nguồn",
    img: "/assets/review2.png",
    review:
      "Tôi rèn luyện được cách chọn từ khóa, tìm nguồn học thuật, kiểm tra độ tin cậy và sử dụng thông tin có trách nhiệm.",
  },
  {
    id: 3,
    name: "Ứng dụng AI",
    position: "Prompt và sáng tạo nội dung",
    img: "/assets/review3.png",
    review:
      "Tôi học được cách viết prompt rõ mục tiêu, kiểm tra phản hồi AI, chỉnh sửa sản phẩm và không phụ thuộc máy móc vào công cụ.",
  },
  {
    id: 4,
    name: "Liêm chính học thuật",
    position: "An toàn và trách nhiệm số",
    img: "/assets/review4.png",
    review:
      "Tôi nhận thức rõ hơn về bảo mật tài khoản, đạo văn, trích dẫn nguồn và nguyên tắc sử dụng AI minh bạch trong học tập.",
  },
] as const;

const portfolioTags = [
  {
    id: 1,
    name: "Kỹ năng số",
    path: "/assets/react.svg",
  },
  {
    id: 2,
    name: "AI",
    path: "/assets/typescript.png",
  },
  {
    id: 3,
    name: "Học tập",
    path: "/assets/tailwindcss.png",
  },
  {
    id: 4,
    name: "Minh chứng",
    path: "/assets/framer.png",
  },
] as const;

export const myProjects = [
  {
    title: "Bài 1: Tệp tin và thư mục",
    desc: "Thiết lập cấu trúc thư mục học tập rõ ràng, quy tắc đặt tên tệp nhất quán và cách lưu trữ minh chứng khoa học.",
    subdesc:
      "Mục tiêu là hình thành thói quen quản lý dữ liệu cá nhân, giảm thất lạc tài liệu và giúp việc nộp bài, tra cứu, cập nhật sản phẩm học tập trở nên chủ động hơn.",
    href: "#projects",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#19312b",
      border: "0.2px solid #2f6f5d",
      boxShadow: "0px 0px 60px 0px #35D3A84D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: portfolioTags,
  },
  {
    title: "Bài 2: Tìm kiếm học thuật",
    desc: "Trình bày quá trình xác định chủ đề, chọn từ khóa, tìm tài liệu và đánh giá độ tin cậy của nguồn thông tin học thuật.",
    subdesc:
      "Sản phẩm tập trung vào khả năng phân biệt dữ liệu, thông tin, tri thức và sử dụng nguồn tài liệu đúng cách trong môi trường số.",
    href: "#projects",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#18233a",
      border: "0.2px solid #2f4c8a",
      boxShadow: "0px 0px 60px 0px #5C8CFF4D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: portfolioTags,
  },
  {
    title: "Bài 3: Viết prompt hiệu quả",
    desc: "So sánh prompt ban đầu và prompt cải tiến để thấy cách ngữ cảnh, định dạng đầu ra và tiêu chí đánh giá ảnh hưởng đến kết quả AI.",
    subdesc:
      "Bài tập giúp tôi sử dụng AI như một trợ lý học tập có kiểm soát, biết đặt câu hỏi cụ thể và kiểm tra lại phản hồi thay vì sao chép thụ động.",
    href: "#projects",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#1f3a2d",
      border: "0.2px solid #3c8f68",
      boxShadow: "0px 0px 60px 0px #60F5A150",
    },
    spotlight: "/assets/spotlight3.png",
    tags: portfolioTags,
  },
  {
    title: "Bài 4: Hợp tác trực tuyến",
    desc: "Minh chứng việc dùng công cụ quản lý dự án và giao tiếp trực tuyến để phân công, theo dõi tiến độ và phối hợp nhóm.",
    subdesc:
      "Từ hoạt động này, tôi hiểu rõ hơn vai trò của lịch làm việc, phản hồi đúng thời điểm và trách nhiệm cá nhân khi làm việc trong môi trường số.",
    href: "#projects",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#132532",
      border: "0.2px solid #1c5870",
      boxShadow: "0px 0px 60px 0px #35B9D34D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: portfolioTags,
  },
  {
    title: "Bài 5: AI tạo sinh",
    desc: "Ứng dụng AI để hỗ trợ sáng tạo nội dung số như ý tưởng, dàn ý, slide, infographic, bài viết hoặc video ngắn.",
    subdesc:
      "Sản phẩm nhấn mạnh vai trò biên tập của người học: dùng AI để tăng tốc phác thảo, sau đó kiểm tra, chỉnh sửa và hoàn thiện bằng tư duy cá nhân.",
    href: "#projects",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#2b2144",
      border: "0.2px solid #5d4a91",
      boxShadow: "0px 0px 60px 0px #A68CFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: portfolioTags,
  },
  {
    title: "Bài 6: AI có trách nhiệm",
    desc: "Phân tích nguyên tắc sử dụng AI an toàn, minh bạch, tránh đạo văn, bảo vệ dữ liệu cá nhân và kiểm chứng thông tin.",
    subdesc:
      "Bài tập giúp tôi xây dựng bộ nguyên tắc cá nhân khi dùng AI trong học tập và nghiên cứu, đặc biệt với trích dẫn nguồn và liêm chính học thuật.",
    href: "#projects",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#3a2316",
      border: "0.2px solid #8f5730",
      boxShadow: "0px 0px 60px 0px #FF9D4D4D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: portfolioTags,
  },
  {
    title: "Bài 7A: Trợ lý nghiên cứu AI",
    desc: "Sử dụng AI để hỗ trợ đọc hiểu, tóm tắt, đặt câu hỏi và phân tích tài liệu thuộc khoa học tự nhiên, kỹ thuật hoặc công nghệ.",
    subdesc:
      "Sản phẩm cho thấy cách dùng AI như trợ lý nghiên cứu, đồng thời vẫn đối chiếu với tài liệu gốc để tránh hiểu sai hoặc trích dẫn thiếu chính xác.",
    href: "#projects",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#183131",
      border: "0.2px solid #2c7878",
      boxShadow: "0px 0px 60px 0px #45D6C84D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: portfolioTags,
  },
] as const;

export const workExperiences = [
  {
    id: 1,
    name: "Học vấn",
    pos: "[Điền trường] - [Điền ngành/lớp]",
    duration: "2026",
    title:
      "Sinh viên đang xây dựng nền tảng kỹ năng số thông qua học phần Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo. Mục tiêu là học tập có tổ chức, biết khai thác công cụ số và trình bày sản phẩm học tập chuyên nghiệp.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
  {
    id: 2,
    name: "Kỹ năng số",
    pos: "Quản lý dữ liệu - tìm kiếm - hợp tác",
    duration: "Bài 1 - Bài 4",
    title:
      "Biết quản lý tệp tin, tìm kiếm học thuật, đánh giá nguồn tin, lưu trữ trên Google Drive/OneDrive và phối hợp nhóm bằng công cụ trực tuyến như Trello hoặc nền tảng tương đương.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Ứng dụng AI",
    pos: "Prompt - sáng tạo nội dung - trách nhiệm",
    duration: "Bài 3 - Bài 7A",
    title:
      "Biết viết prompt, dùng AI để hỗ trợ học tập và sáng tạo nội dung, kiểm chứng phản hồi, bảo vệ dữ liệu cá nhân, tránh đạo văn và ghi nhận nguồn hỗ trợ minh bạch.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
] as const;

export const socialLinks = [
  {
    name: "GitHub",
    icon: "/assets/github.svg",
    url: "#",
  },
  {
    name: "Email",
    icon: "/assets/terminal.png",
    url: "mailto:[Điền email]",
  },
  {
    name: "Portfolio",
    icon: "/assets/arrow-up.png",
    url: "#",
  },
] as const;
