import { useLoaderData } from "react-router-dom";


const Checkout = () => {
    const service = useLoaderData()
    const { title, _id, } = service
    return (
        <div>
            <h2>Book service: {title}</h2>



            <form className="card-body bg-[#F3F3F3] p-24">


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            {/* <span className="label-text">Email</span> */}
                        </label>
                        <input type="text" placeholder="First Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            {/* <span className="label-text">Password</span> */}
                        </label>
                        <input type="text" placeholder="Last Name" className="input input-bordered"  />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            {/* <span className="label-text">Email</span> */}
                        </label>
                        <input type="text" placeholder="Your Phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            {/* <span className="label-text">Password</span> */}
                        </label>
                        <input type="email" placeholder="Your Email" className="input input-bordered" required />
                    </div>
                </div>


                <div className="form-control mt-6">
                    <input className="bg-[#FF3811] py-3 rounded-md text-lg text-white" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>

    );
};

export default Checkout;