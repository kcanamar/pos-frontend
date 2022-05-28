import { Grid, Paper } from "@mui/material"
import Header from '../components/Header';

export default function Menu({ foods }) {
    const itemStyle = {
        padding: "5px",
    }
    const loaded = () => {
        return <div>
                <Header/>
                <Grid container spacing={2} rowSpacing={-3}>
                    {foods.map((item) => (
                        <Grid item xs={6} key={item._id} sx={{ height: 150}}>
                                <Paper square elevation={8} sx={{ height: 130}} style={itemStyle}>
                                    <h5 style={{marginTop: 0}}>{item.name} <br/> {item.price}</h5>
                                    <img src={item.image} alt={item.name}/>
                                </Paper>
                        </Grid>
                    ))}
                </Grid>
            </div>
    }

    const loading = () => <h1>Loading....</h1>

    return foods ? loaded() : loading()
}