[JAVASCRIPT__BADGE]: https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript
[TYPESCRIPT__BADGE]: https://img.shields.io/badge/typescript-D4FAFF?style=for-the-badge&logo=typescript
[EXPRESS__BADGE]: https://img.shields.io/badge/express-005CFE?style=for-the-badge&logo=express
[NODE_BADGE]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[MONGO_BADGE]:https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[RABBITMQ_BADGE]:https://img.shields.io/badge/Rabbitmq-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white
[ZOD_BADGE]:https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white

<h1 align="center" style="font-weight: bold;">Stock Service</h1>

![express][EXPRESS__BADGE]
![node][NODE_BADGE]
![typescript][TYPESCRIPT__BADGE]
![javascript][JAVASCRIPT__BADGE]
![mongo][MONGO_BADGE]
![rabbitmq][RABBITMQ_BADGE]
![zod][ZOD_BADGE]

<p align="center">
 <a href="#started">Getting Started</a> • 
  <a href="#routes">API Endpoints</a> •
 <a href="#colab">Collaborators</a> •
 <a href="#contribute">Contribute</a>
</p>

<p align="center">
  <b>(English)This Project is a microservice responsible for managing product inventory. Through the application, products can be registered, maintained and managed.</b>
</p>
<p align="center">
  <b>(Português)Este Projeto é um microservice responsável pelo gerenciamento do estoque de produtos. Por meio da aplicação, produtos podem ser cadastrado, mantidos e gerenciados.</b>
</p>

<h2 id="started">🚀 Getting started</h2>

(English)Here you will know how to run the project locally.

(Português)Aqui você saberá como executar o projeto localmente.

<h3>Prerequisites</h3>

Here are the prerequisites to run the application:

- [NodeJS](https://nodejs.org)
- [Docker](https://www.docker.com)

<h3>Cloning</h3>

How to clone the project

```bash
git clone https://github.com/EricSoares02/stock-service
```

<h3> Environment Variables</h2>

(English)Use the `.env` as reference to create your environment variables file.

(Português)Use o `.env` como referência para criar seu arquivo de variáveis ​​de ambiente.

```yaml
aws.region=us-east-1
aws.accessKeyId={YOUR_AWS_KEY_ID}
aws.secretKey={YOUR_AWS_SECRET}
```

<h3>Starting</h3>

How to start your project

```bash
cd stock-service
docker docker-command
``````


<h2 id="routes">📍 API Endpoints</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>POST /product</kbd>     | retrieves user info see [response details](#post-detail)
| <kbd>GET /product/:id</kbd>     | retrieves user info see [response details](#get-detail)
| <kbd>GET /search/:params</kbd>     | retrieves user info see [response details](#get-search-detail)
| <kbd>PUT /product</kbd>     | retrieves user info see [response details](#put-detail)



<h3 id="post-detail">POST /product</h3>

**REQUEST**
```json
{
        "name": "example",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "category": "category",
        "subCategory": "subCategory",
        "UPC": 123456789101,
        "variants":[
          {
            "isActive": true,
            "pictures": [
              "https://en.wikipedia.org/wiki/ISO_4217",
              "https://en.wikipedia.org/wiki/ISO_4217"
            ],
            "stock": 22,
            "priceInCent": 2341,
            "priceCurrency": "BRL",
            "SKU": "FSAS",
            "option": {
              "title": "ds",
              "value": "dse"
            },
            "onSale": {
              "active": false,
              "percentage": 32
            },
            "techDetails": [
              {
                "title": "xample",
                "text": "xample"
              },
              {
                "title": "xample",
                "text": "xample"
              }
            ]
          }
        ] 
      
        
    }
```

**RESPONSE**
```json
{
  "status": "successful"
}
```

or

**RESPONSE**
```json
{
  "status": "unsuccessful",
  "message": "Validation error"
}
```

<h3 id="get-detail">GET /product</h3>

**RESPONSE**
```json
{
        "name": "example",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "category": "category",
        "subCategory": "subCategory",
        "UPC": 123456789101,
        "variants":[
          {
            "isActive": true,
            "pictures": [
              "https://en.wikipedia.org/wiki/ISO_4217",
              "https://en.wikipedia.org/wiki/ISO_4217"
            ],
            "stock": 22,
            "priceInCent": 2341,
            "priceCurrency": "BRL",
            "SKU": "FSAS",
            "option": {
              "title": "ds",
              "value": "dse"
            },
            "onSale": {
              "active": false,
              "percentage": 32
            },
            "techDetails": [
              {
                "title": "xample",
                "text": "xample"
              },
              {
                "title": "xample",
                "text": "xample"
              }
            ]
          },
          {
            "isActive": true,
            "pictures": [
              "https://en.wikipedia.org/wiki/ISO_4217",
              "https://en.wikipedia.org/wiki/ISO_4217"
            ],
            "stock": 22,
            "priceInCent": 2341,
            "priceCurrency": "BRL",
            "SKU": "FSAS",
            "option": {
              "title": "ds",
              "value": "dse"
            },
            "onSale": {
              "active": false,
              "percentage": 32
            },
            "techDetails": [
              {
                "title": "xample",
                "text": "xample"
              },
              {
                "title": "xample",
                "text": "xample"
              }
            ]
          }
        ]   
    }
```



<h3 id="get-search-detail">GET /search</h3>

**RESPONSE**
```json 
{
  [
    {
        "name": "example",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "category": "category",
        "subCategory": "subCategory",
        "UPC": 123456789101,
        "variants":[
          {
            "isActive": true,
            "pictures": [
              "https://en.wikipedia.org/wiki/ISO_4217",
              "https://en.wikipedia.org/wiki/ISO_4217"
            ],
            "stock": 22,
            "priceInCent": 2341,
            "priceCurrency": "BRL",
            "SKU": "FSAS",
            "option": {
              "title": "ds",
              "value": "dse"
            },
            "onSale": {
              "active": false,
              "percentage": 32
            },
            "techDetails": [
              {
                "title": "xample",
                "text": "xample"
              },
              {
                "title": "xample",
                "text": "xample"
              }
            ]
          },
          {
            "isActive": true,
            "pictures": [
              "https://en.wikipedia.org/wiki/ISO_4217",
              "https://en.wikipedia.org/wiki/ISO_4217"
            ],
            "stock": 22,
            "priceInCent": 2341,
            "priceCurrency": "BRL",
            "SKU": "FSAS",
            "option": {
              "title": "ds",
              "value": "dse"
            },
            "onSale": {
              "active": false,
              "percentage": 32
            },
            "techDetails": [
              {
                "title": "xample",
                "text": "xample"
              },
              {
                "title": "xample",
                "text": "xample"
              }
            ]
          },
          {
            "isActive": true,
            "pictures": [
              "https://en.wikipedia.org/wiki/ISO_4217",
              "https://en.wikipedia.org/wiki/ISO_4217"
            ],
            "stock": 22,
            "priceInCent": 2341,
            "priceCurrency": "BRL",
            "SKU": "FSAS",
            "option": {
              "title": "ds",
              "value": "dse"
            },
            "onSale": {
              "active": false,
              "percentage": 32
            },
            "techDetails": [
              {
                "title": "xample",
                "text": "xample"
              },
              {
                "title": "xample",
                "text": "xample"
              }
            ]
          }
        ]   
    },
    {
        "name": "example",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "category": "category",
        "subCategory": "subCategory",
        "UPC": 123456789101,
        "variants":[
          {
            "isActive": true,
            "pictures": [
              "https://en.wikipedia.org/wiki/ISO_4217",
              "https://en.wikipedia.org/wiki/ISO_4217"
            ],
            "stock": 22,
            "priceInCent": 2341,
            "priceCurrency": "BRL",
            "SKU": "FSAS",
            "option": {
              "title": "ds",
              "value": "dse"
            },
            "onSale": {
              "active": false,
              "percentage": 32
            },
            "techDetails": [
              {
                "title": "xample",
                "text": "xample"
              },
              {
                "title": "xample",
                "text": "xample"
              }
            ]
          },
          {
            "isActive": true,
            "pictures": [
              "https://en.wikipedia.org/wiki/ISO_4217",
              "https://en.wikipedia.org/wiki/ISO_4217"
            ],
            "stock": 22,
            "priceInCent": 2341,
            "priceCurrency": "BRL",
            "SKU": "FSAS",
            "option": {
              "title": "ds",
              "value": "dse"
            },
            "onSale": {
              "active": false,
              "percentage": 32
            },
            "techDetails": [
              {
                "title": "xample",
                "text": "xample"
              },
              {
                "title": "xample",
                "text": "xample"
              }
            ]
          },
          {
            "isActive": true,
            "pictures": [
              "https://en.wikipedia.org/wiki/ISO_4217",
              "https://en.wikipedia.org/wiki/ISO_4217"
            ],
            "stock": 22,
            "priceInCent": 2341,
            "priceCurrency": "BRL",
            "SKU": "FSAS",
            "option": {
              "title": "ds",
              "value": "dse"
            },
            "onSale": {
              "active": false,
              "percentage": 32
            },
            "techDetails": [
              {
                "title": "xample",
                "text": "xample"
              },
              {
                "title": "xample",
                "text": "xample"
              }
            ]
          }
        ]   
    }
  ]
}

```



<h3 id="put-detail">PUT /product</h3>

**REQUEST**
```json
{
  "uptype": "description",
  "value": "value here"
}
```


**RESPONSE**
```json
{
  "status": "successful"
}
```

or

**RESPONSE**
```json
{
  "status": "unsuccessful",
  "message": "Validation error"
}
```



<h2 id="colab">🤝 Collaborators</h2>

Special thank you for all people that contributed for this project.

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/61896274?v=4" width="100px;" alt="Fernanda Kipper Profile Picture"/><br>
        <sub>
          <b>Fernanda Kipper</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://t.ctcdn.com.br/n7eZ74KAcU3iYwnQ89-ul9txVxc=/400x400/smart/filters:format(webp)/i490769.jpeg" width="100px;" alt="Elon Musk Picture"/><br>
        <sub>
          <b>Elon Musk</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://miro.medium.com/max/360/0*1SkS3mSorArvY9kS.jpg" width="100px;" alt="Foto do Steve Jobs"/><br>
        <sub>
          <b>Steve Jobs</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<h2 id="contribute">📫 Contribute</h2>

Here you will explain how other developers can contribute to your project. For example, explaining how can create their branches, which patterns to follow and how to open an pull request

1. `git clone https://github.com/Fernanda-Kipper/text-editor.git`
2. `git checkout -b feature/NAME`
3. Follow commit patterns
4. Open a Pull Request explaining the problem solved or feature made, if exists, append screenshot of visual modifications and wait for the review!

<h3>Documentations that might help</h3>

[📝 How to create a Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)

[💾 Commit pattern](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)