export default class $Config {
    $GlobalColor = (): string => {
        return '#263238';
    }
    $GlobalIcon = (): string => {
        return '../icons/icon.ico';
    }
    $GlobalAppName = (lit: string): string => {
        switch (lit) {
            case 'case':
                return 'Googlers Editor';
            case 'no-case':
                return 'googlers-editor';
        }
    }
    $DebugConsole = (): boolean => {
        return false;
    }
    $GlobalRepro = (): string => {
        return 'https://github.com/DerGoogler/googlers-editor';
    }
    $GlobalIssues = (): string => {
        return 'https://github.com/DerGoogler/googlers-editor/issues';
    }
}