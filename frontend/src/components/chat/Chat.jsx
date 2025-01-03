import './chat.scss';

export default function Chat() {
    const [chat, setChat] = useState(null);
    return (
        <div className='chat'>
            <div className="messages">
                <h1>Messages</h1>
                <div
                    className="message"
                    style={{
                        backgroundColor: "#fecd514e",
                    }}
                >
                    <img src={"/noavatar.jpg"} alt="" />
                    <span>nagendra</span>
                    <p>hi, i m nagendra</p>
                </div>
                <div
                    className="message"
                    style={{
                        backgroundColor: "#fecd514e",
                    }}
                >
                    <img src={"/noavatar.jpg"} alt="" />
                    <span>nagendra</span>
                    <p>hi, i m nagendra</p>
                </div>
                <div
                    className="message"
                    style={{
                        backgroundColor: "#fecd514e",
                    }}
                >
                    <img src={"/noavatar.jpg"} alt="" />
                    <span>nagendra</span>
                    <p>hi, i m nagendra</p>
                </div>
                <div
                    className="message"
                    style={{
                        backgroundColor: "#fecd514e",
                    }}
                >
                    <img src={"/noavatar.jpg"} alt="" />
                    <span>nagendra</span>
                    <p>hi, i m nagendra</p>
                </div>
                <div
                    className="message"
                    style={{
                        backgroundColor: "#fecd514e",
                    }}
                >
                    <img src={"/noavatar.jpg"} alt="" />
                    <span>nagendra</span>
                    <p>hi, i m nagendra</p>
                </div>
                <div
                    className="message"
                    style={{
                        backgroundColor: "white",
                    }}
                >
                    <img src={"/noavatar.jpg"} alt="" />
                    <span>nagendra</span>
                    <p>hi, i m nagendra</p>
                </div>
                {chat && <>
                    <div className="chatBox">
                        <div className="top">
                            <div className="user">
                                <img src={"noavatar.jpg"} alt="" />
                                nagendra
                            </div>
                            <span className="close" onClick={()=>setChat(false)}>
                                X
                            </span>
                        </div>
                        <div className="center">
                            <div
                                className="chatMessage"
                                style={{
                                    alignSelf:
                                        true
                                            ? "flex-end"
                                            : "flex-start",

                                }}
                            >
                                <span>1 hour ago</span>
                            </div>
                        </div>
                        <form className="bottom">
                            <textarea name="text"></textarea>
                            <button>Send</button>
                        </form>
                    </div>
                </>}
            </div>
        </div>
    )
}