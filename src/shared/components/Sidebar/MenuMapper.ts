
export type MenuItem = {
  checkCabecalho: boolean,
  titulo: string,
  icon: string | null,
  link: string
}

const MenuMapper: MenuItem[] = [  
  {
    checkCabecalho: false,
    titulo: 'Início',
    icon: 'home',
    link: '/'
  },
  {
    checkCabecalho: false,
    titulo: 'Meus Pedidos',
    icon: 'boleto',
    link: '/orders'
  },
  {
    checkCabecalho: false,
    titulo: 'Ajuda',
    icon: 'help',
    link: '/help'
  }
];

export default MenuMapper;
