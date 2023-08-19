import { FriendList } from "./FriendList";
import { FriendListItem } from "./FriendListItem";
import { Profile } from "./Profile";
import {Statistics} from "./Statistics"
import { TransactionHistory } from "./TransactionHistory";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        //display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile />
      <Statistics /> 
      <FriendList />
      <FriendListItem />
      <TransactionHistory/>
      React homework template
    </div>
  );
};
