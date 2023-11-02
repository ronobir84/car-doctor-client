
import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.jpg"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const handelSignUp = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(email, name, password)

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen ">

            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2">

                    <img className="w-3/4" src={login} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full  border max-w-md">
                    <h1 className="text-4xl pt-10 text-center font-bold text-[#444] ">Sign Up</h1>
                    <form onSubmit={handelSignUp} className="card-body p-16 ">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="bg-[#FF3811] px-6 py-3 rounded-md text-white text-lg" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className="text-lg text-center pb-4 text-[#737373]">Already have an account? <Link className="text-lg text-[#FF3811] font-semibold" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;