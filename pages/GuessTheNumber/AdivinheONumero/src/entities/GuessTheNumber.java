package entities;

import java.util.Random;

public class GuessTheNumber {
    Random random = new Random();
    int tries = 0, nA = 0, maxTries = 0;
    boolean win = false;

    public void dificuldade(int d) {
        switch (d) {
            case 0:
                nA = random.nextInt(5) + 1;
                maxTries = 3;
                System.out.println("Dificuldade Super Fácil selecionado");
                break;
            case 1:
                nA = random.nextInt(10) + 1;
                maxTries = 5;
                System.out.println("Dificuldade Fácil selecionado");
                break;
            case 2:
                nA = random.nextInt(50) + 1;
                maxTries = 7;
                System.out.println("Dificuldade Média selecionada");
                break;
            case 3:
                nA = random.nextInt(500) + 1;
                maxTries = 10;
                System.out.println("Dificuldade Dificil selecionado");
                break;
            case 4:
                nA = random.nextInt(5000) + 1;
                maxTries = 15;
                System.out.println("Dificuldade Super Dificil selecionado");
                break;
            case 5:
                nA = random.nextInt(5000000) + 1;
                maxTries = 17;
                System.out.println("Dificuldade Impossivel selecionado");
                break;
            default:
                System.out.println("Número inválido");
        }
    }

    public void jogo(int n) {
        do {
            if (nA == n) {
                System.out.println("Você venceu!");
                win = true;
            } else {
                System.out.println("Tente novamente!");
                System.out.println("Tentativas Usadas: " + tries++);
                if(tries == maxTries && win){
                    System.out.println("Você perdeu");
                    win = true;
                }
            }
        } while (!win);
    }

    public boolean isWin() {
        return win;
    }

}