import Layout from "@/Layouts/Admin/Layout";

export default function ({turmas}) {
    return (
        <Layout container titlePage="Turmas" menu="turmas">
            <div className="row justify-content-between">
                <div className="col ps-4">
                    <h5>Turmas Cadastradas</h5>
                </div>
                <div className="col">
                    <a href={route('admin.turmas.create')} className="btn btn-primary">Cadastrar</a>
                </div>
            </div>
            <div className="card card-body">
                <ul className="list-group list-group-flush">
                    {turmas.map((item, index) => {
                        return (
                            <li key={index}
                                className="list-group-item d-flex justify-content-around align-items-center">
                                <div className="ms-2 me-auto">
                                    <span className="fw-bold me-3">Turma: {item.nome}</span>
                                    <span className="d-block">Instrutor(a): {item.professor}</span>
                                    <small className="d-bl ock">Horário: {item.data}</small>
                                </div>
                                <div>
                                    <a href={route('admin.turmas.aulas', {id: item.id})}
                                       className="btn btn-success btn-sm mx-2 px-3">Aulas</a>
                                    <a href={route('admin.turmas.show', item.id)}
                                       className="btn btn-primary btn-sm mx-2 px-3">Integrantes</a>
                                    <a href={route('admin.turmas.edit', item.id)}
                                       className="btn btn-warning btn-sm mx-2 px-3">Editar</a>
                                </div>
                                {/*<span className="badge bg-primary rounded-pill">15/08/2023</span>*/}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Layout>
    )
}
