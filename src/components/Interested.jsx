import React from 'react'
import CommonHeading from '../common/CommonHeading'
import CommonButton from '../common/CommonButton'
const Interested = () => {
  return (

    <div className="container pt-xxl">
      <div className='bg-[url(../src/assets/images/webp/interested-bg-img.webp)] px-6 py-16 bg-[#FF0000BF] bg-no-repeat bg-cover bg-center rounded-3xl min-h-[447px]'>
        <CommonHeading text="Interested?Get in touch with us" spacing="text-white" align="text-center" />
        <div className="flex flex-col items-center pt-4">
          <p className="max-w-[592px] mb-9 text-center nPlus text-lg leading-[28.8px] text-white">Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. </p>
          <CommonButton text="Get a Quote" />
        </div>
      </div>
    </div>
  )
}

export default Interested                