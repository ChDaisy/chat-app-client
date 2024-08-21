import "./App.css";
// import { useState } from "react";
// import InputField from "./components/InputField/InputField";
// import MessageContainer from "./components/MessageContainer/MessageContainer";
import socket from "./server";

function App() {
  // const [user, setUser] = useState(null);
  // const [message, setMessage] = useState("");
  // const [messageList, setMessageList] = useState([
  //   { key: 0, name: "system", chat: "시스템 메세지입니다" },
  //   { key: 1, name: "my", chat: "하이루~" },
  //   { key: 2, name: "your", chat: "할룽!" },
  //   { key: 3, name: "system", chat: "ruupa님이 대화에 참가하였습니다." },
  //   { key: 4, name: "my", chat: "하이루~" },
  //   {
  //     key: 5,
  //     name: "my",
  //     chat: "하이루~가나다라마바사 아자차카타파하 으헤으헤 으허허",
  //   },
  //   {
  //     key: 6,
  //     name: "your",
  //     chat: "개울가에 올챙이 한마리 꼬물꼬물 헤엄치다 뒷다리가 쑥 앞다리가 쑥 팔딱팔딱 개구리됐네~",
  //   },
  // ]);

  // const sendMessage = (event) => {
  //   event.preventDefault();
  //   // setMessageList(()=>{
  //   //  messageList에 new message를 추가하는 로직
  //   //  })
  //   console.log(message);
  //   setMessage("");
  // };
  return (
    <div className="App">
      {/* <MessageContainer messageList={messageList} />
      <InputField
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage} 
      />*/}
    </div>
  );
}

export default App;
