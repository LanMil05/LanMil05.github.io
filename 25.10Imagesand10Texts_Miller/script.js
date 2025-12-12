// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');

// Array of slides (10 images)
const slides = [
{ src: 'images/image01.jpg', 
 alt: 'camping',
 caption: 'This is when we stopped on the border of Wisconsin coming from Minnesota, we decided to stop for the night and camp out before we hit the road for a long time'
},
{ src: 'images/image02.jpg', 
 alt: 'heaven',
 caption: 'Our first major sight seen was the largest Culver\'s'
},
{ src: 'images/image03.jpg', 
 alt: 'bean',
 caption: 'While we first entered Chicago we got our first and not only attack from the rain caused by Hurricane Beryl'
},
{ src: 'images/image04.jpg', 
 alt: 'river',
 caption: 'The whole trip was a very big change to our lives as this was the first time we had been let free to explore and we had successfully explored a big city like Chicago all by ourselves'
},
{ src: 'images/image09.jpg', 
 alt: 'elevator',
 caption: 'Once we parked in a garage in Chicago we took this picture as the first official photo of the entire trip'
},
{ src: 'images/image05.jpg', 
 alt: 'water',
 caption: 'Once we hit Niagara Falls we had a good hour of clear skys until we were met with some of the worst rain I have ever experienced, so bad in fact I couldn\'t see in front of me'
},
{ src: 'images/image06.jpg', 
 alt: 'cheers',
 caption: 'When we hit Boston my father asked me to take a picture of the Cheers bar from the old sitcom show that he loved watching'
},
{ src: 'images/image07.jpg', 
 alt: 'sunset',
 caption: 'In Maine we scaled this hill to get this stunning overlook of the Atlantic Ocean and watch the sunrise'
},
{ src: 'images/image08.jpg', 
 alt: 'morewet',
 caption: 'Hurricane Beryl followed us the entire trip and there wasn\'t a full 24 hours that we weren\'t dry on that entire week long trip'
},
{ src: 'images/image10.jpg', 
 alt: 'tree',
 caption: 'When I arrived back home I was very exhausted but the storm that hit my home had knocked one of our trees down onto our neighbor\'s house so I had to deal with manual labor before I could fully rest from my travels'
},

];
let currentIndex = 0;
// Preload images
slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});
// Helper to show slide
function showSlide(index) {
const slide = slides[index];
mainImage.src = slide.src; // replaces the image
mainImage.alt = slide.alt; // replaces the alt of the image
caption.textContent = slide.caption; // updates caption text
}
// Advance on click
function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}
// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);