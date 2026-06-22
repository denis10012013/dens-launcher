const fs = require('fs');
let code = fs.readFileSync('src/renderer/App.tsx', 'utf-8');

const regex = /          \)}\s*<button className="primary" onClick=\{\(\) => getLauncherApi\(\)\.saveSettings\(settings\)\.then\(refresh\)\}>Сохранить настройки<\/button>/;

const replacement = `          )}
          <div style={{ marginTop: "auto", display: "flex", justifyContent: "flex-end", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 16 }}>
            <button className="primary" onClick={() => getLauncherApi().saveSettings(settings).then(refresh)}>Сохранить настройки</button>`;

if (regex.test(code)) {
  code = code.replace(regex, replacement);
  fs.writeFileSync('src/renderer/App.tsx', code);
  console.log("Fixed with Regex!");
} else {
  console.log("Regex did not match!");
}
