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
import bookmark from '../public/logo-bookmark-light.svg';
import error from '../public/icon-error.svg';
import twitter from '../public/icon-twitter.svg';
import facebook from '../public/icon-facebook.svg';



export default function Home() {

  const [feature, setActiveFeature] = useState('simple');

  const displayActiveFeature = () => {
    if (feature === 'simple') return <SimpleFeature />
    if (feature === 'speedy') return <SpeedyFeature />
    if (feature === 'sharing') return <SharingFeature />
  }


  return (
    <section className="">
      <section className="flex justify-between mb-32 flex-col-reverse md:flex-row">
        <div className="md:w-3/6 mx-[5%]">
          <h1 className="md:text-7xl md:font-medium font-bold mb-8 text-3xl text-center md:text-left mt-8 md:mt-0">A Simple Bookmark Manager</h1>
          <p className="mb-8 text-gray-600 text-center md:mx-0 md:text-left mx-auto w-5/6">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free</p>
          <div className='flex justify-center md:block'>
            <button className="bg-blue-600 p-2 px-4 text-white rounded mr-4 text-sm">Get it on Chrome</button>
            <button className="bg-gray-200 p-2 px-4 text-black rounded shadow-lg text-sm">Get it on Firefox</button>
          </div>
        </div>
        <div className="bg-blue-600 md:w-2/6 md:mt-2 rounded-l-full w-4/6 self-end py-12 md:py-0">
          <Image src={hero} alt="hero" width={600} height={400} className='-mt-24 md:-ml-44 -ml-16' />
        </div>
      </section>
      <h2 className='text-center font-bold md:font-medium md:text-6xl mb-8 text-3xl'>Features</h2>
      <p className='text-center text-gray-600 w-5/6 md:w-2/5 mx-[auto] text-lg mb-16'>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go</p>
      <section className='flex flex-col items-center '>
        <div className='flex md:flex-row flex-col w-fit justify-center border-b border-gray-300 mb-24 *:border-t md:*:border-t-0'>
          <button className='px-12 focus:border-b-4 focus:outline-none focus:border-b-red-500 pb-4' autoFocus={true} onClick={() => setActiveFeature('simple')}>Simple Bookmarking</button>
          <button className='px-12 focus:border-b-4 pb-4 focus:border-b-red-500' onClick={() => setActiveFeature('speedy')}>Speedy Searching</button>
          <button className='px-12 focus:border-b-4 focus:border-b-red-500 pb-4' onClick={() => setActiveFeature('sharing')}>Easy Sharing</button>
        </div>
        {
          displayActiveFeature()
        }
      </section>
      <h2 className='text-center font-bold md:font-medium md:text-5xl my-8 text-2xl'>Download the extension</h2>
      <p className='text-center text-gray-600 md:w-2/5 w-5/6 mx-[auto] text-lg mb-16'>We've got more browsers in the pipeline. Please let us know if you've got a favourite you'd like us to prioritize</p>
      <section className='flex gap-16 mb-8 w-fit mx-auto min-h-96 flex-col md:flex-row'>
        <BrowserCard image={chrome} version='62' item={1} name='Chrome'/>
        <BrowserCard image={firefox} version='55' item={2} name='Firefox' />
        <BrowserCard image={opera} version='46' item={3} name='Opera' />
      </section>
      <h2 className='text-center font-bold md:font-medium md:text-4xl text-2xl my-8 mt-24'>Frequently Asked Questions</h2>
      <p className='text-center text-gray-600 md:w-2/5 w-5/6 mx-[auto] text-lg mb-16'>Here are some of our FAQs. If you have any other questions you'll like answered please feel free to email us</p>
      <div className='flex mb-8 flex-col items-center divide-gray-200'>
        <button className='md:w-1/3 w-5/6 border-t-2 p-1 py-2 border-b-2 flex justify-between items-center peer/first group'><p className='group-hover:text-orange-500 group-focus:text-orange-500'>What is Bookmark?</p> <p className='text-xl group-hover:text-blue-500 group-focus:text-blue-500'>&#8964;</p></button>
        <div className='md:w-1/3 w-5/6 flex hidden peer-focus/first:flex p-1'>
          <p className='border-b-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore at porro necessitatibus maxime aspernatur. Est, magni repellat molestias debitis tenetur, voluptatum nemo porro perspiciatis amet, ex labore necessitatibus voluptatem sunt.</p>
          <button className='text-red-400 font-bold start h-fit peer'>&#8963;</button>
        </div>
        <button className='md:w-1/3 w-5/6 p-1 py-2 border-b-2 flex justify-between items-center peer/second group'><p className='group-hover:text-orange-500 group-focus:text-orange-500'>How can I request a new browser?</p> <p className='text-xl group-hover:text-blue-500 group-focus:text-blue-500'>&#8964;</p></button>
        <div className='md:w-1/3 w-5/6 flex hidden peer-focus/second:flex p-1'>
          <p className='border-b-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore at porro necessitatibus maxime aspernatur. Est, magni repellat molestias debitis tenetur, voluptatum nemo porro perspiciatis amet, ex labore necessitatibus voluptatem sunt.</p>
          <button className='text-red-400 font-bold start h-fit peer'>&#8963;</button>
        </div>
        <button className='md:w-1/3 w-5/6 p-1 py-2 border-b-2 flex justify-between items-center peer/third group'><p className='group-hover:text-orange-500 group-focus:text-orange-500'>Is there a mobile app?</p> <p className='text-xl group-hover:text-blue-500 group-focus:text-blue-500'>&#8964;</p></button>
        <div className='md:w-1/3 w-5/6 flex hidden peer-focus/third:flex p-1'>
          <p className='border-b-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore at porro necessitatibus maxime aspernatur. Est, magni repellat molestias debitis tenetur, voluptatum nemo porro perspiciatis amet, ex labore necessitatibus voluptatem sunt.</p>
          <button className='text-red-400 font-bold start h-fit peer'>&#8963;</button>
        </div>
        <button className='md:w-1/3 w-5/6 p-1 py-2 border-b-2 flex justify-between items-center peer/fourth group'><p className='group-hover:text-orange-500 group-focus:text-orange-500'>What about other Chromium browsers?</p> <p className='text-xl group-hover:text-blue-500 group-focus:text-blue-500'>&#8964;</p></button>
        <div className='md:w-1/3 w-5/6 flex hidden peer-focus/fourth:flex p-1'>
          <p className='border-b-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore at porro necessitatibus maxime aspernatur. Est, magni repellat molestias debitis tenetur, voluptatum nemo porro perspiciatis amet, ex labore necessitatibus voluptatem sunt.</p>
          <button className='text-red-400 font-bold start h-fit peer'>&#8963;</button>
        </div>
        <button className="bg-blue-700 p-2 px-4 text-white rounded text-sm mt-8">more info</button>
      </div>
      <div className='bg-blue-600 p-12 text-white font-bold flex flex-col items-center gap-8 mt-20'>
        <h2 className='uppercase tracking-widest'>35,000+ already joined</h2>
        <p className='md:text-3xl text-2xl md:w-1/4 w-full text-center'>Stay up-to-date with what we are doing</p>
        <div className='flex gap-4 md:flex-row flex-col'>
          <div className='group'>
            <div className='group flex justify-center items-center bg-white rounded group-has-[:invalid]:rounded-b-none pr-2 peer group-has-[:invalid]:ring ring-red-500'>
              <input type='email' className='text-black p-2 outline-none invalid:ring-red-500 rounded font-normal peer w-full' placeholder='Enter an email address' />
              <Image src={error} alt='logo' className='w-6 h-6 hidden peer-invalid:block'  />
            </div>
            <p className='bg-red-500 p-1 ring ring-red-500 rounded-b text-xs italic hidden group-has-[:invalid]:block mt-1'>Whoops, make sure its an email</p>
          </div>
          <button className='p-2 px-4 text-white rounded text-sm bg-red-500 h-fit'>Contact Us</button>
        </div>
      </div>
      <header className="flex items-center px-[5%] py-8 gap-12 bg-blue-950 text-white flex-col md:flex-row">
          <a><Image src={bookmark} width={150} height={150} alt="logo"></Image></a>
          <a className="">FEATURES</a>
          <a>PRICES</a>
          <a>CONTACT</a>
          <div className='md:ml-auto flex gap-8 items-center'>
            <a className='md:ml-auto'><Image src={facebook} alt='facebook logo' /></a>
            <a><Image src={twitter} alt='facebook logo' /></a>
          </div>
      </header>
    </section>
  )
}
