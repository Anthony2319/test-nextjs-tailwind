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
                <p className="uppercase text-center text-xl">send your message</p>
                <label className=" m-auto text-left max-w-sm ">
                    <span className="text-gray-700 m-auto">YOUR NAME</span>
                    <div className="m-auto">
                        <textarea className="m-auto form-textarea border-2 border-gray-300 mt-1 block w-7/12 h-12 text-center" rows="1"></textarea>
                    </div>
                </label>

                <label className="block text-left max-w-sm" >
                    <span className="text-gray-700">YOUR EMAIL</span>
                    <textarea className="form-textarea border-2 border-gray-300  block w-7/12 h-12 m-auto" rows="1" ></textarea>
                </label>

                <label className="block text-left max-w-sm" >
                    <span className="text-gray-700">YOUR MESSAGE</span>
                    <textarea className="form-textarea border-2 border-gray-300  m-auto block w-7/12 h-32" rows="3"></textarea>
                </label>

                <button className="bg-green-400 w-50 text-white m-auto">SEND MESSAGE</button>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2541.580179153982!2d2.811941415857315!3d50.43029309669785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1631535243754!5m2!1sfr!2sfr" width="auto" height="auto" allowfullscreen="" loading="lazy"></iframe>
            
        </div>
    )
}
