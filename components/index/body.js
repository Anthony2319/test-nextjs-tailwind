import Image from 'next/image'
import Link from 'next/link'

export default function Body() {
    return (
        <div>
            <div className="bg-black text-white flex flex-col text-center mt-4 mb-4 lg:flex-row justify-center">
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

            <div className= "px-4 lg:flex flex-row justify-center px-2">

                <div className="">
                    <Image
                        src="/images/pink-hair.jpg" // Route of the image file
                        height={400} // Desired size with correct aspect ratio
                        width={400} // Desired size with correct aspect ratio
                        alt="pink-hair"
                    />
                    <Image
                        src="/images/future-life.jpg" // Route of the image file
                        height={400} // Desired size with correct aspect ratio
                        width={400} // Desired size with correct aspect ratio
                        alt="future-life"
                    />
                    <Image
                        src="/images/total-space.jpg" // Route of the image file
                        height={400} // Desired size with correct aspect ratio
                        width={400} // Desired size with correct aspect ratio
                        alt="total-space"
                    />
                    <Link href="mc">
                        <Image
                            src="/images/mandarin-chocolate.jpg" // Route of the image file
                            height={400} // Desired size with correct aspect ratio
                            width={400} // Desired size with correct aspect ratio
                            alt="mandarin-chocolate"
                        />
                    </Link>

                </div>
                <div className="">
                    <Image
                        src="/images/colorful-banana.jpg" // Route of the image file
                        height={400} // Desired size with correct aspect ratio
                        width={400} // Desired size with correct aspect ratio
                        alt="colorful-banana"
                    />
                    <Image
                        src="/images/amstel-festival.jpg" // Route of the image file
                        height={400} // Desired size with correct aspect ratio
                        width={400} // Desired size with correct aspect ratio
                        alt="amstel-festival"
                    />
                    <Image
                        src="/images/police-dog.jpg" // Route of the image file
                        height={400} // Desired size with correct aspect ratio
                        width={400} // Desired size with correct aspect ratio
                        alt="police-dog"
                    />
                    <Image
                        src="/images/activation.jpg" // Route of the image file
                        height={400} // Desired size with correct aspect ratio
                        width={400} // Desired size with correct aspect ratio
                        alt="activation"
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
