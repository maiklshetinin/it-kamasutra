import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css'






const Dialogs = (props) => {



    let dialogsElements = props.messagesPage.DialogsData.map(obj => (<div ><NavLink to={`${'dialogs/'}${obj.id}`}>{obj.name}</NavLink></div>))
    let messagesElements = props.messagesPage.MessagesData.map(obj => (<div >{obj.message}</div>))

    return (
        <div className={style.content}>
            <div className={style.users}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs; 