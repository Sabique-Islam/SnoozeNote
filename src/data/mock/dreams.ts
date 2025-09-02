export interface Dream {
  id: number;
  title: string;
  date: string;
  mood: string;
  content: string;
  tags: string[];
  rating: number;
}

export const dreams: Dream[] = [
  {
    id: 1,
    title: "Flying through the clouds",
    date: "December 30, 2024",
    mood: "Peaceful",
    content: "I was soaring high above the clouds, feeling completely free and weightless. The sky was a brilliant blue...",
    tags: ["Flying", "Peaceful", "Sky"],
    rating: 5,
  },
  {
    id: 2,
    title: "Meeting an old friend",
    date: "December 29, 2024",
    mood: "Happy",
    content: "I ran into my childhood friend at a coffee shop. We talked for hours about old memories...",
    tags: ["Friends", "Nostalgia", "Happy"],
    rating: 4,
  },
  {
    id: 3,
    title: "Walking in a mysterious forest",
    date: "December 27, 2024",
    mood: "Curious",
    content: "The forest was unlike any I've seen before. The trees seemed to glow with an inner light...",
    tags: ["Nature", "Mystery", "Adventure"],
    rating: 4,
  },
  {
    id: 4,
    title: "Underwater adventure",
    date: "December 25, 2024",
    mood: "Excited",
    content: "I could breathe underwater and swam with dolphins and colorful fish. The ocean was crystal clear...",
    tags: ["Water", "Animals", "Adventure"],
    rating: 5,
  },
];

export const recentDreams = dreams.slice(0, 3).map(dream => ({
  id: dream.id,
  title: dream.title,
  date: dream.date === "December 30, 2024" ? "2 days ago" : 
        dream.date === "December 29, 2024" ? "3 days ago" : "1 week ago",
  mood: dream.mood,
}));
