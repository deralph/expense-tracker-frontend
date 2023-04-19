import React, { useEffect, useRef, useState,useCallback } from 'react'
import firebase from 'firebase/compat/app'
import { collection, getDocs,getFirestore,addDoc } from 'firebase/firestore'
import 'firebase/compat/auth'

import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useAppSelector } from '../hooks'
import { Navigate } from 'react-router-dom'
import Loader from '../components/loading'
const firebaseConfig = {
    apiKey: "AIzaSyA35VGqCTVFVFnn2snlmVUPrp7NxoiZrm4",
    authDomain: "peer-to-peer-chat-ee638.firebaseapp.com",
    projectId: "peer-to-peer-chat-ee638",
    storageBucket: "peer-to-peer-chat-ee638.appspot.com",
    messagingSenderId: "538771472808",
    appId: "1:538771472808:web:8146eced2bc3615476dd9d"
};
const app =firebase.initializeApp(firebaseConfig)
firebase.auth()
// const firestore = firebase.firestore()

const db = getFirestore(app)
const ChatTest:React.FC = () => {
const [msg,setMsg] = useState<any[]>([])
    const fetchPost = useCallback(async () => {
           
        await getDocs(collection(db, "todos"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setMsg(newData);                
                console.log(msg, newData);
            })
       
    },[msg]
    )
    useEffect(()=>{
        fetchPost();
    }, [fetchPost])
    const { loading, user, userId } = useAppSelector(state => state.all)
    
    // const messagesRef = firestore.collection('messages')
//     if(!messagesRef){
//         console.log('error occured in message ref')
//     }
//     const query: firebase.firestore.Query<firebase.firestore.DocumentData> | any = messagesRef.orderBy('createdAt').limit(25)
//     // const [messages]=useCollectionData(query,{idField:'id'})
// const [messages] = useCollectionData(query)

    const [formValue, setformValue] = useState('')

    const bottomRef = useRef<null | HTMLDivElement>(null);

    const sendMessage = async (e: any) => {
        e.preventDefault()

        // await messagesRef.add({
        //     text: formValue,
        //     user,
        //     userId,
        //     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        // })

        
        e.preventDefault();  
        
        try {
            const docRef = await addDoc(collection(db, "todos"), {
                text: formValue,
                    user,
                    userId,
                    createdAt: new Date(),   
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
          }
          
          setformValue('')  
            bottomRef.current!.scrollIntoView({ behavior: "smooth" });
        }

    return (
        loading?<Loader/>:!user?<Navigate to='/signin'/>: (<div className="bg-[#9933ff39] px-[10%] sm:px-4 py-6  w-full h-[100vh] mx-auto flex flex-col justify-between">
            <div className="h-[92%]">
                <div className="flex items-center mb-4">
                    <h3 className="text-gray-800 font-semibold">{user}</h3>
                </div>
                <div className="flex flex-col space-y-2">
                    {msg ? msg.map((msg) => {
                        // const { text,
                        //     user,
                        //     createdAt } = msg
                        return (<div key={ msg.createdAt} className={`flex mt-6 ${userId === msg.userId ? ' items-end flex-row-reverse' : ' items-start'}`}>
                            <div className="flex-shrink-0 mx-4">
                                <img src={userId === msg.userId ? "/images/User-avatar.png" : "/images/User-avatar1.png"} alt="Avatar 1" className="h-8 w-8 rounded-full border border-black" />
                            </div>
                            <div className={` p-2 min-w-[40%] ${userId === msg.userId ? 'bg-[#96f] text-white rounded-[0_10px_0_10px]  mr-2' : 'bg-blue-100 text-gray-800 rounded-[10px_0_10px_0] ml-2'}`}>
                                <p className="text-xs">{user}</p>
                                <p className="text-sm py-2">{msg.text}</p>
                                <p className="text-[8px]">{msg.createdAt}</p>
                            </div>
                        </div>)
                    }):'loading ...'}

                </div>
            </div>
            <form action='' className="flex items-center mt-4" onSubmit={(e)=>sendMessage(e)}>
                <input type="text" value={formValue} onChange={(e) => setformValue(e.target.value)} placeholder="Type your message..." className="flex-1 bg-white border-gray-200 border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent" />
                <button className="bg-[#96f] text-white rounded-md px-4 py-2 ml-2" type='submit'>Send</button>
            </form>
        </div>)

    )
}

export default ChatTest
