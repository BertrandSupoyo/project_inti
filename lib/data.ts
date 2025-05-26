export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  rating: number;
  categories: string[];
  publishedDate: string;
  pages: number;
  language: string;
  featured?: boolean;
  trending?: boolean;
  sampleUrl: string;
  price: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "fiction",
    name: "Fiction",
    description:
      "Imaginative stories that are not factual but may be inspired by real events",
    image:
      "https://images.unsplash.com/photo-1531901599143-df5010ab9438?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "non-fiction",
    name: "Non-Fiction",
    description: "Literature based on facts and real events",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop",
  },
  {
    id: "science-fiction",
    name: "Science Fiction",
    description:
      "Speculative fiction that typically deals with imaginative concepts",
    image:
      "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=1770&auto=format&fit=crop",
  },
  {
    id: "fantasy",
    name: "Fantasy",
    description: "Fiction featuring magical and supernatural elements",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1769&auto=format&fit=crop",
  },
  {
    id: "mystery",
    name: "Mystery",
    description: "Fiction dealing with the solution of a crime or puzzle",
    image:
      "https://ik.imagekit.io/20ic5ao3f/florian-haun-ZF3WWNGti5Q-unsplash.jpg?updatedAt=1741653653869",
  },
  {
    id: "biography",
    name: "Biography",
    description: "An account of someone's life written by someone else",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "self-improvement",
    name: "Self-Improvement",
    description: "he process of making conscious efforts to enhance one's life, skills, and character.",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop",
  },
];

export const books: Book[] = [
  {
    id: "1",
    title: "The Diary Of A Young Girl",
    author: "Anne Frank",
    coverImage:
      "https://ik.imagekit.io/n8xap7nod/content.jpeg?updatedAt=1741614174585",
    description:
      "is a book of the writings from the Dutch-language diary kept by Anne Frank while she was in hiding for two years with her family during the Nazi occupation of the Netherlands",
    rating: 4.5,
    categories: ["Biography"],
    publishedDate: "2020-08-13",
    pages: 304,
    language: "English",
    featured: true,
    sampleUrl:
      "https://www.gutenberg.org/ebooks/1342.html.images",
    price: 49.000
  },
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    coverImage:
      "https://ik.imagekit.io/20ic5ao3f/9786020633176_.Atomic_Habit.jpg?updatedAt=1741651186500",
    description:
      "An Easy & Proven Way to Build Good Habits & Break Bad Ones. Tiny Changes, Remarkable Results.",
    rating: 4.8,
    categories: ["self-improvement"],
    publishedDate: "2019-09-16",
    pages: 352,
    language: "English",
    trending: true,
    sampleUrl: "",
    price: 19.99
  },
  {
    id: "3",
    title: "Project Hail Mary",
    author: "Andy Weir",
    coverImage:
      "https://ik.imagekit.io/20ic5ao3f/54493401.jpg?updatedAt=1741651379681",
    description:
      "A lone astronaut must save the earth from disaster in this incredible new science-based thriller from the #1 New York Times bestselling author of The Martian.",
    rating: 4.7,
    categories: ["science-fiction", "fiction"],
    publishedDate: "2021-05-04",
    pages: 476,
    language: "English",
    trending: true,
    sampleUrl: "",
    price: 24.99
  },
  {
    id: "4",
    title: "Educated",
    author: "Tara Westover",
    coverImage:
      "https://ik.imagekit.io/20ic5ao3f/images%20(9).jpeg?updatedAt=1741651528336",
    description:
      "A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
    rating: 4.6,
    categories: ["non-fiction", "biography", "memoir"],
    publishedDate: "2021-04-14",
    pages: 520,
    language: "English",
    featured: true,
    sampleUrl: "",
    price: 16.99
  },
  {
    id: "5",
    title: "The House in the Cerulean Sea",
    author: "TJ Klune",
    coverImage:
      "https://ik.imagekit.io/20ic5ao3f/71bgrXZvbuS._UF894,1000_QL80_.jpg?updatedAt=1741651743609",
    description: "A magical island. A dangerous task. A burning secret.",
    rating: 4.5,
    categories: ["fantasy", "fiction"],
    publishedDate: "2020-03-17",
    pages: 396,
    language: "English",
    sampleUrl: "",
    price: 18.99
  },
  {
    id: "6",
    title: "Dune",
    author: "Frank Herbert",
    coverImage:
      "https://ik.imagekit.io/20ic5ao3f/ih86gbr4urzmibs3ah49hq.jpg?updatedAt=1741651818167",
    description:
      "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world.",
    rating: 4.7,
    categories: ["science-fiction", "fantasy"],
    publishedDate: "1965-08-01",
    pages: 412,
    language: "English",
    trending: true,
    sampleUrl: "",
    price: 21.99
  },
  {
    id: "7",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    coverImage:
      "https://ik.imagekit.io/20ic5ao3f/9786020633909_THE_SILENT_PATIENCE.jpg?updatedAt=1741651818182",
    description:
      "A woman shoots her husband five times and then never speaks another word.",
    rating: 4.3,
    categories: ["mystery", "thriller", "fiction"],
    publishedDate: "2019-02-05",
    pages: 336,
    language: "English",
    trending: true,
    sampleUrl: "",
    price: 17.99
  },
  {
    id: "8",
    title: "Becoming",
    author: "Michelle Obama",
    coverImage:
      "https://ik.imagekit.io/20ic5ao3f/images%20(10).jpeg?updatedAt=1741651833767",
    description:
      "In her memoir, Michelle Obama chronicles the experiences that have shaped her—from her childhood on the South Side of Chicago to her years as an executive balancing the demands of motherhood and work.",
    rating: 4.6,
    categories: ["non-fiction", "biography", "memoir"],
    publishedDate: "2018-11-13",
    pages: 448,
    language: "English",
    featured: true,
    sampleUrl: "",
    price: 22.99
  },
  {
    id: "9",
    title: "The Midnight Library",
    author: "Matt Haig",
    coverImage:
      "https://ik.imagekit.io/20ic5ao3f/images%20(11).jpeg?updatedAt=1741651833767",
    description:
      "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
    rating: 4.2,
    categories: ["fiction", "fantasy"],
    publishedDate: "2020-08-13",
    pages: 304,
    language: "English",
    featured: true,
    sampleUrl: "",
    price: 19.99
  },
  {
    id: "10",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    coverImage:
      "https://ik.imagekit.io/20ic5ao3f/images%20(12).jpeg?updatedAt=1741651833767",
    description:
      "Timeless lessons on wealth, greed, and happiness doing well with money isn't necessarily about what you know. It's about how you behave. And behavior is hard to teach, even to really smart people.",
    rating: 4.7,
    categories: ["non-fiction", "self-improvement"],
    publishedDate: "2020-09-08",
    pages: 256,
    language: "English",
    trending: true,
    featured: true,
    sampleUrl: "",
    price: 15.99
  },
  {
    id: "11",
    title: "The Thursday Murder Club",
    author: "Richard Osman",
    coverImage:
      "https://ik.imagekit.io/20ic5ao3f/images%20(13).jpeg?updatedAt=1741651833767",
    description:
      "In a peaceful retirement village, four unlikely friends meet weekly in the Jigsaw Room to discuss unsolved crimes; together they call themselves the Thursday Murder Club.",
    rating: 4.2,
    categories: ["mystery", "fiction"],
    publishedDate: "2020-09-03",
    pages: 382,
    language: "English",
    sampleUrl: "",
    price: 16.99
  },
  {
    id: "12",
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    coverImage:
      "https://ik.imagekit.io/20ic5ao3f/images%20(14).jpeg?updatedAt=1741651833767",
    description:
      "Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life.",
    rating: 4.5,
    categories: ["fiction", "historical-fiction"],
    publishedDate: "2017-06-13",
    pages: 389,
    language: "English",
    trending: true,
    sampleUrl: "",
    price: 18.99
  },
  {
    id: "13",
    title: "Think Again",
    author: "Adam Grant",
    coverImage:
      "https://ik.imagekit.io/20ic5ao3f/images%20(15).jpeg?updatedAt=1741651833767",
    description:
      "Intelligence is usually seen as the ability to think and learn, but in a rapidly changing world, there's another set of cognitive skills that might matter more: the ability to rethink and unlearn.",
    rating: 4.6,
    categories: ["non-fiction", "self-improvement"],
    publishedDate: "2021-02-02",
    pages: 320,
    language: "English",
    trending: true,
    featured: true,
    sampleUrl: "",
    price: 20.99
  }
];

export function getFeaturedBooks(): Book[] {
  return books.filter((book) => book.featured);
}

export function getTrendingBooks(): Book[] {
  return books.filter((book) => book.trending);
}

export function getBooksByCategory(categoryId: string): Book[] {
  return books.filter((book) => book.categories.includes(categoryId));
}

export function getBookById(id: string): Book | undefined {
  return books.find((book) => book.id === id);
}

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((category) => category.id === id);
}
