import { Outlet , Navigate} from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from '../Context/AuthContext';

const PrivateRoutes = ({children, ...rest}) => {
    console.log('Private Route works!')
    
    //const authenticated = {token : "false"};

    let {user} = useContext(AuthContext);

    return(
        !user ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes;