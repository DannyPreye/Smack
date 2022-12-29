// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get a reference to the blog collections
  const blogRef = collection(db, "blogs");
  if (req.method === "GET") {
    try {
      // Get all document from the firestore
      const response = await getDocs(blogRef);

      const blog: any = [];
      // Loop through it to filter out the main data
      response.forEach((doc) => {
        blog.push({ ...doc.data(), id: doc.id });
      });
      // Send response to the frontend
      res.status(200).json({
        data: blog,
      });
    } catch (error) {
      res.status(400).json("Failed to fetch data");
      console.log(error);
    }
  }

  // Post a new Blog post
  if (req.method === "POST") {
    const { content, title, img } = req.body;
    try {
      const response = await addDoc(blogRef, {
        title,
        content,
        // feature_img: img,
      });

      res.status(200).json({
        error: false,
        message: "Blog has been created",
      });
    } catch (error) {
      res.status(400).json({
        error: true,
        message: "Data could not be uploaded",
      });

      console.log(error);
    }
  }
}
