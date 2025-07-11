https://pinto-ai-pro.web.app/ 

1. Install Firebase CLI
      npm install -g firebase-tools
      firebase login
2. Clone the Project
      git clone https://github.com/yyuu0223k/pinto-ai-pro.git
      cd pinto-ai-pro
3. Initialize Firebase
      firebase init
      プロンプトが表示されたら、以下の操作を行います。
      Hosting を選択します。バックエンドサポートが必要な場合は、オプションで Functions を選択します。
      既存の Firebase プロジェクトを選択するか、新規に作成します。
      使用するビルドツールに応じて、dist または build をパブリックディレクトリとして設定します。
      React などを使用している場合は、シングルページアプリとして設定するには「はい」を選択します。
      確信が持てない限り、既存のファイルを上書きしないでください。
4. Install Project Dependencies
      npm install
      npm run build
5. Deploy to Firebase
      firebase deploy
      firebase deploy --only hosting,functions

Tips
If the repo uses Vite, it builds to /dist by default.
Ensure your firebase.json has the correct public directory:
{
  "hosting": {
    "public": "dist",
    "rewrites": [
      { "source": "**", "destination": "/index.html" }
    ]
  }
}

Summary Commands

git clone https://github.com/yyuu0223k/pinto-ai-pro.git
cd pinto-ai-pro
npm install
npm run build
firebase init
firebase deploy

https://github.com/settings/connections/applications/89cf50f02ac6aaed3484



Command Prompt run

Microsoft Windows [Version 10.0.19045.5965]
(c) Microsoft Corporation. All rights reserved.

D:\kevin 2025.3.5\Lancers Project\pinto-ai-pro>firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  D:\kevin 2025.3.5\Lancers Project\pinto-ai-pro

√ Are you ready to proceed? Yes
√ Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to
confirm your choices. Functions: Configure a Cloud Functions directory and its files, Hosting: Configure files for
Firebase Hosting and (optionally) set up GitHub Action deploys

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

√ Please select an option: Use an existing project
√ Select a default Firebase project for this directory: pinto-ai-pro-aaf4b (pinto-ai-pro)
i  Using project pinto-ai-pro-aaf4b (pinto-ai-pro)

=== Functions Setup
Let's create a new codebase for your functions.
A directory corresponding to the codebase will be created in your project
with sample code pre-configured.

See https://firebase.google.com/docs/functions/organize-functions for
more information on organizing your functions using codebases.

Functions can be deployed with firebase deploy.

√ What language would you like to use to write Cloud Functions? TypeScript
√ Do you want to use ESLint to catch probable bugs and enforce style? Yes
i  functions/package.json is unchanged
i  functions/.eslintrc.js is unchanged
i  functions/tsconfig.dev.json is unchanged
i  functions/tsconfig.json is unchanged
i  functions/src/index.ts is unchanged
i  functions/.gitignore is unchanged
√ Do you want to install dependencies with npm now? Yes

up to date, audited 688 packages in 3s

162 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

√ What do you want to use as your public directory? dist
√ Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? (Y/n)
^C
D:\kevin 2025.3.5\Lancers Project\pinto-ai-pro>firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  D:\kevin 2025.3.5\Lancers Project\pinto-ai-pro

√ Are you ready to proceed? Yes
√ Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to
confirm your choices. Functions: Configure a Cloud Functions directory and its files, Hosting: Configure files for
Firebase Hosting and (optionally) set up GitHub Action deploys

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

√ Please select an option: Use an existing project
√ Select a default Firebase project for this directory: pinto-ai-pro-aaf4b (pinto-ai-pro)
i  Using project pinto-ai-pro-aaf4b (pinto-ai-pro)

=== Functions Setup
Let's create a new codebase for your functions.
A directory corresponding to the codebase will be created in your project
with sample code pre-configured.

See https://firebase.google.com/docs/functions/organize-functions for
more information on organizing your functions using codebases.

Functions can be deployed with firebase deploy.

√ What language would you like to use to write Cloud Functions? TypeScript
√ Do you want to use ESLint to catch probable bugs and enforce style? Yes
i  functions/package.json is unchanged
i  functions/.eslintrc.js is unchanged
i  functions/tsconfig.dev.json is unchanged
i  functions/tsconfig.json is unchanged
i  functions/src/index.ts is unchanged
i  functions/.gitignore is unchanged
√ Do you want to install dependencies with npm now? Yes

up to date, audited 688 packages in 3s

162 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

√ What do you want to use as your public directory? dist
√ Configure as a single-page app (rewrite all urls to /index.html)? Yes
√ Set up automatic builds and deploys with GitHub? Yes
√ File dist/index.html already exists. Overwrite? Yes
+  Wrote dist/index.html

i  Detected a .git folder at D:\kevin 2025.3.5\Lancers Project\pinto-ai-pro
i  Authorizing with GitHub to upload your service account to a GitHub repository's secrets store.

Visit this URL on this device to log in:
https://github.com/login/oauth/authorize?client_id=89cf50f02ac6aaed3484&state=44237970&redirect_uri=http%3A%2F%2Flocalhost%3A9005&scope=read%3Auser%20repo%20public_repo

Waiting for authentication...

+  Success! Logged into GitHub as yyuu0223k

√ For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository)
yyuu0223k/pinto-ai-pro

+  Created service account github-action-1017828977 with Firebase Hosting admin permissions.
+  Uploaded service account JSON to GitHub as secret FIREBASE_SERVICE_ACCOUNT_PINTO_AI_PRO_AAF4B.
i  You can manage your secrets at https://github.com/yyuu0223k/pinto-ai-pro/settings/secrets.

√ Set up the workflow to run a build script before every deploy? Yes
√ What script should be run before every deploy? npm ci && npm run build

+  Created workflow file D:\kevin 2025.3.5\Lancers Project\pinto-ai-pro\.github/workflows/firebase-hosting-pull-request.yml
√ Set up automatic deployment to your site's live channel when a PR is merged? Yes
√ What is the name of the GitHub branch associated with your site's live channel? main

+  Created workflow file D:\kevin 2025.3.5\Lancers Project\pinto-ai-pro\.github/workflows/firebase-hosting-merge.yml

i  Action required: Visit this URL to revoke authorization for the Firebase CLI GitHub OAuth App:
https://github.com/settings/connections/applications/89cf50f02ac6aaed3484
i  Action required: Push any new workflow file(s) to your repo

+  Wrote configuration info to firebase.json
+  Wrote project information to .firebaserc
+  Wrote .gitignore

+  Firebase initialization complete!

D:\kevin 2025.3.5\Lancers Project\pinto-ai-pro>



