const mapboxgl = require("mapbox-gl");


const tagURLS = {
    activity: 'http://i.imgur.com/WbMOfMl.png',
    hotel: 'http://i.imgur.com/D9574Cu.png',
    restaurant: 'http://i.imgur.com/cqR6pUI.png'
}

module.exports = (activity, coords) => {

    const marker = document.createElement('div');
    marker.style.width = "32px";
    marker.style.height = "39px";
    if (tagURLS[activity]) marker.style.backgroundImage = `url(${tagURLS[activity]})`;
    
    const mark = new mapboxgl.Marker(marker).setLngLat(coords)
    return mark;
}