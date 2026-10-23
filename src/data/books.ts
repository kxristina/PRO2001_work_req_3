export interface Book {
  id: number;
  title: string;
  image: string;
  description: string;
  details: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: "Klara and the Sun",
    image: "/images/sun.png",
    description: "An artificial friend named Klara observes human life and explores the meaning of love, hope, and what it means to be human.",
    details:
      "Klara is an Artificial Friend who watches the world from a shop window, hoping to be chosen by a child. When she is bought by a girl named Josie, Klara tries to understand human emotions and help her new friend, exploring themes of love, sacrifice, and what it means to be human.",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    image: "/images/mockingbird.png",
    description: "A young girl witnesses racism and injustice in her small Southern town.",
    details:
      "Young Scout Finch grows up in a small Alabama town during the 1930s, where her father, Atticus Finch, defends Tom Robinson, a Black man falsely accused of assaulting a white woman. Through the trial and her experiences with the people around her, Scout learns about racism, injustice, empathy, and moral courage.",
  },
  {
    id: 3,
    title: "The Midnight Library",
    image: "/images/bookshelf.png",
    description: "A woman explores different versions of her life in a mysterious library.",
    details:
      "Feeling that her life has gone wrong, Nora Seed finds herself in a mysterious library between life and death. Each book allows her to experience a different version of her life based on choices she could have made, helping her discover what truly makes life meaningful.",
  },
  {
    id: 4,
    title: "The Great Gatsby",
    image: "/images/champagne.png",
    description: "A mysterious millionaire pursues a dream in the Jazz Age.",
    details:
      "Set in the 1920s, the story follows Nick Carraway as he becomes fascinated by his wealthy and mysterious neighbour, Jay Gatsby. Gatsby throws lavish parties in the hope of reuniting with Daisy Buchanan, the woman he loves, but his pursuit of wealth and romance reveals the emptiness behind the glamorous world of the American Dream.",
  },
  {
    id: 5,
    title: "Harry Potter",
    image: "/images/glasses.png",
    description: "A young wizard discovers a magical world.",
    details:
      "Harry Potter discovers on his eleventh birthday that he is a wizard and begins attending Hogwarts School of Witchcraft and Wizardry. Alongside his friends Ron and Hermione, he learns about magic, uncovers secrets about his past, and confronts the dark wizard Voldemort, who threatens the wizarding world.",
  },
  {
    id: 6,
    title: "The Little Prince",
    image: "/images/moon.png",
    description: "A poetic tale about friendship, love, and life.",
    details:
      "A pilot stranded in the desert meets a young prince who has travelled from a distant asteroid. Through stories of the prince’s adventures and encounters with unusual characters, the book explores friendship, love, loneliness, and the importance of looking beyond appearances.",
  },
];