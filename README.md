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
Importante, a "DATABASE_URI" você deve deixar em branco sempre! beleza?

"yarn knex:migrate"

Se tudo estiver correto no .env, será criada a tabela "text" no seu banco de dados.

Depois disso, você pode rodar a API:

"yarn start"

# Usando a API

Feita a instalação, você já vai conseguir fazer as requisições para a API (Você pode usar o Insomnia, Postman... Eu usei um addon do VSC: Thunder Client);

Para criar um registro, você vai usar uma rota POST para o endereço "http://localhost:3333/encripts";

Quando você chamar esta rota, será chamado a função Store do ServiceController, ele tem basicamente 2 funções:
1) Garantir que o nome digitado foi um nome válido
2) Gravar o texto digitado no banco de dados.
Para isto, ele vai utilizar o módulo cryptografer, que possui 2 funções, uma para criptografar e uma para descriptografar. Neste momento, usaremos apenas a de criptografar.

Gravando corretamente no banco, SHAZAM! Gravamos no banco e temos retorno de status 201.

No retorno da rota, ele vai te dar um ID, você vai conseguir consultar ele através do "http://localhost:3333/encripts/ID";

Nesta rota, será chamada a função de index do ServiceController, que irá fazer o seguinte:
Consultará no banco o registro com base no ID que você passou.
Se por um acaso esse ID não existir, então teremos um retorno de 406, pois não há nada a mostrar.
Porém caso tudo estiver certo, ele vai retornar o nome descriptografado, graçar a função de decrypt do módulo cryptografer.

# Usando com o Heroku

Uma opção também seria utilizar o Heroku para utilizar a API.
Tendo uma conta na Heroku, você vai no seu painel e adiciona um novo app.
Para isto você vai precisar que o projeto esteja no seu github!

UMa vez ele adicionado, você vai na parte de Installed add-ons, e vai na opção de Configure Add-ons";
Você vai procurar pelo addon "Heroku Postegres" e vai adicionar ele.

É importante manter os dados da conexão do módulo de connection, porque quando o app está hospedado no heroku e você possui o heroku postgres, ele já vai identificar automaticamente os dados do postgres.

O próximo passo, é você ir na aba de "Deploy".
Na opção de Deployment method você vai vincular a sua conta do Github, e então vai localizar o repositório;

Ao final desta aba, vai ter a opção de "Manual deploy" você pode escolher a Brance desejada e depois clicar na opçãod e "Deploy Branch".

Por último, você vai ir na aba de Settings, e vai na opção de "Config Vars".
Nela você precisa definir as variáveis de ambiente da aplicação, mas nessa parte, você não precisa dos dados do banco!
Como comentei, o heroku já identifica automáticamente as informações do banco!

Uma vez o deploy feito, você consegue utilizar as mesmas rotas da API, só que agora, o endereço das rotas você vai ver 