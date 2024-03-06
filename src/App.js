import React from "react";
import "./App.css";
import axios from "axios";
import { Helmet } from "react-helmet";
import { WhatsappShareButton } from "react-share";

function App() {
	const [data, setData] = React.useState(null);
	const [selectedItem, setSelectedItem] = React.useState(null);

	React.useEffect(() => {
		axios.get("https://reqres.in/api/users?page=1").then((res) => {
			if (res.status == 200) {
				setData(res.data.data);
				setSelectedItem(res.data.data[0]);
			}
		});
	}, []);

	return (
		<>
			<Helmet>
				<title>Home</title>
				<meta
					property="og:title"
					content={selectedItem?.first_name || "Your Default Title"}
				/>
				<meta
					property="og:description"
					content={selectedItem?.last_name || "Your Default Description"}
				/>
				<meta
					property="og:image"
					content={selectedItem?.avatar || "URL to your default preview image"}
				/>
				<meta property="og:url" content={window.location.href} />
				<meta property="og:type" content="website" />
			</Helmet>
			<div className="App">
				{data?.map((item, index) => (
					<div key={index} style={{ margin: '10px 0' }} onClick={() => setSelectedItem(item)}>
						
						<WhatsappShareButton title={item?.first_name} url={'http://localhost:3000/'} separator=": ">
							Share on whatsapp
						</WhatsappShareButton>
					</div>
				))}
			</div>
		</>
	);
}

export default App;
