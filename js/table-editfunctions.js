var cod = 0;

/* Definição classe Pessoa */
class pessoa {

    constructor(Nome, RA, Inst) {
        this.Nome = Nome;
        this.RA = RA;
        this.Inst = Inst;
    }

}

class password {


    constructor(Pwrd) {

        this.cod = Pwrd;

    }



    setpwrd(newPwrd) {

        this.cod = String(newPwrd);

    }


}

class Modal {

    constructor(ID) {

        this.modalID = ID;
    }

    show() {

        $('#' + this.modalID).modal('show');

    }

    hide() {

        $('#' + this.modalID).modal('hide');

    }




}

/* Adiciona Linha na tabela */
function add_row() {

    var cadastro = new Modal('cadastromodal');
    cadastro.show();
    document.getElementById('Modalname').value = "";
    document.getElementById('ModalRA').value = "";
    document.getElementById('Modalinst').value = "";


}

function editspace() {

    console.log("Ready to edit");

}
/*salvar dados na tabela*/
function SavetoTable() {
    var cadastro = new Modal('cadastromodal');
    var N = document.getElementById('Modalname').value;
    var ID = document.getElementById('ModalRA').value;
    var I = document.getElementById('Modalinst').value;
    if (N != "" && ID && ID != "" && I != "") {
        var Pessoa = new pessoa(N, ID, I);
        $(".tabledata").append('<tr class="fade show"id=item' + cod + '> <td onclick="editspace()">' + Pessoa.Nome + '</td> <td onclick="editspace()">' + Pessoa.RA + '</td> <td onclick="editspace()">' + Pessoa.Inst + '</td> <td> <button type="button" onclick="dell_row(item' + cod + ')" class="btn btn-danger">X</button> </td> </tr > ');
        console.log("Adding_Row");
        cod = cod + 1;

        $("body").append('<div class="alert alert-success alert-dismissible fade show" role="alert"> Participante Cadastrado !! </div>');

       try{
           var delbutton = document.getElementById(del);
       }catch(e){
            $("#ColunasID").append('<th scope="col" id="del">Excluir</th>');
       }
       

    }
    cadastro.hide();
    setTimeout(clearalert, 4000);

}


function clearalert() {

    var alertsx = $(".alert-success").alert('close');
}

function dell_row(COD) {
    COD.parentNode.removeChild(COD);
    cod = cod - 1;

    if (!cod) {

        $("#ColunasID").html(' <th scope="col">Nome</th> <th scope="col">RA</th> <th scope="col">Instituição</th>');
    }
    console.log(COD);
}


function savearq() {
    
    var datatab = $('.tabledata').children();
    var text ='<?xml version="1.0"?> <pessoas> ';
    var i=0;
    console.log("Número de pessoas: "+ datatab.length);
    for(i=0;i<datatab.length;i=i+1){

            text += "<pessoa> <nome>" + datatab[i].children[0].innerHTML + "</nome> <RA>" +  datatab[i].children[2].innerHTML + "</RA> <INSTITUTO>" + datatab[i].children[2].innerHTML + "</INSTITUTO> </pessoa>"

            

        

    };

    text+="</pessoas>"
    
  

    var participantes = new Blob([text], {type: "text/plain;charset=utf-8"});
    saveAs(participantes, "participantes.xml");
    console.log("Saving...");


}

function SetPass() {


    var cadastro = new Modal('accessmodal');

    var COD = new password(document.getElementById("codinput").value);

    COD.setpwrd(COD.cod);

    console.log("The Work Password is: " + COD.cod);
    cadastro.hide();
}