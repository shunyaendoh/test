---
title: "今までやった環境構築メモ"
date: "2019-11-2"
keywords: "markdown"
image: https://media.mstdn.io/mstdn-media/media_attachments/files/002/495/471/original/f36581dfec7e9d8a.png
---


# Homebrewのインストール
  1. Homebrewのインストール
      - [here](https://brew.sh/index_ja.html)


# node.jsの環境構築
  1. nodebrewのインストール
      - `brew install nodebrew`
      - `nodebrew -v`
  2. node.jsのインストール
      - `nodebrew install-binary stable` : latest or {version}
      - `nodebrew use stable` : latest or {varsion}
      - `'export PATH=$HOME/.nodebrew/current/bin:$PATH'`


# pythonの環境構築

  1. pipのインストール
      - [here](curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py)
      - `python get-pip.py` : pipインストール 
  2. pyenvのインストール
      - homebrewのインストール
      - `brew install pyenv`
      - `pyenv install {version}`
      - `pyenv global {version}` : PCのpythonのバージョン切替え
      - `pyenv local {version}` : カレントディレクトリの 〃
      - $ echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
      - $ echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
      - $ echo 'eval "$(pyenv init -)"' >> ~/.zshrc
  3. anacondaのインストール
      - [here](https://www.anaconda.com/distribution/#download)


# Goの環境構築

  1. Goのインストール
      - `brew install go`
      - `go get golang.org/x/tools/cmd/godoc` : 試しにgodocを入れてみる
      - `godoc fmt` : fmtが入ったか確認


# PHPの環境構築( +α Laravel )

  1. PHPのインストール
      - `brew install php@7.2`
      - `sudo vi /etc/apache2/thhpd/conf` : php7_module追加
  2. Laravelのインストール
      - `curl -sS https://getcomposer.org/installer | php` : comporser
      - `sudo mv composer.phar /usr/local/bin/composer` : 〃 移動
      - `composer --version` : バージョン確認
      - `composer global require laravel/installer` : Laravel CLI
      - `export PATH=~/.composer/vendor/bin:$PATH`
  3. Laravel立ち上げ
      - `laravel new {project}`
      - `composer create-project --prefer-dist laravel/laravel {project}`
      - `php artisan serve`


# MySQLの環境構築( +α Sequel pro )

  1. MySQLのインストール
      - `brew install mysql@5.7`
      - `export PATH='/user/local/opt/mysql@5.7/bin:$PATH`
  2. サーバー立ち上げ
      - `mysql.server start` : stop
      - `mysql -u root -p` : ログイン(PASSなし)
      - `show databases;` : use {database}
      - `create database {database} default 
          character set utf8mb4 collate utf8mb4_unicode_ci;`
      - `show tables;` : テーブル表示


# Rubyの環境構築( +α Rails )
  
  1. rbenvのインストール
      - `brew install rbenv`
      - `export PATH="~/.rbenv/shims:/usr/local/bin:$PATH"`
      - `eval "$(rbenv init -)"`
      - `rbenv -v`
  2. Rubyのインストール
      - `rbenv install --list`
      - `rbenv install x.x.x`
      - `rbenv global x.x.x` : PCのRubyのバージョン変更
      - `rbenv local x.x.x` : カレントディレクトリの 〃 
      - `rbenv rehash` : 再読み込み
      - `ruby -v`
  3. Railsのインストール
      - `gem install bundler` : Bundlerのインストール
      - `bundle -v` : `gem updata bundler`
      - `bundle init` : ディレクトリ内で
      - `vi Gemfile` : gem "rails"のコメントアウト外す
      - `gem install rails` : rails CLI
      - `bundle install --path=vendor/bundle`
      - `rails new {project}`
      - `bundle exec rails new {project}`
  4. Rails立ち上げ
      - `bundle exec rails s`
      -  `rails server` : CLI


# Vue.jsの環境構築
  1. Vue CLIのインストール
      - `yarn global add @vue/cli`
      - `npm install -g @vue/cli`
      - `vue --version`
      - `vue create {project}` : Enter or arrow
      - `npm run serve` : npm run build
      - `yarn serve`` yarn build

# Gatsby.jsの環境構築
  1. Gatsby CLIのインストール
      - `npm install -g gatsby-cli`
      - `gatsby new {project}`
      - `gatsby develop`
      - `gatsby build`


# Angularの環境構築
  1. Angular CLIのインストール
      - `npm install -g @angular/cli`
      - `ng new {project}`
      - `ng serve`


# Reactの環境構築
  1. プロジェクト立ち上げ
      - `npx create-react-app {project}`
      - `npm start`


# React-360の環境構築
  1. React-360 CLIのインストール
      - `npm install -g react-360-cli`
      - `react-360 init {project}`
      - `npm start`


# Flutterの環境構築
  1. Flutter SDKのインストール
    - [here](https://flutter.dev/docs/get-started/install/macos)
    - `unzip ~/Downloads/flutter_macos_v1.9.1+hotfix.6-stable.zip`
    - `flutter precache` : iOSおよびAndroidのバイナリを事前にダウンロード
    - `flutter doctor` : 不足している依存関係の確認
    - ` export PATH="$PATH:[PATH_TO_FLUTTER_GIT_DIRECTORY]/flutter/bin"`
    - `which flutter` : 場所確認

  2. Xcodeのインストール
    - `sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
    - `sudo xcodebuild -runFirstLaunch`
  3. Flutter立ち上げ
    - `flutter create {project}`
    - `flutter run`


# GitHubの環境構築
  1. sshKeyの作成と設定
    - [here](https://qiita.com/shunyaendoh/items/7a347f3c7dc505049b60)
    - `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
    - `chmod 600 ~/.ssh/id_rsa_github`
    - `vi ~/.ssh/config`
    - `ssh -T {HOST}`
    - GitHub => Setting => SSH and GPG keys
  2. 複数アカウントの際のコマンド
    - `to main(sub)`
    - `git remote add origin git@github(-sub):<account>/<repo>`


# TypeScriptの環境構築
  1. typescriptコンパイラのインストール
    - `npm install -g typescript`
    - `tsc -v`
  2. コンパイルから実行
    - `tsc {file(.ts)}`
    - `node {file(.js)}`


