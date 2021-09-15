import Image from 'next/image'

export default function header() {
    return (
        <div>
            <div className="relative">
                <div>
                    <div className="absolute bg-gray-700 z-20 w-full h-full opacity-40"></div>   
                    <Image
                        src="/images/mandarin-chocolate.jpg" // Route of the image file
                        height={1800} // Desired size with correct aspect ratio
                        width={1500} // Desired size with correct aspect ratio
                        alt="pink-hair"
                        className="absolute w-12/12 z-10"
                    />
                    <div className="absolute inset-0 z-30  text-center flex flex-col items-center justify-center ">
                        <div className="mt-50 ml-4  w-11/12 h-4/12 h-35 "> 
                            <p className=" text-5xl text-white font-bold">MANDARIN CHOCOLATE</p>
                        </div>
                    </div> 
                </div>      
            </div>  
        </div>
    )
}
