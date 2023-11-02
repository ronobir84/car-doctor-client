
import image1 from "../../../assets/images/banner/1.jpg"
import image2 from "../../../assets/images/banner/2.jpg"
import image3 from "../../../assets/images/banner/3.jpg"
import image4 from "../../../assets/images/banner/4.jpg"
import image5 from "../../../assets/images/banner/5.jpg"
import image6 from "../../../assets/images/banner/6.jpg"
const Banner = () => {
    return (
        
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={image1} className="w-full rounded-xl" />


                <div className="absolute h-full flex rounded-xl items-center   left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ] ">
                    <div className="space-y-7 pl-12 w-1/2 ">
                        <h2 className="text-6xl font-bold text-white">Affordable Price For Car Servicing</h2>
                        <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="">
                            <button className="bg-[#FF3811] px-6 py-3 rounded-md text-white text-lg mr-5">Discover More</button>
                            <button className="btn  btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>


                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} className="w-full rounded-xl" />
                
                <div className="absolute h-full flex rounded-xl items-center   left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ] ">
                    <div className="space-y-7 pl-12 w-1/2 ">
                        <h2 className="text-6xl font-bold text-white">Affordable Price For Car Servicing</h2>
                        <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="">
                            <button className="bg-[#FF3811] px-6 py-3 rounded-md text-white text-lg mr-5">Discover More</button>
                            <button className="btn  btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img src={image3} className="w-full rounded-xl" />
                

                <div className="absolute h-full flex rounded-xl items-center   left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ] ">
                    <div className="space-y-7 pl-12 w-1/2 ">
                        <h2 className="text-6xl font-bold text-white">Affordable Price For Car Servicing</h2>
                        <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="">
                            <button className="bg-[#FF3811] px-6 py-3 rounded-md text-white text-lg mr-5">Discover More</button>
                            <button className="btn  btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <img src={image4} className="w-full rounded-xl" />

                <div className="absolute h-full flex rounded-xl items-center   left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ] ">
                    <div className="space-y-7 pl-12 w-1/2 ">
                        <h2 className="text-6xl font-bold text-white">Affordable Price For Car Servicing</h2>
                        <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="">
                            <button className="bg-[#FF3811] px-6 py-3 rounded-md text-white text-lg mr-5">Discover More</button>
                            <button className="btn  btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            
            
        </div>
    );
};

export default Banner;