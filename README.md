# Still in Progress

# Cadastro de Carro

**RF**

Deve ser possível cadastrar um novo carro.
Deve ser possível listar todas as categorias.

**RN**

Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar a placa de um carro já cadastrado.
O carro deve ser cadastrado como disponível por padrão.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de Carros

**RF**

Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**

O usuário não precisa estar logado no sistema.

# Cadastro de Especificação no Carro

**RF**

Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**RN**

Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de Imagens do Carro

**RF**

Deve ser possível cadastrar a imagem do carro.

**RNF**

Utilizar o multer para upload dos arquivos.

**RN**

O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de Carro

**RF**

Deve ser possível cadastrar um aluguel.

**RN**

O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
O usuário deve estar logado na aplicação.
Ao realizar um aluguel o status do carro deverá ser alterado para indisponível.

# Listagem de Alugueis para usuário

**RF**

Deve ser possível realizar a busca de todos os alugueis para o usuário

**RN**

O usuário deve estar logado na aplicação

# Recuperar Senha

**RF**

Deve ser possível o usuário recuperar a senha informadndo o e-mail.
O usuário deve receber um e-mail com o passo a passo para a recuperação de senha.
O usuário deve conseguir inserir uma nova senha.

**RN**

O usuário precisa informar uma nova senha.
O link enviada para a recuperação deve expirar em 3 horas.