export interface Product {
  id?:                  number;
  title?:               string;
  code?:                string;
  barcode?:             string;
  company?:             number;
  priceSell?:           number;
  priceImport?:         number;
  statusProduct?:       boolean;
  statusOnline?:        boolean;
  description?:         string;
  system?:              number;
  account?:             number;
  createdAt?:           Date;
  settings?:            [];
  systemData?:          Data;
  mediaData?:           [];
  variantData?:         VariantProduct[];
  brandData?:           [];
  productGroupData?:    [];
  productCategoryData?: [];
}

export interface Data {
  id?:    number;
  title?: string;
  code?:  string;
}

export interface VariantProduct {
  id?:           number;
  title?:        string;
  code?:         string;
  barcode?:      string;
  priceSell?:    number;
  priceImport?:  number;
  status?:       boolean;
  quantity?:     number;
  weight?:       number;
  settings?:     Settings;
  image?:        string;
  createdAt?:    Date;
  productTitle?: string;
  productData?:  Data;
  product?:      number;
  account?:      number;
  comp?:      number;
  optionsData?:  [];
}

export interface Settings {
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const convertData = (data: any): Product => {
  let product: Product
  try {
    product = {
      id: data?.id || null,
      title: data?.title || null,
      code: data?.code || null,
      barcode: data?.barcode || null,
      company: data?.company || null,
      priceSell: data?.priceSell || null,
      priceImport: data?.priceImport || null,
      statusProduct: data?.statusProduct || null,
      statusOnline: data?.statusOnline || null,
      description: data?.description || null,
      system: data?.system || null,
      account: data?.account || null,
      createdAt: data?.createdAt || null,
      settings: data?.settings || null,
      systemData: data?.systemData || null,
      mediaData: data?.mediaData || null,
      variantData: data?.variantData || null,
      brandData: data?.brandData || null,
      productGroupData: data?.productGroupData || null,
      productCategoryData: data?.productCategoryData || null,
    }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error)
  }
  return product
}