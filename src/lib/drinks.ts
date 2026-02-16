export interface Drink {
  id: string;
  name: string;
  emoji: string;
  color: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

export const DRINKS: Drink[] = [
  {
    id: 'coffee',
    name: 'Coffee',
    emoji: '☕',
    color: '#6f4e37',
    calories: 2,
    protein: 0.3,
    fat: 0,
    carbs: 0,
  },
  {
    id: 'tea',
    name: 'Tea',
    emoji: '🍵',
    color: '#6b8e23',
    calories: 1,
    protein: 0,
    fat: 0,
    carbs: 0,
  },
  {
    id: 'orange-juice',
    name: 'Orange Juice',
    emoji: '🍊',
    color: '#f59e0b',
    calories: 45,
    protein: 0.7,
    fat: 0.2,
    carbs: 10,
  },
  {
    id: 'milk',
    name: 'Milk',
    emoji: '🥛',
    color: '#f8fafc',
    calories: 52,
    protein: 3.4,
    fat: 1,
    carbs: 5,
  },
  {
    id: 'berry-smoothie',
    name: 'Smoothie',
    emoji: '🫐',
    color: '#7c3aed',
    calories: 120,
    protein: 2,
    fat: 1,
    carbs: 26,
  },
];
