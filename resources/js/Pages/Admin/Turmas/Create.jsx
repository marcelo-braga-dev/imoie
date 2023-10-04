import Layout from "@/Layouts/Admin/Layout";
import {InputAdornment, TextField} from "@mui/material";
import {useForm} from "@inertiajs/react";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextFieldMoney from "@/Components/Inputs/TextFieldMoney";

export default function ({prof}) {
    const {data, setData, post} = useForm();

    function submit(e) {
        e.preventDefault()
        post(route('admin.turmas.store'))
    }

    return (
        <Layout container titlePage="Cadastrar Turmas" menu="turmas"
                voltar={route('admin.turmas.index')}>
            <form onSubmit={submit}>
                <div className="row">
                    <div className="col-md-7 mb-5">
                        <TextField label="Nome da Turma" fullWidth required
                                   onChange={e => setData('nome', e.target.value)}/>
                    </div>
                    <div className="col-md-5 mb-5">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Professor (a)</InputLabel>
                            <Select
                                labelId="demo-simple-select-label" required
                                id="demo-simple-select"
                                defaultValue=""
                                label="Instrutor (a)"
                                onChange={e => setData('professor', e.target.value)}
                            >
                                {prof.map((item, index) => {
                                    return (
                                        <MenuItem key={index} value={item.id}>{item.nome}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="row row-cols-4">
                    <div className="col mb-5">
                        <TextField label="Início das Aulas" type="date" fullWidth required
                                   InputLabelProps={{shrink: true}}
                                   onChange={e => setData('inicio', e.target.value)}/>
                    </div>
                    <div className="col mb-5">
                        <TextField label="Fim das Aulas" type="date" fullWidth required
                                   InputLabelProps={{shrink: true}}
                                   onChange={e => setData('fim', e.target.value)}/>
                    </div>

                    <div className="col mb-5">
                        <TextField label="Data e horário" fullWidth required
                                   onChange={e => setData('data', e.target.value)}/>
                    </div>
                    <div className="col mb-5">
                        <TextField label="Qtd. Max. Estudantes" type="number" fullWidth
                                   onChange={e => setData('max_alunos', e.target.value)}/>
                    </div>
                </div>
                <div className="row row-cols-md-4">
                    <div className="col mb-5">
                        <TextFieldMoney label="Valor Total" required setData={setData} index="valor" value={data.valor}/>
                    </div>
                    <div className="col mb-5">
                        <TextField label="Qtd. Max. Parcelas" type="number" fullWidth required
                                   onChange={e => setData('qtd_parcelas', e.target.value)}/>
                    </div>
                    <div className="col mb-5">
                        <TextField label="Desconto à vista" type="number" fullWidth className="text-end"
                                   inputProps={{step: "0.01"}}
                                   InputProps={{endAdornment: <InputAdornment position="start">%</InputAdornment>,}}
                                   onChange={e => setData('desconto_vista', e.target.value)}/>
                    </div>
                </div>

                <div className="row justify-content-center mt-3">
                    <div className="col-auto">
                        <button className="btn btn-primary" type="submit">Cadastrar</button>
                    </div>
                </div>
            </form>
        </Layout>
    )
}
