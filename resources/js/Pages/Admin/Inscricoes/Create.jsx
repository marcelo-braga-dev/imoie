import Layout from "@/Layouts/Admin/Layout";
import {FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from "@mui/material";
import {useForm} from "@inertiajs/react";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ({turmas}) {
    const {setData, post} = useForm();

    function submit(e) {
        e.preventDefault()
        post(route('incricoes.cadastro.inscricao'))
    }

    return (
        <div className="bg-primary">
            <div className="container p-5">
                <div className="card card-body">
                    <div className="row mb-2 justify-content-center">
                        <div className="col-auto text-center">
                            <img src="/storage/crm/imagens/logo.png" className="w-60" alt="logo"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-dark text-sm">
                            <h5 className="text-center">IMOIÊ - Curso de Inglês Afrocentrado</h5>
                            <ul>
                                <li>
                                    O presente Curso de Inglês Afrocentrado será ministrado por docentes pretas(os).
                                </li>
                                <li>
                                    É dedicado para pessoas jovens e adultas que desejam adquirir uma segunda língua
                                    e/ou que
                                    precisam do Inglês para conquistarem progresso na carreira profissional.
                                </li>
                                <li>
                                    Será integralmente (100%) online em modo síncrono (ao vivo) através de plataforma de
                                    ensino de fácil acesso.
                                </li>
                                <li>
                                    As aulas serão semanais às segundas-feiras e quartas-feiras entre 18h e 19h (turma
                                    Akoko)
                                    ou às quintas-feiras entre 19h e 20h30 (turma Keji).
                                </li>
                                <li>
                                    A duração de cada encontro (aula) será de 60 (sessenta) minutos (SEG e QUA – turma
                                    Akoko)
                                    e 90 (noventa) minutos (QUI – turma Keji).
                                </li>
                                <li>
                                    O conteúdo afrocentrado abordará habilidades centradas em aprendizagem e domínio da
                                    gramática, da leitura, da escrita e da capacidade de comunicar em Inglês.
                                </li>
                                <li>
                                    Curso de valor bastante acessível: mensalidades de R$150,00 (cento e cinquenta
                                    reais).
                                </li>
                            </ul>
                        </div>
                    </div>
                    <form className="p-4" onSubmit={submit}>
                        <h6>Inscreva-se</h6>
                        <div className="row">
                            <div className="col-12 mb-3">
                                <TextField label="Nome:" fullWidth required
                                           onChange={e => setData('nome', e.target.value)}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 mb-3">
                                <TextField label="Nome Social:" fullWidth
                                           onChange={e => setData('nome_social', e.target.value)}/>
                            </div>
                            <div className="col-6 mb-3">
                                <TextField label="CPF:" fullWidth required
                                           onChange={e => setData('cpf', e.target.value)}/>
                            </div>
                        </div>
                        <div className="row row-cols-3">
                            <div className="col mb-3">
                                <TextField label="Telefone:" fullWidth
                                           onChange={e => setData('telefone', e.target.value)}/>
                            </div>
                            <div className="col mb-3">
                                <TextField label="Whatsapp:" fullWidth required
                                           onChange={e => setData('whatsapp', e.target.value)}/>
                            </div>
                            <div className="col mb-3">
                                <TextField label="Contato:" fullWidth
                                           onChange={e => setData('contato', e.target.value)}/>
                            </div>
                        </div>

                        <div className="row row-cols-2">
                            <div className="col mb-3">
                                <TextField label="E-mail:" type="email" fullWidth required
                                           onChange={e => setData('email', e.target.value)}/>
                            </div>
                        </div>
                        <div className="row row-cols-2 mb-3">
                            <div className="col mb-3">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Turma</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label" required
                                        id="demo-simple-select"
                                        defaultValue=""
                                        onChange={e => setData('turma', e.target.value)}
                                    >
                                        {turmas.map((item, index) => {
                                            return (
                                                <MenuItem key={index} value={item.id}>
                                                    {item.nome} ({item.data})
                                                </MenuItem>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="col mb-3">
                                <FormControl fullWidth>
                                    <InputLabel id="forma_pagamento">Forma de Pagamento</InputLabel>
                                    <Select
                                        labelId="forma_pagamento" required
                                        defaultValue=""
                                        onChange={e => setData('forma_pagamento', e.target.value)}
                                    >
                                        <MenuItem value="PIX">PIX</MenuItem>
                                        <MenuItem value="CARTAO">Cartão de Crédito/Débito</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <FormControlLabel value="" control={<Radio/>} required
                                                          label="Aceito participar do grupo no Whatsapp exclusivo para divulgação de novidades sobre seu Imoiê – Curso de Inglês Afrocentrado. Nós do Imoiê respeitamos a Lei Geral de Proteçãode Dados (LGPD).
                                                    O grupo é fechado e apenas os administradores enviará mensagens relacionadas ao curso."/>
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <button className="btn btn-primary" type="submit">Cadastrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
