import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.jpg"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const handelLogin = event => {
        event.preventDefault()
        const form = event.target

        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        signIn(email, password)
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
                    <h1 className="text-4xl pt-10 text-center font-bold text-[#444] ">Login</h1>
                    <form onSubmit={handelLogin} className="card-body p-16 ">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="bg-[#FF3811] px-6 py-3 rounded-md text-white text-lg" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="text-lg text-center pb-4 text-[#737373]">New to Car Doctor? <Link className="text-lg text-[#FF3811] font-semibold" to="/signUp">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;