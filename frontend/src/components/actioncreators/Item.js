import axios from 'axios'

const url = "https://api.juliaveronica.com"

export const addItem = () => {
    return function(dispatch){
        axios
        .post(`${url}/item/create`)
        .then(resp =>{
            dispatch({
                type: `ITEM_ADD`,
                payload: resp.data
            })
        })
    }
}
export const getItem = (data) => {
    return function(dispatch){
        axios
        .get(`${url}/item/show`, data)
        .then(resp =>{
            dispatch({
                type: `ITEM_GET`,
                payload: resp.data
            })
        })
    }
}

export const deleteItem = (id) => {
    return function(dispatch){
        axios
        .delete(`${url}/item/delete/${id}`)
        .then(resp =>{
            dispatch({
                type: `ITEM_DELETE`,
                payload: id
            })
        })
    }
}