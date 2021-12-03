# Facile Challenge

API desenvolvida para o Challenge Encriptador – Backend, da Facile!

Foi utilizada nodeJS na versão v16.7.0
Para gerenciamento do banco de dados foi utilizad o Knex.JS e para subir o servidor web usado o Express.JS.

Por questões de segurança também foi utilizado o dotenv.

# instalação

Para instalação:
Primeiro passo é realizar o clone do projeto.
Vamos abrir um terminal da sua preferencia: Terminal, PowerShell, CMD, Oh-My-ZSH, Konsole, enfim...
Preferencialmente na pasta dos seus projetos, você vai executar o seguinte comando:

"git clone https://github.com/gustavorichardd/facile-challenge.git challenge"

Feito o clone do projeto, é necessário instalar as dependências dele, é preciso fazer o seguinte:

"cd challenge"
"yarn"

Após ele processar todas as rotinas, tem algumas coisas a se fazer antes de iniciar o projeto;
O primeiro, é criar o arquivo com as variaveis do ambiente, eu deixei um modelo, então você vai criar de acordo com ele!
As conexões com o banco você pode usar tanto local como na núvem, no meu caso, eu utilizei um banco disponibilizado pela Heroku.

Preenchido os dados do banco de dados, você vai voltar no seu terminal, e vai criar as tabelas do banco:

"yarn knex:migrate"

Se tudo estiver correto no .env, será criada a tabela "text" no seu banco de dados.

Depois disso, você pode rodar a API:

"yarn start"

Feito isto, você já vai conseguir fazer as requisições para a API;

Para criar um registro, você vai usar uma rota POST para o endereço "http://localhost:3333/encripts";
No retorno da rota, ele vai te dar um ID, salva ele pra você poder consultar depois.

Uma vez criado o registro, você vai conseguir consultar ele através do "http://localhost:3333/encripts/ID"