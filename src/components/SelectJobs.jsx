import { useId } from "react";

export function SelectJobs({ categoria, options, handleChange }) {
    const nameSelect = removeAccents(categoria.toLowerCase());
    const idSelect = useId();
    function removeAccents(string) {
        return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
        
        return (

            <select 
                name={idSelect} 
                onChange={(e)=>{handleChange(e.target.value, e.target.name)}}
                value = {options[nameSelect]}
            >
                <option value="">{categoria}</option>
                {options.map(opt => {
                    return (<option key={opt.value} value={opt.value}>{opt.name}</option>)

                })}
            </select>

        );

    }