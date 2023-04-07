import { ShoppingCartOutlined } from '@ant-design/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const ad = require("../../media/photos/gift1.webp")
const Ads = () => {
    const navigate = useNavigate()
  return (
    <>
        <div className='ads-container w-full h-max flex justify-between items-center max-md:flex-col'>
            {/* ad1 */}
            <div className='w-[50%] max-md:w-full min-h-[225] h-max bg-[#222831] m-[10px] p-[10px] flex gap-10 text-white flex-wrap justify-center items-center' style={{borderRadius:"5px"}}>
                <div className='w-[180px] h-[180px] '>
                    <div className='w-full h-full mx-auto overflow-hidden
                    ' style={{border:"5px solid #ffbe33", borderRadius:"50%"}}>
                        <img src={ad} alt="" className='w-full h-full'/>
                    </div>
                    
                </div>
                <div className='flex flex-col justify-center text-center'>
                    <h3 className='text-[32px]'>Friday</h3>
                    <h2 className='my-[5px] text-[40px]'>40% Off</h2>
                    <a onClick={()=>navigate("/gift-mart/Book")} className='ej-btn-round' style={{padding:"7px 10px !important"}}>Book Now <ShoppingCartOutlined /></a>
                </div>
            </div>
            {/* ad2 */}
            <div className='w-[50%] max-md:w-full min-h-[225] h-max bg-[#222831] m-[10px] p-[10px] flex gap-10 text-white flex-wrap justify-center items-center' style={{borderRadius:"5px"}}>
                <div className='w-[180px] h-[180px] '>
                    <div className='w-full h-full mx-auto overflow-hidden
                    ' style={{border:"5px solid #ffbe33", borderRadius:"50%"}}>
                        <img src={ad} alt="" className='w-full h-full'/>
                    </div>
                    
                </div>
                <div className='flex flex-col justify-center text-center'>
                    <h3 className='text-[32px]'>Thursdays</h3>
                    <h2 className='my-[5px] text-[40px]'>20% Off</h2>
                    <a onClick={()=>navigate("/gift-mart/Book")} className='ej-btn-round' style={{padding:"7px 10px !important"}}>Book Now <ShoppingCartOutlined /></a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Ads