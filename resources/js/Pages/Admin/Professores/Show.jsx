import Layout from "@/Layouts/Admin/Layout";
import {useForm} from "@inertiajs/react";

export default function ({dados}) {
    const {setData, post} = useForm();

    function submit(e) {
        e.preventDefault()
        post(route('admin.professores.store'))
    }

    return (
        <Layout container titlePage="Informações" menu="professores"
                voltar={route('admin.professores.index')}>
            <div className="row">
                <div className="col">
                    <span className="d-block"><b>Nome:</b> {dados.nome}</span>
                    <span className="d-block"><b>ID:</b> #{dados.id}</span>
                    <span className="d-block"><b>E-mail:</b> {dados.email}</span>
                    <span className="d-block"><b>Turma:</b> {dados.turma_nome}</span>
                </div>
                <div className="col-auto">
                    <a className="btn btn-primary"
                       href={route('admin.professores.edit', dados.id)}>Editar</a>
                </div>
            </div>
        </Layout>
    )
}
