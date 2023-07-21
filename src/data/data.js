import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";

import codubi from "../assets/codubi.jpg";
import bajofacil from "../assets/bagofacil.gif";
import bagofacil2 from "../assets/bago-facil.gif";
import chad from "../assets/chad.jpg";
import chadguero from "../assets/chadguero.jpg";
import codubivoxed from "../assets/codubi-voxed.gif";
import duende from "../assets/duende.jpg";
import duendecin from "../assets/duendecin.jpg";
import duendelugano from "../assets/duende-lugano.jpg";
import pepe from "../assets/pepe.webp";
import pepecielo from "../assets/pepe-cielo.webp";
import pepefrog from "../assets/pepefrog.jpg";

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const heroapi = {
  title: "Bienvenidos al goce supremo",
  subtitle: "Rebajas en un 2% con shek3les",
  img: heroimg,
  btntext: "Explore Product",
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const popularsales = {
  title: "Popular Sales",
  items: [
    {
      id: "0p0x1",
      title: "Bananas verdes",
      text: "Listas para el goce",
      rating: "4.9",
      btn: "Buy Now",
      img: psale2,
      price: "200",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "Bananas anaranjadas",
      text: "Por amor a Melisa",
      rating: "4.5",
      btn: "Buy Now",
      img: psale1,
      price: "200",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Bananas crypys",
      text: "Para los dias de invierno",
      rating: "5+",
      btn: "Buy Now",
      img: psale3,
      price: "200",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "HIGHLIGHTS",
  title: "GOCE SUPREMO",
  text: "Nuestro proposito es llevar al goce hasta el supremo nivel y desde alli formar una nueva comunidad",
  btn: "Explore More",
  url: "../assets/hightlightimg.png",
  img: hightlightimg,
};

const sneaker = {
  heading: "GOCE YA",
  title: "BANANAS DE TODAS LAS CATEGORIAS",
  text: "Creemos fervientemente en nuestro derecho de gozar. Este mundo es demasiado puritano para el nivel que alcanzo la tecnologia reciente. Gozar o morir",
  btn: "Explore More",
  url: "../assets/hightlightimg.png",
  img: sneakershoe,
};

const toprateslaes = {
  title: "Top goces Now",
  items: [
    {
      id: "0M0x1",
      title: "Gozando la vida es mejor",
      text: "GOCE YA O VAYASE AL DEMONIO",
      rating: "5+",
      btn: "Buy Now",
      img: product7,
      price: "150",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "Nuevas gozaderas prime",
      text: "GOZO nuevas formas de gozar",
      rating: "5+",
      btn: "Buy Now",
      img: product2,
      price: "150",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Potastico momment",
      text: "No solo Potasio tambien calcio",
      rating: "5+",
      btn: "Buy Now",
      img: product3,
      price: "150",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Potastick",
      text: "Compre ahora y goce mas",
      rating: "5+",
      btn: "Buy Now",
      img: product4,
      price: "150",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "Potecie su goce",
      text: "No lo piense solo sienta",
      rating: "5+",
      btn: "Buy Now",
      img: product5,
      price: "150",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "Gozar es vivir",
      text: "Un dia sin gozar es un dia perdido",
      rating: "5+",
      btn: "Buy Now",
      img: product6,
      price: "150",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "Gonzalo Perez",
      text: "Gran goce desde ya",
      rating: "5+",
      btn: "Buy Now",
      img: product1,
      price: "150",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "DETENGASE Y GOCE",
      text: "Es su deber gozar aproveche",
      rating: "5+",
      btn: "Buy Now",
      img: product9,
      price: "150",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "Pare de sufrir",
      text: "Comience a gozar la vida",
      rating: "5+",
      btn: "Buy Now",
      img: product10,
      price: "150",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "GOCE",
      text: "En el goce todo es gozo",
      rating: "5+",
      btn: "Buy Now",
      img: product12,
      price: "150",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "Gozando cerca de Odion",
      text: "Gocemos juntos",
      rating: "5+",
      btn: "Buy Now",
      img: product11,
      price: "150",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "Un amigo gocero es un amigo en verdad",
      text: "Goce junto a sus amigos porteños",
      rating: "5+",
      btn: "Buy Now",
      img: product8,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};


const story = {
  title: "Top Stories",
  news: [
    {
      title: "Bago facil eternal",
      text: "Bago facil fue uno de los primero BBCistas en promulgar las practicas hacia las personas q lo buscan",
      img: bajofacil,
      url: "https://sneakernews.com/2022/09/14/air-jordan-37-low/",
      like: "3/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "Read More"
    },
    {
      title: "Codubi el último 10",
      text: "Nadie sabe donde fue nadie sabe donde va pero siempre estara en nuestros corazones",
      img: codubi,
      time: "41 Mins",
      like: "5/5",
      url: "https://sneakernews.com/2022/09/14/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003/",
      by: "Michael Le",
      btn: "Read More"
    },
    {
      title: "La historia detras del bago facismo",
      text: "El vago facismo comenzo como una lucha de clases obreras entre personas venidas de Europa y personas venidas de paises aledaños de la zona",
      img: bagofacil2,
      time: "2 Hours",
      url: "https://sneakernews.com/2022/09/14/nike-air-max-plus-grey-orange-black-fb3358-001/",
      like: "5/5",
      by: "Michael Le",
      btn: "Read More"
    },
    {
      title: "Por que el op nunca es un chad?",
      text: "En esta edicion revelaremos la verdad acerca de porque el op nunca es un chad y nunca lo sera",
      img: chad,
      time: "7 Months",
      url: "https://sneakernews.com/2022/03/09/air-jordan-1-retro-high-og-yellow-toe-555088-711/",
      like: "5/5",
      by: "Sneaker News",
      btn: "Read More"
    },
    {
      title: "Chadguero el lider supremo que rompio el paradigma",
      text: "Antes de que el mesias rompiera con el paradigma las personas vivian una vida mundana y de total reprimision, hasta q el crackra del goce fue liberado",
      img: chadguero,
      time: "1 Months",
      url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Read More"
    },
    {
      title: "Por que estos tipos marcaron Argentina para siempre?",
      text: "Iconicos, inigualables, inteligentes, carismaticos, estas son todas las caracteristas q nunca acompañaros a estos iconos pero q aun asi lo lograron",
      img: codubivoxed,
      time: "25 Days",
      url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Read More"
    },
    {
      title: "Avistamientos paranormales",
      text: "Segun cuenta la leyenda si una persona encontrare un duende luganense lo apropiado es darles cigarros o comprarles algunas remeras para caer siempre bien parado",
      img: duende,
      url: "https://sneakernews.com/2022/09/09/nike-air-force-1-black-laser-orange-fb7162-081/",
      time: "6 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
    {
      title: "Cuando las limitaciones se convierten en ventajas",
      text: "Desde siempre se ha estigmatizado a las personas manlets y se les ha adjudicado una desventaja q casi nunca falla pero q siempre confirma el misterio",
      img: duendecin,
      url: "https://sneakernews.com/2022/09/08/hello-kitty-adidas-originals-gw7166-gw7167-gw7168/",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
    {
      title: "Los duenden dan suerte?",
      text: "El misterio q enmascara una gran verdad detras del misterio de los duendes luganenses",
      img: duendelugano,
      url: "https://sneakernews.com/2022/09/08/nike-air-force-1-low-worldwide-black-royal-fb1840-001/",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
  ],
};


const footerAPI = {
  titles: [ {title: "Todas puras"},{title: "el opreso desde el benal"},{title: "Goce ahora"} ],
  links: [
    [
      {link: "News"},
      {link: "Careers"},
      {link: "Investors"},
      {link: "Prupose"},
      {link: "Sustainability"},
    ],
    [
      {link: "Order Status"},
      {link: "Shipping & Delivery"},
      {link: "Payment Options"},
      {link: "Gift Card Balance"},
      {link: "Contact Us"},
      {link: "FAQ"},
      {link: "Blog"},
    ],
    [
      {link: "Gift Cards"},
      {link: "Promotions"},
      {link: "Find A Store"},
      {link: "Signup"},
      {link: "Nike Jouneral"},
      {link: "Send Us Feeback"},
    ],
  ]
};


export { heroapi, footerAPI, story, sneaker, highlight, toprateslaes, popularsales };
