# Testes Automatizados com Cypress - Book Store (DemoQA)

Este projeto contém testes automatizados para as páginas de Registro, Login e Book Store do site de demonstração https://demoqa.com.

## 📊 Resultados dos Testes

| Teste                            | Resultado Esperado               | Resultado Obtido              | Status     | Observações                     |
|----------------------------------|----------------------------------|-------------------------------|------------|----------------------------------|
| Campo de nome visível           | Campo deve aparecer              | Campo apareceu                | ✅ Pass     | -                                |
| Login com dados inválidos       | Mensagem de erro aparece         | Mensagem "Invalid" visível    | ✅ Pass     | Teste OK                         |
| Cadastro sem passar CAPTCHA     | Cadastro deve ser bloqueado      | CAPTCHA impediu o envio       | ✅ Pass     | CAPTCHA impede testes reais      |
| Lista de livros na Book Store   | Lista deve aparecer              | Livros visíveis               | ✅ Pass     | -                                |
| Detalhes de um livro            | Informações do livro exibidas    | ISBN e título visíveis        | ✅ Pass     | -                                |

## 📝 Relatório Explicativo

### Introdução

A atividade teve como objetivo aplicar testes end-to-end com Cypress no site DemoQA, explorando suas páginas públicas e de autenticação.

### Testes Executados

- **Registro:** verificação de campos e tentativa de envio (CAPTCHA bloqueia)
- **Login:** tentativa com credenciais inválidas
- **Book Store:** leitura da lista de livros e acesso aos detalhes

### Análise dos Resultados

Todos os testes funcionaram como esperado. O CAPTCHA realmente impede o cadastro automatizado, exigindo intervenção manual para um fluxo completo.

### Conclusão

A atividade demonstra domínio de comandos básicos do Cypress como `.visit()`, `.get()`, `.click()` e `.should()`. Um próximo passo interessante seria explorar autenticação via API.
