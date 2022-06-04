import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Home from "../pages/Home"
import Menu from "../pages/Menu"
import Admin from "../pages/Admin"
import AdminEdit from "../pages/AdminEdit"
export default function Main() {

    const [foods, setFoods] = useState(null)
    const URL = "https://karc-pos-backend.herokuapp.com/food/"
    const getFoods = async () => {
        const data = await fetch(URL).then(res => res.json())
        setFoods(data)
    }

    const createFood = async (food) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(food)
        })
        getFoods()
    }

    const updateFood = async (food, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(food)
        })
        getFoods()
    }

    const deleteFood = async (id) => {
        await fetch(URL + id, {
            method: "DELETE",
        })
        getFoods()
    }
    useEffect(() => {getFoods()}, [foods])
    return (
        <main>
            <Routes>
                <Route
                    exact
                    path="/" 
                    element={
                        <Home/>
                    }
                />
                <Route
                    exact
                    path="/menu" 
                    element={
                        <Menu
                            foods={foods}
                        />
                    }
                />
                <Route 
                    path="/admin"
                    element={
                        <Admin
                            foods={foods}
                            createFood={createFood}
                        />
                    }
                />
                <Route 
                    path="/admin/:id"
                    element={
                        <AdminEdit
                            foods={foods}
                            updateFood={updateFood}
                            deleteFood={deleteFood}
                        />
                    }
                />
            </Routes>
        </main>
    )
}