export interface ServerMealInfo {
  id: string;
  name: string;
  priceNaira: number;
}

export const SERVER_MEAL_CATALOG: Record<string, ServerMealInfo> = {
  spaghetti: { id: 'spaghetti', name: 'Spaghetti', priceNaira: 0 },
  'beans-and-plantain': { id: 'beans-and-plantain', name: 'Beans & Plantain', priceNaira: 0 },
  dodo: { id: 'dodo', name: 'Dodo', priceNaira: 0 },
  'jollof-rice-and-chicken': { id: 'jollof-rice-and-chicken', name: 'Jollof Rice & Chicken', priceNaira: 0 },
  'fried-rice-and-beef': { id: 'fried-rice-and-beef', name: 'Fried Rice & Beef', priceNaira: 0 },
  santana: { id: 'santana', name: 'Santana', priceNaira: 0 },
  semovita: { id: 'semovita', name: 'Semovita', priceNaira: 0 },
  'egusi-soup': { id: 'egusi-soup', name: 'Egusi Soup', priceNaira: 0 },
  'black-soup': { id: 'black-soup', name: 'Black Soup', priceNaira: 0 },
  'ogbono-soup': { id: 'ogbono-soup', name: 'Ogbono Soup', priceNaira: 0 },
};
