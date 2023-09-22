import * as React from "react";
import RuleOutlinedIcon from '@mui/icons-material/RuleOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

export default function Sidebar({menuSidebar, submenuSidebar}) {
    const logo = "/storage/crm/imagens/logo.png";

    const pages = [
        {
            'menu': 'Turmas',
            'icone': <GroupsOutlinedIcon style={{color: 'white'}}/>,
            'tagMenu': 'turmas',
            'url': route('admin.turmas.index'),
            'submenu': []
        }, {
            'menu': 'Alunos',
            'icone': <GroupOutlinedIcon style={{color: 'white'}} color=""/>,
            'url': route('admin.alunos.index'),
            'tagMenu': 'alunos',
            'submenu': []
        }, {
            'menu': 'Mensalidades',
            'icone': <EventAvailableOutlinedIcon style={{color: 'white'}} color=""/>,
            'tagMenu': 'mensalidades',
            'url': route('admin.mensalidades.index'),
            'submenu': []
        }, {
            'menu': 'Perfil',
            'icone': <PersonOutlineOutlinedIcon style={{color: 'white'}} color=""/>,
            'url': route('admin.perfil.index'),
            'tagMenu': 'perfil',
            'submenu': [
                // {'menu': 'Cadastrados', 'url': route('alunos.perfil.index'), 'tagSubmenu': 'cadastrados'},
            ]
        },
    ];

    return (<>
            <aside id="sidenav-main" style={{zIndex: 100}}
                   className="sidenav navbar navbar-vertical navbar-expand-xs fixed-start  bg-primary">
                <div className="row">
                    <div className="col-auto">
                        <a href="/">
                            <div className="text-center py-3 bg-white">
                                <img src="/storage/crm/imagens/logo.png" className="w-40" width="150" alt="logo"/>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="horizontal px-1 mt-3">
                    <div className="row justify-content-end pe-3 d-md-none">
                        <div className="col-auto">
                            <button id="iconSidenav" className="btn btn-link text-danger p-0 m-0">
                                <i className="fas fa-times"/>
                            </button>
                        </div>
                    </div>
                    <div className="accordion accordion-flush w-auto mb-6" id="accordionFlushSidebar">
                        {/*ITEMS*/}
                        {pages.map(({menu, icone, submenu, tagMenu, url}, index) => (
                            <div key={index} className="accordion-item text-dark navbar-nav py-1">
                                <div className="accordion-header nav-item" id={"flush-heading-" + index}>
                                    <a href={url ?? null}>
                                        <div
                                            className={(tagMenu === menuSidebar ? '' : 'collapsed ') + "accordion-button nav-link p-1 m-0"}
                                            data-bs-toggle="colla pse" aria-controls={"flush-collapse-" + index}
                                            data-bs-target={"#flush-collapse-" + index} aria-expanded="false">
                                            <div className="icon icon-sm border-radius-md d-flex align-items-center">
                                                {icone}
                                                {/*<i className={icone + " text-sm opacity-10"}*/}
                                                {/*   style={tagMenu === menuSidebar ? {color: 'orange'} : {color: 'white'}}></i>*/}
                                            </div>
                                            <span className="ms-3 font-weight-bo ld fs-6"
                                                  style={tagMenu === menuSidebar ? {color: 'orange'} : {color: 'white'}}>
                                                {menu}
                                            </span>
                                        </div>
                                    </a>
                                </div>

                                <div id={"flush-collapse-" + index}
                                     className={(tagMenu === menuSidebar ? 'show ' : '') + "accordion-collapse nav-item collapse"}
                                     aria-labelledby={"flush-heading-" + index}
                                     data-bs-parent="#accordionFlushSidebar">

                                    {submenu.map(({menu, url, tagSubmenu}, i) => (
                                        <a href={url} key={i} className="text-sm text-white-50">
                                            <div className="accordion-body p-0 ms-5 mb-2">
                                                <span className="nav-link-text"
                                                      style={tagSubmenu + tagMenu === submenuSidebar + menuSidebar ? {color: 'orange'} : {}}>
                                                    {menu}
                                                </span>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {/*ITEMS - FIM*/}
                    </div>
                </div>
            </aside>
        </>
    )
}
