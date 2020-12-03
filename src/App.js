
import Profile from 'components/Profile'
import Statistics from 'components/Statistics'
import FriendList from 'components/Friends'
import Transactions from 'components/Transaction'

import user from 'jsons/user.json'
import statistical from 'jsons/statistical-data.json'
import friends from 'jsons/friends.json'
import transactions from 'jsons/transactions.json'
 
export default function App () {
  return (
    <>
    <Profile
      avatar={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <Statistics
    title="Upload stats" stats={statistical}
    />
    <Statistics stats={statistical} />
    <FriendList
     friends={friends}
     />
    <Transactions items={transactions} />
    </>
  )
}




