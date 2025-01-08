import {useNavigate} from "react-router-dom";
import './Home.css'

export default function Home() {
  const navigate=useNavigate()
  return (
    <div className="content-container">
      <div className="content">
        <div className="content-info">
          <h1>Who We Are</h1>
          <p>
            Malazi Kenya Limited is a distinguished Engineering, Procurement,
            and Construction (EPC) contractor with a remarkable footprint in
            both Kenya and the United States. As a proud member of the Acacia
            Group, we bring world-class construction expertise to East Africa
            while maintaining our headquarters in Wichita, Kansas.
          </p>
          <div className="content-btn">
            <button onClick={() => navigate("/About us")}>Learn More </button>
          </div>
        </div>

        <img
          src="images/tractor.jpg"
          alt="tractor-image"
          className="clipped-image"
        />
      </div>
    </div>
  );
}
