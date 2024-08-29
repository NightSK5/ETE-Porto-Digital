# Atividade: Jogo de Adivinhação - Guess the Number

## Objetivo

Neste exercício, você deverá implementar um simples jogo de adivinhação utilizando Java. O objetivo é que o jogador tente adivinhar um número gerado aleatoriamente pelo programa.

## Descrição do Projeto

O projeto consiste em dois arquivos principais:

1. **Main.java**: Contém o ponto de entrada do programa, onde o número aleatório é gerado e o loop de adivinhação é executado.
2. **GuessTheNumber.java**: Contém o método `guessTheNumber`, responsável por fornecer dicas ao jogador com base no palpite fornecido.

## Funcionamento

- O programa gera um número aleatório entre 1 e 10.
- O jogador é solicitado a adivinhar o número, fornecendo um palpite.
- Caso o palpite esteja incorreto, o programa fornece uma dica informando se o número é maior ou menor que o palpite e se é par ou ímpar.
- O jogo continua até que o jogador adivinhe corretamente o número.

## Bônus

1. **Número Máximo de Tentativas**: 
   - Implemente um limite máximo de tentativas para o jogador. Se o jogador não conseguir adivinhar o número dentro do limite, o jogo deve terminar informando que ele perdeu e revelando o número correto.
  
2. **Dificuldade**: 
   - Adicione diferentes níveis de dificuldade que alterem o intervalo de números possíveis (por exemplo, fácil: 1-10, médio: 1-50, difícil: 1-100). O jogador deve escolher a dificuldade antes de iniciar o jogo.

3. **Pontuação**:
   - Implemente um sistema de pontuação onde o jogador ganha pontos por adivinhar o número com menos tentativas. O número de pontos diminui conforme o número de tentativas aumenta.

4. **Histórico de Palpites**:
   - Exiba um histórico dos palpites anteriores do jogador, para que ele possa ver quais números já tentou.

## Tarefas Adicionais

- **Desafio 1**: Aumente a complexidade do jogo permitindo diferentes níveis de dificuldade e ajustando o intervalo de números aleatórios.
- **Desafio 2**: Implemente o sistema de pontuação e exiba a pontuação final ao final do jogo.
- **Desafio 3**: Adicione o histórico de palpites e exiba para o jogador a cada nova tentativa.
