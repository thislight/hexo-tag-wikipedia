# hexo-tag-wikipedia
A plugin to embed Wikipedia content into your Hexo post.

Currently, it only supports showing Wiki extracts (the first section before the `Table of Contents`). It uses the Restful API to get the summary.

## Installation
```bash
npm i hexo-tag-wikipedia --save
```

or
```bash
yarn add hexo-tag-wikipedia
```

## Usage
#### Example
```
{% wikipedia title:GitHub wikiButton:true %}
```
![](https://raw.githubusercontent.com/tuanna-hsp/file-hosting/master/Repo/hexo-tag-wikipedia-ss1.png)
#### Available parameters

| Parameter | Description |
| --- | --- |
| `title:<wiki_title>` | For example with the wiki URL https://en.wikipedia.org/wiki/Star_Wars, it is 'Star_Wars' |
| `wikiButton:<true>` | Whether or not to show the Wikipedia page link. Default to `false` |
| `lang:<code>` | The wiki page language code. `en`, `fr`, `ja`... Default to `en` |
