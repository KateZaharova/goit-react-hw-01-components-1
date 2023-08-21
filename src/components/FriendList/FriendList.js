import { FriendListItem } from "./FriendListItem";
import PropTypes from 'prop-types';
import {List} from "./FriendList.styled";

export const FriendList = ({ friends }) => {
    return (
        <div>
            <h2>FriendList</h2>
            <List className="friend-list">
                {friends.map(amigo => (
                    <li key={amigo.id}>
                        <FriendListItem friends={amigo} />
                    </li>
                ))}
            </List>
        </div>
    )
}


FriendList.propTypes = {
  friends: PropTypes.array,
}; 