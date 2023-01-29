
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

    (() => { /// Value type. primitives are copied by theier value
        let x = 10; console.log("x:", x);
        let y = x; console.log("y:", y);
        x = 20; console.log(`x after reasignment: ${x}`);
        console.log(`y after x's reasignment to 20: ${y}`);
    })();

    (() => { /// Value type. objects are copied by their reference
        let x = {value: 10}; console.log(`x: ${x.value}`);
        let y = x; console.log(`y: ${y.value}`);
        x.value = 20; console.log( `x after reasignment: ${x.value}`)
        console.log(`y after x reasignment to 20: ${y.value}`);
        y.value = 21; console.log(y); console.log(x);
    })();

    (() => {
        let number = 10;
        const increase = number => {
            number++
        }
        increase(number);
        console.log(number);
    })();

    (() => {
        let number = {value: 10};
        const increase = number => {
            number.value++;
        }
        console.log(`number: ${number.value}`)
        increase(number);
        console.log(number);
    })();

    (() => {
        function Circle(radius) {
            this.radius = radius;
            this.draw = function() {
                console.log("draw");
            }
        }
        const circle1 = new Circle(1);
        console.log("circle1:", circle1);
        circle1.location = {x: 1, y: 0};
        delete circle1.location;
        circle1.location = {x: 1, y: 0};
        
        /// enumerate over object
        for(const key in circle1) {
            if(typeof circle1[key] !== "function") console.log(key, circle1[key]); 
        }
        const keys = Object.keys(circle1);
        console.log(keys);
    })();

    (() => {
        function Circle(radius) {
            this.radius = radius;
            this.defaultLocation = {x: 0, y: 1};
            this.computeOptimumLocation = function() {
                console.log("optimum");
            }
            this.draw = function() {
                console.log("draw");
            }
        }
        const circle2 = new Circle(2);
        console.log(circle2);
    })();

    (() => {
        function Circle(radius) {
            this.radius = radius;
            let defaultLocation = {x: 0, y:0}
            
            let computeOptimumLocation = function() {
                console.log("optimum");
            }
            this.draw = function() {
                console.log("draw");
                computeOptimumLocation();
                console.log(defaultLocation);
                console.log(this.radius);
            }
        }
        
        const circle3 = new Circle(3);
        console.log(circle3);
        circle3.draw();
    })();

    (() => {
        function Circle(radius) {
            this.radius = radius;
            //declare private members of the object
            let defaultLocation = {x: 0, y:0};
            let computeOptimumLocation = function() {
                console.log("optimuml");
            };

            Object.defineProperty(this, "defaultLocationProperty", {
                get: function() {
                    return defaultLocation;
                }
            });

            this.draw = function() {
                console.log("draw");
                computeOptimumLocation();
                console.log(defaultLocation);
            };
        }
        const circle4 = new Circle(4);
        console.log(circle4);
        circle4.draw();
        console.log(circle4.defaultLocationProperty);
    })();

    (() => { /// try getters and setters on a factory function
        const factoryFunctionCircle = (radius) => {
            let defaultLocation = {x: 0, y: 0}
            let computeOptimumLocation = () => console.log("computeOptimumLocation");
            
            const circle = {
                radius,
                draw() {
                    console.log("draw");
                    computeOptimumLocation();
                },
            }
            
            Object.defineProperty(circle, "defaultLocationProperty", {
                get: function() {
                    return defaultLocation;
                }, /// TODO: setters /// NOTE * right before this note I tried to solve the push issue by unchecking the first check in the protection rule. It worked,
                /// it let me push on the terminal without giving me an error. ?? Do I have to make another branch??
            });
            
            return circle;
        };


        const factoryCircle1 = factoryFunctionCircle(1);
        console.log(factoryCircle1);
        factoryCircle1.draw();
        factoryCircle1.defaultLocationProperty;
    })();

    (() => { /// an example of getters and setters that chat gpt gave me
        function Person(firstName, lastName) {
            this._firstName = firstName;
            this._lastName = lastName;
        }
        
        Object.defineProperty(Person.prototype , 'fullName', {
            get: function() {
                return `${this._firstName} ${this._lastName}`;
            },
            
            set: function(name) {
                const parts = name.split(' ');
                this._firstName = parts[0];
                this._lastName = parts[1];
            },
            
        }); 
        
        const person = new Person('John', 'Doe');
        console.log(person);
        console.log(person.fullName); // Outputs: "John Doe"

        person.fullName = 'Jane Doe';
        console.log(person.fullName); // Outputs: "Jane Doe"
    })();

    (() => { /// TODO: use the ^ and instead of the getters and setters, use just regular functions instead. Ask chatGPT what the diff is
        function Person(firstName, lastName) {
            this.firstName;
            this.lastName;
        }

        Object.defineProperty(Person.prototype, "fullname", {
            get: function() {
                return `When the set method is called (person.fullname), the method executes some code to change the value of the given
                    variable, the get method returns what the setter has executed: ${this._firstName} ${this._lastName}`;
            },
            set: function(name) {
                const parts = name.split(" ");
                this._firstName = parts[0];
                this._lastName = parts[1];
            }
        });

        const person = new Person("Jane Doe");
        console.log(person);
        person.fullname = "Jane Doe";
        console.log(person.fullname);
        console.log(person); /// with this example, it fixed the lastName from undefined to "Doe"
    })();

    (() => { /// another example
        function BankAccount(balance) {
            this.balance = balance;

            Object.defineProperties(this, {
                setBalance: { /// git test
                    // get: function() {/// TODO: i did not really need this get here. I can just call the balance up there.
                                        /// but I do see that I need this get to return a value that the set calculates.
                    //     return this.balance;
                    // },

                    set: function(amount) {
                        this.balance = amount;
                    }
                },
                deposit: {
                    // get: function() {
                    //     return this.balance;
                    // },
                    set: function(amount) {
                        this.balance += amount;
                    }
                },
                withdraw: {
                    // get: function() {
                    //     return this.balance;
                    // },
                    set: function(amount) {
                        this.balance -= amount;
                    }
                }

            });
        } 

        debugger;
        console.log(BankAccount);
        
        const testTransaction1 = new BankAccount(100); 
        console.log(testTransaction1);
        /// setBalance
        testTransaction1.setBalance = 150;
        ///deposit
        testTransaction1.deposit = 50;
        ///withdrawal
        testTransaction1.withdraw = 30;

        console.log(testTransaction1.balance)
        testTransaction1.balance = 58;
        console.log(testTransaction1.balance);
    })();

    (() => {
        
        function StopWatch() {
            let startTime, endTime, running, duration = 0;
            
            this.start = function () {
                if(running) throw new Error("StopWatch has already started");
                
                running = true;
                startTime = new Date();
                console.log(startTime);
            };

            this.stop = function() {
                if(!running) throw new Error("Stopwatch is not started");

                running = false;
                endTime = new Date();
                // console.log(endTime);

                const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
                duration += seconds;
                console.log(seconds);
                console.log(duration);
            };

            this.reset = function() {
                startTime = null;
                endTime = null;
                running = false;
                duration = 0;
            };

            Object.defineProperty(this, "duration", {//a read only property called duration
                get: function() {
                    return duration;
                }
            });
        };
        
        const go = new StopWatch();
        go.start();
        go.stop();
        

    })();


})()