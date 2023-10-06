'use client'

import Image from 'next/image'
import React from 'react'
import perfil from '../public/Perfil.jpg'
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex items-center justify-center'>
            <div>
                <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "tween", duration: 0.2 }}
                >
                    <Image src={perfil} alt='foto de perfil' priority={true}
                    className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'/>
                </motion.div>
            </div>
        </div>

        <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        >
            <span className='font-bold'>Olá, meu nome é Yuri</span>. Como <span className='font-bold'>front-end</span> há <span className='font-bold'>2 anos</span>, desenvolvi projetos utilizando de ferramentas atuais, código limpo e busca constante por aprimoramento.
        </motion.p>
    </section>
  )
}
