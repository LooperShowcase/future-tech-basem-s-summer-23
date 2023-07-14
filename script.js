let conversation = [
  { role: "user", content: "Hi" },
  { role: "assistant", content: "hi , how can i help you today" },
];
async function conversationUseradd(question, sentiment = 10) {
  conversation.push({
    role: "user",
    content:
      "my happiness out of 10" + sentiment + "my question is:" + question,
  });
}
async function conversationAssistantAdd(response) {
  conversation.push({ role: "assistant", content: response });
}
async function openai_test() {
  let url = "https://api.openai.com/v1/chat/completions";
  let part1 = "sk";
  let part2 = "-FwTAQ8hQ31W8irBwTpMXT3BlbkFJ";
  let part3 = "tqFgcpK3EZmVIOsoPEKV";

  let allParts = part1 + part2 + part3;
  let data = { model: "gpt-3.5-turbo", messages: conversation };

  let open_ai_response;

  try {
    open_ai_response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${allParts}`,
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log("An error occurred:", error);
  }
  if (open_ai_response.ok) {
    const responseData = await open_ai_response.json();
    const message = responseData.choices[0].message.content;

    conversationAssistantAdd(message); // Add GPT's response to the conversation history

    const utterance = new SpeechSynthesisUtterance(message); // Create the audio object
    speechSynthesis.speak(utterance); // Play the audio

    console.log(message);
    return message;
  } else {
    console.log("Request failed with status:", open_ai_response.status);
  }
}
