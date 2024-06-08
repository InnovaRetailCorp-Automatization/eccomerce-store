import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;


const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboardId = process.env.BILLBOARD_ID;
  if (!billboardId) {
    throw new Error("BILLBOARD_ID is not defined in the environment variables.");
  }
  const billboard = await getBillboard(billboardId);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard 
          data={billboard}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;