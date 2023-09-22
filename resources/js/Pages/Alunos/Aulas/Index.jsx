import Layout from "@/Layouts/Alunos/Layout";

export default function ({turma, aulas}) {
    return (
        <Layout container titlePage="Aulas" menu="aulas">
            <div className="mb-4 text-center">
                <h5>Turma: {turma.nome}</h5>
                <div className="row justify-content-between mx-4">
                    <div className="col-auto"><span className="d-block">
                        Professor(a): {turma.professor}
                    </span></div>
                    <div className="col-auto"><span className="d-block">
                        Horário: {turma.data}</span></div>
                </div>
            </div>
            <div className="card card-body">
                <ul className="list-group list-group-flush">
                    {aulas.map((items, index) => {
                        return <>
                            <h6 className="ms-4">MÓDULO {index + 1}</h6>
                            {items.map((item, index) => {
                                return (
                                    <li key={index}
                                        className="list-group-item d-flex justify-content-around align-items-center">
                                        <div className="ms-2 me-auto">
                                            <span className="fw-bold me-3">Aula {item.numero}</span>
                                            <span className="d-block">{item.nome}</span>
                                            <small className="d-bl ock">Disponível em {item.data}</small>
                                        </div>
                                        <a href={route('alunos.aulas.show', item.id)}
                                           className="btn btn-primary btn-sm">Abrir</a>
                                        {/*<span className="badge bg-primary rounded-pill">15/08/2023</span>*/}
                                    </li>
                                )
                            })}
                        </>
                    })}
                </ul>
            </div>
        </Layout>
    )
}
