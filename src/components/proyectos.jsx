import React from 'react'

const Proyectos = () => {
    return (
        <div>
            <div className='flex justify-between'>

                <div className='mt-10 px-2  py-3 mx-2 w-96 text-center bg-gradient-to-b from-orange-600 to-orange-900 shadow-2xl rounded-xl'>
                    <img className=' mx-auto mb-3' width={200} src="./taskApp.png" alt="" />
                    <h3 className='font-bold text-2xl'>TaskApp</h3>
                    <p>Es una sencilla app de tareas, es usuario puede agregar, modificar y eliminar las tareas correspondientes. Con un diseño minimalista y amigable, </p>
                    <div className=' flex mt-4'>
                        <img width="25" height="25" src="https://img.icons8.com/fluency-systems-filled/48/nextjs.png" alt="nextjs" />
                        <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/javascript.png" alt="javascript" />
                        <img width="25" height="25" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-react-social-media-tanah-basah-glyph-tanah-basah.png" alt="external-react-social-media-tanah-basah-glyph-tanah-basah" />
                        <img width="25" height="25" src="https://img.icons8.com/material/24/tailwind_css.png" alt="tailwind_css" />
                        <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/postgreesql.png" alt="postgreesql" />
                    </div>
                </div>

                <div className='mt-10 bg-orange-600 px-2 py-3 mx-2 w-96 text-center bg-gradient-to-b from-orange-600 to-orange-900 rounded-xl shadow-2xl'>
                    <img className=' mx-auto mb-3' width={200} src="./pcuniverse.png" alt="" />
                    <h3 className='font-bold text-2xl'>PCuniverse</h3>
                    <p>Es un E-commerce enfocado en la venta de hardware online, en la que puedes comprar componentes por separado o montar una pc desde la app. Mi colaboración en este proyecto fue del lado del Frontend. </p>
                    <div className=' flex mt-4'>
                        <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/javascript.png" alt="javascript" />
                        <img width="25" height="25" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-react-social-media-tanah-basah-glyph-tanah-basah.png" alt="external-react-social-media-tanah-basah-glyph-tanah-basah" />
                        <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/css3.png" alt="css3" />
                        <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/postgreesql.png" alt="postgreesql" />
                        <img width="25" height="25" src="https://img.icons8.com/windows/32/node-js.png" alt="node-js" />
                    </div>
                </div>

                <div className='mt-10 bg-orange-600 px-2 py-3 mx-2 w-96 text-center bg-gradient-to-b from-orange-600 to-orange-900 rounded-xl shadow-2xl'>
                    <img className=' mx-auto mb-3' width={200} src="./CountryApp.png" alt="" />
                    <h3 className='font-bold text-2xl'>CountryApp</h3>
                    <p>Es una app de países en
                        la que puedes investigar todo sobre un
                        país: la capital, la región, etc.
                        Fui encargado de todo el desarrollo de la app, incluyendo el servidor, la base de datos y el Frontend</p>
                    <div className=' flex mt-4'>
                        <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/javascript.png" alt="javascript" />
                        <img width="25" height="25" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-react-social-media-tanah-basah-glyph-tanah-basah.png" alt="external-react-social-media-tanah-basah-glyph-tanah-basah" />
                        <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/css3.png" alt="css3" />
                        <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/postgreesql.png" alt="postgreesql" />
                        <img width="25" height="25" src="https://img.icons8.com/windows/32/node-js.png" alt="node-js" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Proyectos