import Image from "next/image"

export default function header() {
    return (
        <div>
            <div className="relative w-full h-full ">
                <img src="/images/contact.jpg" className="object-cover w-full h-full" />
                <div className="absolute h-3/5 w-full bottom-0 text-white text-center leading-4">
                    <p className="text-lg border-b border-green-300">so what's next?
                    <span className=""> </span></p>
                    <p className="uppercase text-2xl font-extrabold">contact us</p>
                </div>
            </div>





            <div className="m-8">
                <p className="uppercase text-center text-xl">send your message</p>
                <label className=" m-auto ">
                    <span className="text-gray-400">YOUR NAME</span>
                    <div className="m-auto">
                        <textarea className="m-auto form-textarea border-2 border-gray-300 mt-1 block w-full h-12 text-center" rows="1"></textarea>
                    </div>
                </label>

                <label className="" >
                    <span className="text-gray-400">YOUR EMAIL</span>
                    <textarea className="form-textarea border-2 border-gray-300  block w-full h-12 m-auto" rows="1" ></textarea>
                </label>

                <label className="" >
                    <span className="text-gray-400">YOUR MESSAGE</span>
                    <textarea className="form-textarea border-2 border-gray-300  m-auto block w-full h-32" rows="3"></textarea>
                </label>
                <button className="bg-green-400 w-50 text-white mt-4 py-2 px-4">SEND MESSAGE</button>
            </div>
            <div className="w-full">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.17962211554!2d2.2646119804927376!3d50.75370297961868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcf8b8618bc8b9%3A0x392ef0bafa0b2cad!2sLa%20Station!5e0!3m2!1sfr!2sfr!4v1634821630469!5m2!1sfr!2sfr" width="1800" height="600" allowfullscreen="" loading=""></iframe>
            </div>
        </div>
    )
}
