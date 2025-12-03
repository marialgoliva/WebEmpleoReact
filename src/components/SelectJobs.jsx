

export function SelectJobs({ categoria, name, value, options, onChange, onFocus }) {
        const hanleChange = (e) => {
            onChange(name, e.target.value)
        }   
        
        return (

            <select 
                name={name} 
                value={value}
                onChange={hanleChange}
                className={onFocus ? "focused" : ""}
            >
                <option value="">{categoria}</option>
                {options.map(opt => {
                    return (<option key={opt.value} value={opt.value}>{opt.name}</option>)

                })}
            </select>

        );

    }