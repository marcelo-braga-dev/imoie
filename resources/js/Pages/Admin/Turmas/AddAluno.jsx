import Layout from "@/Layouts/Admin/Layout";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {router, useForm} from "@inertiajs/react";
import {InputAdornment, TextField} from "@mui/material";
import React, {useState} from "react";

export default function ({alunos, turma}) {

    const [qtdParcelas, setQtdParcelas] = useState(1)

    const {data, setData} = useForm({
        turma: turma.id,
        parcelas: []
    })

    function submit(e) {
        e.preventDefault()
        router.post(route('admin.turmas.add-aluno', turma.id), {
            '_method': 'put',
            ...data
        })
    }

    function maskMoney(valor) {
        let value = valor.replace('.', '').replace(',', '').replace(/\D/g, '')
        const options = {minimumFractionDigits: 2}
        const result = new Intl.NumberFormat('pt-BR', options).format(
            parseFloat(value) / 100
        )
        return result
    }

    const rows = [];
    for (let i = 1; i <= qtdParcelas; i++) {
        rows.push(
            <div key={i} className="row mb-3 align-items-center">
                <div className="col-auto">{i}.</div>
                <div className="col-auto">
                    <TextField type="date" label="Data Vencimento"
                               InputLabelProps={{shrink: true}} required
                               value={data?.parcelas?.['i' + i]?.data}
                               onChange={e => setData('parcelas', {
                                   ...data.parcelas,
                                   ['i' + i]: {
                                       ...data?.parcelas?.['i' + i],
                                       parcela: i,
                                       data: e.target.value,

                                   },
                               })}/>
                </div>
                <div className="col-md-3">
                    <TextField
                        label="Valor da Parcela" fullWidth required defaultValue=""
                        InputProps={{startAdornment: <InputAdornment position="start">R$</InputAdornment>}}
                        value={data?.parcelas?.['i' + i]?.valor}
                        onChange={e => setData('parcelas', {
                            ...data.parcelas,
                            ['i' + i]: {
                                ...data?.parcelas?.['i' + i],
                                parcela: i,
                                valor: maskMoney(e.target.value),
                                totalParcelas: qtdParcelas
                            },
                        })}/>
                </div>

                <div className="col">
                    <TextField
                        label="Link Pagamento" fullWidth required defaultValue=""
                        value={data?.parcelas?.['i' + i]?.link}
                        onChange={e => setData('parcelas', {
                            ...data.parcelas,
                            ['i' + i]: {
                                ...data?.parcelas?.['i' + i],
                                parcela: i,
                                link: e.target.value
                            },
                        })}/>
                </div>
            </div>
        );
    }

    return (
        <Layout container titlePage="Integrantes da Turma" menu="turmas"
                voltar={route('admin.turmas.index')}>
            <div className="row mb-3">
                <div className="col">
                    <h6>Turma: {turma.nome}</h6>
                </div>
                <div className="col">
                    <span><b>Data:</b> {turma.data}</span>
                </div>
            </div>
            <form onSubmit={submit}>
                <div className="row mb-4">
                    <div className="col-md-6">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Aluno(a)</InputLabel>
                            <Select
                                labelId="demo-simple-select-label" required
                                id="demo-simple-select"
                                defaultValue=""
                                label="Aluno (a)" name="aluno"
                                onChange={e => setData('aluno', e.target.value)}
                            >
                                {alunos.map((item, index) => {
                                    return (
                                        <MenuItem key={index} value={item.id}>
                                            #{item.id} - {item.nome}
                                        </MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </div>
                </div>


                <div className="row">
                    <div className="col mb-4">
                        <h6 className="mb-3">Mensalidades</h6>
                        <div className="row ps-5">
                            <div className="col-md-2 mb-4">
                                <TextField label="Qtd. Parcelas" type="number" defaultValue={qtdParcelas}
                                           onChange={e => setQtdParcelas(e.target.value)}/>
                            </div>
                        </div>
                        {rows.map((item) => {
                            return item
                        })}
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-auto">
                        <button className="btn btn-primary">Inserir</button>
                    </div>
                </div>
            </form>
        </Layout>
    )
}
