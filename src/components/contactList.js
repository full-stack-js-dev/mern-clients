import React , { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {getContacts} from "../Js/action/contact"

const ContactList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch (getContacts())
    }, [])
    return (
        <div>
            <h1>le3bidi weld chhiba</h1>
        </div>
    )
}

export default ContactList
