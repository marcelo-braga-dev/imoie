import Layout from "@/Layouts/Admin/Layout";
import {TextField} from "@mui/material";
import {useForm} from "@inertiajs/react";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ({prof}) {
    const {setData, post} = useForm();

    function submit(e) {
        e.preventDefault()
        post(route('admin.turmas.store'))
    }

    return (
        <Layout container titlePage="Cadastrar Turmas" menu="turmas"
                voltar={route('admin.turmas.index')}>
            <form onSubmit={submit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <TextField label="Nome da Turma" fullWidth required
                                   onChange={e => setData('nome', e.target.value)}/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <TextField label="Data e horário" fullWidth required
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
                                defaultValue=""
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
                        <button className="btn btn-primary" type="submit">Cadastrar</button>
                    </div>
                </div>
            </form>
        </Layout>
    )
}
