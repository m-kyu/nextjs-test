import HeadMeta from '@/pages/src/HeadMeta'
import Layout from '@/pages/src/Layout'
import List from '@/List'
import Update from '@/pages/src/Update'
import Write from '@/pages/src/Write'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [a, setA] = useState(false);
  const aa = useRef();

  useEffect(() => {
    window.onclick = (e) => {

      if (e.target.name == 'ip') {
        setA(!a)
      } else {
        setA(false)
      }
    };
  })





  return (
    <>
      <button name="ip">{a.toString()}</button>

      <Layout>
        <HeadMeta title="index" />
        <List />
      </Layout>
    </>
  )
}
