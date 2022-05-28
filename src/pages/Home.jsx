export default function Home() {

    const homeStyle = {
        height: "90vh",
        margin: "auto",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        boxSizing: "border-box",
    }

    const title ={
        margin: "auto"
    }
    return <div style={homeStyle}>
        <h1 style={title}>Dat Truck</h1>
        {/* <h2>News Feed Component</h2> */}
    </div>
}