import styled from 'styled-components'  
import styledComponents from 'styled-components'

export const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
export const Card = styled.div`
  min-height: 18rem;
  border-radius:1rem;
  overflow:hidden;
  position:relative;
  img{
    width:100%;
    height:100%;
    left:0;
    border-radius:1rem;
    object-fit:cover;
    position:absolute;


  }
  p{
    position: absolute;
    z-index:10;
    left:50%;
    bottom: 0%;
    transform: translate(-50% , -0%);
    color:#fff;
    text-align:center;
    font-weight:600;
    fontsize:1rem;
    height:20%;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    background:rgba(0,0,0,.6);
  
  }
`;

export const Gradient = styled.div`
  z-index:3;
  position:absolute;
  width:100%;
  background: linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0.5));
  
`;

export const List = styled.div`
  display:flex;
  justify-content:center;
  margin: 2rem 0;

`

export const Grid = styled.div`
  display:grid;
  grid-gap:1.5rem;
  grid-template-columns: repeat(auto-fit , minmax(min(18rem , 100%) , 1fr))
`;


export const CardCuisine = styled.div`
  img{
    width:100%;
    border-radius: 1rem;

  }
  a{
    text-decoration:none;
  }
  h4{
    text-align:center;
    padding:1rem;
  }
`;