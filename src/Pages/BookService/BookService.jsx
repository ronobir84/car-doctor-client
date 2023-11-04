import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

import Swal from 'sweetalert2'


const BookService = () => {

    const service = useLoaderData()
    const { title, _id, price, img } = service
    const { user } = useContext(AuthContext)

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target
        const name = form.name.value;
        const date = form.date;
        const email = user?.email;
        const booking = {
            customerName: name,
            img,
            email: email,
            date: date,
            img,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking)
        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            <h2 className="text-center text-3xl">Book service: {title}</h2>



            <form onSubmit={handleBookService} className="card-body bg-[#F3F3F3] p-24">


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            {/* <span className="label-text">Email</span> */}
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" placeholder="First Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            {/* <span className="label-text">Password</span> */}
                        </label>
                        <input type="date" name="data"  className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            {/* <span className="label-text">Email</span> */}
                        </label>
                        <input type="text" defaultValue={'$' + price} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            {/* <span className="label-text">Password</span> */}
                        </label>
                        <input type="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" required />
                    </div>
                </div>


                <div className="form-control mt-6">
                    <input className="bg-[#FF3811] py-3 rounded-md text-lg text-white" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default BookService;