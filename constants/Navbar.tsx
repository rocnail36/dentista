import { link } from "fs";
import { Children } from "react";

export const navbarLinks = [
    {
        title:"home",
        link: "/"
    },
    {
        title: "pages",
        children: [
         {   title: "about us",
            link: "/about-us"
         },
         {
            title:"galery",
            link:"/galery"
         },
         {
            title:"citas",
            link: "cita"
         }
        ]
    },
    {
        title:"service",
        children: [
            {
                title:"limpieza",
                link: "/servicios/limpieza"
            },
            {
                title: "extraccion",
                link: "/servicios extraccion"
            }
        ]
    },
    {
        title:"contacto",
        link: "/contacto"
    }


]