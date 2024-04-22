# CLI - Interface para o GPT
* Este é um simples chatbot, baseado na AzureOpenAi, que responde perguntas elaboradas no próprio terminal.
## Instalação/Utilização
* É necessário que se tenha o Node.js instalado para a utilização do código.
* Deve-se também baixar o pacote "dotenv", para acessar pedaços chaves do código no arquivo .env (usar o comando npm install no terminal).
* No arquivo em questão, fornecer o modelo da IA que será usada, o endpoint - link de acesso à IA - e sua chave do API da OPENAI.
## Execução
* Ao executar o programa, será solicitado que o usuário faça uma pergunta no terminal. O chatbot, então, irá produzir uma resposta. Você poderá digitar "sair" no momento que deseja finalizar a execução do código.
## Configuração Adicional
* É possível ajustar o comportamento do chatbot ao alterar o valor das variáveis "maxTokens" e "temperature". O primeiro ajuste tem a função de controlar o tamanho da resposta gerada, enquanto o segundo é responsável por controlar a criatividade e diversidade dos outputs gerados pela IA.
## Licença
* Este projeto está licenciado nos termos da licença MIT.