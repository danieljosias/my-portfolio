import imgHTML from "./../public/static/stack/html.svg";
import imgCSS from "./../public/static/stack/css.svg";
import imgJS from "./../public/static/stack/js.svg";
import imgNode from "./../public/static/stack/node.svg";
import imgStyled from "./../public/static/stack/styled.svg";
import imgReact from "./../public/static/stack/react.svg";
import { SiTypescript } from "react-icons/si";
import { SiPostgresql } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { SiPython } from 'react-icons/si'
import { DiDjango } from 'react-icons/di'

export const stackData = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "JS",
    img: imgJS,
  },
  {
    title: "React",
    img: imgReact,
  },
  {
    title: "Styled Components",
    img: imgStyled,
  },
  {
    title: "Node JS",
    img: imgNode,
  },
  {title: "Express", img: SiExpress},
  { title: "PostgreSQL", img: SiPostgresql},
  { title: "TypeScript", img: SiTypescript},
  { title: "Python", img: SiPython},
  { title: "Django", img: DiDjango},
];
