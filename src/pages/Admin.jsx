import { useState } from "react"
import { Link } from "react-router-dom"
import { Grid, Paper } from "@mui/material"

const createStyle = {
    marginBottom: 5
}

const formStyle = {
    marginBottom: 20,
}
const inputStyle = {
    padding: 5,
    margin: 5,
    borderRadius: "5px",
}

const submitStyle = {
    backgroundColor: "green",
    color: "white",
    padding: 5,
    margin: 5,
    borderRadius: "5px",

}

const linkStyle = {
    textDecoration: "none",
    color: "black"
}
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
                    <Link style={linkStyle} to={`/admin/${item._id}`}>
                        <Paper sx={{ textAlign: "center", height: "75px", display: "flex", justifyContent: "center", marginTop: 0}}>
                            <h3 style={{ marginTop: 13}}>{item.PosName}</h3>
                        </Paper>
                    </Link>
                </Grid>
            ))}
        </Grid>
    }
    
    const loading = () => <h1>Loading....</h1>

    return (
        <div>
            <h1>Admin DashBoard</h1>
            <h3 style={createStyle}>Create New Item</h3>
            <form style={formStyle} onSubmit={handleNewSubmit}>
                <input style={inputStyle}type="text" value={newForm.name} name="name" placeholder="name" onChange={handleNewChange} required />
                <input style={inputStyle}type="text" value={newForm.PosName} name="PosName" placeholder="PosName" onChange={handleNewChange} required />
                <input style={inputStyle}type="text" value={newForm.image} name="image" placeholder="image URL" onChange={handleNewChange}/>
                <input style={inputStyle}type="text" value={newForm.price} name="price" placeholder="price" onChange={handleNewChange} required />
                <input style={submitStyle}type="submit" value="Create New Menu Item"/>
            </form>
            {foods ? loaded() : loading()}
        </div>
    )
}