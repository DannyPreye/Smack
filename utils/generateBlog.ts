import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import openai from "../config/openai";
import { getRandomTopic } from "./topics";

const generateBlogPost = async () => {
  const blogRef = collection(db, "blogs");

  // Get  a random topic

  const title = getRandomTopic();
  // Generate the blog post
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `write a blog post in html without html, body, title and head tags on this topic ${title}`,
      temperature: 0.81,
      max_tokens: 4000,
      top_p: 1,
      frequency_penalty: 1,
      presence_penalty: 1,
    });

    // Store the post on the Database
    addDoc(blogRef, {
      title: title,
      content: response.data.choices[0].text,
      slug: title?.split(" ").join("-"),
      created_At: new Date(),
      published: false,
    });
  } catch (error) {
    console.log("There was an error");
  }
};

export default generateBlogPost;
