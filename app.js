const { createApp } = Vue

createApp({
    data(){
        return{
            newItem: '',  // per aggiungere un nuovo elemento
            todoList:
            [
                {
                    text: 'Abbattere l\'AT-AT',
                    done: true

                },

                {
                    text: 'Rubare ai libici il plutonio per la DeLorean',
                    done: true

                },

                {
                    text: 'Attesa della lettera per Hogwarts',
                    done: false

                },

                {
                    text: 'Piazzare i Tracobetti',
                    done: true

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
                    done: true
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

            if(this.newItem !== ''){

                this.newItem = {
                    text: this.newItem,
                    done: false
                };

                this.todoList.push(this.newItem);
                this.newItem = '';

            } else {

                alert('Inserisci qualcosa da fare')
            
            }
        }
    },

    
}).mount('#app')