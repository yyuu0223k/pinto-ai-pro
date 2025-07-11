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



