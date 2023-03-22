//jshint esversion:6
import { DashboardHeader } from "./DashboardHeader";
import { DashboardBody } from "./DashboardBody";

function Dashboard() {

    return (
        <>
            <div className="">
                <div className="bg-blue-500">
                    <div className="mx-auto max-w-[700px] fixed inset-x-0 h-[300px]">
                        <DashboardHeader />
                    </div>
                </div>

                <div className="fixed inset-x-0 top-[290px] bottom-[2rem] overflow-y-scroll">
                    <div className="mx-auto max-w-[700px]">
                        <DashboardBody />
                    </div>
                </div>
            </div>
        </>
    );
}

export { Dashboard };
