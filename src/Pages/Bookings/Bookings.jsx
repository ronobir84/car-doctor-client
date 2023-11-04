import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default Bookings;