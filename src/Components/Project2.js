// import React, { createElement } from "react";
export default function Project2(){
    
    // alert(para[0]);
    return(
            <>
        {/* <div className="text-white text-6xl bg-red-600   bg-center text-center my-4  mx-auto py-4 w-full rounded max-w-md px-3 hover:text-pink-600 font-serif font-bold">
           Triveni.com
        </div> */}
        
        <div className="grid grid-cols-2 bg-purple-500 text-center place-content-center">
        <h1>My Code</h1>
        <div className="  grid grid-cols-3  place-content-center  text-4xl font-bold no-underline ">
            <a className="no-underline text-black font-bolds" href="/"> Hello</a>
            <a className=" text-black no-underline" href="/">Code</a>
            <a className=" text-black no-underline
            " href="/">Book</a>
        </div>
        </div>
        <div className="  text-black flex  flex-row  bg-white   " >
            <div className="w-1/2 flex flex-col justify-center items-center text-sm p-16 font-normal">

            With over five decades of experience, Triveni Turbine Limited (TTL) manufactures industrial steam turbines up to 100 Megawatt Electric (MWe) and refurbishes rotating equipment at its state-of-the-art facilities. We offer steam turbine solutions for Industrial Captive and Renewable Power. Our ability to provide high-tech precision engineered-to-order solutions has made us one of the most trusted names within the sector.
            <div className=" flex justify-end items-end cursor-pointer ml-72 border-solid border-2 border-red-700 bg-red-400 hover:text-black hover:bg-white} ">About TTL</div>
            </div>
        <div className="bg-yellow-500 my-16 pl-5 pb-0 "> 
        <img className="relative -top-5" src="https://community.connection.com/wp-content/uploads/2023/10/2371335-Smart-Factory-Blog.jpg" alt="..." />
            </div>
            </div>
{/* We have completed head of the page  */}

            <div className="bg-[url('https://www.triveniturbines.com/wp-content/uploads/2023/12/triveni_vid_thumbnail_min.png')] bg-white cursor-pointer hover:bg-red-800">
                {/* this is a another div*/}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in cumque, quos quia porro voluptates nemo sed, nobis adipisci, consequatur magnam molestias inventore. Optio ab ratione nulla deleniti maxime dolore.
            </div>

            <div className="w-60 h-80  bg-white border-solid border-4 border-sky-500 rounded-xl hover:bg-red-700  cursor-pointer">
                <img className="hover:list-image-none" src="https://cdn.pixabay.com/photo/2023/08/25/10/33/apples-8212695_1280.jpg" alt=" Not Found" />
            </div>
            <button className="border-red-500 text-white border-2 m-4 hover:bg-white  after:content-center">Click me</button>


        </>
    )
} 


