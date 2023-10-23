<script>
	import { Map } from "mapbox-gl";
	import { kml } from "@tmcw/togeojson";
	import InfoView from "./InfoView.svelte";
	import MoreInfo from "./MoreInfo.svelte";
	import { onMount, onDestroy } from "svelte";
	import { addLayers, createLabel, geoJson, renderLabels, hoveredId, registerEvents, selectedItem, map } from './mapHelpers'

	const initialState = { lng: 16.61772, lat: 49.19901, zoom: 12.5 };
	let mapContainer;

	$: if($geoJson){
		if(!$map){
			initMap()
		}else{
			$map.getSource('tracks').setData($geoJson)
		}
	}

	onMount(() => {
		fetch("https://www.google.com/maps/d/kml?forcekml=1&mid=104czyyOzfOp4kn1k4T71Rqzm3ASr1rM")
		.then(function (response) {
			return response.text();
		})
		.then(function (xml) {
			let rawGeoJson = kml(new DOMParser().parseFromString(xml, "text/xml"))
			let i = 0
			rawGeoJson.features.forEach(feature => {
				feature.id = i
				feature.properties.originalColor = feature.properties.color
				i++
			})
			$geoJson = rawGeoJson
		});
	});

	function initMap(){
		$map = new Map({
			container: mapContainer,
			accessToken: 'pk.eyJ1Ijoic29jaWFsbWFwcyIsImEiOiJjbG1xZTd1cmYwMHIxMndwbW9pYmFnNXVlIn0.nzttpPttWSQITK0aU9wbUA',
			style: `mapbox://styles/mapbox/outdoors-v11`,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom,
		});

		// $map.showPadding = true

		$map.on('load', () => {
			renderLabels($map)
			$map.addSource('tracks', {type: 'geojson', data: $geoJson})
			addLayers($map)
			registerEvents($map)

		})
	}

</script>

<div class="map-wrap overflow-hidden relative w-[100svw] h-[100svh]">
	<MoreInfo/>
	<div style="width: 100%; height: 100%; position: absolute;" bind:this={mapContainer} />
	<InfoView/>
</div>