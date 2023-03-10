import { useContext } from "react"
import { iProduct } from "../../../contexts/ShopContext/@types"
import { ShopContext } from "../../../contexts/ShopContext/ShopContext"
import { UserContext } from "../../../contexts/UserContext"
import { StyledCard } from "./StyledLi"

const CardProduct = ({
  img,
  name,
  price,
}: iProduct) => {
  const { user } = useContext(UserContext)
  const { rentAProduct, handleClick, dynamicModal, setDynamicModal,brandSelect,valueColor,valueRadioGender,productList, category } = useContext(ShopContext)


  return (
    <StyledCard>
      {user ? (
        <div className="div__figure--true">
          <button onClick={() => handleClick(name)}>+</button>
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
        <span className="price__product">{price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
      </div>
    </StyledCard>
  )
}

export default CardProduct;
