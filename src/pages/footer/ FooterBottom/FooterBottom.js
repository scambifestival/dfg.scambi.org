import React from "react";
import "./../Footer.css";

const FooterBottom = () => {
	return (
		<div className="footerBottom flex">
			<div className="BottomLeft w-4/12">
				<p>Privacy Policy</p>
			</div>
			<div className="bottomMidle w-4/12">
				<a href="https://twitter.com/scambifestival">
					<i class="fa fa-twitter icon fa-lg" aria-hidden="true"></i>
				</a>
				<a href="https://www.facebook.com/cambisfestival/">
					<i class="fa fa-facebook-official icon fa-lg" aria-hidden="true"></i>
				</a>
				<a href="https://www.instagram.com/scambifestival/?hl=en">
					<i class="fa fa-instagram icon fa-lg" aria-hidden="true"></i>
				</a>
				<a href="https://pixelfed.uno/scambi">
					<i class="fa fa-pixelfed icon fa-lg" aria-hidden="true"></i>
				</a>
				<a href="https://peertube.uno/c/scambifestival/videos">
					<i class="fa fa-peertube icon fa-lg" aria-hidden="true"></i>
				</a>
				<a href="https://mastodon.uno/@scambi">
					<i class="fa fa-mastodon icon fa-lg" aria-hidden="true"></i>
				</a>
			</div>
			<div className="bottomRight w-4/12">
				<i
					class="fa fa-chevron-circle-up fa-3x icon"
					aria-hidden="true"
					onClick={() => {
						window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
					}}></i>
			</div>
		</div>
	);
};

export default FooterBottom;
