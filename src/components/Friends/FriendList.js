import PropTypes from 'prop-types';
import s from '../Friends/FriendList.module.css'
import FriendListItem from './FriendListItem'

export default function FriendList ({friends}) {
  return (
    <ul className={s.friendList}>
  {friends.map(({avatar, id, isOnline, name}) => (
   <FriendListItem 
   avatar = {avatar}
   key = {id}
   isOnline = {isOnline}
   name = {name}
   />
  ))}
</ul>
  )
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
})
  )
}


 