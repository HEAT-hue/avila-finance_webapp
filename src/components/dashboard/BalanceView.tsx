// jshint esversion:6
import { CalendarSVG } from "../svg";
import { formatCurrency, getFormattedDate } from "../../utils";

function BalanceView() {
    const { year, month, day } = getFormattedDate(new Date().toISOString());

    return (
        <>
            {/* Account details */}
            <div className="w-full h-full p-5 bg-blue-900 flex flex-col gap-y-4 rounded">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-[#ffffffd3] text-[18px]">Balance</h2>
                        <p className="text-xl font-bold text-white">{formatCurrency(0)}</p>
                    </div>
                    <div className="flex gap-x-3">
                        <h2 className="text-[#ffffffd3] text-md font-mono">{`${day}  ${month}, ${year}`}</h2>
                        <span className="text-white"><CalendarSVG /></span>
                    </div>
                </div>

                {/* Income and Expenses */}
                <div className="grid grid-cols-2 gap-x-4">
                    <div className="flex flex-col gap-y-1">
                        <h2 className="text-[#ffffffd3] font-mono">Income</h2>
                        <p className="text-[14px] font-bold text-white bg-[#185c1875] pl-[0.5em] py-2 border-l-[3px] border-l-[#07a807] rounded-sm">{formatCurrency(0)}</p>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <h2 className="text-[#ffffffd3] font-mono">Expense</h2>
                        <p className="text-[14px] font-bold text-white bg-[#6d181865] pl-[0.5em] py-2 border-l-[3px] border-l-[#d80b0b] rounded-sm">{formatCurrency(0)}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export { BalanceView }