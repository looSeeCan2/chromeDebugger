
document.title = "Chrome Debugger";

(() => {
    (() => {
        const factoryFunctionDom = (elementToBeCreated, element, text) => {
            return {
                elementToBeCreated,
                element,
                text,
                createElement() {
                    elementToBeCreated = document.createElement(element);
                    elementToBeCreated.innerText = text;
                    return elementToBeCreated;
                    // document.body[pend](createElement);
                }
            };
        }
        const createDiv = factoryFunctionDom("createDiv", "div", "This is the div from the factoryFunctionDom. Which is the very first div being created.");
        console.log(createDiv);
        const parentDiv = createDiv.createElement();
        console.log(parentDiv);
        document.body.prepend(parentDiv);

        const h2 = factoryFunctionDom("h2", "h2", "Text from the first factoryFunctionDom",);
        console.log(h2);
        parentDiv.append(h2.createElement())
        

    })(); /// an error if the semicolon is not here
    
    (() => {
        function ConstructorDom(elementToBeCreated, element, text)  {
            this.elementToBeCreated = elementToBeCreated,
            this.element = element,
            this.text = text,

            this.createElement = function greeting() {
                this.elementToBeCreated = document.createElement(element);
                this.elementToBeCreated.innerText = text;
                return this.elementToBeCreated;
            }
        }
        
        const createDiv = new ConstructorDom("createDiv", "div", "This is the div from the ConstructorDom");
        console.table(createDiv);
        const parentDiv = createDiv.createElement();
        console.log(parentDiv);
        document.body.prepend(parentDiv);
        console.log(createDiv.constructor);
    })();

    (() => {
        const factoryFunctionDom = (elementToBeCreated, element, text) => {
            return {
                elementToBeCreated,
                element,
                text,
                createElement() {
                    elementToBeCreated = document.createElement(element);
                    elementToBeCreated.innerText = text; 
                    return elementToBeCreated;
                }
            }
            
        }
        const h1 = factoryFunctionDom("h1", "h1", "Every object has a constructor property that references the function that was used to create that object");
        console.log(h1);
        document.body.prepend(h1.createElement());
        console.log(h1.constructor);

    })();

    (() => {
        const factoryFunctionPerson = (firstName, lastName, age) => {
            return {
                firstName,
                lastName,
                age,
                greeting () {
                    return `Hello my name is ${firstName}`;
                }       
            };
        }
        const a = factoryFunctionPerson('Lucycan', "Ly", 44);
        console.log(a);
        const b = factoryFunctionPerson("Ricki", 'Albright', 36);
        console.log(b);
        const c = b.greeting();
        console.log(c);
    })();

    (() => {

    })();

    (() => {
        
    })();

    (() => {
        
    })();

})()