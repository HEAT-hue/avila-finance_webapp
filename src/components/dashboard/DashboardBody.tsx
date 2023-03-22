// jshint esversion:6
import { AllData } from "../../data/AllData";
import { DateListView } from "./dateList";

function DashboardBody() {
    return (
        <>
            <div className="px-4 h-full">
                <div>
                    <>
                        {AllData.map((dateGroup) => {
                            return <DateListView key={dateGroup.date} dateId={dateGroup.date} transactions={dateGroup.transactions} />
                        })}
                    </>
                    <>
                        {AllData.map((dateGroup) => {
                            return <DateListView key={dateGroup.date} dateId={dateGroup.date} transactions={dateGroup.transactions} />
                        })}
                    </>
                    <>
                        {AllData.map((dateGroup) => {
                            return <DateListView key={dateGroup.date} dateId={dateGroup.date} transactions={dateGroup.transactions} />
                        })}
                    </>
                    <>
                        {AllData.map((dateGroup) => {
                            return <DateListView key={dateGroup.date} dateId={dateGroup.date} transactions={dateGroup.transactions} />
                        })}
                    </>
                </div>
            </div>
        </>
    );
}

export { DashboardBody }
