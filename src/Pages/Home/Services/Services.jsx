import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/srevices")
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="text-center space-y-3">
                <h3 className="text-2xl text-[#FF3811] font-bold">Service</h3>
                <h2 className="text-[45px] text-[#151515] font-bold">Our Service Area</h2>
                <p className="text-base text-[#737373] font-normal">The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised <br /> Words Which Don't Look Even Slightly Believable.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className="text-center mt-8">
                <button className="btn  btn-outline btn-error">More Services</button>
            </div>
        </div>
    );
};

export default Services;