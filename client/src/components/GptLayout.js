
import { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import SideBar from "./SideBar";
import ChatInput from "./ChatInput";

function GptLayout() {
  const [input, setInput] = useState("");
  const [models, setModels] = useState([]);
  const [currentModel, setCurrentModel] = useState("ada");
  const [chatLog, setChatLog] = useState([
    {
      user: "gpt",
      message: "how can i help you today",
    },
    {
      user: "me",
      message: "I want to use chatGpt today",
    },
  ]);

  useEffect(() => {
    getEngines();
  }, []);
  function clearChat() {
    setChatLog([]);
  }

  function getEngines() {
    fetch("http://localhost:3080/models")
      .then((res) => res.json())
      .then((data) => {
        
        setModels(data.models);
        
      });
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    let chatLogNew = [...chatLog, { user: "me", message: `${input}` }];
    setChatLog(chatLogNew);
    setInput("");

    //fetch response to the api combining the chat log array of messages and sending is as a message to localhost:3000 as apost
    const response = await fetch("http://localhost:3080/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        message: chatLogNew.map((message) => message.message).join(""),
      }),
    });
    const data = await response.json();
    setChatLog([...chatLogNew, { user: "gpt", message: `${data.message}` }]);
  };
  return (
    <div className="flex bg-black text-white h-screen">
      <SideBar clearChat={clearChat} models={models} setCurrentModel={setCurrentModel} />

      <section
        className="flex-1 gap-4 bg-gray-900 text-center h-screen relative  gap-y-2 h-[700px]  px-2   overflow-y-auto
         overflow-x-hidden border-b"
      >
        <div className=" text-left flex flex-col gap-[1px] mb-24">
          {chatLog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <ChatInput
          handleSubmit={handleSubmit}
          input={input}
          setInput={setInput}
        />
      </section>
    </div>
  );
}


export default GptLayout