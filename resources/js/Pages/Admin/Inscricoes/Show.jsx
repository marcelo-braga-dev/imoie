import Layout from "@/Layouts/Admin/Layout";

export default function ({dados}) {
    return (
        <Layout container titlePage="Incrições" menu="inscricoes" voltar={route('admin.inscricoes.index')}>
            <div className="row justify-content-between">
                <div className="col">
                    <h5>Informações</h5>
                </div>
                <div className="col">
                    <a className="btn btn-primary btn-sm"
                    href={route('admin.alunos.create', {incricao: dados.id})}>Matricular</a>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <span className="d-block"><b>Nome:</b> {dados.nome}</span>
                    <span className="d-block"><b>Nome Social:</b> {dados.nome_social}</span>
                    <span className="d-block"><b>CPF:</b> {dados.cpf}</span>
                    <span className="d-block"><b>Telefone:</b> {dados.telefone}</span>
                    <span className="d-block"><b>Whatsapp:</b> {dados.whatsapp}</span>
                    <span className="d-block"><b>Contato:</b> {dados.contato}</span>
                    <span className="d-block"><b>E-mail:</b> {dados.email}</span>
                </div>
                <div className="col">
                    <span className="d-block"><b>Turma:</b> {dados.turma}</span>
                    <span className="d-block"><b>Matriculado:</b> {dados.matriculado}</span>
                    <span className="d-block"><b>Forma Pagamento:</b> {dados.forma_pagamento}</span>
                    <span className="d-block"><b>Data Cadastro:</b> {dados.data}</span>
                </div>
            </div>
        </Layout>
    )
}
