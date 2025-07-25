import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product.actions';

const Homepage = async () => {
  // console.log(sampleData);
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList data={latestProducts} title='Newest entries' limit={4} />
    </>
  );
};

export default Homepage;
