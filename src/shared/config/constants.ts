import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = [ "About", "Experience", "Works", "Contact" ]

// project data
export const projects : ProjectTypes[] = [
    {
        title : "Portfolio web",
        description : "Portfolio personal con mis techskills, experiencias y proyectos desarrollados",
        tech : [ "Next js 13", "Tailwind CSS", "Express js", "MongoDB" ],
        code : 'https://github.com/rodrigo-georgetti/developer-portfolio',
        live : '',
        thumnail : "portfolio-v2.png",
        featured : true
    },

    {
        title : "MSC-Amoblamientos",
        description : "MSC-Amoblamientos es un E-Commerce para una empresa de venta de muebles y amoblamientos para el hogar. Fue nuestro Proyecto Final del bootcamp Soyhenry.",
        tech : [ "React", "boostrap", "Redux", "Node js" ],
        live : '',
        thumnail : "landing msc.png",
        featured : true
    },

    {
        title : "Epic Plays",
        description : "Proyecto individual de herny, en el que se me asigno la temática videogames. Features desarrolladas: Front-end, Back-end, base de datos, filtros, ordenamientos.",
        tech : [ "React", "pure CSS", "Redux", "Node js" ],
        live : '',
        thumnail : "landing EP.png",
        featured : true
    },

]