import s from '../Friends/FriendList.module.css'

export default function FriendListItem({ id, avatar, name, isOnline }) {
    const isOnlineClass = isOnline ? s.online : s.offline;
return (
    <li key={id} className={s.item}>
        <span className={isOnlineClass}></span>
        <img className={s.avatar} src={avatar} alt={name} width="48" />
        <p className={s.name}>{name}</p>
</li>
)
}
