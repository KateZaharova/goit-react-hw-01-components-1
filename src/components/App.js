import { FriendList } from "./FriendList/FriendList";
//import { FriendListItem } from "./FriendList/FriendListItem";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { TransactionHistory } from "./TransactionHistory";
import user from "../user.json";
import data from "../data.json";
import friendList from "../friends.json"
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";


export const App = () => {
  return (
    <Layout>
      <Profile userProfile={user}/>
      <Statistics title="Upload stats" stats={data}/>
      <FriendList friends={friendList} />
      <TransactionHistory />
      <GlobalStyle/>
      React homework template
    </Layout>
  );
};

/*Statistics stats={data} />
 <FriendListItem friends={friendList} avatar={friendList.avatar} name={friendList.name} isonline={friendList.inOnline} />*/