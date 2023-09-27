import Layout from "@/Layouts/Admin/Layout";
import {TextField} from "@mui/material";
import {useForm} from "@inertiajs/react";

export default function ({dados, turma}) {
    const {setData, post} = useForm({
        turma_id: turma.id
    });

    function submit(e) {
        e.preventDefault()
        post(route('admin.aulas.store'))
    }

    return (
        <Layout container titlePage="Cadastrar Aula" menu="turmas"
                voltar={route('admin.turmas.index')}>
            <form onSubmit={submit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <TextField label="Nome da Aula" fullWidth required
                                   onChange={e => setData('nome', e.target.value)}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <TextField label="Número da Aula" fullWidth required type="number"
                                   onChange={e => setData('numero', e.target.value)}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <TextField label="Módulo da Aula" fullWidth required type="number"
                                   onChange={e => setData('modulo', e.target.value)}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 mb-3">
                        <TextField label="Data da Aula" fullWidth required type="datetime-local"
                                   InputLabelProps={{ shrink: true }}
                                   onChange={e => setData('data', e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col mb-3">
                        <TextField label="Link da Aula" fullWidth required
                                   onChange={e => setData('link', e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col mb-3">
                        <TextField label="Resumo da Aula" fullWidth required rows="5" multiline
                                   onChange={e => setData('resumo', e.target.value)}/>

                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <button className="btn btn-primary" type="submit">Cadastrar</button>
                    </div>
                </div>
            </form>
        </Layout>
    )
}
