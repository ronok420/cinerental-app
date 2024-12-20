import React from 'react';
import Star  from '../../assets/star.svg';

const Rating = ({value}) => {
    // console.log('value',value);
const stars= Array(value).fill(Star);
// console.log(stars.length);

    return (
       <>
       {
        stars.map((star,index)=>(
            <img 
            key={index} src={star} alt="star" 
            width="14"
            height="14"
          
            />
        ))

       }
       </>
    );
};

export default Rating;