import { useState } from "react"
import { Link } from "react-router-dom"

export default function Admin({ foods, createFood, updateFood, deleteFood }) {

    const [newForm, setNewForm] = useState({
        name: "",
        PosName: "",
        image: "",
        price: "",
    })

    const handleNewChange = (evt) => {
        setNewForm((prvState) => (
            {
                ...prvState,
                [evt.target.name]: evt.target.value,
            }
        ))
    }

    const handleNewSubmit = (evt) => {
        evt.preventDefault()
        createFood(newForm)
        setNewForm({
            name: "",
            PosName: "",
            image: "",
            price: "",
        })
    }

    const loaded = () => {
        return foods.map((item) => (
            <div key={item._id} className="item">
                <Link to={`/admin/${item._id}`}>
                    <h3>{item.name}</h3>
                </Link>
            </div>
        ))
    }
    
    const loading = () => <h1>Loading....</h1>

    return (
        <div>
            <form onSubmit={handleNewSubmit}>
                <input type="text" value={newForm.name} name="name" placeholder="name" onChange={handleNewChange} required />
                <input type="text" value={newForm.PosName} name="PosName" placeholder="PosName" onChange={handleNewChange} required />
                <input type="text" value={newForm.image} name="image" placeholder="image URL" onChange={handleNewChange}/>
                <input type="text" value={newForm.price} name="price" placeholder="price" onChange={handleNewChange} required />
                <input type="submit" value="Create New Menu Item"/>
            </form>
            {foods ? loaded() : loading()}
        </div>
    )
}