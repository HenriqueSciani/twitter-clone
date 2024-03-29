import Image from 'next/image'
import Head from 'next/head';
import Sidebar from '../components/Sidebar.js'; 

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by Nextjs" />
        <link rel='stylesheet' href='/favicon.ico' />
      </Head>
      
      <main className='flax min-h-screen mx-auto'>
        <Sidebar />
      </main>
    </div>
  )
}