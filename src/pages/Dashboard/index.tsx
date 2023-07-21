import GroupIcon from "@mui/icons-material/Group";
import StoreIcon from "@mui/icons-material/Store";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PaidIcon from "@mui/icons-material/Paid";
import DashboardItem from "../../components/dashboardItem";
import Chart from "../../components/Chart";

const Dashboard = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-10 p-20 bg-gray-50">
      <div>
        <h1 className="text-3xl">Hello Evano 👋🏼,</h1>
      </div>
      <div className="grid grid-cols-4 gap-10 bg-white py-8 px-12 rounded-xl">
        <DashboardItem title={"Customers"} class="bg-sky-300" count={"123"} icon={<GroupIcon sx={{ fontSize: 40 }} />} borderR={true}/>
        <DashboardItem title={"Products"} class="bg-red-300" count={"123"} icon={<StoreIcon sx={{ fontSize: 40 }} />} borderR={true}/>
        <DashboardItem title={"Orders"} class="bg-slate-300" count={"123"} icon={<BusinessCenterIcon sx={{ fontSize: 40 }} />} borderR={true}/>
        <DashboardItem title={"ToTal Income"} class="bg-amber-300" count={"123"} icon={<PaidIcon sx={{ fontSize: 40 }} />}/>
      </div>
      <div>
        <Chart/>
      </div>
    </div>
  );
};

export default Dashboard;
