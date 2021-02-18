const { Menu, MenuItem } = require('electron').remote;
import { Titlebar, Color } from 'custom-electron-titlebar'
import $Document from './lib/Document';
import $Console from './lib/Console';
import $Config from './misc/config';
import { shell } from 'electron';
// import * as path from "path"; // <= uncomment this if you need

const doc = new $Document();
const con = new $Console();
const config = new $Config(); // Call configs e.g. Repro for the menubar

// Start
const titlebar = new Titlebar({
    backgroundColor: Color.fromHex(config.$GlobalColor()),
    // icon: path.join(__dirname, config.$GlobalIcon()), // <= Not working!
    // menuPosition: 'bottom', // <= Remove anything what you want
    // titleHorizontalAlignment: 'left',
    // shadow: true
});

const menu = Menu.buildFromTemplate([{
    label: 'View',
    submenu: [
        { role: 'reload' },
        { role: 'togglefullscreen' }
    ]
},
{
    label: 'GitHub',
    submenu: [
        {
            label: 'Repro',
            click(): void {
                shell.openExternal(config.$GlobalRepro())
            }
        }, {
            label: 'Issue?',
            click(): void {
                shell.openExternal(config.$GlobalIssues())
            }
        },
    ]
}]);
titlebar.updateMenu(menu);


con.log('LOADED'); // If all is loaded