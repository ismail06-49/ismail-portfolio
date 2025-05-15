import Image from "next/image";
import Profile from '@/public/my-profile.jpg';

const Loading = () => {
    return (
        <div className='absolute top-[50%] -translate-y-[50%] flex justify-center items-center invisible animate-loading'>
            <Image src={Profile} alt="Project 1" className="w-[30%] aspect-square rounded-full mb-2" />
        </div>
    )
}

export default Loading
