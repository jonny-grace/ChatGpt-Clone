import React from 'react'

function ChatInput({handleSubmit,input,setInput}) {
  return (
    
        <div className=" p-2 fixed bottom-0 w-[1263px] bg-gray-600">
          <form onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              placeholder=" Type your message here"
              className="p-2 h-12 w-[800px] text-xl bg-slate-800 border-none rounded-md shadow-md"
            />
          </form>
          <h3 className='mt-2'>ChatGpt clone developed by <span>Yohannes Lemma</span></h3>
        </div>
    
  )
}

export default ChatInput