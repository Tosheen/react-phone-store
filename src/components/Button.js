import styled from 'styled-components';

const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 1px solid var(--light-blue);
    border-color: ${props =>  props.cart ? 'var(--main-yellow)' : 'var(--light-blue)'};
    color: ${props =>  props.cart ? 'var(--main-yellow)' : 'var(--light-blue)'};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    &:hover {
        background-color: ${props =>  props.cart ? 'var(--main-yellow)' : 'var(--light-blue)'};
        color: var(--main-blue);
    }
    &:focus {
        outline: none;
    }
`;

export default ButtonContainer;