import {useForm} from "@inertiajs/react";

export default function () {
    const {setData, post} = useForm();

    function submit(e) {
        e.preventDefault()
        post(route('incricoes.cadastro'))
    }

    return (
        <div className="bg-primary vh-100">
            <div className="container p-5">
                <div className="card card-body m-5">
                    <div className="row mb-2 justify-content-center">
                        <div className="col-auto text-center">
                            <img src="/storage/crm/imagens/logo.png" className="w-60" alt="logo"/>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col">
                            <h5>Inscrição realizada com sucesso!</h5>
                            <h6>Em breve entraremos em contato para realizar sua matrícula.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
