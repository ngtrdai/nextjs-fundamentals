export default function GoogleMap({embedUrl}) {
    return (
        <div id="map-wrap">
            <div id="map-container">
                {
                    embedUrl && <iframe src={embedUrl} width="100%" height="100%" frameBorder="0" style={{border: 0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                }
            </div>
        </div>
    )
}