import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function caroussel() {
    return (
        <div>
            <Head>
                <Link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"></Link>
            </Head>
            <div className="carousel relative rounded relative overflow-hidden shadow-xl">
                <div className="carousel-inner relative overflow-hidden w-full">
          
                    <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden=""
                    checked="checked"></input>
                    <div className="carousel-item absolute opacity-0 bg-center" style="height:500px; background-image: url(https://mdbootstrap.com/img/new/slides/052.jpg)">
                    </div>
                    <label for="carousel-3"
                    className="control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto flex justify-center content-center"><i
                    className="fas fa-angle-left mt-3"></i></label>
                    <label for="carousel-2"
                    className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                    className="fas fa-angle-right mt-3"></i></label>
      
                    <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden=""></input>
                    <div className="carousel-item absolute opacity-0 bg-center" style="height:500px; background-image: url(https://mdbootstrap.com/img/new/slides/043.jpg)">
                    </div>
                    <label for="carousel-1"
                    className=" control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                    className="fas fa-angle-left mt-3"></i></label>
                    <label for="carousel-3"
                    className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                    className="fas fa-angle-right mt-3"></i></label>
      
                    <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden=""></input>
                    <div className="carousel-item absolute opacity-0" style="height:500px; background-image: url(https://mdbootstrap.com/img/new/slides/054.jpg)">
                    </div>
                    <label for="carousel-2"
                    className="control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                    className="fas fa-angle-left mt-3"></i></label>
                    <label for="carousel-1"
                    className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                    className="fas fa-angle-right mt-3"></i></label>
      
                    <ol className="carousel-indicators">
                        <li className="inline-block mr-3">
                            <label for="carousel-1"
                            className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                        </li>
                        <li className="inline-block mr-3">
                            <label for="carousel-2"
                            className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                        </li>
                        <li className="inline-block mr-3">
                            <label for="carousel-3"
                            className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                        </li>
                    </ol>
      
                </div>
            </div>
        </div>
    )
}


