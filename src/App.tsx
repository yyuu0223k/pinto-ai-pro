import React, { useState } from 'react';

function App() {
const [score, setScore] = useState(70);

return (
<div className="bg-gray-50 min-h-screen font-sans">
<div className="container mx-auto p-4 sm:p-8">

<header className="text-center mb-10">
<h1 className="text-4xl sm:text-5xl font-bold text-gray-800">ピント判定AIプロ</h1>
<p className="text-gray-500 mt-2">あなたの「選別」を、AIが代行します。</p>
</header>

<div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 mb-10">
<label htmlFor="file-upload" className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-500 transition cursor-pointer">
<svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
<p className="text-gray-600 mb-2 font-semibold">ここに写真をドラッグ＆ドロップ</p>
<p className="text-gray-500 text-sm mb-4">または</p>
<span className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
ファイルを選択
</span>
</label>
<input id="file-upload" type="file" multiple className="hidden"/>
<p className="text-xs text-center text-gray-400 mt-4">JPG, PNG, HEIC, RAWに対応 | ピント・手ブレに加え、目瞑り写真もAIが自動検出</p>
</div>

<div className="text-center p-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg mb-10 text-white">
<h2 className="text-3xl font-bold">ピント判定は、革命の序章にすぎない。</h2>
<p className="text-gray-300 mt-3 max-w-3xl mx-auto">
このサービスは、あなたのフィードバックで賢くなる<strong className="text-cyan-400">「育てるAI」</strong>と、
撮影から納品までを支援する<strong className="text-cyan-400">「総合プラットフォーム」</strong>へと進化を続けます。
</p>
</div>
</div>
</div>
);
}

export default App;