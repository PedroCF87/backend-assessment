module.exports = {

    // Status Code de Sucesso: 200 - 299
    successOk: {
      code: 200,
      message: 'A requisição foi bem sucedida.'
    },
    successCreated: {
      code: 201,
      message: 'A requisição foi bem sucedida e um novo recurso foi criado como resultado.'
    },
    successAccepted: {
      code: 202,
      message: 'A requisição foi recebida mas nenhuma ação foi tomada sobre ela.'
    },
    successNoContent: {
      code: 204,
      message: 'Não há conteúdo para enviar para esta solicitação.'
    },
  
    // Status Code de Erro: 400 - 499
    errorBadRequest: {
      code: 400,
      message: 'A sintaxe está inválida.'
    },
    errorUnauthorized: {
      code: 401,
      message: 'Requisição não autorizada.'
    },
    errorForbidden: {
      code: 403,
      message: 'O usuário não tem direitos de acesso ao conteúdo.'
    },
    errorNotFound: {
      code: 404,
      message: 'O servidor não pode encontrar o recurso solicitado.'
    },
    errorNotAcceptable: {
      code: 406,
      message: 'Não foi encontrado nenhum conteúdo seguindo os critérios fornecidos.'
    },
    errorLengthRequired: {
      code: 411,
      message: 'O campo Content-Length do cabeçalho não está definido e o servidor o requer.'
    },
    errorUnsupportedMediaType: {
      code: 415,
      message: 'O formato de mídia dos dados requisitados não é suportado pelo servidor.'
    },
  
    // Status Code de Erro do Servidor: 500 - 599
    serverInternalServerError: {
      code: 500,
      message: 'O servidor encontrou uma situação com a qual não sabe lidar.'
    },
    serverBadGateway: {
      code: 502,
      message: 'Resposta inválida recebida das API`s.'
    },
  
  }
  