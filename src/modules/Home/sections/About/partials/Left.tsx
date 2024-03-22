import React from 'react'
import { motion } from 'framer-motion'
import { IoMdArrowDropright } from 'react-icons/io'
//
import { skills } from '@modules/Home/config/constanst'
import { fadeTop, motionStep } from '@config/motion'


const Left = () => {

  // content
  const content = [
    "¡Hola! mi nombre es Rodrigo, Fullstack Developer con conocimientos en: Typescript, Javascript, HTML, CSS, React, Redux, NodeJS, Express, PostgreSQL, Sequelize.",
"Desde pequeño tuve afición por los videogames 🎮, eso primero despetó mi curiosidad por la tecnología y luego por la programación.",
"Estudié Ing. en sistemas de información, y recientemente Fullstack developer en el bootcamp Soyhenry 💻.",
"La ingeniería me dio un marco teórico batante sólido, pero sentí que necesitaba profundizar mis conocimientos en programación y por eso inicié Soyhenry.",
 "Mi objetivo pricipal es integrar proyectos de software, asi como ampliar mis conocimientos con las tecnologías que aun no domino.",
  "Tengo una mayor afinidad hacia el area Back-End 🔌."
  ]

  return (
    <motion.div variants={fadeTop} {...motionStep} className='col-span-3' >

      <div className='space-y-4 mt-7 text-slate-400' >

        {content.map((e:string, i:number) => <p key={i} > {e} </p>)}

        <div className='__skills md:pr-56' >
           <ul className='grid grid-cols-2 space-y-2' >
              {skills.map((e: string, i: number) => (
                <li key={i} className='gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-sky-400' > <IoMdArrowDropright className='text-sky-400 text-xl' /> {e}</li> 
              ))}             
           </ul> 
        </div>

      </div>

    </motion.div>
  )
}

export default Left
