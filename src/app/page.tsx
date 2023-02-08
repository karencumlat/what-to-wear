'use client';

import Image from 'next/image'
import { useState } from 'react';
import styles from './page.module.css'


export default function Home() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  
  function myRandomInts(quantity:number, max:number){
  const set = new Set()
  while(set.size < quantity) {
    set.add(Math.floor(Math.random() * max) + 1)
  }
  return set
}

const arr = Array.from(myRandomInts(5, 25))

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
      {
        arr && arr.map((num, index)=>{
          return(
           <div className={styles.card} key={index}>
             <Image
              src={`/images/${num}.png`}
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={250}
              height={60}
              priority
           
            />
            <p className='text-center'>{days[index]}</p>
           </div>
          )
        })          
      } 
      </div>
    
      <h1 className='text-3xl font-bold p-6'>
       What to Wear
      </h1>
      <div className={styles.description}>
        <p>
         The more choices you make throughout the day, the harder each one becomes for your brain.
        </p>
       </div>
   
    </main>
  )
}
