
import frame from "../../../assets/icons/Frame.jpg"
const ServiceCard = ({ service }) => {
    const { title, img, price} = service
    return (
        <div>
            <div className="card w-96 h-[370px] shadow-sm border mt-8">
                <figure className="px-6 pt-6">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="text-2xl text-[#444] font-bold">{title}</h2>

                    <div className="flex">
                        <p className="text-xl text-[#FF3811] font-semibold">Price : ${price}</p>
                        <button><img src={frame} alt="" /></button>

                    </div>
                </div>
            </div>
            
       </div>
    );
};

export default ServiceCard;