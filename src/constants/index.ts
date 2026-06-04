import { asset } from "../lib/assets";

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
    img: asset("/assets/review1.png"),
    review:
      "Tôi biết cách sắp xếp tệp tin, đặt tên tài liệu, tổ chức thư mục học tập và lưu trữ minh chứng theo cấu trúc rõ ràng.",
  },
  {
    id: 2,
    name: "Khai thác thông tin",
    position: "Tìm kiếm và đánh giá nguồn",
    img: asset("/assets/review2.png"),
    review:
      "Tôi rèn luyện được cách chọn từ khóa, tìm nguồn học thuật, kiểm tra độ tin cậy và sử dụng thông tin có trách nhiệm.",
  },
  {
    id: 3,
    name: "Ứng dụng AI",
    position: "Prompt và sáng tạo nội dung",
    img: asset("/assets/review3.png"),
    review:
      "Tôi học được cách viết prompt rõ mục tiêu, kiểm tra phản hồi AI, chỉnh sửa sản phẩm và không phụ thuộc máy móc vào công cụ.",
  },
  {
    id: 4,
    name: "Liêm chính học thuật",
    position: "An toàn và trách nhiệm số",
    img: asset("/assets/review4.png"),
    review:
      "Tôi nhận thức rõ hơn về bảo mật tài khoản, đạo văn, trích dẫn nguồn và nguyên tắc sử dụng AI minh bạch trong học tập.",
  },
] as const;

const portfolioTags = [
  {
    id: 1,
    name: "Kỹ năng số",
    path: asset("/assets/react.svg"),
  },
  {
    id: 2,
    name: "AI",
    path: asset("/assets/typescript.png"),
  },
  {
    id: 3,
    name: "Học tập",
    path: asset("/assets/tailwindcss.png"),
  },
  {
    id: 4,
    name: "Minh chứng",
    path: asset("/assets/framer.png"),
  },
] as const;

export const myProjects = [
  {
    title: "Bài 1: Tệp tin và thư mục",
    desc: "Thiết lập cấu trúc thư mục học tập rõ ràng, quy tắc đặt tên tệp nhất quán và cách lưu trữ minh chứng khoa học.",
    goal:
      "Hình thành thói quen quản lý dữ liệu cá nhân có tổ chức, giảm thất lạc tài liệu và giúp việc nộp bài, tra cứu, cập nhật sản phẩm học tập trở nên chủ động hơn.",
    process: [
      "Khảo sát các loại tài liệu cần lưu trữ trong học phần.",
      "Tạo thư mục theo bài học, loại sản phẩm và mốc thời gian.",
      "Đặt tên tệp có ngày tháng, tên bài, phiên bản và trạng thái hoàn thành.",
      "Chụp lại cấu trúc thư mục để làm minh chứng.",
    ],
    result:
      "Sản phẩm cuối cùng là một hệ thống thư mục rõ ràng, hỗ trợ lưu trữ bài giảng, bài tập, ảnh minh chứng và tài liệu tham khảo. Cách tổ chức này giúp quá trình học tập trở nên chuyên nghiệp hơn.",
    skills: ["Quản lý tệp", "Đặt tên tài liệu", "Lưu trữ minh chứng", "Tổ chức dữ liệu cá nhân"],
    evidence: "[Thêm ảnh chụp cấu trúc thư mục, file PDF hoặc đường link minh chứng tại đây]",
    href: "#projects",
    texture: asset("/textures/project/project1.mp4"),
    logo: asset("/assets/project-logo1.png"),
    logoStyle: {
      backgroundColor: "#19312b",
      border: "0.2px solid #2f6f5d",
      boxShadow: "0px 0px 60px 0px #35D3A84D",
    },
    spotlight: asset("/assets/spotlight1.png"),
    tags: portfolioTags,
  },
  {
    title: "Bài 2: Tìm kiếm học thuật",
    desc: "Trình bày quá trình xác định chủ đề, chọn từ khóa, tìm tài liệu và đánh giá độ tin cậy của nguồn thông tin học thuật.",
    goal:
      "Rèn luyện khả năng phân biệt dữ liệu, thông tin và tri thức; biết khai thác nguồn tài liệu số đúng cách và có trách nhiệm.",
    process: [
      "Xác định chủ đề cần tìm kiếm và phạm vi thông tin.",
      "Thiết kế bộ từ khóa chính, từ khóa phụ và cụm từ tìm kiếm nâng cao.",
      "Tìm tài liệu từ Google Scholar, thư viện số hoặc trang chính thống.",
      "Đánh giá tác giả, thời gian xuất bản, mục đích nội dung và mức độ tin cậy.",
    ],
    result:
      "Bài tập tạo ra bảng tổng hợp nguồn tài liệu đáng tin cậy, kèm nhận xét về mức độ phù hợp. Tôi hiểu rõ hơn cách dùng thông tin học thuật để hỗ trợ lập luận thay vì chỉ sao chép nội dung.",
    skills: ["Tìm kiếm nâng cao", "Đánh giá nguồn", "Trích dẫn", "Tư duy phản biện"],
    evidence: "[Thêm bảng đánh giá nguồn, ảnh chụp kết quả tìm kiếm hoặc link tài liệu tại đây]",
    href: "#projects",
    texture: asset("/textures/project/project2.mp4"),
    logo: asset("/assets/project-logo2.png"),
    logoStyle: {
      backgroundColor: "#18233a",
      border: "0.2px solid #2f4c8a",
      boxShadow: "0px 0px 60px 0px #5C8CFF4D",
    },
    spotlight: asset("/assets/spotlight2.png"),
    tags: portfolioTags,
  },
  {
    title: "Bài 3: Viết prompt hiệu quả",
    desc: "So sánh prompt ban đầu và prompt cải tiến để thấy cách ngữ cảnh, định dạng đầu ra và tiêu chí đánh giá ảnh hưởng đến kết quả AI.",
    goal:
      "Sử dụng AI như một trợ lý học tập có kiểm soát, biết đặt câu hỏi cụ thể, kiểm tra lại phản hồi và cải thiện chất lượng đầu ra.",
    process: [
      "Viết prompt ban đầu cho một nhiệm vụ học tập cụ thể.",
      "Phân tích điểm thiếu: mục tiêu, ngữ cảnh, vai trò, định dạng và tiêu chí.",
      "Cải tiến prompt bằng cách bổ sung yêu cầu rõ ràng và ví dụ đầu ra.",
      "So sánh hai kết quả để rút ra nguyên tắc viết prompt tốt hơn.",
    ],
    result:
      "Prompt cải tiến cho kết quả có cấu trúc hơn, sát yêu cầu hơn và dễ kiểm chứng hơn. Bài tập giúp tôi hiểu rằng chất lượng câu hỏi quyết định nhiều đến chất lượng câu trả lời của AI.",
    skills: ["Prompt engineering", "Đánh giá phản hồi AI", "Tư duy yêu cầu", "Biên tập nội dung"],
    evidence: "[Thêm prompt trước/sau, ảnh chụp kết quả AI hoặc file phân tích tại đây]",
    href: "#projects",
    texture: asset("/textures/project/project3.mp4"),
    logo: asset("/assets/project-logo3.png"),
    logoStyle: {
      backgroundColor: "#1f3a2d",
      border: "0.2px solid #3c8f68",
      boxShadow: "0px 0px 60px 0px #60F5A150",
    },
    spotlight: asset("/assets/spotlight3.png"),
    tags: portfolioTags,
  },
  {
    title: "Bài 4: Hợp tác trực tuyến",
    desc: "Minh chứng việc dùng công cụ quản lý dự án và giao tiếp trực tuyến để phân công, theo dõi tiến độ và phối hợp nhóm.",
    goal:
      "Hiểu vai trò của giao tiếp số, phân công rõ ràng và quản lý tiến độ khi làm việc nhóm trong môi trường trực tuyến.",
    process: [
      "Xác định nhiệm vụ chung và chia nhỏ thành các đầu việc cụ thể.",
      "Thiết lập bảng Trello hoặc công cụ tương đương để quản lý tiến độ.",
      "Phân công người phụ trách, hạn hoàn thành và trạng thái từng việc.",
      "Ghi nhận trao đổi nhóm, phản hồi và kết quả phối hợp.",
    ],
    result:
      "Nhóm có không gian làm việc rõ ràng hơn, biết theo dõi tiến độ và giảm bỏ sót nhiệm vụ. Cá nhân tôi rèn được kỹ năng giao tiếp, phản hồi đúng lúc và có trách nhiệm với phần việc được giao.",
    skills: ["Trello", "Làm việc nhóm", "Giao tiếp trực tuyến", "Quản lý tiến độ"],
    evidence: "[Thêm ảnh bảng Trello, biên bản họp nhóm hoặc link minh chứng tại đây]",
    href: "#projects",
    texture: asset("/textures/project/project4.mp4"),
    logo: asset("/assets/project-logo4.png"),
    logoStyle: {
      backgroundColor: "#132532",
      border: "0.2px solid #1c5870",
      boxShadow: "0px 0px 60px 0px #35B9D34D",
    },
    spotlight: asset("/assets/spotlight4.png"),
    tags: portfolioTags,
  },
  {
    title: "Bài 5: AI tạo sinh",
    desc: "Ứng dụng AI để hỗ trợ sáng tạo nội dung số như ý tưởng, dàn ý, slide, infographic, bài viết hoặc video ngắn.",
    goal:
      "Biết dùng AI tạo sinh như công cụ hỗ trợ phác thảo và tăng tốc sáng tạo, đồng thời vẫn giữ vai trò biên tập, kiểm chứng và hoàn thiện của người học.",
    process: [
      "Chọn một chủ đề nội dung số phù hợp với học tập.",
      "Dùng AI để gợi ý ý tưởng, cấu trúc và thông điệp chính.",
      "Thiết kế sản phẩm bằng Canva, CapCut hoặc công cụ tương đương.",
      "Rà soát tính chính xác, ngôn ngữ, hình ảnh và nguồn tham khảo.",
    ],
    result:
      "Sản phẩm nội dung số hoàn thiện hơn về bố cục và cách trình bày. Tôi học được cách kết hợp AI với công cụ thiết kế để làm sản phẩm nhanh hơn nhưng vẫn cần tư duy cá nhân để chỉnh sửa.",
    skills: ["AI tạo sinh", "Canva", "CapCut", "Thiết kế nội dung", "Biên tập"],
    evidence: "[Thêm infographic, slide, video hoặc đường link sản phẩm tại đây]",
    href: "#projects",
    texture: asset("/textures/project/project5.mp4"),
    logo: asset("/assets/project-logo5.png"),
    logoStyle: {
      backgroundColor: "#2b2144",
      border: "0.2px solid #5d4a91",
      boxShadow: "0px 0px 60px 0px #A68CFF4D",
    },
    spotlight: asset("/assets/spotlight5.png"),
    tags: portfolioTags,
  },
  {
    title: "Bài 6: AI có trách nhiệm",
    desc: "Phân tích nguyên tắc sử dụng AI an toàn, minh bạch, tránh đạo văn, bảo vệ dữ liệu cá nhân và kiểm chứng thông tin.",
    goal:
      "Xây dựng bộ nguyên tắc cá nhân khi dùng AI trong học tập và nghiên cứu, đặc biệt với trích dẫn nguồn, bảo mật dữ liệu và liêm chính học thuật.",
    process: [
      "Tìm hiểu các rủi ro khi dùng AI: sai thông tin, lộ dữ liệu, đạo văn và phụ thuộc công cụ.",
      "Phân tích một tình huống sử dụng AI trong học tập.",
      "Đề xuất cách dùng AI minh bạch, có kiểm chứng và có ghi nhận hỗ trợ.",
      "Viết cam kết cá nhân về an toàn và liêm chính học thuật.",
    ],
    result:
      "Bài tập giúp tôi có thái độ cẩn trọng hơn khi dùng AI. Tôi hiểu rằng AI có thể hỗ trợ tốt, nhưng người học vẫn phải chịu trách nhiệm về nội dung cuối cùng.",
    skills: ["Liêm chính học thuật", "Bảo mật dữ liệu", "Kiểm chứng thông tin", "Đạo đức AI"],
    evidence: "[Thêm bài phân tích, checklist nguyên tắc hoặc tài liệu minh chứng tại đây]",
    href: "#projects",
    texture: asset("/textures/project/project1.mp4"),
    logo: asset("/assets/project-logo1.png"),
    logoStyle: {
      backgroundColor: "#3a2316",
      border: "0.2px solid #8f5730",
      boxShadow: "0px 0px 60px 0px #FF9D4D4D",
    },
    spotlight: asset("/assets/spotlight1.png"),
    tags: portfolioTags,
  },
  {
    title: "Bài 7A: Trợ lý nghiên cứu AI",
    desc: "Sử dụng AI để hỗ trợ đọc hiểu, tóm tắt, đặt câu hỏi và phân tích tài liệu thuộc khoa học tự nhiên, kỹ thuật hoặc công nghệ.",
    goal:
      "Ứng dụng AI như trợ lý nghiên cứu để khai thác tài liệu chuyên môn nhanh hơn nhưng vẫn biết đối chiếu với tài liệu gốc và đánh giá độ tin cậy.",
    process: [
      "Chọn một tài liệu khoa học, kỹ thuật hoặc công nghệ phù hợp.",
      "Dùng AI để tóm tắt ý chính, thuật ngữ quan trọng và câu hỏi nghiên cứu.",
      "Đối chiếu phản hồi AI với tài liệu gốc để phát hiện điểm thiếu hoặc sai.",
      "Tổng hợp kết quả thành phần trình bày có trích dẫn và nhận xét cá nhân.",
    ],
    result:
      "Sản phẩm cho thấy AI giúp tăng tốc đọc hiểu và gợi ý hướng phân tích, nhưng người học vẫn cần kiểm chứng, chọn lọc và diễn giải lại bằng hiểu biết của mình.",
    skills: ["Trợ lý nghiên cứu", "Tóm tắt tài liệu", "Đối chiếu nguồn", "Phân tích khoa học"],
    evidence: "[Thêm tài liệu gốc, bản tóm tắt AI, ghi chú đối chiếu hoặc link minh chứng tại đây]",
    href: "#projects",
    texture: asset("/textures/project/project2.mp4"),
    logo: asset("/assets/project-logo2.png"),
    logoStyle: {
      backgroundColor: "#183131",
      border: "0.2px solid #2c7878",
      boxShadow: "0px 0px 60px 0px #45D6C84D",
    },
    spotlight: asset("/assets/spotlight2.png"),
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
    icon: asset("/assets/notion.svg"),
    animation: "salute",
  },
  {
    id: 2,
    name: "Kỹ năng số",
    pos: "Quản lý dữ liệu - tìm kiếm - hợp tác",
    duration: "Bài 1 - Bài 4",
    title:
      "Biết quản lý tệp tin, tìm kiếm học thuật, đánh giá nguồn tin, lưu trữ trên Google Drive/OneDrive và phối hợp nhóm bằng công cụ trực tuyến như Trello hoặc nền tảng tương đương.",
    icon: asset("/assets/figma.svg"),
    animation: "clapping",
  },
  {
    id: 3,
    name: "Ứng dụng AI",
    pos: "Prompt - sáng tạo nội dung - trách nhiệm",
    duration: "Bài 3 - Bài 7A",
    title:
      "Biết viết prompt, dùng AI để hỗ trợ học tập và sáng tạo nội dung, kiểm chứng phản hồi, bảo vệ dữ liệu cá nhân, tránh đạo văn và ghi nhận nguồn hỗ trợ minh bạch.",
    icon: asset("/assets/framer.svg"),
    animation: "victory",
  },
] as const;

export const socialLinks = [
  {
    name: "GitHub",
    icon: asset("/assets/github.svg"),
    url: "#",
  },
  {
    name: "Email",
    icon: asset("/assets/terminal.png"),
    url: "mailto:[Điền email]",
  },
  {
    name: "Portfolio",
    icon: asset("/assets/arrow-up.png"),
    url: "#",
  },
] as const;
