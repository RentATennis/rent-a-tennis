import React, { useContext } from "react";
import { iProduct } from "../../../contexts/ShopContext/@types";
import { ShopContext } from "../../../contexts/ShopContext/ShopContext";
import { UserContext } from "../../../contexts/UserContext";
import { StyledCard } from "./StyledLi";

const CardProduct = ({
  brand,
  category,
  color,
  dayEnd,
  dayStart,
  genre,
  id,
  img,
  isRented,
  name,
  price,
  size,
}: iProduct) => {
  const { user } = useContext(UserContext);
  const { rentAProduct, handleClick, dynamicModal, setDynamicModal } = useContext(ShopContext);

  return (
    <StyledCard>
      {user ? (
        <div className="div__figure--true">
          <button onClick={() => handleClick(id)}>+</button>
          <img src={img} alt={name} />
        </div>
      ) : (
        <div className="div__figure--false">
          <button onClick={() => setDynamicModal(!dynamicModal)}>+</button>
          <img src={img} alt={name} />
        </div>
      )}

      <div>
        <span className="name__product">{name}</span>
        <span className="price__product">R$ {price.toFixed(2)}</span>
      </div>
    </StyledCard>
  );
};

export default CardProduct;
