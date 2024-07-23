
function UserGreeting(props){
    const welcomemsg =<h2>Welcome {props.userName}</h2>
    const loginprompt =<h2>Please log in to continue</h2>
return (props.isLoggedIn ? welcomemsg : loginprompt);
}
export default UserGreeting