import React from 'react'

function SideBar({clearChat,models,setCurrentModel}) {
  
  return (
    <aside className="border border-black w-[240px]  text-center">
        <div
          className="border border-white p-2 m-1 rounded-md text-left  bg-gray-900 hover:bg-gray-700 duration-300"
          onClick={clearChat}
        >
          <span className=" px-3 font-bold ">+</span>
          New Chat
        </div>
        <div>
          <select className=' bg-gray-800 px-2 w-[150px] py-2 rounded-sm' onChange={(e)=>{
            setCurrentModel(e.target.value);
          }}>
            
            {models.map((model, index) => {
             return(<option key={model.id} value={model.id} className=' bg-gray-800'>
                {model.id}
              </option>)
             
              
            })}
          </select>
        </div>
      </aside>
  )
}

export default SideBar