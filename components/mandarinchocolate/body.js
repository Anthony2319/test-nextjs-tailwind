
export default function Body() {

    return (
        <div>
        
            <div className="text-2xl font-bold text-Black-500 mb-4 uppercase">Slider Sidebar Project</div>
                    <span className="text-sm text-left text-gray-500 ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate tempore eligendi magnam distinctio molestias. Incidunt at consequuntur consequatur 
                    officiis repudiandae! Culpa cum vel tenetur itaque eius provident voluptatum similique impedit.
                    </span>
                <div className="border-b-2 border-gray-300 mt-12"></div>
                <div className=" uppercase mt-12" >
                    <p className="text-base font-bold text-Black-500">December 10, 2016</p>
                    <span className="text-gray-300">Date</span>
                </div>
                <div className=" uppercase mt-3" >
                    <p className="text-base font-bold text-Black-500">Branding, Design</p>
                    <span className="text-gray-300">Category</span>
                </div>
                <div className=" uppercase mt-3" >
                    <p className="text-base font-bold text-Black-500">London Barbershop</p>
                    <span className="text-gray-300">Client</span>
                </div>
            
                <div className="max-w-screen-lg bg-green-400 mx-auto text-center py-5 mt-8">
                    <h2 className="text-base leading-9  tracking-tight text-white sm:text-4xl sm:leading-10 uppercase">
                    Launch the project
                    </h2>
                </div>

                <div className="border-b-2 border-gray-300 mt-12"></div>

                <div className="flex flex-row">
                <div className="mr-20">
                    <button className="mt-10 h-10 w-12 text-6xl text-green-300">
                        <span className="block">&#x279c;</span>
                    </button>
                    <div className=" text-xs uppercase mt-3">
                        <span className="text-gray-300">previous reading</span>
                        <p className="font-bold text-Black-500">colorful banana</p>
                    </div>
                </div>
                <div className="mr-0">
                    <button className="mt-9 mr-0 h-10 w-12 text-6xl text-green-300 mr-0 ">
                        <span className="mr-0">&#x279c;</span>
                    </button>
                    <div className=" text-xs uppercase mt-4 mr-0" >
                        <span className="text-gray-300">next reading</span>
                        <p className="font-bold text-Black-500 ">total space</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
