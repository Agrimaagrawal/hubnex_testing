import React from 'react'
import search from '@assets/search_icon.png'
import close from '@assets/Xmark.png'
import { useState } from 'react'

const Search = ({toggler}) => {

  const [checkOpen, setCheckOpen] = useState(false)

  const handleCloseSearch = ()=>{
    toggler ? setCheckOpen((prev)=>!prev) : setCheckOpen(false)
  }
  return (
    <>
    {!checkOpen &&
      <div className=' h-screen bg-transparent w-full justify-center items-center  flex z-[100] top-0 fixed'>
          <div className=' w-[80%] md:m-[20%] h-[600px] bg-gray-200 flex flex-col rounded-xl overflow-hidden'>
              <label className=' bg-black w-full flex h-12 items-center px-5'>
                  <img src={search} className='w-5 h-5 '/>
                  <input type='text' className=' bg-black w-[95%] h-full outline-none px-5 text-white' placeholder='Search something...'/>
                  <img onClick={handleCloseSearch} className=' cursor-pointer' src={close}/>
              </label>
          </div>
      </div>
    }
    </>
  )
}

export default Search