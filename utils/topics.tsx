const topics: string[] = [
    "Starting a business: the essentials",
    "Marketing strategies for startups",
    "Building a successful team",
    "Financing options for startups",
    "Legal considerations for entrepreneurs",
    "Networking for startups",
    "Time management for entrepreneurs",
    "Growth hacking for startups",
    "Lean startup methodology",
    "Customer acquisition for startups",
    "Product development for entrepreneurs",
    "Building a brand for your startup",
    "Marketing on a budget for startups",
    "Social media marketing for entrepreneurs",
    "Email marketing for startups",
    "Content marketing for entrepreneurs",
    "SEO for startups",
    "Pitching to investors",
    "Scaling a startup",
    "Exit strategies for entrepreneurs",
     "Tips for writing SEO-friendly content",
  "How to research and organize content ideas",
  "Writing for different audience demographics",
  "Tips for improving grammar and spelling",
  "Using formatting to enhance readability",
  "Writing compelling headlines and subheadings",
  "Techniques for crafting a compelling narrative",
  "Tips for writing engaging social media content",
  "Writing for different platforms and formats",
  "Using data and research to support your writing",
  "Tips for writing persuasive content",
  "Techniques for finding your writing voice",
  "Tips for writing content that converts",
  "The importance of editing and proofreading",
  "Tips for writing for international audiences",
  "Writing for different industries and sectors",
  "Techniques for overcoming writer's block",
  "Tips for writing content that stands out",
  "Writing for different content marketing goals",
  "The role of SEO in content writing"
]

let usedTopics: string[] = [];
export const getRandomTopic = (): string => {
    // Generate a random index
    const index = Math.floor(Math.random() * topics.length);

    // Get the topic at the random index
    const topic = topics[index];

    // Check if the topic has already been used
    if (usedTopics.includes(topic)) {
        // If the topic has already been used, call the function again to get a new topic
        return getRandomTopic();
    } else {
        // If the topic has not been used, add it to the usedTopics array and return it
        usedTopics.push(topic);
        return topic;
    }
};