// src/content.js
const content = {
/*Titulo de pestaña
    - Abre el archivo index.html
    - Busca la linea que contenga el siguiente texto: <title>Juanpi Template</title>
    - Cambia el titulo por: Boda de fulano y mengana
*/

/*Portada Principal*/
    //La img portada se encuentra en el archivo index.css
    str_nuestraboda: "Nuestra Boda",
    str_nombrenovios: "Brisa & </br> Jonathan", //El </br> es un "Enter"

/*AudioPlayer*/
    img_vinilo: "/Resources/vinilo.png",

/* Frase romantica/biblica */
    str_fraseromantica: "El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece; no hace nada indebido, no busca lo suyo, no se irrita, no guarda rencor; no se goza de la injusticia, mas se goza de la verdad. Todo lo sufre, todo lo cree, todo lo espera, todo lo soporta.",

/*Frase para invitar */
    str_invitar: "¡El día más feliz de nuestra vida no se volverá a repetir, agradecemos su compañía!",

/* Aparta la fecha */
    img_savethedate: "/Imgs/SaveTheDate.jpg",
    str_dia: "12",
    str_mes: "Diciembre",
    str_anio: "2024",

/* No niños */
    str_ninos: "Debido al espacio de nuestra locación nupcial, hemos decidido no extender la invitación a los niños",

/* Etiqueta */
    str_etiqueta: "Etiqueta Formal de día",

/* Countdown */
    _timestamp: 1734809400000,

/* Seccion Novia */
    img_novia: "/Imgs/Novia.jpg",
    str_nombreNovia: "Nombre de la novia",
    str_nombreMadreNovia: "Nombre de la madre",
    str_nombrePadreNovia: "Nombre del padre",
    str_damasColumnaIzquierda: [
        'Dama de honor 1',
        'Dama de honor 2',
        'Dama de honor 3',
        'Dama de honor 4', //Si necesitas agregar más damas agrega otras lineas como esta, sin olvidar la coma
    ],
    str_damasColumnaDerecha: [
        'Dama de honor 5',
        'Dama de honor 6',
        'Dama de honor 7',
        'Dama de honor 8', //Si necesitas agregar más damas agrega otras lineas como esta, sin olvidar la coma
    ],

/* Seccion Novio */
    img_novio: "/Imgs/Novio.jpg",
    str_nombreNovio: "Nombre del novio",
    str_nombreMadreNovio: "Nombre de la madre",
    str_nombrePadreNovio: "Nombre del padre",
    str_damosColumnaIzquierda: [
        'Bestmen 1',
        'Bestmen 2',
        'Bestmen 3',
        'Bestmen 4', //Si necesitas agregar más damas agrega otras lineas como esta, sin olvidar la coma
    ],
    str_damosColumnaDerecha: [
        'Bestmen 5',
        'Bestmen 6',
        'Bestmen 7',
        'Bestmen 8', //Si necesitas agregar más damos agrega otras lineas como esta, sin olvidar la coma
    ],

/* Padrinos */
    str_madrina: "Madrina de velación",
    str_padrino: "Padrino de velación",

/* Slider automatico */
    slides: [
        "/Imgs/Slides1.jpg",
        "/Imgs/Slides2.jpg",
        "/Imgs/Slides3.jpg"
    ],
    str_fraseSlider: "“Qué mejor cosa para dos almas humanas que saberse unidas para toda la vida”",

/* Ceremonia */
    str_lugarCer: "Parroquia El Expiatorio del Santísimo Sacramento, Guadalajara, Jal",
    str_horaCer: "5:00 p.m",
    path_googleCer: "https://maps.app.goo.gl/5abMbj28cxiTVieC8?g_st=aw",

/* Recepcion */
    str_lugarRec: "Hyatt Regency, Andares Guadalajara",
    str_horaRec: "8:00 p.m",
    path_googleRec: "https://maps.app.goo.gl/e4r86WsEGADrZpaw9?g_st=aw",

/* Filtro */
    //La img portada se encuentra en el archivo index.css
    path_filtro: "https://www.instagram.com/ar/1127748235217727/",

/* Regalos */
    str_regalosFrase: "Sin tí esto no sería igual, nuestro mayor regalo es tu compañía en esta nueva etapa que comenzamos. Pero si quieres tener un detalle con nosotros <br /> ¡SUMA KILOMETROS A NUESTRA LUNA DE MIEL!",

    img_regalo1: "/Resources/sobre.png",
    str_fraseRegalo1: "El día del evento se dejará un baúl con sobres en la entrada de la recepción",

    img_regalo2: "/Resources/sobre.png",
    str_fraseRegalo2: "O también puedes optar por transferencia bancaria a nuestra cuenta:",

/* Transferencia datos */
    str_titular: "Nombre del titular",
    str_entidad: "Banco",
    str_numCuenta: "123 456 7890",
    str_clabe: "012 345 12345678901 5",
    str_codSwift: "ABCRPMHMABC",

/* Confirmacion de asistencia */
    str_fechaLimite: "Favor de confirmar tu asistencia antes del 31 de agosto del 2024",
    path_formulario: "https://docs.google.com/forms/d/e/1FAIpQLSetvNGge_uR4rgNZztjNDH7gHDuc-pSFRL3GsSDLJHot0KbRA/viewform?embedded=true",

/* Recomendaciones para invitados */
    estanciaItems: [
    {
        image: '/Imgs/hotel1.jpg',
        title: 'Hotel "Uno"',
        phone: '+52 123-456-7890',
        link: 'https://www.instagram.com/pocketinvite?igsh=MWF1N2w1aXE2Ymp2cQ=='
    },
    {
        image: '/Imgs/hotel2.jpg',
        title: 'Hotel "Dos"',
        phone: '+52 123-456-7890',
        link: 'https://www.instagram.com/pocketinvite?igsh=MWF1N2w1aXE2Ymp2cQ=='
    },
    {
        image: '/Imgs/hotel3.jpg',
        title: 'Hotel "Tres"',
        phone: '+52 123-456-7890',
        link: 'https://www.instagram.com/pocketinvite?igsh=MWF1N2w1aXE2Ymp2cQ=='
    }
],

    transporteItems: [
    {
        image: '/Imgs/car1.jpg',
        title: 'Car Rental',
        phone: '+52 123-456-7890',
        link: 'https://www.instagram.com/pocketinvite?igsh=MWF1N2w1aXE2Ymp2cQ=='
    },
    {
        image: '/Imgs/car2.jpg',
        title: 'Taxis',
        phone: '+52 123-456-7890',
        link: 'https://www.instagram.com/pocketinvite?igsh=MWF1N2w1aXE2Ymp2cQ=='
    },
    {
        image: '/Imgs/car3.jpg',
        title: 'Car Rental 2',
        phone: '+52 123-456-7890',
        link: 'https://www.instagram.com/pocketinvite?igsh=MWF1N2w1aXE2Ymp2cQ=='
    }
],

/* Galería */
    images:[
    "/Imgs/Sesion de fotos JP+S_2.jpg",
    "/Imgs/Sesion de fotos JP+S_8.jpg",
    "/Imgs/Sesion de fotos JP+S_12.jpg",
    "/Imgs/Sesion de fotos JP+S_21.jpg",
    "/Imgs/Sesion de fotos JP+S_45.jpg",
    "/Imgs/Sesion de fotos JP+S_94.jpg",
    "/Imgs/Sesion de fotos JP+S_23.jpg",
    "/Imgs/Sesion de fotos JP+S_38.jpg",
    "/Imgs/Sesion de fotos JP+S_50.jpg",
    "/Imgs/Sesion de fotos JP+S_61.jpg",
    "/Imgs/Sesion de fotos JP+S_18.jpg",
    "/Imgs/Sesion de fotos JP+S_75.jpg",
    "/Imgs/Sesion de fotos JP+S_76.jpg",
    "/Imgs/Sesion de fotos JP+S_85.jpg",
    "/Imgs/Sesion de fotos JP+S_97.jpg",
    
    // Agrega más imágenes aquí según sea necesario
  ],

};
  
  export default content;
  