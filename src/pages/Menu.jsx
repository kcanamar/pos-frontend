import { Grid, Paper, Box } from "@mui/material"

export default function Menu({ foods }) {

    const loaded = () => {
        return <Grid container spacing={2} rowSpacing={-3}>
            {foods.map((item) => (
                <Grid item xs={6} key={item._id} sx={{ height: 150}}>
                        <Paper square elevation={8} sx={{ height: 130}}>
                            <h5>{item.name}</h5>
                            <img src={item.image} alt={item.name}/>
                            <h6>{item.price}</h6>
                        </Paper>
                </Grid>
            ))}
        </Grid>
    }

    const loading = () => <h1>Loading....</h1>

    return foods ? loaded() : loading()
}