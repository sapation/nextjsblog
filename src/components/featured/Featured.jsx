import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'


const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Webtech here!</b> Discover my stories about creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, illum?</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestias amet 
            suscipit doloremque. Accusantium iure eligendi natus quod fuga 
            facere tempore reiciendis. Quae vitae ducimus ea quas cupiditate odit veritatis.
          </p>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default Featured