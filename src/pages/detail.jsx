import React from "react";
import { Helmet } from "react-helmet";
import { WhatsappShareButton } from "react-share";

export default function DetailPage({ item }) {
	const [url, setUrl] = React.useState(null);

	const elementRef = React.useRef(null);

	React.useEffect(() => {
		setUrl(window.location.href);
	}, []);

	React.useEffect(() => {
		if (elementRef.current) {
			elementRef.current.click();
		}
	}, [elementRef]);

	if (url) {
		return (
			<>
				<Helmet>
					<title>Home</title>
					<meta
						property="og:title"
						content={item?.first_name || "Your Default Title"}
					/>
					<meta
						property="og:description"
						content={item?.last_name || "Your Default Description"}
					/>
					<meta
						property="og:image"
						content={
							item?.avatar || "URL to your default preview image"
						}
					/>
					<meta property="og:url" content={window.location.href} />
					<meta property="og:type" content="website" />
				</Helmet>
				<div ref={elementRef}>
					<WhatsappShareButton
						title={item?.first_name}
						url={url}
						separator=": "
					>
						Share 
					</WhatsappShareButton>
				</div>
			</>
		);
	}
}
