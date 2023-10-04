import Layout from "@/Layouts/Admin/Layout";
import {TextField} from "@mui/material";
import {router, useForm} from "@inertiajs/react";

export default function ({dados}) {
    const {data, setData, reset} = useForm()

    function submit(e) {
        e.preventDefault()
        router.post(route('admin.perfil.update', dados.id), {
            _method: 'put', ...data
        })

        if (data.senha && data.senha_confirmar) window.location.reload()
    }

    return (
        <Layout container titlePage="Perfil" menu="perfil">
            <h6>Seus dados</h6>
            <div className="row">
                <div className="col mb-4">
                    <span className="d-block"><b>Nome:</b> {dados.nome}</span>
                    <span className="d-block"><b>E-mail:</b> {dados.email}</span>
                    <span className="d-block"><b>Telefone:</b></span>
                </div>
            </div>
            <h6>Alterar Senha</h6>
            <form onSubmit={submit}>
                <div className="row row-cols-4">
                    <div className="col mb-4">
                        <TextField label="Senha" fullWidth type="password" required
                                   onChange={e => setData('senha', e.target.value)}/>
                    </div>
                    <div className="col mb-4">
                        <TextField label="Repetir Senha" fullWidth type="password" required
                                   onChange={e => setData('senha_confirmar', e.target.value)}/>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary mt-2">Atualizar</button>
                    </div>
                </div>
            </form>
        </Layout>
    )
}
