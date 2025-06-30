import Navigation from './components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <section className="relative py-32 overflow-hidden tech-grid">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="floating-animation">
                <div className="max-w-4xl mx-auto mb-8 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black rounded-2xl border-2 border-cyan-400/30 px-12 py-8 shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-600/10"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-4xl md:text-5xl font-bold font-mono tracking-wide mb-4 relative">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 drop-shadow-lg">Tadayuki Seno's</span>
                        <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 drop-shadow-lg">Portfolio Site</span>
                      </div>
                      <div className="text-xl md:text-2xl text-cyan-400 neon-glow font-mono">
                        &lt; AI-Driven Backend Engineer /&gt;
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-lg blur-sm"></div>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-cyan-400/5 to-transparent"></div>
                  </div>
                </div>
              </div>
              <div className="glass-effect rounded-2xl p-8 mb-8 max-w-4xl mx-auto">
                <p className="text-lg text-gray-300 mb-4">
                  AI活用バックエンドエンジニア | エンジニア歴<span className="text-cyan-400 font-bold">24年</span>
                </p>
                <p className="text-lg text-gray-300">
                  <span className="text-purple-400">Kotlin</span> / <span className="text-orange-400">Java</span> / <span className="text-blue-400">TypeScript</span> が強み | 化学分野SaaSのバックエンド開発中
                </p>
              </div>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://x.com/tseno_engineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect px-6 py-3 rounded-lg text-cyan-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 card-hover border border-cyan-500/30"
                >
                  <span className="font-mono">&gt; X</span>
                </a>
                <a
                  href="https://github.com/tseno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect px-6 py-3 rounded-lg text-purple-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 card-hover border border-purple-500/30"
                >
                  <span className="font-mono">&gt; GitHub</span>
                </a>
                <a
                  href="https://qiita.com/tseno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect px-6 py-3 rounded-lg text-green-400 hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 transition-all duration-300 card-hover border border-green-500/30"
                >
                  <span className="font-mono">&gt; Qiita</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-gray-900/50"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text neon-glow">
              <span className="font-mono">&lt; About_Me /&gt;</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="glass-effect rounded-2xl p-8 card-hover">
                <h3 className="text-xl font-semibold text-cyan-400 mb-6 font-mono">&gt; Profile</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><span className="text-purple-400 mr-2">→</span><strong className="text-white">Experience:</strong> 24年のキャリア</li>
                  <li className="flex items-center"><span className="text-purple-400 mr-2">→</span><strong className="text-white">Location:</strong> 関東エリア</li>
                  <li className="flex items-center"><span className="text-purple-400 mr-2">→</span><strong className="text-white">Certification:</strong> IT系国家資格取得</li>
                  <li className="flex items-center"><span className="text-purple-400 mr-2">→</span><strong className="text-white">Education:</strong> 工学系大学卒業</li>
                </ul>
              </div>
              <div className="glass-effect rounded-2xl p-8 card-hover">
                <h3 className="text-xl font-semibold text-cyan-400 mb-6 font-mono">&gt; キャリア概要</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><span className="text-purple-400 mr-2">→</span><strong className="text-white">総エンジニア経験:</strong> <span className="text-cyan-400">24年</span>（2001年～現在）</li>
                  <li className="flex items-center"><span className="text-purple-400 mr-2">→</span><strong className="text-white">SIer経験:</strong> <span className="text-green-400">15年</span>（2001年～2015年）</li>
                  <li className="flex items-center"><span className="text-purple-400 mr-2">→</span><strong className="text-white">フリーランス経験:</strong> <span className="text-orange-400">9年</span>（2016年～現在）</li>
                  <li className="flex items-center"><span className="text-purple-400 mr-2">→</span><strong className="text-white">マネジメント経験:</strong> <span className="text-pink-400">3年</span></li>
                </ul>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-center mb-8 gradient-text font-mono">&gt; 現在の業務（2024年6月～現在）</h3>
              <div className="glass-effect rounded-2xl p-8 card-hover border border-cyan-500/30">
                <h4 className="text-xl font-medium text-cyan-400 mb-4 neon-glow">化学分野SaaSのバックエンド開発</h4>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  <span className="text-purple-400">Kotlin</span> + <span className="text-green-400">Ktor</span> + <span className="text-pink-400">GraphQL</span> によるAPI設計・開発を担当。<br/>
                  化学物質データベース連携、AI/機械学習連携、リアルタイムデータ同期などを実装。<br/>
                  <span className="text-cyan-400">2025年7月～</span> <span className="text-blue-400">TypeScript</span>によるAI駆動型開発プロジェクトへ参画予定。
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 text-purple-300 rounded-lg text-sm font-mono"># Kotlin</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-600/20 border border-blue-500/30 text-blue-300 rounded-lg text-sm font-mono"># TypeScript</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 text-green-300 rounded-lg text-sm font-mono"># Ktor</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-pink-600/20 border border-pink-500/30 text-pink-300 rounded-lg text-sm font-mono"># GraphQL</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 text-blue-300 rounded-lg text-sm font-mono"># PostgreSQL</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 text-orange-300 rounded-lg text-sm font-mono"># AWS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 relative tech-grid">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text neon-glow">
              <span className="font-mono">&lt; Technical_Skills /&gt;</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-effect p-8 rounded-2xl card-hover border border-purple-500/30">
                <h3 className="text-xl font-semibold text-purple-400 mb-6 neon-glow font-mono">&gt; Languages</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Kotlin</span>
                    <div className="flex items-center">
                      <div className="w-16 h-2 bg-gray-700 rounded-full mr-2">
                        <div className="w-5/12 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      </div>
                      <span className="text-cyan-400 text-sm font-mono">5年</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Java</span>
                    <div className="flex items-center">
                      <div className="w-16 h-2 bg-gray-700 rounded-full mr-2">
                        <div className="w-full h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                      </div>
                      <span className="text-cyan-400 text-sm font-mono">12年</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">.NET</span>
                    <div className="flex items-center">
                      <div className="w-16 h-2 bg-gray-700 rounded-full mr-2">
                        <div className="w-5/6 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      </div>
                      <span className="text-cyan-400 text-sm font-mono">10年</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">TypeScript</span>
                    <div className="flex items-center">
                      <div className="w-16 h-2 bg-gray-700 rounded-full mr-2">
                        <div className="w-1/4 h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                      </div>
                      <span className="text-cyan-400 text-sm font-mono">3年</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass-effect p-8 rounded-2xl card-hover border border-green-500/30">
                <h3 className="text-xl font-semibold text-green-400 mb-6 neon-glow font-mono">&gt; Frameworks</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><span className="text-green-400 mr-2">▶</span>Spring Boot</li>
                  <li className="flex items-center"><span className="text-purple-400 mr-2">▶</span>Ktor</li>
                  <li className="flex items-center"><span className="text-blue-400 mr-2">▶</span>ASP.NET</li>
                  <li className="flex items-center"><span className="text-cyan-400 mr-2">▶</span>React</li>
                  <li className="flex items-center"><span className="text-emerald-400 mr-2">▶</span>Vue.js</li>
                  <li className="flex items-center"><span className="text-pink-400 mr-2">▶</span>Exposed (ORM)</li>
                </ul>
              </div>
              <div className="glass-effect p-8 rounded-2xl card-hover border border-cyan-500/30">
                <h3 className="text-xl font-semibold text-cyan-400 mb-6 neon-glow font-mono">&gt; Cloud & Infra</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><span className="text-orange-400 mr-2">☁</span>AWS</li>
                  <li className="flex items-center"><span className="text-blue-400 mr-2">☁</span>GCP</li>
                  <li className="flex items-center"><span className="text-cyan-400 mr-2">☁</span>Azure</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">🐳</span>Docker</li>
                  <li className="flex items-center"><span className="text-purple-400 mr-2">🏗</span>Terraform</li>
                  <li className="flex items-center"><span className="text-gray-400 mr-2">⚡</span>GitHub Actions</li>
                </ul>
              </div>
            </div>
            <div className="mt-16">
              <h3 className="text-2xl font-semibold text-center mb-8 gradient-text pulse-glow font-mono">&gt; AI活用開発</h3>
              <div className="glass-effect p-8 rounded-2xl border-2 border-gradient-to-r from-cyan-500/50 to-purple-500/50 card-hover">
                <p className="text-gray-300 mb-6 text-lg leading-relaxed text-center">
                  <span className="text-cyan-400">ChatGPT</span>、<span className="text-purple-400">GitHub Copilot</span>、<span className="text-pink-400">Cursor</span>、<span className="text-blue-400">Claude Code</span>、<span className="text-orange-400">Devin</span>等を駆使し、<br/>
                  <span className="text-green-400 font-bold">開発効率向上</span>・<span className="text-orange-400 font-bold">処理速度改善</span>を実現
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="px-6 py-3 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 text-green-300 rounded-xl text-sm font-mono neon-glow"># ChatGPT</span>
                  <span className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-300 rounded-xl text-sm font-mono neon-glow"># GitHub Copilot</span>
                  <span className="px-6 py-3 bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30 text-pink-300 rounded-xl text-sm font-mono neon-glow"># Cursor</span>
                  <span className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 rounded-xl text-sm font-mono neon-glow"># Claude Code</span>
                  <span className="px-6 py-3 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 text-orange-300 rounded-xl text-sm font-mono neon-glow"># Devin</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-slate-900/50"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text neon-glow">
              <span className="font-mono">&lt; Major_Projects /&gt;</span>
            </h2>
            <div className="space-y-8">
              <div className="glass-effect p-8 rounded-2xl card-hover border border-cyan-500/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-cyan-400 neon-glow">求人広告管理プラットフォーム開発</h3>
                  <span className="text-gray-400 font-mono text-sm">2023.02 - 2024.03</span>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 rounded-lg text-xs font-mono mb-2">14ヶ月間</span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  全体約<span className="text-cyan-400">130名</span>、開発約<span className="text-purple-400">50名</span>の大規模プロジェクト。<br/>
                  企業向け求人広告入稿・掲載オプション販売システムのアーキテクトチームとして、<br/>
                  共通機能設計・開発、API設計・実装を担当。
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 text-purple-300 rounded-lg text-sm font-mono"># Kotlin</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 text-blue-300 rounded-lg text-sm font-mono"># MySQL</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 text-orange-300 rounded-lg text-sm font-mono"># AWS</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 text-green-300 rounded-lg text-sm font-mono"># Spring Boot</span>
                </div>
              </div>

              <div className="glass-effect p-8 rounded-2xl card-hover border border-purple-500/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-purple-400 neon-glow">工事建機自動運転システム・シミュレータ開発</h3>
                  <span className="text-gray-400 font-mono text-sm">2021.01 - 2022.09</span>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 text-green-300 rounded-lg text-xs font-mono mb-2">21ヶ月間</span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  工事建機の自動運転システムとシミュレータの開発。<br/>
                  システム開発、バッチプログラム、不具合改修を担当。
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/30 text-orange-300 rounded-lg text-sm font-mono"># Java</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-green-600/20 border border-yellow-500/30 text-yellow-300 rounded-lg text-sm font-mono"># Python</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 text-cyan-300 rounded-lg text-sm font-mono"># React</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-600/20 border border-green-500/30 text-green-300 rounded-lg text-sm font-mono"># Vue.js</span>
                </div>
              </div>

              <div className="glass-effect p-8 rounded-2xl card-hover border border-pink-500/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-pink-400 neon-glow">美容医療系予約サービス開発</h3>
                  <span className="text-gray-400 font-mono text-sm">2019.07 - 2019.12</span>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30 text-pink-300 rounded-lg text-xs font-mono mb-2">6ヶ月間</span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  全体約<span className="text-pink-400">70名</span>、開発約<span className="text-cyan-400">50名</span>のプロジェクト。<br/>
                  検索系画面開発とElasticsearch活用を担当。
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/30 text-orange-300 rounded-lg text-sm font-mono"># Java11</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-600/20 border border-yellow-500/30 text-yellow-300 rounded-lg text-sm font-mono"># Elasticsearch</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-600/20 border border-blue-500/30 text-blue-300 rounded-lg text-sm font-mono"># Aurora MySQL</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-yellow-600/20 border border-orange-500/30 text-orange-300 rounded-lg text-sm font-mono"># AWS</span>
                </div>
              </div>

              <div className="glass-effect p-8 rounded-2xl card-hover border border-yellow-500/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-yellow-400 neon-glow">データマネジメントプラットフォーム開発</h3>
                  <span className="text-gray-400 font-mono text-sm">2017.04 - 2019.06</span>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-300 rounded-lg text-xs font-mono mb-2">26ヶ月間</span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  オークション・ECサイトの価格収集クローリングシステム開発。<br/>
                  <span className="text-yellow-400">Elasticsearch</span>による大量データ取り込み・検索エンジン構築を担当。
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/30 text-orange-300 rounded-lg text-sm font-mono"># Java</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 text-purple-300 rounded-lg text-sm font-mono"># Kotlin</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-600/20 border border-green-500/30 text-green-300 rounded-lg text-sm font-mono"># Spring Boot</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-600/20 border border-yellow-500/30 text-yellow-300 rounded-lg text-sm font-mono"># Elasticsearch</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-600/20 border border-blue-500/30 text-blue-300 rounded-lg text-sm font-mono"># Docker</span>
                </div>
              </div>

              <div className="glass-effect p-8 rounded-2xl card-hover border border-indigo-500/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-indigo-400 neon-glow">派遣会社Web基幹システム開発</h3>
                  <span className="text-gray-400 font-mono text-sm">2008.12 - 2017.03</span>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 rounded-lg text-xs font-mono mb-2">100ヶ月間</span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  開発チームリーダーとして約<span className="text-indigo-400">8年間</span>、<br/>
                  設計・実装・テストを一貫して担当。
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 text-blue-300 rounded-lg text-sm font-mono"># VB.NET</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-indigo-600/20 border border-purple-500/30 text-purple-300 rounded-lg text-sm font-mono"># ASP.NET</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-600/20 border border-red-500/30 text-red-300 rounded-lg text-sm font-mono"># Oracle</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-600/20 border border-blue-500/30 text-blue-300 rounded-lg text-sm font-mono"># Windows</span>
                </div>
              </div>

              <div className="glass-effect p-8 rounded-2xl card-hover border border-gray-500/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-400 neon-glow">その他大手企業案件の開発</h3>
                  <span className="text-gray-400 font-mono text-sm">2001 - 2008</span>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-gray-500/20 to-slate-500/20 border border-gray-500/30 text-gray-300 rounded-lg text-xs font-mono mb-2">多数</span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  金融・製造業・通信業界など大手企業向け<br/>
                  Webアプリケーション・基幹システム開発を多数担当。
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/30 text-orange-300 rounded-lg text-sm font-mono"># Java</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 text-blue-300 rounded-lg text-sm font-mono"># .NET</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-600/20 border border-red-500/30 text-red-300 rounded-lg text-sm font-mono"># Oracle</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-600/20 border border-blue-500/30 text-blue-300 rounded-lg text-sm font-mono"># SQL Server</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 relative tech-grid">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-indigo-900/30 to-cyan-900/30"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-8 gradient-text pulse-glow">
              <span className="font-mono">&lt; Contact /&gt;</span>
            </h2>
            <div className="glass-effect rounded-2xl p-12 mb-12 max-w-2xl mx-auto">
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                お仕事のご相談やお問い合わせは<br/>
                <span className="text-cyan-400 neon-glow">お気軽にどうぞ</span>
              </p>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://x.com/tseno_engineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect px-8 py-4 rounded-xl text-cyan-400 hover:text-white bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 card-hover border-2 border-cyan-500/50 hover:border-cyan-400 neon-glow"
                >
                  <span className="font-mono text-lg">&gt; X</span>
                </a>
                <a
                  href="https://github.com/tseno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect px-8 py-4 rounded-xl text-purple-400 hover:text-white bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 card-hover border-2 border-purple-500/50 hover:border-purple-400 neon-glow"
                >
                  <span className="font-mono text-lg">&gt; GitHub</span>
                </a>
                <a
                  href="https://qiita.com/tseno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect px-8 py-4 rounded-xl text-green-400 hover:text-white bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 transition-all duration-300 card-hover border-2 border-green-500/50 hover:border-green-400 neon-glow"
                >
                  <span className="font-mono text-lg">&gt; Qiita</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-400 font-mono text-sm">
                <span className="text-cyan-400">&gt;</span> Ready to innovate with AI-driven solutions <span className="text-cyan-400">&lt;</span>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
