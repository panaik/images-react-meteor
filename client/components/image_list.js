// Create our image list component
// Import React
import React from 'react';
import ImageDetail from './image_detail';

// const IMAGES = [
//   { title: 'Pen', link: 'http://dummyimage.com/600x400' },
//   { title: 'Pine Tree', link: 'http://dummyimage.com/600x400' },
//   { title: 'Mug', link: 'http://dummyimage.com/600x400' }
// ];

// Create our component
//  this was with static images before using 'state', 'props' and Imgur API
// const ImageList = () => {
//   const RenderedImages = IMAGES.map(image => {
//     return <ImageDetail key={image.title} image={image} />;
//   });
//
//   return <ul className="media-list list-group">{RenderedImages}</ul>;
// };

// this is rendering with data from Imgur API passed down as props from App component
const ImageList = props => {
  // certain data elements returned from Imgur contains album which is a set of images, not individual images
  // hence that data does not show up in the UI, so we need to filter out album entries
  const validImages = props.images.filter(image => !image.is_album);

  const RenderedImages = validImages.map(image => {
    return <ImageDetail key={image.title} image={image} />;
  });

  return <ul className="media-list list-group">{RenderedImages}</ul>;
};

// Export our component
export default ImageList;
