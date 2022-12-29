import { Menu } from "./types";
import {
  AiFillAccountBook,
  AiFillAlipayCircle,
  AiFillRobot,
} from "react-icons/ai";

import { FcBusiness } from "react-icons/fc";
import { RiEarthFill } from "react-icons/ri";

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
    title: "Elevate Your Business with AI-Driven Solutions",
    Icon: FcBusiness,
    description:
      "Our team of experts will work with you to identify areas of your business that can benefit from AI-powered solutions. From streamlining operations to improving customer service, we can help you leverage the power of AI to drive efficiency and increase your competitive edge.",
  },
  {
    title: "Revolutionize Your Online Presence with AI-Powered Tools",
    Icon: RiEarthFill,
    description:
      "With our AI-powered website development and digital marketing services, we can help you create a professional and effective online presence that drives results. From custom website design to social media management and content creation, we have the tools and expertise to help you succeed online.?",
  },
  {
    title: "Maximize Efficiency and Effectiveness with SMARK's AI Technologies",
    Icon: AiFillRobot,
    description:
      "Our comprehensive suite of AI products and services is designed to help businesses streamline operations, improve efficiency, and achieve better results. From meeting summary tools to content creation and social media management, we can help you take your business to the next level with the power of AI.",
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
