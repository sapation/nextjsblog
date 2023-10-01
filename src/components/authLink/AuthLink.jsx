"use client";

import { useState } from "react";
import styles from "./authLink.module.css"
import Link from 'next/link';
import { signOut, useSession } from "next-auth/react";

const AuthLink = () => {
  const [open, setOpen] = useState(false)
  //temporary
    const {status} = useSession();

  return (
    <>
        {status === "unauthenticated" ? (
            <Link href="/login" className={styles.link}>Login</Link>
        ) : (
            <>
            <Link href="/write" className={styles.link}>Write</Link>
            <span className={styles.link}>Logout</span>
            </>
        )}
        <div className={styles.burger} onClick={() => log()}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </div>
        {open && (
          <div className={styles.responsiveMenu}>
            <Link href='/'>Home</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Contact</Link>
            {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
        ) : (
            <>
            <Link href="/write">Write</Link>
            <Link className={styles.link} onClick={signOut}>Logout</Link>
            </>
        )}
          </div>
        )}
    </>
  )
}

export default AuthLink