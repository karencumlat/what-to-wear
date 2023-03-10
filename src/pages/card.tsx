import { useEffect } from "react"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../app/page.module.css'

export default function Card(){
 
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  const arr:number[] = [];

  useEffect(()=>{
    while(arr.length < 5){
    const r = Math.floor(Math.random() * 24) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr.length)
console.log(arr);
  })
return (
  <main className={styles.main}>
    <div className={styles.grid}>
    {
      arr&&arr.map((num, index)=>{
        return(
         <div key={num} className={styles.card}>
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