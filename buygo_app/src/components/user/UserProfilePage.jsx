import UserInfo from './UserInfo';
import OrderHistoryItemContainer from './OrderHistoryItemContainer';
import { useEffect, useState } from 'react';
import api from '../../api';
import Spinner from '../ui/Spinner';

const UserProfilePage = () => {
    const [userInfo, setUserInfo] = useState({});
    const [orderItems, setOrderItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        api.get("user_info")
        .then(res => {
            console.log(res.data);
            setUserInfo(res.data);
            setOrderItems(res.data.items);
            setLoading(false);
        })
        .catch(err => {
            console.log(err.message);
            setLoading(false);
        })
    }, []);

    if(loading){
        return <Spinner loading={loading} />
    }

    return (
        <div className="container my-5">
            {/* Profile Header */}

            <UserInfo userInfo={userInfo} />
            

            {/* Order History */}
            <OrderHistoryItemContainer orderItems={orderItems} />
            
        </div>
    )
}

export default UserProfilePage