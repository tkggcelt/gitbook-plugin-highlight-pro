gitbook-plugin-highlight-pro
==============

这是一款gitbook代码高亮插件，用于改善gitbook自带的代码高亮功能鸡肋的问题。

如果你受够了gitbook自带的代码高亮灰色背景、关键词不高亮、颜色单一的话，那么，这款插件将会适合你。

感谢[highlight项目](https://highlightjs.org/)，插件共支持150种语言、71种风格

# 用法
首先安装本插件，安装方法与常用的npm插件安装方法相同。
由于插件还未加入npm库，故可使用如下手动安装方法：

* 进入gitbook初始化后的`根目录`
* 创建`node_modules文件夹`
* 进入`node_modules`文件夹
* 解压本插件安装包在该目录即可

即最后的目录结构是
```text
gitbook-Root
   |-- README.md
   |-- SUMMARY.md
   |-- book.json
   |-- node_modules
           |-- gitbook-plugin-highlight-pro
                   |-- index.js
                   |-- README.md
                   ....
```
然后，再在配置文件***book.json***中，加入以下部分配置即可启用。
同时，推荐将默认的highlight插件禁用，如下所示：
```javascript
{
    "plugins": [
        "-highlight", 
        "highlight-pro"
    ],
}
```

# 原理
highlight-pro插件将自动解析gitbook中markdown中的代码段，如以下部分
```markdown
  ```html
  <div>xxxx</div>

  xxxxxxxxxxxxxxxxxxxxxxx
  
  ```php
  <?php 
      echo "hello world";
  ?>

```

> 注意，插件仅仅解析这一种风格的markdown代码，且必须显式指定代码语言(如`html`)，否则将不会解析


# 配置
highlight-pro插件默认使用monokai风格，可以在配置文件中修改默认风格。
另外，由于必须在markdown中显式指定语言才能解析，若是指定的语言不存在，则会报错，这个时候，可以在配置文件中指定map转换。


> 比如使用`shell`语言将报错，可在配置文件中将shell映射到`bash`上即可


```javascript
{
    "plugins": [
        "-highlight",
        "highlight-pro"
    ],
    "pluginsConfig": [
        "highlight-pro": {
            "theme": "mono-blue",
            "map": {
                "shell": "bash",
                "sh": "bash"
            }
        }
    ]
}
```

# 支持的语言
默认支持的语言(可在mark都为你代码块上显式指定的)

| 类别 | 语言| 备注 |
| ----- | ------ | ------ |
| common | bash | shell脚本 |
| | coffeescript | CoffeeScript |
| | cpp | C++ |
| | cs | C# |
| | css | CSS |
| | diff | diff命令的结果 |
| | http | HTTP协议内容 |
| |  java | Java |
| | javascript | JavaScript |
| | json | JSON内容 |
| | makefile | Makefile内容 |
| | markdown | Markdown文本 |
| | objectivec | Objective-C语言 |
| | perl | Perl语言 |
| | php | PHP语言 |
| | python | Python语言 |
| | ruby | Ruby语言 |
| | sql | SQL语句 |
| | xml | HTML、XML文件 |
| assembler | armasm | ARM Assembly文件 |
| | avrasm | AVR Assembler文件 |
| | mipsasm | MIPS Assembly文件 |
| | x86asm | Intel x86 Assembly文件 |
| config | apache | Apache配置文件 |
| | crmsh | crmsh配置 |
| | dns | DNS Zone File |
| | dockerfile | Dockerfile配置文件 |
| | ini | ini格式配置文件 |
| | nginx | Nginx配置文件 |
| | pf | |
| | puppet | Puppet |
| | roboconf | Roboconf |
| | yaml | YAML格式配置文件 |
| css | css | CSS文件 |
| | less | Less文件 |
| | scss | Scss文件 |
| | stylus | Syulus文件 |
| enterprise | 1c | 1C |
| | axapta | Axapta |
| | cos | Cache Object Script |
| | livecodeserver | LiveCode |
| | ruleslanguage | Oracle Rules Language |
| functional | elixir | Elixir |
| | elm | Elm |
| | erlang-repl | Erlang REPL |
| | erlang | Erlang |
| | fsharp | F# |
| | haskell | Haskell |
| | ocaml | OCaml |
| | scala | Scala |
| | sml | SML |
| | xqurey | XQuery |
| graphics | glsl | GLSL |
| | mel | MEL |
| | processing | Processing |
| | rib | RenderMan RIB |
| | rsl | RenderMan RSL |
| lisp | clojure-repl | Clojure REPL |
| | clojure | Clojure |
| | lisp |  Lisp |
| | scheme | Scheme |
| markup | asciidoc | AsciiDoc |
| | mdrkdown |Markdown |
| | tex | TeX |



# 支持的主题
所支持的主题列表如下：（可在[这里的网页](https://highlightjs.org/static/demo/)查看样式的Demo）

* agate
* androidstudio
* arduino-light
* arta
* ascetic
* atelier-cave-dark
* atelier-cave-light
* atelier-dune-dark
* atelier-dune-light
* atelier-estuary-dark
* atelier-estuary-light
* atelier-forest-dark
* atelier-forest-light
* atelier-heath-dark
* atelier-heath-light
* atelier-lakeside-dark
* atelier-lakeside-light
* atelier-plateau-dark
* atelier-plateau-light
* atelier-savanna-dark
* atelier-savanna-light
* atelier-seaside-dark
* atelier-seaside-light
* atelier-sulphurpool-dark
* atelier-sulphurpool-light
* brown-paper
* codepen-embed
* color-brewer
* dark
* darkula
* default
* docco
* dracula
* far
* foundation
* github
* github-gist
* googlecode
* grayscale
* gruvbox-dark
* gruvbox-light
* hopscotch
* hybrid
* idea
* ir-black
* kimbie.dark
* kimbie.light
* magula
* mono-blue
* monokai
* monokai-sublime
* obsidian
* paraiso-dark
* paraiso-light
* pojoaque
* qtcreator_dark
* qtcreator_light
* railscasts
* rainbow
* school-book
* solarized-dark
* solarized-light
* sunburst
* tomorrow
* tomorrow-night
* tomorrow-night-blue
* tomorrow-night-bright
* tomorrow-night-eighties
* vs
* xcode
* zenburn
