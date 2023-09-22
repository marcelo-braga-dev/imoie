import Layout from "@/Layouts/Admin/Layout";

export default function ({dados}) {
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
                </div>
            </div>
        </Layout>
    )
}
