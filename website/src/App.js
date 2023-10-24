import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatHappensAtSP from "./pages/about/WhatHappensAtSP";
import Error from "./pages/Error";
import Apply from "./pages/about/Apply";
import InterviewGuide from "./pages/about/InterviewGuide";
import People from "./pages/about/People";
import Blogs from "./pages/about/Blogs";
import StartupDirectory from "./pages/companies/StartupDirectory";
import TopCompanies from "./pages/companies/TopCompanies";
import FounderDirectory from "./pages/companies/FounderDirectory";
import Product from "./pages/companies/Product";
import StartupJobs from "./pages/startup_jobs/StartupJobs";
import CoFounderMatching from "./pages/find_a_co_founder/CoFounderMatching";
import StartupSchool from "./pages/find_a_co_founder/StartupSchool";
import Newsletter from "./pages/resources/Newsletter";
import HackersNews from "./pages/resources/HackersNews";
import Library from "./pages/lib/Library";

function App() {
  return (
    <div className="font-righteous bg-[#f9fbf2]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="*" element={<Error />} exact />
          <Route path="/what_happens_at_sp" element={<WhatHappensAtSP />} exact />
          <Route path="/apply" element={<Apply />} exact />
          <Route path="/interview_guide" element={<InterviewGuide />} exact />
          <Route path="/faq" element={<faq />} exact />
          <Route path="/people" element={<People />} exact />
          <Route path="/blogs" element={<Blogs />} exact />
          <Route path="/startup_directory" element={<StartupDirectory />} exact />
          <Route path="/top_companies" element={<TopCompanies />} exact />
          <Route path="/founder_directory" element={<FounderDirectory />} exact />
          <Route path="/product" element={<Product />} exact />
          <Route path="/startup" element={<StartupJobs />} exact />
          <Route path="/find-co-founder" element={<CoFounderMatching />} exact />
          <Route path="/startup_school" element={<StartupSchool />} exact />
          <Route path="/newsletter" element={<Newsletter />} exact />
          <Route path="/hackers_news" element={<HackersNews />} exact />
          <Route path="/library" element={<Library />} exact />
          {/* <Route path="/apply" element={<Apply />} exact /> */}
          {/* <Route path="/apply" element={<Apply />} exact /> */}

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
