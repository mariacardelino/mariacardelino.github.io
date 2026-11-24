/* ──────────────────────────────────────────────────────────────
   Native Trees of Georgia — Tree-dex
   TREES  = the catalog (what's catchable), organized by family.
   CATCHES = your published sightings (js/catches.js), each with a
             photo committed to the repo. The capture panel adds to
             it via the GitHub API.
   ────────────────────────────────────────────────────────────── */

const TREES = [
  /* ── I. Evergreen (needled-leaf) ───────────────────────────── */
  { type: "Evergreen", family: "Cedar Family", group: "", name: "Atlantic White Cedar", clue: "Needles in a flat plane.", sci: "Chamaecyparis thyoides", desc: "Minute scale-like leaves enveloping the twig tips; branchlets flattened and two-ranked in an open fan-shaped spray; tiny spherical cones; spire-like crown.", botFamily: "Cypress family", img: "" },
  { type: "Evergreen", family: "Cedar Family", group: "", name: "Deodar Cedar", clue: "Looks more like a pine than a cedar.", sci: "Cedrus deodara", desc: "", botFamily: "Pine family", img: "" },
  { type: "Evergreen", family: "Cedar Family", group: "", name: "Eastern Red Cedar", clue: "Needles spread out (“red spreads”).", sci: "Juniperus virginiana", desc: "Minute scale-like to spreading needle leaves; small berry-like dark-blue fruit; light-brown fibrous bark; compact pyramidal crown.", botFamily: "Cypress family", img: "" },

  { type: "Evergreen", family: "Pine Family", group: "Long-needled pines (10+ in)", name: "Longleaf Pine", clue: "Large terminal buds.", sci: "Pinus palustris", desc: "Needles 10-18 in, crowded in clusters of 3; large silvery-white terminal buds; dull-brown cone 6-10 in; orange-brown papery bark.", botFamily: "Pine family", img: "" },
  { type: "Evergreen", family: "Pine Family", group: "Medium-needled pines (6–9 in)", name: "Loblolly Pine", clue: "3 needles per cluster/sheath (sticky pine cone).", sci: "Pinus taeda", desc: "Pale blue-green needles in 3s, 6-9 in, grouped near branch ends; cone scales with short stout prickles; fast-growing.", botFamily: "Pine family", img: "" },
  { type: "Evergreen", family: "Pine Family", group: "Medium-needled pines (6–9 in)", name: "Slash Pine", clue: "3, sometimes 2, needles to a cluster/sheath.", sci: "Pinus elliottii", desc: "Needles 8-12 in in clusters of 2-3; glossy brown cones 3-6 in with minute prickles; orange-brown plated bark.", botFamily: "Pine family", img: "" },
  { type: "Evergreen", family: "Pine Family", group: "Short-needled pines (1–5 in)", name: "Eastern White Pine", clue: "5 needles to a cluster (5 letters in “white”).", sci: "Pinus strobus", desc: "Soft bluish-green needles in bundles of 5; long cylindrical cones 4-8 in; branches in regular whorls (5 needles = 5 letters in 'white').", botFamily: "Pine family", img: "" },
  { type: "Evergreen", family: "Pine Family", group: "Short-needled pines (1–5 in)", name: "Pitch Pine", clue: "3 needles to a cluster (a small loblolly).", sci: "Pinus rigida", desc: "Stiff needles standing at right angles to the branch, in 3s; dark scaly bark dividing into broad flat brownish-yellow ridges; cones with rigid prickles.", botFamily: "Pine family", img: "" },
  { type: "Evergreen", family: "Pine Family", group: "Short-needled pines (1–5 in)", name: "Shortleaf Pine", clue: "2 and 3 needles to a cluster (a small slash).", sci: "Pinus echinata", desc: "Needles 3-5 in in 2s-3s; small cones 1.5-2.5 in; bark in irregular plates with small cinnamon-red scales.", botFamily: "Pine family", img: "" },
  { type: "Evergreen", family: "Pine Family", group: "Short-needled pines (1–5 in)", name: "Virginia Pine", clue: "2 needles to a cluster (“V” for Virginia).", sci: "Pinus virginiana", desc: "Shortest needles of any native pine (1.5-3 in, in 2s); upper-trunk bark nearly smooth; dead branches persist for years; usually 30-40 ft.", botFamily: "Pine family", img: "" },

  { type: "Evergreen", family: "Other Needled Evergreens", group: "", name: "Bald Cypress", clue: "Feather-like leaves (Bald Eagle).", sci: "Taxodium distichum", desc: "Feather-like leaves in one plane on deciduous branchlets; small round cones; fibrous cinnamon-red bark; cone-shaped 'knees' around the trunk base in wet ground.", botFamily: "Cypress family", img: "" },
  { type: "Evergreen", family: "Other Needled Evergreens", group: "", name: "Eastern Hemlock", clue: "Needles ½–1 in long, two white strips on the back.", sci: "Tsuga canadensis", desc: "Flat oblong needles, dark green above with two whitish bands below, in a flattened spray; small cones 1/2-3/4 in; graceful drooping branches.", botFamily: "Pine family", img: "" },

  /* ── II. Deciduous ─────────────────────────────────────────── */
  { type: "Deciduous", family: "Black Cherry Complex", group: "", name: "Black Cherry", clue: "Leaves 2–5 in long and serrated.", sci: "Prunus serotina", desc: "Oval finely-toothed leaves, bitter and aromatic (as is the bark); clusters of spherical black juicy edible cherries; scaly dark red-brown bark on old trunks.", botFamily: "Rose family", img: "" },
  { type: "Deciduous", family: "Black Cherry Complex", group: "", name: "Black Gum", clue: "Leaves 3–5 in long and non-serrated (borne on pedestals).", sci: "Nyssa sylvatica", desc: "Ovate shiny leaves; short lateral branchlets at right angles to the main branch; dark-blue sour fruit with an indistinctly ribbed stone; deeply furrowed bark.", botFamily: "Tupelo family", img: "" },
  { type: "Deciduous", family: "Black Cherry Complex", group: "", name: "Common Persimmon", clue: "Leaves 2–6 in long, soft and non-serrated.", sci: "Diospyros virginiana", desc: "Smooth-margined ovate leaves; pulpy edible orange fruit about 1 in; dark gray bark broken into small blocks.", botFamily: "Ebony family", img: "" },
  { type: "Deciduous", family: "Black Cherry Complex", group: "", name: "Sourwood", clue: "Leaves 3–7 in long, double-serrated, finely toothed.", sci: "Oxydendrum arboreum", desc: "Long slender leaves with a sour taste, turning bright red in fall; drooping clusters of dry capsules that persist into late autumn.", botFamily: "Heath family", img: "" },

  { type: "Deciduous", family: "Maple Family", group: "", name: "Boxelder", clue: "Three leaflets to a leaf (looks like a boxer).", sci: "Acer negundo", desc: "Opposite ash-like compound leaves with 3-5 coarsely toothed leaflets; green shiny twigs; paired winged fruit persisting after leaf-fall.", botFamily: "Maple family", img: "" },
  { type: "Deciduous", family: "Maple Family", group: "", name: "Red Maple", clue: "Three-lobed leaf, red petiole.", sci: "Acer rubrum", desc: "Opposite 3-5 lobed leaves, green above and silvery below with toothed lobes; red petioles and shiny red twigs; red paired winged fruit in spring.", botFamily: "Maple family", img: "" },
  { type: "Deciduous", family: "Maple Family", group: "", name: "Silver Maple", clue: "Deeply five-lobed leaf, silver-gray on the back side.", sci: "Acer saccharinum", desc: "", botFamily: "Maple family", img: "" },
  { type: "Deciduous", family: "Maple Family", group: "", name: "Sugar Maple", clue: "3–5 lobed leaf, green petiole.", sci: "Acer saccharum", desc: "", botFamily: "Maple family", img: "" },

  { type: "Deciduous", family: "Nut Family", group: "Hickories", name: "Mockernut Hickory", clue: "7, sometimes 9, leaflets to a leaf.", sci: "Carya tomentosa", desc: "Hairy leaf stems and large hairy winter buds (1/2-3/4 in); 7 (sometimes 9) leaflets; 4-ridged nut with a thin hull; dark close interlaced-ridge bark.", botFamily: "Walnut family", img: "" },
  { type: "Deciduous", family: "Nut Family", group: "Hickories", name: "Pignut Hickory", clue: "5, sometimes 7, leaflets; leaf and stem smooth (slick as a pig).", sci: "Carya glabra", desc: "Smooth leaf stems and small smooth winter buds; 5 (sometimes 7) smooth leaflets; small pear-shaped fruit, nut not ridged, hull not splitting freely.", botFamily: "Walnut family", img: "" },
  { type: "Deciduous", family: "Nut Family", group: "Hickories", name: "Shagbark Hickory", clue: "5, sometimes 7, leaflets; leaf and stem smooth (Shaggy).", sci: "Carya ovata", desc: "Bark peeling in long shaggy plates a foot or more long; 5 (sometimes 7) large leaflets hairy below; thick-hulled fruit with a thin-shelled sweet nut.", botFamily: "Walnut family", img: "" },
  { type: "Deciduous", family: "Nut Family", group: "Other Nut Trees", name: "Black Walnut", clue: "Leaves 12–24 in long with 10–24 leaflets, no terminal leaflet.", sci: "Juglans nigra", desc: "Compound leaves usually lacking a terminal leaflet; chambered light-brown pith; spherical fruit with a thick hull and rough edible nut; dark near-black ridged bark.", botFamily: "Walnut family", img: "" },
  { type: "Deciduous", family: "Nut Family", group: "Other Nut Trees", name: "Butternut", clue: "Leaves 15–30 in long with 11–17 leaflets, has a terminal leaf (bud scar looks like a monkey face).", sci: "Juglans cinerea", desc: "Compound leaves with an odd terminal leaflet; dark-brown chambered pith; a velvety collar above each leaf scar; oblong sticky-hairy fruit; edible oily nut.", botFamily: "Walnut family", img: "" },
  { type: "Deciduous", family: "Nut Family", group: "Other Nut Trees", name: "Pecan", clue: "Leaves 12–18 in long with 9–15 curved leaflets.", sci: "Carya illinoinensis", desc: "", botFamily: "Walnut family", img: "" },

  { type: "Deciduous", family: "Oak Family", group: "Red oaks (bristle-tipped lobes)", name: "Black Oak", clue: "Leaves 4–10 in long with 5–7 lobes, hairy below.", sci: "Quercus velutina", desc: "Bristle-tipped lobed leaves, mostly hairy below; acorn half-enclosed in a thin cup; dark near-black deeply ridged bark with deep-orange inner bark.", botFamily: "Beech family", img: "" },
  { type: "Deciduous", family: "Oak Family", group: "Red oaks (bristle-tipped lobes)", name: "Northern Red Oak", clue: "Leaves 5–9 in long with 7–11 short pointed lobes, lacks hairs.", sci: "Quercus rubra", desc: "7-11 short bristle-tipped lobes, nearly hairless; large broad acorn in a shallow cup; upper-trunk bark with smooth gray vertical streaks ('ski trails').", botFamily: "Beech family", img: "" },
  { type: "Deciduous", family: "Oak Family", group: "Red oaks (bristle-tipped lobes)", name: "Sawtooth Oak", clue: "Elliptical leaves with serrated edges and bristle teeth.", sci: "Quercus acutissima", desc: "", botFamily: "Beech family", img: "" },
  { type: "Deciduous", family: "Oak Family", group: "Red oaks (bristle-tipped lobes)", name: "Scarlet Oak", clue: "Leaves 3–6 in long with 7–9 deeply divided lobes; petiole often reddish-green to red.", sci: "Quercus coccinea", desc: "7-9 deeply divided, widely separated bristle-tipped lobes; acorn with 1-2 rings around the tip; round reddish-green petiole; brilliant red fall color.", botFamily: "Beech family", img: "" },
  { type: "Deciduous", family: "Oak Family", group: "Red oaks (bristle-tipped lobes)", name: "Southern Red Oak", clue: "Two leaf forms: three-lobed with a rounded bottom (“southern belle”) or 5–7 lobed.", sci: "Quercus falcata", desc: "3-5 sharply pointed, often curved bristle-tipped lobes with a long narrow central lobe; distinctly rounded (bell-shaped) leaf base; small orange-brown acorn.", botFamily: "Beech family", img: "" },
  { type: "Deciduous", family: "Oak Family", group: "Red oaks (bristle-tipped lobes)", name: "Turkey Oak", clue: "3 or 5 deeply divided lobes, shaped like a turkey’s foot.", sci: "Quercus laevis", desc: "3-5 deeply divided bristle-tipped lobes shaped like a turkey's foot, lobes often curving; bark dark gray-red, nearly black and furrowed into small squares on old trunks.", botFamily: "Beech family", img: "" },
  { type: "Deciduous", family: "Oak Family", group: "White & black oaks (no bristles)", name: "Blackjack Oak", clue: "Leaves 7–9 in long, narrow at base, broad at outer end, hairy below (shaped like a billy club).", sci: "Quercus marilandica", desc: "Leaves broadest at the outer end with 3 (rarely 5) very shallow lobes (pear-section / billy-club shape), hairy below; nearly black bark in square plates.", botFamily: "Beech family", img: "" },
  { type: "Deciduous", family: "Oak Family", group: "White & black oaks (no bristles)", name: "Chestnut Oak", clue: "Leaf shaped like a chestnut tree’s leaf.", sci: "Quercus prinus", desc: "Chestnut-like leaves with wavy, scalloped margins (no bristles); shiny egg-shaped acorn; bark deeply and coarsely furrowed.", botFamily: "Beech family", img: "" },
  { type: "Deciduous", family: "Oak Family", group: "White & black oaks (no bristles)", name: "Live Oak", clue: "2–5 in long, elliptical, margin has a distinct lip.", sci: "Quercus virginiana", desc: "Evergreen, thick leathery oblong leaves hairy below with slightly rolled margins; oblong acorn; low wide-spreading crown.", botFamily: "Beech family", img: "" },
  { type: "Deciduous", family: "Oak Family", group: "White & black oaks (no bristles)", name: "Overcup Oak", clue: "3–7 in long with 5–9 sharp lobes, pointed at the base.", sci: "Quercus lyrata", desc: "5-9 sharp lobes narrowed toward the base; acorn almost or completely enclosed by the cup; gray scaly-plated bark.", botFamily: "Beech family", img: "" },
  { type: "Deciduous", family: "Oak Family", group: "White & black oaks (no bristles)", name: "Water Oak", clue: "Teardrop- or spatula-shaped leaf.", sci: "Quercus nigra", desc: "Teardrop / spatula-shaped leaves, broad and often 3-lobed at the tip, narrow at the base; leaves held into winter; small acorn maturing in two seasons.", botFamily: "Beech family", img: "" },
  { type: "Deciduous", family: "Oak Family", group: "White & black oaks (no bristles)", name: "White Oak", clue: "4–7 in long, divided into finger-like, rounded lobes.", sci: "Quercus alba", desc: "7+ finger-like rounded lobes (no bristles); light gray, ridged or flaky bark; oblong shiny acorn about 1/4-enclosed by the cup.", botFamily: "Beech family", img: "" },

  /* ── Magnolia Family (from Native Trees of Georgia) ── */
  { type: "Evergreen", family: "Magnolia Family", group: "", name: "Southern Magnolia", clue: "Big glossy evergreen leaves, rusty below; huge fragrant white flowers.", sci: "Magnolia grandiflora", desc: "Large evergreen leaves, glossy dark green above and often rusty-hairy below; huge fragrant white flowers; reddish-brown cone-like bur with bright red seeds dangling on threads.", botFamily: "Magnolia family", img: "" },
  { type: "Deciduous", family: "Magnolia Family", group: "", name: "Umbrella Magnolia", clue: "Giant leaves clustered like an umbrella at the branch tips.", sci: "Magnolia tripetala", desc: "Very large leaves (to ~20 in) crowded umbrella-like at the ends of branches, not lobed at the base; light gray smooth bark; oblong red bur.", botFamily: "Magnolia family", img: "" },
  { type: "Deciduous", family: "Magnolia Family", group: "", name: "Fraser Magnolia", clue: "Big leaves with two ear-like lobes at the base.", sci: "Magnolia fraseri", desc: "Large leaves (10–12 in) broadest near the tip with two ear-like lobes at the base, clustered at branch ends; grayish-brown smooth bark; bright red cucumber-like bur.", botFamily: "Magnolia family", img: "" },
  { type: "Evergreen", family: "Magnolia Family", group: "", name: "Sweetbay", clue: "Semi-evergreen; leaves silvery-white below.", sci: "Magnolia virginiana", desc: "Oblong leaves, dark green and shiny above, whitish and hairy below, semi-evergreen; light gray smooth bark; small dull-red bur.", botFamily: "Magnolia family", img: "" },
  { type: "Deciduous", family: "Magnolia Family", group: "", name: "Cucumbertree", clue: "Fruit a small green “cucumber” cone.", sci: "Magnolia acuminata", desc: "Large leaves (6–10 in); fruit a small brown cone resembling a cucumber, red seeds hanging on white threads; smooth twigs and silvery, silky terminal buds.", botFamily: "Magnolia family", img: "" },

  { type: "Deciduous", family: "Beech Family", group: "", name: "American Beech", clue: "Zig-zag stem and cigar buds.", sci: "Fagus grandifolia", desc: "Smooth gray bark; shiny leaves with conspicuous parallel veins and coarse teeth; slender cigar-like winter buds; triangular nut in a bur.", botFamily: "Beech family", img: "" },
  { type: "Deciduous", family: "Miscellaneous", group: "", name: "Catalpa", clue: "Large heart-shaped, elephant-ear-type leaf.", sci: "Catalpa bignonioides", desc: "Large heart-shaped leaves; long slender cylindrical seed pods 10-12 in ('cigar-like'); flaky light-brown bark.", botFamily: "Trumpet-creeper family", img: "" },
  { type: "Deciduous", family: "Miscellaneous", group: "", name: "Eastern Cottonwood", clue: "Deltoid-shaped leaf (“Hershey’s kiss”).", sci: "Populus deltoides", desc: "Triangular (deltoid) leaves shiny above, with a flattened reddish-yellow petiole and very resinous winter buds; cottony seeds; fast-growing.", botFamily: "Willow family", img: "" },
  { type: "Deciduous", family: "Miscellaneous", group: "", name: "Flowering Dogwood", clue: "Leaf veins shaped like a menorah.", sci: "Cornus florida", desc: "Opposite leaves with arching veins; showy white or pink 'flower' bracts; bright red shiny oblong fruit; bark broken into small blocks.", botFamily: "Dogwood family", img: "" },
  { type: "Deciduous", family: "Miscellaneous", group: "", name: "Red Mulberry", clue: "“Cat’s tongue” leaf.", sci: "Morus rubra", desc: "Oval leaves, sometimes 2-3 lobed, rough above and hairy below; blackberry-like fruit; broken twigs show fine silky hairs.", botFamily: "Mulberry family", img: "" },
  { type: "Deciduous", family: "Miscellaneous", group: "", name: "Redbud", clue: "Heart-shaped leaf (“cupid tree”).", sci: "Cercis canadensis", desc: "Heart-shaped smooth-margined leaves; bright purplish-red pea-like flowers before the leaves; small flat reddish pods; smooth red-brown bark.", botFamily: "Pea family", img: "" },
  { type: "Deciduous", family: "Miscellaneous", group: "", name: "Sassafras", clue: "3 leaf shapes, including a mitten and a ghost.", sci: "Sassafras albidum", desc: "Three leaf shapes (entire, mitten, three-lobed 'ghost'); aromatic leaves and twigs; blue berry in a red cup on a red stalk; deeply furrowed red-brown bark.", botFamily: "Laurel family", img: "" },
  { type: "Deciduous", family: "Miscellaneous", group: "", name: "Sweetgum", clue: "Star-shaped leaf.", sci: "Liquidambar styraciflua", desc: "Star-shaped leaves fragrant when crushed; round prickly 'gumball' fruit; branchlets often with corky wings.", botFamily: "Sweetgum family", img: "" },
  { type: "Deciduous", family: "Miscellaneous", group: "", name: "Sycamore", clue: "Leaf “dandruff.”", sci: "Platanus occidentalis", desc: "Creamy-white bark flaking off in brown plates ('camouflage'); large maple-like lobed leaves; a hanging brown seed ball about 1 in; massive trunk.", botFamily: "Plane-tree family", img: "" },
  { type: "Deciduous", family: "Miscellaneous", group: "", name: "Yellow-poplar", clue: "“Cat-face” leaf.", sci: "Liriodendron tulipifera", desc: "Four-lobed 'cat-face' leaves with a notched tip; tulip-like flowers; upright light-brown cone-like fruit persisting after leaf-fall; very tall straight trunk.", botFamily: "Magnolia family", img: "" },

  /* ── Non-native / invasive (Trees Atlanta “Top Invasive Plants” — trees only) ── */
  { type: "Deciduous", family: "Non-native", group: "", native: false, name: "Callery (Bradford) Pear", sci: "Pyrus calleryana", clue: "First tree to flower in early spring; showy white flowers that smell fishy; weak, easily-splitting form.", desc: "Asian pear infamous as the ‘Bradford’ pear; over-planted as a street tree, now widely escaped into the wild.", botFamily: "Rose family", img: "" },
  { type: "Deciduous", family: "Non-native", group: "", native: false, name: "Chinese Elm", sci: "Ulmus parvifolia", clue: "Single-serrated leaves (our native elms are double-serrated); mottled, flaky bark.", desc: "Planted as a tough urban shade tree; seeds heavily and takes over sunny areas. Plant winged elm or disease-resistant American elm instead.", botFamily: "Elm family", img: "" },
  { type: "Deciduous", family: "Non-native", group: "", native: false, name: "Mimosa Tree", sci: "Albizia julibrissin", clue: "Pink pom-pom flowers and fern-like (bipinnate) foliage.", desc: "Also called silk tree; seeds rapidly along roadsides, lots, and waterways, outcompeting native species.", botFamily: "Pea family", img: "" },
  { type: "Deciduous", family: "Non-native", group: "", native: false, name: "Paper Mulberry", sci: "Broussonetia papyrifera", clue: "Furry leaves, tiger-striped gray and reddish-brown bark, unique round fruit.", desc: "Not a true mulberry; shallow-rooted and prone to toppling. Spreads by seed and vegetatively. Plant native sassafras for similar lobed leaves.", botFamily: "Mulberry family", img: "" },
  { type: "Deciduous", family: "Non-native", group: "", native: false, name: "Princess Tree", sci: "Paulownia tomentosa", clue: "Very large leaves; hollow trunk; pecan-shaped seed capsules (vs. catalpa’s cigar-like pod).", desc: "Fast-growing; a single tree can make ~20 million wind- and water-borne seeds. Native look-alike: Southern catalpa.", botFamily: "Paulownia family", img: "" },
  { type: "Deciduous", family: "Non-native", group: "", native: false, name: "Tree of Heaven", sci: "Ailanthus altissima", clue: "Pale gray bark; crushed bark/leaves smell like rancid peanut butter (native sumacs have little smell).", desc: "Also ‘stinking sumac’; aggressive roots damage pavement and foundations and release growth-inhibiting chemicals.", botFamily: "Quassia family", img: "" },

  /* ── More Native Trees of Georgia (added by family) ── */
  { type: "Evergreen", family: "Pine Family", group: "Medium-needled pines (6-9 in)", name: "Pond Pine", clue: "Needles often sprout in tufts along the trunk; cones stay closed for years.", sci: "Pinus serotina", desc: "Needles 6-8 in in bundles of 3-4, often growing in mats along the trunk and branches; glossy egg-shaped cones opening to a disk shape; wet flatwoods.", botFamily: "Pine family", img: "" },
  { type: "Evergreen", family: "Pine Family", group: "Short-needled pines (1-5 in)", name: "Spruce Pine", clue: "Unusually smooth bark, like a hardwood; small cones.", sci: "Pinus glabra", desc: "Soft slender needles 1.5-3 in in bundles of 2; bark unusually smooth and hardwood-like; cones smaller than any other native pine.", botFamily: "Pine family", img: "" },
  { type: "Evergreen", family: "Pine Family", group: "Short-needled pines (1-5 in)", name: "Table Mountain Pine", clue: "Lopsided cones armed with stout, hooked spines.", sci: "Pinus pungens", desc: "Stout twisted needles 1.5-3 in in 2s; cones lopsided at the base with stout hooked spines, often persisting unopened for years; short, branchy trunk.", botFamily: "Pine family", img: "" },
  { type: "Deciduous", family: "Nut Family", group: "Hickories", name: "Shellbark Hickory", clue: "Huge leaves (15-22 in); shaggy bark; largest hickory nut.", sci: "Carya laciniosa", desc: "Very large leaves 15-22 in, hairy below, with persistent leaf stems; shaggy light-gray bark; large fruit with a thick husk and shell.", botFamily: "Walnut family", img: "" },
  { type: "Deciduous", family: "Nut Family", group: "Hickories", name: "Carolina Hickory", clue: "Slender smooth leaflets; small thick-husked fruit; shaggy bark.", sci: "Carya carolinae-septentrionalis", desc: "Usually 5 narrow smooth leaflets; small fruit with a thick husk and a thin-shelled nut; light-gray shaggy bark. The southern shagbark.", botFamily: "Walnut family", img: "" },
  { type: "Deciduous", family: "Nut Family", group: "Hickories", name: "Red Hickory", clue: "Like pignut, but the husk splits freely; bark slightly shaggy.", sci: "Carya ovalis", desc: "Leaves like pignut hickory; small fruit (1-1.25 in) with a thin husk splitting freely to the base; pale-gray, slightly shaggy bark.", botFamily: "Walnut family", img: "" },
  { type: "Deciduous", family: "Nut Family", group: "Hickories", name: "Sand Hickory", clue: "Leaflets silvery and hairy below; fruit covered in yellow scales.", sci: "Carya pallida", desc: "Slender long-pointed leaflets, silvery and hairy below, on hairy petioles; pear-shaped fruit covered with yellow scales; dry sandy uplands.", botFamily: "Walnut family", img: "" },
  { type: "Deciduous", family: "Nut Family", group: "Hickories", name: "Bitternut Hickory", clue: "Flat sulphur-yellow winter buds; bitter kernel; winged hull.", sci: "Carya cordiformis", desc: "Flat, sulphur-yellow, hairy winter buds; slender leaflets; 4-winged fruit with a thin hull and brittle shell; bitter kernel.", botFamily: "Walnut family", img: "" },
  { type: "Deciduous", family: "Oak Family", group: "White & black oaks (no bristles)", name: "Post Oak", clue: "Cross-shaped leaf outline; crooked branches.", sci: "Quercus stellata", desc: "Leaves cross-shaped in outline (deeply 5-lobed, broad rounded lobes); dark-gray finely-checked bark; crooked branches and hairy twigs.", botFamily: "Beech family", img: "" },
  { type: "Deciduous", family: "Oak Family", group: "White & black oaks (no bristles)", name: "Swamp Chestnut Oak", clue: "Chestnut-like leaf, broadest above the middle; flaky silvery bark.", sci: "Quercus michauxii", desc: "Chestnut-like leaves, broadest above the middle and hairy below; silvery-white to ashy-gray flaky bark; large edible acorn. (Basket/cow oak.)", botFamily: "Beech family", img: "" },
  { type: "Deciduous", family: "Oak Family", group: "Red oaks (bristle-tipped lobes)", name: "Shumard Oak", clue: "Shiny 7-9 lobed leaves with hair tufts in the vein axils below.", sci: "Quercus shumardii", desc: "Shiny, deeply 7-9 lobed bristle-tipped leaves with tufts of hair in the vein axils beneath; saucer-shaped acorn cup; wide-spreading crown.", botFamily: "Beech family", img: "" },
  { type: "Deciduous", family: "Oak Family", group: "Red oaks (bristle-tipped lobes)", name: "Willow Oak", clue: "Narrow willow-like leaves with a bristle tip.", sci: "Quercus phellos", desc: "Narrow willow-like leaves pointed at both ends with a bristle tip; small nearly round acorn in a shallow cup; smooth dark-gray bark.", botFamily: "Beech family", img: "" },
  { type: "Deciduous", family: "Oak Family", group: "Red oaks (bristle-tipped lobes)", name: "Laurel Oak", clue: "Elliptic, smooth-margined leaves; nearly evergreen.", sci: "Quercus laurifolia", desc: "Elliptic smooth-margined leaves falling in early spring (nearly evergreen); small dark acorn; bark black and deeply furrowed on old trunks.", botFamily: "Beech family", img: "" },
  { type: "Deciduous", family: "Oak Family", group: "Red oaks (bristle-tipped lobes)", name: "Georgia Oak", clue: "Small 3-5 lobed leaves; often a shrub; a GA rarity.", sci: "Quercus georgiana", desc: "Small leaves (~2.5 in) with 3-5 broadly separated toothed lobes; small shiny acorn in a shallow cup; rarely over 25 ft, often shrubby. A Georgia endemic.", botFamily: "Beech family", img: "" },
  { type: "Deciduous", family: "Oak Family", group: "Red oaks (bristle-tipped lobes)", name: "Bluejack Oak", clue: "Oblong blue-green leaves, smooth margins, pale and hairy below.", sci: "Quercus incana", desc: "Oblong blue-green leaves with smooth margins, pale and hairy below; small acorn; bark in thick nearly-square dark plates; a small dry-hill oak.", botFamily: "Beech family", img: "" },
  { type: "Deciduous", family: "Maple Family", group: "", name: "Chalk Maple", clue: "Small 3-lobed leaves, hairy beneath; often shrubby.", sci: "Acer leucoderme", desc: "Small, usually 3-lobed leaves, thin and hairy beneath with smooth petioles; young bark light-gray and smooth; often little more than a shrub.", botFamily: "Maple family", img: "" },
  { type: "Deciduous", family: "Maple Family", group: "", name: "Florida Maple", clue: "3-5 shallow rounded lobes, hairy below; a southern sugar maple.", sci: "Acer floridanum", desc: "Opposite leaves with 3-5 shallow rounded lobes, hairy below on hairy petioles; smooth pale bark becoming furrowed. The southern sugar maple.", botFamily: "Maple family", img: "" },
  { type: "Deciduous", family: "Elm Family", group: "", name: "American Elm", clue: "Lopsided leaf base; classic vase-shaped crown.", sci: "Ulmus americana", desc: "Elliptical doubly-toothed leaves, lopsided at the base with straight parallel veins; ashy-gray ridged bark; symmetrical vase/fountain-shaped crown.", botFamily: "Elm family", img: "" },
  { type: "Deciduous", family: "Elm Family", group: "", name: "Slippery Elm", clue: "Leaves very rough above; inner bark slippery (mucilaginous).", sci: "Ulmus rubra", desc: "Large leaves (5-7 in) very rough above and hairy below; hairy dark-brown buds; mucilaginous 'slippery' inner bark.", botFamily: "Elm family", img: "" },
  { type: "Deciduous", family: "Elm Family", group: "", name: "Winged Elm", clue: "Small leaves; twigs with two corky wings.", sci: "Ulmus alata", desc: "Small elm leaves (~2 in); branchlets often bearing two thin corky wings; fruit ripens before the leaves open.", botFamily: "Elm family", img: "" },
  { type: "Deciduous", family: "Elm Family", group: "", name: "Sugarberry", clue: "Smooth-margined leaves; pale gray warty bark.", sci: "Celtis laevigata", desc: "Narrow, mostly smooth-margined leaves; small berry-like fruit on short stems; pale-gray bark covered with corky warts. (A hackberry.)", botFamily: "Elm family", img: "" },
  { type: "Deciduous", family: "Elm Family", group: "", name: "Georgia Hackberry", clue: "Rough ovate leaves; warty bark; often shrubby.", sci: "Celtis tenuifolia", desc: "Ovate leaves rough above with toothed margins; small reddish-purple fruit; dark-gray warty bark; often a shrub.", botFamily: "Elm family", img: "" },
  { type: "Deciduous", family: "Birch Family", group: "", name: "River Birch", clue: "Reddish bark peeling in papery curls; streamside.", sci: "Betula nigra", desc: "Doubly-toothed oval leaves; reddish-brown bark peeling in thin, papery, curling layers; grows along streams and rivers.", botFamily: "Birch family", img: "" },
  { type: "Deciduous", family: "Birch Family", group: "", name: "Sweet Birch", clue: "Scraped twigs smell of wintergreen; dark cherry-like bark.", sci: "Betula lenta", desc: "Twigs with a wintergreen odor when scraped; sharply toothed leaves; dark, non-papery, cherry-like bark.", botFamily: "Birch family", img: "" },
  { type: "Deciduous", family: "Birch Family", group: "", name: "American Hornbeam", clue: "Smooth gray trunk with a fluted, muscular look.", sci: "Carpinus caroliniana", desc: "Smooth dark-gray bark over a fluted, muscle-like trunk; doubly-toothed leaves; nutlets on leaf-like bracts. Musclewood / blue beech.", botFamily: "Birch family", img: "" },
  { type: "Deciduous", family: "Birch Family", group: "", name: "Eastern Hophornbeam", clue: "Fruit clusters like hops; shreddy brown bark.", sci: "Ostrya virginiana", desc: "Brown, scaly, shreddy bark; sharply toothed leaves; drooping fruit clusters resembling hops. Also called ironwood.", botFamily: "Birch family", img: "" },
  { type: "Deciduous", family: "Willow Family", group: "", name: "Black Willow", clue: "Long narrow tapering toothed leaves; streamside, multi-trunked.", sci: "Salix nigra", desc: "Long, narrow, tapering, finely-toothed leaves, green and shiny on both sides; often several trunks; grows along water.", botFamily: "Willow family", img: "" },
  { type: "Deciduous", family: "Willow Family", group: "", name: "Swamp Cottonwood", clue: "Large heart-shaped leaves on round (not flattened) stems.", sci: "Populus heterophylla", desc: "Large heart-shaped leaves on round petioles (unlike other poplars' flattened stems); cottony seeds; wet bottomlands.", botFamily: "Willow family", img: "" },
  { type: "Evergreen", family: "Holly Family", group: "", name: "American Holly", clue: "Evergreen spiny leaves; red winter berries.", sci: "Ilex opaca", desc: "Evergreen leathery leaves with spiny-toothed margins; bright red berries persisting through winter; pale-gray warty-smooth bark. The classic native holly.", botFamily: "Holly family", img: "" },
  { type: "Evergreen", family: "Holly Family", group: "", name: "Yaupon", clue: "Small oval leaves with rounded teeth; red berries; caffeinated.", sci: "Ilex vomitoria", desc: "Small oval evergreen leaves with rounded teeth; tiny bright-red berries; the only North American plant that makes caffeine (leaves brewed for tea). Often a thicket shrub.", botFamily: "Holly family", img: "" },
  { type: "Evergreen", family: "Holly Family", group: "", name: "Dahoon", clue: "Narrow evergreen leaves, mostly smooth margins; red berries.", sci: "Ilex cassine", desc: "Narrow evergreen leaves over twice as long as broad, margins smooth or spine-tipped; red autumn berries persisting to spring; wet habitats.", botFamily: "Holly family", img: "" },
  { type: "Deciduous", family: "Tupelo Family", group: "", name: "Water Tupelo", clue: "Large leaves; swollen trunk base; big purple fruit.", sci: "Nyssa aquatica", desc: "Large long-ovate leaves, sometimes toothed; a single large (~1 in) purple sour fruit; trunk base much enlarged in swamps. A relative of black gum.", botFamily: "Tupelo family", img: "" },
  { type: "Deciduous", family: "Tupelo Family", group: "", name: "Swamp Tupelo", clue: "Narrow leaves; ridged fruit stone; swollen base.", sci: "Nyssa biflora", desc: "Narrow smooth-margined leaves; paired dark-blue fruit with a prominently ribbed stone; swollen trunk base; blackwater swamps. (Swamp blackgum.)", botFamily: "Tupelo family", img: "" },
  { type: "Deciduous", family: "Ash Family", group: "", name: "White Ash", clue: "Opposite compound leaves; leaf scar notched beneath the bud.", sci: "Fraxinus americana", desc: "Opposite compound leaves of 5-9 leaflets; leaf scars nearly encircling the bud; bark in close diamond-shaped ridges; winged seed.", botFamily: "Olive family", img: "" },
  { type: "Deciduous", family: "Ash Family", group: "", name: "Green Ash", clue: "Narrow smooth leaflets; leaf scar straight under the bud.", sci: "Fraxinus pennsylvanica", desc: "Opposite compound leaves with narrow finely-toothed leaflets; straight (barely notched) leaf scars; narrow-winged seed; adaptable floodplain tree.", botFamily: "Olive family", img: "" },
  { type: "Deciduous", family: "Beech Family", group: "", name: "American Chestnut", clue: "Long coarsely bristle-toothed leaves; spiny bur.", sci: "Castanea dentata", desc: "Long (6-8 in) leaves with coarse bristle-tipped teeth; shiny nuts 2-3 per spiny bur; once-dominant, now rare from chestnut blight. Kin to oaks and beech.", botFamily: "Beech family", img: "" },
  { type: "Deciduous", family: "Beech Family", group: "", name: "Allegheny Chinkapin", clue: "Smaller chestnut-like leaves, hairy below; one nut per small bur.", sci: "Castanea pumila", desc: "Chestnut-like leaves 3-6 in, usually hairy below; a single rounded nut in a small spiny bur; often shrubby.", botFamily: "Beech family", img: "" },
  { type: "Deciduous", family: "Rose Family", group: "", name: "Hawthorn", clue: "Small lobed leaves; apple-like fruit; thorny twigs.", sci: "Crataegus spp.", desc: "Small variously lobed leaves; smooth red or yellow apple-like fruit; branchlets armed with sharp thorns; usually a small, twisted tree.", botFamily: "Rose family", img: "" },
  { type: "Deciduous", family: "Rose Family", group: "", name: "Downy Serviceberry", clue: "Early white flowers; sweet reddish-purple berries.", sci: "Amelanchier arborea", desc: "Small egg-shaped leaves, whitish-hairy when young; early spring white flowers; round sweetish reddish-purple fruit; smooth ashy-gray bark. (Sarvis / shadbush.)", botFamily: "Rose family", img: "" },
  { type: "Deciduous", family: "Pea Family", group: "", name: "Honeylocust", clue: "Compound leaves; trunk armed with big branched thorns.", sci: "Gleditsia triacanthos", desc: "Once- or twice-compound leaves with many small leaflets; long flat twisted seed pods; trunk and branches often bearing large branched thorns.", botFamily: "Pea family", img: "" },
  { type: "Deciduous", family: "Pea Family", group: "", name: "Black Locust", clue: "Compound leaves; paired spines at the nodes; fragrant white flowers.", sci: "Robinia pseudoacacia", desc: "Compound leaves of oval blue-green leaflets; a pair of short spines at each node; flat 3-4 in pods; deeply furrowed bark; fragrant white flower clusters.", botFamily: "Pea family", img: "" },
  { type: "Deciduous", family: "Miscellaneous", group: "", name: "Painted Buckeye", clue: "Palmately compound leaves fanned at the stem tip; big shiny seeds.", sci: "Aesculus sylvatica", desc: "Opposite palmately-compound leaves (usually 5 leaflets) fanned at the stem end; a leathery pod with large shiny brown seeds; usually a small tree or shrub.", botFamily: "Horse-chestnut family", img: "" },
  { type: "Deciduous", family: "Miscellaneous", group: "", name: "White Basswood", clue: "Big heart-shaped leaves; flowers hang from a leafy bract.", sci: "Tilia heterophylla", desc: "Large, broadly heart-shaped leaves, white-hairy below; flower and fruit clusters hang from a narrow leaf-like bract; soft light wood. (A linden/basswood.)", botFamily: "Linden family", img: "" },
  { type: "Deciduous", family: "Miscellaneous", group: "", name: "Carolina Silverbell", clue: "Drooping white bell flowers; 4-winged fruit.", sci: "Halesia carolina", desc: "Finely-toothed elliptic leaves; drooping bell-shaped white flowers in spring; dry 4-winged fruit; bark with yellowish streaks; often multi-stemmed.", botFamily: "Storax family", img: "" },
];

/* ──────────────────────────────────────────────────────────────
   Tree-dex app
   ────────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  // ── repo target for publishing ──
  const OWNER  = "mariacardelino";
  const REPO   = "mariacardelino.github.io";
  const BRANCH = "main";
  const API    = `https://api.github.com/repos/${OWNER}/${REPO}/contents`;

  // ── catalog prep ──
  const slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  TREES.forEach(t => { t.slug = slugify(t.name); });
  const BY_SLUG  = Object.fromEntries(TREES.map(t => [t.slug, t]));
  const famRank = f => f === "Miscellaneous" ? -1 : f === "Non-native" ? 1 : 0;
  const FAMILIES = [...new Set(TREES.map(t => t.family))]
    .sort((a, b) => famRank(a) - famRank(b));

  // ── catches index (rebuilt after each publish) ──
  let catchIndex = {};  // slug -> [catch, ...]
  function reindexCatches() {
    catchIndex = {};
    (window.CATCHES || []).forEach(c => { (catchIndex[c.tree] ??= []).push(c); });
    for (const k in catchIndex) catchIndex[k].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  }
  reindexCatches();
  const catchesFor = t => catchIndex[t.slug] || [];
  const isFound   = t => catchesFor(t).length > 0;

  // ── state ──
  let activeFamily = "all";
  let showFoundOnly = false;

  // ── tiny DOM helper ──
  const $ = s => document.querySelector(s);
  const el = (tag, attrs = {}, ...kids) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null) continue;
      if (k === "class") n.className = v;
      else if (k === "html") n.innerHTML = v;
      else if (k.startsWith("on") && typeof v === "function") n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v);
    }
    for (const kid of kids) if (kid != null) n.append(kid);
    return n;
  };
  const asset = path => "../" + path;   // repo-root path -> project-page path
  const LEAF_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" ' +
    'stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2.5 1.5 5.5.5 9.5A7 7 0 0 1 8 18"/><path d="M2 22 17 7"/></svg>';

  // ── handles ──
  const famTabs = $("#family-tabs");
  const view    = $("#tree-view");
  const counter = $("#dex-counter");

  // ── filter tabs ──
  function buildTabs() {
    const fams = [["all", "All"], ...FAMILIES.map(f => [f, f])];
    famTabs.append(...fams.map(([f, label]) =>
      el("button", {
        class: "tab" + (f === activeFamily ? " active" : ""),
        type: "button", "data-fam": f,
        onclick: () => { activeFamily = f; syncTabs(); render(); },
      }, label)
    ));
    const toggle = el("button", {
      class: "tab dex-toggle", type: "button",
      onclick: (e) => { showFoundOnly = !showFoundOnly; e.currentTarget.classList.toggle("active", showFoundOnly); render(); },
    }, "Found only");
    famTabs.append(toggle);
  }
  function syncTabs() {
    famTabs.querySelectorAll("[data-fam]").forEach(b =>
      b.classList.toggle("active", b.dataset.fam === activeFamily));
  }

  // ── render dex ──
  function render() {
    const found = TREES.filter(isFound).length;
    counter.textContent = `${found} / ${TREES.length} found`;

    view.innerHTML = "";
    const fams = activeFamily === "all" ? FAMILIES : [activeFamily];
    let shown = 0;

    for (const fam of fams) {
      let items = TREES.filter(t => t.family === fam);
      if (showFoundOnly) items = items.filter(isFound);
      if (!items.length) continue;
      shown += items.length;

      const famFound = items.filter(isFound).length;
      const nonNative = fam === "Non-native";
      const section = el("div", { class: "dex-group" + (nonNative ? " dex-group--invasive" : "") },
        el("div", { class: "dex-group-head" },
          el("h3", {}, nonNative ? "Non-native (invasive)" : fam),
          el("span", { class: "dex-group-count" }, `${famFound}/${items.length}`)));

      const grid = el("div", { class: "dex-grid" });
      for (const t of items) grid.append(dexCard(t));
      section.append(grid);
      view.append(section);
    }
    if (!shown) view.append(el("p", { class: "tree-count" }, "Nothing here yet — go find some trees!"));
  }

  const coverOf = t => { const s = catchesFor(t); return s.find(c => c.cover) || s[0] || null; };

  function dexCard(t) {
    const caught = isFound(t);
    const cover = coverOf(t);
    const n = catchesFor(t).length;

    const media = caught
      ? el("div", { class: "dex-thumb" },
          el("img", { src: asset(cover.img), alt: t.name, loading: "lazy" }),
          n > 1 ? el("span", { class: "dex-badge" }, "×" + n) : null)
      : el("div", { class: "dex-thumb dex-locked", html: LEAF_SVG });

    return el("button", {
      class: "dex-card" + (caught ? " caught" : ""),
      type: "button",
      onclick: () => openDetail(t),
    },
      media,
      el("span", { class: "dex-name" }, t.name),
      caught ? el("span", { class: "dex-status caught" }, "Found") : el("span", { class: "dex-status" }, "Not yet found"));
  }

  /* ── detail modal ─────────────────────────────────────────── */
  function openDetail(t) {
    const catches = catchesFor(t);
    const body = el("div", { class: "modal-card", onclick: e => e.stopPropagation() });

    body.append(el("button", { class: "modal-close", type: "button", "aria-label": "Close", onclick: closeOverlay }, "×"));

    body.append(el("p", { class: "flash-kicker" }, t.family + (t.group ? " · " + t.group : "")));
    body.append(el("h3", { class: "modal-title" }, t.name));
    if (t.sci) body.append(el("p", { class: "tree-sci" }, t.sci));
    if (t.botFamily) body.append(el("p", { class: "tree-fam" }, t.botFamily));
    body.append(el("p", { class: "modal-clue" }, el("strong", {}, "ID: "), t.clue));
    if (t.desc) body.append(el("p", { class: "tree-desc", style: "text-align:left;margin:0 0 6px" }, t.desc));

    if (catches.length) {
      const cover = coverOf(t);
      const coverStatus = el("p", { class: "cap-status" });
      const gal = el("div", { class: "modal-gallery" });
      for (const c of catches) {
        const isCover = c === cover;
        const action = isCover
          ? el("span", { class: "shot-cover-tag" }, "★ Cover")
          : el("button", { class: "cap-link shot-cover-btn", type: "button",
              onclick: () => setCover(t, c, coverStatus) }, "Set as cover");
        gal.append(el("figure", { class: "modal-shot" + (isCover ? " is-cover" : "") },
          el("img", { src: asset(c.img), alt: `${t.name} sighting`, loading: "lazy" }),
          el("figcaption", {},
            [c.date, c.place].filter(Boolean).join(" · ") || "",
            c.notes ? el("span", { class: "shot-notes" }, c.notes) : null,
            action)));
      }
      body.append(gal, coverStatus);
    } else {
      body.append(el("p", { class: "modal-empty" }, "You haven’t found this one yet."));
    }

    body.append(el("button", { class: "go", type: "button", style: "margin-top:16px",
      onclick: () => { closeOverlay(); openCapture(t); } }, "＋ Add a sighting"));

    showOverlay(body);
  }

  async function setCover(t, chosen, statusEl) {
    if (!hasToken()) {
      statusEl.className = "cap-status err";
      statusEl.textContent = "Set up one-tap publishing (＋ → Set up) to choose a cover.";
      return;
    }
    statusEl.className = "cap-status";
    statusEl.textContent = "Updating cover…";
    try {
      const existing = await ghGet("js/catches.js");
      const arr = existing ? parseCatches(b64ToUtf8(existing.content)) : [];
      for (const e of arr) {
        if (e.tree !== t.slug) continue;
        if (e.img === chosen.img) e.cover = true;
        else delete e.cover;
      }
      await ghPut("js/catches.js", utf8ToB64(catchesFileText(arr)),
        `Set ${t.name} cover photo`, existing && existing.sha);
      window.CATCHES = arr;
      reindexCatches();
      render();
      openDetail(t);   // reopen with the new cover reflected
    } catch (err) {
      statusEl.className = "cap-status err";
      statusEl.textContent = "Couldn’t update cover: " + err.message;
    }
  }

  /* ── capture / publish panel ──────────────────────────────── */
  let pendingBlobs = [];
  let capSlug = "";

  function openCapture(preTree) {
    pendingBlobs = [];
    const card = el("div", { class: "modal-card", onclick: e => e.stopPropagation() });
    card.append(el("button", { class: "modal-close", type: "button", "aria-label": "Close", onclick: closeOverlay }, "×"));
    card.append(el("h3", { class: "modal-title" }, "Add a sighting"));

    // tree picker — searchable, grouped by family
    capSlug = preTree ? preTree.slug : "";
    const search = el("input", { class: "cap-input", id: "cap-search", type: "text",
      autocomplete: "off", placeholder: "Search or pick a tree…",
      ...(preTree ? { value: preTree.name } : {}) });
    const results = el("div", { class: "cap-picker-results", id: "cap-results" });

    function renderResults() {
      const q = search.value.trim().toLowerCase();
      // if the text exactly matches the chosen tree, show the full list (browse)
      const chosen = BY_SLUG[capSlug];
      const browse = !q || (chosen && q === chosen.name.toLowerCase());
      results.innerHTML = "";
      let any = false;
      for (const fam of FAMILIES) {
        const items = TREES.filter(t => t.family === fam && (browse ||
          t.name.toLowerCase().includes(q) ||
          fam.toLowerCase().includes(q) ||
          (t.botFamily && t.botFamily.toLowerCase().includes(q)) ||
          (t.sci && t.sci.toLowerCase().includes(q))));
        if (!items.length) continue;
        any = true;
        results.append(el("div", { class: "cap-pick-group" }, fam));
        for (const t of items) {
          results.append(el("button", {
            class: "cap-pick-item" + (t.slug === capSlug ? " active" : ""),
            type: "button",
            onclick: () => { capSlug = t.slug; search.value = t.name; results.innerHTML = ""; },
          }, t.name, el("span", { class: "fam" }, t.botFamily || "")));
        }
      }
      if (!any) results.append(el("div", { class: "cap-pick-none" }, "No match"));
    }
    search.addEventListener("focus", renderResults);
    search.addEventListener("input", () => { capSlug = ""; renderResults(); });

    // photos — take a new photo OR choose from the library (no `capture`), multiple allowed
    const fileInput = el("input", { class: "cap-input", id: "cap-file", type: "file", accept: "image/*", multiple: "" });
    const preview = el("div", { class: "cap-preview", id: "cap-preview" });
    fileInput.addEventListener("change", async () => {
      const files = Array.from(fileInput.files || []);
      preview.innerHTML = "";
      pendingBlobs = [];
      if (!files.length) return;
      preview.textContent = "Processing…";
      try {
        pendingBlobs = await Promise.all(files.map(f => compressImage(f)));
        preview.innerHTML = "";
        for (const b of pendingBlobs)
          preview.append(el("img", { src: URL.createObjectURL(b), alt: "preview" }));
      } catch (err) {
        preview.textContent = "Couldn’t read one of those images.";
        pendingBlobs = [];
      }
    });

    const today = new Date().toISOString().slice(0, 10);
    const dateInput  = el("input", { class: "cap-input", id: "cap-date", type: "date", value: today });
    const placeInput = el("input", { class: "cap-input", id: "cap-place", type: "text", placeholder: "Where? (optional)" });
    const notesInput = el("textarea", { class: "cap-input", id: "cap-notes", rows: "2", placeholder: "Notes (optional)" });

    const status = el("p", { class: "cap-status", id: "cap-status" });
    const submit = el("button", { class: "go", type: "button" }, "Publish to site");
    submit.addEventListener("click", () => doPublish({ dateInput, placeInput, notesInput, status, submit }));

    const settingsLink = el("button", { class: "cap-link", type: "button", onclick: openSettings },
      hasToken() ? "GitHub token set ✓ · change" : "Set up one-tap publishing");

    card.append(
      field("Tree", el("div", { class: "cap-picker" }, search, results)),
      field("Photos", fileInput), preview,
      field("Date", dateInput),
      field("Place", placeInput),
      field("Notes", notesInput),
      status, submit,
      el("div", { class: "cap-foot" }, settingsLink)
    );
    showOverlay(card);
  }
  const field = (label, control) =>
    el("label", { class: "cap-field" }, el("span", { class: "cap-label" }, label), control);

  async function doPublish({ dateInput, placeInput, notesInput, status, submit }) {
    const t = BY_SLUG[capSlug];
    if (!t)                  { status.textContent = "Pick a tree first."; return; }
    if (!pendingBlobs.length) { status.textContent = "Add at least one photo first."; return; }

    const meta = { date: dateInput.value || new Date().toISOString().slice(0, 10),
                   place: placeInput.value.trim(), notes: notesInput.value.trim() };

    if (!hasToken()) { manualFallback(t, meta, status); return; }

    submit.disabled = true;
    status.className = "cap-status";
    const n = pendingBlobs.length;
    try {
      const newEntries = [];
      for (let i = 0; i < n; i++) {
        status.textContent = `Uploading photo ${i + 1} of ${n}…`;
        const path = `images/trees/${t.slug}/${Date.now()}-${i}.jpg`;
        await ghPut(path, await blobToB64(pendingBlobs[i]), `Add ${t.name} sighting photo`);
        newEntries.push({ tree: t.slug, img: path, date: meta.date, place: meta.place, notes: meta.notes });
      }

      status.textContent = "Recording sighting…";
      const existing = await ghGet("js/catches.js");
      const arr = existing ? parseCatches(b64ToUtf8(existing.content)) : [];
      arr.push(...newEntries);
      const fileText = catchesFileText(arr);
      await ghPut("js/catches.js", utf8ToB64(fileText), `Record ${t.name} sighting (${n} photo${n > 1 ? "s" : ""})`, existing && existing.sha);

      // reflect locally right away
      window.CATCHES = arr;
      reindexCatches();
      render();
      status.className = "cap-status ok";
      status.textContent = `Published ${n} photo${n > 1 ? "s" : ""}! Live on the site in ~1 minute.`;
      submit.textContent = "Add another";
      submit.disabled = false;
    } catch (err) {
      status.className = "cap-status err";
      status.textContent = "Publish failed: " + err.message;
      submit.disabled = false;
    }
  }

  function manualFallback(t, meta, status) {
    const names = [];
    const lines = [];
    pendingBlobs.forEach((blob, i) => {
      const fname = `${Date.now()}-${i}.jpg`;
      names.push(fname);
      const url = URL.createObjectURL(blob);
      const a = el("a", { href: url, download: fname });
      document.body.append(a); a.click(); a.remove();
      lines.push(JSON.stringify({ tree: t.slug, img: `images/trees/${t.slug}/${fname}`, date: meta.date, place: meta.place, notes: meta.notes }) + ",");
    });
    const n = pendingBlobs.length;
    status.className = "cap-status";
    status.innerHTML =
      `Saved <b>${n}</b> photo${n > 1 ? "s" : ""} to your downloads. To publish manually:<br>` +
      `1. Put ${n > 1 ? "them" : "it"} in <code>images/trees/${t.slug}/</code><br>` +
      `2. Add ${n > 1 ? "these lines" : "this line"} to the array in <code>js/catches.js</code>:<br>` +
      `<code class="cap-code">${lines.join("\n").replace(/</g, "&lt;")}</code>` +
      `3. Commit &amp; push. (Or set up one-tap publishing below.)`;
  }

  /* ── settings (GitHub token) ──────────────────────────────── */
  const TOKEN_KEY = "treedex_gh_token";
  const hasToken = () => { try { return !!localStorage.getItem(TOKEN_KEY); } catch { return false; } };
  const getToken = () => { try { return localStorage.getItem(TOKEN_KEY) || ""; } catch { return ""; } };

  function openSettings() {
    const card = el("div", { class: "modal-card", onclick: e => e.stopPropagation() });
    card.append(el("button", { class: "modal-close", type: "button", onclick: closeOverlay }, "×"));
    card.append(el("h3", { class: "modal-title" }, "One-tap publishing"));
    card.append(el("p", { class: "tree-desc", style: "text-align:left;max-width:none;margin-bottom:12px" },
      "Create a GitHub fine-grained token with two settings: Repository access → Only select repositories → " +
      "mariacardelino.github.io, and Repository permissions → Contents → Read and write. Paste it below. " +
      "It is stored only on this device and never leaves it except to talk to GitHub."));
    const input = el("input", { class: "cap-input", type: "password", placeholder: "github_pat_…", value: getToken() });
    const status = el("p", { class: "cap-status" });
    const save = el("button", { class: "go", type: "button", style: "margin-top:12px" }, "Save token");
    save.addEventListener("click", async () => {
      const v = input.value.trim();
      try {
        if (!v) { localStorage.removeItem(TOKEN_KEY); status.className = "cap-status"; status.textContent = "Token cleared."; return; }
        localStorage.setItem(TOKEN_KEY, v);
      } catch { status.className = "cap-status err"; status.textContent = "Couldn’t save (private browsing?)."; return; }

      if (!/^github_pat_|^ghp_/.test(v)) {
        status.className = "cap-status err";
        status.textContent = "That doesn’t look like a token — it should start with “github_pat_”. Copy the token value itself, not its name.";
        return;
      }
      status.className = "cap-status"; status.textContent = "Checking token…";
      try {
        const r = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}`, {
          headers: { Authorization: `Bearer ${v}`, Accept: "application/vnd.github+json" } });
        if (r.status === 401) { status.className = "cap-status err"; status.textContent = "Bad credentials — the token value is wrong or truncated. Regenerate it and copy the whole string."; return; }
        if (r.status === 404) { status.className = "cap-status err"; status.textContent = "This token can’t see the repo. In the token’s settings set Repository access → Only select repositories → mariacardelino.github.io."; return; }
        if (!r.ok) { let m = r.status; try { m = (await r.json()).message || m; } catch {} status.className = "cap-status err"; status.textContent = "GitHub error: " + m; return; }
        const data = await r.json();
        if (!data.permissions || !data.permissions.push) {
          status.className = "cap-status err";
          status.textContent = "Token is read-only. Give it Repository permissions → Contents: Read and write, then regenerate.";
          return;
        }
        status.className = "cap-status ok"; status.textContent = "Token works ✓ — you can publish now.";
      } catch (e) {
        status.className = "cap-status err"; status.textContent = "Couldn’t reach GitHub: " + e.message;
      }
    });
    const help = el("a", { class: "cap-link", href: "https://github.com/settings/personal-access-tokens/new", target: "_blank", rel: "noopener noreferrer" }, "Create a token on GitHub ↗");
    card.append(field("Token", input), save, status, el("div", { class: "cap-foot" }, help));
    showOverlay(card);
  }

  /* ── GitHub API helpers ───────────────────────────────────── */
  async function ghGet(path) {
    const r = await fetch(`${API}/${path}?ref=${BRANCH}`, {
      headers: { Authorization: `Bearer ${getToken()}`, Accept: "application/vnd.github+json" } });
    if (r.status === 404) return null;
    if (!r.ok) throw new Error(await ghErr(r));
    return r.json();
  }
  async function ghPut(path, contentB64, message, sha) {
    const body = { message, content: contentB64, branch: BRANCH };
    if (sha) body.sha = sha;
    const r = await fetch(`${API}/${path}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${getToken()}`, Accept: "application/vnd.github+json", "Content-Type": "application/json" },
      body: JSON.stringify(body) });
    if (!r.ok) throw new Error(await ghErr(r));
    return r.json();
  }
  async function ghErr(r) {
    let m = r.status + "";
    try { const j = await r.json(); m = j.message || m; } catch {}
    if (r.status === 401 || r.status === 403) m += " (check token & its permissions)";
    return m;
  }

  /* ── file / image utils ───────────────────────────────────── */
  function loadImage(file) {
    return new Promise((res, rej) => {
      const img = new Image();
      img.onload = () => res(img);
      img.onerror = rej;
      img.src = URL.createObjectURL(file);
    });
  }
  async function compressImage(file, maxDim = 1600, quality = 0.82) {
    const img = await loadImage(file);
    let { naturalWidth: w, naturalHeight: h } = img;
    if (Math.max(w, h) > maxDim) { const s = maxDim / Math.max(w, h); w = Math.round(w * s); h = Math.round(h * s); }
    const c = el("canvas"); c.width = w; c.height = h;
    c.getContext("2d").drawImage(img, 0, 0, w, h);
    return new Promise((res, rej) => c.toBlob(b => b ? res(b) : rej(new Error("encode failed")), "image/jpeg", quality));
  }
  function blobToB64(blob) {
    return new Promise((res, rej) => {
      const fr = new FileReader();
      fr.onload = () => res(String(fr.result).split(",")[1]);
      fr.onerror = rej;
      fr.readAsDataURL(blob);
    });
  }
  function utf8ToB64(str) {
    const bytes = new TextEncoder().encode(str);
    let bin = ""; bytes.forEach(b => bin += String.fromCharCode(b));
    return btoa(bin);
  }
  function b64ToUtf8(b64) {
    const bin = atob(b64.replace(/\s/g, ""));
    const bytes = Uint8Array.from(bin, c => c.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  }
  function parseCatches(text) {
    const i = text.indexOf("["), j = text.lastIndexOf("]");
    if (i < 0 || j < 0) return [];
    try { return JSON.parse(text.slice(i, j + 1)); } catch { return []; }
  }
  function catchesFileText(arr) {
    return "// Published tree sightings — updated by the Tree-dex capture tool.\n" +
           "window.CATCHES = " + JSON.stringify(arr, null, 2) + ";\n";
  }

  /* ── overlay plumbing ─────────────────────────────────────── */
  let overlay = null;
  function showOverlay(card) {
    closeOverlay();
    overlay = el("div", { class: "modal-overlay", onclick: closeOverlay }, card);
    document.body.append(overlay);
    document.addEventListener("keydown", escClose);
  }
  function closeOverlay() {
    if (overlay) { overlay.remove(); overlay = null; }
    document.removeEventListener("keydown", escClose);
  }
  function escClose(e) { if (e.key === "Escape") closeOverlay(); }

  /* ── floating add button ──────────────────────────────────── */
  function buildFab() {
    const fab = el("button", { class: "dex-fab", type: "button", title: "Add a sighting",
      onclick: () => openCapture(null) }, "＋");
    document.body.append(fab);
  }

  // ── init ──
  buildTabs();
  buildFab();
  render();
})();
