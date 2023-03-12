import React, { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Avatar from "@mui/material/Avatar"
import { lightBlue } from "@mui/material/colors"
import { StyledProfilePage } from "./StyledProfilePage"
import { UserContext } from "../../contexts/UserContext"
import { StyledFooter } from "./StyledFooter"
import { StyledProfileContainer } from "./StyledProfileContainer"
import { ShopContext } from "../../contexts/ShopContext/ShopContext"
import RentProductCard from "../../components/RentProductCard/RentProductCard"
import { StyledProfileEmpty } from "./StyledProfileEmpty"
import { StyledProfileHeader } from "./StyledProfileHeader"

const ProfilePage = () => {
  const { productList, userProducts } = useContext(ShopContext)
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  return (
    <StyledProfilePage>
      <StyledProfileHeader>
        <nav>
          <div className="profile">
            <Avatar sx={{ bgcolor: lightBlue }} alt={user?.user.name}></Avatar>
            <h2>{user?.user.name}</h2>
          </div>
          <div className="navContent">
            <Link to={"/dashboard"} className="link white">Voltar</Link>
            <button className="link black">Sair</button>
          </div>
        </nav>
      </StyledProfileHeader>
      <StyledProfileContainer>
        {userProducts ? (
          userProducts.map((product) => (
            <RentProductCard
              key={product.id}
              img={product.img}
              name={product.name}
              price={product.price}
              daysRent={2}
              dayEnd={0}
            />
          ))
        ) : (
          <StyledProfileEmpty>
            <p>Você ainda não alugou nenhum produto</p>
          </StyledProfileEmpty>
        )}
      </StyledProfileContainer>
      <StyledFooter>
        <img src="src/assets/logotipo.png" />
      </StyledFooter>
    </StyledProfilePage>
  );
};

export default ProfilePage