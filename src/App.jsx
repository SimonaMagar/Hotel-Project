


import { Route, Routes } from "react-router";
import Home from "./page/Home";
import PublicLayout from "./Layout/PublicLayout";
// import Contact from "./page/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}
