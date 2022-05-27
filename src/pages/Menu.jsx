export default function Menu({ foods }) {

    const loaded = () => {
        return foods.map((item) => (
            <div key={item._id} className="item">
                    <h3>{item.PosName}</h3>
                    <img src={item.image} alt={item.name}/>
                    <h5>{item.price}</h5>
            </div>
        ))
    }

    const loading = () => <h1>Loading....</h1>

    return foods ? loaded() : loading()
}