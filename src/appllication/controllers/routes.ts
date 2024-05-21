import { Router } from "express";

import { ProductController } from ".";

export const router = Router();

router.post("/product", new ProductController().save);

router.put("/product", new ProductController().update);

router.get("/product:id", new ProductController().get);

router.get("/search/:params", new ProductController().search);
