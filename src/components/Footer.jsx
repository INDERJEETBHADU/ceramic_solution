import React from 'react'
const Footer = () => {
  return (
    <footer>
        <div className="container mx-auto">
        <div className="flex flex-wrap -mx-5 pb-11">
            <div className="w-full sm:w-5/12 md:w-1/4 px-5">
            {/* footer logo */}
            <ul className='flex flex-col gap-4'>
                <li><a href="" className='flex gap-2 items-center text-base font-Plus text-ebony_clay leading-6 capitalize font-normal'>
                    {/* mail logo */}
                    help@Dealzip.com
                </a></li>
                <li><a href="" className='flex gap-2 items-center text-base font-Plus text-ebony_clay leading-6 font-normal'>
                    {/* mail logo */}
                    +1 234 456 678 89
                </a></li>
            </ul>
            <div className="flex items-center gap-2 mt-6">
                <a href="https://www.facebook.com/" target='_blank' className='size-8 rounded-full bg-red'></a>
                <a href="https://www.instagram.com/" target='_blank' className='size-8 rounded-full bg-red'></a>
                <a href="https://x.com/?lang=en" target='_blank' className='size-8 rounded-full bg-red'></a>
                <a href="https://www.linkedin.com/?trk=article-ssr-frontend-pulse_nav-header-logo" target='_blank' className='size-8 rounded-full bg-red'></a>
            </div>

            </div>
            <div className="w-full sm:w-7/12 sm: md:w-5/12 px-5">
            <div className=" flex justify-between">
                <ul className='flex flex-col gap-3'>
                    <li className='text-xl font-Plus font-semibold leading-8 pb-2 capitalize text-ebony_clay'>links</li>
                    <li><a href="" className='text-base font-normal font-Plus text-ebony_clay capitalize'>home</a></li>
                    <li><a href="" className='text-base font-normal font-Plus text-ebony_clay capitalize'>about us</a></li>
                    <li><a href="" className='text-base font-normal font-Plus text-ebony_clay capitalize'>Services</a></li>
                    <li><a href="" className='text-base font-normal font-Plus text-ebony_clay capitalize'>Showcase</a></li>
                </ul>
                <ul className='flex flex-col gap-3'>
                    <li className='text-xl font-Plus font-semibold leading-8 pb-2 capitalize text-ebony_clay'>legal</li>
                    <li><a href="" className='text-base font-normal font-Plus text-ebony_clay capitalize'>home</a></li>
                    <li><a href="" className='text-base font-normal font-Plus text-ebony_clay capitalize'>about us</a></li>
                    <li><a href="" className='text-base font-normal font-Plus text-ebony_clay capitalize'>Services</a></li>
                </ul>
                <ul className='flex flex-col gap-3'>
                    <li className='text-xl font-Plus font-semibold leading-8 pb-2 capitalize text-ebony_clay'>product</li>
                    <li><a href="" className='text-base font-normal font-Plus text-ebony_clay capitalize'>home</a></li>
                    <li><a href="" className='text-base font-normal font-Plus text-ebony_clay capitalize'>about us</a></li>
                    <li><a href="" className='text-base font-normal font-Plus text-ebony_clay capitalize'>Services</a></li>
                </ul>
            </div>
            </div>
            <div className="w-full sm:w-6/12 sm: md:w-1/3 px-5">
            <p className='text-xl font-Plus font-semibold leading-8 pb-2 capitalize text-ebony_clay'>Newsletter</p>
            <p className='text-base font-normal font-Plus text-ebony_clay capitalize'>Stay up to date</p>
            </div>
        </div>
    </div>
    <div className="w-full h-[1px] bg-gradient-to-r from-[#161616] to-[#161616] via-[#696969] via-[100%]"></div>
    </footer>
  )
}

export default Footer