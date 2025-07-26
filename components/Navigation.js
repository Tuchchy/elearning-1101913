"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./Navigation.module.css"

export default function Navigation() {
  const [role,setRole] =  useState(null)

  useEffect(()=>{
    // CHANGE THIS: get real data login user role!
    setRole('guest') //guest, user, admin
  }, [role])

  return (
    <nav className={style.navigation} aria-label="Main Navigation">
      <div className={style.leftSection}>
        <Link href="/" className={style.logoContainer}>
          <Image src="/logo.png" alt="Logo" fill className={style.logoImage} />
        </Link>
      </div>

      <ul className={style.navLinks}>
        <li><Link href="/activity">Activity</Link></li>
        {role !== "guest" && (
          <>
            <li><Link href="/self-learning">Self-learning</Link></li>
            <li><Link href="/notifications">🔔</Link></li>
            <li><Link href="/profile">👤</Link></li>
          </>
        )}
        {role == "guest" && (
          <>
            <li><Link href="/notifications" className={style.signinBtn}>Sign In</Link></li>
            <li><Link href="/profile" className={style.signupBtn}>Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
  
}