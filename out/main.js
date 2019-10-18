"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
let workspacefolder = vscode.Uri.file(vscode.env.appRoot);
if (vscode.workspace.workspaceFolders) {
    workspacefolder = vscode.workspace.workspaceFolders[0].uri;
}
const options = {
    canSelectMany: true,
    openLabel: 'Open',
    filters: {
        'Assembly files': ['asm'],
        'All files': ['*']
    },
    defaultUri: workspacefolder
};
function convertwslfs(filepath) {
    filepath = filepath.replace(/\\/g, '\/');
    filepath = filepath.replace(/([a-z])(:)/, "/mnt/$1");
    return filepath;
}
function activate(context) {
    console.log(vscode.env.shell);
    let convertFS = false;
    if (vscode.env.shell.search(/\b(wsl\.exe)\b/) !== -1) {
        convertFS = true;
    }
    let terminal = vscode.window.createTerminal('Laser', vscode.env.shell, '');
    terminal.show(true);
    context.subscriptions.push(vscode.commands.registerCommand('lc3asm.assemble', () => {
        if (!vscode.window.terminals[0]) {
            terminal = vscode.window.createTerminal('Laser', vscode.env.shell, '');
        }
        terminal.show(true);
        vscode.window.showOpenDialog(options).then(fileUri => {
            if (fileUri && fileUri[0]) {
                let selectedfiles = "";
                fileUri.forEach(file => {
                    if (convertFS) {
                        selectedfiles += convertwslfs(file.fsPath) + " ";
                    }
                    else {
                        selectedfiles += file.fsPath + " ";
                    }
                });
                terminal.sendText("laser -a " + selectedfiles, true);
            }
        });
    }));
    context.subscriptions.push(vscode.commands.registerCommand('lc3asm.assembleProject', () => {
        if (!vscode.window.terminals[0]) {
            terminal = vscode.window.createTerminal('Laser', vscode.env.shell, '');
        }
        terminal.show(true);
        vscode.window.showOpenDialog(options).then(fileUri => {
            if (fileUri && fileUri[0]) {
                let selectedfiles = "";
                fileUri.forEach(file => {
                    if (convertFS) {
                        selectedfiles += convertwslfs(file.fsPath) + " ";
                    }
                    else {
                        selectedfiles += file.fsPath + " ";
                    }
                });
                terminal.sendText("laser -p " + selectedfiles, true);
            }
        });
    }));
    context.subscriptions.push(vscode.commands.registerCommand('lc3asm.assembleFolder', () => {
        if (!vscode.window.terminals[0]) {
            terminal = vscode.window.createTerminal('Laser', vscode.env.shell, '');
        }
        terminal.show(true);
        if (vscode.workspace.workspaceFolders) {
            terminal.sendText("laser -a ./*.asm", true);
        }
        else {
            vscode.window.showErrorMessage("No workspace folders open!");
        }
    }));
    context.subscriptions.push(vscode.commands.registerCommand('lc3asm.assembleFolderProject', () => {
        if (!vscode.window.terminals[0]) {
            terminal = vscode.window.createTerminal('Laser', vscode.env.shell, '');
        }
        terminal.show(true);
        if (vscode.workspace.workspaceFolders) {
            terminal.sendText("laser -p ./*.asm", true);
        }
        else {
            vscode.window.showErrorMessage("No workspace folders open!");
        }
    }));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=main.js.map