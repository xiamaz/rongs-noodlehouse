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
			"title-en": "Menu",
			"desc": "Unser Tofu, Ramen und unsere Dumplings sind allesamt hausgemacht. Allen Speisen wird kein Geschmacksverstärker zugesetzt.",
			"desc-en": "Our tofu, ramen and dumplings are all made in-house. No artificial flavoring is added to all dishes.",
			"items": [
			],
			"subsections": [
				{
					"title": "Nudelgerichte nach traditionell chinesischer Art",
          "title-en": "Traditional chinese noodle dishes",
					"desc": "Optional: Extra Nudeln +2€, Extra Ei +1€",
					"items": [
						{
							"name": "Nudelsuppe mit Schweinefleisch oder Rindfleisch",
							"name-en": "Noodle soup with pork or beef",
							"name-cn": "猪肉面/牛肉面",
							"desc": "",
							"desc-en": "",
							"pictures": [
								{
									"path": "photos/beef-ramen.jpeg",
									"alt": "Nudelsuppe mit Rindfleisch",
									"alt-de": "Beef Noodle Soup"
								}
							],
							"price": 750,
							"additives": [13, 15, 18, 21]
						},
						{
							"name": "Nudelsuppe vegetarisch mit Tofu",
							"name-en": "Noodle soup vegetarian",
							"name-cn": "素面",
							"desc": "",
							"desc-en": "",
							"price": 650,
							"additives": [13, 18, 21]
						},
            {
              "name": "Chinesische Kalte Nudeln mit Rind/Schwein",
              "name-en": "Chinese Cold Noodles with beef/pork",
              "name-cn": "东北冷面",
              "desc": "Mit Eis gekühlte Nudeln mit verschiedenen Toppings, sowie Rindfleisch oder Schweinefleisch-Chashao in würziger Brühe.",
              "desc-en": "Ice-chilled noodles with various toppings, sowie Rindfleisch oder Schweinefleisch-Chashao in a spicy broth.",
              "price": 850,
              "additives": [13, 18, 23],
							"pictures": [
								{
									"path": "photos/cold_noodles_beef.jpeg",
									"alt": "Chinesische Kalte Nudeln",
									"alt-de": "Chinese Cold Noodles"
								}
							],
            },
            {
              "name": "Kalte Nudeln (vegan)",
              "name-en": "Cold Noodles (vegan)",
              "name-cn": "素冷面",
              "desc": "Mit Eis gekühlte Nudeln mit verschiedenen veganen Toppings und Brühe.",
              "desc-en": "Ice-chilled noodles with various vegan toppings and broth.",
              "price": 650,
              "additives": [13, 18, 23],
							"pictures": [
								{
									"path": "photos/cold_noodles_vegan.jpeg",
									"alt": "Kalte Nudeln Vegan",
									"alt-de": "Cold Noodles Vegan"
								}
							],
            },
						{
							"name": "Tonkotsu Ramen",
							"name-cn": "猪骨汤面",
							"desc": "Hausgemachte Ramen mit herzhafter Schweinebrühe und zart gegartem Schweinebauch (Chashao) sowie verschiedenen Toppings.",
							"desc-en": "Homemade ramen with a pork-based broth, tender pork belly and assorted toppings.",
							"price": 1100,
							"additives": [13, 15, 18, 25]
						},
					]
				},
				{
					"title": "Chinesische Teigtaschen und Bao",
					"title-en": "Chinese Dumplings and Baos",
					"desc": "",
					"items": [
						{
							"name": "Traditionelle Bao (4 Stk., gedämpft) mit Schweinefleisch oder Huhn",
							"name-en": "Traditional Bao (4 pc., steamed) with pork or chicken",
							"name-cn": "猪肉包/鸡肉包",
							"desc": "",
							"desc-en": "",
							"price": 600,
							"additives": [13, 18, 21]
						},
            {
							"name": "Gua Bao mit Rind/Schwein/Tofu",
							"name-en": "Gua Bao with Beef/Pork/Tofu",
							"name-cn": "割包",
							"desc": "Gedämpftes Brot belegt mit wahlweise Rind, Schweinefleisch oder Tofu.",
							"desc-en": "Steamed bread stuffed with either beef, pork or tofu.",
							"pictures": [
								{
									"path": "photos/bao_vegan_pork_tofu.jpeg",
									"alt": "Gua Bao",
									"alt-de": "Gua Bao"
								}
							],
							"price": 400,
							"additives": [13, 18, 21]
            },
						{
							"name": "Jiaozi (gekochte chin. Teigtaschen) mit Schweinefleisch",
							"name-en": "Chinese Dumplings with pork filling",
							"name-cn": "猪肉水饺",
							"desc": "",
							"desc-en": "",
							"pictures": [
								{
									"path": "photos/jiaozi.jpeg",
									"alt": "Chinesische Teigtaschen",
									"alt-de": "Chinese Dumplings"
								}
							],
							"price": 650,
							"additives": [13, 18, 21]
						},
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
							"price": 300,
							"additives": []
						},
						{
							"name": "Chin. Gurkensalat",
							"name-en": "Chinese Cucumber Salad",
							"desc": "",
							"price": 300,
							"additives": [18, 23]
						},
						{
							"name": "Kimchi",
							"name-en": "Kimchi",
							"desc": "",
							"price": 300,
							"additives": [18, 23]
						},
					]
				},
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
					"name": "Flaschen-/Dosengetränke",
					"name-en": "Packackged beverages",
					"desc": "",
					"desc-en": "",
					"price": 200,
					"additives": [0, 2, 9]
				},
			]
		}
	]
}
