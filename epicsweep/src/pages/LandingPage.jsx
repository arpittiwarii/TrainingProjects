import heroimage from '../images/heroimage.png'
import logo from '../images/logo.png'
import VectorESPattern from '../images/VectorESPattern.png'
import promo1 from "../images/promo1.png"
import promo2 from  '../images/promo2.png'
import promo3 from '../images/promo3.png'
import promo4 from '../images/Promo4.png'
import minilogo1 from '../images/minilogo1.png'
import minilogo2 from '../images/minilogo2.png'
import minilogo3 from '../images/minilogo3.png'
import minilogo4 from '../images/minilogo4.png'
import minilogo5 from '../images/minilogo5.png'

import gimage1 from '../images/gimage1.png'
import gimage2 from '../images/gimage2.png'
import gimage3 from '../images/gimage3.png'
import gimage4 from '../images/gimage4.png'
import gimage5 from '../images/gimage5.png'
import gimage6 from '../images/gimage6.png'
import gimage7 from '../images/gimage7.png'
import gimage8 from '../images/gimage8.png'
import gimage9 from '../images/gimage9.png'
import gimage10 from '../images/gimage10.png'   
import gimage11 from '../images/gimage11.png'

const gameimages = [gimage2, gimage3, gimage4, gimage5, gimage6, gimage7, gimage8, gimage9, gimage10, gimage11]
 
const minilogo = [minilogo1, minilogo2, minilogo3, minilogo4, minilogo5, minilogo1, minilogo2, minilogo3, minilogo4, minilogo5]
const parastr = ["Exclusive Early Access to Epicsweep","Generous Welcome Bonus of your first purchase", "24/7 Customer Support", "Extra Loyalty Points to jumpstart your reward"]
const images = [{url:promo1, para:parastr[0]},{url:promo2, para:parastr[1]},{url:promo3, para:parastr[2]},{url:promo4, para:parastr[3]}]
function LandingPage(){
    return(
        <>
            <div className='h-full w-full'>
                <div className="w-full h-screen bg-cover bg-no-repeat">
                    <img src={heroimage} alt="" className='w-full absolute object-cover'/>
                    <div className='w-auto h-auto relative mx-45 text-white flex justify-between p-8'>
                        <img src={logo} alt="logoimage" className="w-25 h-8"/>
                        <div className='h-auto'>
                            <button className='bg-[#63F915] rounded-md mx-8 p-2 w-30'>Login</button>
                            <button className='bg-purple-500 rounded-md mx-8 p-2 w-30'>Register</button>
                        </div>
                    </div>

                </div>
                <div className='text-[#63F915] text-center text-4xl relative'>
                    <p className='p-6 font-bold my-10'>America's New Favorite Social Casino is Almost Here!</p>
                </div>
            </div>
            <div className='w-full h-auto'>
                <div className='w-full h-auto justify-between px-10'>
                    {/* <div className="w-60 h-60 p-6 m-8 bg-o" style={{backgroundImage:`url(${VectorESPattern})`}}> */}
                    <div className=' w-full h-auto items-center flex flex-row justify-center text-center'>
                    {images.map((i)=>(
                           <div className='w-80 h-75 border rounded-xl border-green-900 m-2 object-center '>
                             <img src={VectorESPattern} alt="" className='absolute h-45 w-80 opacity-30 '/>
                             <img src={i.url} alt="" className='h-45 w-40 relative mx-auto'/>
                             <p className='text-white font-extrabold text-2xl wrap-anywhere h-15'>{i.para}</p>
                           </div>
                    ))}
                    </div>
                    

                </div>
            </div>

            <div>
               <div>
                 <h1 className='text-[#63F915] text-center font-extrabold text-4xl mt-15 mb-10'>Play Games from industry leading providers</h1>
                 <div className='flex' >
                    {minilogo.map((m)=>(
                        <div className='h-auto w-auto p-5 bg-gray-600 mx-3 rounded-xl'>
                            <img className="h-7 w-24" src={m} alt={m} />
                        </div>
                    ))}
                 </div>
                 {/* <div className='flex justify-center h-2'>
                    <div className='border border-green-400 rounded-4xl'></div>
                    <div className='border border-green-400 rounded-4xl'></div>
                    <div className='border border-green-400 rounded-4xl'></div>
                    <div className='border border-green-400 rounded-4xl'></div>
                 </div> */}

                 <div className='w-full h-auto px-40 mt-20'>
                    <div className='h-full mx-auto gap-y-2 w-[80%] grid grid-cols-7 grid-rows-2 gap-x-0'>
                        <div className='h-full w-60 row-span-2 col-span-2 rounded-2xl relative border-white'>
                            <img src={gimage1} alt="game images" className='h-full w-full object-cover'/>
                        </div>
                        {
                            gameimages.map((g)=>(
                                <div className='h-40 w-30 rounded-2xl'>
                                    <img src={g} alt="game psoter" className=''/>
                                </div>
                            ))
                        }
                    </div>
                 </div>


                 <div>
                    <div className='h-full w-full'>
                        <h1 className='text-[#63F915] text-center font-extrabold text-4xl mt-15 mb-10'>Get Started with Epicsweep Today!</h1>
                        <div className='mx-auto flex flex-row text-xs justify-around px-50'>
                            <div className='flex items-center'>
                                <h1 className="text-[#63F915] font-extrabold text-8xl">1</h1>
                                <div className='relative border rounded-2xl text-white border-r-green-600 p-4' style={{backgroundImage:`url(${VectorESPattern})`}}>
                                     <div className="absolute inset-0 bg-black/70"></div>
                                    <div className='z-10 relative'>
                                    <h4 className='font-extrabold'>Register Account</h4>
                                    <p>get started in less than 10 second</p>
                                    </div>
                                </div>
                            </div>
                             <div className='flex items-center'>
                                <h1 className="text-[#63F915] font-extrabold text-8xl">2</h1>
                                <div className='relative border text-white border-green-600 p-3' style={{backgroundImage:`url(${VectorESPattern})`}}>
                                     <div className="absolute inset-0 bg-green-800/70"></div>
                                    <div className='z-10 relative'>
                                    <h4 className='font-extrabold'>Verify Details</h4>
                                    <p>get started in less than 10 second</p>
                                    </div>
                                </div>
                            </div>
                             <div className='flex items-center'>
                                <h1 className="text-[#63F915] font-extrabold text-8xl">3</h1>
                                <div className='relative border text-white border-green-600 p-3' style={{backgroundImage:`url(${VectorESPattern})`}}>
                                     <div className="absolute inset-0 bg-purple-600/70"></div>
                                    <div className='z-10 relative'>
                                    <h4 className='font-extrabold'>Claim Your Offer</h4>
                                    <p>get started in less than 10 second</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
               </div>
            </div>
        </>
    )
}

export default LandingPage