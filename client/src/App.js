import { Route, Routes } from "react-router-dom";
import ChangePassword from "./Pages/ChangePassword";
import Login from "./Pages/Login";
import VideoList from "./Pages/VideoList";
import VideoPlayer from "./Pages/VideoPlayer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/change-password/" element={<ChangePassword />} />
        <Route path={"/video-list/"} element={<VideoList />} />
        <Route path="/video/:videoUrl" element={<VideoPlayer />} />
      </Routes>
    </div>
  );
}

export default App;
