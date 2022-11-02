import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Home} from "./pages/home/Home.jsx"
import {All} from "./pages/all/All.jsx"
import { Codeforces } from "./pages/codeforces/Codeforces.jsx";
import { Codechef } from "./pages/codechef/Codechef.jsx";
import { CodeforcesGym } from "./pages/codeforcesgym/CodeforcesGym.jsx";
import { LeetCode } from "./pages/leetcode/LeetCode.jsx";
import { HackerRank } from "./pages/hackerrank/HackerRank.jsx";
import { HackerEarth } from "./pages/hackerearth/HackerEarth.jsx";
import { AtCoder } from "./pages/atcoder/AtCoder.jsx";
import { TopCoder } from "./pages/topcoder/TopCoder.jsx";
import { CSAcademy } from "./pages/csacademy/CSAcademy.jsx";
import { KickStart } from "./pages/kickstart/KickStart.jsx";
import { Navbr } from "./components/navbar/Navbar.jsx";
import { Footer } from "./components/footer/Footer.jsx";
function App() {
  return (
    <BrowserRouter>
    <Navbr/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/all" element={<All/>}></Route>
      <Route path="/codeforces" element={<Codeforces/>}></Route>
      <Route path="/code_chef" element={<Codechef/>}></Route>
      <Route path="/codeforces_gym" element={<CodeforcesGym/>}></Route>
      <Route path="/leet_code" element={<LeetCode/>}></Route>
      <Route path="/kick_start" element={<KickStart/>}></Route>
      <Route path="/hacker_rank" element={<HackerRank/>}></Route>
      <Route path="/hacker_earth" element={<HackerEarth/>}></Route>
      <Route path="/at_coder" element={<AtCoder/>}></Route>
      <Route path="/top_coder" element={<TopCoder/>}></Route>
      <Route path="/cs_academy" element={<CSAcademy/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
