import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function Show({ foods, updateFood, deleteFood }) {
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
        <div className="item-edit">
            <h1>{item.name}</h1>
            <button id="delete" onClick={removeFood}>
                DELETE Item
            </button>
            <form onSubmit={handleSubmit}>
                <input type="text" value={editForm.name} name="name" placeholder="name" onChange={handleChange}/>
                <input type="text" value={editForm.PosName} name="PosName" placeholder="PosName" onChange={handleChange}/>
                <input type="text" value={editForm.image} name="image" placeholder="image" onChange={handleChange}/>
                <input type="text" value={editForm.price} name="price" placeholder="price" onChange={handleChange}/>
                <input type="submit" value="Update Item"/>
            </form>
        </div>
    )
}