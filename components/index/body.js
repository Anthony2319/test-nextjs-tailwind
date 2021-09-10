import Image from 'next/image'
import Link from 'next/link'

export default function Body() {
    return (
        <div>
            <div className="bg-black text-gray-300 flex flex-col text-center mb-0 lg:flex-row justify-center">
                <div>
                    <span className="m-4">ALL</span>
                    <span className="m-4">BRANDING</span>
                    <span className="m-4">DESIGN</span>
                </div>
                <div>
                    <span className="m-4">ILLUSTRATION</span>
                    <span className="m-4">WEB-SITE</span>
                </div>
            </div>

            <div className= "flex flex-col ml-4 mr-4 lg:flex flex-row justify-center  mt-0 mb-0">

                <div>
                        <div className=" relative hover:scale-150">
                            <div className="absolute inset-0 z-10 w-60 h-24 mt-52 ml-52 text-center flex flex-col items-center justify-center opacity-100 hover: w-60 h-24 mt-52 ml-52 opacity-100 p-8 bg-white bg-opacity-90 duration-300;">
                                <p className="p-8 bg-">PINK HAIR</p>
                            </div>
                            <div className=" relative ">
                                <Image
                                    src="/images/pink-hair.jpg" // Route of the image file
                                    height={400} // Desired size with correct aspect ratio
                                    width={700} // Desired size with correct aspect ratio
                                    alt="pink-hair"
                                    className="flex flex-wrap content-center "
                                />

                            </div>  
                       
                           
                            
                        
                        </div>
                    <Image
                        src="/images/future-life.jpg" // Route of the image file
                        height={400} // Desired size with correct aspect ratio
                        width={700} // Desired size with correct aspect ratio
                        className="hover:scale-150"
                        
                    />
                    <Image
                        src="/images/total-space.jpg" // Route of the image file
                        height={400} // Desired size with correct aspect ratio
                        width={700} // Desired size with correct aspect ratio
                        className="hover:scale-150"
                      
                    />
                    <Link href="mc">
                        <Image
                            src="/images/mandarin-chocolate.jpg" // Route of the image file
                            height={400} // Desired size with correct aspect ratio
                            width={700} // Desired size with correct aspect ratio
                            alt="mandarin-chocolate"
                            className="hover:scale-150"
                        />
                    </Link>

                </div>
                <div className="">
                    <Image
                        src="/images/colorful-banana.jpg" // Route of the image file
                        height={400} // Desired size with correct aspect ratio
                        width={700} // Desired size with correct aspect ratio
                        alt="colorful-banana"
                        className="hover:scale-150"
                    />
                    <Image
                        src="/images/amstel-festival.jpg" // Route of the image file
                        height={400} // Desired size with correct aspect ratio
                        width={700} // Desired size with correct aspect ratio
                        alt="amstel-festival"
                        className="hover:scale-150"
                    />
                    <Image
                        src="/images/police-dog.jpg" // Route of the image file
                        height={400} // Desired size with correct aspect ratio
                        width={700} // Desired size with correct aspect ratio
                        alt="police-dog"
                        className="hover:scale-150"
                    />
                    <Image
                        src="/images/activation.jpg" // Route of the image file
                        height={400} // Desired size with correct aspect ratio
                        width={700} // Desired size with correct aspect ratio
                        alt="activation"
                        className="hover:scale-150"
                    />
                </div>

            </div>

            <div className="bg-green-400 text-center flex flex-col pb-20 lg:mt-8 mb-8" >
                <span className="text-white text-xs font-sans mt-20 mb-2">SO WHAT'S NEXT?</span>
                <span className="text-white font-bold text-5xl mt-2 mb-2">ARE YOU READY? </span>
                <span className="text-black font-bold text-5xl underline mt-2 lg:mb-30 ">LET'S WORK!</span>
            </div>
        </div>
    )
}
