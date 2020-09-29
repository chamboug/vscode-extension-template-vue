const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

function activate(context) {
    context.subscriptions.push(
        vscode.commands.registerCommand('myExtension.start', () => {
            const panel = vscode.window.createWebviewPanel(
                'myExtension',
                'My Extension',
                vscode.ViewColumn.One,
                {
                    enableScripts: true,
                    localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'dist'))]
                }
            );

            fs.readFile(path.join(context.extensionPath, 'dist', 'index.html'), (err, data) => {
                panel.webview.html = data
                  .toString()
                  .replace(
                    "<head>",
                    `<head><base href="${vscode.Uri.file(
                      path.join(context.extensionPath, "dist")
                    ).with({ scheme: "vscode-resource" })}/"></base>`
                  );
            });
        })
    );
}
exports.activate = activate;