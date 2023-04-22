export interface ICategory {
  id: number;
  category: string;
  subcategory: string;
}
export interface ISuggestedProduct {
  bannerImage: string;
  category: ICategory;
}
export interface NavigationItem {
  category: string;
  subcategories: string[];
}
