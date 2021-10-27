export async function getStaticProps() {
    console.log("Estatico")
    const resp = await fetch('http://localhost:3000/api/produtos')

    const produtos = await resp.json();

    return {
        props: {
            produtos
        }
    }
}


export default function Estatico4(props) {

    function renderizarProdutos() {
        
        return props.produtos.map(produto => {
            return <li key={produto.id}>
                {produto.id} - {produto.nome} custa R${produto.preco}
                </li>
        });
    }
    return(
        <div>
            <h1>
                Estático #04
            </h1>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}