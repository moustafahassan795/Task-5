        let calculation = localStorage.getItem('calculation') || '';
        display();

        function display(){
            document.querySelector('.js-calc').innerHTML = calculation;
        }

        function updateCalculations(num){
            calculation +=  num ; 
            console.log(calculation);
            display();
            localStorage.setItem('calculation', calculation);
        }
        