import Layout from "@/Layouts/Admin/Layout";
import EditIcon from '@mui/icons-material/Edit';

import AddIcon from '@mui/icons-material/Add';
import {useForm} from "@inertiajs/react";

export default function ({aulas, turma}) {
    const {post} = useForm()

    function avancaStatus(id, status) {
        post(route('admin.aulas.avanca-status', {id: id, status: status}))
    }

    return (
        <Layout container titlePage="Aulas da Turma" menu="turmas" voltar={route('admin.turmas.index')}>
            <div className="row justify-content-between mb-3">
                <div className="col ps-4">
                    <h5>Turma: {turma.nome}</h5>
                    <span className="d-block">Instrutor(a): {turma.professor}</span>
                    <span>Horário: {turma.data}</span>
                </div>
                <div className="col">
                    <a className="btn btn-primary"
                       href={route('admin.aulas.create', {turma: turma.id})}><AddIcon/> Cadastrar Aula</a>
                </div>
            </div>
            <div className="card card-body">
                <ul className="list-group list-group-flush">
                    {aulas.map((item, index) => {
                        return (
                            <li key={index}
                                className="list-group-item d-flex justify-content-bet ween">
                                <div className="col ms-2 me-auto">
                                    <span className="fw-bold me-3 d-block">Módulo: {item.modulo}</span>
                                    <span className="fw-bold me-3">Aula: {item.numero}</span>
                                    {item.status == 'fechada' &&
                                        <span
                                            className="badge rounded-pill bg-light text-dark">{item.status_nome}</span>
                                    }
                                    {item.status == 'aberta' &&
                                        <span className="badge rounded-pill bg-success">{item.status_nome}</span>
                                    }
                                    {item.status == 'finalizada' &&
                                        <span className="badge rounded-pill bg-dark">{item.status_nome}</span>
                                    }
                                    <span className="d-block">Título: {item.nome}</span>
                                    <span className="d-block">Horário da aula: {item.data}</span>
                                    <span className="d-block">Link da aula: {item.link}</span>
                                    <span className="d-block">Resumo: {item.resumo}</span>
                                </div>
                                <div className="col">
                                    {item.status == 'fechada' &&
                                        <button className="btn btn-success mx-2 px-3"
                                                onClick={() => avancaStatus(item.id, item.status)}>
                                            Abrir Aula
                                        </button>
                                    }
                                    {item.status == 'aberta' &&
                                        <button className="btn btn-warning mx-2 px-3"
                                                onClick={() => avancaStatus(item.id, item.status)}>
                                            Finalizar Aula
                                        </button>
                                    }
                                </div>
                                <div>
                                    <a href={route('admin.aulas.edit', item.id)}
                                       className="btn btn-primary mx-2 px-3">
                                        <EditIcon style={{fontSize: 18}}/> Editar
                                    </a>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Layout>
    )
}
