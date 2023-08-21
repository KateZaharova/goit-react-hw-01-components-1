import styled from "styled-components";
import PropTypes from 'prop-types';

export const List = styled.ul`
display:flex;
flex-direction: column;
gap: 12px;
width: 400px;
`;

export const ListItem = styled.ul`
display:flex;
align-items: center;
border: 1px solid gray;
`;

export const TextP = styled.p`
margin-left:24px;
`

const getStatusOnline = props => { 
    switch (props.isonline) {
        case "true":
            return "green"; 
        case "false":
            return "red";
        default:
            return "gray";
    } 
}


export const SpanStatus = styled.span`
margin: 0 24px;
color: ${getStatusOnline};
svg{
width:40px;
height: 40px;
}
`

SpanStatus.propTypes = {
    isonline: PropTypes.string.isRequired,
  }; 


