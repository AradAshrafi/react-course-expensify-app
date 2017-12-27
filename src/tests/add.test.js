const add=(a,b) => a+b;
const genereateGreeting = (name ='Anonymous')=>`Hello ${name}!`
test ( 'should add two numbers ', ()=>{
    const result = add (4,3)
    expect(result).toBe (7);
});

test ('should say Hello to you :D ' , () =>{
    const result = genereateGreeting('arad');
    expect (result).toBe('Hello arad!')
})

test("should generate greeting for no name", ()=>{
    const result = genereateGreeting();
    expect (result).toBe('Hello Anonymous!')
})