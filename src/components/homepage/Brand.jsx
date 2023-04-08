import { Link } from 'react-router-dom'

const Brand = () => {
    
  return (
 
    <div className='w-full h-full flex justify-center flex-col items-center relative bg-moon bg-cover bg-no-repeat bg-center'>
        <div className=' h-full w-full text-white flex justify-center'>
            <div className=' flex flex-col md:justify-start  w-[300px] mt-36 md:mt-14  md:h-full md:w-full items-center'>
                <h1 className=' text-4xl md:text-6xl  font-gilroy-bold text-center'>helping you build products</h1>
                <span className=' text-black pt-5 font-gilroy-bold text-4xl md:text-6xl'>that shine</span>
            </div>
        </div>
        <div className=' text-white'>
            <div className=' flex flex-col items-center font-semibold gap-5 text-xl sm:text-2xl mb-28 md:mb-14'>
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