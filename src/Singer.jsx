export default function Singer({singer}) {
    console.log(singer)
    return (
        <div>
            <h2>Id: {singer.id}</h2>
            <h3>Singer:{singer.name}</h3>
            <p>Age:{singer.age}</p>
        </div>
    )
}