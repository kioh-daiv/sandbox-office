## 事前準備
1. npm install -g @angular/cli
2. PS C:\DevelopRoom\github-kioh-daiv\sandbox-office\frontend> ng --version
    Node.js version v16.13.2 detected.
    The Angular CLI requires a minimum Node.js version of v18.13.

    Please update your Node.js version or visit https://nodejs.org/ for additional instructions.
3. update nodejs v16 to v20

## Angular Installation
```
PS C:\DevelopRoom\github-kioh-daiv\sandbox-office\pj-fdpd2imer\frontend> ng new fdpd2imer
? Would you like to share pseudonymous usage data about this project with the Angular Team
at Google under Google's Privacy Policy at https://policies.google.com/privacy. For more  
details and how to change this setting, see https://angular.io/analytics. No
Global setting: disabled
Local setting: No local workspace configuration file.
Effective status: disabled
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? Yes
CREATE fdpd2imer/angular.json (2927 bytes)
CREATE fdpd2imer/package.json (1272 bytes)
CREATE fdpd2imer/README.md (1063 bytes)   
CREATE fdpd2imer/tsconfig.json (903 bytes)
CREATE fdpd2imer/.editorconfig (274 bytes)
CREATE fdpd2imer/.gitignore (548 bytes)
CREATE fdpd2imer/tsconfig.app.json (324 bytes)
CREATE fdpd2imer/tsconfig.spec.json (273 bytes)
CREATE fdpd2imer/server.ts (1703 bytes)
CREATE fdpd2imer/.vscode/extensions.json (130 bytes)
CREATE fdpd2imer/.vscode/launch.json (470 bytes)
CREATE fdpd2imer/.vscode/tasks.json (938 bytes)
CREATE fdpd2imer/src/main.ts (250 bytes)
CREATE fdpd2imer/src/favicon.ico (15086 bytes)
CREATE fdpd2imer/src/index.html (295 bytes)
CREATE fdpd2imer/src/styles.scss (80 bytes)
CREATE fdpd2imer/src/main.server.ts (264 bytes)
CREATE fdpd2imer/src/app/app.component.html (20884 bytes)
CREATE fdpd2imer/src/app/app.component.spec.ts (925 bytes)
CREATE fdpd2imer/src/app/app.component.ts (368 bytes)
CREATE fdpd2imer/src/app/app.component.scss (0 bytes)
CREATE fdpd2imer/src/app/app.config.ts (321 bytes)
CREATE fdpd2imer/src/app/app.routes.ts (77 bytes)
CREATE fdpd2imer/src/app/app.config.server.ts (350 bytes)
CREATE fdpd2imer/src/assets/.gitkeep (0 bytes)
✔ Packages installed successfully.
    Directory is already under version control. Skipping initialization of git.
✔ Packages installed successfully.
```
```
PS C:\DevelopRoom\github-kioh-daiv\sandbox-office\pj-fdpd2imer\frontend\fdpd2imer> ng serve

Initial Chunk Files | Names         |  Raw Size
polyfills.js        | polyfills     |  82.71 kB |
main.js             | main          |  23.32 kB |
styles.css          | styles        |  96 bytes |

                    | Initial Total | 106.12 kB

Application bundle generation complete. [5.521 seconds]
Watch mode enabled. Watching for file changes...
  ➜  Local:   http://localhost:4200/
```

## A Guide to Effective Project Structure
https://www.linkedin.com/pulse/architecting-angular-guide-effective-project-esraa-shaheen

## 必要なコンポーネントを生成する
```
PS C:\DevelopRoom\github-kioh-daiv\sandbox-office\pj-fdpd2imer\frontend\fdpd2imer> cd .\src\app\features\
PS C:\DevelopRoom\github-kioh-daiv\sandbox-office\pj-fdpd2imer\frontend\fdpd2imer\src\app\features> ng g c ./login
CREATE src/app/features/login/login.component.html (20 bytes)
CREATE src/app/features/login/login.component.spec.ts (589 bytes)
CREATE src/app/features/login/login.component.ts (231 bytes)
CREATE src/app/features/login/login.component.scss (0 bytes)
PS C:\DevelopRoom\github-kioh-daiv\sandbox-office\pj-fdpd2imer\frontend\fdpd2imer\src\app\features> ng g c ./search
CREATE src/app/features/search/search.component.html (21 bytes)
CREATE src/app/features/search/search.component.spec.ts (596 bytes)
CREATE src/app/features/search/search.component.ts (235 bytes)
CREATE src/app/features/search/search.component.scss (0 bytes)
PS C:\DevelopRoom\github-kioh-daiv\sandbox-office\pj-fdpd2imer\frontend\fdpd2imer\src\app\features> ng g m .\login\
CREATE src/app/features/login/login.module.ts (191 bytes)
PS C:\DevelopRoom\github-kioh-daiv\sandbox-office\pj-fdpd2imer\frontend\fdpd2imer\src\app\features> ng g m .\search\
CREATE src/app/features/search/search.module.ts (192 bytes)
PS C:\DevelopRoom\github-kioh-daiv\sandbox-office\pj-fdpd2imer\frontend\fdpd2imer\src\app\features> 
```
### Lazy Loading and Routing
```
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'search',
    loadChildren: () =>
      import('./features/search/search.module').then((m) => m.SearchModule),
  },
];

```

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: SearchComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SearchModule {}

```

## install ng-bootstrap
```
PS C:\DevelopRoom\github-kioh-daiv\sandbox-office\pj-fdpd2imer\frontend\fdpd2imer\src> cd ..
PS C:\DevelopRoom\github-kioh-daiv\sandbox-office\pj-fdpd2imer\frontend\fdpd2imer> ng add @ng-bootstrap/ng-bootstrap
>>
ℹ Using package manager: npm
✔ Found compatible package version: @ng-bootstrap/ng-bootstrap@16.0.0.
✔ Package information loaded.

The package @ng-bootstrap/ng-bootstrap@16.0.0 will be installed and executed.
Would you like to proceed? Yes
✔ Packages successfully installed.
UPDATE package.json (1413 bytes)
✔ Packages installed successfully.
UPDATE src/styles.scss (154 bytes)
UPDATE src/main.ts (295 bytes)
UPDATE tsconfig.app.json (351 bytes)
UPDATE tsconfig.spec.json (300 bytes)
```

## install bulma
```
PS C:\DevelopRoom\github-kioh-daiv\sandbox-office\pj-fdpd2imer\frontend\fdpd2imer> npm install bulma

added 1 package, and audited 993 packages in 6s

121 packages are looking for funding
  run `npm fund` for details

4 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

これを入れないとだめ。

/* You can add global styles to this file, and also import other style files */

/* Importing Bootstrap SCSS file. */
@import "bootstrap/scss/bootstrap";
@import "bulma/css/bulma";

```

## iconが出ない
```
PS C:\DevelopRoom\github-kioh-daiv\sandbox-office\pj-fdpd2imer\frontend\fdpd2imer> npm install --save @fortawesome/fontawesome-svg-core
>>
>> # Select the styles you need and install them with the following commands.
>> 
>> npm install --save @fortawesome/free-solid-svg-icons
>> npm install --save @fortawesome/free-regular-svg-icons
>> npm install --save @fortawesome/free-brands-svg-icons
>>

added 2 packages, and audited 995 packages in 6s

121 packages are looking for funding
  run `npm fund` for details

4 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

added 1 package, and audited 996 packages in 6s

121 packages are looking for funding
  run `npm fund` for details

4 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

added 1 package, and audited 997 packages in 4s

121 packages are looking for funding
  run `npm fund` for details

4 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

added 1 package, and audited 998 packages in 5s

121 packages are looking for funding
  run `npm fund` for details

4 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
PS C:\DevelopRoom\github-kioh-daiv\sandbox-office\pj-fdpd2imer\frontend\fdpd2imer> 
```


    // "@fortawesome/fontawesome-svg-core": "^6.5.1",
    // "@fortawesome/free-brands-svg-icons": "^6.5.1",
    // "@fortawesome/free-regular-svg-icons": "^6.5.1",
    // "@fortawesome/free-solid-svg-icons": "^6.5.1",

これだめだ、静的導入