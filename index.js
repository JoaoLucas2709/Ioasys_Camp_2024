const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");
const readline = require('readline');
require('dotenv/config');

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const azureApiKey = process.env.OPENAI_API_KEY;

async function askQuestion(question, maxTokens, temperature) {
  const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
  const deploymentId = process.env.GPT_MODEL;
  const config = {
    maxTokens: maxTokens,
    temperature: temperature
  };
  const result = await client.getCompletions(deploymentId, [question], config);
  return result.choices[0].text;
}

async function main() {
  console.log('\nOlá, sou uma IA da Azure, como posso te ajudar?\nDigite "sair" quando quiser finalizar o programa.\nDigite sua pergunta:');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on("line", async (userMessage) => {
    if (userMessage.toLowerCase() === 'sair') {
      console.log('Foi um prazer te atender!');
      rl.close();
      return;
    }

    const maxTokens = 50; 
    const temperature = 0; 

    const botResponse = await askQuestion(userMessage, maxTokens, temperature);
    console.log("Resposta:", botResponse);
    console.log("\nHá mais alguma coisa em que posso ajudar? Se não, digite 'sair' para finalizar o programa:");
  });

  rl.on("close", () => {
    console.log("Programa encerrado.");
    process.exit(0);
  });
}

main().catch((err) => {
  console.error("Ocorreu um erro:", err);
});