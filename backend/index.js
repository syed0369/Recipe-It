const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET, POST', 
}))

app.get("/recipe/", async (req, res) => {
    res.send(await recipeGenerator(req.query.ingredients.split(",")));
});

async function recipeGenerator(ingredients) {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_AI_API);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });  
        
    const prompt = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with 
                    some or all of these ingredients ${ingredients}. 
                    You don't need to use every ingredient they mention in your recipe. 
                    The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. 
                    Format your response in markdown to make it easier to render to a web page
                    `
    const result = await model.generateContent(prompt);
    return result.response.text();
}
app.listen(8080, () => {
    console.log("Server listening at port 8080");
});
