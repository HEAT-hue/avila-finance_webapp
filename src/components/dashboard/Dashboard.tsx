//jshint esversion:6
import { DashboardHeader } from "./DashboardHeader";
import { DashboardBody } from "./DashboardBody";

function Dashboard() {

    return (
        <>
            <div className="fixed top-0 bottom-[1.5rem] inset-x-0">
                <div className="">
                    <div className="mx-auto max-w-[700px]">
                        <DashboardHeader />
                    </div>
                </div>

                <div className="overflow-y-scroll">
                    <div className="mx-auto max-w-[700px]">
                        <DashboardBody />
                    </div>
                </div>
            </div>
        </>
    );
}

export { Dashboard };