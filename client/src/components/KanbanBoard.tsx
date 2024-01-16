import { CiSquarePlus } from "react-icons/ci";
import { useState } from "react";

import { Column } from '../types';


function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>
  ([]);

  return (
    <div className="
      m-auto
      flex
      min-h-screen
      w-full
      items-center
      overflow-x-auto
      overflow-y-hidden
      px-[40px]
    ">
        <div className="m-auto">
            <button 
          
            className="
           h-[60px]
           w-[350px]
           min-w-[350px]
           cursor-pointer
           rounded-lg
           bg-mainBackgroundColor
           border-2
           border-columnBackgroundColor
           p-4
           ring-rose-500
           hover:ring-2
           flex
           gap-3
            "> 
            <CiSquarePlus />
            Add Column
            </button>
        </div>
    </div>
  )
}

function createNewColumn () {
  
}

export default KanbanBoard;