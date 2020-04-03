/** 
 * Styled Button Component
 * https://styled-components.com/
*/
//import React from 'react';  -> you do not need to import React
import styled, { css } from 'styled-components';

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 1rem 1rem;
    font-size: 1rem;

    ${props => props.primary && css`
        background-color: palevioletred;
        color: white;
    `}
`

export default Button;