import Layout from "@/Layouts/Admin/Layout";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function ({mensalidades}) {
    return (
        <Layout container titlePage="Mensalidades" menu="mensalidades">
            <div className="row justify-content-between">
                <div className="col">
                    <h6>Mensalidades</h6>
                </div>
                <div className="col">
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                            <tr>
                                <th className="text-center col-1">ID</th>
                                <th>Nome</th>
                                <th className="text-center">Data Vencimento</th>
                                <th>Turma</th>
                                <th className="text-center">Status</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {mensalidades.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="text-center">#{item.id}</td>
                                        <td>{item.aluno_nome}</td>
                                        <td className="text-center">{item.data_vencimento}</td>
                                        <td>{item.turma}</td>
                                        <td className="text-center">{item.status}</td>
                                        <td className="col-1">
                                            <a className="btn btn-primary"
                                               href={route('admin.mensalidades.show', item.id)}>Ver</a>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </Layout>
    )
}
