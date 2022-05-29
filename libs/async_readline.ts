import readline from "readline-promise";
export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
export async function input(question: string): Promise<string> {
    return await rl.questionAsync(question);
}
