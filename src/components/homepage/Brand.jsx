import { Link } from 'react-router-dom'
import MobileNavbar from '../navbar/MobileNavbar'
import Navbar from '../navbar/Navbar'

const Brand = () => {
    
  return (
 
    <div className='w-full h-full flex justify-center flex-col items-center relative bg-moon bg-cover bg-no-repeat bg-center'>
        {/* <div className=' md:hidden w-full relative '>
            <Navbar/>
            <MobileNavbar/>
        </div> */}
        <div className=' h-full w-full text-white'>
            <div className=' flex flex-col justify-start mt-32 md:mt-14 h-full w-full items-center'>
                <h1 className=' text-4xl md:text-5xl font-semibold text-center'>helping you build products</h1>
                <span className=' text-black pt-5 font-semibold text-3xl md:text-5xl'>that shine</span>
            </div>
        </div>
        <div className=' text-white'>
            <div className=' flex flex-col items-center font-semibold gap-5 text-2xl mb-28 md:mb-14'>
                <div className=' flex flex-col items-center'>
                    <span>your have an idea?</span>
                    <span>we have a team</span>
                </div>
                <Link to='/service'><button className=' border-none bg-white py-1 px-5 rounded-full text-black text-base'>get started </button></Link>
            </div>
        </div>
    </div>
  )
}

export default Brand