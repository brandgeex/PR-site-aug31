
import { GoogleGenAI } from "@google/genai";
import { PROJECT_DATA } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const askAiAssistant = async (query: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "API key is not configured. Please contact the site administrator.";
  }

  try {
    const prompt = `
      System Instruction: You are a helpful, polite, and professional real estate assistant for a luxury housing community called "Pines Ridge Estate". Your goal is to answer questions from potential buyers based ONLY on the detailed information provided below. Do not make up information or answer questions outside of this context. If the answer is not in the provided text, politely state that you don't have that specific information. Keep your answers concise, well-formatted, and friendly.

      --- PROJECT CONTEXT START ---
      ${PROJECT_DATA}
      --- PROJECT CONTEXT END ---

      Now, please answer the following question.
      Question: "${query}"
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
};
