import Image from "next/image"
import illustration3 from '../../public/illustration-features-tab-3.svg';



export default function SharingFeature() {
      return (
            <div className='w-full -pl-[5%] mb-12 flex gap-96'>
                  <div className='w-2/5 bg-blue-600 rounded-r-full py-4'>
                        <Image src={illustration3} width={400} height={400} alt='tab 1' className='ml-96 -mt-20' />
                  </div>
                  <div>
                        <h2 className='text-3xl font-semibold mb-8'>Share your bookmarks</h2>
                        <p className='w-1/2 text-gray-500 mb-8'>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button</p>
                        <button className="bg-blue-600 p-2 px-4 text-white rounded mr-4 text-sm">more info</button>
                  </div>
            </div>
      )
}