import illustration2 from '../../public/illustration-features-tab-2.svg';
import Image from 'next/image';

export default function SpeedyFeature() {
      return (
            <div className='w-full -pl-[5%] mb-12 flex gap-96'>
                  <div className='w-2/5 bg-blue-600 rounded-r-full py-2'>
                        <Image src={illustration2} width={400} height={400} alt='tab 1' className='ml-96 -mt-20' />
                  </div>
                  <div>
                        <h2 className='text-3xl font-semibold mb-8'>Intelligent search</h2>
                        <p className='w-1/2 text-gray-500 mb-8'>Our powerful search feature would help you find saved sites in no time at all. No need to trawl through all of your bookmarks</p>
                        <button className="bg-blue-600 p-2 px-4 text-white rounded mr-4 text-sm">more info</button>
                  </div>
            </div>
      )
}