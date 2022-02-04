import Header from './Header';
import ProductCard from './ProductCard';

export default function ProductList({products}) {

    const product = products.map((product) => {
        return(
            <ProductCard
            key={product.id} 
            product={product} />
        )
    })

    return(
        <div>
            <Header />
            <h1>Agaves For Sale</h1>
            <div>
                {product}
            </div>
        </div>
    )
}