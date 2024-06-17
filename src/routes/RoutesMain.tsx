import { Routes, Route } from "react-router-dom";
import { Feed } from "../components/pages/feed/Feed";
import { Calendar } from "../components/pages/calendar/Calendar";
import { Profile } from "../components/pages/profile/Profile";
import { Error } from "../components/pages/error/Error";

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/calendario" element={<Calendar />} />
        <Route path="/mi-perfil" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
