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
})