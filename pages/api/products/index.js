import { getProductModel } from "database/products.model";
import { getDbInstance } from "database";

async function getProducts(req, res) {
  const sequelize = getDbInstance();
  const Product = getProductModel(sequelize);
  const products = await Product.findAll({});
  res.status(200).json({ products });
}

async function createProduct(req, res) {
  const sequelize = getDbInstance();
  const Product = getProductModel(sequelize);
  await sequelize.sync({ alter: true });
  const p = req.body;
  console.log(Product);
  const product = await Product.create(p);
  res.status(201).json(product);
}

export default async function productsHandler(req, res) {
  switch (req.method) {
    case "GET":
      await getProducts(req, res);
      break;
    case "POST":
      await createProduct(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
