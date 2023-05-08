import { BaseService } from "./BaseService";

class BrandSevice extends BaseService {
  constructor() {
    super();
  }

  //[Get] Brand
  GetBrand = () => {
    console.log(this.get("Brand"));
    return this.get("Brand");
  };

  //[GetProduct]
  GetProduct = () => {
    return this.get("product");
  };
}

export const brand = new BrandSevice();
