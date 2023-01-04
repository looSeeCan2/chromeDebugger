
document.title = "Chrome Debugger";

(() => {
    (() => {
        const dom = (div) => {
            return {
                
            };
        }
        const div1 = document.createElement("div");
        console.log(div1);
        div1.innerText = "Hello World";
        document.body.prepend(div1);
    })();
        
    (() => {
        const factoryFunction = (firstName, lastName, age) => {
            return {
                firstName,
                lastName,
                age,
                greeting: function() {
                    return `Hello`
                }
            };
        }
        const a = factoryFunction('Lucycan', "Ly", 44);
        console.log(a);
        const b = factoryFunction("Ricki", 'Albright', 36);
        console.log(b);
        const c = b.greeting();
        console.log(c);
    })();
})()