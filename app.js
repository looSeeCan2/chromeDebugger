
document.title = "Chrome Debugger";

(() => {
    (() => {
        const factoryFunctionDom = (elementToBeCreated, element, text) => {
            return {
                elementToBeCreated,
                element,
                text,
                createElement() {
                    const elementToBeCreated = document.createElement(element);
                    elementToBeCreated.innerText = text;
                    return elementToBeCreated;
                    // document.body[pend](createElement);
                }
            };
        }
        const createDiv = factoryFunctionDom("createDiv", "div", "This is the div from the factoryFunctionDom");
        console.log(createDiv);
        const parentDiv = createDiv.createElement();
        console.log(parentDiv);
        document.body.prepend(parentDiv);

        const h1 = factoryFunctionDom("h1", "h1", "Hello World",);
        console.log(h1);
        parentDiv.append(h1.createElement())
        

    })(); /// an error if the semicolon is not here
    
    (() => {
        function ConstructorDom(elementToBeCreated, element, text)  {
            this.createElement = function greeting() {
                const elementToBeCreated = document.createElement(element);
                elementToBeCreated.innerText = text;
                return elementToBeCreated;
            }
        }
        
        const createDiv = new ConstructorDom("createDiv", "div", "This is the div from the ConstructorDom");
        console.log(createDiv);
        const parentDiv = createDiv.createElement();
        console.log(parentDiv);
        document.body.prepend(parentDiv);
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
    })()
})()