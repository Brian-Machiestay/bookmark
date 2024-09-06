import Image from "next/image"
import illustration3 from '../../public/illustration-features-tab-3.svg';



export default function SharingFeature() {
      return (
            <div className='w-full mb-12 flex md:gap-52 gap-8 md:flex-row flex-col'>
                  <div className='md:w-2/5 bg-blue-600 rounded-r-full md:py-4 flex justify-end w-4/6 py-8'>
                        <Image src={illustration3} width={400} height={400} alt='tab 1' className='md:-mr-40 -mt-24 -mr-16' />
                  </div>
                  <div className="text-center md:text-left">
                        <h2 className='text-3xl font-semibold mb-8'>Share your bookmarks</h2>
                        <p className='md:w-1/2 w-5/6 text-gray-500 mb-8 md:mx-0 mx-auto'>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button</p>
                        <button className="bg-blue-600 p-2 px-4 text-white rounded mr-4 text-sm">more info</button>
                  </div>
            </div>
      )
}