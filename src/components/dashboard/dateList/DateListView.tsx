// jshint esversion:6
import { getFormattedDate } from "../../../utils"
import { DateItem } from "./DateItem";

interface DateListViewProps {
    dateId: string
    transactions: { id: string; title: string; desc: string; income: boolean; amount: number; }[]
}


function DateListView({ dateId, transactions }: DateListViewProps) {
    const { year, month, day } = getFormattedDate(dateId);

    return (
        <>
            <div className="bg-[#f0ecec91] text-[#9c9999] text-sm py-1 px-[1rem]">{`${day} ${month}, ${year}`}</div>
            <>
                {transactions.map((transaction) => {
                    return <DateItem {...transaction} />
                })}
            </>
        </>
    );
}

export { DateListView };