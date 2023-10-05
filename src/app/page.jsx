'use client'
import { useEffect, useRef } from 'react';
import Proyectos from '../components/Proyectos.jsx';
import Tecnologias from '../components/Tecnologias.jsx';
import './globals.css'


export default function Home() {
  const nubeDerecha = useRef(null);
  const nubeIzquierda = useRef(null);
  const sol = useRef(null);
  const globoGrande = useRef(null);
  const globoChico = useRef(null);

  const resumen = useRef(null);
  const tituloProyectos = useRef(null);
  const proyectos = useRef(null);
  const tituloStack = useRef(null);
  const stack = useRef(null);
  const educacion = useRef(null);
  const contacto = useRef(null)


  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;

      nubeDerecha.current.style.left = value * 1 + 'px';
      nubeDerecha.current.style.top = value * -1 + 'px';
      nubeIzquierda.current.style.left = value * -1 + 'px';

      sol.current.style.top = value * .5 + 'px';
      sol.current.style.opacity = 1 - value * 0.002;

      globoGrande.current.style.top = value * -.5 + 'px';
      globoGrande.current.style.left = value * -1 + 'px';
      globoGrande.current.style.transform = `scale(${Math.max(1 - value * 0.003, 0.5)})`;

      globoChico.current.style.top = value * .5 + 'px';
      globoChico.current.style.left = value * -1 + 'px';

      globoChico.current.style.transform = `scale(${Math.max(1 - value * 0.004, 0.5)})`;
    };

    window.addEventListener('scroll', handleScroll);

    const cargarElements = (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.remove('opacity-0');
          entrada.target.classList.add('opacity-1');
          entrada.target.classList.remove('sm:translate-x-24');
        }
      });
    };

    const observador = new IntersectionObserver(cargarElements, {
      root: null,
      rootMargin: '0px',
      threshold: .5
    });

    if (resumen.current) {
      observador.observe(resumen.current);
    }
    if (tituloProyectos.current) {
      observador.observe(tituloProyectos.current);
    }
    if (proyectos.current) {
      observador.observe(proyectos.current);
    }
    if (stack.current) {
      observador.observe(stack.current);
    }
    if (tituloStack.current) {
      observador.observe(tituloStack.current);
    }
    if (educacion.current) {
      observador.observe(educacion.current);
    }
    if (contacto.current) {
      observador.observe(contacto.current);
    }


    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (resumen.current) {
        observador.unobserve(resumen.current);
      }
    };
  }, []);

  if (typeof window !== 'undefined') {
    return (
      <div className='overflow-x-hidden'>

        <div className=' z-10  sm:mt-[100vh] p-5   sm:p-48  bg-gradient-to-b from-[rgb(37,0,50)] to-[rgb(35,3,78)]   text-white text-xl'>

          <div id='imagenes'>
            <img className=' object-contain absolute top-0 left-0 w-[100%] z-0 sm:z-[-2]' src="./img7.png" alt="" />

            <img ref={sol} className=' object-contain absolute top-0 left-0 w-[100%] z-[-1]' src="./img6.png" alt="" />

            <img ref={globoChico} className='object-contain absolute top-0 left-0 w-[100%]' src="./img5.png" alt="" />

            <img className=' object-contain absolute top-0 left-0 w-[100%]' src="./titulo.png" alt="" />

            <img ref={nubeDerecha} className=' object-contain fixed top-0 left-0 w-[100%]' src="./img4.png" alt="" />


            <img ref={nubeIzquierda} className=' object-contain absolute top-0 left-0 w-[100%]' src="./img3.png" alt="" />

            <img className=' object-contain absolute top-0 left-0 w-[100%]' src="./img2.png" alt="" />

            <img ref={globoGrande} className='object-contain absolute top-0 left-0 ' src="./img1.png" alt="" />
          </div>

          <section ref={resumen} className='mt-72 flex flex-col-reverse items-center sm:flex-row sm:justify-between sm:mt-5 transition-all duration-500 sm:translate-x-24 opacity-0 mb-56'>
            <div>
              <p className=' text-1xl'>
                <h1 className=' text-3xl font-bold sm:text-5xl border-b-8 border-orange-600 mb-4'>Soy Jorge Perez</h1>
                <h2 className=' font-bold'>Desarrollador Full Stack</h2>
                Siempre he encontrado fascinante explorar cómo las innovaciones tecnológicas transforman nuestro mundo y mejoran la forma en que interactuamos con él. Aunque no cuento con experiencia laboral formal en este momento, mi dedicación y entusiasmo por aprender y enfrentar nuevos desafíos me han impulsado a desarrollar proyectos creativos y funcionales.
                <br />
                <br />
                Soy graduado en henry como full stack developer 🚀
                y como desarrollador full stack tengo manejo de las tecnologías mas importantes para el desarrollo web,
                como javaScript, CSS, HTML, Reactjs, express,SQL.
              </p>
              <div className=' flex justify-center'>
              <a className=' mt-32 bg-orange-600 p-3 rounded-md shadow-2xl transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer' download='CV-JorgePerez' href="/CV.pdf">Descarga CV</a>
            </div>
            </div>
            <img src="./perfil.jpeg" className=' w-48 h-48 p-2 mt-5 rounded-full sm:w-80 sm:h-80   bg-gradient-to-b from-orange-600 to-orange-900 object-cover' alt="" />
          </section>

          <section className=' mb-56'>
            <div ref={tituloProyectos} className=' opacity-0 sm:translate-x-24 transition-all duration-500'>
              <h2 className='font-bold text-4xl border-b-8 border-orange-600 mb-4'>Proyectos</h2>
              <p>Tengo experiencia en varios proyectos, tanto individuales como grupales.</p>
            </div>

            <div ref={proyectos} className=' opacity-0 sm:translate-x-24 transition-all duration-500'>
              <Proyectos />
            </div>

          </section>

          <section className=' mb-56'>
            <div ref={tituloStack} className=' opacity-0 sm:translate-x-24 transition-all duration-500'>
              <h3 className=' font-bold text-4xl border-b-8 border-orange-600 mb-4'>Lenguajes y tecnologías</h3>
              <p>Estas son las tecnologías con que me he dedicado a perfeccionar.</p>
            </div>

            <div ref={stack} className=' opacity-0 sm:translate-x-24 transition-all duration-500'>
              <Tecnologias />
            </div>
          </section>


          <section ref={educacion} className=' mb-56 opacity-0 sm:translate-x-24 transition-all duration-500'>
            <h3 className=' font-bold text-4xl border-b-8 border-orange-600 mb-4'>Educación</h3>
            <p>
              Este fue el camino que me preparo para llegar a ser Full Stack Developer y para estar listo para enfrentar retos.
            </p>
            <br />
            <p className=' mb-6'>
              Gran parte de mi camino como Developer, fue de forma autodidacta, aprendí a usar todas las herramientas de aprendizaje disponibles en mi entorno, después opte por inscribirme a una academia online para por fin poder decir que soy desarrollador web.
            </p>
            <h5 className=' text-3xl'>Educación formal</h5>
            <ul className=' list-disc'>
              <li>Escuela Primaria</li>
              <li>Escuela Secundaria</li>
              <li> Full Stack Web Developer. Henry Bootcamp. 800 horas de cursado teórico-práctico. 2023. <a className=' text-orange-500' href="https://certificates.soyhenry.com/new-cert?id=4e252d24e9f8f06a6fba0ab5d4c2478340919d3f0da1b8544229d9c8a33473ee">Certificado</a></li>
            </ul>
          </section>

          <section ref={contacto} className=' opacity-0 sm:translate-x-24 transition-all duration-500'>
            <h2 className=' font-bold text-4xl border-b-8 border-orange-600 mb-4'>Contácteme!</h2>
            <h3>Te demostraré todo lo que puedo aportar en el Desarrollo de tu trabajo.</h3>
            <div className=' flex flex-wrap justify-around mt-10'>

              <a href="https://www.linkedin.com/in/jorge-perez-tichij-38a15523b/" target='blank'>
                <img className=' w-20 sm:w-28  rounded-xl transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer' src="./linkedin.png" alt="" />
              </a>

              <a href="mailto:jorgeleoneltichij@gmail.com">
                <img className=' w-20 sm:w-28 rounded-xl transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer' src="gmail.png" alt="" />
              </a>

              <a href="https://www.instagram.com/jorge_pz_tj/" target='blank'>
                <img className=' w-20 sm:w-28 rounded-xl transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer' src="instagram.png" alt="" />
              </a>

            </div>
            <div className=' flex justify-center'>
              <a className=' mt-32 bg-orange-600 p-3 rounded-md shadow-2xl transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer' download='CV-JorgePerez' href="/CV.pdf">Descarga CV</a>
            </div>


          </section>

        </div>
        <footer className=' bg-gradient-to-b from-orange-600 to-orange-800 h-52 text-white text-center'>
          <p className=''>Gracias por tu atencion!</p>
        </footer>
      </div>
    )
  }
};