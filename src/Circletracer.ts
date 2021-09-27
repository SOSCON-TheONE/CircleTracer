import * as vscode from 'vscode';
export class Circletracer {
    /**
     * Track the currently panel. Only allow a single panel to exist at a time.
     */
    public static currentPanel: Circletracer | undefined;

    public static readonly viewType = 'Circletracer';

    private readonly _panel: vscode.WebviewPanel;
    private readonly _extensionUri: vscode.Uri;
    private static _circle2JsonData: string;
    private _disposables: vscode.Disposable[] = [];

    public static createOrShow(extensionUri: vscode.Uri, circle2jsonData: string) {
        this._circle2JsonData = circle2jsonData;

        const column = vscode.window.activeTextEditor
            ? vscode.window.activeTextEditor.viewColumn
            : undefined;

        // If we already have a panel, show it.
        if (Circletracer.currentPanel) {
            Circletracer.currentPanel._panel.reveal(column);
            return;
        }

        // Otherwise, create a new panel.
        const panel = vscode.window.createWebviewPanel(
            Circletracer.viewType,
            'Circletracer',
            column || vscode.ViewColumn.One,
            getWebviewOptions(extensionUri),
        );

        Circletracer.currentPanel = new Circletracer(panel, extensionUri);
    }

    public static revive(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
        Circletracer.currentPanel = new Circletracer(panel, extensionUri);
    }

    private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
        this._panel = panel;
        this._extensionUri = extensionUri;

        // Set the webview's initial html content
        this._update();

        // Listen for when the panel is disposed
        // This happens when the user closes the panel or when the panel is closed programmatically
        this._panel.onDidDispose(() => this.dispose(), null, this._disposables);

        // Update the content based on view changes
        this._panel.onDidChangeViewState(
            e => {
                if (this._panel.visible) {
                    this._update();
                }
            },
            null,
            this._disposables
        );

        // Handle messages from the webview
        this._panel.webview.onDidReceiveMessage(
            message => {
                switch (message.command) {
                    case 'alert':
                        vscode.window.showErrorMessage(message.text);
                        return;
                }
            },
            null,
            this._disposables
        );
    }

    public doRefactor() {
        // Send a message to the webview webview.
        // You can send any JSON serializable data.
        this._panel.webview.postMessage({ command: 'refactor' });
    }

    public dispose() {
        Circletracer.currentPanel = undefined;

        // Clean up our resources
        this._panel.dispose();

        while (this._disposables.length) {
            const x = this._disposables.pop();
            if (x) {
                x.dispose();
            }
        }
    }

    private _update() {
        const webview = this._panel.webview;
        this._panel.title = 'circle tracer';
        this._panel.webview.html = this._getHtmlForWebview(webview);
        return;
    }

    private _getHtmlForWebview(webview: vscode.Webview) {
        // Local path to main script run in the webview
        const treeMapOnDisk = vscode.Uri.joinPath(this._extensionUri, 'media/Circletracer', 'treemap.js');
        const dagreOnDisk = vscode.Uri.joinPath(this._extensionUri, 'media/Circletracer', 'dagre-d3.min.js');

        // And the uri we use to load this script in the webview
        const treeMapUri = (treeMapOnDisk).with({ 'scheme': 'vscode-resource' });
        const dagreUri = (dagreOnDisk).with({ 'scheme': 'vscode-resource' });

        // Local path to css styles
        const styleNodePath = vscode.Uri.joinPath(this._extensionUri, 'media/Circletracer', 'node-style.css');

        // Uri to load styles into webview
        const styleNodeUri = webview.asWebviewUri(styleNodePath);


        // Use a nonce to only allow specific scripts to be run
        const nonce = getNonce();

        return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">

				<!--
					Use a content security policy to only allow loading images from https or from our extension directory,
					and only allow scripts that have a specific nonce.
				-->
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; img-src ${webview.cspSource} https: http: data: blob:; script-src 'unsafe-inline' data: blob: http: https:; connect-src ${webview.cspSource} https:">

				<meta name="viewport" content="width=device-width, initial-scale=1.0">

				<link nonce="${nonce}" href="${styleNodeUri}" rel="stylesheet">
				<script src="${dagreUri}"></script>
				<script src="https://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
				<script src="https://d3js.org/d3.v5.min.js"></script>				
				<script src="${treeMapUri}"></script>
				<title>Node Graph Visualization</title>
			</head>
			
			<body>
                <div id="root">
                    <main>
                        <h1 id="title">Circle Tracer</h1>
                        <div id="main">
                            <nav>
                                <div class="left-btns">
                                    <button class="json-load-btn">Load First Json File</button>
                                    <button class="json-load-btn">Load Second Json File</button>
                                </div>
                            </nav>
                            <div id="wrapper"></div>
                        </div>
                        <div class="sidebar sidebar-block card animate-right" id="detail">
                            <h1 class="detail-title">NODE PROPERTIES</h1>
                            <a class="close-button" onclick="closeDetail()">x</a>
                            <div id="node-properties-content" class="detail-content"></div>
                            <div class="detail-header">ATTRIBUTES</div>
                            <div id="attributes-content" class="detail-content">
                                <!-- <div class="detail-content-name detail-content-list">
                                    <label>type</label>
                                </div>
                                <div class="detail-content-item detail-content-list">Conv2D</div> -->
                            </div>
                            <div class="detail-header">INPUTS</div>
                            <div id="inputs-content" class="detail-content"></div>
                            <div class="detail-header">OUTPUTS</div>
                            <div id="outputs-content" class="detail-content"></div>
                        </div>
                    </main>
                </div>
				<script>
					TreeMap(${Circletracer._circle2JsonData});
				</script>
			</body>
			</html>`;
    }
}

function getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function getWebviewOptions(extensionUri: vscode.Uri): vscode.WebviewOptions {
    return {
        // Enable javascript in the webview
        enableScripts: true,

        // And restrict the webview to only loading content from our extension's `media`, `src/Circletracer` directories.
        localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'media/Circletracer')]
    };
}