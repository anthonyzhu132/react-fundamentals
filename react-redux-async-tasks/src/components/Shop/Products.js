import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: 'p1',  price: 6, title: 'test1', description: 'test1' },
  { id: 'p2',  price: 6, title: 'test2', description: 'test2' },
  { id: 'p3',  price: 6, title: 'test3', description: 'test3' },
  { id: 'p4',  price: 6, title: 'test4', description: 'test4' },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product => 
            <ProductItem
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              id={product.id}
            />
          ))}
      </ul>
    </section>
  );
};

export default Products;
