import Layout from "@/Layouts/Admin/Layout";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function ({turmas}) {
    return (
        <Layout container titlePage="Incrições" menu="inscricoes">
            <div className="row justify-content-between">
                <div className="col">
                    <h6>Incrições Realizadas</h6>
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
                                <th className="col-1">Turma</th>
                                <th className="text-center col-1"></th>
                            </tr>
                            </thead>
                            <tbody>
                            {turmas.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="text-center col-1">#{item.id}</td>
                                        <td>{item.nome}</td>
                                        <td className="col-1">
                                            <a className="btn btn-primary btn-sm"
                                               href={route('incricoes.cadastro.inscricao-turmas', item.id)}>Abrir</a>
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
