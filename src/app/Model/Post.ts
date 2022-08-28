import { User } from "./user";

export class Post {
  idPost: number;
  contents: string;

  date: Date;
  comments: Comment[];
  user: User;
  
}
