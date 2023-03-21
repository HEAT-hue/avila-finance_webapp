//jshint esversion:6
import { DashboardHeader } from "./DashboardHeader";
import { DashboardBody } from "./DashboardBody";

function Dashboard() {
  return (
    <>
      <div
        className="top-0 inset-x-0 
            flex-col mb-4"
      >
        {/* <div className=""> */}
        <div className="mx-auto max-w-[600px]">
          <DashboardHeader />
        </div>
        {/* </div> */}
      </div>
      <div className="overflow-y-scroll">
        <div className="mx-auto max-w-[700px] h-[400px] pb-10">
          <DashboardBody />
        </div>
      </div>
    </>
  );
}

export { Dashboard };
