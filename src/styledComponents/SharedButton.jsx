import styled from "styled-components";
const bgFun = ( { varient } ) => varient == 'outline' ? '#fff' : '#2a2d5f';
const colorFun = ( { varient } ) => varient == 'outline' ? '#2a2d5f' : '#fff';
const SharedButton = styled.button`
    background-color: ${bgFun};
    color: ${colorFun};
    padding: 0.2rem 0.9rem;
    outline: 0;
    width: 150px;
    border-radius: 4px;
    transition: all 0.4s ease -in;
    margin: 0%.5rem 1.5rem;
    &:hover{
    background-color: ${colorFun};
    color: ${bgFun}
}
`


export { SharedButton }