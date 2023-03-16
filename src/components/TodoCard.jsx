import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheckCircle,
    faTrashAlt,
    faEdit,
  } from "@fortawesome/free-solid-svg-icons";

const TodoCard = ({title,status}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-slate-500 rounded-lg shadow-lg">
        <p className="mb-2 text-sm font-medium text-white ">{title}</p>
        {/* Icon box */}
        <div className="text-2xl font-semibold text-gray-700 flex items-center justify-between gap-6">
          <span title='Completed' className=" cursor-pointer">
          <FontAwesomeIcon className=' hover:text-green-300' icon={faCheckCircle}/>
          </span>
          <span title='Delete' className="cursor-pointer">
          <FontAwesomeIcon className='hover:text-red-600' icon={faTrashAlt}/>
          </span>
          <span title='Edit' className="cursor-pointer">
          <FontAwesomeIcon className=' hover:text-slate-200' icon={faEdit}/>
          </span>
        </div>
      </div>
  )
}

export default TodoCard