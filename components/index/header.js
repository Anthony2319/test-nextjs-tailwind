import Image from 'next/image'

export default function Header() {
    return (
        <div>

            <div className=" bg-auto flex justify-center justify-items-center" >
                <Image
                    src="/images/pixheader.jpg" // Route of the image file
                    height={900} // Desired size with correct aspect ratio
                    width={1350} // Desired size with correct aspect ratio
                    alt="Your Name"
                    Classname=" relative  opacity-100"

                />
                <div className=" absolute mt-30 sm:mt-48 md:mt-48 lg:mt-80 mr-56 xl:mt-96 mr-56">
                    <h1 className="text-white font-bold ml-4  text-xl uppercase md:text-5xl">Patrick Johnson</h1>
                    <h2 className="text-white ml-4 mt-4 text-sm font-semibold uppercase md:text-3xl">
                    I am a digital designer and developer with a photography and film-making background. You can find me babbling on <span href="" className="text-green-400">twitter</span> and doing case studies on 
                    <span href="#" className="text-green-400"> behance</span>.</h2>

                </div>
                
            </div>
      
        </div>
    )
}




