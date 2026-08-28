// Plant data sourced from the Georgia Native Plant Society
// https://gnps.org/georgias-native-plants/search-native-plants/
const PLANTS = [
  {
    name: "American Beautyberry",
    sci: "Callicarpa americana",
    desc: "Native Americans used the roots, leaves, and branches for medicinal purposes. Crushed leaves repel mosquitos.",
    photo: "https://gnps.org/wp-content/uploads/bfi_thumb/C-americana-main-photo-qx0fso3dsfbjy0djp8cp3zaoprdbb2rkpfw3ytk6n4.jpeg"
  },
  {
    name: "American Holly",
    sci: "Ilex opaca",
    desc: "Evergreen tree; grows best in sun with moist, acidic soil; produces a pyramidal shape with berries.",
    photo: "https://gnps.org/wp-content/uploads/bfi_thumb/Ilex-opaca-fruit-097-qx0fne7zfw3mss1chya24b7kpxd647tsnc410xdqc2.jpg"
  },
  {
    name: "American Snowbell",
    sci: "Styrax americanus",
    desc: "Fragrant small specimen tree; prefers moist, acidic soil in sun to part shade.",
    photo: "https://gnps.org/wp-content/uploads/bfi_thumb/Styrax-americanus-qx0ft6w5l41ae7m8ngh8hujwlgsnl0u7g0xtkcsbci.jpg"
  },
  {
    name: "Bellwort",
    sci: "Uvularia perfoliata",
    desc: "Perennial with yellow flowers; thought that blossoms resemble the uvula. Thrives in part shade with organic soil.",
    photo: "https://gnps.org/wp-content/uploads/bfi_thumb/uvularia-perfoliata-04_10_14-qx0ftj421yi0l54ho3rdw9gwbh4fd36ptpf4sya6qk.jpg"
  },
  {
    name: "Bigleaf Magnolia",
    sci: "Magnolia macrophylla",
    desc: "Large deciduous tree with fragrant flowers; needs loose, moist soil and protection from strong winds.",
    photo: "https://gnps.org/wp-content/uploads/bfi_thumb/Magnolia-macrophylla-2011-qx0g56c2q2fwf87jo4yzsboh9bq4q3f03cdoud0l2w.jpg"
  },
  {
    name: "Birdfoot Violet",
    sci: "Viola pedata",
    desc: "Perennial; requires no care once established in well-drained, sandy soil; a butterfly host plant.",
    photo: "https://gnps.org/wp-content/uploads/bfi_thumb/viola_pedata_04-10-04-qx0g3w9zf6oumc2g5329w5aw5g158xc5l0ewbswvsy.jpg"
  },
  {
    name: "Black Cherry",
    sci: "Prunus serotina",
    desc: "Deciduous tree; wood valued for furniture; fruit and inner bark used medicinally.",
    photo: "https://gnps.org/wp-content/uploads/bfi_thumb/prunus-serotina-3720b-qx0fji615krwqvos7rqnasjw7ijh9bdsg2woip5cjc.jpg"
  },
  {
    name: "Black Cohosh",
    sci: "Actaea racemosa",
    desc: "Perennial; tall flower spikes are showy, particularly against dark backgrounds. Prefers partial shade with moist soil.",
    photo: "https://gnps.org/wp-content/uploads/bfi_thumb/actaea_racemosa_06-06-06-qx0fz3boho43a31o70ax5cy2ujplwm9jl8dk0w1eee.jpg"
  },
  {
    name: "Bloodroot",
    sci: "Sanguinaria canadensis",
    desc: "Spring ephemeral perennial; reddish-orange sap has been used as a dye. Best in partial shade with humus soil.",
    photo: "https://gnps.org/wp-content/uploads/bfi_thumb/2012_Sanguinaria_canadensis_02-qx0g0plo9ebv9wp0qphsfy8nofqd5uowh8tns1mxlm.jpg"
  },
  {
    name: "Blue-eyed Grass",
    sci: "Sisyrinchium angustifolium",
    desc: "Perennial; not a grass at all, but a member of the Iris family. Prefers sun and medium-wet soil.",
    photo: "https://gnps.org/wp-content/uploads/bfi_thumb/Sisyrinchium-angustifolium-05-08-13-qx0fj34m487bl4amnl8m6wcipcllu5q320gwu9rp3m.jpg"
  },
  {
    name: "Blue-stem Goldenrod",
    sci: "Solidago caesia",
    desc: "Perennial characterized by a smooth, purplish-blue stem with arching flower sprays; thrives in part shade.",
    photo: "https://gnps.org/wp-content/uploads/bfi_thumb/solidago-caesia-07_07_14-qx0fhypjycnzpvxc7lrnpojp5s4tn69mkgf17dfmj6.jpg"
  },
  {
    name: "Butterfly Milkweed",
    sci: "Asclepias tuberosa",
    desc: "Perennial; drought-tolerant; a monarch host plant that may rebloom later in summer. Colorful orange flowers.",
    photo: "https://gnps.org/wp-content/uploads/bfi_thumb/asclepias-tuberosa_06_05_14-qx0frjobmjs82s0998vqmrhv66wj43b47vu8bx83fc.jpg"
  },
  {
    name: "Cardinal Flower",
    sci: "Lobelia cardinalis",
    desc: "Perennial with red flowers; attracts hummingbirds; prefers full sun to partial shade near wetlands.",
    photo: "https://gnps.org/wp-content/uploads/bfi_thumb/Lobelia-cardinalis-2374a-qx0fmoucbd4w3b27m5b4qzm4oiu9ce11juhx2gfcsu.jpg"
  },
  {
    name: "Carolina Silverbell",
    sci: "Halesia carolina",
    desc: "Tree with nice yellow fall color and mid-spring blooms; needs moist, acidic soil high in organic matter.",
    photo: "https://gnps.org/wp-content/uploads/bfi_thumb/halesia-caroliniana-qx0fqrh5xipmeh57twoxjym1cmrip676409nxmdwhk.jpg"
  }
];

const btn = document.getElementById("generate");
const card = document.getElementById("plant-card");
const photo = document.getElementById("plant-photo");
const nameEl = document.getElementById("plant-name");
const sciEl = document.getElementById("plant-sci");
const descEl = document.getElementById("plant-desc");

function showRandomPlant() {
  const plant = PLANTS[Math.floor(Math.random() * PLANTS.length)];
  photo.src = plant.photo;
  photo.alt = plant.name + " (" + plant.sci + ")";
  nameEl.textContent = plant.name;
  sciEl.textContent = plant.sci;
  descEl.textContent = plant.desc;
  card.hidden = false;
}

btn.addEventListener("click", showRandomPlant);
