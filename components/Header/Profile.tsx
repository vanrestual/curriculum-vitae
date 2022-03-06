import { HTMLAttributes } from 'react';

interface ProfileProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  profession: string;
}

const Profile = ({ name, profession, ...props }: ProfileProps) => {
  return (
    <div className="grow truncate text-center print:text-left md:text-left" {...props}>
      <h1 className='text-2xl truncate tracking-wide text-blue-500 font-bold'>{name}</h1>
      <h2 className='text-lg truncate tracking-wide text-gray-400 font-bold'>{profession}</h2>
    </div>
  )
}

export default Profile;
