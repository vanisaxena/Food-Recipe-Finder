import styled from "styled-components";
export const Header  = styled.div`
color: white;
background-color: black;
display:flex;
flex-direction:  row;
justify-content:space-between;
padding: 20px;
align-items:center;
font-size: 25px;
font-weight:bold;
box-shadow:0 3px 6px 0 #555
`;

export const AppNameComponent = styled.div`
display: flex;
align-items: center;
`;
export const AppIcon = styled.img`
width: 36px;
height: 36px;
margin: 15px;

`;
export const SearchComponent = styled.div`
display:flex;
flex-direction:row;
background-color: white;
padding:10px;
border-radius:6px;
width:50%;

`;

export const SearchIcon  =styled.img`
 width:32px;
 height:32px;
`;
export const SearchInput = styled.input`
 border:none;
 outline:none;
 margin-left:15px;
 font-size:16px;
 font-weight:bold;
 `;