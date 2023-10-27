import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jeff The Scientist',
  description: `Portfolio website for a data scientist and a research scientist. I am a research scientist at
   Boston Children&#39;s Hospital by day and a data scientist/machine learning / artifical intelligence (ML / AI) engineer by night. I am also a self-taught web <developer /
   software engineer(SWE) / full-stack developer (I don&#39;t know what to call myself yet). I am currently currently looking for a remote
   full time position as a data scientist or a machine learning engineer. I graduated from Vanderbilt University with B.S. in Chemistry as a part of my pre-medical track. But after going through some life-altering events, I have picked up a new passion for data science and machine learning.
    I hope to be able to use my skills to help others in the future, and I am currently working on a few projects to help me get started on my journey to become a data scientist. I am also working on a few projects to help me learn more about web development, and this website is the very first one of them!
    I will not go into too much detail, but my ultimate goal as of right now is to be able to develop deep learning models to help medical professionals interpret medical images and make better decisions for their patients. I personally find value in this field as it aligns with my passion for medicine and my newfound passion for data science. I hope to be able to make a difference in the world!
    My other interests lie with working with reinforced deep learning models to develop agents that can play games and solve problems. I loved playing games as a kid, especially for the sense of progression they provide. But I always find it tedious and time-consuming to grind for hours everyday. So I want to develop agents that can play games better than humans and provide me with these satisfactions of progression without me having to spend hours grinding. I am still very new and learning, but please feel free to check some of my work in this field out in my Projects page!
    If you have any suggestions or inquiries about my projects, please feel free to contact me through the contact form below! Thank you very much for your time!
   Some of my skills include: Python, Tensorflow, TensorflowJS, Pytorch, JupytorNotebook, SQL, RStudio, Statistics, HTML,
   CSS, Javascript, React, Next.js, Tailwind CSS, Git, Github, Boostrap, Typescript, NextJS, ReactJS, NodeJS, Version Control, Tableau,
   Jest, and Excel.`
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Jeff Youngjae Lee" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
