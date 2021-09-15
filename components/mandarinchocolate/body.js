import Image from 'next/image'

export default function Body() {

    return (
        <div>
            <div
                className="my-10 text-5xl font-bold font-sans text-Black-500 leading-tight tracking-wider uppercase">Slider Sidebar Project</div>
            <p className="text-sm text-left leading-relaxed text-gray-400 mx-2 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate tempore
                eligendi magnam distinctio molestias. Incidunt at consequuntur consequatur
                officiis repudiandae! Culpa cum vel tenetur itaque eius provident voluptatum
                similique impedit.
            </p>
            <div className="border-b-2 border-gray-200 mx-2 mt-12"></div>
            <div className=" uppercase ml-2 mt-12">
                <p className="text-base leading-tight font-bold text-Black-500">December 10, 2016</p>
                <span className="text-sm leading-tight text-gray-300">Date</span>
            </div>
            <div className=" uppercase ml-2  mt-3">
                <p className="text-base leading-tight font-bold text-Black-500">Branding, Design</p>
                <span className="text-sm leading-tight text-gray-300">Category</span>
            </div>
            <div className=" uppercase ml-2  mt-3">
                <p className="text-base leading-tight font-bold text-Black-500">London Barbershop</p>
                <span className="text-sm leading-tight text-gray-300">Client</span>
            </div>

            <div
                className="relative cursor-pointer bg-green-400 text-white transition transform duration-200 hover:translate-y-2 hover:bg-black hover:text-green-400 mx-auto text-center py-5 my-24 mx-2 ">
                <div className="absolute "></div>
                <h2
                    className="text-base leading-9  tracking-tight sm:text-4xl sm:leading-10 uppercase">
                    Launch the project
                </h2>

            </div>

            <div className="border-b-2 border-gray-200 mt-12 mx-2"></div>




            <div className="flex w-full">
                <div className="">
                    <button className="text-6xl text-green-300">
                        <span className="">&#x2190;</span>
                    </button>
                    <div className=" text-xs uppercase mt-4">
                        <span className="text-gray-300">previous reading</span>
                        <p className="font-bold text-Black-500">colorful banana</p>
                    </div>
                </div>
                <div className="">
                    <button className=" text-6xl text-green-300  ">
                        <span className="">&#x2192;</span>
                    </button>
                    <div className=" text-xs uppercase mt-4">
                        <span className="text-gray-300">next reading</span>
                        <p className="font-bold text-Black-500 ">total space</p>
                    </div>
                </div>
            </div>
        </div>
    )
}