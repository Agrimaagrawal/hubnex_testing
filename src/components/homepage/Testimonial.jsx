import MobileNavbar from "../navbar/MobileNavbar"
import Navbar from "../navbar/Navbar"

const Testimonial = () => {

  return (

    <div className=' h-screen md:flex w-full md:bg-balloon bg-balloonMob bg-blue-300 relative bg-cover bg-no-repeat bg-center'>
        {/* <div className="md:hidden w-full">
            <Navbar/>
            <MobileNavbar/>
        </div> */}
        <div className=' w-full md:w-[75%] h-full m-auto flex flex-col justify-around items-center md:items-start md:justify-around'>

            <div className=" flex md:flex-col flex-row w-full items-center md:gap-10 md:items-start justify-center">
                <div className=' text-2xl md:text-4xl flex-1 font-semibold text-blue-700 text-center md:text-start'>
                    <span className=' text-4xl md:text-7xl'>200</span>
                    <p>leading businesses</p>
                </div>
                <div className=' text-2xl md:text-4xl flex-1 font-semibold text-blue-700 text-center md:text-start'>
                    <span className=' text-4xl md:text-7xl'>200</span>
                    <p>leading businesses</p>
                </div>
            </div>

            <div className=' w-[250px] flex-2 pt-48 md:w-[350px] md:pt-0 text-blue-700 font-semibold text-base text-center md:text-start'>
                <p className=''>not only do we help businesses reach their goals, but help build the empire</p>
                <span>- Sathya Nadela</span>
            </div>
        </div>
    </div>

  )
}

export default Testimonial