import { asset } from "../lib/assets";

export const links = {
  contactEmail: "[Äiá»n email]",
  sourceCode: "#projects",
};

export const navLinks = [
  {
    id: 1,
    name: "Trang chá»§",
    href: "#",
  },
  {
    id: 2,
    name: "Giá»›i thiá»‡u",
    href: "#about",
  },
  {
    id: 3,
    name: "Dá»± Ã¡n",
    href: "#projects",
  },
  {
    id: 4,
    name: "CV",
    href: "#cv",
  },
  {
    id: 5,
    name: "Tá»•ng káº¿t",
    href: "#reflection",
  },
] as const;

export const clientReviews = [
  {
    id: 1,
    name: "TÆ° duy tá»• chá»©c",
    position: "Quáº£n lÃ½ dá»¯ liá»‡u cÃ¡ nhÃ¢n",
    img: asset("/assets/review1.png"),
    review:
      "TÃ´i biáº¿t cÃ¡ch sáº¯p xáº¿p tá»‡p tin, Ä‘áº·t tÃªn tÃ i liá»‡u, tá»• chá»©c thÆ° má»¥c há»c táº­p vÃ  lÆ°u trá»¯ minh chá»©ng theo cáº¥u trÃºc rÃµ rÃ ng.",
  },
  {
    id: 2,
    name: "Khai thÃ¡c thÃ´ng tin",
    position: "TÃ¬m kiáº¿m vÃ  Ä‘Ã¡nh giÃ¡ nguá»“n",
    img: asset("/assets/review2.png"),
    review:
      "TÃ´i rÃ¨n luyá»‡n Ä‘Æ°á»£c cÃ¡ch chá»n tá»« khÃ³a, tÃ¬m nguá»“n há»c thuáº­t, kiá»ƒm tra Ä‘á»™ tin cáº­y vÃ  sá»­ dá»¥ng thÃ´ng tin cÃ³ trÃ¡ch nhiá»‡m.",
  },
  {
    id: 3,
    name: "á»¨ng dá»¥ng AI",
    position: "Prompt vÃ  sÃ¡ng táº¡o ná»™i dung",
    img: asset("/assets/review3.png"),
    review:
      "TÃ´i há»c Ä‘Æ°á»£c cÃ¡ch viáº¿t prompt rÃµ má»¥c tiÃªu, kiá»ƒm tra pháº£n há»“i AI, chá»‰nh sá»­a sáº£n pháº©m vÃ  khÃ´ng phá»¥ thuá»™c mÃ¡y mÃ³c vÃ o cÃ´ng cá»¥.",
  },
  {
    id: 4,
    name: "LiÃªm chÃ­nh há»c thuáº­t",
    position: "An toÃ n vÃ  trÃ¡ch nhiá»‡m sá»‘",
    img: asset("/assets/review4.png"),
    review:
      "TÃ´i nháº­n thá»©c rÃµ hÆ¡n vá» báº£o máº­t tÃ i khoáº£n, Ä‘áº¡o vÄƒn, trÃ­ch dáº«n nguá»“n vÃ  nguyÃªn táº¯c sá»­ dá»¥ng AI minh báº¡ch trong há»c táº­p.",
  },
] as const;

const portfolioTags = [
  {
    id: 1,
    name: "Ká»¹ nÄƒng sá»‘",
    path: asset("/assets/react.svg"),
  },
  {
    id: 2,
    name: "AI",
    path: asset("/assets/typescript.png"),
  },
  {
    id: 3,
    name: "Há»c táº­p",
    path: asset("/assets/tailwindcss.png"),
  },
  {
    id: 4,
    name: "Minh chá»©ng",
    path: asset("/assets/framer.png"),
  },
] as const;

export const myProjects = [
  {
    title: "BÃ i 1: Tá»‡p tin vÃ  thÆ° má»¥c",
    desc: "Thiáº¿t láº­p cáº¥u trÃºc thÆ° má»¥c há»c táº­p rÃµ rÃ ng, quy táº¯c Ä‘áº·t tÃªn tá»‡p nháº¥t quÃ¡n vÃ  cÃ¡ch lÆ°u trá»¯ minh chá»©ng khoa há»c.",
    subdesc:
      "Má»¥c tiÃªu lÃ  hÃ¬nh thÃ nh thÃ³i quen quáº£n lÃ½ dá»¯ liá»‡u cÃ¡ nhÃ¢n, giáº£m tháº¥t láº¡c tÃ i liá»‡u vÃ  giÃºp viá»‡c ná»™p bÃ i, tra cá»©u, cáº­p nháº­t sáº£n pháº©m há»c táº­p trá»Ÿ nÃªn chá»§ Ä‘á»™ng hÆ¡n.",
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
    title: "BÃ i 2: TÃ¬m kiáº¿m há»c thuáº­t",
    desc: "TrÃ¬nh bÃ y quÃ¡ trÃ¬nh xÃ¡c Ä‘á»‹nh chá»§ Ä‘á», chá»n tá»« khÃ³a, tÃ¬m tÃ i liá»‡u vÃ  Ä‘Ã¡nh giÃ¡ Ä‘á»™ tin cáº­y cá»§a nguá»“n thÃ´ng tin há»c thuáº­t.",
    subdesc:
      "Sáº£n pháº©m táº­p trung vÃ o kháº£ nÄƒng phÃ¢n biá»‡t dá»¯ liá»‡u, thÃ´ng tin, tri thá»©c vÃ  sá»­ dá»¥ng nguá»“n tÃ i liá»‡u Ä‘Ãºng cÃ¡ch trong mÃ´i trÆ°á»ng sá»‘.",
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
    title: "BÃ i 3: Viáº¿t prompt hiá»‡u quáº£",
    desc: "So sÃ¡nh prompt ban Ä‘áº§u vÃ  prompt cáº£i tiáº¿n Ä‘á»ƒ tháº¥y cÃ¡ch ngá»¯ cáº£nh, Ä‘á»‹nh dáº¡ng Ä‘áº§u ra vÃ  tiÃªu chÃ­ Ä‘Ã¡nh giÃ¡ áº£nh hÆ°á»Ÿng Ä‘áº¿n káº¿t quáº£ AI.",
    subdesc:
      "BÃ i táº­p giÃºp tÃ´i sá»­ dá»¥ng AI nhÆ° má»™t trá»£ lÃ½ há»c táº­p cÃ³ kiá»ƒm soÃ¡t, biáº¿t Ä‘áº·t cÃ¢u há»i cá»¥ thá»ƒ vÃ  kiá»ƒm tra láº¡i pháº£n há»“i thay vÃ¬ sao chÃ©p thá»¥ Ä‘á»™ng.",
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
    title: "BÃ i 4: Há»£p tÃ¡c trá»±c tuyáº¿n",
    desc: "Minh chá»©ng viá»‡c dÃ¹ng cÃ´ng cá»¥ quáº£n lÃ½ dá»± Ã¡n vÃ  giao tiáº¿p trá»±c tuyáº¿n Ä‘á»ƒ phÃ¢n cÃ´ng, theo dÃµi tiáº¿n Ä‘á»™ vÃ  phá»‘i há»£p nhÃ³m.",
    subdesc:
      "Tá»« hoáº¡t Ä‘á»™ng nÃ y, tÃ´i hiá»ƒu rÃµ hÆ¡n vai trÃ² cá»§a lá»‹ch lÃ m viá»‡c, pháº£n há»“i Ä‘Ãºng thá»i Ä‘iá»ƒm vÃ  trÃ¡ch nhiá»‡m cÃ¡ nhÃ¢n khi lÃ m viá»‡c trong mÃ´i trÆ°á»ng sá»‘.",
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
    title: "BÃ i 5: AI táº¡o sinh",
    desc: "á»¨ng dá»¥ng AI Ä‘á»ƒ há»— trá»£ sÃ¡ng táº¡o ná»™i dung sá»‘ nhÆ° Ã½ tÆ°á»Ÿng, dÃ n Ã½, slide, infographic, bÃ i viáº¿t hoáº·c video ngáº¯n.",
    subdesc:
      "Sáº£n pháº©m nháº¥n máº¡nh vai trÃ² biÃªn táº­p cá»§a ngÆ°á»i há»c: dÃ¹ng AI Ä‘á»ƒ tÄƒng tá»‘c phÃ¡c tháº£o, sau Ä‘Ã³ kiá»ƒm tra, chá»‰nh sá»­a vÃ  hoÃ n thiá»‡n báº±ng tÆ° duy cÃ¡ nhÃ¢n.",
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
    title: "BÃ i 6: AI cÃ³ trÃ¡ch nhiá»‡m",
    desc: "PhÃ¢n tÃ­ch nguyÃªn táº¯c sá»­ dá»¥ng AI an toÃ n, minh báº¡ch, trÃ¡nh Ä‘áº¡o vÄƒn, báº£o vá»‡ dá»¯ liá»‡u cÃ¡ nhÃ¢n vÃ  kiá»ƒm chá»©ng thÃ´ng tin.",
    subdesc:
      "BÃ i táº­p giÃºp tÃ´i xÃ¢y dá»±ng bá»™ nguyÃªn táº¯c cÃ¡ nhÃ¢n khi dÃ¹ng AI trong há»c táº­p vÃ  nghiÃªn cá»©u, Ä‘áº·c biá»‡t vá»›i trÃ­ch dáº«n nguá»“n vÃ  liÃªm chÃ­nh há»c thuáº­t.",
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
    title: "BÃ i 7A: Trá»£ lÃ½ nghiÃªn cá»©u AI",
    desc: "Sá»­ dá»¥ng AI Ä‘á»ƒ há»— trá»£ Ä‘á»c hiá»ƒu, tÃ³m táº¯t, Ä‘áº·t cÃ¢u há»i vÃ  phÃ¢n tÃ­ch tÃ i liá»‡u thuá»™c khoa há»c tá»± nhiÃªn, ká»¹ thuáº­t hoáº·c cÃ´ng nghá»‡.",
    subdesc:
      "Sáº£n pháº©m cho tháº¥y cÃ¡ch dÃ¹ng AI nhÆ° trá»£ lÃ½ nghiÃªn cá»©u, Ä‘á»“ng thá»i váº«n Ä‘á»‘i chiáº¿u vá»›i tÃ i liá»‡u gá»‘c Ä‘á»ƒ trÃ¡nh hiá»ƒu sai hoáº·c trÃ­ch dáº«n thiáº¿u chÃ­nh xÃ¡c.",
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
    name: "Há»c váº¥n",
    pos: "[Äiá»n trÆ°á»ng] - [Äiá»n ngÃ nh/lá»›p]",
    duration: "2026",
    title:
      "Sinh viÃªn Ä‘ang xÃ¢y dá»±ng ná»n táº£ng ká»¹ nÄƒng sá»‘ thÃ´ng qua há»c pháº§n Nháº­p mÃ´n CÃ´ng nghá»‡ sá»‘ vÃ  á»¨ng dá»¥ng TrÃ­ tuá»‡ nhÃ¢n táº¡o. Má»¥c tiÃªu lÃ  há»c táº­p cÃ³ tá»• chá»©c, biáº¿t khai thÃ¡c cÃ´ng cá»¥ sá»‘ vÃ  trÃ¬nh bÃ y sáº£n pháº©m há»c táº­p chuyÃªn nghiá»‡p.",
    icon: asset("/assets/notion.svg"),
    animation: "salute",
  },
  {
    id: 2,
    name: "Ká»¹ nÄƒng sá»‘",
    pos: "Quáº£n lÃ½ dá»¯ liá»‡u - tÃ¬m kiáº¿m - há»£p tÃ¡c",
    duration: "BÃ i 1 - BÃ i 4",
    title:
      "Biáº¿t quáº£n lÃ½ tá»‡p tin, tÃ¬m kiáº¿m há»c thuáº­t, Ä‘Ã¡nh giÃ¡ nguá»“n tin, lÆ°u trá»¯ trÃªn Google Drive/OneDrive vÃ  phá»‘i há»£p nhÃ³m báº±ng cÃ´ng cá»¥ trá»±c tuyáº¿n nhÆ° Trello hoáº·c ná»n táº£ng tÆ°Æ¡ng Ä‘Æ°Æ¡ng.",
    icon: asset("/assets/figma.svg"),
    animation: "clapping",
  },
  {
    id: 3,
    name: "á»¨ng dá»¥ng AI",
    pos: "Prompt - sÃ¡ng táº¡o ná»™i dung - trÃ¡ch nhiá»‡m",
    duration: "BÃ i 3 - BÃ i 7A",
    title:
      "Biáº¿t viáº¿t prompt, dÃ¹ng AI Ä‘á»ƒ há»— trá»£ há»c táº­p vÃ  sÃ¡ng táº¡o ná»™i dung, kiá»ƒm chá»©ng pháº£n há»“i, báº£o vá»‡ dá»¯ liá»‡u cÃ¡ nhÃ¢n, trÃ¡nh Ä‘áº¡o vÄƒn vÃ  ghi nháº­n nguá»“n há»— trá»£ minh báº¡ch.",
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
    url: "mailto:[Äiá»n email]",
  },
  {
    name: "Portfolio",
    icon: asset("/assets/arrow-up.png"),
    url: "#",
  },
] as const;

