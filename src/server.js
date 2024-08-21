import { io } from "socket.io-client";
const socket = io("http://localhost:5001"); // 소켓을 만들어 백앤드 주소 연결

export default socket;
