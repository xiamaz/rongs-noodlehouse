export default {
	"additives": [
		{
			"id": 0,
			"name": "Farbstoff",
			"name-en": "Food coloring"
		},
		{
			"id": 1,
			"name": "Konservierungsstoff",
			"name-en": "Preservatives"
		},
		{
			"id": 2,
			"name": "Antioxidationsmittel",
			"name-en": "Antioxidants"
		},
		{
			"id": 3,
			"name": "Geschmacksverstärker",
			"name-en": "Flavor enhancers"
		},
		{
			"id": 4,
			"name": "geschwefelt"
		},
		{
			"id": 5,
			"name": "geschwärzt"
		},
		{
			"id": 6,
			"name": "Phosphat"
		},
		{
			"id": 7,
			"name": "Phosphat"
		},
		{
			"id": 8,
			"name": "Milcheiweiß"
		},
		{
			"id": 9,
			"name": "Koffein",
			"name-en": "Caffeine"
		},
		{
			"id": 10,
			"name": "Chinin",
			"name-en": "Chinine"
		},
		{
			"id": 11,
			"name": "Süßungsmittel",
			"name-en": "Artificial sweeteners"
		},
		{
			"id": 12,
			"name": "gewachst"
		},
		{
			"id": 13,
			"name": "Gluten"
		},
		{
			"id": 14,
			"name": "Krebstiere"
		},
		{
			"id": 15,
			"name": "Eier",
			"name-en": "Eggs"
		},
		{
			"id": 16,
			"name": "Fische",
			"name-en": "Fish"
		},
		{
			"id": 17,
			"name": "Erdnüsse",
			"name-en": "Peanuts"
		},
		{
			"id": 18,
			"name": "Soja",
			"name-en": "Soy"
		},
		{
			"id": 19,
			"name": "Milch",
			"name-en": "Milk"
		},
		{
			"id": 20,
			"name": "Schalenfrüchte"
		},
		{
			"id": 21,
			"name": "Sellerie",
			"name-en": "Celery"
		},
		{
			"id": 22,
			"name": "Senf",
			"name-en": "Mustard"
		},
		{
			"id": 23,
			"name": "Sesam",
			"name-en": "Sesame"
		},
		{
			"id": 24,
			"name": "Sulfite"
		},
		{
			"id": 25,
			"name": "Lupinen",
			"name-en": "Lupins"
		},
		{
			"id": 26,
			"name": "Weichtiere",
			"name-en": "Molluscs"
		},
		{
			"id": 27,
			"name": "Gentechnisch verändert",
			"name-en": "Genetically modified"
		}
	],
	"sections": [
		{
			"title": "Speisen",
			"title-en": "A la carte menu",
			"desc": "Unser Tofu und Ramen ist hausgemacht. Alle Speisen wird kein Geschmacksverstärker zugesetzt.",
			"desc-en": "Our tofu and ramen are made in-house. No artificial flavoring is added to all dishes.",
			"subsections": [
				{
					"title": "Tellergerichte",
					"title-en": "Daily menu",
					"desc": "Tageswechselnde Auswahl an Fleischgerichten und veganen Speisen wahlweise mit Reis oder Mantou (chin. Hefekloß).",
					"desc-en": "Changing selection of meat-based and vegetable dishes paired either with rice or mantou (chinese steamed dumplings).",
					"items": [
						{
							"name": "Tagesgericht mit Fleisch",
							"name-en": "Daily special with meat",
							"name-cn": "米饭或馒头盖浇肉菜",
							"desc": "Wahlweise mit Reis oder 3 Scheiben gedämpften Mantou.",
							"desc-en": "Either with rice or 3 slices of steamed mantou.",
							"price": 650,
							"additives": [13, 18, 21]
						},
						{
							"name": "Tagesgericht vegan",
							"name-en": "Daily special vegan",
							"name-cn": "米饭或馒头盖浇素菜",
							"desc": "Wahlweise mit Reis oder 3 Scheiben gedämpften Mantou.",
							"desc-en": "Either with rice or 3 slices of steamed mantou.",
							"price": 650,
							"additives": [13, 18, 21]
						}
					]
				},
				{
					"title": "Traditionelle Nudelgerichte",
					"title-en": "Traditional noodle dishes",
					"desc": "Nudelgerichte mit Ursprung in verschiedenen Regionen Chinas.",
					"desc-en": "Noodle dishes from various regions of china.",
					"items": [
						{
							"name": "Yang Chun Mian",
							"name-cn": "阳春面",
							"desc": "Nudeln in einer leichten Sojasauce-basierten Brühe mit Schweinefleisch garniert mit Frühlingszwiebeln.",
							"desc-en": "Noodles in a light soy sauce based broth served with pork and garnished with scallions.",
							"price": 850,
							"additives": [13, 18]
						},
						{
							"name": "Re Ban Mian",
							"name-cn": "热拌面",
							"desc": "Nudelgericht mit einer Sauce aus Sesampaste und Sojasauce, wahlweise mit Chiliöl.",
							"desc-en": "Noodles mixed with a sauce of sesame paste, soy sauce and optionally chili oil.",
							"price": 850,
							"additives": [13, 18, 23]
						}
					]
				},
				{
					"title": "Ramen",
					"desc": "",
					"items": [
						{
							"name": "Tonkotsu-basis",
							"name-cn": "猪骨汤面",
							"desc": "Hausgemachte Ramen mit herzhafter Schweinebrühe und zart gegartem Schweinebauch (Chashao) sowie verschiedenen Toppings.",
							"desc-en": "Homemade ramen with a pork-based broth, tender pork belly and assorted toppings.",
							"price": 1100,
							"additives": [13, 15, 18, 25]
						},
						{
							"name": "Miso-basis",
							"name-en": "Miso-based",
							"name-cn": "猪骨酱汤面",
							"desc": "Hausgemachte Ramen mit herzhafter Miso-Brühe und zart gegartem Schweinebauch (Chashao) sowie verschiedenen Toppings.",
							"desc-en": "Homemade ramen with a miso-based broth, served with tender pork belly and assorted toppings.",
							"price": 1100,
							"additives": [1, 13, 15, 18, 25]
						},
						{
							"name": "Miso-basis (vegan)",
							"name-en": "Miso-based (vegan)",
							"name-cn": "素汤面",
							"desc": "Ramen in veganer Misobrühe mit würzig mariniertem Tofu und verschiedenen Toppings.",
							"desc-en": "Ramen with a vegan miso-broth, aromatically marinated tofu slices and assorted toppings.",
							"price": 950,
							"additives": [
								1,
								13,
								18,
								25
							]
						}
					]
				},
				{
					"title": "Beilagen",
					"title-en": "Side dishes",
					"desc": "",
					"items": [
						{
							"name": "Edamame (grüne Sojabohnen) mit Meersalz",
							"name-en": "Edamame (green soybeans) with sea salt",
							"desc": "",
							"price": 350,
							"additives": []
						},
						{
							"name": "Frisches Tofu",
							"name-en": "Fresh tofu",
							"desc": "",
							"price": 350,
							"additives": [18]
						},
						{
							"name": "Mariniertes Schweinefleisch",
							"name-en": "Marinated pork",
							"desc": "",
							"price": 350,
							"additives": [18, 23]
						},
						{
							"name": "Mariniertes Rindfleisch",
							"name-en": "Marinated beef",
							"desc": "",
							"price": 350,
							"additives": [18, 23]
						}
					]
				}
			]
		},
		{
			"title": "Getränke",
			"title-en": "Beverages",
			"desc": "",
			"items": [
				{
					"name": "Kaffee",
					"name-en": "Coffee",
					"desc": "",
					"price": 180,
					"additives": [9]
				},
				{
					"name": "Tee",
					"name-en": "Tea",
					"desc": "",
					"price": 180,
					"additives": []
				},
				{
					"name": "Fruchtsaft mit Eiswürfeln",
					"name-en": "Fruit juice with ice cubes",
					"desc": "",
					"price": 180,
					"additives": []
				},
				{
					"name": "Flaschen-/Dosengetränke",
					"name-en": "Packackged beverages",
					"desc": "Auswahl aus Mineralwasser, Red-Bull und Soda.",
					"desc-en": "Selection from mineral water, red bull and soda.",
					"price": 200,
					"additives": [0, 2, 9]
				},
			]
		}
	]
}