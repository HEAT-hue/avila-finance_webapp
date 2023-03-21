// jshint esversion:6
import { PersonFillSVG, AddSVG, DashSVG } from "../svg";
import { BalanceView } from "./BalanceView";

function DashboardHeader() {
  return (
    <div className="py-3 px-4 bg-[#ffffff]">
      {/* User | Balance Overview */}
      <div>
        {/* User details */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <div className="text-pry">
              <PersonFillSVG size={20} />
            </div>
            <h1 className="font-bold text-sm text-[#3b3939]">Hello John</h1>
          </div>
        </div>

        {/* Balance details */}
        <div className="mt-">
          <BalanceView />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-x-5">
          <button className="flex py-3 pl-4 gap-x-3 rounded-md border-[1px] border-[#349234a9] shadow-sm text-[#175e17da]">
            {" "}
            <span>
              <AddSVG size={18} />
            </span>
            <span className="font-mono font-bold">Add money</span>
          </button>
          <button className="flex py-3 pl-4 gap-x-3 rounded-md border-[1px] shadow-sm text-[#9b2828e8] ">
            {" "}
            <span>
              <DashSVG size={18} />
            </span>
            <span className="font-mono font-bold">Spend money</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export { DashboardHeader };
