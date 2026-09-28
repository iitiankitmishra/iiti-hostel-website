import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import HostelDetail from "./pages/HostelDetail";
import InfoPage from "./pages/InfoPage";
import NotFound from "./pages/NotFound";
import People from "./pages/People";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="people" element={<People />} />
          <Route path="hostels/:hostelId" element={<HostelDetail />} />
          <Route path="rules/:slug" element={<InfoPage section="rules" />} />
          <Route path="booking/:slug" element={<InfoPage section="booking" />} />
          <Route path="forms/:slug" element={<InfoPage section="forms" />} />
          <Route path="facilities/:slug" element={<InfoPage section="facilities" />} />
          <Route path="complaints/:slug" element={<InfoPage section="complaints" />} />
          <Route path="dazz" element={<Navigate to="/dazz/events" replace />} />
          <Route path="dazz/:slug" element={<InfoPage section="dazz" />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
