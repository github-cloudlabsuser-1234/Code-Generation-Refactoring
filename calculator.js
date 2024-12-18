const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    const num1 = parseFloat(await askQuestion('Enter the first number: '));
    const num2 = parseFloat(await askQuestion('Enter the second number: '));
    const operation = await askQuestion('Enter the operation (+, -, *, /): ');

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log('Invalid operation');
            rl.close();
            return;
    }

    console.log(`The result is: ${result}`);
    rl.close();
}

main();