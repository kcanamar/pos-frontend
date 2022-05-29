import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const formStyle = {
    marginBottom: 20,
}
const inputStyle = {
    padding: 15,
    margin: 5,
    borderRadius: "5px",
    fontSize: "24px",
}

const submitStyle = {
    backgroundColor: "green",
    color: "white",
    padding: 15,
    margin: 5,
    borderRadius: "5px",
}

const deleteStyle = {
    backgroundColor: "red",
    color: "white",
    padding: 15,
    margin: 5,
    borderRadius: "5px",
}

export default function AdminEdit({ foods, updateFood, deleteFood }) {
    const { id } = useParams();
    const item = foods.find((i) => i._id === id) 
    let navigate = useNavigate()

    const [editForm, setEditForm] = useState(item)

    const handleChange = (evt) => {
        setEditForm((prevState) => ({
            ...prevState,
            [evt.target.name]: evt.target.value,
        }))
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        updateFood(editForm, item._id)
        navigate("/admin")
    }

    const removeFood = () => {
        deleteFood(item._id)
        navigate("/admin")
    }
    return (
        <div >
            <h1>{item.name}</h1>
            <button style={deleteStyle}id="delete" onClick={removeFood}>
                DELETE 
            </button>
            <form style={formStyle} onSubmit={handleSubmit}>
                <input style={inputStyle} type="text" value={editForm.name} name="name" placeholder="name" onChange={handleChange}/> <br/>
                <input style={inputStyle} type="text" value={editForm.PosName} name="PosName" placeholder="PosName" onChange={handleChange}/> <br/>
                <input style={inputStyle} type="text" value={editForm.image} name="image" placeholder="image" onChange={handleChange}/> <br/>
                <input style={inputStyle} type="text" value={editForm.price} name="price" placeholder="price" onChange={handleChange}/> <br/>
                <input style={submitStyle} type="submit" value="Update Item"/>
            </form>
        </div>
    )
}