import Layaout from "../components/Layaout"
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';


export const getStaticProps = async () =>{

  const {data} = await axios.get(`https://pacific-castle-58523.herokuapp.com/index.php/api`);
      if (!data) {
          return {
          notFound: true,
          }
      }
      console.log(data);
  return{
      
      props: { projects: data['hydra:member']}
  }

} 

export default function Home({ projects }) {
  return (
    <div>
    
      <Layaout page="Accueil">
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

            <div className= "flex flex-col ml-4 mr-4 lg:flex flex-row justify-center">

                <div>
                    <div className="relative">
                        <Image
                            src="/images/pink-hair.jpg" // Route of the image file
                            height={400} // Desired size with correct aspect ratio
                            width={700} // Desired size with correct aspect ratio
                            alt="pink-hair"
                            className="absolute hover:scale-150"
                        />
                        <div className="absolute p-white inset-0 z-10  text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100">
                            <div className="mt-28 ml-4  w-11/12 h-3/12 h-28 bg-white">
                                {projects.map(project => (
                                    <div key={project.id}>
                                        
                                    </div>
                                ))}
                                {projects.map(project => (
                                    <div key={project.id}>
                                    <Image
                                    src="/images/pink-hair.jpg" // Route of the image file
                                    height={400} // Desired size with correct aspect ratio
                                    width={700} // Desired size with correct aspect ratio
                                    alt="pink-hair"
                                    className="absolute hover:scale-150"
                                    />  
                                        <p className=" text-6xl font-bold">{ project.maintitle}</p>
                                 {project.client.map(client=>(<span className="text-gray-400 text-sm">{ client.name}</span>

                                        ))}
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                    <div className="relative ">
                        <Image
                            src="/images/future-life.jpg" // Route of the image file
                            height={400} // Desired size with correct aspect ratio
                            width={700} // Desired size with correct aspect ratio
                            alt="pink-hair"
                            className="absolute hover:scale-150"
                        />
                        <div className="absolute p-white inset-0 z-10  text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100">
                            <div className="mt-28 ml-4  w-11/12 h-3/12 h-28 bg-white">
                                <span className="text-gray-400 text-sm">WEB-SITE</span>
                                <p className=" text-6xl font-bold">FUTURE LIFE</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative ">
                        <Image
                            src="/images/total-space.jpg" // Route of the image file
                            height={400} // Desired size with correct aspect ratio
                            width={700} // Desired size with correct aspect ratio
                            alt="pink-hair"
                            className="absolute hover:scale-150"
                        />
                        <div className="absolute p-white inset-0 z-10  text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100">
                            <div className="mt-28 ml-4  w-11/12 h-3/12 h-28 bg-white">
                                <span className="text-gray-400 text-sm">ILLUSTRATION</span>
                                <p className=" text-6xl font-bold">TOTAL SPACE</p>
                            </div>
                        </div>
                    </div>
                    <Link href="mc">
                        <div className="relative ">
                            <Image
                                src="/images/mandarin-chocolate.jpg" // Route of the image file
                                height={400} // Desired size with correct aspect ratio
                                width={700} // Desired size with correct aspect ratio
                                alt="pink-hair"
                                className="absolute hover:scale-150"
                            />
                            <div className="absolute p-white inset-0 z-10  text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100">
                                <div className="mt-28 ml-4  w-11/12 h-4/12 h-35 bg-white">
                                    <span className="text-gray-400 text-sm">DESIGN, ILLUSTRATION</span>
                                    <p className=" text-5xl font-bold">MANDARIN CHOCOLATE</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="">
                    <div className="relative ">
                        <Image
                            src="/images/colorful-banana.jpg" // Route of the image file
                            height={400} // Desired size with correct aspect ratio
                            width={700} // Desired size with correct aspect ratio
                            alt="pink-hair"
                            className="absolute hover:scale-150"
                            />
                        <div className="absolute p-white inset-0 z-10  text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100">
                            <div className="mt-28 ml-4  w-11/12 h-3/12  bg-white">
                                <span className="text-gray-400 text-sm">BRANDING, ILLUSTRATION</span>
                                <p className=" text-5xl font-bold">COLORFUL BANANA</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative ">
                        <Image
                            src="/images/amstel-festival.jpg" // Route of the image file
                            height={400} // Desired size with correct aspect ratio
                            width={700} // Desired size with correct aspect ratio
                            alt="pink-hair"
                            className="absolute hover:scale-150"
                            />
                        <div className="absolute p-white inset-0 z-10  text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100">
                            <div className="mt-28 ml-4  w-11/12 h-3/12  bg-white">
                                <span className="text-gray-400 text-sm">BRANDING, WEB-SITE</span>
                                <p className=" text-5xl font-bold">AMSTEL FESTIVAL</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative ">
                        <Image
                            src="/images/police-dog.jpg" // Route of the image file
                            height={400} // Desired size with correct aspect ratio
                            width={700} // Desired size with correct aspect ratio
                            alt="pink-hair"
                            className="absolute hover:scale-150"
                            />
                        <div className="absolute p-white inset-0 z-10  text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100">
                            <div className="mt-28 ml-4  w-11/12 h-3/12 h-28 bg-white">
                                <span className="text-gray-400 text-sm">ILLUSTRATION</span>
                                <p className=" text-6xl font-bold">POLICE DOG</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative ">
                        <Image
                            src="/images/activation.jpg" // Route of the image file
                            height={400} // Desired size with correct aspect ratio
                            width={700} // Desired size with correct aspect ratio
                            alt="pink-hair"
                            className="absolute hover:scale-150"
                            />
                        <div className="absolute p-white inset-0 z-10  text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100">
                            <div className="mt-28 ml-4  w-11/12 h-3/12 h-28 bg-white">
                                <span className="text-gray-400 text-sm">ILLUSTRATION, WEB-SITE</span>
                                <p className=" text-6xl font-bold">ACTIVATION</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>











            <div className="bg-green-300 text-center flex flex-col pb-20 lg:mt-8 mb-8" >
                <span className="text-white text-xs font-sans mt-20 mb-2">SO WHAT'S NEXT?</span>
                <span className="text-white font-bold text-5xl mt-2 mb-2">ARE YOU READY? </span>
                <span className="text-black font-bold text-5xl underline mt-2 lg:mb-30 ">LET'S WORK!</span>
            </div>
        </div>
      </Layaout>

    </div>
  )
}
