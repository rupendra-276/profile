import { Eye, Search } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { RiGroupLine } from "react-icons/ri";

export default function ProfileAnalytics() {
  return (
      <div   className="my-5 p-3 custom-shadow border border-gray-200 rounded-sm bg-white">
          <h2 className="text-gray-900 font-semibold text-lg font-[inter]">Profile Analytics</h2>
        <div className="flex items-center justify-between gap-3 my-2">
          <div className="flex  items-center gap-2">
         
          <Eye className="w-8 h-8 bg-blue-200/50 p-1 rounded-sm text-blue-500" />
          <div>
           <p className=" font-semibold text-[15px] font-[inter]">Profile Views</p>
            <p className="text-[11px]">This Week</p>
           </div>
          
          </div>
          <div className="text-right">
            <p className="font-semibold text-lg">156</p>
            <p className="text-green-600 text-sm flex ">
          <TrendingUp className="w-6 h-6  p-1 text-green-600  rounded-sm " />
            +12%</p>
          </div>
        </div>

        <div className="flex items-center justify-between my-2 gap-3">
          <div className="flex items-center gap-2">
            <RiGroupLine className="w-8 h-8 bg-blue-300/80 p-1 rounded-sm text-blue-900" />
            
             <div>
           <p className=" font-semibold text-[15px] font-[inter]">Search Appearances</p>
            <p className="text-[11px]">This Week</p>
           </div>
          </div>
          <div className="text-right">
            <p className="font-semibold text-lg">89</p>
            <p className="text-green-600 text-sm flex ">
          <TrendingUp className="w-6 h-6  p-1 text-green-600  rounded-sm " />
            +12%</p>
          
          </div>
        </div>
      </div>
    
  );
}
