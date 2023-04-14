import React, { useRef, useState } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

import {useCollectionData} from 'react-firebase-hooks/firestore'
import { useAppSelector } from '../hooks'
const firebaseConfig = {
    apiKey: "AIzaSyA35VGqCTVFVFnn2snlmVUPrp7NxoiZrm4",
    authDomain: "peer-to-peer-chat-ee638.firebaseapp.com",
    projectId: "peer-to-peer-chat-ee638",
    storageBucket: "peer-to-peer-chat-ee638.appspot.com",
    messagingSenderId: "538771472808",
    appId: "1:538771472808:web:8146eced2bc3615476dd9d"
  };
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const firestore = firebase.firestore()

const ChatRoom=()=>{
  const { user, userId} = useAppSelector(state => state.all)

    const messagesRef = firestore.collection('messages')
    const query:firebase.firestore.Query<firebase.firestore.DocumentData>|any = messagesRef.orderBy('createdAt').limit(25)
    // const [messages]=useCollectionData(query,{idField:'id'})
    const [messages]=useCollectionData(query)

    const [formValue,setformValue]=useState('')

    const bottomRef = useRef<null | HTMLDivElement>(null);

    const sendMessage = async(e:any)=>{
        e.preventDefault()

        await messagesRef.add({
            text:formValue,
            user,
            userId,
            createdAt:firebase.firestore.FieldValue.serverTimestamp(),
        })

        bottomRef.current!.scrollIntoView({ behavior: "smooth" });

        setformValue('')

    }

    return(
        <>
        <div className="">{messages &&messages.map(msg=><ChatMessage key={msg.createdAt} message={msg}/>)}</div>
        <div ref={bottomRef}/>
        <form action="" className="" onSubmit={sendMessage}>
            <input type="text" value={formValue} onChange={(e)=>setformValue(e.target.value)} />
            <button type='submit'>send</button>
        </form>

        </>
    )
}

const ChatMessage:React.FC<{message:object|any}>=({message})=>{
    
    const {text} = message

    return(
        <p className="">{text}</p>
    )
}

export default ChatRoom
