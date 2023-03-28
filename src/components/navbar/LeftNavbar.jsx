import { useRef } from "react";

const LeftNavbar = ({ register }) => {

	return (
		<div className="h-screen hidden md:flex flex-col items-start justify-center gap-10 text-2xlfixed w-32">
			<div className='text-white w-full h-full flex flex-col items-start justify-center gap-10 '>
				<div ref={register("section-1")} className=' w-full flex flex-col gap-2 active'>
					<p className=' h-[2px] w-10 bg-white  cursor-pointer'></p>
					<span className=' text-xs hidden text-1'>scale your <br/> business</span>
				</div>
				<div ref={register("section-2")} className=' w-full flex flex-col gap-2 active'>
					<p className=' h-[2px] w-10 bg-white  cursor-pointer'></p>
					<span className=' text-xs hidden text-1'>products <br/> that shine</span>
				</div>
				<div ref={register("section-3")}  className=' w-full flex flex-col gap-2 active'>
					<p className=' h-[2px] w-10 bg-white line cursor-pointer'></p>
					<span  className=' text-xs hidden text-1 text-2'>services we <br/> provide</span>
				</div>
				<div ref={register("section-4")} className=' w-full flex flex-col gap-2 active'>
					<p className=' h-[2px] w-10 bg-white line cursor-pointer'></p>
					<span  className=' text-xs hidden text-1 text-2'>testimonials</span>
				</div>
				<div ref={register("section-5")} className=' w-full flex flex-col gap-2 active'>
					<p className=' h-[2px] w-10 bg-white cursor-pointer'></p>
					<span className=' text-xs hidden text-1'>our core <br/>values</span>
				</div>
				<div ref={register("section-6")} className=' w-full flex flex-col gap-2 active'>
					<p className=' h-[2px] w-10 bg-white cursor-pointer'></p>
					<span className=' text-xs hidden text-1 '>connect with <br/>us</span>
				</div>
			</div>
		</div>
	);
};

export default LeftNavbar;