import writing from "../assets/products/writing_2327400 1.png"
import designtool from "../assets/products/writing_2327400 1.png"
import camera from "../assets/products/camera_8775444 1.png"
import operation from"../assets/products/operation.png"
import portfolio from "../assets/products/portfolio.png"
import open from "../assets/products/social-media.png"
export const products = [
  {
    id: 1,
    name: "AI Writing Pro",
    description: "Generate high quality content instantly",
    price: 29,
    period: "monthly",
    tag: "popular",
    tagType: "badge-primary",
    features: ["100+ templates", "SEO optimization", "Export to PDF"],
    img: writing
  },
  {
    id: 2,
    name: "Design Templates Pack",
    description: "Ready UI kits & templates",
    price: 49,
    period: "one-time",
    tag: "best",
    tagType: "badge-secondary",
    features: ["Figma files", "Responsive UI", "Modern design"],
    img: designtool
  },
  {
    id: 3,
    name: "Premium Stock Assets",
    description: "Boost search rankings",
    price: 19,
    period: "monthly",
    tag: "new",
    tagType: "badge-accent",
    features: ["Keyword tools", "Analytics", "Reports"],
    img: camera
  },
  {
    id: 4,
    name: "Automation Toolkit",
    description: "Create ATS friendly CV",
    price: 15,
    period: "one-time",
    tag: "popular",
    tagType: "badge-primary",
    features: ["ATS optimization", "Templates", "PDF export"],
    img: operation
  },
  {
    id: 5,
    name: "Resume Builder Pro",
    description: "Tools for developers",
    price: 39,
    period: "yearly",
    tag: "best",
    tagType: "badge-secondary",
    features: ["API tools", "Debugger", "Extensions"],
    img: portfolio
  },
  {
    id: 6,
    name: "Social Media Content Kit",
    description: "Grow your business",
    price: 25,
    period: "monthly",
    tag: "new",
    tagType: "badge-accent",
    features: ["Email tools", "Automation", "CRM"],
    img: open
  }
];