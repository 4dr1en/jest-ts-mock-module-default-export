import start from "./start";
import mid from "./mid";
import end from "./end";

export function startup() {
    return start() + mid() + end();
}

const s = startup();

console.log(s);