import Link from 'next/link';
import Image from 'next/image';

export default function HomeScreen(){
  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded max-w-4xl w-full overflow-hidden">
      <div className="hidden md:block md:w-1/2">
        <Image
          src="/images/HomeScreen.svg"
          alt="Login Animation"
          width={400}
          height={80}
          loading="lazy"
        />
        </div>
    </div>
  );
}
