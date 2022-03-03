import { Link } from 'react-router-dom';

function OneUser(props) {
    let id= `/users/${props.id}`
    
    return (
        <div className="user">
            <Link className="info" to={id}>
                <div className="name">
                    Usuario:  {props.user_name}
                </div>
                <div className="name">
                    Nombres:{props.names} {props.surname} 
                </div>
                <div className="name">
                    E-mail: {props.email}
                </div>
                    
            </Link>
        </div>
    )
}

export default OneUser