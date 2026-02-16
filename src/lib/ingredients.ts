export interface Ingredient {
  id: string;
  name: string;
  image: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  width: number; // base display width on plate
}

export const INGREDIENTS: Ingredient[] = [
  {
    id: 'egg',
    name: 'Fried Egg',
    image: 'https://v3b.fal.media/files/b/0a8eb356/A2U4bUV22xODNXH7H0rQT_6fktwoHv.png',
    calories: 78,
    protein: 6,
    fat: 5,
    carbs: 0.6,
    width: 140
  },
  {
    id: 'bacon',
    name: 'Bacon',
    image: 'https://v3b.fal.media/files/b/0a8eb356/1Z87MqXNfhWHj270zgVk5_4rUpvny0.png',
    calories: 43,
    protein: 3,
    fat: 3.3,
    carbs: 0.1,
    width: 160
  },
  {
    id: 'toast',
    name: 'Toast',
    image: 'https://v3b.fal.media/files/b/0a8eb356/YB4BVe98NEmNpja4A4XIj_4jeQYfcu.png',
    calories: 75,
    protein: 3,
    fat: 1,
    carbs: 14,
    width: 180
  },
  {
    id: 'avocado',
    name: 'Avocado',
    image: 'https://v3b.fal.media/files/b/0a8eb356/2vk4MqkIkbDm0E4B0hacz_OSivyJxU.png',
    calories: 80,
    protein: 1,
    fat: 7,
    carbs: 4,
    width: 130
  },
  {
    id: 'tomato',
    name: 'Tomato',
    image: 'https://v3b.fal.media/files/b/0a8eb356/wCtl-umPPwMSIY3mvxlyi_Ud2yuFoQ.png',
    calories: 20,
    protein: 1,
    fat: 0.2,
    carbs: 4,
    width: 110
  },
  {
    id: 'sausage',
    name: 'Sausage',
    image: 'https://v3b.fal.media/files/b/0a8eb356/mHbR5hG4OaWcnqi3iQ0UM_tbLof6Gb.png',
    calories: 150,
    protein: 10,
    fat: 12,
    carbs: 1,
    width: 150
  },
  {
    id: 'hashbrown',
    name: 'Hash Brown',
    image: 'https://v3b.fal.media/files/b/0a8eb356/_6H_pMBlOwyrOHNSRbIsO_chTxc244.png',
    calories: 140,
    protein: 1,
    fat: 8,
    carbs: 15,
    width: 140
  },
  {
    id: 'mushrooms',
    name: 'Mushrooms',
    image: 'https://v3b.fal.media/files/b/0a8eb356/MZYCSK5CGjEITO_i4lzz3_7V5c3LEk.png',
    calories: 15,
    protein: 2,
    fat: 0,
    carbs: 3,
    width: 120
  }
];
