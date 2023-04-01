import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useParams } from 'react-router-dom';

const LeftNavbar = ({bg}) => {

	const [changeBg, setChangeBg] = useState(false);
	const handleSetActive = (to)=> {
		if(to == "section-3" || to == "section-4"){
			setChangeBg(true);
		}
		else{
			setChangeBg(false);
		}
	}

	return (
		<div className="h-screen flex flex-col  items-start justify-center  gap-10 text-2xl fixed">
			<li className="cursor-pointer text-white ">
				<Link hashSpy activeClass="active" onSetActive={handleSetActive} className="flex flex-col " smooth spy to="section-1">
					<span className={`line ${changeBg ? 'bg-black' : 'bg-white'} w-10 h-[2px]`}></span>
					<span className={`text-1 hidden ${changeBg ? 'text-black' : 'text-white'}`}>scale your business</span>
				</Link>
			</li>
			<li className="cursor-pointer text-white">
				<Link hashSpy activeClass="active" onSetActive={handleSetActive} className="flex flex-col" smooth spy to="section-2">
					<span className={`line ${changeBg ? 'bg-black' : 'bg-white'} w-10 h-[2px] `}></span>
					<span className={`text-1 hidden ${changeBg ? 'text-black' : 'text-white'}`}>products that shine</span>
				</Link>
			</li>
			<li className="cursor-pointer text-white">
				<Link hashSpy activeClass="active" onSetActive={handleSetActive}  className="flex flex-col" smooth spy to="section-3">
					<span className={`line ${changeBg ? 'bg-black' : 'bg-white'} w-10 h-[2px] `}></span>
					<span className={`text-1 hidden ${changeBg ? 'text-black' : 'text-white'}`}>services we provide</span>
				</Link>
			</li>
			<li className="cursor-pointer text-white">
				<Link hashSpy activeClass="active" onSetActive={handleSetActive}  className="flex flex-col" smooth spy to="section-4">
					<span className={`line ${changeBg ? 'bg-black' : 'bg-white'} w-10 h-[2px] `}></span>
					<span className={`text-1 hidden ${changeBg ? 'text-black' : 'text-white'}`}>testimonials</span>
				</Link>
			</li>
			<li className="cursor-pointer text-white">
				<Link hashSpy activeClass="active" onSetActive={handleSetActive} className="flex flex-col" smooth spy to="section-5">
					<span className={`line ${changeBg ? 'bg-black' : 'bg-white'} w-10 h-[2px] `}></span>
					<span className={`text-1 hidden ${changeBg ? 'text-black' : 'text-white'}`}>our core values</span>
				</Link>
			</li>
			<li className="cursor-pointer text-white">
				<Link hashSpy activeClass="active" onSetActive={handleSetActive} className="flex flex-col" smooth spy to="section-6">
					<span className={`line ${changeBg ? 'bg-black' : 'bg-white'} w-10 h-[2px] `}></span>
					<span className={`text-1  hidden ${changeBg ? 'text-black' : 'text-white'}`}>connect with us</span>
				</Link>
			</li>
		</div>
	);
};

export default LeftNavbar;