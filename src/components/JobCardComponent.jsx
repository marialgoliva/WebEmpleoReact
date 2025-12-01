import { useState } from "react"

export default function JobCardComponent({job}) {
    const [isApplied, setIsApplied] = useState(false)
    const handleApplyClick = () => {
        setIsApplied(true);
    }

    const buttonClasses = isApplied ? 'button-apply-job is-applied' : 'button-apply-job'
    const buttonText = isApplied ? 'Aplicado' : 'Aplicar'

    return (
        <article className="job" 
                 data-ubicacion={job.data.modalidad}
                 data-tecnologia={job.data.technology}
                 data-experiencia={job.data.nivel}>
            <div>
                <h3 className="title">{job.titulo}</h3>
                <small>{job.empresa} | {job.ubicacion}</small>
                <p>{job.descripcion}</p>
            </div>
            <button className={buttonClasses} onClick={handleApplyClick}>{buttonText}</button>
        </article>
        
        

    );

}

