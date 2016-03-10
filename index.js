var hljs = require("./book/highlight.pack.js");
var config = {};
var themeMap = {
    'googlecode': 1,
    'school-book': 1,
    'gruvbox-dark': 1,
    'darkula': 1,
    'arduino-light': 1,
    'atelier-lakeside-dark': 1,
    'xcode': 1,
    'tomorrow-night-eighties': 1,
    'idea': 1,
    'atelier-estuary-dark': 1,
    'monokai-sublime': 1,
    'tomorrow-night': 1,
    'atelier-forest-dark': 1,
    'qtcreator_light': 1,
    'atelier-lakeside-light': 1,
    'tomorrow': 1,
    'kimbie.dark': 1,
    'gruvbox-light': 1,
    'atelier-forest-light': 1,
    'atelier-cave-dark': 1,
    'ir-black': 1,
    'hybrid': 1,
    'atelier-sulphurpool-light': 1,
    'arta': 1,
    'androidstudio': 1,
    'atelier-seaside-dark': 1,
    'atelier-savanna-dark': 1,
    'atelier-estuary-light': 1, 
    'foundation': 1,
    'mono-blue': 1,
    'sunburst': 1,
    'docco': 1, 
    'solarized-dark': 1,
    'atelier-savanna-light': 1,
    'paraiso-dark': 1,
    'rainbow': 1,
    'hopscotch': 1,
    'color-brewer': 1,
    'far': 1,
    'dracula': 1,
    'tomorrow-night-blue': 1,
    'grayscale': 1,
    'atelier-sulphurpool-dark': 1,
    'kimbie-light': 1,
    'dark': 1,
    'github-gist': 1,
    'atelier-cave-light': 1,
    'atelier-dune-dark': 1,
    'atelier-seaside-light': 1,
    'agate': 1,
    'codepen-embed': 1,
    'brown-paper': 1,
    'atelier-heath-dark': 1,
    'solarized-light': 1,
    'qtcreator_dark': 1,
    'github': 1,
    'atelier-plateau-dark': 1,
    'default': 1,
    'railscasts': 1,
    'zenburn': 1,
    'atelier-dune-light': 1,
    'paraiso-light': 1,
    'monokai': 1,
    'magula': 1,
    'vs': 1,
    'tomorrow-night-bright': 1,
    'obsidian': 1,
    'atelier-heath-light': 1,
    'ascetic': 1,
    'pojoaque': 1,
    'atelier-plateau-light': 1
};
module.exports = {
    book: {
        assets: "./book",
        js: [],
        css: [
            "highlight-pro.min.css",
            "school-book.png",
            "pojoaque.jpg",
            "brown-papersq.png"
        ]
    },
    hooks: {
        "init": function() {
            config = this.options.pluginsConfig['highlight-pro'] || {};
        },
        "page": function(page) {
            var theme = config['theme'] || "monokai";
            if (!(theme in themeMap)) {
                throw "code hightlight theme <" + theme + "> not exist";
            }
            for (var i = 0; i < page.sections.length; i++) {
                var section = page.sections[i];
                if (section.type !== "normal") {
                    continue;
                }
                var regx = /(<pre><code class=")lang-[a-zA-Z]+(">)/g;
                section.content = section.content.replace(regx, "$1hljs " + theme + "$2");
            }
            return page;
        },

    },
    blocks: {
        code: function(block) {
            var lang = block.kwargs.language;
            var languageMap = config['map'] || {};
            if (!lang) {
                return block;
            }
            if (lang in languageMap) {
                lang = languageMap[lang];
            }
            return hljs.highlight(lang, block.body).value;
        }
    }
};