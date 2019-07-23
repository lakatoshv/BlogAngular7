import { User } from "./user";

export class Post {
    /*
    id -> int, increment
    title -> string
    description -> string/text
    content -> string/text
    author  -> string/text
    seen -> int
    likes -> int
    dislikes -> int
    tags -> string
    imgurl -> string
    //access -> string
    */
    id: number;
    title: string;
    description: string;
    content: string;
    authorId: number;
    author: User;
    seen: number;
    likes: number;
    dislikes: number;
    imgurl: string;
    tags: string;
    commentsCount: number;
  }