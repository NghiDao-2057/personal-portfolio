// ============================================================
// Translations — Tất cả nội dung hiển thị theo ngôn ngữ
// ============================================================

export const translations = {
  vi: {
    nav: [
      { label: "Giới thiệu", href: "#home" },
      { label: "Kỹ năng", href: "#skills" },
      { label: "Dự án", href: "#projects" },
      { label: "Hành trình", href: "#timeline" },
      { label: "Liên hệ", href: "#contact" },
    ],
    hero: {
      badge: "Sinh viên năm 4 CNTT · Định hướng QA/QC Engineer",
      headline1: "Portfolio QA/QC Engineer:",
      headline2: "kiểm thử kỹ lưỡng",
      headline3: ", tư duy phân tích, nâng cao chất lượng sản phẩm.",
      bio: (name: string) =>
        `Mình là ${name}, sinh viên năm 4 ngành CNTT. Mình tập trung QA/QC Engineering; đồng thời có kiến thức lập trình để hiểu sâu hệ thống và viết kịch bản kiểm thử hiệu quả.`,
      cta1: "Xem dự án nổi bật",
      cta2: "Mở CV ngay",
      cta3: "Tải CV PDF",
      social_github: "GitHub",
      social_email: "Email",
      searching: "Tìm cơ hội thực tập QA/QC Engineer",
      tags: [
        "4 dự án kiểm thử",
        "Postman · JMeter · Katalon",
        "Tư duy phân tích hệ thống",
        "Sẵn sàng học hỏi",
      ],
      summary_label: "Tóm tắt nhanh",
      sum_year: "Năm 4",
      sum_year_sub: "Sinh viên Kỹ thuật Phần mềm",
      sum_projects: "4 dự án kiểm thử",
      sum_projects_sub: "Functional, API, Stress & Manual Testing",
      sum_tools: "Công cụ chính",
      sum_tools_sub: "Postman, JMeter, Katalon, Jira, Git",
      ready: "Sẵn sàng học hỏi và nhận test task",
      cv_label: "CV nhanh",
      cv_sub: "CV tuyển dụng: mở online hoặc tải PDF ngay.",
      cv_vi: "CV Tiếng Việt",
      cv_en: "CV English",
      cv_pdf: "Tải PDF",
      featured_label: "Dự án nổi bật",
    },
    about: {
      section_title: "Giới thiệu",
      section_subtitle: "Tóm tắt nhanh để bắt đầu trao đổi",
      bio: "Sinh viên năm 4 chuyên ngành Kỹ thuật Phần mềm. Đam mê lĩnh vực đảm bảo chất lượng phần mềm (QA/QC), có tư duy phân tích hệ thống và khả năng phát hiện lỗi chi tiết. Mong muốn ứng tuyển vị trí Intern QA/QC Engineer để áp dụng kiến thức về quy trình kiểm thử và kỹ thuật lập trình vào việc nâng cao chất lượng sản phẩm.",
      edu_label: "Học vấn",
      degree: "Kỹ thuật Phần mềm (Software Engineering)",
      lang_label: "Ngoại ngữ",
      lang_name: "Tiếng Anh",
      lang_level: "B2 — Upper-Intermediate",
      status_label: "Trạng thái",
      status_text: "Sẵn sàng nhận thực tập",
      strengths: [
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
      ],
    },
    skills: {
      section_title: "Kỹ năng",
      section_subtitle: "Năng lực đã áp dụng trong dự án thực tế",
      groups: [
        {
          category: "Testing Skills",
          icon: "🧪",
          items: ["Quy trình kiểm thử", "Viết Test Case", "Test Plan", "Bug Report"],
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
      ],
    },
    projects: {
      section_title: "Dự án",
      section_subtitle: "Các dự án kiểm thử và phát triển phần mềm đã thực hiện",
      github_link: "GitHub Repo",
      items: [
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
      ],
    },
    timeline: {
      section_title: "Hành trình",
      section_subtitle: "Các cột mốc học tập và thực chiến dự án",
      items: [
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
          description:
            "Triển khai đồ án cơ sở ngành CNTT, áp dụng quy trình phát triển phần mềm và làm việc nhóm.",
        },
        {
          year: "2025",
          title: "Website Đấu giá trực tuyến",
          description:
            "Phân tích nghiệp vụ, viết Test Cases và kiểm thử UI/UX cho dự án lớn.",
        },
        {
          year: "2025 – Hiện tại",
          title: "Website Phòng khám — Intern QA/QC",
          description:
            "Kiểm thử tự động với Katalon, Stress Testing bằng JMeter, API Testing bằng Postman.",
        },
      ],
    },
    contact: {
      section_title: "Liên hệ",
      section_subtitle: "Nếu phù hợp, mình rất mong được trao đổi",
      description:
        "Mình đang tìm cơ hội thực tập QA/QC Engineer. Có thể gửi CV PDF và giới thiệu thêm về các dự án qua email khi cần.",
      email_label: "Email",
      phone_label: "Điện thoại",
      github_label: "GitHub",
      address_label: "Địa chỉ",
      form_title: "Gửi lời nhắn nhanh",
      name_label: "Họ tên",
      name_placeholder: "Nguyễn Văn A",
      email_input_label: "Email",
      email_placeholder: "email@example.com",
      subject_label: "Chủ đề",
      subject_placeholder: "Cơ hội thực tập",
      message_label: "Nội dung",
      message_placeholder: "Nội dung tin nhắn...",
      send_btn: "Mở email để gửi",
      gmail_subject: "Liên hệ từ Portfolio",
    },
    footer: {
      back_to_top: "Về đầu trang",
      copyright: "Portfolio for recruitment.",
    },
  },

  // ──────────────────────── ENGLISH ────────────────────────
  en: {
    nav: [
      { label: "About", href: "#home" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Journey", href: "#timeline" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      badge: "Final-year IT Student · QA/QC Engineer Intern",
      headline1: "QA/QC Engineer Portfolio:",
      headline2: "thorough testing",
      headline3: ", analytical mindset, improving product quality.",
      bio: (name: string) =>
        `I'm ${name}, a final-year IT student. I focus on QC/Testing; backed by programming knowledge to understand systems deeply and write effective test scenarios.`,
      cta1: "View featured projects",
      cta2: "Open CV",
      cta3: "Download CV PDF",
      social_github: "GitHub",
      social_email: "Email",
      searching: "Looking for QA/QC Engineer internship",
      tags: [
        "4 testing projects",
        "Postman · JMeter · Katalon",
        "Analytical mindset",
        "Eager to learn",
      ],
      summary_label: "Quick summary",
      sum_year: "Year 4",
      sum_year_sub: "Software Engineering Student",
      sum_projects: "4 testing projects",
      sum_projects_sub: "Functional, API, Stress & Manual Testing",
      sum_tools: "Main tools",
      sum_tools_sub: "Postman, JMeter, Katalon, Jira, Git",
      ready: "Ready to learn and take test tasks",
      cv_label: "Quick CV",
      cv_sub: "Open online or download PDF in 1 click.",
      cv_vi: "CV Vietnamese",
      cv_en: "CV English",
      cv_pdf: "Download PDF",
      featured_label: "Featured projects",
    },
    about: {
      section_title: "About",
      section_subtitle: "Quick summary to start the conversation",
      bio: "Final-year Software Engineering student with a strong foundation in programming. Passionate about Software Quality Control (QC), featuring analytical thinking and high attention to detail for defect detection. Seeking an Intern QA/QC Engineer position to apply testing methodologies and contribute to delivering high-quality software products.",
      edu_label: "Education",
      degree: "Software Engineering",
      lang_label: "Language",
      lang_name: "English",
      lang_level: "B2 — Upper-Intermediate",
      status_label: "Status",
      status_text: "Open to internship",
      strengths: [
        {
          title: "Responsible & Proactive",
          description: "Responsible and proactive in all tasks.",
          icon: "🎯",
        },
        {
          title: "Growth Mindset",
          description: "Strong drive for learning and self-improvement.",
          icon: "📈",
        },
        {
          title: "Open to Feedback",
          description: "Always willing to receive feedback and improve.",
          icon: "🤝",
        },
      ],
    },
    skills: {
      section_title: "Skills",
      section_subtitle: "Competencies applied in real projects",
      groups: [
        {
          category: "Testing Skills",
          icon: "🧪",
          items: ["Testing Process", "Writing Test Cases", "Test Plan", "Bug Report"],
        },
        {
          category: "Testing Tools",
          icon: "🛠️",
          items: [
            "Postman (API Testing)",
            "JMeter (Stress / Load Testing)",
            "Jira (Bug tracking)",
            "Katalon (Web & Mobile Automation)",
          ],
        },
        {
          category: "Technical Skills",
          icon: "💻",
          items: ["HTML / CSS", "JavaScript", "Basic SQL", "Git"],
        },
        {
          category: "Language",
          icon: "🌐",
          items: ["English — B2 (Upper-Intermediate)"],
        },
      ],
    },
    projects: {
      section_title: "Projects",
      section_subtitle: "Testing and software development projects",
      github_link: "GitHub Repo",
      items: [
        {
          title: "Online Auction Website",
          slug: "auction",
          description:
            "An online auction platform with listing, bidding, and auction session management features.",
          period: "2024 – 2025",
          tech: ["React", "Katalon Studio", "JMeter", "Postman", "API Testing"],
          github: "https://github.com/NghiDao-2057/AUCTION",
          badge: "TEAM PROJECT",
          highlights: [
            "Analyzed business requirements: auction listing, bidding, session management",
            "Wrote and executed Test Cases for Login, Shopping Cart, Product Search",
            "Ensured UI/UX compliance across multiple screen sizes",
          ],
        },
        {
          title: "Healthcare Clinic System",
          slug: "healthcare-clinic",
          description:
            "Clinic management system with automated testing and performance testing.",
          period: "03/2026 – Present",
          tech: ["Katalon Studio", "JMeter", "Postman", "API Testing"],
          github: "https://github.com/NghiDao-2057/healthcare-clinic-system",
          badge: "QC PROJECT",
          highlights: [
            "Automated functional testing with Katalon Studio",
            "Stress Testing & Overload Testing with JMeter",
            "API Testing with Postman to verify data accuracy",
            "Basic security testing and test scenario analysis",
          ],
        },
        {
          title: "Foundation Project",
          slug: "doan-coso",
          description:
            "IT foundation project — building a web application following the software development process.",
          period: "2023 – 2024",
          tech: ["JavaScript", "HTML/CSS", "Git", "Postman", "Manual Testing"],
          github: "https://github.com/NghiDao-2057/demo-doan-coso-main",
          badge: "ACADEMIC",
          highlights: [
            "Developed a basic web application",
            "Applied software development methodology",
            "Teamwork and source code management with Git",
          ],
        },
        {
          title: "Movie Ticket Booking Website",
          slug: "ve-xem-phim",
          description:
            "An online movie ticket booking system with a user-friendly interface.",
          period: "2023 – 2024",
          tech: ["JavaScript", "HTML/CSS", "SQL", "Postman", "Manual Testing"],
          github: "https://github.com/NghiDao-2057/ve_xem_phim",
          badge: "TEAM PROJECT",
          highlights: [
            "Designed an intuitive ticket booking UI",
            "Built a showtime management system",
            "Tested ticket booking and payment flows",
          ],
        },
      ],
    },
    timeline: {
      section_title: "Journey",
      section_subtitle: "Learning milestones and real project experience",
      items: [
        {
          year: "2022",
          title: "Enrolled at Hutech University",
          description: "Started the Software Engineering program.",
        },
        {
          year: "2023",
          title: "Movie Ticket Booking Website",
          description: "Completed the first project, strengthened teamwork skills.",
        },
        {
          year: "2024",
          title: "Foundation Project",
          description:
            "Implemented an IT foundation project, applied software development process and teamwork.",
        },
        {
          year: "2025",
          title: "Online Auction Website",
          description:
            "Analyzed business requirements, wrote Test Cases, and tested UI/UX for a large-scale project.",
        },
        {
          year: "2025 – Present",
          title: "Healthcare Clinic — QA/QC Intern",
          description:
            "Automated testing with Katalon, Stress Testing with JMeter, API Testing with Postman.",
        },
      ],
    },
    contact: {
      section_title: "Contact",
      section_subtitle: "If there's a fit, I'd love to connect",
      description:
        "I'm looking for a QA/QC Engineer internship opportunity. Feel free to reach out — I can share my CV and elaborate on any project.",
      email_label: "Email",
      phone_label: "Phone",
      github_label: "GitHub",
      address_label: "Address",
      form_title: "Send a quick message",
      name_label: "Full name",
      name_placeholder: "Your Name",
      email_input_label: "Email",
      email_placeholder: "email@example.com",
      subject_label: "Subject",
      subject_placeholder: "Internship opportunity",
      message_label: "Message",
      message_placeholder: "Your message...",
      send_btn: "Open email to send",
      gmail_subject: "Contact from Portfolio",
    },
    footer: {
      back_to_top: "Back to top",
      copyright: "Portfolio for recruitment.",
    },
  },
};
