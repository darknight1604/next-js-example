"use client"

import { useEffect, useState } from 'react';
import styles from './page.module.css'
import { getDictionary } from '@/lib/utils/dictionaries';

export default function Home() {
  const [dict, setDict] = useState(null);
  
  useEffect(() => {
    const getDict = async () => {
      return await getDictionary("vi");
    }
    getDict().then((value) => setDict(value));
  }, [dict]);
  return (
    <main className={styles.main}>
      { dict != null && <span style={{ textAlign: "center" }}>{dict.signin_greeting}</span> }
    </main>
  )
}
