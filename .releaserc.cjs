module.exports = {
  branches: ['main'],
  // 本仓库不发 npm：包名 `dsh-pocket` 属于上游作者（npm 上那是 PIN 模型的另一个应用），
  // 一旦挂上 @semantic-release/npm，Release workflow 就会往别人的包推版本。
  // 发版只做：CHANGELOG + package.json 版本号 + git tag + GitHub release。
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      { changelogFile: 'CHANGELOG.md' },
    ],
    '@semantic-release/github',
    [
      '@semantic-release/git',
      { assets: ['CHANGELOG.md', 'package.json', 'package-lock.json'] },
    ],
  ],
}
