import { Post } from './Post';
import { User } from './user';

export class Comment {
  IdCom: number;
  contents: string;
  post: Post;
  user: User;
}
