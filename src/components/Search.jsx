import { useId } from "react";
import { SelectJobs } from "./SelectJobs";
import { useState } from "react";


export function Search({filters, techOptions, ubiOptions, expOptions, onTextChange, onChange}) {
    
    const idSearch = useId(); 

    const handleTextChange = (e) => {
        const text = e.target.value;
        onTextChange(text)
    }
  
    const handleChange = (name, value) => {
        onChange(name, value)
    }

    const [onFocus, setOnFocus] = useState(false);
    
    return (
        <>
            <form action="" role="search">
                <div className={onFocus ? "focused" : ""}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                    <input 
                        name={idSearch} className="search-input" type="text" 
                        placeholder="Buscar trabajos empresas o habilidades" 
                        onChange={handleTextChange}
                        onFocus={()=>setOnFocus(true)}
                        onBlur={()=>setOnFocus(false)}
                    />
                    {/* <button type="submit" className="submitButton" >Buscar</button> */}
                </div>
                <div className="filters">
                    <SelectJobs 
                        categoria="Tecnología" 
                        name="tecnologia"
                        value={filters.tecnologia} 
                        options={techOptions} 
                        onChange={handleChange}
                     >
                    </SelectJobs>
                    <SelectJobs 
                        categoria="Ubicación" 
                        name="ubicacion"
                        value={filters.ubicacion} 
                        options={ubiOptions} 
                        onChange={handleChange}>
                    </SelectJobs>
                    <SelectJobs 
                        categoria="Experiencia" 
                        name="experiencia" 
                        value={filters.experiencia} 
                        options={expOptions} 
                        onChange={handleChange}>
                    </SelectJobs>
                </div>
            </form>
            
        </>
    );
}