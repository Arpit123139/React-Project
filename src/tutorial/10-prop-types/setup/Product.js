import React from 'react';
import PropTypes  from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg'

//Prop-types are use to check whether the data that we recieve from api is there or not brcause it this example the last item does not have a image object so image.url become defined Now here the prop-types plays there role
const Product = ({image,name,price}) => {

  const url=image&&image.url            // if image is not undefined dthen only access the  image.url 
  // the price for the last item is comming from the default prop
  //  we cannot do this for the image porp because it is accessing the image.url
  return (<article className='product'>
    <img src={url || defaultImage}></img>
    <h4>{name }</h4>
    <p>${price }</p>                
  </article>);
};

//defining the prop types
Product.prototype={
  image:PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired
}

//Assigning de=ifferent value to props

Product.defaultProps={
  name:'default name',
  price:3.99
}


export default Product;
