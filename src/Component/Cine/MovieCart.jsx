import React, { useContext, useState } from "react";
import { getImgUrl } from "../../utils/cine-utility";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal";
import { CartContext } from "../../context";

const MovieCart = ({ movie }) => {
  const [showMOdal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCloseModal = () => {
    console.log("clicked  close ");

    setSelectedMovie(null);
    setShowModal(false);
  };
  const handleMovieSelection = (movie, e) => {
    e.preventDefault();
    setSelectedMovie(movie);
    setShowModal(true);
  };
  const { shopingCart, setShopingCart } = useContext(CartContext);

  const handleAddToCart = (movie, e) => {
   e.preventDefault();
    e.stopPropagation();
    const found= shopingCart.find(item=>item.id === movie.id);
    if(!found){

        setShopingCart([
          ...shopingCart,
          movie,
        ]);
    }
  ;
  };

  return (
    <>
      {" "}
      {showMOdal && (
        <MovieDetailsModal movie={selectedMovie} onClose={handleCloseModal} onAdd={handleAddToCart} />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="" onClick={(e) => handleMovieSelection(movie, e)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(movie, e)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>$100 | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCart;
