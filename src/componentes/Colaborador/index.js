import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart  } from "react-icons/ai";

import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const propsFavorito = {
        size: 24,
        onClick: favoritar,
        cursor: 'pointer'
    }
    return (<div className="colaborador">
        <AiFillCloseCircle
            size={24}
            className='deletar'
            cursor='pointer'
            onClick={() => aoDeletar(colaborador.id)}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="favoritar">
                {colaborador.favorito
                    ? <AiFillHeart size={24} {...propsFavorito} color='#ff0000'/>
                    : <AiOutlineHeart size={24} {...propsFavorito}/>
                }
            </div>
        </div>
    </div>)
}

export default Colaborador