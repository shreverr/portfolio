import { FC } from 'react'

interface loadingProps {

}

const Loader: FC<loadingProps> = ({ }) => {
  return (
    <div className='h-screen w-screen text-white bg-black text-3xl font-bold'>
      Loading...
    </div>
  )
}

export default Loader