function Main({name, city, image, position}){
    return(
        <div>
            <img
                src={
                    image
                    ?`${image}`
                    :`https://nationaltoday.com/wp-content/uploads/2021/10/national-teddy-bear-day.jpg`
                }
                alt = "cardimage"
                />
                <div className="mainBlock_details">
                    <h3>{!name ? `no-name` : `${name}`} </h3>
                    <p>
                        <span> {city} </span>
                        <span>{position}</span>
                        
                    </p>

                </div>
        </div>
    )
}