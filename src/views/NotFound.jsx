import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <main className='grid place-items-center min-h-screen bg-yellow_pale overflow-x-hidden'>
      <div className='flex flex-col items-center gap-6 border-2 rounded-md pb-5'>
        <img src='/notfound.webp' className='w-72 max-w-full rounded-md' />
        <h3>This page could not be found</h3>
        <Link to='/' className='inline-flex items-center justify-center rounded-lg bg-mint px-4 py-2 text-white font-medium shadow hover:bg-pink hover:text-yellow_pale focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>Back to Home</Link>
      </div>
    </main>
  )
}

export default NotFound
