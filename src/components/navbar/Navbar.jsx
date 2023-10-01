import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import AuthLink from '../authLink/AuthLink'
import ThemeToggle from '../themeToggle/ThemeToggle'


const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt='facebook' width={24} height={24} />
        <Image src="/instagram.png" alt='instagram' width={24} height={24} />
        <Image src="/tiktok.png" alt='tiktok' width={24} height={24} />
        <Image src="/youtube.png" alt='youtube' width={24} height={24} />
      </div>
      <div className={styles.logo}>Webtech</div>
      <div className={styles.links}>
         <ThemeToggle/>
         <Link href="/" className={styles.link}>Home</Link>
         <Link href="/contact" className={styles.link}>Contact</Link>
         <Link href="/about" className={styles.link}>About</Link>
         <AuthLink/>
      </div>
    </div>
  )
}

export default Navbar