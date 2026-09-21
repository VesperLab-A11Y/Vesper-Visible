# Vesper Visible

## English

The same landing page, built twice: one version treats accessibility as an
afterthought, the other builds it in from the start. Same layout, same
content, only the markup differs.

Sixteen deliberate issues are spread across the inaccessible version: nine an
automated scanner or a Vesper Toolkit bookmarklet can catch, and seven that
need a keyboard, a screen reader, or a careful look to find. Every one carries
a code comment explaining what's wrong and how to detect it, matched by a
comment explaining the fix in the accessible version.

The accessible version also carries a real, checkable example of an
axe-core flag that isn't a WCAG conformance failure: a short explainer
breaks down the difference between a rule tied to a success criterion and a
best-practice heuristic, so a scan result reads as a starting point rather
than a verdict.

No dependencies, no build step, no account, no third-party requests, no data
leaving the browser. Self-hosted fonts, same as Vesper Library and Vesper
Compass.

### Deployment

Published on VesperLab's site: <https://visible.vesperlab.dev/>

### Structure

| Path | Role |
|---|---|
| `index.html` | Landing page: explains the concept, links to both versions, the "Spot the difference" game |
| `inaccessible.html` | The demo page carrying all 16 issues, each explained in a code comment |
| `accessible.html` | The same page corrected point by point, plus the axe-core explainer |
| `style.css` | Shared styles, Vesper Lab V2 design tokens, self-hosted `@font-face` rules |
| `assets/fonts/` | Noto Serif / Sans as self-hosted `.woff2` |
| `scripts/fetch-fonts.mjs` | Re-downloads the font files from Fontsource if they're ever missing |

### How to use it

Best used alongside [Vesper Toolkit](https://toolkit.vesperlab.dev/): tab
through both pages with a keyboard, listen to both with a screen reader, then
run a Toolkit bookmarklet or a full axe-core scan on each and compare.

### Contact

Found an accessibility barrier, a bug, or a translation error? Open an issue
or write to contact@vesperlab.dev.

If my work is useful to you, you can
[buy me a coffee](https://buymeacoffee.com/vesperlab).

## Français

La même page d'accueil, construite deux fois : une version traite
l'accessibilité comme un détail réglé après coup, l'autre la construit dès le
départ. Même mise en page, même contenu, seul le balisage change.

Seize défauts volontaires sont répartis dans la version inaccessible : neuf
détectables par un scan automatique ou un bookmarklet du Vesper Toolkit, et
sept qui demandent un clavier, un lecteur d'écran, ou un œil attentif pour
les trouver. Chacun porte un commentaire dans le code expliquant le problème
et comment le repérer, avec le commentaire équivalent expliquant le correctif
dans la version accessible.

La version accessible porte aussi un vrai exemple, vérifiable, d'un
signalement axe-core qui n'est pas un échec de conformité WCAG : un encart
explique la différence entre une règle liée à un critère de succès et une
heuristique de bonne pratique, pour qu'un résultat de scan se lise comme un
point de départ plutôt qu'un verdict.

Aucune dépendance, aucune étape de build, aucun compte, aucune requête
tierce, aucune donnée qui sort du navigateur. Polices auto-hébergées, comme
Vesper Library et Vesper Compass.

### Déploiement

Publié sur le site de VesperLab : <https://visible.vesperlab.dev/>

### Structure

| Chemin | Rôle |
|---|---|
| `index.html` | Page d'accueil : explique le concept, lien vers les deux versions, le jeu des 7 différences |
| `inaccessible.html` | La page de démo qui porte les 16 défauts, chacun expliqué dans un commentaire |
| `accessible.html` | La même page corrigée point par point, plus l'encart axe-core |
| `style.css` | Styles partagés, jetons V2 de Vesper Lab, règles `@font-face` auto-hébergées |
| `assets/fonts/` | Noto Serif / Sans en `.woff2` auto-hébergées |
| `scripts/fetch-fonts.mjs` | Retélécharge les polices depuis Fontsource si elles venaient à manquer |

### Comment s'en servir

Idéalement avec [Vesper Toolkit](https://toolkit.vesperlab.dev/) : navigue les
deux pages au clavier, écoute les deux au lecteur d'écran, puis lance un
bookmarklet du Toolkit ou un scan axe-core complet sur chacune et compare.

### Contact

Une barrière d'accessibilité, un bug ou une erreur de traduction ? Ouvre une
issue ou écris à contact@vesperlab.dev.

Si mon travail t'est utile, tu peux
[financer mon apport en caféine](https://buymeacoffee.com/vesperlab).
