import React from 'react'

function Events() {
  return (
    <section className='Events min-h-[70vh] bg-white flex flex-col gap-y-5'>
        <h1 className='text-center text-[50px] font-[600]'>Events Timeline!</h1>
    
        <div className='flex justify-around flex-1 pb-4 600:flex-col 600:items-center 600:h-full 600:gap-y-6'>
            <div className="rounded-[30px] p-2 w-[30%] 600:w-[60%] 600:h-[300px]">
                <h1 className='text-center text-[45px] font-[600] leading-[52px] tracking-[-0.96px] text-white'>Main Events</h1>
            </div>

            <div className="rounded-[30px] p-2 w-[30%] 600:w-[60%] 600:h-[300px]">
                <h1 className='text-center text-[45px] font-[600] leading-[52px] tracking-[-0.96px] text-white'>Side Events</h1>
            </div>
        </div>
    </section>
  )
}

export default Events
