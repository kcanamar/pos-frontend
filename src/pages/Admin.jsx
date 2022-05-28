import { useState } from "react"
import { Link } from "react-router-dom"
import { Grid, Paper } from "@mui/material"

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
        return <Grid container spacing={2}>
            {foods.map((item) => (
                <Grid item xs={4} key={item._id} >
                    <Link to={`/admin/${item._id}`}>
                        <Paper>
                            <h3>{item.PosName}</h3>
                        </Paper>
                    </Link>
                </Grid>
            ))}
        </Grid>
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