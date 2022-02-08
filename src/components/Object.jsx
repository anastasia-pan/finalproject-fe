

const Object = ( {item} ) => {
    console.log(item)
    return (
        
        <div>
            <p>Name: {item.name}</p>
            <p>Date: {item.date}</p>
            <p>Location: {item.location}</p>
            <p>Description: {item.description}</p>
            {/* <img src={totem.url}  alt="totem" /> */}
            
            
        </div>

    )
}

export default Object;