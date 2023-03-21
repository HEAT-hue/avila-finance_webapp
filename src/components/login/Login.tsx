// jshint esversion:6
import { StarsSVG, EmailSVG, KeySVG, LogoSVG } from "../svg";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {

    const [emailInput, setEmailInput] = useState<string>("");
    const [passwordInput, setPasswordInput] = useState<string>("");

    const navigate = useNavigate();

    function handleCreateAccountSubmit() {
        navigate("/dashboard");
    }

    return (
        <>
            <div className="px-[2rem] py-[2rem]">
                {/* Form Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex items-center gap-x-2">
                            <h1 className="text-pry font-bold text-3xl" >Welcome  back</h1>
                            <span className="text-[#eea112]"><StarsSVG size={40} /></span>
                        </div>
                        <p className="text-[#5c5a5a] mt-3 text-xl ont-bold">Sign in to account</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <LogoSVG size={25} />
                        <NavLink className="capitalize font-bold text-xl" to={"/"}>Avila</NavLink>
                    </div>
                </div>

                {/* Form Fields */}
                <div className="mt-10 flex flex-col gap-y-5">
                    <div className="flex h-[45px] w-full relative">
                        <div className=" absolute left-[5px] h-full max-w-content flex items-center px-[5px] text-gray-600"><EmailSVG size={30} /></div>
                        <input className="w-full h-full pl-[3rem] pr-2 text-[black] text-[1rem] outline-none focus:border-none" type="email" value={emailInput} placeholder="Email" onChange={(e) => {
                            setEmailInput(e.target.value);
                        }} />
                        <label className="inputB"></label>
                        <label className="inputBorderB"></label>
                        <label className="inputBorderL"></label>
                    </div>
                    <div className="flex h-[45px] w-full relative">
                        <div className=" absolute left-[5px] h-full max-w-content flex items-center px-[5px] text-gray-600"><KeySVG size={30} /></div>
                        <input className="w-full h-full pl-[3rem] text-[black] text-[1rem] outline-none focus:border-none" type="password" value={passwordInput} placeholder="Password" onChange={(e) => {
                            setPasswordInput(e.target.value);
                        }} />
                        <label className="inputB"></label>
                        <label className="inputBorderB"></label>
                        <label className="inputBorderL"></label>
                    </div>

                </div>

                <div className="my-[2.8rem]">
                    <p className="text-pry font-bold text-lg">Forgot Password</p>
                </div>

                <div className="mt-[1rem] flex flex-col gap-y-[1.7rem]" onClick={handleCreateAccountSubmit}>
                    <button className="py-[14px] w-full text-xl text-white font-bold rounded-md outline-none bg-pry hover:bg-[#011114]">Create Account</button>
                    <button className="py-[14px] w-full text-xl text-white font-bold rounded-md outline-none bg-info">GOOGLE SIGN IN</button>
                    <button></button>
                </div>

                <div>
                    <NavLink className={"text-md text-pry font-bold"} to={"/register"}>I don't have an account</NavLink>
                </div>
            </div>
        </>
    )
}

export { Login };