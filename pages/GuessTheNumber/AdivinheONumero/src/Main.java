import entities.GuessTheNumber;

import java.util.Scanner;
//import java.util.Random;

public class Main {
    public static void main(String[] args) {
        GuessTheNumber projeto = new GuessTheNumber();

        Scanner sc = new Scanner(System.in);
        System.out.println("Bem-vindo(a) ao jogo: Advinhe o Número");
        System.out.println("0 - Super Fácil");
        System.out.println("1 - Fácil");
        System.out.println("2 - Médio");
        System.out.println("3 - Difícil");
        System.out.println("4 - Super Difícil");
        System.out.println("5 - Impossível");

        int d = sc.nextInt();

        projeto.dificuldade(d);

        do {
            System.out.println("Digite um número: ");
            int uC = sc.nextInt();
            projeto.jogo(uC);
        } while (!projeto.isWin());


        sc.close();
    }
}