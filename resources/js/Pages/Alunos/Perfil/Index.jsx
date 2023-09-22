import Layout from "@/Layouts/Admin/Layout";

export default function ({dados, turma}) {
    return (
        <Layout container titlePage="Mensalidades" menu="perfil">
            <h6>Seus dados</h6>
            <div className="row">
                <div className="col">
                    <span className="d-block"><b>Nome:</b> {dados.nome}</span>
                    <span className="d-block"><b>E-mail:</b> {dados.email}</span>
                    <span className="d-block"><b>Telefone:</b></span>
                </div>
                <div className="col">
                    <span className="d-block"><b>Turma:</b> {turma.nome}</span>
                    <span className="d-block"><b>Data:</b> {turma.data}</span>
                </div>
            </div>
        </Layout>
    )
}
