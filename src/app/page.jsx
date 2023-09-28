'use client'
import { useEffect, useRef } from 'react';
import Proyectos from '@/components/Proyectos';
import Typewriter from 'typewriter-effect';
import './globals.css'

export default function Home() {
  const nubeDerecha = useRef(null);
  const nubeIzquierda = useRef(null);
  const sol = useRef(null);
  const globoGrande = useRef(null);
  const globoChico = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY

      // izquierda.current.style.left = value * -1 + 'px';
      // izquierda.current.style.top = value * -1 + 'px';

      nubeDerecha.current.style.left = value * 1 + 'px';
      nubeDerecha.current.style.top = value * -1 + 'px';
      nubeIzquierda.current.style.left = value * -1 + 'px';

      sol.current.style.top = value * .5 + 'px';
      sol.current.style.opacity = 1 - value * 0.002;

      globoGrande.current.style.top = value * -.5 + 'px';
      globoGrande.current.style.left = value * -1 + 'px';
      globoGrande.current.style.transform = `scale(${Math.max(1 - value * 0.001, 0.5)})`;

      globoChico.current.style.top = value * .5 + 'px';
      globoChico.current.style.left = value * -1 + 'px';

      globoChico.current.style.transform = `scale(${Math.max(1 - value * 0.001, 0.5)})`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='overflow-x-hidden'>
      <div id='imagenes'>
        <img className='absolute top-0 left-0 w-[100%] h-[100vh] z-[-2]' src="./img7.png" alt="" />

        <img ref={sol} className='absolute top-0 left-0 w-[100%] h-[100vh] z-[-1]' src="./img6.png" alt="" />

        <img ref={globoChico} className='absolute top-0 left-0 w-[100%] h-[100vh]' src="./img5.png" alt="" />

        <img className='absolute top-0 left-0 w-[100%] h-[100vh]' src="./titulo.png" alt="" />

        <img ref={nubeDerecha} className='fixed top-0 left-0 w-[100%] h-[100vh]' src="./img4.png" alt="" />


        <img ref={nubeIzquierda} className='absolute top-0 left-0 w-[100%] h-[100vh]' src="./img3.png" alt="" />

        <img className='absolute top-0 left-0 w-[100%] h-[100vh]' src="./img2.png" alt="" />

        <img ref={globoGrande} className='absolute top-0 left-0 w-[100%] h-[100vh]' src="./img1.png" alt="" />
      </div>

      <div className='mt-[100vh]  p-48 bg-[rgb(37,0,50)] text-white'>

        <section className=' flex justify-between'>
          <div>
            <p>
              <h1 className=' font-bold text-4xl border-b-8 border-orange-600 mb-4'>Soy Jorge Perez</h1>
              <h2 className=' font-bold'>Desarrollador Full Stack</h2>
              Siempre he encontrado fascinante explorar cómo las innovaciones tecnológicas transforman nuestro mundo y mejoran la forma en que interactuamos con él. Aunque no cuento con experiencia laboral formal en este momento, mi dedicación y entusiasmo por aprender y enfrentar nuevos desafíos me han impulsado a desarrollar proyectos creativos y funcionales.
              <br />
              <br />
              Soy graduado en henry como full stack developer 🚀
              y como desarrollador full stack tengo manejo de las tecnologias mas importantes para el desarrollo web,
              como javaScript, CSS, HTML, Reactjs, express,SQL.
            </p>
          </div>
          <img src="./perfil.jpeg" className=' w-80 h-80 rounded-full p-2 bg-gradient-to-b from-orange-600 to-orange-900' alt="" />
        </section>

        <section className='mt-28'>
          <h2 className='font-bold text-4xl border-b-8 border-orange-600 mb-4'>Proyectos</h2>
          <p>Tengo experiencia en varios proyectos, tanto individuales como grupales.</p>

          <Proyectos/>

        </section>
      </div>
    </div>
  )
};