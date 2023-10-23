import { writable, get } from "svelte/store";
import mapbox from 'mapbox-gl';
const { Popup, Marker } = mapbox;
import polylabel from 'polylabel'

const inActiveColor = '#BDBDBD'

export const geoJson = writable()
export const hoveredTrackId = writable()
export const hoveredId = writable()
export const selectedItem = writable()
export const map = writable()

function getCurrentPadding(){
	return {
		right: window.innerWidth > 768 ? 660 : 0,
		bottom: window.innerWidth > 768 ? 0 : window.innerHeight/2
	}
}

const popup = new Popup({
	closeButton: false,
	closeOnClick: false,
	offset: [0, -18],
});

hoveredTrackId.subscribe(value => {
	if(get(geoJson)){
		if(value){
			geoJson.update(e => {
				e.features.forEach(feature => {
					if(!get(selectedItem)){
						if(feature.properties.trackId !== get(hoveredTrackId)){
							feature.properties.color = inActiveColor
						}else{
							feature.properties.color = feature.properties.originalColor
						}
					}
				});
				return e
			})
		}else{
			geoJson.update(e => {
				e.features.forEach(feature => {
					if(!get(selectedItem)){
						feature.properties.color = feature.properties.originalColor
					}
				});
				return e
			})
		}
	}
})


let selectedTrackId
selectedItem.subscribe(value => {
	popup.remove()
	if(!value && get(geoJson)){
		geoJson.update(e => {
			e.features.forEach(feature => {
				feature.properties.color = feature.properties.originalColor
			});
			return e
		})

	}else{
		if(value){
			if(selectedTrackId !== value.properties.trackId){
				geoJson.update(e => {
					e.features.forEach(feature => {
						if(feature.properties.trackId === value.properties.trackId){
							feature.properties.color = feature.properties.originalColor
						}else{
							feature.properties.color = inActiveColor
						}
					});
					return e
				})
			}
		}
	}
})

export function addLayers(){
	//LINE OUTLINE
	get(map).addLayer({
		'id': 'tracks-lines-outline',
		'type': 'line',
		'source': 'tracks',
		'filter': ['==', '$type', 'LineString'],
		'layout': {
			'line-join': 'round',
			'line-cap': 'round'
		},
		'paint': {
			'line-width': 10,
			'line-color': '#ffffff',
			'line-opacity': [
				'case',
				['boolean', ['feature-state', 'hover'], false], 
				1,                                             
				['boolean', ['feature-state', 'selected'], false], 
				1,                                              
				0,   
			],
		}
	});
	//LINE BASE
	get(map).addLayer({
		'id': 'tracks-lines',
		'type': 'line',
		'source': 'tracks',
		'filter': ['==', '$type', 'LineString'],
		'layout': {
			'line-join': 'round',
			'line-cap': 'round'
		},
		'paint': {
			'line-width': 6,
			'line-color': ['get', 'color'],
			'line-opacity': [
				'case',
				['boolean', ['feature-state', 'hover'], false], 
				1,                                             
				['boolean', ['feature-state', 'selected'], false], 
				1,                                              
				0.8,   
			],
		}
	});

	//POINT BASE
	get(map).addLayer({
		'id': 'tracks-points',
		'type': 'circle',
		'source': 'tracks',
		'filter': ['==', '$type', 'Point'],
		'paint': {
			'circle-radius': [
				'case',
				['boolean', ['feature-state', 'hover'], false], 
				13,                                             
				['boolean', ['feature-state', 'selected'], false], 
				13,                                              
				10,        
			],
			'circle-opacity': [
				'case',
				['boolean', ['feature-state', 'hover'], false], 
				1,                                             
				['boolean', ['feature-state', 'selected'], false], 
				1,                                              
				0.8,   
			],
			'circle-color': ['get', 'color'],
			'circle-stroke-color': '#ffffff',
			'circle-stroke-width': 2,
			'circle-stroke-opacity': [
				'case',
				['boolean', ['feature-state', 'hover'], false], 
				1,                                             
				['boolean', ['feature-state', 'selected'], false], 
				1,                                              
				0,                                            
			],
		}
	});

	//POLYGON OUTLINE
	get(map).addLayer({
		'id': 'tracks-polygons-outline',
		'type': 'line',
		'source': 'tracks',
		'filter': ['==', '$type', 'Polygon'],
		'paint': {
			'line-color': '#ffffff',
			'line-width': 4,
			'line-opacity': [
				'case',
				['boolean', ['feature-state', 'hover'], false], 
				1,                                             
				['boolean', ['feature-state', 'selected'], false], 
				1,                                              
				0,   
			]
		}
	});
	//POLYGON BASE
	get(map).addLayer({
		'id': 'tracks-polygons',
		'type': 'fill',
		'source': 'tracks',
		'filter': ['==', '$type', 'Polygon'],
		'paint': {
			'fill-color': ['get', 'color'],
			'fill-opacity':[
				'case',
				['boolean', ['feature-state', 'hover'], false], 
				1,                                             
				['boolean', ['feature-state', 'selected'], false], 
				1,                                              
				0.8,   
			]
		}
	});
}

//LABEL
export function createLabel(text){
	let el = document.createElement('div')
	el.classList.add('marker')
	el.innerHTML = text
	return el
}

//CALC CENTER
export function calculatePolygonCentroid(coordinates) {
	if (coordinates.length === 0) {
		return [0, 0];
	  }
	
	  // Initialize variables to store the sum of X and Y coordinates
	  let sumX = 0;
	  let sumY = 0;
	
	  // Iterate through the array of arrays and calculate the sum of X and Y
	  for (const point of coordinates) {
		if (point.length >= 2) {
		  sumX += point[0];
		  sumY += point[1];
		}
	  }
	
	  // Calculate the average (mean) of X and Y coordinates
	  const centerX = sumX / coordinates.length;
	  const centerY = sumY / coordinates.length;
	
	  return [centerX, centerY];
}

//CALC MOST NORTH
export function findNorthernmostPoint(coordinates) {
	coordinates = coordinates[0]
	if (coordinates.length === 0) {
	  return null;
	}
  
	let northernmostPoint = coordinates[0];
  
	for (let i = 1; i < coordinates.length; i++) {
	  const currentCoordinate = coordinates[i];
  
	  if (currentCoordinate[1] > northernmostPoint[1]) {
		northernmostPoint = currentCoordinate;
	  }
	}
	return northernmostPoint;
}

//RENDER ALL MARKERS FOR TRACES
export function renderLabels(){
	get(geoJson).features.forEach(feature => {
		if(feature.geometry.type === 'LineString'){
			let center = calculatePolygonCentroid(feature.geometry.coordinates)
			let el = createLabel(feature.properties.name)
			el.addEventListener('click', (e) => {
				e.preventDefault();
				selectItem(feature)
			})
			el.addEventListener('mouseenter', () => {
				hoveredTrackId.set(feature.properties.trackId)
			})
			el.addEventListener('mouseleave', () => {
				hoveredTrackId.set(null)
			})
			let marker = new Marker({
				element: el
			}).setLngLat(getItemCenter(feature));

			marker.addTo(get(map))

		}
	})
}

export function registerEvents(){
	get(map).on('mousemove', ['tracks-lines', 'tracks-polygons', 'tracks-points'], (e) => {
		get(map).getCanvas().style.cursor = 'pointer'
		if (e.features.length > 0) {
			let feature = e.features[0]

			if(get(hoveredId))
				get(map).setFeatureState({ source: 'tracks', id: get(hoveredId) }, { hover: false });

			if(['tracks-points', 'tracks-polygons'].includes(feature.layer.id)){
				let center = feature.geometry.coordinates
				if(feature.layer.id === 'tracks-polygons'){
					center = findNorthernmostPoint(feature.geometry.coordinates)
				}
				popup.setLngLat(center).setHTML(feature.properties.name).addTo(get(map));
			}

			hoveredTrackId.set(feature.properties.trackId)
			hoveredId.set(feature.id)
		
			get(map).setFeatureState({ source: 'tracks', id: get(hoveredId) }, { hover: true });
		}
	})

	get(map).on('mouseleave', ['tracks-lines', 'tracks-polygons', 'tracks-points'], () => {
		get(map).getCanvas().style.cursor = '';
		hoveredTrackId.set(null)
		get(map).setFeatureState({ source: 'tracks', id: get(hoveredId) }, { hover: false });		
		popup.remove();
	});

	get(map).on('click', ['tracks-lines', 'tracks-polygons', 'tracks-points', ], (e) => {
		e.preventDefault();
		if (e.features.length > 0) {
			selectItem(e.features[0])
		}
	});

	get(map).on('click', (e) => {
		if (e.originalEvent.target.closest('.mapboxgl-marker') || e.defaultPrevented === true) {
			return
		}
		selectItem(null)
	});

}

function getItemCenter(item){
	switch (item.geometry.type) {
		case 'Polygon':
			return polylabel(item.geometry.coordinates, 1.0)
		case 'LineString':
			return polylabel([[...item.geometry.coordinates, item.geometry.coordinates[0] ]], 1.0)
		default:
			return item.geometry.coordinates
	}
}

let prevItem
export function selectItem(item){
	if(item){
		get(map).setPadding(getCurrentPadding())
		get(map).flyTo({
			center: getItemCenter(item)
		});
	}else{
		get(map).setPadding({right: 0, bottom: 0})
		
	}

	if(prevItem){
		get(map).setFeatureState({ source: 'tracks', id: prevItem.id }, { selected: false });
	}

	prevItem = item
	selectedItem.set(item)
	if(item){
		get(map).setFeatureState({ source: 'tracks', id: item.id }, { selected: true });
		selectedTrackId = item.properties.trackId
	}
}




	// let feature = e.features[0]
	
	// hoveredTrackId = feature.properties.trackId
	// hoveredPoint = feature.id
	// map.setFeatureState(
	// 	{ source: 'tracks', id: hoveredPoint },
	// 	{ hover: true }
	// );
