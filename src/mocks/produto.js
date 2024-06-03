import Logo from '../assests/produtos/santos.png';
import camisa_santos_branca from '../assests/produtos/camisa_santos_branca_jogo.png'
import camisa_santos_listrada from '../assests/produtos/camisa_santos_listrada.jpeg'
import bola_santos from '../assests/produtos/bola_santos.jpeg'

const produto = {
    topo: {
        titulo: "Detalhes do produto",
    },
    detalhes: {
        nome: "Camisa de Jogo do santos branca",
        logo: Logo,
        detalhes: "Camisa oficial de jogo do santos!",
        preco: "R$ 450,00",
        botao: "Adicionar na Lista de Desejos",
    },
    itens: {
        titulo: "Itens do Kit",
        lista: [
          {
            nome: "1x Camisa de Jogo Santos Branca",
            imagem: camisa_santos_branca,
          },
          {
            nome: "2x Camisa de Jogo do Santos Listrada",
            imagem: camisa_santos_listrada,
          },
          {
            nome: "1x Bola do Santos",
            imagem: bola_santos,
          },
        ]
    }
}

export default produto;