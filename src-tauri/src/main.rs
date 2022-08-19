#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::{SystemTray, CustomMenuItem, SystemTrayMenu, SystemTrayMenuItem, SystemTrayEvent};
use tauri::Manager;

mod system_events;

#[tauri::command]
fn my_custom_command() {
  println!("I was invoked from JS!");
  system_events::print_all_data();
}

fn main() {
  let hide = CustomMenuItem::new("hide".to_string(), "Hide");
  let show = CustomMenuItem::new("show".to_string(), "Show");
  let settings = CustomMenuItem::new("settings".to_string(), "Settings");
  let quit = CustomMenuItem::new("quit".to_string(), "Quit");
  let tray_menu = SystemTrayMenu::new()
    .add_item(show)
    .add_item(hide)
    .add_native_item(SystemTrayMenuItem::Separator)
    .add_item(settings)
    .add_native_item(SystemTrayMenuItem::Separator)
    .add_item(quit);
  let tray = SystemTray::new().with_menu(tray_menu);

  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![my_custom_command])
    .system_tray(tray)
    .on_system_tray_event(|app, event| match event {
      SystemTrayEvent::MenuItemClick { id, .. } => {
        match id.as_str() {
          "quit" => {
            std::process::exit(0);
          }
          "hide" => {
            let window = app.get_window("toolbar_window").unwrap();
            window.hide().unwrap();
          }
          "settings" => {
            let window = app.get_window("setting_window").unwrap();
            window.show().unwrap();
          }
          "show" => {
            let window = app.get_window("toolbar_window").unwrap();
            window.show().unwrap();
          }
          _ => {}
        }
      } _ => {}
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
