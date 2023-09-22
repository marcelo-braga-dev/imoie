import Layout from "@/Layouts/Admin/Layout";
import {TextField} from "@mui/material";
import {router, useForm} from "@inertiajs/react";

export default function ({aula}) {
    const {data, setData, post} = useForm({
        nome: aula.nome,
        numero: aula.numero,
        modulo: aula.modulo,
        data: aula.data,
        link: aula.link,
        resumo: aula.resumo,
        turma: aula.turma,
    });

    function submit(e) {
        e.preventDefault()
        router.post(route('admin.aulas.update', aula.id), {
            '_method': 'put',
            ...data
        })
    }

    return (
        <Layout container titlePage="Atualizar Aula" menu="turmas"
                voltar={route('admin.turmas.index')}>
            <form onSubmit={submit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <TextField label="Nome da Aula" fullWidth required
                                   defaultValue={data.nome}
                                   onChange={e => setData('nome', e.target.value)}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <TextField label="Número da Aula" fullWidth required type="number"
                                   defaultValue={data.numero}
                                   onChange={e => setData('numero', e.target.value)}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <TextField label="Módulo da Aula" fullWidth required type="number"
                                   defaultValue={data.modulo}
                                   onChange={e => setData('modulo', e.target.value)}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 mb-3">
                        <TextField label="Data da Aula" fullWidth required type="datetime-local"
                                   defaultValue={data.data}
                                   InputLabelProps={{ shrink: true }}
                                   onChange={e => setData('data', e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col mb-3">
                        <TextField label="Link da Aula" fullWidth required
                                   defaultValue={data.link}
                                   onChange={e => setData('link', e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col mb-3">
                        <TextField label="Resumo da Aula" fullWidth required rows="5" multiline
                                   defaultValue={data.resumo}
                                   onChange={e => setData('resumo', e.target.value)}/>

                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <button className="btn btn-primary" type="submit">Atualizar</button>
                    </div>
                </div>
            </form>
        </Layout>
    )
}
