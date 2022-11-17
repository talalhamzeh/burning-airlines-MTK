const Logout = (props) => { 
    props.signOut (false);
    return (
        <h1>
        you have Loged Out 
        </h1>
    )
}
export default Logout ;
