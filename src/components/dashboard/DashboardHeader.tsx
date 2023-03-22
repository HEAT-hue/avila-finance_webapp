// jshint esversion:6
import { PersonFillSVG, AddSVG, DashSVG } from "../svg";
import { BalanceView } from "./BalanceView";

function DashboardHeader() {
    return (
        <div className="p-4 bg-[#ffffff] h-full flex flex-col gap-y-2">
            {/* User details */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                    <div className="text-pry"><PersonFillSVG size={20} /></div>
                    <h1 className="font-bold text-sm text-[#3b3939]">Hello John</h1>
                </div>
            </div>

            {/* Balance details */}
            <div>
                <BalanceView />
            </div>

            <div className="grid grid-cols-2 gap-x-5">
                <button className="flex py-3 pl-4 gap-x-3 rounded-md border-[1px] shadow-sm text-[#175e17da]"> <span><AddSVG size={18} /></span> <span className="font-mono font-bold">Add money</span></button>
                <button className="flex py-3 pl-4 gap-x-3 rounded-md border-[1px] shadow-sm text-[#9b2828e8] "> <span><DashSVG size={18} /></span> <span className="font-mono font-bold">Spend money</span></button>
            </div>
        </div>
    );
}

export { DashboardHeader }
