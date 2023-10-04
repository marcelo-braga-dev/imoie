import Layout from "@/Layouts/Admin/Layout";
import LinkIcon from '@mui/icons-material/Link';

export default function ({turmas}) {
    return (
        <Layout container titlePage="Incrições" menu="inscricoes">
            <div className="row justify-content-between">
                <div className="col">
                    <h6>Incrições Realizadas</h6>
                </div>
                <div className="col">
                    <small>Formúrario de inscrições:<br/></small>
                    <a
                       href={route('incricoes.cadastro.inscricao')}>
                        <LinkIcon/> {route('incricoes.cadastro.inscricao')}
                    </a>
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
                                <th className="col-1 text-center">Novos</th>
                                <th className="col-1 text-center">Total</th>
                                <th className="text-center col-1"></th>
                            </tr>
                            </thead>
                            <tbody>
                            {turmas.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="text-center col-1">#{item.id}</td>
                                        <td>{item.nome}</td>
                                        <td className="text-center">{item.novos}</td>
                                        <td className="text-center">{item.total}</td>
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
