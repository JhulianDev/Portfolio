import AISMABA_LOGO from "../assets/img/Aismaba-logo.png"
import PORTFOLIO_LOGO from "../assets/img/Portfolio-logo.png"
import NOTESLAB_LOGO from "../assets/img/Noteslab-logo.png"
import { colors } from "../assets/colors/Colors"

export const texts_es = {
  header: {
    home: 'Inicio',
    proyects: 'Proyectos',
    skills: 'Habilidades',
    aboutMe: 'Sobre mí',
    contact: 'Contacto'
  },
  home: {
    presentation: "Hola! Soy",
    name: "Jhulian",
    role: "Desarrollador Full Stack",
    description: "Apasionado amante de la programación y un entusiasta diseñador gráfico.",
    linkedin: "Ir a Linkedin"
  },
  proyects: {
    titleSection: "Mis Proyectos",
    cardsProyects: [
      {
        name: "Aismaba",
        title: "Agencia de branding",
        subtitle: "Tienda online",
        description: "Aplicación web construida con React y Node.js. Integración con las APIs de PayPal y Mercado Pago para el procesamiento de pagos.",
        pageLink: "https://www.aismaba.com/",
        gitHubLink: "https://github.com/JhulianDev/Aismaba",
        textButton: "Ir a la Web",
        logo: AISMABA_LOGO,
        colorTop: colors.lightPurple
      },
      {
        name: "Portfolio",
        title: "Portafolio Profesional",
        subtitle: "Web Personal",
        description: "Aplicación multidiomas construida con React y StyledComponents. Integración con Formspree para la gestión de formularios",
        pageLink: "https://github.com/JhulianDev/Portfolio",
        gitHubLink: null,
        textButton: "Ir a Github",
        logo: PORTFOLIO_LOGO,
        colorTop: colors.lightBlue,
        colorBottom: colors.lightPurple
      },
      {
        name: "NotesLab",
        title: "Gestor de notas",
        subtitle: "Sistema CRUD",
        description: "Aplicación construida con React, Node.js y MySQL. Sistema de autenticación gestionado con JSON Web Token.",
        pageLink: "https://notes-lab-46y6.vercel.app/",
        gitHubLink: "https://github.com/JhulianDev/NotesLab",
        textButton: "Ir a la Web",
        logo: NOTESLAB_LOGO,
        colorTop: "white",
        colorBottom: colors.lightBlue
      }
    ]
  },
  skills: {
    titleSection: "Mis Habilidades"
  },
  aboutMe: {
    titleSection: "Sobre mi",
    descriptionA: "¡Hola! Mi nombre es Jhulian Mérida, desarrollador FullStack con base en Argentina. Me apasiona crear interfaces estéticamente atractivas y funcionales que brinden soluciones efectivas. De forma constante amplío mis conocimientos con nuevas tecnologías con el objetivo de mejorar mi stack de habilidades y, en un futuro cercano, transmitir mis conocimientos a nuevos desarrolladores.",
    descriptionB: "Durante los últimos 1.2 años, he tenido la oportunidad de trabajar en una agencia de branding, donde mi papel principal ha sido la creación y gestión de la Aplicacion Web de la agencia. Pasando desde una Landing Page informativa a su evolución actual de una tienda online con backend, base de datos, procesadores de pago y sistema de Login."
  },
  contactMe: {
    titleSection: "Contáctame",
    name: "Nombre",
    email: "Correo",
    country: "País",
    subject: "Asunto",
    message: "Mensaje",
    sending: "Enviando...",
    send: "Enviar",
    alerts: {
      success: "Éxito!",
      succesText: "Su mensaje fue enviado",
      error: "Atención",
      mandatoryText: "Todos los campos son obligatorios",
      invalidMail: "El correo ingresado no es válido",
    }
  }
}