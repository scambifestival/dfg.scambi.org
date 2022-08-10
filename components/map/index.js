export default function Map() {
	return (
		<div className="shadow-2xl rounded-xl overflow-hidden">
			<iframe
				width="100%"
				height="400px"
				frameBorder="0"
				allowFullScreen
				src="//umap.openstreetmap.fr/en/map/scambi-2022_792002?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=true&searchControl=true&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false"></iframe>
		</div>
	);
}
