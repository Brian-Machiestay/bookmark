import illustration2 from '../../public/illustration-features-tab-2.svg';
import Image from 'next/image';

export default function SpeedyFeature() {
      return (
            <div className='w-full mb-12 flex md:gap-52 gap-8 flex-col md:flex-row'>
                  <div className='md:w-2/5 bg-blue-600 rounded-r-full md:py-2 flex justify-end w-4/6 py-8'>
                        <Image src={illustration2} width={400} height={400} alt='tab 1' className='md:-mr-40 -mt-24 -mr-16' />
                  </div>
                  <div className="text-center md:text-left">
                        <h2 className='text-3xl font-semibold mb-8'>Intelligent search</h2>
                        <p className='md:w-1/2 w-5/6 text-gray-500 mb-8 mx-auto md:mx-0'>Our powerful search feature would help you find saved sites in no time at all. No need to trawl through all of your bookmarks</p>
                        <button className="bg-blue-600 p-2 px-4 text-white rounded mr-4 text-sm">more info</button>
                  </div>
            </div>
      )
}