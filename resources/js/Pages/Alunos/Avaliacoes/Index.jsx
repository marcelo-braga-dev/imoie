import Layout from "@/Layouts/Alunos/Layout";

export default function ({turma}) {
    return (
        <Layout container titlePage="Avaliações" menu="avaliacoes">
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
            <div className="row">
                <div className="col text-center">
                    <span><b>Não há avaliações para realizar.</b></span>
                </div>
            </div>
        </Layout>
    )
}
