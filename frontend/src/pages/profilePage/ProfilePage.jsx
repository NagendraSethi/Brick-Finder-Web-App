import Chat from '../../components/chat/Chat';
import List from '../../components/list/List';
import './profilePage.scss';
import { Link } from "react-router-dom";


export default function ProfilePage() {
    return (
        <div className="profilePage">
            <div className='details'>
                <div className='wrapper'>
                    <div className='title'>
                        <h1>User Information</h1>
                        <Link to='/profile/update'>
                            <button>Update Profile</button>
                        </Link>
                    </div>
                    <div className='info'>
                        <span>
                            Avatar:
                            <img src="noavatar.png" alt='' />
                        </span>
                        <span>
                            Username: <b>Sethi Nagendra</b>
                        </span>
                        <span>
                            E-mail: <b>sethi@gmail.com</b>
                        </span>
                        <button>Logout</button>
                    </div>
                    <div className='title'>
                        <h1>My List</h1>
                        <Link to='/add'>
                            <button>Create New Post</button>
                        </Link>
                    </div>
                    <List/>
                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                    <List/>
                </div>
            </div>
            <div className='chatContainer'>
                <div className='wrapper'>
                    <Chat/>
                </div>
            </div>
        </div>
    )
}