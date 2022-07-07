import React from "react";
import "./../Footer.css";

const FooterBottom = () => {
	return (
		<div className="footerBottom flex">
			<div className="BottomLeft w-4/12">
				<p>Privacy Policy</p>
			</div>
			<div className="bottomMidle w-4/12">
				<i class="fa fa-twitter icon fa-lg" aria-hidden="true"></i>
				<i class="fa fa-facebook-official icon fa-lg" aria-hidden="true"></i>
				<i class="fa fa-instagram icon fa-lg" aria-hidden="true"></i>
				<i class="fa fa-pixelfed icon fa-lg" aria-hidden="true"></i>
				<i class="fa fa-peertube icon fa-lg" aria-hidden="true"></i>
				<i class="fa fa-mastodon icon fa-lg" aria-hidden="true"></i>
				<i class="fa fa-chevron-circle-up icon fa-lg" aria-hidden="true"></i>
			</div>
			<div className="bottomRight w-4/12">
				<i class="fa fa-chevron-circle-up fa-3x icon" aria-hidden="true"></i>
			</div>
		</div>
	);
};

export default FooterBottom;
