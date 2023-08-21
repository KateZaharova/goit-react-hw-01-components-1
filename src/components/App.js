import { FriendList } from "./FriendList/FriendList";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { TransactionHistory } from "./Transactions/TransactionHistory";
import user from "../user.json";
import data from "../data.json";
import friendList from "../friends.json";
import transactions from "../transactions.json";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";


export const App = () => {
  return (
    <Layout>
      React homework template
      <Profile userProfile={user}/>
      <Statistics title="Upload stats" stats={data}/>
      <FriendList friends={friendList} />
      <TransactionHistory items={transactions} />
      <GlobalStyle/>
    </Layout>
  );
};
