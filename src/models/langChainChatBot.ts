import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";

class LangChainChatBot {
  private model: ChatOpenAI;

  constructor(apiKey: string) {
    this.model = new ChatOpenAI({
      openAIApiKey: apiKey,
      streaming: true,
    });
  }

  async streamMessage(
    message: string,
    onChunk: (chunk: string) => void
  ): Promise<void> {
    const chat = await this.model.stream([new HumanMessage(message)]);

    for await (const chunk of chat) {
      if (typeof chunk.content === "string") {
        onChunk(chunk.content);
      }
    }
  }
}

export default LangChainChatBot;
