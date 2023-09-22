import Layout from "@/Layouts/Alunos/Layout";

export default function ({dados, turma}) {
    return (
        <Layout container titlePage="Mensalidades" menu="mensalidades">
            <div className="row mb-4">
                <div className="col">
                    <h5>Mensalidades do curso</h5>
                    <span>Turma: {turma.nome}</span>
                    <span className="d-block">Horário: {turma.data}</span>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <span className="d-block">A confirmação de pagamento ocorre em até 24 horas.</span>
                    <small>Após 7 dias de atraso os acessos às aulas serão bloqueados.</small>
                </div>
            </div>
            <ul className="list-group">
                {dados.map((item, index) => {
                    return (
                        <li className="list-group-item d-fle x justify-content-between align-items-center">
                            <div className="row row-cols-3">
                                <div className="col">
                                    <span className="d-block"><b>Parcela:</b> {index + 1}/{dados.length}</span>
                                    <span className="d-block"><b>Valor:</b> R$ {item.valor}</span>
                                </div>
                                <div className="col">
                                    <span className="d-block"><b>Vencimento:</b> {item.data_vencimento}</span>
                                    <span className="d-block">
                                        <b>Status:</b>
                                        <span className="badge bg-light text-dark ms-2">{item.status}</span>
                                    </span>
                                </div>
                                <div className="col text-end mt-1">
                                    <a href={item.link_pagamento} className="btn btn-primary">Pagar</a>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </Layout>
    )
}
