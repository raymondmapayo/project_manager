// utils/notification.ts
import f1 from "../assets/f1.jpeg";
import f2 from "../assets/f2.jpeg";
import f3 from "../assets/f3.jpeg";
import f4 from "../assets/f4.jpeg";

export type NotificationItem = {
  id: number;
  title: string;
  type: string;
  time: string;
  isNew: boolean;
  actions: boolean;
  tags?: string[];
  avatar?: string;
};

export const notifications: NotificationItem[] = [
  {
    id: 1,
    title: "Raymond sent you a friend request",
    type: "Communication",
    time: "1 hour ago",
    isNew: true,
    actions: true,
    avatar: f1,
  },
  {
    id: 2,
    title: "Raymond mentioned you in Facebook",
    type: "Project UI",
    time: "1 day ago",
    isNew: false,
    actions: true,
    avatar: f2,
  },
  {
    id: 3,
    title: "Raymond added file to File Manager",
    type: "File Manager",
    time: "2 days ago",
    isNew: true,
    actions: false,
    avatar: f3,
  },
  {
    id: 4,
    title: "Raymond added new Tags to File Manager",
    type: "File Manager",
    time: "3 days ago",
    isNew: false,
    actions: false,
    tags: ["Design", "Dashboard", "Design System"],
    avatar: f4,
  },
  {
    id: 5,
    title: "You have new email",
    type: "Communication",
    time: "6 days ago",
    isNew: true,
    actions: false,
    avatar: f1,
  },
  {
    id: 6,
    title: "You have new message (5 unread messages)",
    type: "Communication",
    time: "8 days ago",
    isNew: false,
    actions: false,
    avatar: f3,
  },
  {
    id: 7,
    title: "You have new message (5 unread messages)",
    type: "Communication",
    time: "8 days ago",
    isNew: false,
    actions: false,
    avatar: f2,
  },
  {
    id: 8,
    title: "You have new message (5 unread messages)",
    type: "Communication",
    time: "8 days ago",
    isNew: false,
    actions: false,
    avatar: f4,
  },
];
