const products = [
  {
    brand: "Gibson",
    model: "Billie Joe Armstrong Les Paul Junior",
    slug: "billie-joe-armstrong-les-paul-junior",
    image:
      "https://images.ctfassets.net/m8onsx4mm13s/67WERaCwmv87IOWYsXVBLB/70b5d45e9a6512f39f40c432b7e6aff8/LPJRBA22S1NH1_front.png?fit=fill&w=250&h=500",
    highlight: false,
    price: 2199,
    stock: 10,
    category: 1,
    subtitle: "Designed by the Green Day Punk Rock Legend",
    description:
      "The new Billie Joe Armstrong Les Paul™ Junior is an exceptional guitar to rock out on, whether you play rock or punk. Designed in collaboration with Green Day’s legendary guitarist, it has everything you need for great tone with no frills to get in your way, including a mahogany neck with a Billie Joe Armstrong SlimTaper™ profile, rosewood fretboard, Graph Tech® nut, and Billie Joe’s signature on the truss rod cover. The mahogany body is equipped with a wraparound bridge/tailpiece and a P-90 DC Dogear pickup. The P-90 DC is our latest hum-canceling design. It features a modernized version of the Sidewinder dual-coil technology that was first developed by Seth Lover in 1958, delivering a hum-free P-90 with the most authentic P-90 tonality yet, retaining the classic sound of a single",
  },
  {
    brand: "Gibson",
    model: "B.B. King Live at the Regal ES-335",
    slug: "bb-king-live-at-the-regal-es-335",
    image:
      "https://images.ctfassets.net/m8onsx4mm13s/3djWs8U7hFdy2TeDVWS4Cu/762d54683ad54e44aae82c988529cfbe/BBES335REAGNB1_front.png?fit=fill&w=250&h=500",
    highlight: false,
    price: 9999,
    stock: 3,
    category: 1,
    subtitle:
      "A Faithful Tribute to a Live Music Icon and a Legendary Guitarist",
    description:
      "Gibson Custom Shop is the pinnacle of craftsmanship, quality, and sound excellence. Each instrument celebrates Gibson's legacy through accuracy, authenticity, and attention to detail",
  },
  {
    brand: "Gibson",
    model: "ES-345",
    slug: "es-335",
    image:
      "https://images.ctfassets.net/m8onsx4mm13s/12TXJZn8a162RJOkPy6Id6/6aeeeacc99df81e32cd8dbfedecb1d40/front-500_500.png?fit=fill&w=250&h=500",
    highlight: false,
    price: 3899,
    stock: 10,
    category: 1,
    subtitle: "The Cornerstone Just Got Smoother",
    description:
      "The Gibson ES-345 boasts a number of aesthetic enhancements over the flagship ES- 335. Crafted with a maple center block and quarter-sawn Adirondack spruce bracing, players will be impressed by the lightweight feel and expanded range of tonal capabilities. The body is wrapped in multi-ply binding and the bound fingerboard has Split Parallelogram inlays exclusive to this model in the ES™ series. The ES-345 is equipped with a variety of high-end appointments like our hand-wired control assembly with Orange Drop® capacitors, Gibson's new Calibrated T-Type humbucking pickups, Vintage Deluxe style tuners, and lightweight aluminum ABR-1 Tune-O-Matic™ bridge and Stop Bar tailpiece anchored with steel thumb-wheels and studs.",
  },
  {
    brand: "Gibson",
    model: "Les Paul Classic",
    slug: "les-paul-classic",
    image:
      "https://images.ctfassets.net/m8onsx4mm13s/iMwUxsLEderS7Pfuhw4tj/998c84993a119646749c2e29f3566447/LPCS00NYNH1_front_500x500.png?fit=fill&w=250&h=500",
    highlight: false,
    price: 2499,
    stock: 15,
    category: 1,
    subtitle: "Classic Vibes and Contemporary Performance, Now in Deep Purple",
    description:
      "The Gibson Les Paul™ Classic combines the early 60s style Les Paul model with some functional and time-tested modifications. As expected, the Les Paul Classic is crafted with a mahogany back and maple top coupled with a SlimTaper mahogany neck and a bound rosewood fingerboard. Burstbucker™ 61R & 61T zebra, open-coil pickups provide classic Gibson tones from the era with a bit of extra punch thanks to the open coils. The control assembly features 4 push-pull pots, which provide choices of coil tapping, phase switching, and Pure Bypassing for functional and versatile sonic variety.",
  },
  {
    brand: "Gibson",
    model: "Dave Mustaine Flying V EXP Limited Edition ",
    slug: "dave-mustaine-flying-v-exp-limited-edition",
    image:
      "https://images.ctfassets.net/m8onsx4mm13s/9fEIkEAYWrzXifYy5BRXh/22586dd2e0ad72b1a6f6ab17ebcb7e6b/CSDMFVEBVONH1_front.png?fit=fill&w=250&h=500",
    highlight: false,
    price: 6999,
    stock: 3,
    category: 1,
    subtitle: "Limited Availability, Unlimited Performance",
    description:
      "Dave Mustaine is the legendary guitarist, vocalist, songwriter, and founder of the multi-platinum selling and Grammy® Award-winning band, MEGADETH. His new Gibson Dave Mustaine Flying V™ EXP Limited Edition delivers the powerful, heavy sound and exceptional playing performance that he demands. The 25.5” scale mahogany neck has a bound ebony fretboard with 24 frets, Mother of Pearl inlays, an Explorer™-style headstock with Grover® Mini Rotomatic® tuners, and a Graph Tech® TUSQ® nut. Dave Mustaine's signature is reproduced on the truss rod cover, and Dave's silhouette is featured on the back of the headstock. The mahogany Flying V-style body has a maple cap (figured maple on the Red Amber Burst version) and is equipped with a Tune-O-Matic™ bridge, a string",
  },
  {
    brand: "Gibson",
    model: "CS-356 Figured Top",
    slug: "cs-356-figured-top",
    image:
      "https://images.ctfassets.net/m8onsx4mm13s/2D998OCqePikgtQVYzAbMA/167345e3f4a7eea0806bc7fc0da1354f/CS356FCGH1E_front_500x500.png?fit=fill&w=250&h=500",
    highlight: false,
    price: 5499,
    stock: 3,
    category: 1,
    subtitle: "Figured Beauty, Solid Tones",
    description:
      "Classic Gibson Custom appointments adorn the Gibson Custom Shop’s CS-356 Figured Top model. While visually similar to Gibson Custom’s ES™ models, the CS-356 is constructed with carved and chambered solid woods, including a stunning figured maple top, for a unique sound all its own that combines elements of archtop, Les Paul™, and semi-hollowbody tones in a deceptive ES-style package. The compact body shape is well balanced and resists feedback while remaining extremely resonant. The sound is captured by a pair of ’57 Classic™ humbucking pickups. The Gibson Custom CS-356 Figured Top",
  },
  {
    brand: "Gibson",
    model: "CS-336 Figured Top",
    slug: "cs-336-figured-top",
    image:
      "https://images.ctfassets.net/m8onsx4mm13s/7r4dZic5HIJpi8W1gnrNXv/81c53c046bf30d282a78d8defd814909/CS336FVSNH1_front_500x500.png?fit=fill&w=250&h=500",
    highlight: false,
    price: 4999,
    stock: 5,
    category: 1,
    subtitle: "Semi-Hollow Tones, Solid Performance",
    description:
      "Gibson Custom Shop is the pinnacle of craftsmanship, quality, and sound excellence. Each instrument celebrates Gibson's legacy through accuracy, authenticity, and attention to detail. While visually similar to Gibson Custom’s ES™ models, the CS-336 Figured Top is constructed with carved and chambered solid woods for a sound all its own that combines elements of archtop, Les Paul™, and semi-hollowbody tones. The compact body shape is well balanced and resists feedback while remaining extremely resonant. The sound is captured by a pair of ’57 Classic™ humbucking pickups. Whether you use it on stage or in the studio, the CS-336 Figured Top is a beautiful - and solid - choice!",
  },
  {
    brand: "Gibson",
    model: "Les Paul Standard 60s Faded",
    slug: "les-paul-standar-60s-faded",
    image:
      "https://images.ctfassets.net/m8onsx4mm13s/6MxQ8vJFZ5tQmfl7tII1OJ/c2ccc7ac14a18e42d9a4e510c5ebd014/LPS6F002HNH1_front.png?fit=fill&w=250&h=500",
    highlight: false,
    price: 2499,
    stock: 10,
    category: 1,
    subtitle: "A Whole Lotta Les - Now in Faded Dress",
    description:
      "The new Les Paul™ Standard returns to the classic design that made it relevant, played, and loved -- shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of innovation and brings authenticity back to life. The Les Paul Standard 60s features a satin nitrocellulose lacquer finish that gives it the look and feel of a long-treasured musical companion. It has a solid mahogany body with an AA figured maple top and a SlimTaper™ 60s-style mahogany neck with a rosewood fingerboard and trapezoid inlays. It's equipped with an ABR-1 Tune-O-Matic™ bridge, aluminum Stop Bar tailpiece, Grover® Rotomatic Kidney tuners, and gold Top Hat knobs with Silver Reflectors and Dial Pointers. The open-coil 60s Burstbucker™ pickups are loaded with A . . .",
  },
  {
    brand: "Gibson",
    model: "SG Standard '61 Faded Maestro Vibrola",
    slug: "sg-standar-61-faded-maestro-vibrol",
    image:
      "https://images.ctfassets.net/m8onsx4mm13s/ItfBKLkgZTLCKxKyTKImM/5c77ef946c0f54f6871ccda804422e8b/SG61VF00AYNH1_front.png?fit=fill&w=250&h=500",
    highlight: false,
    price: 2199,
    stock: 15,
    category: 1,
    subtitle: "The Choice of Legends - Now in a Beautiful Faded Finish",
    description:
      "The SG™ Standard ‘61 Faded Maestro™ Vibrola™ returns to the classic design that made it relevant, played, and loved -- shaping sound across generations and genres of music. It features a satin nitrocellulose lacquer finish that gives it the look and feel of a long-treasured musical companion. As the name implies, the Gibson SG Standard '61 Faded Maestro Vibrola also adds vibrato capability. The Maestro Vibrola offers smooth vibrato effects and the classic styling of the Lyre engraving on the tailpiece cover. Standard features include a SlimTaper™ mahogany neck and a bound rosewood fingerboard. The mahogany body features deeply sculpted body scarfing, a 5-ply teardrop pickguard, and a 22nd-fret neck joint. The nickel-plated hardware includes an ABR-1 Tune-O-Matic™ bridge and Keysto ",
  },
  {
    brand: "Gibson",
    model: "Noel Gallagher 1960 ES-355",
    slug: "noel-gallagher-1960-es-355",
    image:
      "https://images.ctfassets.net/m8onsx4mm13s/lOtZMlyKWEQTboRk9IVMY/c082e1b6cebda05f8587eebb3f0fa682/60ES355NGASSCBG1_front.png?fit=fill&w=250&h=500",
    highlight: false,
    price: 9999,
    stock: 2,
    category: 1,
    subtitle: "Someday You Might Find Your Hero",
    description:
      "Noel Gallagher's affiliation with ES™-style guitars stretches back to the beginning of Oasis, the peak of which was in 1997 when he purchased a 1960 Gibson ES-355. Deemed at the time too nice to play, this was initially intended to remain a collector's piece until finally making it to the stage in the early 00s, where it has remained a constant ever since. Now, 20 years later, Gibson Custom is proud to announce the Noel Gallagher 1960 ES-355. Aged by the Murphy Lab and limited to just 200 units globally, this replication will include all the appointments which make the Gibson ES-355 the pinnacle of guitar craftsmanship, including a multi-ply bound maple body, a mahogany neck and ebony fretboard, a Varitone switch, and a Bigsby® B7 vibrato tailpiece. A reproduced",
  },
  {
    brand: "Gibson",
    model: "Dave Mustaine Flying V EXP Rust In Peace",
    slug: "dave-mustaine-flying-v-exp-rust-in-peace",
    image:
      "https://images.ctfassets.net/m8onsx4mm13s/7EGVlZZhe1yUEQLBQd85hU/786693756ed1660bac3d74eba2b5ff1d/__static.gibson.com_product-images_USA_USA8Y7408_Alien_Tech_Green_front-500_500.png?fit=fill&w=250&h=500",
    highlight: false,
    price: 2999,
    stock: 7,
    category: 1,
    subtitle: "Designed by Metal Icon Dave Mustaine",
    description:
      "Dave Mustaine is the legendary guitarist, vocalist, songwriter, and founder of the multi-platinum selling and Grammy® Award-winning band, MEGADETH. His new Gibson Dave Mustaine Flying V™ EXP Rust In Peace Artist model delivers the powerful, heavy sound and exceptional playing performance that he demands. The 25.5” scale mahogany neck has an ebony fretboard with a compound fretboard radius, 24 medium jumbo frets, two-tone green/pearloid Rust In Peace diamond inlays, an Explorer™-style headstock with Grover® Mini Rotomatic® tuners with Kidney buttons, a Graph Tech® nut, and Dave Mustaine's signature on the truss rod cover. The mahogany Flying V-style body is equipped with a Tune-O-Matic™ bridge, a Stop Bar tailpiece, and a Dave Mustaine signature Seymour Ducan",
  },
  {
    brand: "Gibson",
    model: "Sergio Vallin 1955 Les Paul Goldtop",
    slug: "sergio-vallin-1955-les-paul-goldtop",
    image:
      "https://images.ctfassets.net/m8onsx4mm13s/5nH8rnG69e9iBt9o9OGJaI/73ce591572d9f2e392e72a365c7950a6/front-500_500.png?fit=fill&w=250&h=500",
    highlight: false,
    price: 7999,
    stock: 5,
    category: 1,
    subtitle: "A Goldtop With Lots of Positive Energy",
    description:
      "Sergio Vallín is the talented guitarist for Maná (which is Polynesian for positive energy), the most influential Spanish rock band worldwide, and one of the world's most popular bands regardless of language or genre. His new Gibson artist model has the features and performance he requires, including an ultra-light mahogany body with a two-piece plain maple top and a mahogany neck with a rosewood fretboard and '59 Rounded C profile. It also is equipped with Kluson® reissue tuners, a Bigsby® B7 vibrato, and features custom aging from the Murphy Lab, giving it the look and feel of a cherished vintage guitar. The electronics include a custom P-90 Soapbar pickup in the neck position and a bridge Custombucker, giving it excellent sonic versatility.",
  },
];

module.exports = products;
