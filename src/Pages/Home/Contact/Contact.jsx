
import { FaCalendarAlt, FaCommentDots, FaPhoneAlt, FaMapMarkerAlt, FaSquare, FaStopwatch } from "react-icons/fa";


import icon1 from "../../../assets/icons/icon1.png"
const Contact = () => {
    return (
        <div className="bg-[#151515] w-full mt-8 rounded-lg">
            <div className="p-20 flex justify-between">
                <div className="flex gap-4">
                    <div className="relative">
                        <FaCalendarAlt className="text-5xl text-white"></FaCalendarAlt>
                        {/* <img className="absolute top-[30%] text-3xl left-2" src={icon1} alt="" /> */}
                        <FaStopwatch className="absolute top-[30%] text-3xl left-6 text-[#FF3811] "></FaStopwatch>
                    </div>
                    <div className=" text-white ">
                        <h2 className="text-base font-medium">We are open monday-friday</h2>
                        <h1 className="text-2xl font-bold">7:00 am - 9:00 pm</h1>
                    </div>
                </div>

                <div className="flex gap-4">

                    <div className="relative">
                        <FaPhoneAlt className="text-5xl text-white"></FaPhoneAlt>
                        <FaCommentDots className="text-[#FF3811] text-3xl absolute top-[0%] left-6"></FaCommentDots>
                    </div>
                    <div className="text-white">
                        <h2 className="text-base font-medium">Have a question?</h2>
                        <h1 className="text-2xl font-bold">+2546 251 2658</h1>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="relative">
                        <FaMapMarkerAlt className="text-[#FF3811] absolute left-3 top-2  text-5xl"></FaMapMarkerAlt>
                        <FaSquare className="text-white text-7xl rounded"></FaSquare>
                    </div>
                    <div className="text-white">
                        <h2 className="text-base font-medium">Need a repair? our address</h2>
                        <h1 className="text-2xl font-bold">Liza Street, New York</h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;