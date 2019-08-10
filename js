
    //FUNÇÃO VERIFICA SE EXISTE ALGUM CHECKBOX SELECIONADO 
    // RECEBE OBJETO Nodelist(LISTA DE INPUTS) COMO ARGUMENTO
    // RETORNA 2 ARRAYS 
    // 1º - com os itens [checked="checked"]
    // 2º - com os itens [checked=" "]
    // Apresentados pelo VALUE de cada item
    
    const validarCheckBoxs = (nodeLista) =>{
        let checadosTrue = [];
        let checadosFalse = [];

        //OBJETO RECEBIDO NO PARAMETRO É NodeList 
        //Assim sendo, para dar supporte a navegadores antigos essa iteração DEVERÁ
        //ser realizada com for loop 
        //Métodos de array como foreach() não são apropriadas para esse caso.
        
        for(var i = 0; i < nodeLista.length; i++){
            
            if(nodeLista[i].checked == true){
                
                //Armazeno em [checadosTrue] todos os checkbox="checked"
                checadosTrue.push(nodeLista[i].value);
        }else{
                //Armazeno em [checadosFalse] todos os checkbox= "não checked"
                checadosFalse.push(nodeLista[i].value);
            }
        }


        //faço a validação para exibir mensagem de erro (quando necessário)
        // SE o array [checadosTrue] 
        // ******* CONTER ALGUM ITEM *****************
        // RETORNO OS ITEMS ARMAZENADOS
        if (checadosTrue !='') console.log('Array com os inputs selecionados:', checadosTrue) //return checadosTrue;
        
        //SENÃO (APRESENTO MENSAGEM DE ERRO)
        else console.log('Array com os inputs não selecionados:', checadosFalse);
    }

    console.log(validarCheckBoxs(nodeList))
    
