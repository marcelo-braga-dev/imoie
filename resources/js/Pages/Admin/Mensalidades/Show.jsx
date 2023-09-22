import Layout from "@/Layouts/Admin/Layout";
import {useForm} from "@inertiajs/react";

export default function ({dados}) {
    const {setData, post} = useForm();

    function submit(e) {
        e.preventDefault()
        post(route('admin.mensalidades.update-status', dados.id))
    }

    return (
        <Layout container titlePage="Mensalidades" menu="mensalidades"
                voltar={route('admin.mensalidades.index')}>
            <div className="row">
                <div className="col">
                    <span className="d-block"><b>Nome:</b> {dados.aluno_nome}</span>
                    <span className="d-block"><b>Data Vencimento:</b> {dados.data_vencimento}</span>
                    <span className="d-block"><b>Status:</b> {dados.status}</span>
                    <span className="d-block"><b>Valor:</b> R$ {dados.valor}</span>
                    <span className="d-block"><b>Turma:</b> {dados.turma}</span>
                    <span className="d-block"><b>Link Pagamento:</b> {dados.link_pagamento}</span>
                    <span className="d-block"><b>ID:</b> #{dados.id}</span>
                </div>
                <div className="col">
                    <form onSubmit={submit}>
                        {dados.status == 'aberto' && <button className="btn btn-success">Marcar como Pago</button>}
                    </form>
                </div>
            </div>
            {/*<div className="row">*/}
            {/*    <div className="col">*/}
            {/*        <div className="table-responsive">*/}
            {/*            <table className="table">*/}
            {/*                <thead>*/}
            {/*                <tr>*/}
            {/*                    <th className="col-1 text-center">ID</th>*/}
            {/*                    <th className="text-center"></th>*/}
            {/*                    <th className="text-center">Status</th>*/}
            {/*                    <th className="text-center">Valor</th>*/}
            {/*                    <th className="text-center">Turma</th>*/}
            {/*                    <th className="text-center">Link Pagamento</th>*/}
            {/*                </tr>*/}
            {/*                </thead>*/}
            {/*                <tbody>*/}
            {/*                {dados.map((item, index) => {*/}
            {/*                    return (*/}
            {/*                        <tr key={index}>*/}
            {/*                            <td className="text-center col-1">#{item.id}</td>*/}
            {/*                            <td className="text-center">{item.data_vencimento}</td>*/}
            {/*                            <td className="text-center">{item.status}</td>*/}
            {/*                            <td className="text-center">R$ {item.valor}</td>*/}
            {/*                            <td className="text-center">{item.turma}</td>*/}
            {/*                            <td className="text-center">{item.link_pagamento}</td>*/}
            {/*                        </tr>*/}
            {/*                    )*/}
            {/*                })}*/}

            {/*                </tbody>*/}
            {/*            </table>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Layout>
    )
}
