const { createApp } = Vue

createApp({
    data(){
        return{
            newItem: '',  // per aggiungere un nuovo elemento
            todoList:
            [
                {
                    text: 'Abbattere l\'AT-AT',
                    done: false

                },

                {
                    text: 'Rubare ai libici il plutonio per la DeLorean',
                    done: false

                },

                {
                    text: 'Attesa della lettera per Hogwarts',
                    done: false

                },

                {
                    text: 'Piazzare i Tracobetti',
                    done: false

                },

                {
                    text: 'Cavalcare Falkor',
                    done: false

                },

                {
                    text: 'Pilotare il Millennium Falcon',
                    done: false

                },

                {
                    text: 'Tornare al TARDIS',
                    done: false
                },
            ]
        }
            
    },

    methods:{
        removeItems(i){
 
            this.todoList.splice(i, 1)
        },

        select(todo){

            if(todo.done === false){

                todo.done = true

            } else {

                todo.done = false

            }
        },

        addItem(){

            //creare un nuovo oggetto dove la proprietà text è uguale al valore inserito dall'utente
            //la proprietà di default sarà false, perchè ancora non è stata fatta
            //pushiamo questo oggetto nell'array
            //svuotiamo l'input
            
            if(this.newItem !== ''){

                this.newItem = {
                    text: this.newItem,
                    done: false
                };

                this.todoList.push(this.newItem);

            } else {

                alert('Inserisci qualcosa da fare')
            
            }

            this.newItem = ''
        }
    },

    
}).mount('#app')