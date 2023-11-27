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
import StartupProfile from "./pages/companies/StartupProfile";
import Profile from "./pages/Profile";
import MyProfile from "./pages/startup_school/MyProfile";
import Dashboard from "./pages/startup_school/Dashboard";
import DiscoverProfiles from "./pages/startup_school/DiscoverProfiles";
import Inbox from "./pages/startup_school/Inbox";
import ReadTheGuide from "./pages/startup_school/ReadTheGuide";
import CourseOverview from "./pages/startup_school/CourseOverview";
import Curriculum from "./pages/startup_school/Curriculum";
import WeeklyUpdates from "./pages/startup_school/WeeklyUpdates";
import Settings from "./pages/startup_school/Settings";
import Help from "./pages/startup_school/Help";
import FamiliarAskedQuestions from './pages/about/FamiliarAskedQue';
import PreviewProfile from "./pages/startup_school/PreviewProfile";
import Track from "./pages/startup_school/Track";
import CompanyInfo from "./pages/startup_school/CompanyInfo";
import StartupHome from "./pages/startup/StartupHome";


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
          <Route path="/people" element={<People />} exact />
          <Route path="/blogs" element={<Blogs />} exact />
          <Route path="/faq" element={<FamiliarAskedQuestions />} exact />
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
          <Route path="/company/:id" element={<StartupProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-profile" element={<MyProfile />} exact />
          <Route path="/discover-profiles" element={<DiscoverProfiles />} exact />
          <Route path="/inbox" element={<Inbox />} exact />
          <Route path="/read-the-guide" element={<ReadTheGuide />} exact />
          <Route path="/course-overview" element={<CourseOverview />} exact />
          <Route path="/curriculum" element={<Curriculum />} exact />
          <Route path="/weekly-updates" element={<WeeklyUpdates />} exact />
          <Route path="/curriculum" element={<Curriculum />} exact />
          <Route path="/sp-library" element={<Library />} exact />
          <Route path="/settings" element={<Settings />} exact />
          <Route path="/sp-library" element={<Library />} exact />
          <Route path="/help" element={<Help />} exact />
          <Route path="/dashboard" element={<Dashboard />} exact />
          <Route path="/preview-profile" element={<PreviewProfile />} exact />
          <Route path="/track" element={<Track/>} exact/>
          <Route path="/company_info" element={<CompanyInfo/>} exact/>
          <Route path="/register-startup" element={<StartupHome/>} exact/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
