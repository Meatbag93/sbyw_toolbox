import { input } from "./async_readline";
export async function input_num(question: string): Promise<number> {
    var num: number = parseInt(await input(question));
    if (!num) {
        num = 0;
    }
    return num;
}

export async function menu(
    title: string,
    options: Array<[string, Function]>
): Promise<void> {
    console.log(`${title}\n`);
    for (let i: number = 0; i < options.length; i++) {
        console.log(`${i + 1}: ${options[i][0]}\n`);
    }
    while (true) {
        var option: number = await input_num(
            `please input a number between 1 and ${options.length}\n`
        );
        if (!option || option > options.length) {
            console.log("number out of range.");
        } else {
            options[option - 1][1]();
            break;
        }
    }
}

export { input };
