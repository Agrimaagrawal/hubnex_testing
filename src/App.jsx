import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/Root'
import React, { Suspense } from 'react'
import Loader from './components/loader/Loader'
import { useEffect, useState } from 'react'
import Access from './components/Access'
import ProtectedRoute from './components/ProtectedRoute'

const Home = React.lazy(()=> import ('./pages/Home')) 
const About = React.lazy(()=> import ('./pages/About')) 
const Services = React.lazy(()=> import('./pages/Services') ) 
const Industries = React.lazy(()=> import('./pages/Industries') ) 
const Contact = React.lazy(()=> import('./pages/Contact') ) 
const Startup = React.lazy(()=> import('./pages/Startup'))
const Admin = React.lazy(()=> import('./pages/Admin'))
const Dashboard = React.lazy(()=> import('./components/adminpage/Dashboard')) 
const Recruiter = React.lazy(()=> import('./components/adminpage/Recruiter')) 
const Company = React.lazy(()=> import('./components/adminpage/Company')) 
const CMS = React.lazy(()=> import('./components/adminpage/CMS')) 
const Payments = React.lazy(()=> import('./components/adminpage/Payments')) 
const Forms = React.lazy(()=> import('./components/adminpage/Forms')) 
const Referral = React.lazy(()=> import( './components/adminpage/Referral'))
const ManageRoles = React.lazy(()=> import('./components/adminpage/ManageRoles')) 
const Applications = React.lazy(()=> import( './components/adminpage/Applications'))
const Invoices = React.lazy(()=> import('./components/adminpage/Invoices')) 
const PushNotify = React.lazy(()=> import('./components/adminpage/PushNotify')) 
const Help = React.lazy(()=> import('./components/adminpage/Help')) 
const Healthcare=React.lazy(()=>import('./components/industrypage/Healthcare'))
const Invest=React.lazy(()=>import('./components/adminpage/Invest'))
const Terms =React.lazy(()=>import('./components/adminpage/Terms'))

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
              path:'/Healthcare',
              element:<Suspense fallback={<Loader/>}><Healthcare/></Suspense>
            },
            
            {
              path: '/contact',
              element: <Suspense fallback={<Loader/>}><Contact/></Suspense>
            },
            {
              path: '/startup-program',
              element: <Suspense fallback={<Loader/>}><Startup/></Suspense>
            },
            
            {
              path: '/access',
              element: <Suspense fallback={<Loader/>}><Access/></Suspense>
            },
            {
              path: '/admin',
              element:  <Suspense fallback={<Loader/>}><Admin/></Suspense>,
              children: [
                {
                  path: '/admin',
                  element: <Suspense fallback={<Loader/>}><Dashboard/></Suspense>
                },
                {
                  path: '/admin/recruiter',
                  element: <Suspense fallback={<Loader/>}><Recruiter/></Suspense>
                },
                {
                  path: '/admin/company',
                  element: <Suspense fallback={<Loader/>}><Company/></Suspense>
                },
                {
                  path: '/admin/cms',
                  element: <Suspense fallback={<Loader/>}><CMS/></Suspense>
                },
                {
                  path: '/admin/forms',
                  element: <Suspense fallback={<Loader/>}><Forms/></Suspense>,
                  
                  
                },
                {
                  path:'/admin/forms/invest',
                  element:<Suspense fallback={<Loader/>}><Invest/></Suspense>

                },
                {
                  path:'/admin/cms/terms',
                  element:<Suspense fallback={<Loader/>}><Terms/></Suspense>

                },
                
                {
                  path: '/admin/referral',
                  element: <Suspense fallback={<Loader/>}><Referral/></Suspense>
                },
                {
                  path: '/admin/manage-roles',
                  element: <Suspense fallback={<Loader/>}><ManageRoles/></Suspense>
                },
                {
                  path: '/admin/payments',
                  element: <Suspense fallback={<Loader/>}><Payments/></Suspense>
                },
                {
                  path: '/admin/application',
                  element: <Suspense fallback={<Loader/>}><Applications/></Suspense>
                },
                {
                  path: '/admin/invoices',
                  element: <Suspense fallback={<Loader/>}><Invoices/></Suspense>
                },
                {
                  path: '/admin/push-notification',
                  element: <Suspense fallback={<Loader/>}><PushNotify/></Suspense>
                },
                {
                  path: '/admin/help',
                  element: <Suspense fallback={<Loader/>}><Help/></Suspense>
                },
              ]
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
