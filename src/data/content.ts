export const navItems = [
  "Cakes",
  "Theme Cakes",
  "Desserts",
  "Birthday",
  "Hampers",
  "Anniversary",
  "Occasions",
  "Occasions",
];

export const menuCategories = [
  { label: "CLASSIC", icon: "cake" },
  { label: "GOURMET", icon: "box" },
  { label: "DESSERTS", icon: "dessert" },
  { label: "COOKIES", icon: "cookie" },
] as const;

export const bestsellers = [
  { name: "Rich Chocolate Truffle Cake", price: 500, reviews: 500, image: "/images/best-1.jpg" },
  { name: "Choco Chip Truffle Cake", price: 509, reviews: 300, image: "/images/best-2.jpg" },
  { name: "Tropical Fruit N Almond Cake", price: 509, reviews: 308, image: "/images/best-3.jpg" },
  { name: "Rich Butterscotch Crunch Cake", price: 359, reviews: 308, image: "/images/best-4.jpg" },
];

export const gallery = ["g1", "g2", "g3", "g4", "g5", "g6"].map(
  (id) => `/images/${id}.jpg`,
);

export const footerColumns = [
  { title: "KNOW US", links: ["Contact Us", "Blog"] },
  { title: "NEED HELP", links: ["Cancellation And Refund", "Privacy Policy"] },
  { title: "MORE INFO", links: ["Terms And Giftcy", "Customer Grekname"] },
  { title: "MORE INFO", links: ["Coupons & Offers", "Download App"] },
];
