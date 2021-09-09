import Image from "next/image"

export default function header() {
    return (
        <div>
            <div classNameName="relative bg-cover min-w-full ">
                <div>
                    <Image
                        src="/images/contact.jpg"
                        alt="Picture Header Contact"
                        width={2000}
                        height={900}
                        
                    />
                </div>
                <div classNameName="mt-6">
                <p classNameName="absolute text-xl text-white uppercase justify-center">so what's next?</p>
                <p classNameName="absolute text-6xl text-white uppercase justify-center">contact us</p>
                </div>
            </div>

            <div className="">
                <label className="block text-left max-w-sm">
                <span className="text-gray-700">YOUR NAME</span>
                <textarea className="form-textarea border-2 border-gray-300 mt-1 block w-full" rows="3"></textarea>
                </label>

                <label className="block text-left max-w-sm" >
                <span className="text-gray-700">YOUR EMAIL</span>
                <textarea className="form-textarea border-2 border-gray-300 mt-1 block w-full" rows="3" ></textarea>
                </label>

                <label className="block text-left max-w-sm" >
                <span className="text-gray-700">YOUR MESSAGE</span>
                <textarea className="form-textarea border-2 border-gray-300 mt-1 block w-full" rows="3"></textarea>
                </label>

                <button className="border-0 bg-green-400 w-50 text-white my-3">SEND MESSAGE</button>
            </div>
        </div>
    )
}
