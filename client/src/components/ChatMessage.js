import React from 'react'

import icon from "../asset/gpticon.png";
const ChatMessage = ({ message }) => {
    return (
      <div className="bg-gray-600 ">
        <div
          className={`p-[12px] px-[24px]  flex max-w-[480px] mx-auto  ${
            message.user === "gpt" && "chatgpt"
          }`}
        >
          {/* avatar  */}
          <div className=" bg-white rounded-full w-[40px] h-[40px]">
            {message.user === "gpt" && (
              <div className="bg-green-400 rounded-full w-[45px] h-[45px] overflow-hidden">
                <img src={icon} className=" w-58 " />
              </div>
            )}
          </div>
          {/* message  */}
          <div
            className={`px-[40px] flex items-center ${
              message.user === "gpt" && "chatgpt"
            }`}
          >
            {message.message}
          </div>
        </div>
      </div>
    );
  };

export default ChatMessage