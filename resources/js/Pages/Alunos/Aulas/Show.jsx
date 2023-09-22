import Layout from "@/Layouts/Alunos/Layout";

export default function ({dados}) {
    return (
        <Layout container titlePage="Informações da Aula" menu="aulas"
        voltar={route('alunos.aulas.index')}>
            <div className="row mb-4">
                <div className="col">
                    <small>Aula {dados.numero}</small>
                    <h6 className="d-block">{dados.nome}</h6>
                    <small>Disponível em {dados.data}</small>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h6>Resumo</h6>
                    <p>{dados.resumo}</p>
                </div>
            </div>
            <div className="row text-center">
                <div className="col">
                    <a href={dados.link} className="btn btn-primary">Acessar Aula</a>
                </div>
            </div>
        </Layout>
    )
}
