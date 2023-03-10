'use client';

import Image from 'next/image'
import { useState } from 'react';
import styles from './page.module.css'


export default function Home() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  const [set, reSet] = useState(false)
  const arr = [];
  while(arr.length < 5){
      const r = Math.floor(Math.random() * 24) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
  }
  
  console.log(arr);
  console.log(arr.length);

  return (
    <main className={styles.main}>
    
      <div className={styles.grid}>
      {
        arr.map((num, index)=>{
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
      <button onClick={()=>{reSet(!set)}}>What to Wear</button>
      </h1>
      <div className={styles.description}>
        <p>
         The more choices you make throughout the day, the harder each one becomes for your brain.
        </p>
       </div>
   
    </main>
  )
}
