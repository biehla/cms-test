const typesetPlugin = require('eleventy-plugin-typeset');
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
// const eleventyNavigation = require('@11ty/eleventy-navigation');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(typesetPlugin());
  eleventyConfig.addPlugin(lazyImagesPlugin, {
  	preferNativeLazyLoad: 'true'
  });
	
	// eleventyConfig.addPlugin(eleventyNavigation);

	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("img");
	eleventyConfig.addPassthroughCopy("js");
	eleventyConfig.addPassthroughCopy("admin");

	eleventyConfig.addShortcode("images", function(orrPics) {
		var str = ``

		for (var imagesAdded = 0; imagesAdded < orrPics.images.length; imagesAdded += 2){
			str = str.concat(`<div class="row">
								<img src="/img/orr-pics/${orrPics.images[imagesAdded]}" class="six columns">
								<img src="/img/orr-pics/${orrPics.images[imagesAdded+1]}" class="six columns">
							</div>\n`)
		}

		return str	});

	eleventyConfig.addShortcode("button-primary", function(text, url){
		return `<a href="${url}"><button class="button-primary">${text}</button></a>`
		});
	eleventyConfig.addShortcode("button", function(text, url){
		return `<a href="${url}"><button>${text}</button></a>`
		});

	eleventyConfig.addShortcode("abbr", function(shown, hidden) {
		return `<abbr title="${hidden}">${shown}</abbr>`
	})
};

// console.log(collections.all);