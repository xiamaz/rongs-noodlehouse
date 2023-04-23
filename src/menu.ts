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
			"title": "",
			"title-en": "",
			"desc": "",
			"desc-en": "",
			"items": [
			],
			"subsections": [
				{
					"title": "Nudelgerichte nach traditionell chinesischer Art",
          "title-en": "Traditional chinese noodle dishes",
					"desc": "Optional: Ei +1€, Extra Nudeln +3€",
					"items": [
						{
							"name": "Nudelsuppe mit Rindfleisch",
							"name-en": "Beef noodle soup",
							"name-cn": "牛肉面",
							"desc": "Traditionell chinesische Nudelsuppe mit Rindfleisch.",
							"desc-en": "Traditional chinese noodle soup with beef.",
							"pictures": [
								{
									"path": "photos/beef-ramen.jpeg",
									"alt": "Nudelsuppe mit Rindfleisch",
									"alt-de": "Beef Noodle Soup"
								}
							],
							"price": 1000,
							"additives": [13, 15, 18, 25]
						},
            {
							"name": "Nudeln in Chiliöl mit Rindfleisch",
							"name-en": "Chili oil noodles with beef",
							"name-cn": "红油拌面",
							"desc": "Wählbarer Schärfegrad: wenig scharf / scharf / extra-scharf",
							"desc-en": "Spicyness levels: less spicy / spicy / extra-spicy",
							/* "pictures": [
								{
									"path": "photos/beef-ramen.jpeg",
									"alt": "Nudelsuppe mit Rindfleisch",
									"alt-de": "Beef Noodle Soup"
								}
							], */
							"price": 1000,
							"additives": [13, 18, 25]
            },
            {
							"name": "Nudeln in Chiliöl mit Tofu (vegetarisch)",
							"name-en": "Chili oil noodles with tofu",
							"name-cn": "红油拌面",
							"desc": "Wählbarer Schärfegrad: wenig scharf / scharf / extra-scharf",
							"desc-en": "Spicyness levels: less spicy / spicy / extra-spicy",
							/* "pictures": [
								{
									"path": "photos/beef-ramen.jpeg",
									"alt": "Nudelsuppe mit Rindfleisch",
									"alt-de": "Beef Noodle Soup"
								}
							], */
							"price": 1000,
							"additives": [13, 18, 25]
            },
						/* {
							"name": "Nudelsuppe vegetarisch mit Tofu",
							"name-en": "Noodle soup vegetarian",
							"name-cn": "素面",
							"desc": "",
							"desc-en": "",
							"price": 650,
							"additives": [13, 18, 21]
						}, */
            /* {
              "name": "Kalte Nudeln mit Rind/Schwein",
              "name-en": "Cold Noodles with beef/pork",
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
            }, */
            /* {
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
            }, */
            /*
						{
							"name": "Tonkotsu Ramen",
							"name-cn": "猪骨拉面",
							"desc": "Traditionelle Ramen mit herzhafter Schweinebrühe und zart gegartem Schweinebauch (Chashao) sowie verschiedenen Toppings.",
							"desc-en": "Traditional ramen with a pork-based broth, tender pork belly and assorted toppings.",
							"price": 1450,
							"additives": [13, 15, 18, 25]
						},
            */
					]
				},
				{
					"title": "Chinesische Bao",
					"title-en": "Chinese Baos",
					"desc": "",
					"items": [
						{
							"name": "Traditionelle Bao mit Schweinefleisch (2 Stk., gedämpft)",
							"name-en": "Traditional Bao with pork (2 pc., steamed)",
							"name-cn": "猪肉包",
							"desc": "Gedämpfter Hefekloß gefüllt mit Schweinefleisch.",
							"desc-en": "Steamed yeast-dough filled with pork.",
							"price": 500,
							"additives": [13, 18, 21]
						},
            /*
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
            }, */
						/* {
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
						}, */
					]
				},
        /*
				{
					"title": "Beilagen",
					"title-en": "Side dishes",
					"desc": "",
					"items": [
						{
							"name": "Edamame (grüne Sojabohnen) mit Meersalz",
							"name-en": "Edamame (green soybeans) with sea salt",
              "name-cn": "毛豆",
							"desc": "",
							"price": 300,
							"additives": []
						},
						{
							"name": "Chin. Gurkensalat",
							"name-en": "Chinese Cucumber Salad",
              "name-cn": "拍黄瓜",
							"desc": "",
							"price": 300,
							"additives": [18, 23]
						},
						{
							"name": "Kimchi",
							"name-en": "Kimchi",
              "name-cn": "辣白菜",
							"desc": "",
							"price": 300,
							"additives": [18, 23]
						},
					]
				},
        */
       /*
				{
					"title": "Dessert",
					"title-en": "Dessert",
					"desc": "",
					"items": [
						{
							"name": "Traditionelle Bao mit roter Bohnenpaste (2 Stk., gedämpft)",
							"name-en": "Traditional Bao with Red Bean Paste (2 pc., steamed)",
							"name-cn": "豆沙包",
							"desc": "Gedämpfte Baozi aus Hefeteig gefüllt mit süßer roter Bohnenpaste.",
							"desc-en": "Steamed yeast-dough baozi filled with sweet red bean paste.",
							"price": 300,
							"additives": [13, 18, 21]
						},
          ]
        }
        */
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
          "name-cn": "咖啡",
					"desc": "",
					"price": 200,
					"additives": [9]
				},
				{
					"name": "Flaschen-/Dosengetränke",
					"name-en": "Packackged beverages",
          "name-cn": "瓶装饮料",
					"desc": "",
					"desc-en": "",
					"price": 250,
					"additives": [0, 2, 9]
				},
			]
		}
	]
}
