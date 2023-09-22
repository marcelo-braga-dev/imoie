import Layout from "@/Layouts/Admin/Layout";

export default function ({alunos, turma}) {
    return (
        <Layout container titlePage="Integrantes da Turma" menu="turmas"
        voltar={route('admin.turmas.index')}>
            <div className="row mb-3">
                <div className="col">
                    <h6>Turma: {turma.nome}</h6>
                </div>
                <div className="col">
                    <small><b>Data:</b> {turma.data}</small>
                </div>
                <div className="col-auto">
                    <a className="btn btn-primary"
                    href={route('admin.turmas.add-aluno', turma.id)}>Inserir Integrante</a>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    Quantidade de integrantes: {alunos.length} pessoas.
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ol className="list-group list-group-numbered">
                        {alunos.map((item, index) => {
                            return (
                                <li key={index}
                                    className="list-group-item d-flex align-items-center">
                                    <div className="ms-2 me-auto">
                                        <span className="fw-bold me-1">Nome:</span>
                                        <span>{item.nome}</span>
                                    </div>
                                    <a href={route('admin.turmas.show', item.id)}
                                       className="btn btn-primary btn-sm">Ver</a>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        </Layout>
    )
}
