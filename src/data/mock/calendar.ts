export interface DreamEntry {
  date: number;
  hasDream: boolean;
  mood: string;
}

export interface CalendarEvent {
  date: string;
  title: string;
  type: "appointment" | "reminder";
}

export const dreamEntries: DreamEntry[] = [
  { date: 1, hasDream: true, mood: "peaceful" },
  { date: 3, hasDream: true, mood: "exciting" },
  { date: 7, hasDream: true, mood: "mysterious" },
  { date: 12, hasDream: true, mood: "happy" },
  { date: 15, hasDream: true, mood: "adventurous" },
  { date: 18, hasDream: true, mood: "calm" },
  { date: 22, hasDream: true, mood: "intense" },
  { date: 25, hasDream: true, mood: "peaceful" },
  { date: 28, hasDream: true, mood: "curious" },
];

export const upcomingEvents: CalendarEvent[] = [
  { date: "Jan 2", title: "Dream analysis session", type: "appointment" },
  { date: "Jan 5", title: "Review weekly dreams", type: "reminder" },
  { date: "Jan 10", title: "Sleep pattern check", type: "reminder" },
];
