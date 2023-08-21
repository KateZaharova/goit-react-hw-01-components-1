import PropTypes from 'prop-types';
import {ListItem, TextP, SpanStatus} from "./FriendList.styled";
import { AiFillAndroid } from "react-icons/ai";

export const FriendListItem = ({friends:{avatar,name,isOnline}}) => {
    return (
        <ListItem className="item">
            <SpanStatus  isonline={isOnline.toString()}><AiFillAndroid/></SpanStatus>
            <img className="avatar"
                    src={avatar}
                    alt="User avatar"
                    width="100"
                    height="100"/>
                <TextP className="name">{name}</TextP>
            </ListItem>
    )
}




FriendListItem.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
}; 