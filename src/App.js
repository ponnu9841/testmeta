import React from "react";
import "./App.css";
import axios from "axios";
import { Helmet } from "react-helmet";
import { WhatsappShareButton } from "react-share";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"; // Changed Router to Routes
import DetailPage from "./pages/detail";

function App() {
  const [data, setData] = React.useState(null);
  const [selectedItem, setSelectedItem] = React.useState(null);

  React.useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1").then((res) => {
      if (res.status === 200) { // Changed == to ===
        setData(res.data.data);
        setSelectedItem(res.data.data[0]);
      }
    });
    
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="App">
          {data?.map((item, index) => (
            <React.Fragment key={index}>
            	<Link to={"/" + index} key={index}> {/* Added key attribute */}
	              <div style={{ margin: "10px 0" }}>
	                Share on whats app
	              </div>
	            </Link>
				<Routes>
				<Route path="/:id" element={<DetailPage item={item}/>} /> {/* Changed Router to Routes */}
			  </Routes>
            </React.Fragment>
          ))}
        </div>
        
      </BrowserRouter>
    </>
  );
}

export default App;
