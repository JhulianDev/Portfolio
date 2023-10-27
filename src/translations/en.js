import AISMABA_LOGO from "../assets/img/Aismaba-logo.png"
import PORTFOLIO_LOGO from "../assets/img/Portfolio-logo.png"
import NOTESLAB_LOGO from "../assets/img/Noteslab-logo.png"
import { colors } from "../assets/colors/Colors"

export const texts_en = {
  header: {
    home: 'Home',
    proyects: 'Proyects',
    skills: 'Skills',
    aboutMe: 'About me',
    contact: 'Contact'
  },
  home: {
    presentation: "Hi! I'm",
    name: "Jhulian",
    role: "Full Stack Developer",
    description: "I am a passionate lover of programming and an enthusiastic graphic designer.",
    linkedin: "Go Linkedin"
  },
  proyects: {
    titleSection: "My Proyects",
    cardsProyects: [
      {
        name: "Aismaba",
        title: "Branding Agency",
        subtitle: "Online Store",
        description: "Web application built with React and Node.js. Integration with the PayPal and Mercado Pago APIs for payment processing.",
        pageLink: "https://www.aismaba.com/",
        gitHubLink: "https://github.com/JhulianDev/Aismaba",
        textButton: "Go to Website",
        logo: AISMABA_LOGO,
        colorTop: colors.lightPurple
      },
      {
        name: "Portfolio",
        title: "Professional Portfolio",
        subtitle: "Website Personal",
        description: "Personal portfolio built with React and StyledComponents. Integration with Formspree for forms management",
        pageLink: "https://github.com/JhulianDev/Portfolio",
        gitHubLink: null,
        textButton: "Go to Github",
        logo: PORTFOLIO_LOGO,
        colorTop: colors.lightBlue,
        colorBottom: colors.lightPurple
      },
      {
        name: "NotesLab",
        title: "Notes Management",
        subtitle: "CRUD System",
        description: "System built with React, Node js and MySQL. Authentication system managed with JSON Web Token",
        pageLink: "https://notes-lab-46y6.vercel.app/",
        gitHubLink: "https://github.com/JhulianDev/NotesLab",
        textButton: "Go to Website",
        logo: NOTESLAB_LOGO,
        colorTop: "white",
        colorBottom: colors.lightBlue
      }
    ]
  },
  skills: {
    titleSection: "My Skills"
  },
  aboutMe: {
    titleSection: "About Me",
    descriptionA: "Hello! My name is Jhulian Mérida, a FullStack developer based in Argentina. I'm passionate about creating aesthetically pleasing and functional web interfaces that provide effective solutions. I'm constantly expanding my knowledge with new technologies and tools in order to enhance my technological stack and, in the near future, pass on my knowledge to new developers.",
    descriptionB: "Over the last 2 years, I've had the opportunity to work at a branding agency, where my main role has been the creation and management of the agency's website. Starting from an informative Landing Page to its current evolution as an online store with backend, a database, payment processors, and a login system."
  },
  contactMe: {
    titleSection: "Contact Me",
    name: "Name",
    email: "Email",
    country: "Country",
    subject: "Subject",
    message: "Message",
    sending: "Sending...",
    send: "Send",
    alerts: {
      success: "Success!",
      successText: "Your message has been sent",
      error: "Attention",
      mandatoryText: "All fields are required",
      invalidMail: "The entered email is not valid",
    }    
  }
}