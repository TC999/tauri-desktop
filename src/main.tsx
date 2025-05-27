import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Menu, MenuItem, Submenu } from '@tauri-apps/api/menu';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

const fileSubmenu = await Submenu.new({
  text: 'File',
  items: [
    await MenuItem.new({
      id: 'new_repo',
      text: 'New Repository',
      action: () => {
        console.log('New Repository clicked');
      },
    }),
    await MenuItem.new({
      id: 'open_repo',
      text: 'Open Repository',
      action: () => {
        console.log('Open Repository clicked');
      },
    }),
    await MenuItem.new({
      id: 'clone_repo',
      text: 'Clone Repository',
      action: () => {
        console.log('Clone Repository clicked');
      },
    }),
    await MenuItem.new({
      id: 'settings',
      text: 'Settings',
      action: () => {
        console.log('Settings clicked');
      },
    }),
  ],
});

const editSubmenu = await Submenu.new({
  text: 'Edit',
  items: [
    await MenuItem.new({
      id: 'undo',
      text: 'Undo',
      action: () => {
        console.log('Undo clicked');
      },
    }),
    await MenuItem.new({
      id: 'redo',
      text: 'Redo',
      action: () => {
        console.log('Redo clicked');
      },
    }),
    await MenuItem.new({
      id: 'cut',
      text: 'Cut',
      action: () => {
        console.log('Cut clicked');
      },
    }),
    await MenuItem.new({
      id: 'copy',
      text: 'Copy',
      action: () => {
        console.log('Copy clicked');
      },
    }),
    await MenuItem.new({
      id: 'paste',
      text: 'Paste',
      action: () => {
        console.log('Paste clicked');
      },
    }),
    await MenuItem.new({
      id: 'select_all',
      text: 'Select All',
      action: () => {
        console.log('Select All clicked');
      },
    }),
  ],
});

const ViewSubmenu = await Submenu.new({
  text: 'View',
  items: [
    await MenuItem.new({
      id: 'file_change',
      text: 'File Change',
      action: () => {
        console.log('File Change clicked');
      },
    }),
    await MenuItem.new({
      id: 'commit_history',
      text: 'Commit History',
      action: () => {
        console.log('Commit History clicked');
      },
    }),
    await MenuItem.new({
      id: 'repo_list',
      text: 'Repo List',
      action: () => {
        console.log('Repo List clicked');
      },
    }),
    await MenuItem.new({
      id: 'branch_list',
      text: 'Branch List',
      action: () => {
        console.log('Branch List clicked');
      },
    }),
    await MenuItem.new({
      id: 'zoom_in',
      text: 'Zoom In',
      action: () => {
        console.log('Zoom In clicked');
      },
    }),
    await MenuItem.new({
      id: 'zoom_out',
      text: 'Zoom Out',
      action: () => {
        console.log('Zoom Out clicked');
      },
    }),
    await MenuItem.new({
      id: 'reset_zoom',
      text: 'Reset Zoom',
      action: () => {
        console.log('Reset Zoom clicked');
      },
    }),
  ],
});

const RepoMenu = await Submenu.new({
  text: 'Repo',
  items: [
    await MenuItem.new({
      id: 'push',
      text: 'Push',
      action: () => {
        console.log('Push clicked');
      },
    }),
    await MenuItem.new({
      id: 'pull',
      text: 'Pull',
      action: () => {
        console.log('Pull clicked');
      },
    }),
    await MenuItem.new({
      id: 'fetch',
      text: 'Fetch',
      action: () => {
        console.log('Fetch clicked');
      },
    }),
  ],
});

const HelpSubmenu = await Submenu.new({
  text: 'Help',
  items: [
    await MenuItem.new({
      id: 'report_issue',
      text: 'Report Issue',
      action: () => {
        console.log('Report Issue clicked');
      },
    }),
    await MenuItem.new({
      id: 'documentation',
      text: 'Documentation',
      action: () => {
        console.log('Documentation clicked');
      },
    }),
    await MenuItem.new({
      id: 'about',
      text: 'About',
      action: () => {
        console.log('About clicked');
      },
    }),
  ],
});

const menu = await Menu.new({
  items: [
    fileSubmenu,
    editSubmenu,
    ViewSubmenu,
    RepoMenu,
    HelpSubmenu,
    await MenuItem.new({
      id: 'quit',
      text: 'Quit',
      action: () => {
        console.log('Quit pressed');
      },
    }),
  ],
});

menu.setAsAppMenu();