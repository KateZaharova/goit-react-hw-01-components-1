import { List, ListItem, TextP, SpanQty, SpanColor,ContainerProfile } from "./Profile.styled";
import PropTypes from 'prop-types';


export const Profile = ({ userProfile:{avatar, username, tag,location, stats:{followers, views, likes}} }) => {
    
   return <ContainerProfile className="profile">
  <div className="description">
    <img
        src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <TextP className="name">{username}</TextP>
    <TextP className="tag">@{tag}</TextP>
    <TextP className="location">{location}</TextP>
  </div>

  <List className="stats">
    <ListItem>
      <SpanColor className="label" color="red">Followers </SpanColor>
         <SpanQty className="quantity">{followers}</SpanQty>
    </ListItem>
    <ListItem>
      <SpanColor className="label" color="blue">Views </SpanColor>
      <SpanQty  className="quantity">{views}</SpanQty>
    </ListItem>
    <ListItem>
      <SpanColor className="label" color="green">Likes </SpanColor>
      <SpanQty className="quantity">{likes}</SpanQty>
    </ListItem>
  </List>
</ContainerProfile>;
};


Profile.propTypes = {
  userProfile: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
}; 