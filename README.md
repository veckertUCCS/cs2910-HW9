# cs2910-HW9 README

### CONFIGURATION NOTES
I separated the codebases for the three segments of the homework into three groups of files with each group corresponding to the requirements for one of the three problems on the assignment. `Q1` Files contain the code for part 1, `Q2` for part 2, etc.
For organization, each problem's code for the client-side functionality is included in a separate source file labeled `QXClientScript.js` and then imported into its corresponding HTML file at the end of its source code. With this, opening the HTML file for problem `X` should be all that's required on the client side.
To run the server-side code for problems 2 and 3, running `node QXServerScript.js` in the directory containing the source code should be sufficient to start the server instance for problem `X`.