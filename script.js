$(document).ready(() => {
	$('#documentacao').on('click',() =>{
        //LOAD
        //$('#pagina').load('documentacao.html') //qual documentto quero carregar

        //GET
        //$.get('documentacao.html', data =>{
            //$('#pagina').html//(data)
        //})//data: recebe a própria página

        //POST
        $.post('documentacao.html', data =>{
            $('#pagina').html(data)
        })
    })

    $('#suporte').on('click', () =>{
        //$('#pagina').load('suporte.html') //qual documentto quero carregar

        //GET
        //$.get('suporte.html', data =>{
           //$('#pagina').html(data) //data: recebe a própria página
        //})

        //POST
        $.post('suporte.html', data =>{
            $('#pagina').html(data)
        })
    })

    $('#competencia').on('change', e =>{
        //FAZENDO REQUISIÇÃI SÍNCRONA

        let competencia = $(e.target).val()

        $.ajax({
            //método, url, dados, sucesso, erro
            type: 'GET',
            url: 'app.php',
            data: 'competencia='+ competencia, //name do campo = valor (urlcoded)
            dataType: 'json', //passando de formato HTML para JSON (virando um objeto literal)
            success:dados => {
                //ATRIBUINDO VALORES AOS CAMPOS
            
                $('#numeroVendas').html(dados.numeroVendas)
                $('#totalVendas').html(dados.totalVendas)
            },
            error: erro => {
                console.log(erro)
            }

        })
    })
})