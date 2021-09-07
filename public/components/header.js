import Image from 'next/image'

export default function Header() {
    return (
        <div>

            <div>
                <Image
                    src="/images/pixheader.jpg" // Route of the image file
                    height={500} // Desired size with correct aspect ratio
                    width={1350} // Desired size with correct aspect ratio
                    alt="Your Name"
                />
                <div className="flex items-center justify-center h-full w-full bg-black bg-opacity-100">
                    <div className="text-center">
                        <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">
                            I am a digital designer and developer with a photography and film-making background. I have a keen interest in CSS, Semantic HTML and WebStandards. You can find me babbling on Twitter and doing case studies on Behance.
                            <span className="underline text-blue-400">Saas</span></h1>
                    </div>
                </div>
                
            </div>
      
        </div>
    )
}




