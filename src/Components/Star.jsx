import Star from 'react-stars'
import React from 'react'
import { render } from 'react-dom'
 
const ratingChanged = (newRating) => {
  console.log(newRating)
}
 
render(<Star
  count={5}
  onChange={ratingChanged}
  size={24}
  color2={'#ffd700'} />,
 
  document.getElementById('where-to-render')
);
