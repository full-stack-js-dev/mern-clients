import {GET_CONTACTS_FAILED,GET_CONTACTS_LOAD,GET_CONTACTS_SUCCES} from "../const/contact"
import axios from "axios"

export const getContacts = ()=>async dispatch=>{
    dispatch({type : GET_CONTACTS_LOAD})
    try {
    const result  =  await axios.get("/api/contacts/")
    dispatch({type : GET_CONTACTS_SUCCES, payload :result.data.res})

    } catch (error) {
    dispatch({type : GET_CONTACTS_FAILED, payload:error})
        
    }
}