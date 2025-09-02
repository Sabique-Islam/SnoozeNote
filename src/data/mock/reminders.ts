export interface Reminder {
  id: number;
  title: string;
  description: string;
  time?: string;
  completedAt?: string;
  priority?: "high" | "medium" | "low";
  category: string;
}

export const pendingReminders: Reminder[] = [
  {
    id: 1,
    title: "Review weekly dream patterns",
    description: "Analyze dreams from this week and look for recurring themes",
    time: "Tomorrow at 9:00 AM",
    priority: "high",
    category: "Review",
  },
  {
    id: 2,
    title: "Record last night's dream",
    description: "Don't forget to write down the details while they're fresh",
    time: "Today at 8:00 PM",
    priority: "medium",
    category: "Recording",
  },
  {
    id: 3,
    title: "Dream analysis session",
    description: "Weekly session to interpret dream meanings and patterns",
    time: "Friday at 2:00 PM",
    priority: "high",
    category: "Analysis",
  },
  {
    id: 4,
    title: "Check sleep schedule",
    description: "Review bedtime routine and sleep quality metrics",
    time: "Sunday at 10:00 AM",
    priority: "low",
    category: "Health",
  },
  {
    id: 5,
    title: "Update dream journal tags",
    description: "Organize recent dreams with appropriate tags and categories",
    time: "Next Tuesday at 3:00 PM",
    priority: "medium",
    category: "Organization",
  },
];

export const completedReminders: Reminder[] = [
  {
    id: 6,
    title: "Monthly dream summary",
    description: "Created comprehensive summary of December dreams",
    completedAt: "2 days ago",
    category: "Review",
  },
  {
    id: 7,
    title: "Set up dream journal backup",
    description: "Configured automatic backup of all dream entries",
    completedAt: "1 week ago",
    category: "Maintenance",
  },
  {
    id: 8,
    title: "Research lucid dreaming techniques",
    description: "Studied various methods for achieving lucid dreams",
    completedAt: "2 weeks ago",
    category: "Learning",
  },
];

export const upcomingReminders = [
  { id: 1, title: "Review dream journal", time: "Tomorrow 9:00 AM" },
  { id: 2, title: "Dream analysis session", time: "Friday 2:00 PM" },
];
