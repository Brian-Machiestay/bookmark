import Image from "next/image"
import illustration1 from '../../public/illustration-features-tab-1.svg';

export default function SimpleFeature() {
      return (
            <div className='w-full mb-12 flex gap-8 md:gap-52 flex-col md:flex-row'>
                  <div className='md:w-2/5 bg-blue-600 rounded-r-full md:py-8 flex justify-end w-4/6 py-12'>
                        <Image src={illustration1} width={400} height={400} alt='tab 1' className='md:-mr-40 -mt-24 -mr-16' />
                  </div>
                  <div className="text-center md:text-left">
                        <h2 className='text-3xl font-semibold mb-8'>Bookmark in one click</h2>
                        <p className='md:w-1/2 w-5/6 text-gray-500 mb-8 md:mx-0 mx-auto'>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites</p>
                        <button className="bg-blue-600 p-2 px-4 text-white rounded mr-4 text-sm">more info</button>
                  </div>
            </div>
      )
}