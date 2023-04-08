import React from 'react'
import testImg1 from '../../assets/costom devp.png';
import testImg2 from '../../assets/Communication.png';
import testImg3 from '../../assets/gg.png';
import testImg4 from '../../assets/Management.png';
import testImg5 from '../../assets/Mobile Development.png';
import testImg6 from '../../assets/Group.png';
import testImg7 from '../../assets/API Programming.png';
import testImg8 from '../../assets/Ux Design.png';
import testImg9 from '../../assets/Communication.png';



const Ourservice = () => {
  return (
    <div className=' py-10 md:py-10 w-full bg-black flex justify-center items-center h-auto'>
        <div className=' h-full w-full flex justify-center items-center'>
            <div className=' w-[70%] flex flex-col justify-evenly gap-5 md:gap-10 md:justify-around h-full items-center text-black'>
                <div className='w-full gap-5 flex flex-col items-center justify-center'>
                    <h1 className=' text-white text-5xl font-bold'>Our Services</h1>
                    <div className=' md:w-[700px] flex items-center justify-center'>
                        <span className='  text-white text-center'>Our goal is to provide a comprehensive platform that empowers individuals <br /> and businesses to achieve their full potential. Whether you're looking to <br /> advance your career, improve your health and wellness, or grow your...  </span>
                    </div>
                </div>
                
                <div className='  flex flex-wrap w-full md:justify-between justify-center gap-5 '>

                <div className=' h-52 w-80 px-5 relative rounded-md bg-brown-100 bg-opacity-20  border-blue-500 border-2  flex flex-col justify-evenly '>
                  <span className=' absolute right-5 top-2 text-5xl text-gray-400 font-gilroy-bold'>01</span>
                  <div className=' w-10 h-10 rounded-full flex justify-center items-center bg-500'>
                  <img src={testImg1} alt="" className=' w-full h-full '/>
                  </div>
                  <div className=' w-full flex flex-col'>
                    <p className='  font-semibold text-white'>Custom Web Development</p>
                    <p className=' text-xs text-white '><br /> We build customized, intuitive web app  solutions that optimize operations, <br /> accelerate workflows, boost revenue,and <br /> deliver an exceptional product experience.</p>
                  </div>
                </div>

                <div className=' h-52 relative w-80 px-5 rounded-md bg-black-100 bg-opacity-20  border-blue-500 border-2  flex flex-col justify-evenly '>
                  <span className=' absolute right-5 top-2 text-5xl text-gray-400 font-gilroy-bold'>02</span>
                  <div className=' w-10 h-10 rounded-full flex justify-center items-center bg-500'>
                  <img src={testImg2} alt="" className=' w-full h-full '/>
                  </div>
                  <div className=' w-full flex flex-col'>
                    <p className='  font-semibold text-white'>Software Consulting</p>
                    <p className=' text-xs text-white  '><br /> We analyze businesses needs and create a <br /> roadmap for building a software solution <br /> optimized to specific requirements and <br /> delivering the best value.</p>
                  </div>
                </div>
                

                <div className=' h-52 relative w-80 px-5 rounded-md bg-black-100 bg-opacity-20  border-blue-500 border-2  flex flex-col justify-evenly '>
                  <span className=' absolute right-5 top-2 text-5xl text-gray-400 font-gilroy-bold'>03</span>
                  <div className=' w-10 h-10 rounded-full flex justify-center items-center bg--500'>
                  <img src={testImg3} alt="" className=' w-full h-full rounded-full'/>
                  </div>
                  <div className=' w-full flex flex-col'>
                    <span className='  font-semibold text-white'>Implementation & Deployment</span>
                    <p className=' text-xs text-white  '><br /> We device comprehensive and agile <br /> deployment & implementation plans using proven methodologies to deliver enhanced and cost-effective solutions to end-users.</p>
                  </div>
                </div>

                <div className=' h-52 relative w-80 px-5 rounded-md bg-black-100 bg-opacity-20  border-blue-500 border-2  flex flex-col justify-evenly '>
                  <span className=' absolute right-5 top-2 text-5xl text-gray-400 font-gilroy-bold'>04</span>
                  <div className=' w-10 h-10 rounded-full flex justify-center items-center bg--500'>
                  <img src={testImg4} alt="" className=' w-full h-full rounded-full'/>
                  </div>
                  <div className=' w-full flex flex-col'>
                    <pre className='  font-semibold text-white'>Maintenance & Management</pre>
                    <p className=' text-xs text-white  '><br /> Our app maintenance and management <br /> services ensure that your software <br /> infrastructure stays relevant, scalable, <br /> sustainable, and high-performing. </p>
                  </div>
                </div>

                <div className=' h-52 relative w-80 px-5 rounded-md bg-black-100 bg-opacity-20  border-blue-500 border-2  flex flex-col justify-evenly '>
                  <span className=' absolute right-5 top-2 text-5xl text-gray-400 font-gilroy-bold'>05</span>
                  <div className=' w-10 h-10 rounded-full flex justify-center items-center bg--500'>
                  <img src={testImg5} alt="" className=' w-full h-full rounded-full'/>
                  </div>
                  <div className=' w-full flex flex-col'>
                    <p className='  font-semibold text-white'>Mobile Web Development</p>
                    <p className=' text-xs text-white  '><br /> Our robust & customizable frameworks help<br /> develop smart ,mobile apps that analyze <br />user data and incorporate AI ML to deliver <br />personalized user experiences. </p>
                  </div>
                </div>
                

                <div className=' h-52 relative w-80 px-5 rounded-md bg-black-100 bg-opacity-20  border-blue-500 border-2  flex flex-col justify-evenly '>
                  <span className=' absolute right-5 top-2 text-5xl text-gray-400 font-gilroy-bold'>06</span>
                  <div className=' w-10 h-10 rounded-full flex justify-center items-center bg--500'>
                  <img src={testImg6} alt="" className=' w-full h-full rounded-full'/>
                  </div>
                  <div className=' w-full flex flex-col'>
                    <p className='  font-semibold text-white'>Custom Application Development</p>
                    <p className=' text-xs text-white  '><br /> Leverage our deep domain expertise to<br /> develop robust,scalable & interoperable <br /> mobile, web, desktop & hybrid applications <br /> that deliver optimal business outcomes. </p>
                  </div>
                </div>

                <div className=' h-52 relative w-80 px-5 rounded-md bg-black-100 bg-opacity-20  border-blue-500 border-2  flex flex-col justify-evenly '>
                  <span className=' absolute right-5 top-2 text-5xl text-gray-400 font-gilroy-bold'>07</span>
                  <div className=' w-10 h-10 rounded-full flex justify-center items-center bg--500'>
                  <img src={testImg7} alt="" className=' w-full h-full rounded-full'/>
                  </div>
                  <div className=' w-full flex flex-col'>
                    <p className='  font-semibold text-white'>API Development & Integration</p>
                    <p className=' text-xs text-white  '><br /> Develop reliable and easy to consume<br /> custom APIs that seamlessly integrate <br />custom software with enterprise and third-<br /> party systems & services to maximize uptime <br /> & scalability</p>
                  </div>
                </div>

                <div className=' h-52 relative w-80 px-5 rounded-md bg-black-100 bg-opacity-20  border-blue-500 border-2  flex flex-col justify-evenly '>
                  <span className=' absolute right-5 top-2 text-5xl text-gray-400 font-gilroy-bold'>08</span>
                  <div className=' w-10 h-10 rounded-full flex justify-center items-center bg--500'>
                  <img src={testImg8} alt="" className=' w-full h-full rounded-full'/>
                  </div>
                  <div className=' w-full flex flex-col'>
                    <p className='  font-semibold text-white'>Custom UX/UI Design</p>
                    <p className=' text-xs text-white  '><br />Leverage the latest UX/UI technologies, <br />architectures, and trends to design <br />responsive & scalable user-centric apps <br />that transform user experiences across <br />channels.</p>
                  </div>
                </div>
                

                <div className=' h-52 w-80 relative px-5 rounded-md bg-black-100 bg-opacity-20  border-blue-500 border-2  flex flex-col justify-evenly '>
                  <span className=' absolute right-5 top-2 text-5xl text-gray-400 font-gilroy-bold'>09</span>
                  <div className=' w-10 h-10 rounded-full flex justify-center items-center bg--500'>
                  <img src={testImg9} alt="" className=' w-full h-full rounded-full'/>
                  </div>
                  <div className=' w-full flex flex-col'>
                    <p className='  font-semibold text-white'>System Integration</p>
                    <p className=' text-xs text-white  '><br /> Our Software integration engineers adopt <br />next-gen technologies and process to <br /> streamline and integrate everything from <br /> design, development, and testing to execution.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Ourservice