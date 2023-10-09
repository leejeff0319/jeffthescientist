import Image from 'next/image';
import SkyButton from '../components/SkyButton'

export default function Home() {

  return (
    <div className="  bg-blue-100">

      <div className="h-[37vh] flex justify-center">
        <div className="absolute w-full h-[30vh]">
          
          {/* Transition Button*/}
          <SkyButton />

        </div>
      </div>    
    
    </div>
  )
}
