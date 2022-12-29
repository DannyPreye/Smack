import { Menu } from "./types";
import {
  AiFillAccountBook,
  AiFillAlipayCircle,
  AiFillRobot,
} from "react-icons/ai";

export const menu: Menu[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "About",
    link: "/about",
  },
];

export const services = [
  {
    title: "Automate",
    Icon: AiFillAccountBook,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio mollitia excepturi aspernatur consequatur beatae esse? Nulla magnam architecto ad totam facere nisi maiores deserunt repellendus! Quas, ullam. Inventore, facere fugiat?",
  },
  {
    title: "Payment",
    Icon: AiFillAlipayCircle,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio mollitia excepturi aspernatur consequatur beatae esse? Nulla magnam architecto ad totam facere nisi maiores deserunt repellendus! Quas, ullam. Inventore, facere fugiat?",
  },
  {
    title: "Automate ",
    Icon: AiFillRobot,
    description:
      "SMARK's AI-powered website offers tools for summarizing meetings and creating content. The meeting summary feature uses advanced AI technology to summarize key points and action items from meetings, saving time and increasing productivity. The content creation tool allows businesses to easily generate unique, professional-quality content for their online platforms.",
  },
];

export const testBlog = [
  {
    title: "Tech and the world",
    featuredImage: "/girl-laptop.png",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio mollitia excepturi aspernatur consequatur beatae esse? Nulla magnam architecto ad totam facere nisi maiores deserunt repellendus! Quas, ullam. Inventore, facere fugiat?",
    created_at: new Date(),
  },
  {
    title: "Tech and the world",
    featuredImage: "/girl-laptop.png",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio mollitia excepturi aspernatur consequatur beatae esse? Nulla magnam architecto ad totam facere nisi maiores deserunt repellendus! Quas, ullam. Inventore, facere fugiat?",
    created_at: new Date(),
  },
  {
    title: "Tech and the world",
    featuredImage: "/girl",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio mollitia excepturi aspernatur consequatur beatae esse? Nulla magnam architecto ad totam facere nisi maiores deserunt repellendus! Quas, ullam. Inventore, facere fugiat?",
    created_at: new Date(),
  },
  {
    title: "Tech and the world",
    featuredImage: "/girl",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio mollitia excepturi aspernatur consequatur beatae esse? Nulla magnam architecto ad totam facere nisi maiores deserunt repellendus! Quas, ullam. Inventore, facere fugiat?",
    created_at: new Date(),
  },
];
