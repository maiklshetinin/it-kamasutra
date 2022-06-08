import style from './Post.module.css'
const Post = (props) => {
    return (
        <div>
            <img src={props.avatar} alt="" className={style.avatar} />
            <span>{props.message}</span>
        </div>
    )

}
export default Post;