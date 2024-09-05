'use client';
import hero from '../public/illustration-hero.svg';
import Image from 'next/image';
import { useState } from 'react';

import SimpleFeature from './components/simpleFeature';
import SpeedyFeature from './components/speedyFeature';
import SharingFeature from './components/sharingFeature';
import BrowserCard from './components/browserCard';

import chrome from '../public/logo-chrome.svg';
import firefox from '../public/logo-firefox.svg';
import opera from '../public/logo-opera.svg';



export default function Home() {

  const [feature, setActiveFeature] = useState('simple');

  const displayActiveFeature = () => {
    if (feature === 'simple') return <SimpleFeature />
    if (feature === 'speedy') return <SpeedyFeature />
    if (feature === 'sharing') return <SharingFeature />
  }


  return (
    <section className="ml-[5%]">
      <section className="flex justify-between mb-32">
        <div className="w-3/6">
          <h1 className="text-7xl font-medium mb-8">A Simple Bookmark Manager</h1>
          <p className="mb-8 text-gray-600">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free</p>
          <div>
            <button className="bg-blue-600 p-2 px-4 text-white rounded mr-4 text-sm">Get it on Chrome</button>
            <button className="bg-gray-200 p-2 px-4 text-black rounded shadow-lg text-sm">Get it on Firefox</button>
          </div>
        </div>
        <div className="bg-blue-600 w-2/6 mt-2 rounded-l-full">
          <Image src={hero} alt="hero" width={600} height={400} className='-mt-24 -ml-44' />
        </div>
      </section>
      <h2 className='text-center font-medium text-6xl mb-8'>Features</h2>
      <p className='text-center text-gray-600 w-2/5 mx-[auto] text-lg mb-16'>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go</p>
      <section className='flex flex-col items-center -ml-[5%]'>
        <div className='flex w-fit justify-center border-b border-gray-300 mb-24'>
          <button className='px-12 focus:border-b-4 focus:outline-none border-red-500 pb-4' autoFocus={true} onClick={() => setActiveFeature('simple')}>Simple Bookmarking</button>
          <button className='px-12 focus:border-b-4 border-red-500 pb-4' onClick={() => setActiveFeature('speedy')}>Speedy Searching</button>
          <button className='px-12 focus:border-b-4 border-red-500 pb-4' onClick={() => setActiveFeature('sharing')}>Easy Sharing</button>
        </div>
        {
          displayActiveFeature()
        }
      </section>
      <h2 className='text-center font-medium text-5xl my-8'>Download the extension</h2>
      <p className='text-center text-gray-600 w-2/5 mx-[auto] text-lg mb-16'>We've got more browsers in the pipeline. Please let us know if you've got a favourite you'd like us to prioritize</p>
      <section className='flex gap-16 mb-8 w-fit mx-auto min-h-96'>
        <BrowserCard image={chrome} version='62' item={1} name='Chrome'/>
        <BrowserCard image={firefox} version='55' item={2} name='Firefox' />
        <BrowserCard image={opera} version='46' item={3} name='Opera' />
      </section>
      <h2 className='text-center font-medium text-4xl my-8 mt-24'>Frequently Asked Questions</h2>
      <p className='text-center text-gray-600 w-2/5 mx-[auto] text-lg mb-16'>Here are some of our FAQs. If you have any other questions you'll like answered please feel free to email us</p>
      <div className='flex mb-8 mx-auto flex-col items-center divide-gray-200'>
        <button className='w-1/3 border-t-2 p-1 border-b-2 flex justify-between items-center peer'><p>What is Bookmark?</p> <p className='text-xl'>&#8964;</p></button>
        <div className='w-1/3 flex hidden peer-focus:flex p-1'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore at porro necessitatibus maxime aspernatur. Est, magni repellat molestias debitis tenetur, voluptatum nemo porro perspiciatis amet, ex labore necessitatibus voluptatem sunt.</p>
          <button className='text-red-400 font-bold start h-fit peer'>&#8963;</button>
        </div>
        <button className='w-1/3 p-1 border-b-2 flex justify-between items-center peer'><p>What is Bookmark?</p> <p className='text-xl'>&#8964;</p></button>
        <div className='w-1/3 flex hidden peer-focus:flex p-1'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore at porro necessitatibus maxime aspernatur. Est, magni repellat molestias debitis tenetur, voluptatum nemo porro perspiciatis amet, ex labore necessitatibus voluptatem sunt.</p>
          <button className='text-red-400 font-bold start h-fit peer'>&#8963;</button>
        </div>
        <button className='w-1/3 p-1 border-b-2 flex justify-between items-center peer'><p>What is Bookmark?</p> <p className='text-xl'>&#8964;</p></button>
        <div className='w-1/3 flex hidden peer-focus:flex p-1'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore at porro necessitatibus maxime aspernatur. Est, magni repellat molestias debitis tenetur, voluptatum nemo porro perspiciatis amet, ex labore necessitatibus voluptatem sunt.</p>
          <button className='text-red-400 font-bold start h-fit peer'>&#8963;</button>
        </div>
      </div>
    </section>
  )
}
