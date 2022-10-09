import { DataTypes } from "sequelize";

export function getProductModel(sequelize) {
  const Product = sequelize.define(
    "Products",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
      productImage: {
        type: DataTypes.TEXT,
      },
      price: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: true }
  );
  return Product;
}
