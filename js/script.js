'use strict';

(function() {
	let galleryTemplate = document.getElementById('gallery-template').innerHTML;
	let galleryList = '';
	
	for(var i= 0; i < galleryData.length; i++) {
		galleryList += Mustache.render(galleryTemplate, galleryData[i]);
	}

	let carouselMain = document.getElementById('carousel-main');
	carouselMain.innerHTML = galleryList;

	let carousel = document.querySelector('.carousel');
	let flkty = new Flickity(carousel, {
		hash: true, wrapAround: true
	});
})();