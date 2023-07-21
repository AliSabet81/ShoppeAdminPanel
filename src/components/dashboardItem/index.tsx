import { ReactElement } from "react";

interface IDashboardItem {
    title : string,
    count:string,
    icon:ReactElement,
    borderR?:boolean,
    class?:string
}

const DashboardItem = (i:IDashboardItem) => {
  return (
    <div className={`flex ${i.borderR ? "border-r" : ''} gap-5`}>
      <div className={`h-20 w-20 flex justify-center items-center ${i.class} rounded-full`}>
        {i.icon}
      </div>
      <div className="justify-around flex flex-col">
        <h3 className="text-gray-400">{i.title}</h3>
        <h2 className="font-semibold text-3xl">{i.count}</h2>
      </div>
    </div>
  );
};

export default DashboardItem;