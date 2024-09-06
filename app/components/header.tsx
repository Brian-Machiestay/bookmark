import Image from "next/image";
import menu from '../../public/icon-hamburger.svg';

import bookmark from '../../public/logo-bookmark.svg';
import bookmarkLight from '../../public/logo-bookmark-light.svg';
import close from '../../public/icon-close.svg';
import twitter from '../../public/icon-twitter.svg';
import facebook from '../../public/icon-facebook.svg';

export default function Header() {
      return (
      <header className="flex items-center  px-4 md:p-0 md:mx-[5%] my-8 gap-12 md:mb-48 mb-24">
          <a className=""><Image src={bookmark} width={150} height={150} alt="logo"></Image></a>
          <a className="ml-[auto] hidden md:block">FEATURES</a>
          <a className="hidden md:block">PRICES</a>
          <a className="hidden md:block">CONTACT</a>
          <button className="bg-red-500 p-1 px-4 text-white rounded font-bold hidden md:block">LOGIN</button>
          <button className="ml-auto md:hidden peer"><Image src={menu} width={20} height={150} alt="menu"></Image></button>
          <div className="fixed bg-blue-950 left-0 top-0 min-h-full w-full opacity-95 px-[5%] flex flex-col hidden peer-focus:flex">
            <div className="flex justify-between py-4">
              <a className="text-white text-2xl font-bold p-4"><Image src={bookmarkLight} alt="logo" /></a>
              <button><Image src={close} alt="close" /></button>
            </div>
            <div className="flex flex-col text-white justify-center items-center *:border-t *:border-gray-700 mb-8">
              <a className="w-full text-center py-4">FEATURES</a>
              <a className="w-full text-center py-4">PRICING</a>
              <a className="w-full text-center py-4 border-b">CONTACT</a>
            </div>
            <button className="w-full border-2 p-1 px-4 text-white rounded font-bold p-2">LOGIN</button>
            <div className='md:ml-auto flex gap-8 items-center mt-auto justify-center my-8'>
              <a className='md:ml-auto'><Image src={facebook} alt='facebook logo' /></a>
              <a><Image src={twitter} alt='facebook logo' /></a>
          </div>
          </div>
      </header>
      )
}