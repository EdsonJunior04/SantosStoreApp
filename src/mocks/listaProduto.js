import Logo from '../assests/produtos/logo.png';
import camisa_santos_branca from '../../assets/camisa_santos_branca_jogo.png';
import camisa_santos_listrada from '../assests/produtos/camisa_santos_listrada.jpeg';
import camisa_cbj_preta from '../assests/produtos/camisa_cbj_preta.jpg';
import camisa_cbj_branca from '../assests/produtos/camisa_cbj_branca.png';
const ListaProdutos = {
  itens: {
      titulo: "Veja nossos produtos!",
      lista: [
          {
              id: 1,
              nome: "Camisa de Jogo Santos Branca",
              descricao: "Camisa do santos na promocao",
              imagem: camisa_santos_branca, 
              botao: "Adicionar ao carrinho",
          },
          {
              id: 2,
              nome: "Camisa de Jogo do Santos Listrada",
              descricao: "Camisa do santos na promocao",
              imagem: camisa_santos_listrada, 
              botao: "Adicionar ao carrinho",
          },
          {
              id: 3,
              nome: "Camisa do Santos Charlie Brown Jr. Branca",
              descricao: "Camisa inédita do santos em homenagem ao Charlie Brown Jr.",
              imagem: camisa_cbj_preta, 
              botao: "Adicionar ao carrinho",
          },
          {
              id: 4,
              nome: "Camisa do Santos Charlie Brown Jr. Preta",
              descricao: "Camisa inédita do santos em homenagem ao Charlie Brown Jr.",
              imagem: camisa_cbj_branca, 
              botao: "Adicionar ao carrinho",
          },
      ]
  }
};

export default ListaProdutos;
