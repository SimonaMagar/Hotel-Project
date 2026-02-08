// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { Route, Routes } from "react-router";
// import Home from "./page/Home";
// import PublicLayout from "./Layout/PublicLayout";

// // import Contact from "./page/Contact";

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<PublicLayout />}>
//         <Route index element={<Home />} />
//         {/* <Route path="contact" element={<Contact />} /> */}
//       </Route>
//     </Routes>
//   );
// }

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { Route, Routes } from "react-router";
// import Home from "./page/Home";
// import PublicLayout from "./Layout/PublicLayout";
// import About from "./page/About";
// import Dining from "./page/Dining";
// import RoomDetail from "./page/RoomDetail"; // ✅ import new page

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<PublicLayout />}>
//         <Route index element={<Home />} />
//         <Route path="About" element={<About />} />
//         <Route path="Dining" element={<Dining />} />
//         <Route path="room/:id" element={<RoomDetail />} /> {/* ✅ new route */}
//       </Route>
//     </Routes>
//   );
// }

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Route, Routes } from "react-router-dom"; // ✅ use react-router-dom
import Home from "./page/Home";
import PublicLayout from "./Layout/PublicLayout";
import About from "./page/About";
import Dining from "./page/Dining";
import ContactUs from "./page/ContactUs";
// import Rooms & Suites "./page/Rooms & Suites"
import Amenities from "./page/Amenities";
import Rooms from "./page/Rooms"
import RoomDetail from "./page/RoomDetail"; // ✅ import new page

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />{" "}
        <Route path="Dining" element={<Dining />} />
        <Route path="ContactUs" element={<ContactUs />} />
        {/* <Route path="Rooms & Suites" element={<Rooms & Suites />}/> */}
        <Route path="Amenities" element={<Amenities />} />
        <Route path="Rooms" element={<Rooms />} />
        <Route path="room/:id" element={<RoomDetail />} /> {/* ✅ new route */}
      </Route>
    </Routes>
  );
}
