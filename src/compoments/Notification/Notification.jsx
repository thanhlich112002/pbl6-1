import React, { useContext, useEffect, useState } from 'react';
import { ref, child, onValue } from 'firebase/database';
import style from './Notification.module.css';
import { database } from './firebase';
import { ChatContext } from './NotificationProvider';

function Notification({ redirectToDetailorderPage }) {
    const [latestUserData, setLatestUserData] = useState([]);
    const idsrote = 1;
    const { writeUserData } = useContext(ChatContext);
    writeUserData(5, 1, 1, 1)
    useEffect(() => {
        if (idsrote !== "") {
            const dbRef = ref(database);
            const usersRef = child(dbRef, "user/1");

            const unsubscribe = onValue(usersRef, (snapshot) => {
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    setLatestUserData(userData);
                } else {
                    setLatestUserData([]);
                }
            });

            return () => {
                unsubscribe();
            };
        }
    }, [idsrote]);

    console.log(latestUserData);

    return (
        <div>
            <div className={style.container}>
                <div className={style.Notifications}>
                    {latestUserData && Object.keys(latestUserData).map((key) => {
                        const notification = latestUserData[key];
                        return (
                            <div
                                key={key}
                                className={style.notification}
                                onClick={() => redirectToDetailorderPage(key)}
                            >
                                <div className={style.Img}>
                                    <img src={notification.img} alt="" />
                                </div>
                                <div className={style.infomative}>
                                    <span className={style.span}>Thông báo từ {notification.name}</span>
                                    <span className={style.mes}>{notification.mes}</span>
                                </div>
                                {!notification.isSeen ? (
                                    <div className={style.seed}>
                                        o
                                    </div>
                                ) : null}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Notification;
