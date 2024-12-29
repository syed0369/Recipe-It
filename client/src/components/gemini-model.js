import { GoogleGenerativeAI } from "@google/generative-ai"
export default async function getRecipeFromAI(ingredients) {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });  
    
    const prompt = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with 
                    some or all of these ingredients ${ingredients}. 
                    You don't need to use every ingredient they mention in your recipe. 
                    The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. 
                    Format your response in markdown to make it easier to render to a web page
                    `
    const result = await model.generateContent(prompt);
    return result.response.text()
}
