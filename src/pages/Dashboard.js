import "../styles/dashboard.css";
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar';
import Content from "../components/Content";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar/>
      <div className="dashboard-content">
        <div className="navbar">
          <Navbar/>
        </div>
        <div className="body-content">
          <Content/>
        </div>
      </div>
    </div>
  )
}
