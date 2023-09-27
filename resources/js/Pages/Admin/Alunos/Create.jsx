import Layout from "@/Layouts/Admin/Layout";
import {TextField} from "@mui/material";
import {useForm} from "@inertiajs/react";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ({dados, turmas}) {
    const {data, setData, post} = useForm({
        nome: dados.nome,
        email: dados.email,
        turma: dados.turma_id,
        incricao: dados.id
    });

    function submit(e) {
        e.preventDefault()
        post(route('admin.alunos.store'))
    }

    return (
        <Layout container titlePage="Cadastrar Alunos" menu="alunos"
                voltar={route('admin.alunos.index')}>
            <form onSubmit={submit}>
                <div className="row">
                    <div className="col-12 mb-3">
                        <TextField label="Nome" fullWidth required defaultValue={data.nome}
                                   onChange={e => setData('nome', e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 mb-3">
                        <TextField label="Email" type="email" fullWidth required defaultValue={data.email}
                                   onChange={e => setData('email', e.target.value)}/>
                    </div>
                    <div className="col-6 mb-3">
                        <TextField label="Senha" fullWidth required
                                   onChange={e => setData('senha', e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Turma</InputLabel>
                            <Select
                                labelId="demo-simple-select-label" required
                                id="demo-simple-select"
                                defaultValue={data.turma}
                                label="Instrutor (a)"
                                onChange={e => setData('turma', e.target.value)}
                            >
                                {turmas.map((item, index) => {
                                    return(
                                        <MenuItem key={index} value={item.id}>
                                            {item.nome} ({item.data})
                                        </MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
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
