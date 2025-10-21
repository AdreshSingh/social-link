
import './App.css'

function App() {
  

  return (
    <>
      <div className='min-h-screen bg-Grey-900 flex items-center justify-center text-white'>
        <div className='bg-Grey-800 rounded-lg p-10 text-center flex flex-col items-center'>
          <img src="/assets/images/avatar-jessica.jpeg" alt="user profile" className='rounded-full size-24'/>
          <div className='text-3xl font-semibold'>Jessica Randall</div>
          <div className='text-sm text-green-400 font-semibold'>London, United Kingdom</div>
          <div>"Front-end developer and avid reader"</div>

          <div  className='w-full p-2 bg-Grey-700 rounded-md m-2 font-bold'>Github</div>
          <div  className='w-full p-2 bg-Grey-700 rounded-md m-2 font-bold'>Frontend Mentor</div>
          <div  className='w-full p-2 bg-Grey-700 rounded-md m-2 font-bold'>Linkdin</div>
          <div  className='w-full p-2 bg-Grey-700 rounded-md m-2 font-bold'>Twitter</div>
          <div  className='w-full p-2 bg-Grey-700 rounded-md m-2 font-bold'>Instagram</div>
        </div>
      </div>
    </>
  )
}

export default App
