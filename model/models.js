import mongoose from "mongoose";
//validator tabel
import { usersSchema } from "./schema-model/users";
import { sellerSchema } from "./schema-model/sellers";
import { buyerSchema } from "./schema-model/buyers";
import { addressSchema } from "./schema-model/address";
import { productSchema } from "./schema-model/products";
import { categorySchema } from "./schema-model/categorys";
import { shopSchema } from "./schema-model/shops";
import { cartSchema } from "./schema-model/carts";
import { wishlistSchema } from "./schema-model/wishlists";
import { checkoutSchema } from "./schema-model/checkouts";
import { shippingSchema } from "./schema-model/shippings";
import { topupSchema } from "./schema-model/topup";

//pembuatan tabel
export const Users = mongoose.model("Users", usersSchema);
export const Sellers = mongoose.model("Sellers", sellerSchema);
export const Buyers = mongoose.model("Buyers", buyerSchema);
export const Address = mongoose.model("Address", addressSchema);
export const Products = mongoose.model("Products", productSchema);
export const Categorys = mongoose.model("Categorys", categorySchema);
export const Shops = mongoose.model("Shops", shopSchema);
export const Carts = mongoose.model("Carts", cartSchema);
export const Wishlists = mongoose.model("Wishlists", wishlistSchema);
export const Checkouts = mongoose.model("Checkouts", checkoutSchema);
export const Shippings = mongoose.model("Shippings", shippingSchema);
export const Topup = mongoose.model("Topup", topupSchema);