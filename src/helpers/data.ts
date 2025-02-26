import OEGBUSINESS from "assets/project/oegbiz.jpg";
import OEGEsports from "assets/project/oegesports.jpg";
import OEGGAME from "assets/project/oeggame.jpg";
import OEGMENU from "assets/project/oegmenu.jpg";
import OEGPROFILE from "assets/project/oegprofile.jpg";
import OEGSpace from "assets/project/oegspace.jpg";
import OEGSTADIUM from "assets/project/oegstadium.jpg";
import OEGTALENT from "assets/project/oegtalent.jpg";
import OEGVN from "assets/project/oegvn.jpg";

export const APP_DATA = {
  YOUTUBE_URL: "https://www.youtube.com/@hoidanit",
  TIKTOK_URL: "https://www.tiktok.com/@hoidanit",
  UDEMY_URL: "https://www.udemy.com/user/eric-7039/",
  FACEBOOK_URL: "https://www.facebook.com/askITwithERIC/",
};

export const EXPERIENCES = [
  {
    id: 1,
    title: {
      vi: "Lập Trình Viên",
      en: "Fullstack Developer",
    },
    company: {
      vi: "Công ty Cổ phần Tập đoàn Giải trí Đại Dương (OEG)",
      en: "Ocean Entertainment Group (OEG)",
    },
    duration: {
      vi: "Tháng 9/2022 - Hiện tại",
      en: "Sep 2022 - Present",
    },
  },
  {
    id: 2,
    title: {
      vi: "Thực tập sinh Fullstack Javascript",
      en: "Intern Fullstack Javascript",
    },

    company: {
      vi: "Công ty TTC Solutions",
      en: "TTC Solutions",
    },
    duration: {
      vi: "Tháng 6/2022 - Tháng 9/2022",
      en: "Jun 2022 - Sep 2022",
    },
  },
  {
    id: 3,
    title: {
      vi: "Thực tập sinh Backend",
      en: "Intern Backend Developer",
    },

    company: {
      vi: "Công ty BKAV",
      en: "BKAV",
    },
    duration: {
      vi: "Tháng 1/2022 - Tháng 4/2022",
      en: "Jan 2022 - Apr 2022",
    },
  },
  {
    id: 4,
    title: {
      vi: "Dự án tự làm",
      en: "Self Employed",
    },
    company: {
      vi: "Học kiến thức mới mỗi ngày",
      en: "Code and build something in everyday.",
    },
    duration: {
      vi: "Tháng 1/2020 - Hiện tại",
      en: "Jan 2020 - Present",
    },
  },
];

export const PROJECTS = [
  {
    id: 1,
    imgPath: OEGVN,
    title: "OEG",
    description:
      "Trang web OEG.VN là trang tập hợp tin tức của OEG và OEG STADIUM bao gồm cả mục clips giải trí do OEG đăng tải. Dự án này sử dụng công ngệ NuxtJS, ExpressJS, MySQL",
    githubLink: "#",
    demoLink: "https://oeg.vn/",
  },
  {
    id: 2,
    imgPath: OEGSpace,
    title: "OEG SPACE",
    description:
      "Trang web OEG SPACE là một nguồn thông tin đáng tin cậy và hữu ích cho cộng đồng game thủ và những người quan tâm đến lĩnh vực giải trí số tại Việt Nam. Dự án này sử dụng công ngệ NuxtJS, ExpressJS, MySQL",
    githubLink: "#",
    demoLink: "https://space.oeg.vn/",
  },
  {
    id: 3,
    imgPath: OEGEsports,
    title: "OEG ESPORTS",
    description:
      "Trang web OEG ESPORTS là một trang web cho phép game thủ theo dõi và đăng ký các giải đấu thuộc hệ thông của OEG do OEG tổ chức. Dự án này sử dụng công ngệ NuxtJS, ExpressJS, MySQL",
    githubLink: "#",
    demoLink: "https://esports.oeg.vn/",
  },
  {
    id: 4,
    imgPath: OEGPROFILE,
    title: "OEG PROFILE",
    description:
      "Trang web profile.oeg.vn là nền tảng quản lý tài khoản cho toàn bộ tài khoản bên hệ thống website của OEG, có đầy đủ các tính năng như cập nhật thông tin tài khoản ,cập nhật đội đăng ký giải, kiểm tra thông tin đơn hàng và nhiều tính năng khác. Dự án này sử dụng công ngệ ReactJS, ExpressJS, MySQL",
    githubLink: "#",
    demoLink: "https://profile.oeg.vn/",
  },
  {
    id: 5,
    imgPath: OEGBUSINESS,
    title: "OEG BUSINESS",
    description:
      "Trang web biz.oeg.vn giới thiệu về Công ty Cổ phần Tập đoàn Giải trí Đại Dương (OEG). Dự án này sử dụng công nghệ ReactJS, Gsaps, ThreeJS",
    githubLink: "#",
    demoLink: "https://biz.oeg.vn/",
  },
  {
    id: 6,
    imgPath: OEGGAME,
    title: "OEG GAME PORTAL",
    description:
      "Trang web game.oeg.vn là nền tảng theo dõi về các dự án game của OEG hợp tác và phát hành game, có tích hợp các cổng thanh toán bên thứ 3 cho phép người chơi thanh toán. Dự án này sử dụng công ngệ NextJS, ExpressJS, MySQL.",
    githubLink: "#",
    demoLink: "https://game.oeg.vn/",
  },
  {
    id: 7,
    imgPath: OEGMENU,
    title: "OEG MENU GAME",
    description:
      "menu-game-fnet.oeg.vn là một phần của hệ sinh thái OEG, tập trung vào việc cung cấp giải pháp quản lý phòng game thông qua phần mềm FNet. FNet là phần mềm tính tiền và quản lý phòng game hiện đại, hỗ trợ các chủ phòng máy quản lý hiệu quả hoạt động kinh doanh của mình. Dự án này sử dụng công ngệ ReactJS, ExpressJS, MySQL",
    githubLink: "#",
    demoLink: "https://game.oeg.vn/",
  },
  {
    id: 8,
    imgPath: OEGTALENT,
    title: "OEG TALENT HOUSE",
    description:
      "Trang web talenthouse.vn là nền tảng kết nối các nghệ sĩ, nhà sáng tạo và thương hiệu, tạo cơ hội hợp tác và phát triển trong lĩnh vực nghệ thuật và truyền thông. Dự án này sử dụng công nghệ NextJS, ExpressJS, MySQL",
    githubLink: "#",
    demoLink: "https://talenthouse.vn/",
  },
  {
    id: 9,
    imgPath: OEGSTADIUM,
    title: "OEG STADIUM",
    description:
      "Trang web stadium.oeg.vn là cổng thông tin chính thức của OEG Stadium, một tổ hợp giải trí thể thao điện tử hàng đầu tại Việt Nam, có các tính năng chính như tin tức về OEG Stadium, mua thẻ nạp giờ chơi, mua thẻ game, đặt chỗ phòng máy. Dự án này sử dụng công nghệ NuxtJS, ExpressJS, MySQL",
    githubLink: "#",
    demoLink: "https://stadium.oeg.vn/",
  },
];

export const SKILLS_DATA = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Next JS",
  "Vue",
  "Nuxt js",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "Git",
  "Bootstrap",
  "Docker",
  "Graphql",
  "Figma",
  "Firebase",
  "MaterialUI",
  "Nginx",
];

// Choose your skills from below. Make sure it's in the same format and spelled correctly.
// Couldn't find the required skills? Raise an issue on github at https://github.com/hhhrrrttt222111/developer-portfolio/issues/new

// AVAILABLE SKILLS

/*
    HTML
    CSS
    JS
    React
    Next JS
    Nuxt JS
    Node JS
    Vue
    Angular
    Docker
    Photoshop
    Illustrator
    Svelte
    GCP
    Azure
    Fastify
    Haxe
    Ionic
    Markdown
    Microsoft Office
    Picsart
    Sketch
    Unity
    WolframAlpha
    Adobe XD
    After Effects
    Bootstrap
    Bulma
    CapacitorJs
    Coffeescript
    MemSQL
    C
    C++
    C#
    Python
    Java
    Julia
    Matlab
    Swift
    Ruby
    Kotlin
    Go
    PHP
    Flutter
    Dart
    Typescript
    Swift
    Git
    Figma
    Canva
    Ubuntu
    Bootstrap
    MongoDB
    Tailwind
    ViteJS
    VuetifyJS
    MySQL
    PostgreSQL
    AWS
    Firebase
    Blender
    Premiere Pro
    Adobe Audition
    Deno
    Django
    Gimp
    Graphql
    Lightroom
    MaterialUI
    Nginx
    Numpy
    OpenCV
    Pytorch
    Selenium
    Strapi
    Tensorflow
    Webex
    Wordpress
  */
