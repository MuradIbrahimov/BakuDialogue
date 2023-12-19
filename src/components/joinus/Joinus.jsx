import React from 'react'
import decor from '/public/decor.png'
function Joinus() {
    return (
        <section style={{'minHeight':'80vh'}} className='Joinus  relative'>
            <div className='absolute w-full h-full z-10 flex justify-center items-center'>
                <main style={{'width' : '100%'}} className='flex flex-col items-center gap-y-8 '>
                    <h1 className='text-white text-center text-[50px] font-[800]'>Join To Our SDG Media Zone!</h1>
                    <p style={{"maxWidth":'100ch'}} className='text-white text-center text-[18px] 1024:!w-[70ch]'>Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed et. A in ullamcorper ipsum.</p>
                    <div className='w-[100%] flex justify-center items-center'>
                        <div style={{'width' : '60%'}} className='flex '>
                            <input className='Input h-[70px] outline-none pl-5 placeholder-white focus:outline-none text-white text-[18px] bg-inherit border-white border-[1px] flex-1 ' type="email" placeholder='Your email' />
                            <button style={{'width':'110px'}} className='Button w-[100px] bg-[#EC744A] text-white '>Subscribe Us</button>
                         </div> 
                    </div> 
                </main>
            </div>
            <div>
                <img src={decor} />
            </div>
        </section>
    )
}

export default Joinus
