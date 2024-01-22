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
          <div>
            {columns.map((col) => (
              <div>{col.title}</div>
            ))}
          </div>
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
  );

  function createNewColumn () {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`
    }
    
    setColumns([...columns, columnToAdd]);
  }
}

function generateId () {
  /* Generate a random number between 0 & 10000 */
  return Math.floor(Math.random() * 10001);
}



export default KanbanBoard;