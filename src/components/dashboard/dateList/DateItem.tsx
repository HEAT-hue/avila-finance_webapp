// jshint esversion:6
import { PersonFillSVG } from "../../svg";
import { formatCurrency } from "../../../utils";

interface DateItemProps {
    id: string
    title: string
    desc: string
    income: boolean
    amount: number
}

function DateItem({ id, title, desc, income, amount }: DateItemProps) {
    return (
        <>
            <div className="bg-[white] py-2 px-4 border-b-[1px] border-b-[#d6d4d4] flex items-center gap-x-3">
                <span className="text-[grey]"><PersonFillSVG size={16} /></span>
                <div className="flex justify-between w-full">
                    <span className="text-sm text-[#4d3838]">{title}</span>
                    <span className={`text-sm ${income ? `text-[green]` : `text-[#494545]`}`}>{`${income ? "" : "-"} ${formatCurrency(amount)}`}</span>
                </div>
            </div>
        </>
    );
}

export { DateItem };