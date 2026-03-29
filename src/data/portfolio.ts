// ============================================================
// Portfolio Data — Chỉnh sửa nội dung tại đây
// ============================================================

export const personalInfo = {
  name: "Đào Nguyễn Uyển Nghi",
  title: "Intern QA/QC Engineer",
  subtitle: "Final-year Student in Information Technology",
  email: "ndao9090@gmail.com",
  phone: "+84 949 190 804",
  github: "https://github.com/NghiDao-2057",
  location: "Phú Thạnh, Tân Phú, TP. Hồ Chí Minh",
  bio: "Sinh viên năm 4 chuyên ngành Kỹ thuật Phần mềm. Đam mê lĩnh vực đảm bảo chất lượng phần mềm (QC), có tư duy phân tích hệ thống và khả năng phát hiện lỗi chi tiết. Mong muốn ứng tuyển vị trí Intern QA/QC Engineer để áp dụng kiến thức về quy trình kiểm thử và kỹ thuật lập trình vào việc nâng cao chất lượng sản phẩm.",
  cvVietnamese: "/cv/cv-tieng-viet.pdf",
  cvEnglish: "/cv/cv-tieng-anh.pdf",
};

export const education = {
  school: "Hutech University",
  period: "2022 – 2026",
  degree: "Kỹ thuật Phần mềm (Software Engineering)",
  gpa: "3.0 / 4.0",
};

export const skills = [
  {
    category: "Testing Skills",
    icon: "🧪",
    items: [
      "Quy trình kiểm thử",
      "Viết Test Case",
      "Test Plan",
      "Bug Report",
    ],
  },
  {
    category: "Testing Tools",
    icon: "🛠️",
    items: [
      "Postman (API Testing)",
      "JMeter (Stress / Load Testing)",
      "Jira (Quản lý lỗi)",
      "Katalon (Web & Mobile Automation)",
    ],
  },
  {
    category: "Technical Skills",
    icon: "💻",
    items: ["HTML / CSS", "JavaScript", "SQL cơ bản", "Git"],
  },
  {
    category: "Ngoại ngữ",
    icon: "🌐",
    items: ["Tiếng Anh — B2 (Upper-Intermediate)"],
  },
];

export const projects = [
  {
    title: "Website Đấu giá trực tuyến",
    slug: "auction",
    description:
      "Nền tảng đấu giá trực tuyến với các tính năng đăng bài, đặt giá (bidding) và quản lý phiên đấu giá.",
    period: "2024 – 2025",
    tech: ["React", "Katalon Studio", "JMeter", "Postman", "API Testing"],
    github: "https://github.com/NghiDao-2057/AUCTION",
    badge: "TEAM PROJECT",
    highlights: [
      "Phân tích yêu cầu nghiệp vụ: Đăng bài đấu giá, Bidding, Quản lý phiên",
      "Viết và thực thi Test Cases cho Đăng nhập, Giỏ hàng, Tìm kiếm sản phẩm",
      "Đảm bảo UI/UX đúng chuẩn trên nhiều kích thước màn hình",
    ],
  },
  {
    title: "Website Phòng khám",
    slug: "healthcare-clinic",
    description:
      "Hệ thống quản lý phòng khám với kiểm thử tự động và kiểm thử hiệu năng.",
    period: "03/2026 – Hiện tại",
    tech: ["Katalon Studio", "JMeter", "Postman", "API Testing"],
    github: "https://github.com/NghiDao-2057/healthcare-clinic-system",
    badge: "QC PROJECT",
    highlights: [
      "Kiểm thử tự động (Functional Testing) với Katalon Studio",
      "Stress Testing & Overload Testing bằng JMeter",
      "API Testing bằng Postman kiểm tra tính chính xác dữ liệu",
      "Kiểm thử bảo mật cơ bản và phân tích kịch bản kiểm thử",
    ],
  },
  {
    title: "Đồ án cơ sở",
    slug: "doan-coso",
    description:
      "Dự án đồ án cơ sở ngành CNTT — xây dựng ứng dụng web với quy trình phát triển phần mềm.",
    period: "2023 – 2024",
    tech: ["JavaScript", "HTML/CSS", "Git", "Postman", "Manual Testing"],
    github: "https://github.com/NghiDao-2057/demo-doan-coso-main",
    badge: "ACADEMIC",
    highlights: [
      "Phát triển ứng dụng web cơ bản",
      "Áp dụng quy trình phát triển phần mềm",
      "Làm việc nhóm và quản lý source code với Git",
    ],
  },
  {
    title: "Website Đặt vé xem phim",
    slug: "ve-xem-phim",
    description:
      "Hệ thống đặt vé xem phim trực tuyến với giao diện thân thiện người dùng.",
    period: "2023 – 2024",
    tech: ["JavaScript", "HTML/CSS", "SQL", "Postman", "Manual Testing"],
    github: "https://github.com/NghiDao-2057/ve_xem_phim",
    badge: "TEAM PROJECT",
    highlights: [
      "Thiết kế giao diện đặt vé trực quan",
      "Xây dựng hệ thống quản lý suất chiếu",
      "Kiểm thử chức năng đặt vé và thanh toán",
    ],
  },
];

export const strengths = [
  {
    title: "Trách nhiệm & Chủ động",
    description: "Có trách nhiệm và chủ động trong công việc.",
    icon: "🎯",
  },
  {
    title: "Cầu tiến & Học hỏi",
    description: "Tinh thần cầu tiến và khả năng học hỏi tốt.",
    icon: "📈",
  },
  {
    title: "Tiếp nhận góp ý",
    description: "Luôn sẵn sàng tiếp nhận góp ý để cải thiện bản thân.",
    icon: "🤝",
  },
];

export const timeline = [
  {
    year: "2022",
    title: "Nhập học Hutech University",
    description: "Bắt đầu chương trình Kỹ thuật Phần mềm.",
  },
  {
    year: "2023",
    title: "Đặt vé xem phim",
    description: "Hoàn thành đồ án đầu tiên, rèn kỹ năng làm việc nhóm.",
  },
  {
    year: "2024",
    title: "Đồ án cơ sở",
    description: "Triển khai đồ án cơ sở ngành CNTT, áp dụng quy trình phát triển phần mềm và làm việc nhóm.",
  },
  {
    year: "2025",
    title: "Website Đấu giá trực tuyến",
    description: "Phân tích nghiệp vụ, viết Test Cases và kiểm thử UI/UX cho dự án lớn.",
  },
  {
    year: "2025 – Hiện tại",
    title: "Website Phòng khám — Intern QA/QC",
    description: "Kiểm thử tự động với Katalon, Stress Testing bằng JMeter, API Testing bằng Postman.",
  },
];

export const navLinks = [
  { label: "Giới thiệu", href: "#home" },
  { label: "Kỹ năng", href: "#skills" },
  { label: "Dự án", href: "#projects" },
  { label: "Hành trình", href: "#timeline" },
  { label: "Liên hệ", href: "#contact" },
];
