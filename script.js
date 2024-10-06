class Aluno {
    constructor(nome, idade, curso){
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }
};

var alunosCadastrados = [];

function adicionarAluno(){
    // Achar o nome , idade e curso e armazenar nas variáveis
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let curso = document.getElementById("curso").value;
    let objetoAluno = new Aluno(nome, idade, curso);
    alunosCadastrados.push(objetoAluno)

    if(alunosCadastrados.length==0){
        console.log("Array de alunos vazio");
    }

    inserirNaTabela(nome, idade,curso);
}


function inserirNaTabela(nome,idade,curso){
    var tabela = document.getElementById("tabelaCadastrados");
    var novaLinha = tabela.insertRow();  

    var celulaNome = novaLinha.insertCell(0);
    var celulaIdade = novaLinha.insertCell(1);
    var celulaCurso = novaLinha.insertCell(2);

   
    celulaNome.textContent = nome;
    celulaIdade.textContent = idade;
    celulaCurso.textContent = curso;

}