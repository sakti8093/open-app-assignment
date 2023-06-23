import Image from 'next/image'
import LeftBar from './components/login/LeftBar'

export default function Home() {
  return (
    <div className='w-full flex' >
      <LeftBar />
      <div className='border border-black w-full flex items-center justify-center ' >
          <div>
            <h1 className='text-4xl font-bold' >Sign in</h1>
            <p className='mt-1' >Sign in into your account</p>
              <form className='w-[385px] p-8 bg-white rounded-[20px] mt-6' action="">
                <label htmlFor="">Email address</label>
                <input className='w-full mt-2 h-10 px-2 py-4 rounded-xl' type="email" />
                <label className='mt-5' htmlFor="">Password</label>
                <input className='w-full mt-2 h-10 px-2 py-4 rounded-xl' type="password" />
                <p className='mt-5 text-[#346BD4]' >Forgot Password ?</p>
                <button  className='bg-[#000] text-white w-full h-10 rounded-xl mt-5' >sign in</button>
              </form>
              <p className='text-center text-base mt-5 text-[#858585]' >Don’t have an account? <span className='text-[#346BD4]' >Register here</span></p>
          </div> 
      </div>
    </div>
  )
}
