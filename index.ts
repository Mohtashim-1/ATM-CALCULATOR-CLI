import inquirer from 'inquirer';
interface ansType {
    userId: string,
    userPin: number,
    AccountType: string,
    TransactionType: string,
    amount: number,
}
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "kindly enter your id:",
    },
    {
        type: "number",
        name: "userPin",
        message: "kindly enter your pin:",
    },
    {
        type: "list",
        name: "AccountType",
        choices: ["Current", "Saving"],
        message: "Select Your Account Type",
    },
    {
        type: "list",
        name: "TransactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select Your Transaction Type",
        when(answer) {
            return answer.AccountType
        }
    },
    {
        type: "list",
        name: "amount",
        choices: ["1000", "2000", "1000", "20000"],
        message: "Select Your Amount",
        when(answer) {
            return answer.TransactionType == "Fast Cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Select Your Amount",
        when(answer) {
            return answer.TransactionType == "Withdraw";
        }
    },

])
// console.log(answer);
if (answer.userId && answer.userPin) {
    const balance = Math.floor(Math.random() * 1000000);
    console.log(balance);
    const EnterAmount = answer.amount;
    if (balance >= EnterAmount) {
        const remaining = balance - EnterAmount
        console.log(`Your Remaining Balance is : ${remaining}`)
    } else {
        console.log("Insufficient Balance")
    }
}