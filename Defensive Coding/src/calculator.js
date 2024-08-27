import fs from "fs";
// Import safe-eval
import safeEval from "safe-eval";


export default function calculator_callback(request, response, res) {
    const expression = request.query?.expressionChooser;
    let content = "";

    if (expression) {
        try {
            content = fs.readFileSync("public/calculator.html", "utf8");
            //Using safeEval here is much more safe than using just eval, but still not fullproof.
            const answer = safeEval(expression);
            content = content.replace("&gt;", "&gt; " + answer)
            response.send(content);
        } catch (e) {
            content = content.replace("&gt;", "&gt; " + e)
            response.send(content);
        }
    } else {
        try {
            content = fs.readFileSync("public/calculator.html", "utf8");
        } catch (e) {
            console.log("Error:", e.stack);
        }
        response.send(content);
    }
}
