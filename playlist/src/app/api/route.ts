import { NextResponse } from "next/server";
import OpenAI from "openai";

// Initialize OpenAI with API key from environment variables
const openai = new OpenAI({
    apiKey: "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" , // Ensure the API key is set in .env.local
});

// Function to make a request to ChatGPT
async function chatGPTRequest(prompt: string) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
        });

        if (response.choices && response.choices.length > 0) {
            return response.choices[0].message.content;
        } else {
            return "No response from ChatGPT";
        }
    } catch (error: any) {
        console.error("ChatGPT API Error:", error);
        return `Error: ${error.message}`;
    }
}

// Next.js API route handler for POST requests
export async function POST() { // No need to read request body
    try {
        // Use a predetermined question
        const prompt = "What are the top 10 must-read books of all time?"; // Predefined question

        console.log("Generated prompt:", prompt); // Log the generated prompt

        const chatGPTResponse = await chatGPTRequest(prompt);

        return NextResponse.json({ response: chatGPTResponse });
    } catch (error: any) {
        console.error("Request Processing Error:", error);
        return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
    }
}
