import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/Root'
import React, { Suspense } from 'react'
import Loader from './components/loader/Loader'
import { useEffect, useState } from 'react'

const Home = React.lazy(()=> import ('./pages/Home')) 
const About = React.lazy(()=> import ('./pages/About')) 
const Services = React.lazy(()=> import('./pages/Services') ) 
const Industries = React.lazy(()=> import('./pages/Industries') ) 
const Contact = React.lazy(()=> import('./pages/Contact') ) 

function App() {

  const [ loading, setLoading] = useState(true);
  useEffect(()=>{
    const images = [
      './assets/aboutLander.png',
      './assets/abouts.png',
      './assets/arrowR.png',
      './assets/backgroundVector.png',
      './assets/balloon.png',
      './assets/brandImage.png',
      './assets/chorus.png',
      './assets/close.png',
      './assets/footer.png',
      './assets/girlImg.png',
      './assets/hamMenu.png',
      './assets/hero.png',
      './assets/industryLander.png',
      './assets/iphoneTransparent.png',
      './assets/lander_image.jpg',
      './assets/landerImage1.png',
      './assets/logo.png',
      './assets/manArt.png',
      './assets/menuUp.png',
      './assets/nasa.png',
      './assets/Our-Mission.png.png',
      './assets/Our-Philosophy.png.png',
      './assets/Our-Strategy.png.png',
      './assets/Our-Vision.png.png',
      './assets/pantera.png',
      './assets/Plus.png',
      './assets/reddit.png',
      './assets/search_icon.png',
      './assets/service1.png',
      './assets/service2.png',
      './assets/service3.png',
      './assets/service4.png',
      './assets/serviceMan.png',
      './assets/shakehand.png',
      './assets/Tata Consultancy Services - png 0.png',
      './assets/testimo.png',
      './assets/thano.png',
      './assets/user1.png',
      './assets/vector2.png',
      './assets/Xmark.png'
    ];

    cacheImages(images);
  },[])

  const cacheImages = async (srcArr)=>{
      const promises = await srcArr.map((src)=>{
        return new Promise((resolve, reject)=>{
          const img = new Image();

          img.src = src;
          img.onload = resolve();
          img.onerror = reject();
        })
      })
      await Promise.all(promises);
      setLoading(false);
  }

  const router = createBrowserRouter(
      [
        {
          path: '/',
          element: <Root/>,
          children: [
            {
              path: '/',
              element:
               <Suspense fallback={<Loader/>}><Home/></Suspense>
            },
            {
              path: '/about',
              element: <Suspense fallback={<Loader/>}><About/></Suspense>
            },
            {
              path: '/service',
              element: <Suspense fallback={<Loader/>}><Services/></Suspense>
            },
            {
              path: '/industries',
              element: <Suspense fallback={<Loader/>}><Industries/></Suspense>
            },
            {
              path: '/contact',
              element: <Suspense fallback={<Loader/>}><Contact/></Suspense>
            },
          ],
        },
      ]
  );

  return (
    <div className=' font-gilroy'>
      {loading ? 
        <Loader/> 
      :
       <RouterProvider router={router}/>
      }
    </div>
  )
}

export default App
