import Layout from "@/Layouts/Admin/Layout";
import {TextField} from "@mui/material";
import {router, useForm} from "@inertiajs/react";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

export default function ({turma, prof}) {
    const {setData, post, data} = useForm({
        nome: turma.nome,
        data: turma.data,
        prof: turma.id_professor,
    });

    function submit(e) {
        e.preventDefault()
        router.post(route('admin.turmas.update', turma.id), {
            '_method': 'put',
            ...data
        })
    }

    return (
        <Layout container titlePage="Editar Turma" menu="turmas"
                voltar={route('admin.turmas.index')}>
            <form onSubmit={submit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <TextField label="Nome da Turma" fullWidth required defaultValue={data.nome}
                                   onChange={e => setData('nome', e.target.value)}/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <TextField label="Data e horário" fullWidth required defaultValue={data.data}
                                   onChange={e => setData('data', e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Instrutor (a)</InputLabel>
                            <Select
                                labelId="demo-simple-select-label" required
                                id="demo-simple-select"
                                defaultValue={data.prof}
                                label="Instrutor (a)"
                                onChange={e => setData('professor', e.target.value)}
                            >
                                {prof.map((item, index) => {
                                    return(
                                        <MenuItem key={index} value={item.id}>{item.nome}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
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
