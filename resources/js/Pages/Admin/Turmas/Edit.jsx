import Layout from "@/Layouts/Admin/Layout";
import {InputAdornment, TextField} from "@mui/material";
import {router, useForm} from "@inertiajs/react";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextFieldMoney from "@/Components/Inputs/TextFieldMoney";

export default function ({turma, prof}) {
    const {setData, post, data} = useForm({
        nome: turma.nome,
        data: turma.data,
        professor: turma.id_professor,
        data_horario: turma.data,
        max_alunos: turma.max_alunos,
        valor: turma.valor,
        qtd_parcelas: turma.qtd_parcelas,
        desconto_vista: turma.desconto_vista,
        inicio: turma.inicio_str,
        fim: turma.fim_str
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
                    <div className="col-md-7 mb-5">
                        <TextField label="Nome da Turma" fullWidth required value={data.nome}
                                   onChange={e => setData('nome', e.target.value)}/>
                    </div>
                    <div className="col-md-5 mb-5">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Professor (a)</InputLabel>
                            <Select
                                labelId="demo-simple-select-label" required
                                id="demo-simple-select"
                                defaultValue={data.professor}
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
                                   InputLabelProps={{shrink: true}} defaultValue={data.inicio}
                                   onChange={e => setData('inicio', e.target.value)}/>
                    </div>
                    <div className="col mb-5">
                        <TextField label="Fim das Aulas" type="date" fullWidth required
                                   InputLabelProps={{shrink: true}} defaultValue={data.fim}
                                   onChange={e => setData('fim', e.target.value)}/>
                    </div>

                    <div className="col mb-5">
                        <TextField label="Data e horário" fullWidth required defaultValue={data.data_horario}
                                   onChange={e => setData('data', e.target.value)}/>
                    </div>
                    <div className="col mb-5">
                        <TextField label="Qtd. Max. Estudantes" type="number" fullWidth defaultValue={data.max_alunos}
                                   onChange={e => setData('max_alunos', e.target.value)}/>
                    </div>
                </div>
                <div className="row row-cols-md-4">
                    <div className="col mb-5">
                        <TextFieldMoney label="Valor Total" required setData={setData} index="valor"
                                        value={data.valor}/>
                    </div>
                    <div className="col mb-5">
                        <TextField label="Qtd. Max. Parcelas" type="number" fullWidth required
                                   defaultValue={data.qtd_parcelas}
                                   onChange={e => setData('qtd_parcelas', e.target.value)}/>
                    </div>
                    <div className="col mb-5">
                        <TextField label="Desconto à vista" type="number" fullWidth className="text-end"
                                   inputProps={{step: "0.01"}} defaultValue={data.desconto_vista}
                                   InputProps={{endAdornment: <InputAdornment position="start">%</InputAdornment>,}}
                                   onChange={e => setData('desconto_vista', e.target.value)}/>
                    </div>
                </div>

                <div className="row justify-content-center mt-3">
                    <div className="col-auto">
                        <button className="btn btn-primary" type="submit">Atualizar</button>
                    </div>
                </div>
            </form>
        </Layout>
    )
}
