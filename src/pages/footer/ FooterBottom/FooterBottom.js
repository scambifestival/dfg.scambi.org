import React from "react";
import "./../FooterNew.css";

const FooterBottom = () => {
	return (
		<div className="footerBottom">
			<div className="BottomLeft">
				<p>Privacy Policy</p>
			</div>
			<div className="bottomMidle">
				<i class="fa fa-twitter icon fa-lg" aria-hidden="true"></i>
				<i class="fa fa-facebook-official icon fa-lg" aria-hidden="true"></i>
				<i class="fa fa-instagram icon fa-lg" aria-hidden="true"></i>
				<i class="fa fa-pixelfed icon fa-lg" aria-hidden="true"></i>
				<i class="fa fa-peertube icon fa-lg" aria-hidden="true"></i>
				<i class="fa fa-mastodon icon fa-lg" aria-hidden="true"></i>
				<i class="fa fa-chevron-circle-up icon fa-lg" aria-hidden="true"></i>
			</div>
			<div className="bottomRight">
				<i class="fa fa-chevron-circle-up fa-3x icon" aria-hidden="true"></i>
			</div>
		</div>
	);
};

export default FooterBottom;
