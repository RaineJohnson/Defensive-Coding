This project is about using libraries and techniques to ensure we are proactive with our code security. We look at unsafe practices such as eval and replace them with more secure solutions.

To start, we use ESLint to analyze the code and find any underlying issues or syntax errors we might have missed. We can then use the built-in JavaScript strict mode to find any more errors. This program also ensures we don't combine user input with fs, so instead we use the path module to enforce that the only file path available is the working directory. 

The calculator application also uses the more secure execFile rather than using the insecure exec method. The contact form could potentially use some risky regular expressions, so we can use a Regex evaluator tool to return whether an expression is risky or not. 

A .gitignore file was introduced to hide all the node module code as it wasn't relevant to show here. All HTML, CSS, JSON, and JS files come together to make a simple web application that has various functions built into it, and this project demonstrates using defensive coding techniques, such as external libraries, functions, and ESLint, that can all help ensure we are being proactive about the security of our applications.
