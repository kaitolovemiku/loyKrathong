import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookie } from '@fortawesome/free-solid-svg-icons';
import firebase from '../utils/firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const db = getFirestore(firebase);
const getCollection = collection(db, 'krathong_amount');

async function getKrathong(db) {
    const citiesCol = collection(db, 'krathong_amount');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}

const MainPage = ({ logo, btn, btnOn, falling }) => {
    var [count, setCount] = useState(0);
    var [changeImage, setChangeImage] = useState(btn);

    useEffect(() => {
        setDefaultData()
    })

    const setDefaultData = async () => {
        document.getElementById('show_count').innerHTML = count;
    }

    const onClickLoyKrathong = () => {
        setChangeImage(btnOn);
        setCount(count + 1)
        document.getElementById('fallingSound').autoPlay = true;
        sendDataToDatabase();
        setInterval(() => {
            setChangeImage(btn);
        }, 1000 * 1);
    }

    const sendDataToDatabase = async () => {
        try {
            await db.collection('krathong_amount').doc('g229UgpTb3lSTImMqg4Q').set({ 'krathong_amount': 1 });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>ลอยกระทงออนไลน์</h1>
                <h2 id="show_count"></h2>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    มาร่วมลอยกระทงออนไลน์ ร่วมกันลดขยะ รักษาสิ่งแวดล้อมให้อยู่กับเราตลอดไป
                </p>
                <i onClick={onClickLoyKrathong}>
                    <img id="btn" src={changeImage} className="App-btn" alt="btn" />
                </i>
                <ReactAudioPlayer
                    id="fallingSound"
                    src={falling}
                />
            </header>
        </div>
    )
}

export default MainPage;