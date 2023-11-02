import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
               </div>
                <div className="lg:w-1/2 p-4">
                    <h1 className="text-2xl text-[#FF3811] font-bold">About Us</h1>
                    <h1 className="text-[45px] text-[#151515] font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-5 text-base text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="text-base text-[#737373] py-5">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="bg-[#FF3811] px-6 py-3 rounded-md text-white text-lg">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;