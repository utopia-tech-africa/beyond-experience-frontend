export interface Comment {
  id: string;
  author: string;
  text: string;
}

export interface Post {
  id: string;
  author: string;
  username: string;
  time: string;
  content: string;
  image?: string;
  avatar?: string;
  likes: number;
  comments: Comment[];
}

export const dummyPosts: Post[] = [
  {
    id: "1",
    author: "Angela Ametepey",
    username: "#delasie",
    time: "1h",
    content:
      "Lorem ipsum dolor sit amet, #Savetheearth consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    image:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800",
    avatar: "https://i.pravatar.cc/150?img=47",
    likes: 12,
    comments: [
      {
        id: "c1",
        author: "Maxwell",
        text: "Love this 🔥",
      },
    ],
  },
  {
    id: "2",
    author: "Delasie Ametepey",
    username: "#delasie",
    time: "1h",
    content:
      "Lorem ipsum dolor sit amet, #Savetheearth consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    avatar: "https://i.pravatar.cc/150?img=32",
    likes: 5,
    comments: [
      {
        id: "c2",
        author: "John Doe",
        text: "Great post!",
      },
    ],
  },
  {
    id: "3",
    author: "Kwame Mensah",
    username: "#kwame",
    time: "2h",
    content:
      "Just finished an amazing project! #TechLife #Innovation. Can't wait to share more details with you all soon.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    avatar: "https://i.pravatar.cc/150?img=12",
    likes: 24,
    comments: [
      {
        id: "c3",
        author: "Sarah",
        text: "Congratulations! 🎉",
      },
      {
        id: "c4",
        author: "Michael",
        text: "Looking forward to it!",
      },
    ],
  },
  {
    id: "4",
    author: "Ama Osei",
    username: "#ama",
    time: "3h",
    content:
      "Does anyone have recommendations for good coding bootcamps? Looking to upskill in web development. #CareerGrowth #WebDev",
    avatar: "https://i.pravatar.cc/150?img=45",
    likes: 8,
    comments: [
      {
        id: "c5",
        author: "David",
        text: "Check out FreeCodeCamp!",
      },
    ],
  },
];
