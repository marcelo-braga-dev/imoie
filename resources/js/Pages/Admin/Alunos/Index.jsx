import Layout from "@/Layouts/Admin/Layout";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function ({alunos}) {
    return (
        <Layout container titlePage="Alunos" menu="alunos">
            <div className="row justify-content-between">
                <div className="col">
                    <h6>Alunos Cadastrados</h6>
                </div>
                <div className="col">
                    <a className="btn btn-primary"
                    href={route('admin.alunos.create')}><AddOutlinedIcon/> Cadastrar</a>
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
                                <th>Turma</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {alunos.map((item, indes) => {
                                return (
                                    <tr>
                                        <td className="text-center">#{item.id}</td>
                                        <td>{item.nome}</td>
                                        <td>{item.turma}</td>
                                        <td className="col-1">
                                            <a className="btn btn-primary"
                                               href={route('admin.alunos.show', item.id)}>Ver</a>
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
