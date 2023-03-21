// jshint esversion:6
import { NavLink } from "react-router-dom";
import { LogoSVG } from "../svg";
import { useNavigate } from "react-router-dom";


function Home() {

    // Create a navigator
    const navigate = useNavigate();

    function handleSubmit() {
        navigate("/register");
    }

    return (
        <>
            <main className="bg-homeImg1 bg-no-repeat bg-cover bg-center relative w-full h-screen">
                <div className="absolute inset-0 bg-gradient-to-r from-[#000000de] text-white py-[2rem] px-[1.5rem]">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <LogoSVG size={35} />
                            <h1 className="capitalize font-bold text-3xl">Avila</h1>
                        </div>
                        <NavLink className={"font-bold text-xl"} to={"/login"}>Sign In</NavLink>
                    </div>
                    <div className="mt-[5rem] flex flex-col gap-y-5">
                        <p className="font-bold text-xl w-[30ch]">Never miss a payment</p>
                        <p className="font-bold text-xl w-[30ch]">Let's help to grow your business together</p>
                    </div>
                    <div className="absolute bottom-[6rem] inset-x-0 px-[1.5rem] flex justify-between items-center">
                        <button className="capitalize w-[170px] py-4 bg-gradient-to-r from-[#ada9a9] to-[#ffffff] hover:from-[#fff] hover:to-[#fff] text-[#000000] font-bold rounded-lg" onClick={handleSubmit}>Get Started</button>
                        <div className="flex gap-x-2">
                            <div className="w-3 h-2 bg-gray-100 rounded-lg"></div>
                            <div className="w-2 h-2 bg-[grey] rounded-lg"></div>
                            <div className="w-2 h-2 bg-[grey] rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
export { Home };