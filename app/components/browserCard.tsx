import Image from "next/image"
import divider from '../../public/bg-dots.svg';

export default function BrowserCard({item, image, version, name } : { item: number, image : string, version: string, name: string }) {
      return(
            <div className={`shadow-xl w-52 flex flex-col rounded-lg p-2 h-fit ${item === 2? 'self-center' : ''} ${item === 3? 'self-end' : ''}`}>
                  <Image src={image} width={100} height={100} alt="chrome" className="self-center mb-4" />
                  <h2 className="text-lg font-bold self-center mb-4">Add to {name}</h2>
                  <p className="self-center text-gray-500 text-sm mb-8">Minimum version {version}</p>
                  <Image src={divider} alt="divider" />
                  <button className="bg-blue-600 p-2 px-2 self-center text-white rounded mr-4 text-xs mt-8 mx-auto">Add & and Install Extension</button>
            </div>
      )
}