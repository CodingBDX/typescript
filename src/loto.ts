import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
type NumberLoto = number;

interface Post {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}



  const getPosts: any = async (req: Request, res: Response, next: NextFunction) => {
     let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    let posts: [Post] = result.data;
    return res.status(200).json({
        message: posts,
       
    });
     console.log(res)
  };

