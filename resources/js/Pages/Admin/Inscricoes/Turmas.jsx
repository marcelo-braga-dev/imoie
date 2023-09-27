import Layout from "@/Layouts/Admin/Layout";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function ({inscricoes}) {
    return (
        <Layout container titlePage="Incrições" menu="inscricoes">
            <div className="row justify-content-between">
                <div className="col">
                    <h6>Incrições</h6>
                </div>
                <div className="col">
                    <a className="btn btn-primary"
                    href={route('incricoes.cadastro.inscricao')}><AddOutlinedIcon/> Cadastrar</a>
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
                                <th className="col-1">Turma</th>
                                <th className="col-1">Matriculado</th>
                                <th className="col-1">Data</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {inscricoes.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="text-center">#{item.id}</td>
                                        <td>{item.nome}</td>
                                        <td>{item.turma}</td>
                                        <td className="text-center">{item.matriculado}</td>
                                        <td>{item.data}</td>
                                        <td className="col-1">
                                            <a className="btn btn-primary btn-sm"
                                               href={route('incricoes.cadastro.show', item.id)}>Abrir</a>
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
