import Image from "next/image"
import illustration1 from '../../public/illustration-features-tab-1.svg';

export default function SimpleFeature() {
      return (
            <div className='w-full -pl-[5%] mb-12 flex gap-96'>
                  <div className='w-2/5 bg-blue-600 rounded-r-full py-8'>
                        <Image src={illustration1} width={400} height={400} alt='tab 1' className='ml-96 -mt-20' />
                  </div>
                  <div>
                        <h2 className='text-3xl font-semibold mb-8'>Bookmark in one click</h2>
                        <p className='w-1/2 text-gray-500 mb-8'>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites</p>
                        <button className="bg-blue-600 p-2 px-4 text-white rounded mr-4 text-sm">more info</button>
                  </div>
            </div>
      )
}