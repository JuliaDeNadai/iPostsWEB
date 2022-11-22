import { useStyles } from "./styles";

import {
  RiGroupLine,
  RiUserSettingsLine,
  RiSettings5Line,
  RiFileTextLine,
  RiCalendar2Fill,
  RiFileList2Line
} from 'react-icons/ri';

import { TiTicket } from "react-icons/ti";

import { AiOutlineUsergroupAdd } from "react-icons/ai";

import { MdWeb } from "react-icons/md";

import { Link } from "react-router-dom";

import { FaCogs} from "react-icons/fa";

function SidebarNav() {
  const classes = useStyles();

  const pages = [
    {
      name: "Home",
      path: "/timeline",
      icon: TiTicket,
      type: "general",
    },
    {
      name: "Notificações",
      path: "/notificacoes",
      icon: FaCogs,
      type: "general",
    },
    {
      name: "Meu perfil",
      path: "/meuperfil/:id",
      icon: RiUserSettingsLine,
      type: "general",
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.boxGeral}>
        {pages
          .map((page) => {
            return (
              <div key={page.name} className={classes.groupItem}>
                <page.icon size={24} />

                <Link to={page.path}>{page.name}</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export { SidebarNav };