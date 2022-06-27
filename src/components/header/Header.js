import styles from "./header.module.css"
import icon from "./icon.svg"
import { NavLink } from "react-router-dom"

const menu = [
    {title: "Home", to: "/"},
    {title: "Chat", to: "/chat"},
    {title: "Profile", to: "/profile"} 
]

export function Header() {

return (
    <div className={styles.header_wrapper}>
        <img src={icon} alt="icon" className={styles.icon}/>
        <ul className={styles.nav_list}>
            {menu.map(item => 
                <li className={styles.list_item} key={item.title}>
                    <NavLink to={item.to}>{item.title}</NavLink>
                </li>)}
        </ul>
    </div>
)

}