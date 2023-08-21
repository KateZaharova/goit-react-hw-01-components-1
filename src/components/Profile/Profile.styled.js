import styled from "styled-components";

export const List = styled.ul`
display:flex;
flex-wrap: wrap;
padding:0;
:hover{
    background-color:yellowgreen;
}
`;

export const ListItem = styled.li`
width:200px;
display:flex;
flex-direction: column;
text-align: center;
border: 1px solid gray;
`;

export const SpanQty = styled.span`
font-weight:bold;
`;

export const TextP = styled.p`
text-align:center;
`

export const ContainerProfile = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
//padding: 24px;
width:100%;
`;

export const SpanColor = styled.span`
color: ${props => {
    return props.color;
}}
`;