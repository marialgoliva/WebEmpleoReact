

export default function Avatar({service="github", username="", size}) {

    const url = `https://unavatar.io/${service}/${username}`
    return (
        <img src={url} alt={`Avatar de ${service} de ${username}`} className="avatar" style={{
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: "50%"
        }}/>
    );
    

       
}

