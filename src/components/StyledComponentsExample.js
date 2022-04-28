import React from 'react';
import styled from 'styled-components';

const ButtonExample = styled.button`
height: 50px;
color: #111;
font-size: 18px;
border: 1px solid black;
background: white;
opacity: 0.6;
transition: 0.3s;
border-radius: 10px;
&:hover {
    font-size: 24px;
    opacity: 1;
    background-color: lightPink;
    border-radius: 10px;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
`;

const StyledComponentsButtonExample = () => {
    return <ButtonExample onClick={() => alert('yes, you are :)')}>Kasia is beautiful</ButtonExample>
}

export default StyledComponentsButtonExample;