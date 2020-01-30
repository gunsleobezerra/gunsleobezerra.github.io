var cod = 0;

/* Definição classe Pessoa */
class pessoa {

    constructor(Nome, RG, Inst) {
        this.Nome = Nome;
        this.RG = RG;
        this.Inst = Inst;
    }
}
/* Adiciona Linha na tabela */
function add_row() {


    $('#cadastromodal').modal('show');
    document.getElementById('Modalname').value = "";
    document.getElementById('ModalRG').value = "";
    document.getElementById('Modalinst').value = "";


}

function editspace() {

    console.log("Ready to edit");

}
/*salvar dados na tabela*/
function SavetoTable() {
    var N = document.getElementById('Modalname').value;
    var ID = document.getElementById('ModalRG').value;
    var I = document.getElementById('Modalinst').value;
    if (N != "" && ID && ID != "" && I != "") {
        var Pessoa = new pessoa(N, ID, I);
        $(".tabledata").append('<tr class="fade show"id=item' + cod + '> <td onclick="editspace()">' + Pessoa.Nome + '</td> <td onclick="editspace()">' + Pessoa.RG + '</td> <td onclick="editspace()">' + Pessoa.Inst +'</td> <td> <button type="button" onclick="dell_row(item'+cod+')" class="btn btn-danger">X</button> </td> </tr > ');
        console.log("Adding_Row");
        cod = cod + 1;

        $("body").append('<div class="alert alert-success alert-dismissible fade show" role="alert"> Participante Cadastrado !! </div>');



    }
    $('#cadastromodal').modal('hide');
    setTimeout(clearalert, 4000);

}


function clearalert() {

    var alertsx = $(".alert-success").alert('close');
}

function dell_row(COD){
    COD.parentNode.removeChild(COD);
   console.log(COD);
}


function savearq(){

 
 console.log("Saving...");
 

}