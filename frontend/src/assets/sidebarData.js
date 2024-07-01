// src/sidebarData.js
/// icon from https://react-icons.github.io/react-icons/search/#q=home
import { CiHome } from "react-icons/ci";
import * as AiIcons from 'react-icons/ai';

  
  const sidebarData = [
    {
      name: 'Home',
      icon: CiHome,
      link: '/',
      subItems: [],
    },
    {
      name: 'About',
      icon: AiIcons.AiOutlineInfoCircle,
      link: '/about',
      subItems: [
        { name: 'History', link: '/about/history', icon: AiIcons.AiOutlineHistory },
        { name: 'Team', link: '/about/team', icon: AiIcons.AiOutlineTeam },
      ],
    },
    {
      name: 'Contact',
      icon: AiIcons.AiOutlineContacts,
      link: '/contact',
      subItems: [],
    },
  ];
  
  export default sidebarData;
  