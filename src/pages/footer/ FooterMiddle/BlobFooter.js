import React from "react";
import "./../Footer.css";
import EmailValidation from "../../../components/emailValidation/EmailValidation";

const BlobFooter = () => {
	return (
		<div className="blob-wrap">
			<div className="blobFooter">
				<div className="contentBlob">
					<p className="subscribeNews">Subscribe to our Newsletter!</p>
					<EmailValidation fileName="Footer" />
				</div>
			</div>
		</div>
	);
};

export default BlobFooter;
