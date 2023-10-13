'use client'

import Image from 'next/image'
import React from 'react'
import perfil from '../public/Perfil.jpg'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'

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
            <span className='font-bold'>Olá, meu nome é Yuri</span>. Como <span className='font-bold'>front-end</span> há <span className='font-bold'>2 anos</span>, desenvolvi projetos utilizando de ferramentas atuais e código limpo. Meu principal foco é <span className='font-bold'>React</span>
        </motion.p>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, }}
        >
            <Link href='#contact'
            className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>
                Contate-me aqui <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
            </Link>

            <a className='bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10' href='/CV.pdf' download>
                Baixe meu CV <HiDownload className='opacity-60'/>
            </a>

            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition cursor-pointer border border-black/10'
            href='https://www.linkedin.com/in/yuri-castilhoo/' target='_blank'>
                <BsLinkedin />
            </a>

            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10'
            href='https://github.com/YuriCast' target='_blank'>
                <FaGithubSquare />
            </a>
        </motion.div>
    </section>
  )
}
