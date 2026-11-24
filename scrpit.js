public class LAEC {
    public static void main(String[] args) {
        
        char conceito1 = 'B';
        double freq1 = 85;
        
        char conceito2 = 'C';
        double freq2 = 78;
        
        char conceito3 = 'A';
        double freq3 = 90;
        
        boolean aprovado;
        
        if (conceito1 == 'D' || conceito2 == 'D' || conceito3 == 'D') {
            aprovado = false;
        }
        else if (freq1 < 75 || freq2 < 75 || freq3 < 75) {
            aprovado = false;
        }
        else {
            aprovado = true;
        }
        
        if (aprovado == true) {
            System.out.println("APROVADO");
        }
        else {
            System.out.println("REPROVADO");
        }
    }
}