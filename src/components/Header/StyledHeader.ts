import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  margin-bottom: 1px;
  z-index: 1;
  top: 0;
  background-color: var(--color-green-200);
  width: 100vw;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-around;


  img {
    width: 247.5px;
    height: 45px;
  }


  .button__header{
    display: flex;
    flex-direction: row;
    gap: 32px;
  }

  .login{
    background-color: var(--color-white);
  }

  .register{
    background-color: var(--color-grey-400);
    color: var(--color-white);
  }

  button{
    width: 120px;
    height: 45px;
    border-radius: 23px;
    background-color: var(--color-white);
    border: none;
    font-size: 20px;
    font-weight: 600;
    cursor:pointer;

  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
