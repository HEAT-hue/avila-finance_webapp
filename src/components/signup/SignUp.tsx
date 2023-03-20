// jshint esversion:6
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { EmailSVG, KeySVG, ArrowClockwiseSVG, LogoSVG } from "../svg";

function SignUp() {

    const [emailInput, setEmailInput] = useState<string>("");
    const [passwordInput, setPasswordInput] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    function handleCreateAccountSubmitForm() {

    }

    function handleGoogleSignInForm() {

    }


    return (
        <>
            <div className="px-[2rem] py-[2rem] ">
                {/* Form Header */}

                <div className="flex flex-col gap-y-3">
                    <div className="flex justify-between items-start">
                        <h1 className="text-pry font-bold text-2xl w-[20ch]" >It's time to grow your business</h1>
                        <div className="flex gap-2 items-center">
                            <LogoSVG size={25} />
                            <NavLink className="capitalize font-bold text-xl" to={"/"}>Avila</NavLink>
                        </div>
                    </div>
                    <p className="text-[#3e41c9] mt-2 text-[1.1rem] font-mono font-bold">Create a free account</p>
                </div>

                {/* Form Fields */}
                <div className="mt-10 flex flex-col gap-y-7">
                    <div className="flex h-[45px] w-full relative">
                        <div className=" absolute left-[5px] h-full max-w-content flex items-center px-[5px] text-gray-600"><EmailSVG size={20} /></div>
                        <input className="w-full h-full pl-[3rem] pr-2 text-[black] text-[1rem] outline-none focus:border-none" type="email" value={emailInput} placeholder="Email" onChange={(e) => {
                            setEmailInput(e.target.value);
                        }} />
                        <label className="inputB"></label>
                        <label className="inputBorderB"></label>
                        <label className="inputBorderL"></label>
                    </div>
                    <div className="flex h-[45px] w-full relative">
                        <div className=" absolute left-[5px] h-full max-w-content flex items-center px-[5px] text-gray-600"><KeySVG size={20} /></div>
                        <input className="w-full h-full pl-[3rem] text-[black] text-[1rem] outline-none focus:border-none" type="password" value={passwordInput} placeholder="Password" onChange={(e) => {
                            setPasswordInput(e.target.value);
                        }} />
                        <label className="inputB"></label>
                        <label className="inputBorderB"></label>
                        <label className="inputBorderL"></label>
                    </div>
                    <div className="flex h-[45px] w-full relative">
                        <div className=" absolute left-[5px] h-full max-w-content flex items-center px-[5px] text-gray-600"><ArrowClockwiseSVG size={20} /></div>
                        <input className="w-full h-full pl-[3rem] text-[black] text-[1rem] outline-none focus:border-none" type="password" value={confirmPassword} placeholder="Confirm Password" onChange={(e) => {
                            setConfirmPassword(e.target.value);
                        }} />
                        <label className="inputB"></label>
                        <label className="inputBorderB"></label>
                        <label className="inputBorderL"></label>
                    </div>
                </div>

                <div className="mt-[3rem] flex flex-col gap-y-[1.5rem]">
                    <button className="py-[14px] w-full text-md text-white font-bold rounded-md outline-none bg-pry hover:bg-[#011114]">Create Account</button>
                    <button className="py-[14px] w-full text-md text-white font-bold rounded-md outline-none bg-info">GOOGLE SIGN IN</button>
                </div>

                <div className="mt-5">
                    <NavLink className={"font-bold text-[#3e41c9] text-md"} to="/login">I have an account</NavLink>
                </div>
            </div>
        </>
    )
}

export { SignUp };