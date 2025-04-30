import React from 'react'

const HeroEvents = () => {
    return (
        <section className="relative bg-cover bg-no-repeat w-full min-h-[50vh] bg-center flex flex-col bg-[url(./assets/images/png/eventsHero.png)]">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60 z-10"></div>
            <div className='container z-10 relative'>
                <p className="text-white text-base font-normal leading-6 pl-16 pt-56">
                    Home &gt; Events
                </p>
                <p className="text-white text-[64px] font-semibold leading-[96px] pl-16">
                    Events
                </p>
       </div>
      </section>
  )
}

export default HeroEvents
