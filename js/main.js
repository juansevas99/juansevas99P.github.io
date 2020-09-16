class product{
    constructor (nombre,precio,id){
              
                        this.name=nombre,
                        this.precio=precio,
                        this.id=id
    }
  
}


class UI{
    añadirProducto(producto){
        var product_list= $('.product-list')
     
        var fila=document.createElement('tr')
        fila.innerHTML='<td>'+producto.name+'</td><td  class ="precio" value= '+producto.precio+'>'+producto.precio+'</td><td>'+producto.id+'</td><td><button class="button" value='+producto.id+' name ="borrar">Borrar</button></td>'
        product_list.append(fila);
    }   
    borrarProducto(e){
        if (e.name=='borrar'){
            $(e).parent().parent().remove()
        }

    }
    
    calcularPrecio(){
        var calc=0;    
        // var a=$('.valor');
        var lista =$('.precio').toArray();
        for(var f=0; f<lista.length; f++){
            calc=calc+ parseInt(lista[f].getAttribute('value'));
            
            }
        
        $('.Total').val(calc);

    }

}
cont=0;

$(function () {
    
    $('.button').click(function () {
        var kilos=$('.select_kilos').val()
        var name= $('.select').val();
        var precio=0
        if (kilos==null || name==null || kilos=='' || name==''  ){
            alert('Complete los datos')
        }   
        else{
            kilos=parseInt(kilos)

            switch(name){
                case 'Algodon, lino,Pana,Polister o nylon':
                    precio=2500* kilos;
                break;
                case 'lana':
                     precio=2000* kilos;
                break;
                case 'Seda':
                    precio=2600* kilos;
                      break;
                case 'Paño':
                    precio=3500* kilos;
                                break;
            }
              
            
                                       
           
           
            cont++;
           var producto =new product(name,precio,cont) 
           var ui=new UI()
           ui.añadirProducto(producto);
           ui.calcularPrecio();
        }
    })
})
$(function(){
        $('.product-list').click(function (e) {
            var ui=new UI()
            ui.borrarProducto(e.target);
            ui.calcularPrecio();
  
    })

      })
