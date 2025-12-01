import { useId } from "react";
import { SelectJobs } from "./SelectJobs";


export function Search({techSelect, ubiSelect, expSelect}) {
    
    const idSearch = useId(); //Evitamos un nombre demasiado genérico que se pueda repetir en la app
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit del formulario de busqueda', e)
    }

    const handleChangeSelect = () => {console.log('seleccionado :>> ');}

    
    return (
        <>
            <form onSubmit={handleSubmit} action="" role="search">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                    <input name={idSearch} className="search-input" type="text" placeholder="Buscar trabajos empresas o habilidades" />
                    <button type="submit" style={{ position: 'absolute', right: 0 }}>Buscar</button>
                </div>
            </form>
            <div className="filters">
                <SelectJobs categoria="Tecnología" options={techSelect} handleChange={handleChangeSelect}></SelectJobs>
                <SelectJobs categoria="Ubicación" options={ubiSelect} handleChange={handleChangeSelect}></SelectJobs>
                <SelectJobs categoria="Experiencia" options={expSelect} handleChange={handleChangeSelect}></SelectJobs>
            </div>
        </>
    );
}