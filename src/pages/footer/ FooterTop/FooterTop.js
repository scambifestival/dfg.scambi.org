import React from "react";
import "./../Footer.css";
import Button from "../../../components/button/index";

const FooterTop = () => {
	return (
		<div className="footerTop flex">
			<div className="topLeft w-1/5">
				<h2 className="headText pl-16 pb-0 pt-4">Scambi</h2>
			</div>
			<div className="topRight flex pt-4">
				<div className="topRigh1t w-2/3 p-8">
					<h6 className="readyToJoin">Ready to join us?</h6>
				</div>
				<div className="topRight2  pt-4">
					<Button>ATTEND</Button>
				</div>
			</div>
		</div>
	);
};

export default FooterTop;
