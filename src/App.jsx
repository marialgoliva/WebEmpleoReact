import jobsData from './data.json'
import { useState } from "react";
import JobCardComponent from "./components/JobCardComponent";
import { JobHeader } from "./components/JobHeader";
import { Search } from "./components/Search";
import { Pagination } from "./components/Pagination";
import { Footer } from "./components/Footer";
import { SelectJobs } from "./components/SelectJobs";



function App() {

    const PAGESIZE = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const start = (currentPage-1) * PAGESIZE;
    const jobsVisibles = jobsData.slice(start,start+PAGESIZE)
    const jobsFiltrados = jobsVisibles; //TODO
    const totalPaginas = Math.ceil(jobsData.length/PAGESIZE);
    
    const handleChangePage = (page) => {
        setCurrentPage(page)
    }

    const allTechnologies = jobsData.flatMap(job=>{
        return Array.isArray(job.data.technology) ? job.data.technology : [job.data.technology]
    })

    const technologies = Array.from(new Set(allTechnologies));

    const tecnologias = technologies.map(
        t => {return {
            value: t,
            name: t.charAt(0).toUpperCase() + t.slice(1)
        }}
    );
    
    const ubicaciones = Array.from(
        new Set(jobsData.map(job => job.data.modalidad))
        ).map(v=>{
            const job = jobsData.find(j=>j.data.modalidad==v);
            return {
                value: v,
                name: job.ubicacion
            };
        });
    

    const experiencias = Array.from(new Set(
        jobsData.map(job => job.data.nivel))
    ).map(nivel=>({
        value: nivel,
        name: nivel.charAt(0).toUpperCase() + nivel.slice(1)
    }))

    
    
    return (
        <>

            <JobHeader></JobHeader>
            <main>
                <section className="empleosHeader">
                    <h1>Encuentra tu próximo trabajo</h1>
                    <p>Explora miles de oportunidades en el sector tecnológico.</p>
                    <Search techSelect={tecnologias} ubiSelect={ubicaciones} expSelect={experiencias}></Search>
                </section>
                <section className="resultadosBusqueda">
                    <h2>Resultados de busqueda</h2>
                    <div className="numResultados"></div>
                    <div className="jobs-articles">
                        {jobsVisibles.length>0 ? jobsVisibles.map(job => {
                            return <JobCardComponent key={job.id} job={job}></JobCardComponent>
                        }) : <p>No se han encontrado resultados para esos filtros.</p>}
                        
                    </div>
                </section>
                <Pagination 
                    totalPaginas={totalPaginas}
                    currentPage={currentPage}
                    onChangePage={handleChangePage}
                ></Pagination>
            </main>
            <Footer></Footer>

        </>
        
    )
    
}

export default App
