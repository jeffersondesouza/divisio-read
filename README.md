##Divisio Read

Web App gerenciar sua leitura. Nele você poded cadastrar livros em sua lista e a partir dai gerenciar e controlar seu progresso de leitura.

## Getting Started

O projeto foi desenvolvido utilizando:
  - React como framework principal;
  - Webpack para empacotar os módulos da aplicação realizando minificações e etc (Por opção, não foi feito uso ```create-react-app``` para confirgurarmos a a app 'não mão');
  - Babel para transpilar os arquivos ES6 para versões suportadas pelo navegador;
  - Sass como pré processador CSS;
  - Redux para tartar dos estados na plicação;
  - React Route para tratar das rotas;
  - Axios para as requisições HTTP para os REST con a API;
  - Mocha, Sinon e Chai para testes de unudade;
  - Instambul para cobertura de testes
  
### Requisitos
É necessário o ```Node``` instalado na máquina, por segurança também instalar o Webpack, apaenasr do mesmo está nas dependências de desenvolvimento

### Estrutura
O projeto foi dividido em Server e Client.

 - Na pasta [divisio-read-api](./divisio-read-api) encontra-se a API utilizada;

 - Na pasta [divisio-read-webapp](./divisio-read-webapp) encontra-se a versão React da apicação. 


## Rodando a APP 


### Certifique-se de rodar o Server Side

- Abrir o terminal em [divisio-read-api](./divisio-read-api)

- Instalação das dependências do projeto: 
```
npm install 
```

- Para a API:
```
npm start
```


### Frontend

- Abrir o terminal em [divisio-read-webapp](./divisio-read-webapp)

- Instalação das dependências do projeto: 
```
npm install 
```

- Subir a app:
```
npm start
```

- aplicação subirá em [http://localhost:8080/books](http://localhost:8080/books)


Para fazer o build de no ambiente de desenvolvimento.  
```
npm run build
```

Para fazer o build de produção, sendo gerado o bundle na pasta 'dist', com os arquiovos minificados e otimizados.    
```
npm run build-prod
```

## Rodando os Tests

Para rodar os testes basta dar o comando 
```
npm run test
```

Para rodar os testes em modo de watch, fazendo os mesmo se atualizarem a cada mudança nos arquivos basta dar o comando 
```
npm run tdd
```

Para conferir a cobertura de testes basta dar o comando 
```
npm run coverage
```
