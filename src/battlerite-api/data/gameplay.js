const _ = require('lodash');

const _gameplay = _(
  [
    {
      "typeID": 467463015,
      "name": "703f566d634d4ed6941a9d6d04f92979",
      "devName": "Alchemist",
      "title": "c6c33b0c06574b4f88209383879b8c5b",
      "description": "2cac986aeeed44efa523402f431f343b",
      "icon": "83cd4bf3be6455f4cbbf803035b6d0fe",
      "wideIcon": "e5554b8a15ffc1a499a3807bb3a37b56",
      "battlerites": [
        {
          "typeID": 95572065,
          "name": "4266c79fad284697893a1a92a0d2ab9b",
          "description": "39acb81c415b4fe9b5b0db73c568d41a",
          "tooltipData": [
            {
              "Name": "DamageModifier",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            },
            {
              "Name": "HealingModifier",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "20",
              "MaxValue": "{None}"
            }
          ],
          "icon": "948d85cf5c36f504f8b964acde19ed3e",
          "abilitySlot": "0"
        },
        {
          "typeID": 1178343196,
          "name": "18874a86081e4e3eacaf7cf6765bd9aa",
          "description": "5680ec8240684b8db7630e035bb652e8",
          "tooltipData": [
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "MultiplativeValue",
              "UnitType": "Standard",
              "Value": "9",
              "MaxValue": "3"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "6",
              "MaxValue": "{None}"
            }
          ],
          "icon": "948d85cf5c36f504f8b964acde19ed3e",
          "abilitySlot": "0"
        },
        {
          "typeID": 1945632875,
          "name": "82b48b1b75a24896958d3e33df17ba3a",
          "description": "99882e20ed3f464a9ccaf2b9636f8f0d",
          "tooltipData": [
            {
              "Name": "DamageModifier",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "12",
              "MaxValue": "{None}"
            }
          ],
          "icon": "940ddc80c69eead49bfc8a5066a9afc5",
          "abilitySlot": "1"
        },
        {
          "typeID": 1085194930,
          "name": "96e74152490a4f4fa0511e007e8f5b53",
          "description": "89656bf3555c4f2c87d7de3527ad51ed",
          "tooltipData": [
            {
              "Name": "BonusHeal",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            }
          ],
          "icon": "940ddc80c69eead49bfc8a5066a9afc5",
          "abilitySlot": "1"
        },
        {
          "typeID": 1036877285,
          "name": "ec797c801c3b446b84da99c50941663a",
          "description": "eadc54accbaf457da1cc766f5e4f6fca",
          "tooltipData": [
            {
              "Name": "HasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "33",
              "MaxValue": "{None}"
            }
          ],
          "icon": "46e144a65c818c04eb3d00a21cf513b3",
          "abilitySlot": "2"
        },
        {
          "typeID": 367835534,
          "name": "15cd311f025842cc9c7372df997b88f3",
          "description": "25743ca7d494406eb2bef336f674392b",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "46e144a65c818c04eb3d00a21cf513b3",
          "abilitySlot": "2"
        },
        {
          "typeID": 840506864,
          "name": "cd63e1777916474980ddee26bac948c5",
          "description": "15e8be432b8f4c91adc07404717511bf",
          "tooltipData": [
            {
              "Name": "ShieldValue",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "46e144a65c818c04eb3d00a21cf513b3",
          "abilitySlot": "2"
        },
        {
          "typeID": 1192062762,
          "name": "38e9d2be00ec4ff28559ba9540db9644",
          "description": "9db123ec96cd4536934f7de2f69d2584",
          "tooltipData": [
            {
              "Name": "SlowPercent",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "30",
              "MaxValue": "{None}"
            },
            {
              "Name": "SlowDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            },
            {
              "Name": "Slow",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "b5b19aeaa91c4354a330bd761a1f0d86",
              "MaxValue": "{None}"
            }
          ],
          "icon": "d0c4449b33eef2e4ca2cfa8900910041",
          "abilitySlot": "3"
        },
        {
          "typeID": 330264363,
          "name": "cd3cd40ca4424433972c769e8ac3af37",
          "description": "d7c9683d01c34a88a03af60172480553",
          "tooltipData": [
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "10",
              "MaxValue": "{None}"
            },
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "d0c4449b33eef2e4ca2cfa8900910041",
          "abilitySlot": "3"
        },
        {
          "typeID": 1482266235,
          "name": "2efa0cf2d4be48b3b76b274c50c83740",
          "description": "9157b5fa1dae40b8b8183decc9fe2cff",
          "tooltipData": [
            {
              "Name": "CooldownReduction1",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "CooldownReduction2",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "e45c9dbf4c532ca4c8c8dfca14798771",
          "abilitySlot": "4"
        },
        {
          "typeID": 1739858694,
          "name": "862581728bb64024af54d3a799efc615",
          "description": "4a2ddcaa54b944c49bec376490982344",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            },
            {
              "Name": "Panic",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "1585a81a75fd4738869c06517e1b455d",
              "MaxValue": "{None}"
            },
            {
              "Name": "PanicDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "HasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "30",
              "MaxValue": "{None}"
            },
            {
              "Name": "DamageBreak",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "20",
              "MaxValue": "{None}"
            }
          ],
          "icon": "e45c9dbf4c532ca4c8c8dfca14798771",
          "abilitySlot": "4"
        },
        {
          "typeID": 2056681259,
          "name": "7a405df4073c4fafbc9a90c719a47157",
          "description": "1dc5507ab3634f73b922db556226d4c7",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "e45c9dbf4c532ca4c8c8dfca14798771",
          "abilitySlot": "4"
        },
        {
          "typeID": 531302436,
          "name": "bbdf775b4b154dfd95b14ebaa4d8a7f3",
          "description": "06121d25a831451ab487402ed5bf6adf",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "HasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "33",
              "MaxValue": "{None}"
            },
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "470a917c1ac62c04ea45acc6a35c5f73",
          "abilitySlot": "5"
        },
        {
          "typeID": 569567951,
          "name": "bf023c09461049de88fa30c5ab370655",
          "description": "a6869dcf4c7941e590c42589864f20ad",
          "tooltipData": [
            {
              "Name": "SlowFactor1",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "35",
              "MaxValue": "{None}"
            },
            {
              "Name": "SlowFactor2",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "60",
              "MaxValue": "{None}"
            }
          ],
          "icon": "d2c956821eb75a44e98ec7c47710a0cf",
          "abilitySlot": "6"
        },
        {
          "typeID": 388545879,
          "name": "ec3d0532a2b24e2aac27e72527fe36fe",
          "description": "e874ec87517249608552845306999a6e",
          "tooltipData": [
            {
              "Name": "HasteModifier",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "bbe2697d5982f654d8dab2223790bd77",
          "abilitySlot": "999"
        },
        {
          "typeID": 1810635846,
          "name": "566080934dd34bb49502a9f4952a8f3f",
          "description": "78f0290b5eec44b380762af923d47488",
          "tooltipData": [
            {
              "Name": "Factor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "d0c4449b33eef2e4ca2cfa8900910041",
          "abilitySlot": "3"
        }
      ],
      "ability1": {
        "typeID": 417414898,
        "name": "2a825ff8df4b404094a270d13f61202a",
        "description": "fba6412a9afb47b8b975993378d9ba6a",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "Toxic",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "c62d18f42d314689a554b1a0dd0af2ad",
            "MaxValue": "{None}"
          },
          {
            "Name": "ToxicDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "9",
            "MaxValue": "3"
          },
          {
            "Name": "ToxicDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "6",
            "MaxValue": "{None}"
          }
        ],
        "icon": "4899e76e427dea247935b02bae3d3587",
        "icon128": "948d85cf5c36f504f8b964acde19ed3e"
      },
      "ability2": {
        "typeID": 1672526758,
        "name": "fdfd2428d90b4052ae436454147104d9",
        "description": "c3264ab7ea43407d8b02a252297761e8",
        "tooltipData": [
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "14",
            "MaxValue": "{None}"
          },
          {
            "Name": "RevitalizeHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "RevitalizeDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "4",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy Gain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "Revitalize",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "e77ed159f5204013833d71b8e60611d0",
            "MaxValue": "{None}"
          },
          {
            "Name": "Charges",
            "LocalizedName": "6135f53b9b8641a88832495ac58aaa05",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "RechargeBoost",
            "LocalizedName": "d45b2ca84e304fe9832f713a1d9269a3",
            "SortID": 3,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "{None}"
          }
        ],
        "icon": "3636e4f3b297935458290b4f9c76d23e",
        "icon128": "940ddc80c69eead49bfc8a5066a9afc5"
      },
      "ability3": {
        "typeID": 1140590804,
        "name": "274abd5a9de1436aa70b11ea5898166a",
        "description": "57fec93c966d42938d2c65662cac196e",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2.5",
            "MaxValue": "2.5"
          },
          {
            "Name": "Absorb",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "50",
            "MaxValue": "{None}"
          }
        ],
        "icon": "4556c9c71bc74a54ca958e02c1ed7528",
        "icon128": "46e144a65c818c04eb3d00a21cf513b3"
      },
      "ability4": {
        "typeID": 1390214444,
        "name": "cc024c6ad14641fe87c2fa9ea2da89cd",
        "description": "096d8a09704542b9b32d257575f71b02",
        "tooltipData": [
          {
            "Name": "AirTime",
            "LocalizedName": "c2f75a279186454aa0ad062ef601c9bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.55",
            "MaxValue": "{None}"
          }
        ],
        "icon": "a9dc7d55702986c49b91219b77ffd6b1",
        "icon128": "d0c4449b33eef2e4ca2cfa8900910041"
      },
      "ability5": {
        "typeID": 713746381,
        "name": "ba27f6c1d6414dd7a8c80c581ab3c685",
        "description": "f23cb0a4ec98413e95268efcd01b0c2b",
        "tooltipData": [
          {
            "Name": "PanicDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "Panic",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "1585a81a75fd4738869c06517e1b455d",
            "MaxValue": "{None}"
          },
          {
            "Name": "HasteFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "30",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy Gain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "DamageBreak",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "{None}"
          }
        ],
        "icon": "3cefd4039dc6af0419b780eba83583a6",
        "icon128": "e45c9dbf4c532ca4c8c8dfca14798771"
      },
      "ability6": {
        "typeID": 1272186046,
        "name": "5bd53b30be9b4fd5b307cea45f6039a1",
        "description": "e707ef6de22148d7aff6eae4ef542b32",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.4",
            "MaxValue": "{None}"
          }
        ],
        "icon": "fdbfef40265a775498db0443fa145fb6",
        "icon128": "470a917c1ac62c04ea45acc6a35c5f73"
      },
      "ability7": {
        "typeID": 295907239,
        "name": "be2d6b1ee922465b8362acf5cfc0332d",
        "description": "a2123d6710b947b782a0f321fb1328ef",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 3,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "ImpactDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "18",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowPercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "35",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "80",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirTime",
            "LocalizedName": "c2f75a279186454aa0ad062ef601c9bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.75",
            "MaxValue": "{None}"
          },
          {
            "Name": "Snare",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "b5b19aeaa91c4354a330bd761a1f0d86",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.5",
            "MaxValue": "{None}"
          }
        ],
        "icon": "7b4f46efc6085bc43a7d79bba0d12c7d",
        "icon128": "d2c956821eb75a44e98ec7c47710a0cf"
      }
    },
    {
      "typeID": 259914044,
      "name": "8335978482a94de1a929184211a928df",
      "devName": "Astronomer",
      "title": "32a9c005362d4f008ebd6574c3ca39a4",
      "description": "eb58519153944bbe89c6c4bbe6e79eae",
      "icon": "f3af4ddea533f364e80c70c580ed933d",
      "wideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "battlerites": [
        {
          "typeID": 1339628669,
          "name": "9e0bfecb99554fa0bd5ba0dd303d1b6a",
          "description": "9c60fcf7b0ff4dd1a8cfc9f0b377b39c",
          "tooltipData": [
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            }
          ],
          "icon": "86a75fb294677254e8706e98f7507f8b",
          "abilitySlot": "0"
        },
        {
          "typeID": 638481835,
          "name": "db9b1fcf1c264c2e8a7f264177141d63",
          "description": "6bf92f61926c4cfbb90074c60d0dc45b",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "WeakenFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "86a75fb294677254e8706e98f7507f8b",
          "abilitySlot": "0"
        },
        {
          "typeID": 898299996,
          "name": "85828e28e3dc40ee9c33d3fca1f21f63",
          "description": "a81ae8904b8f450eb107b59c3d2729d6",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "HealingFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "Charges1",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "3",
              "MaxValue": "{None}"
            },
            {
              "Name": "Charges2",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusHeal",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            }
          ],
          "icon": "f13a6cad4bcaa974f8147e8a29a49dfe",
          "abilitySlot": "1"
        },
        {
          "typeID": 1538513615,
          "name": "fc5c705329d64009b72bc8b17d68b73a",
          "description": "e6ca88b55ec0403ab79562f75d1783fb",
          "tooltipData": [
            {
              "Name": "Healing1",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "12",
              "MaxValue": "{None}"
            },
            {
              "Name": "Healing2",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            },
            {
              "Name": "Ticks",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "f13a6cad4bcaa974f8147e8a29a49dfe",
          "abilitySlot": "1"
        },
        {
          "typeID": 539662185,
          "name": "c414c11677c64ced9ee2695b35f22f75",
          "description": "c6d1c12d02c149adaf5fc95301c4eea5",
          "tooltipData": [
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusRange",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "{None}",
              "MaxValue": "{None}"
            }
          ],
          "icon": "6827f63e526ef4d46b82332e042bf06a",
          "abilitySlot": "2"
        },
        {
          "typeID": 1485240119,
          "name": "20abce46def34d8da97984c7b1f4c3dd",
          "description": "c8d063dafc604004804e38f7bc032e0a",
          "tooltipData": [
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            },
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "4",
              "MaxValue": "{None}"
            }
          ],
          "icon": "6827f63e526ef4d46b82332e042bf06a",
          "abilitySlot": "2"
        },
        {
          "typeID": 1982709263,
          "name": "2057fac65b3e431a96d34f522264f35f",
          "description": "4951ec77f69d4f92b4b73e0eee544e1c",
          "tooltipData": [
            {
              "Name": "DamageFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "20",
              "MaxValue": "1200"
            },
            {
              "Name": "HealingFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "20",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "c2d82c257d770664682e9df0dadb6596",
          "abilitySlot": "3"
        },
        {
          "typeID": 648409758,
          "name": "35f0fe2fb30c4099a9ee49b998d337e9",
          "description": "3f6533c55afa4c10b3b44d37bc7e0477",
          "tooltipData": [
            {
              "Name": "DamageAbsorb",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "16",
              "MaxValue": "12"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "c2d82c257d770664682e9df0dadb6596",
          "abilitySlot": "3"
        },
        {
          "typeID": 706989034,
          "name": "9ed8155fc0884bff998dd690ac8c1136",
          "description": "55e0eb0a5e70445ca5f9096a9e2e21e9",
          "tooltipData": [
            {
              "Name": "RecastDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "c2d82c257d770664682e9df0dadb6596",
          "abilitySlot": "3"
        },
        {
          "typeID": 1305849147,
          "name": "86f7f7c004054fd3b7ef6acd4edf41c7",
          "description": "1ce5e521425a4406b3c29f516c5f8a31",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.8",
              "MaxValue": "{None}"
            },
            {
              "Name": "SightRangeReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "{None}",
              "MaxValue": "{None}"
            }
          ],
          "icon": "f138c9c126ce8934bbe8d6ba98327181",
          "abilitySlot": "4"
        },
        {
          "typeID": 527326071,
          "name": "fe63b2d1335a4439816cf0ac3bb2ed04",
          "description": "36b600bc932a49bdb3f6298e4e65fee2",
          "tooltipData": [
            {
              "Name": "ChargeUp",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "MultiplativeValue",
              "UnitType": "ModifierPercent",
              "Value": "25",
              "MaxValue": "{None}"
            }
          ],
          "icon": "f138c9c126ce8934bbe8d6ba98327181",
          "abilitySlot": "4"
        },
        {
          "typeID": 221662229,
          "name": "e1b09a45ec2f46d98a0da3295c7205d4",
          "description": "0b419aa6127245b09c7bd07d640c09c9",
          "tooltipData": [
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "f138c9c126ce8934bbe8d6ba98327181",
          "abilitySlot": "4"
        },
        {
          "typeID": 1088253826,
          "name": "5d208ff1bdf24fb3b37428345a473f10",
          "description": "5f92c21fd26b4f4dab46f222818134fa",
          "tooltipData": [
            {
              "Name": "ChargeUp",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "MultiplativeValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "{None}"
            }
          ],
          "icon": "550d7ec44eda09941a7b713422b042d0",
          "abilitySlot": "5"
        },
        {
          "typeID": 256159723,
          "name": "43718493bdb540028480b9d391edee2f",
          "description": "208d5bd7d24f43ed8e6d0d24beea14ae",
          "tooltipData": [
            {
              "Name": "SlowFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "35",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "49b693a4e0c03df4da87ed18a9b92b8d",
          "abilitySlot": "6"
        },
        {
          "typeID": 1340463384,
          "name": "c7cab3d787ac4fdf996505f03905077a",
          "description": "0dd0898b89d747abbc740cc6b58ae08e",
          "tooltipData": [
            {
              "Name": "Factor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "30",
              "MaxValue": "{None}"
            }
          ],
          "icon": "86a75fb294677254e8706e98f7507f8b",
          "abilitySlot": "0"
        }
      ],
      "ability1": {
        "typeID": 359156696,
        "name": "5ee7309878614c0d98d5f7cb6d587906",
        "description": "24e2dced13de49658d2b526503ad35cd",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "8",
            "MaxValue": "8"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "22",
            "MaxValue": "{None}"
          },
          {
            "Name": "WeakenDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "WeakenPercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "50",
            "MaxValue": "{None}"
          },
          {
            "Name": "Weaken",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "ChargeDuration",
            "LocalizedName": "9374a7bef5ce4d7793ffb78a814db85a",
            "SortID": 1,
            "ValueType": "MultiplativeValue",
            "UnitType": "Second",
            "Value": "8",
            "MaxValue": "1"
          }
        ],
        "icon": "2a7a17496a1dca14ebcc463488367092",
        "icon128": "86a75fb294677254e8706e98f7507f8b"
      },
      "ability2": {
        "typeID": 1142987923,
        "name": "fe4db72bf6eb4bfdaba3d3e34998d1dd",
        "description": "f33bc8ed7b4d47a5897c293886375bef",
        "tooltipData": [
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "14",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "Charges",
            "LocalizedName": "6135f53b9b8641a88832495ac58aaa05",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "RechargeBoost",
            "LocalizedName": "d45b2ca84e304fe9832f713a1d9269a3",
            "SortID": 3,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "{None}"
          }
        ],
        "icon": "8cb52957b3a75304f8071891730be14b",
        "icon128": "f13a6cad4bcaa974f8147e8a29a49dfe"
      },
      "ability3": {
        "typeID": 190593303,
        "name": "8866960957514b7b859c68ee4a5505e6",
        "description": "541b0c50efa24d04a1a12e07748e5bb9",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "10",
            "MaxValue": "10"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirTime",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 1,
            "ValueType": "RangeValue",
            "UnitType": "Second",
            "Value": "0.5",
            "MaxValue": "0.55"
          }
        ],
        "icon": "53bc2127556daab45a3b358753dfcf48",
        "icon128": "6827f63e526ef4d46b82332e042bf06a"
      },
      "ability4": {
        "typeID": 812246817,
        "name": "33bb2096199642268f6777a5a6d16f82",
        "description": "fe6864929b2f4a0baf82f5eae38c22fd",
        "tooltipData": [
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "CounterDuration",
            "LocalizedName": "a307304ca3ed4c0db9d232cf2580f450",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.2",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirDuration",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 1,
            "ValueType": "AdditiveValue",
            "UnitType": "Second",
            "Value": "0.9",
            "MaxValue": "0.2"
          }
        ],
        "icon": "b8e5777bd1f9c8545aaa21b9a2f8a150",
        "icon128": "c2d82c257d770664682e9df0dadb6596"
      },
      "ability5": {
        "typeID": 1273702386,
        "name": "8bc85014fe11487d885a29c1702f4a2b",
        "description": "06fa7478cfa44a8bb7aac92a24a373d2",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3.4",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "ImpactDelay",
            "LocalizedName": "c2f75a279186454aa0ad062ef601c9bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.9",
            "MaxValue": "{None}"
          },
          {
            "Name": "Petrify",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "51eb6130356047ee9f8209ede5f36114",
            "MaxValue": "{None}"
          },
          {
            "Name": "ShieldAmount",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "{None}"
          }
        ],
        "icon": "85b9db13e4b8473449e9681f961cebec",
        "icon128": "f138c9c126ce8934bbe8d6ba98327181"
      },
      "ability6": {
        "typeID": 573257066,
        "name": "98894df43ba34470bc9dc671b4bdada5",
        "description": "8ba48cf88c614c639766254c3444233d",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "18",
            "MaxValue": "{None}"
          },
          {
            "Name": "GradualSnare",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "e6ee239b70b64b0cbdd9525e06acda60",
            "MaxValue": "{None}"
          },
          {
            "Name": "GradualSlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          }
        ],
        "icon": "61f547d44e505ee43b39a337ca6cbcaa",
        "icon128": "550d7ec44eda09941a7b713422b042d0"
      },
      "ability7": {
        "typeID": 1720994662,
        "name": "c922768617b94c0b9bdba8e78023fcbf",
        "description": "58a264a73aab4ae9b1518329e6569cd7",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "100",
            "MaxValue": "2.5"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "100",
            "MaxValue": "2.5"
          },
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "SelfHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "50",
            "MaxValue": "2.5"
          }
        ],
        "icon": "ec50e5fe60386cb468930c8d631b4cc4",
        "icon128": "49b693a4e0c03df4da87ed18a9b92b8d"
      }
    },
    {
      "typeID": 1649551456,
      "name": "0fa51e1bd7c84e4da4ceee830532e406",
      "devName": "BloodPriest",
      "title": "a24b8a203a8d482abc8a15b67cee4b73",
      "description": "8397611c482042ea9a0dc39cf062196e",
      "icon": "d9cffa65b2aa1414e9371fc9b2f4c561",
      "wideIcon": "a7e0c7a6f0fa2ef49bf684950de34567",
      "battlerites": [
        {
          "typeID": 1719729374,
          "name": "df63ad074e564af991071af2da1e4f4d",
          "description": "5dddf626e10d453ab2845fdafbfe54db",
          "tooltipData": [
            {
              "Name": "MovementSpeedFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "6",
              "MaxValue": "{None}"
            },
            {
              "Name": "MaxStacks",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "3",
              "MaxValue": "{None}"
            },
            {
              "Name": "BuffSpeedFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "7",
              "MaxValue": "{None}"
            }
          ],
          "icon": "f561a4d171334264d8f0eac3e9eb6d24",
          "abilitySlot": "0"
        },
        {
          "typeID": 1772535371,
          "name": "510f2144bb4147e28d5f2dc4bb387242",
          "description": "3969c94a77ce40b9a9e4330869e3205b",
          "tooltipData": [],
          "icon": "991db4d450443e9498711ab935bedf13",
          "abilitySlot": "1"
        },
        {
          "typeID": 446319954,
          "name": "82388e9ed19d44049e004cdd8f52a303",
          "description": "17f7da9ad9ac4ec786c0da512f99f3cf",
          "tooltipData": [],
          "icon": "991db4d450443e9498711ab935bedf13",
          "abilitySlot": "1"
        },
        {
          "typeID": 1053820967,
          "name": "a489a6da8deb4357a37883524846979f",
          "description": "8c2a9b8f284849b0b46084c9662f077a",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            },
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            },
            {
              "Name": "SelfHeal",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "0",
              "MaxValue": "{None}"
            }
          ],
          "icon": "991db4d450443e9498711ab935bedf13",
          "abilitySlot": "1"
        },
        {
          "typeID": 715541154,
          "name": "f84de81059a8457a97262e1ef261f153",
          "description": "3498a5fb0d034caa8e389efc049f718b",
          "tooltipData": [
            {
              "Name": "BonusDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "HealthDrain",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "10",
              "MaxValue": "{None}"
            },
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "c9f7e2e324bbed3469cbe356da833c9b",
          "abilitySlot": "2"
        },
        {
          "typeID": 1288323553,
          "name": "a3073a0826ab48eb8d853b0a1526bd8a",
          "description": "76167997097340efabd252f870fbc502",
          "tooltipData": [
            {
              "Name": "EmpowerFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "25",
              "MaxValue": "{None}"
            },
            {
              "Name": "WeakenFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "{None}"
            }
          ],
          "icon": "c9f7e2e324bbed3469cbe356da833c9b",
          "abilitySlot": "2"
        },
        {
          "typeID": 1944863117,
          "name": "3859a36c392941c7a8fa6dd46059efce",
          "description": "da4bd6b030884f9a80bc70ea816ca7ab",
          "tooltipData": [
            {
              "Name": "MaxHits",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "c9f7e2e324bbed3469cbe356da833c9b",
          "abilitySlot": "2"
        },
        {
          "typeID": 669936007,
          "name": "ada087a6e1cb4c58afc3b95181ee1cac",
          "description": "d0d51eb1ac9b4830a221fe81686254ee",
          "tooltipData": [
            {
              "Name": "Reduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "7a1d6423f91ba824d8855aa3e9a42247",
          "abilitySlot": "3"
        },
        {
          "typeID": 1917648819,
          "name": "16b22c022348418ebb434695f05b7bb6",
          "description": "99a383d4babd40179ce7254bbcf31648",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.2",
              "MaxValue": "{None}"
            },
            {
              "Name": "ShieldValue",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "28",
              "MaxValue": "{None}"
            }
          ],
          "icon": "7a1d6423f91ba824d8855aa3e9a42247",
          "abilitySlot": "3"
        },
        {
          "typeID": 1119970458,
          "name": "eacb881cc42c4ca1ab839e00b82a9e89",
          "description": "4ed17b81c9ce4d46ac451f2c15da8854",
          "tooltipData": [
            {
              "Name": "DebuffFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "SlowFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "20",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            }
          ],
          "icon": "7a1d6423f91ba824d8855aa3e9a42247",
          "abilitySlot": "3"
        },
        {
          "typeID": 2077547781,
          "name": "84ba481cc5a64b4e9dd4460618b80e61",
          "description": "de0979be03ab4fcf927fc963ae3753f4",
          "tooltipData": [
            {
              "Name": "BonusDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.6",
              "MaxValue": "{None}"
            }
          ],
          "icon": "7a1d6423f91ba824d8855aa3e9a42247",
          "abilitySlot": "3"
        },
        {
          "typeID": 1004483206,
          "name": "87748a8230294b2f8b0ae01aebd54c37",
          "description": "d1ae558674384cd799a17e66d477fa76",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "afd7ecd77cdb3064690b9f0277a774dd",
          "abilitySlot": "4"
        },
        {
          "typeID": 1558367353,
          "name": "00884ce5f46f4bb781ffdfb101e2ad01",
          "description": "f760d109ee9e44a094ef7f99a278f068",
          "tooltipData": [
            {
              "Name": "BonusRadiusFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "15",
              "MaxValue": "{None}"
            }
          ],
          "icon": "afd7ecd77cdb3064690b9f0277a774dd",
          "abilitySlot": "4"
        },
        {
          "typeID": 583189267,
          "name": "f4931c4184b047c58ca2cbcb035bd79e",
          "description": "21e3e854b0144ed58d520af9c73d83b9",
          "tooltipData": [
            {
              "Name": "BlindFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "90",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            }
          ],
          "icon": "1715e104606fdc64e85d49cdfe15c013",
          "abilitySlot": "6"
        }
      ],
      "ability1": {
        "typeID": 1046839413,
        "name": "f6270a6aa2b5491b8fa162f4363ef529",
        "description": "874f5c248b294404b3f3bc68ff968d65",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy Gain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 4,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "7",
            "MaxValue": "{None}"
          },
          {
            "Name": "SelfHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "Dot",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "Hot",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "Moth",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "f6270a6aa2b5491b8fa162f4363ef529",
            "MaxValue": "{None}"
          }
        ],
        "icon": "84074ec5885d4014080bbd966cb5cf4b",
        "icon128": "f561a4d171334264d8f0eac3e9eb6d24"
      },
      "ability2": {
        "typeID": 1185187021,
        "name": "9abf84d4dfea44f592ac07559fbca365",
        "description": "35bd0add8b9a4c39b980ae0932f9b2fa",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "30",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "30",
            "MaxValue": "{None}"
          },
          {
            "Name": "SelfDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "15",
            "MaxValue": "{None}"
          }
        ],
        "icon": "3a435b2fab970ee4a94afeebcfd34e9f",
        "icon128": "991db4d450443e9498711ab935bedf13"
      },
      "ability3": {
        "typeID": 685365641,
        "name": "5bd90913c2754f0f9975a64443e3a3be",
        "description": "64dbb881ca164f24acd4bceb66e1024d",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "AmplifyFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "25",
            "MaxValue": "{None}"
          },
          {
            "Name": "FortifyFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "75",
            "MaxValue": "{None}"
          },
          {
            "Name": "SelfHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "8",
            "MaxValue": "{None}"
          },
          {
            "Name": "Infest",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "5bd90913c2754f0f9975a64443e3a3be",
            "MaxValue": "{None}"
          }
        ],
        "icon": "615f1dbb9129ebf4da2033d37b16309e",
        "icon128": "c9f7e2e324bbed3469cbe356da833c9b"
      },
      "ability4": {
        "typeID": 260783093,
        "name": "aacca2fdd44044cca68390397ebe5e43",
        "description": "cc4898bf61464f39882a3185911ca858",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Health",
            "LocalizedName": "dcedc6e37a214ef68d7d67a9a2810fe8",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "30",
            "MaxValue": "{None}"
          },
          {
            "Name": "AreaHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "16",
            "MaxValue": "{None}"
          },
          {
            "Name": "AreaDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "18",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "18",
            "MaxValue": "6"
          },
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Panic",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "1585a81a75fd4738869c06517e1b455d",
            "MaxValue": "{None}"
          },
          {
            "Name": "PanicDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.6",
            "MaxValue": "{None}"
          },
          {
            "Name": "HasteFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "25",
            "MaxValue": "{None}"
          },
          {
            "Name": "DamageBreak",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "{None}"
          }
        ],
        "icon": "56b5e80af611af348a10c02ff09fa4d9",
        "icon128": "7a1d6423f91ba824d8855aa3e9a42247"
      },
      "ability5": {
        "typeID": 1406234245,
        "name": "e9d03b86cbec48fea90c36aaed3de469",
        "description": "9e3cebd11687497cadf77f5a452c4e40",
        "tooltipData": [
          {
            "Name": "PanicDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Panic",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "1585a81a75fd4738869c06517e1b455d",
            "MaxValue": "{None}"
          },
          {
            "Name": "DelayDuration",
            "LocalizedName": "c2f75a279186454aa0ad062ef601c9bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.9",
            "MaxValue": "{None}"
          },
          {
            "Name": "HasteFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "25",
            "MaxValue": "{None}"
          },
          {
            "Name": "DamageBreak",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "{None}"
          }
        ],
        "icon": "c399e83429b90d24799451e30b072dba",
        "icon128": "afd7ecd77cdb3064690b9f0277a774dd"
      },
      "ability6": {
        "typeID": 684915595,
        "name": "4a283c31cc5c45659b3698bff7e9ebd3",
        "description": "c2c0fcc2f3884e52a8ec00981a76cd05",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Absorb",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "28",
            "MaxValue": "{None}"
          }
        ],
        "icon": "6ec28926a6f65214ea662fa43e90798b",
        "icon128": "5e6954b1078f956479cc058588a972f4"
      },
      "ability7": {
        "typeID": 832041460,
        "name": "60e084ecaacc4f33ace7c13801453bd9",
        "description": "54c9bdc19a4e48cda96203457d15f28c",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "7",
            "MaxValue": "{None}"
          },
          {
            "Name": "Amount",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "26",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "26",
            "MaxValue": "{None}"
          },
          {
            "Name": "DebuffDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "24",
            "MaxValue": "{None}"
          },
          {
            "Name": "DebuffDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "4",
            "MaxValue": "{None}"
          },
          {
            "Name": "DebuffHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "24",
            "MaxValue": "{None}"
          },
          {
            "Name": "DebuffSelfHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "24",
            "MaxValue": "{None}"
          },
          {
            "Name": "SwarmBuff",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "e635bab2e87c4d3ebe20c06e9f48475f",
            "MaxValue": "{None}"
          }
        ],
        "icon": "5bceec5ba93a2b64aa6201d3a2928c40",
        "icon128": "1715e104606fdc64e85d49cdfe15c013"
      }
    },
    {
      "typeID": 543520739,
      "name": "da0272c6ff4b48bf809f130d8e2dba02",
      "devName": "Druid",
      "title": "d68ee53a5963432484a55fb59932f442",
      "description": "e2fba9b671ed46b6bd86d0114ea55308",
      "icon": "907a9b3d24a8c9f459e02c87d86fa9da",
      "wideIcon": "6f50396e26efe6c4bbad274e2c90b8a4",
      "battlerites": [
        {
          "typeID": 1222687868,
          "name": "c5036b6350464b8aad9f8437e1316d00",
          "description": "df8ced6105da4111a399ccc98d5a7630",
          "tooltipData": [
            {
              "Name": "WeakenFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "40",
              "MaxValue": "{None}"
            },
            {
              "Name": "WeakenDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "e0ead374bbde24c44a10cc34294a6e44",
          "abilitySlot": "0"
        },
        {
          "typeID": 164976104,
          "name": "a366bc53a46a430f87f6a9dac3362d2f",
          "description": "f2a5da58203546acad26e7e42bb8cbcb",
          "tooltipData": [
            {
              "Name": "Factor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "30",
              "MaxValue": "{None}"
            }
          ],
          "icon": "e0ead374bbde24c44a10cc34294a6e44",
          "abilitySlot": "0"
        },
        {
          "typeID": 1031788599,
          "name": "164884ba25144172ad66248405af77c4",
          "description": "809283e5581841478b828fbed925f06e",
          "tooltipData": [
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            },
            {
              "Name": "HealOverTime",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "2b94035c77e083845a78221a5130146e",
          "abilitySlot": "1"
        },
        {
          "typeID": 1039886972,
          "name": "f90b11e5307842c8b591f0629a8ac57a",
          "description": "075f5065158f4662a7a700eda6f6a16b",
          "tooltipData": [
            {
              "Name": "MovementSpeedFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "2b94035c77e083845a78221a5130146e",
          "abilitySlot": "1"
        },
        {
          "typeID": 1519730535,
          "name": "bf9d1739f74f44f4a7d5a614509445ef",
          "description": "edaef29c0c6d43dfa44edc608a5b3a14",
          "tooltipData": [
            {
              "Name": "BonusHealth",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusHealing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "StunDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.8",
              "MaxValue": "{None}"
            },
            {
              "Name": "DelayDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "36048e053d179474491aa317959b3eb7",
          "abilitySlot": "2"
        },
        {
          "typeID": 1179570873,
          "name": "ff0881c6560c4646ae571cea49d9f52e",
          "description": "acc6df82d7ae49a785ff39b3ed5645ac",
          "tooltipData": [
            {
              "Name": "Factor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "40",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "36048e053d179474491aa317959b3eb7",
          "abilitySlot": "2"
        },
        {
          "typeID": 1442859791,
          "name": "1a75cc54f12547a9978404aa2c4344d2",
          "description": "2e1028ef04b14d7a8683e135febe56f5",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            },
            {
              "Name": "Factor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "15",
              "MaxValue": "{None}"
            }
          ],
          "icon": "36048e053d179474491aa317959b3eb7",
          "abilitySlot": "2"
        },
        {
          "typeID": 1887042031,
          "name": "f6cec471991c4d2585cac12c4e6223b9",
          "description": "5f362e7adc92455eb58abb45c46330d7",
          "tooltipData": [
            {
              "Name": "BonusDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "SubtractiveValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "1.5"
            }
          ],
          "icon": "36048e053d179474491aa317959b3eb7",
          "abilitySlot": "2"
        },
        {
          "typeID": 1218444929,
          "name": "45d4697bdb1e4580afc01f28b699b1b5",
          "description": "f9c5038b511e4a32ada5fca6e29d7615",
          "tooltipData": [
            {
              "Name": "BonusHealth",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "SubtractiveValue",
              "UnitType": "Standard",
              "Value": "10",
              "MaxValue": "24"
            },
            {
              "Name": "BonusHealing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            },
            {
              "Name": "Factor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "{None}",
              "MaxValue": "{None}"
            }
          ],
          "icon": "493cac6f13fb41849aaf95ed03fbb488",
          "abilitySlot": "3"
        },
        {
          "typeID": 1975248146,
          "name": "a32e99bb968e4ce19775282a6301e3c6",
          "description": "45f3ee2a294b416da99243444496f4b5",
          "tooltipData": [
            {
              "Name": "HasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "35",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "493cac6f13fb41849aaf95ed03fbb488",
          "abilitySlot": "3"
        },
        {
          "typeID": 551973540,
          "name": "5769ecb46a97488f8591bafc05d6fe97",
          "description": "41747f0652cc4daeb362b6af20eb0ec6",
          "tooltipData": [
            {
              "Name": "HasteDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "HasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "{None}",
              "MaxValue": "{None}"
            }
          ],
          "icon": "493cac6f13fb41849aaf95ed03fbb488",
          "abilitySlot": "3"
        },
        {
          "typeID": 907138108,
          "name": "2df8f682ba9a4b2a82af77d4e37915a8",
          "description": "41c364b0b1474465a8509aec64f68686",
          "tooltipData": [
            {
              "Name": "WeaponChargeFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "{None}"
            }
          ],
          "icon": "4832a1022ed764241a63b8dacc299ee9",
          "abilitySlot": "4"
        },
        {
          "typeID": 197574807,
          "name": "6804f990fa3d41b1b8f98eb598785c9b",
          "description": "b567a382a8fe4640980f4698ccdc801e",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.4",
              "MaxValue": "{None}"
            }
          ],
          "icon": "4832a1022ed764241a63b8dacc299ee9",
          "abilitySlot": "4"
        },
        {
          "typeID": 1514675054,
          "name": "408b9076e75748f8b2a891c66fda7986",
          "description": "e390a07e35ac4c5599ba6120fe777870",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "12",
              "MaxValue": "{None}"
            }
          ],
          "icon": "e9b2bc47e05c69a4a8b9b2220e32b385",
          "abilitySlot": "5"
        },
        {
          "typeID": 1343910309,
          "name": "a4e8fdcce10643c4a5fe6a5f1b2bee5f",
          "description": "519982ba6dfc4a6d9d6eff89928fa4d2",
          "tooltipData": [
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            }
          ],
          "icon": "34ae41690a783384fa15b97097694b71",
          "abilitySlot": "6"
        }
      ],
      "ability1": {
        "typeID": 659588529,
        "name": "982a7b90d25543dcaf551397ff8374a1",
        "description": "e32ce0da0474445187ddc9e080f46a3a",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "Debuff",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "0ff8678a7b4f45a7baa7db9d221ee3d6",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "10"
          },
          {
            "Name": "SlowPercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "40",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "7",
            "MaxValue": "{None}"
          },
          {
            "Name": "ChargeDuration",
            "LocalizedName": "9374a7bef5ce4d7793ffb78a814db85a",
            "SortID": 2,
            "ValueType": "MultiplativeValue",
            "UnitType": "Second",
            "Value": "6",
            "MaxValue": "1"
          }
        ],
        "icon": "b0dbe0a39a5d06140b98946a75ec820f",
        "icon128": "060d343f1bb28c3468e0c10ef6c6385d"
      },
      "ability2": {
        "typeID": 1044812542,
        "name": "e42c11ab18b4485389d62745b3158eeb",
        "description": "e11b83da622c4a8a8d724dd7280397e3",
        "tooltipData": [
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy Gain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Charges",
            "LocalizedName": "6135f53b9b8641a88832495ac58aaa05",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "RechargeBoost",
            "LocalizedName": "d45b2ca84e304fe9832f713a1d9269a3",
            "SortID": 3,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          },
          {
            "Name": "Butterflies",
            "LocalizedName": "e8848bb6cb2843b794ea03d36dadf3d0",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "e8848bb6cb2843b794ea03d36dadf3d0",
            "MaxValue": "{None}"
          },
          {
            "Name": "ButterfliesHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "8",
            "MaxValue": "{None}"
          },
          {
            "Name": "ButterfliesDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "6",
            "MaxValue": "{None}"
          }
        ],
        "icon": "29888d92cd53541448bdd8b754668f79",
        "icon128": "2b94035c77e083845a78221a5130146e"
      },
      "ability3": {
        "typeID": 2594802,
        "name": "efcbf89b9a8d4d8b9763ca8830db7cd6",
        "description": "a604f1d78e21458ebb3d8e27cf532ca2",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "HasteFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "20",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirTime",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.4",
            "MaxValue": "{None}"
          }
        ],
        "icon": "b82beea9c031f50488bcf216700e5ab3",
        "icon128": "36048e053d179474491aa317959b3eb7"
      },
      "ability4": {
        "typeID": 1594360014,
        "name": "50f976c8f4a241cda6ce29e7da8bfb10",
        "description": "dbbf7a5202d84983a42cbf762b322b73",
        "tooltipData": [
          {
            "Name": "Health",
            "LocalizedName": "dcedc6e37a214ef68d7d67a9a2810fe8",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "24",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "30",
            "MaxValue": "5"
          },
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "InitialHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          }
        ],
        "icon": "0bb394e5e98626a4b930765d2731caab",
        "icon128": "493cac6f13fb41849aaf95ed03fbb488"
      },
      "ability5": {
        "typeID": 1414049618,
        "name": "2114b38537b04a45a5eb051bc5e21b29",
        "description": "24ba28e1bac94ad7ab29cf84f9297d00",
        "tooltipData": [
          {
            "Name": "Energy Gain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "15",
            "MaxValue": "{None}"
          },
          {
            "Name": "ImpactDelay",
            "LocalizedName": "c2f75a279186454aa0ad062ef601c9bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.1",
            "MaxValue": "{None}"
          },
          {
            "Name": "Stun",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "4c898668b22b487786e7382d634603e7",
            "MaxValue": "{None}"
          },
          {
            "Name": "StunDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.8",
            "MaxValue": "{None}"
          }
        ],
        "icon": "5e237a7cecea64549a98c08fca0b5618",
        "icon128": "4832a1022ed764241a63b8dacc299ee9"
      },
      "ability6": {
        "typeID": 908088907,
        "name": "94224d977f0a403abe7a12b7a6cbf3e2",
        "description": "6b87b089e86b4e2c85edfe5e13ac4bf6",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "{None}"
          }
        ],
        "icon": "7b1daf74e684cb44ba2fe2c303d76b9e",
        "icon128": "e9b2bc47e05c69a4a8b9b2220e32b385"
      },
      "ability7": {
        "typeID": 6683886,
        "name": "e2c2ad03fdc340e281e8f5db9adb9f13",
        "description": "65c484ea51b7459c8a4b20164864b337",
        "tooltipData": [
          {
            "Name": "ChannelDuration",
            "LocalizedName": "171abb321fe24867a96d497e7771f113",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2.1",
            "MaxValue": "4"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "4"
          },
          {
            "Name": "ProjectileAmount",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "3",
            "MaxValue": "4"
          },
          {
            "Name": "WeakenDebuff",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "43445ed05b4b429ab98fafd501b38516",
            "MaxValue": "{None}"
          },
          {
            "Name": "WeakenPercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "50",
            "MaxValue": "{None}"
          },
          {
            "Name": "WeakenDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirTime",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.5",
            "MaxValue": "{None}"
          }
        ],
        "icon": "33b3eb25f11b4b84aa983413588a02e5",
        "icon128": "34ae41690a783384fa15b97097694b71"
      }
    },
    {
      "typeID": 842211418,
      "name": "cb26b90df02745c8b035f856a7bba58d",
      "devName": "Engineer",
      "title": "e946a1b95fda45a4b50a6f7e50e97837",
      "description": "ed49f7e7331c4a43a8569040a8403cf2",
      "icon": "423d20132a1e9224d92e489664702e03",
      "wideIcon": "decba44679fbdae4bb7d0d1cb6a97682",
      "battlerites": [
        {
          "typeID": 375551535,
          "name": "82abe47acb834b08b3097b62e30b7974",
          "description": "c44375ad4c4a45b3b573f3ce9d7ab277",
          "tooltipData": [
            {
              "Name": "Amount",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusCooldown",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.5",
              "MaxValue": "4"
            }
          ],
          "icon": "d80cae4dd7699264fb3c37675b59f263",
          "abilitySlot": "1"
        },
        {
          "typeID": 76947494,
          "name": "cf50178b63d141da8c1fe00782210e12",
          "description": "dbd917e8eae041b28e076022135b1b55",
          "tooltipData": [
            {
              "Name": "GradualSlow",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "e6ee239b70b64b0cbdd9525e06acda60",
              "MaxValue": "{None}"
            },
            {
              "Name": "GradualSlowDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "GradualSlowDuration2",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.7",
              "MaxValue": "{None}"
            }
          ],
          "icon": "d80cae4dd7699264fb3c37675b59f263",
          "abilitySlot": "1"
        },
        {
          "typeID": 1524594848,
          "name": "b4bcd7a5852540b992f17e5149162afb",
          "description": "f45fcd9ab4c442f0a46b8be80157fda1",
          "tooltipData": [
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            }
          ],
          "icon": "d80cae4dd7699264fb3c37675b59f263",
          "abilitySlot": "1"
        },
        {
          "typeID": 1018819281,
          "name": "96d449b9a057438081680729ef933b81",
          "description": "467bd2f825ac44818e3e78d80b3e240b",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            }
          ],
          "icon": "7442381b626556c4e8193c48031d01ef",
          "abilitySlot": "2"
        },
        {
          "typeID": 133871048,
          "name": "fb247c5fe630404a884c7fa4e780488c",
          "description": "186121fbbb6a4cef8d7e625f2f3c04c1",
          "tooltipData": [],
          "icon": "7442381b626556c4e8193c48031d01ef",
          "abilitySlot": "2"
        },
        {
          "typeID": 334194286,
          "name": "97aefe826f9f45f0b8f3c5a1e71b77ce",
          "description": "11cb5696aa1b4f6da879f33ed643bf6c",
          "tooltipData": [
            {
              "Name": "Factor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "7442381b626556c4e8193c48031d01ef",
          "abilitySlot": "2"
        },
        {
          "typeID": 1264111974,
          "name": "2c387fc1390e4793b1e315d9ac50d4cc",
          "description": "0912e41b27f74750a9033a6b92379329",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "0",
              "MaxValue": "{None}"
            },
            {
              "Name": "HasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "30",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "9274b3f40ab2b4048b5cde1e9164901e",
          "abilitySlot": "3"
        },
        {
          "typeID": 1571007052,
          "name": "adf9cb2e8da34b90ad321c0d7acc8a4e",
          "description": "75df79d14184481da064f3edaa5e61fa",
          "tooltipData": [
            {
              "Name": "AttackSpeedBonus",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Percent",
              "Value": "120",
              "MaxValue": "{None}"
            },
            {
              "Name": "ReloadSpeedBonus",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Percent",
              "Value": "50",
              "MaxValue": "{None}"
            }
          ],
          "icon": "9274b3f40ab2b4048b5cde1e9164901e",
          "abilitySlot": "3"
        },
        {
          "typeID": 245016287,
          "name": "3e3aab86c6e943caa6cf33c5e24c628e",
          "description": "c4b76717be294425912cf6b1440dc19a",
          "tooltipData": [
            {
              "Name": "BonusShield",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "12",
              "MaxValue": "{None}"
            },
            {
              "Name": "AllyBonusShield",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "16",
              "MaxValue": "{None}"
            }
          ],
          "icon": "9274b3f40ab2b4048b5cde1e9164901e",
          "abilitySlot": "3"
        },
        {
          "typeID": 1419637141,
          "name": "1d3b86cab31d4fe4bde995d98d5bab11",
          "description": "78761dfa7a0042a792efc00431d862cc",
          "tooltipData": [],
          "icon": "c9cd772b84da5454e9888a19fa249483",
          "abilitySlot": "4"
        },
        {
          "typeID": 1262470819,
          "name": "af80c8d3a4684c78934a235effa1e03f",
          "description": "4c846db68c31437e98916a017dbee384",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            }
          ],
          "icon": "c9cd772b84da5454e9888a19fa249483",
          "abilitySlot": "4"
        },
        {
          "typeID": 1923549832,
          "name": "9e530f5064044cc28a66d28003c746c0",
          "description": "bfb0f9805a464da39e423ae4cf54e46d",
          "tooltipData": [],
          "icon": "c9cd772b84da5454e9888a19fa249483",
          "abilitySlot": "4"
        },
        {
          "typeID": 1922195708,
          "name": "9703fb85e3d648cdab4289d7ba02375b",
          "description": "48d44fded16e4d0793363807d90f969e",
          "tooltipData": [
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "fadd8bcda43b2f54aa66dd5d12795a53",
          "abilitySlot": "5"
        },
        {
          "typeID": 138537323,
          "name": "60b71223ec7741fda76dfe7ac170a1e6",
          "description": "2f014b62c6b742ffaed6aea0021b87c7",
          "tooltipData": [
            {
              "Name": "EnergyGain",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Percent",
              "Value": "{None}",
              "MaxValue": "{None}"
            }
          ],
          "icon": "7dc5f22ab9743154eb85f40db35cf33b",
          "abilitySlot": "6"
        },
        {
          "typeID": 97302286,
          "name": "054b62014ff14ef881b1a437d11ce3f1",
          "description": "de36500efa954166a32dbbeee6e93b03",
          "tooltipData": [
            {
              "Name": "SlowFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "a001d096a99f9a84da3e8b1056dc0535",
          "abilitySlot": "999"
        },
        {
          "typeID": 1369609980,
          "name": "f65c39fbf51e4f9ca207fd7d42fb339f",
          "description": "576bbc887f1e4e4789a1ba6b7a7828ed",
          "tooltipData": [
            {
              "Name": "EnergyBonus",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Percent",
              "Value": "25",
              "MaxValue": "{None}"
            },
            {
              "Name": "EnergyFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "61e058b8f4b79f4419ec1496f223ee36",
          "abilitySlot": "999"
        }
      ],
      "ability1": {
        "typeID": 834018229,
        "name": "3fb824cb605a43e9bd672aa0a1e95b2d",
        "description": "ea497081a2a2493d92fb733bed5e858b",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "16",
            "MaxValue": "4"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "MultiplativeValue",
            "UnitType": "Percent",
            "Value": "8",
            "MaxValue": "4"
          },
          {
            "Name": "ProjectileAmount",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "4",
            "MaxValue": "{None}"
          },
          {
            "Name": "ReloadDuration",
            "LocalizedName": "f978a8f83cbe449ea3da837bc8697897",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          }
        ],
        "icon": "3f93f995f4dc1c946b4aa663f9ec6c8d",
        "icon128": "c0f52d4df52c7ef4ab3b9e96cdd7d7a5"
      },
      "ability2": {
        "typeID": 1240421213,
        "name": "567ccc0e749b439d8e85bc908aef27dc",
        "description": "3f27ef2110504b72b5ced78e43e81244",
        "tooltipData": [
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "9",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "26",
            "MaxValue": "{None}"
          },
          {
            "Name": "AoEDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "BurningOil",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "447e53b20fe041a5b0ca510079c27946",
            "MaxValue": "{None}"
          },
          {
            "Name": "BurningOilDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "24",
            "MaxValue": "3"
          },
          {
            "Name": "BurningOilTickDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "BurningOilDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3",
            "MaxValue": "{None}"
          }
        ],
        "icon": "73f9768408606cc4d85445c8b0c0f482",
        "icon128": "d80cae4dd7699264fb3c37675b59f263"
      },
      "ability3": {
        "typeID": 2142661479,
        "name": "f654fb71637c4027a4c8ec13b899c3e4",
        "description": "db985921687544fab7ac40310a55cfe2",
        "tooltipData": [
          {
            "Name": "OilSlowFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "25",
            "MaxValue": "{None}"
          },
          {
            "Name": "OilDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Oil",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "b4898e5d19f641629ee7130d17347e32",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirTime",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 1,
            "ValueType": "RangeValue",
            "UnitType": "Second",
            "Value": "0.95",
            "MaxValue": "1.05"
          }
        ],
        "icon": "2b695c57db534a2449d7a8242417b9a0",
        "icon128": "7442381b626556c4e8193c48031d01ef"
      },
      "ability4": {
        "typeID": 1818763883,
        "name": "e0c8c1ed360a4b5ea5bba0f15a0d29bd",
        "description": "af53de136e624fbbb5733c6808155c2c",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "ShieldAmount",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "28",
            "MaxValue": "{None}"
          },
          {
            "Name": "HasteFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "30",
            "MaxValue": "{None}"
          }
        ],
        "icon": "60766c3edacb8e34892c74885ce5b3fa",
        "icon128": "9274b3f40ab2b4048b5cde1e9164901e"
      },
      "ability5": {
        "typeID": 1274383882,
        "name": "7965ce5a763242c398f8bf9de1d2903b",
        "description": "6b15245797f3448283a5b183384f4fe2",
        "tooltipData": [
          {
            "Name": "SpellBlockDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowPercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "SpellBlock",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "6bfadddf8e07473695d1f84687e595b5",
            "MaxValue": "{None}"
          },
          {
            "Name": "StunDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.2",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "7",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Stun",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "4c898668b22b487786e7382d634603e7",
            "MaxValue": "{None}"
          }
        ],
        "icon": "bbf74dbaaf822fc438d9f534b139b7ad",
        "icon128": "c9cd772b84da5454e9888a19fa249483"
      },
      "ability6": {
        "typeID": 559054880,
        "name": "e4842a0ed7814499b48f847629a15c9e",
        "description": "d944cff5445646b7a0c71d1462c88dd9",
        "tooltipData": [
          {
            "Name": "ChannelDuration",
            "LocalizedName": "171abb321fe24867a96d497e7771f113",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowFactor",
            "LocalizedName": "9e59fe8df5d24bc3b80ee8f732d85e63",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "33",
            "MaxValue": "{None}"
          }
        ],
        "icon": "4b8013272b7fdfe4d86b2cddcd7fc837",
        "icon128": "fadd8bcda43b2f54aa66dd5d12795a53"
      },
      "ability7": {
        "typeID": 1648407536,
        "name": "634b1a2414744a90a57b4da6d6518c5f",
        "description": "dbc0b85cc8e0471d95164655e9a7266d",
        "tooltipData": [
          {
            "Name": "ChannelDuration",
            "LocalizedName": "171abb321fe24867a96d497e7771f113",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2.7",
            "MaxValue": "20"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "160",
            "MaxValue": "20"
          },
          {
            "Name": "AoEDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "DamageReduction",
            "LocalizedName": "d2a07fd6b5284efc9dc826e763f3c006",
            "SortID": 2,
            "ValueType": "MultiplativeValue",
            "UnitType": "ModifierPercent",
            "Value": "50",
            "MaxValue": "{None}"
          },
          {
            "Name": "Bullets",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "{None}"
          }
        ],
        "icon": "7d871a6a72587824aab571a0dfc4006d",
        "icon128": "7dc5f22ab9743154eb85f40db35cf33b"
      }
    },
    {
      "typeID": 613085868,
      "name": "b2c969dbc2834e9296155eb97e2db638",
      "devName": "FrostMage",
      "title": "b9a91c424bcb4ac5b892202a3c5a463d",
      "description": "eb039e788f824f22a5aeb6a822186968",
      "icon": "f3e8949aa208a3346a497c336a7002cd",
      "wideIcon": "50404d271ae2a4f4f8b52de966688dc1",
      "battlerites": [
        {
          "typeID": 1860604611,
          "name": "0fa682fbb9d6441a91729b47dfe78f17",
          "description": "c004e92e7e4341aa801355e203dc68b8",
          "tooltipData": [
            {
              "Name": "BonusHealth",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "12",
              "MaxValue": "{None}"
            },
            {
              "Name": "RangeFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "20",
              "MaxValue": "{None}"
            }
          ],
          "icon": "257737da8189b1242be43990b8caf5a6",
          "abilitySlot": "3"
        },
        {
          "typeID": 561511229,
          "name": "c8fa11230a5d45a5a3101325a1f612d8",
          "description": "6d5722895abf402190882378db6b8aba",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "3",
              "MaxValue": "{None}"
            },
            {
              "Name": "DamageFrozen",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            }
          ],
          "icon": "bffd25b328052f647a5e1705071fe746",
          "abilitySlot": "1"
        },
        {
          "typeID": 1089958696,
          "name": "c1a856c845844b8daa951822021b5ce3",
          "description": "5ccad1fc9c2a452eb4a3aef0c83221c0",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "MultiplativeValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "4"
            },
            {
              "Name": "BonusChill",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "MultiplativeValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "4"
            }
          ],
          "icon": "bffd25b328052f647a5e1705071fe746",
          "abilitySlot": "1"
        },
        {
          "typeID": 531951318,
          "name": "36e5b69416c94da2a07df915f4254b43",
          "description": "37d0a480749d46a98fb37d8373999ced",
          "tooltipData": [
            {
              "Name": "ImmobilizeDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "4"
            },
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "ChillDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "MultiplativeValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "4"
            },
            {
              "Name": "Health",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "40",
              "MaxValue": "{None}"
            },
            {
              "Name": "Immobilize",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "0393817baad8475c802924bce807e412",
              "MaxValue": "{None}"
            }
          ],
          "icon": "1ac43589909cda746bafbf3da20d1559",
          "abilitySlot": "2"
        },
        {
          "typeID": 1981527740,
          "name": "c9a6f391ccbc4d568dd44b12e2ae1653",
          "description": "0edacfd43f7d4538a60c95ffb26f9c03",
          "tooltipData": [
            {
              "Name": "RadiusBonus",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            },
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "54bc49f3587260f45b1c4e8e2856e6b7",
          "abilitySlot": "4"
        },
        {
          "typeID": 1242961827,
          "name": "4ebd90d84d1f4d5daf89d925a48dea35",
          "description": "08bd4a9eb2d44f9bad8642c67c443bda",
          "tooltipData": [
            {
              "Name": "Factor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "60",
              "MaxValue": "{None}"
            },
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "20",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.4",
              "MaxValue": "{None}"
            }
          ],
          "icon": "257737da8189b1242be43990b8caf5a6",
          "abilitySlot": "3"
        },
        {
          "typeID": 550675137,
          "name": "41ab3af44f87454f84d7efca0b68ff51",
          "description": "adfd63e377d948298836a19ee16d0b8e",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "1ac43589909cda746bafbf3da20d1559",
          "abilitySlot": "2"
        },
        {
          "typeID": 388545879,
          "name": "ec3d0532a2b24e2aac27e72527fe36fe",
          "description": "e874ec87517249608552845306999a6e",
          "tooltipData": [
            {
              "Name": "HasteModifier",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "bbe2697d5982f654d8dab2223790bd77",
          "abilitySlot": "999"
        },
        {
          "typeID": 1369609980,
          "name": "f65c39fbf51e4f9ca207fd7d42fb339f",
          "description": "576bbc887f1e4e4789a1ba6b7a7828ed",
          "tooltipData": [
            {
              "Name": "EnergyBonus",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Percent",
              "Value": "25",
              "MaxValue": "{None}"
            },
            {
              "Name": "EnergyFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "61e058b8f4b79f4419ec1496f223ee36",
          "abilitySlot": "999"
        },
        {
          "typeID": 181382055,
          "name": "d85d7b60862a4e95b922361c4b75aa83",
          "description": "14659b5c16b5493e986fe8c7513f7137",
          "tooltipData": [
            {
              "Name": "BonusHealth",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "4"
            }
          ],
          "icon": "5d1f99877a4c7a84aaf69f440f38ceb2",
          "abilitySlot": "0"
        },
        {
          "typeID": 71286338,
          "name": "c00c26701b3b448689f8d0bf9cc41a1e",
          "description": "dcdfbbc7958d4c3e8cb4716a7e538678",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "MultiplativeValue",
              "UnitType": "Standard",
              "Value": "15",
              "MaxValue": "5"
            }
          ],
          "icon": "54bc49f3587260f45b1c4e8e2856e6b7",
          "abilitySlot": "4"
        },
        {
          "typeID": 802383053,
          "name": "9858f593c46e4d08b34a836cba65a305",
          "description": "09aa9bfdd15148a385608708d6cc41fa",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "20",
              "MaxValue": "{None}"
            }
          ],
          "icon": "46faed2871863c34d83a612e2ddccc9e",
          "abilitySlot": "5"
        },
        {
          "typeID": 1627925732,
          "name": "ccdcefefeda84b97a7fe3ad2194f6583",
          "description": "26964ddb9d2e4db1bc491bd95a1e46d4",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "MultiplativeValue",
              "UnitType": "Second",
              "Value": "4",
              "MaxValue": "4"
            },
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "BeforeDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            },
            {
              "Name": "AfterDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "AdditiveValue",
              "UnitType": "Second",
              "Value": "4",
              "MaxValue": "3"
            }
          ],
          "icon": "0d83b7f49bd77e847bf5b5e5dbbaf037",
          "abilitySlot": "6"
        },
        {
          "typeID": 1304940929,
          "name": "44e147caaf744e4d92d9a1ced0c4717b",
          "description": "79893dc9604642a0bd0c66a2545b9297",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "10",
              "MaxValue": "{None}"
            },
            {
              "Name": "ChillDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "MultiplativeValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "4"
            }
          ],
          "icon": "257737da8189b1242be43990b8caf5a6",
          "abilitySlot": "3"
        },
        {
          "typeID": 1765452764,
          "name": "9044d37784a74c28870aa3eca817f269",
          "description": "47d5c6af923c4da4bcf79b34f9d70507",
          "tooltipData": [
            {
              "Name": "ShieldAmount",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "12",
              "MaxValue": "{None}"
            },
            {
              "Name": "ShieldDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.4",
              "MaxValue": "{None}"
            }
          ],
          "icon": "54bc49f3587260f45b1c4e8e2856e6b7",
          "abilitySlot": "4"
        },
        {
          "typeID": 165630741,
          "name": "ea71108712d34446804f719c845a642f",
          "description": "9d61b580a9644b4eb0c735b0273ebd2d",
          "tooltipData": [
            {
              "Name": "RangeFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            },
            {
              "Name": "DamageReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "30",
              "MaxValue": "{None}"
            }
          ],
          "icon": "bffd25b328052f647a5e1705071fe746",
          "abilitySlot": "1"
        }
      ],
      "ability1": {
        "typeID": 1529787171,
        "name": "c3d1bd5bd5564f68a1e36e82116ba827",
        "description": "0db9b470a44d4d639fc3361e30ff4f89",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "15",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "7",
            "MaxValue": "4"
          },
          {
            "Name": "Frost",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "6cc9364c99c945e49a9bd18d5da81413",
            "MaxValue": "{None}"
          },
          {
            "Name": "MaxSlow",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "20",
            "MaxValue": "{None}"
          },
          {
            "Name": "MaxDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "4",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Second",
            "Value": "0.8",
            "MaxValue": "4"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "FrostFactor",
            "LocalizedName": "ca12c8e65df44f39947bb90170614a9f",
            "SortID": 1,
            "ValueType": "MultiplativeValue",
            "UnitType": "Second",
            "Value": "0.8",
            "MaxValue": "4"
          }
        ],
        "icon": "daabb014d3403ac48850d59e0ea623dd",
        "icon128": "5d1f99877a4c7a84aaf69f440f38ceb2"
      },
      "ability2": {
        "typeID": 1497250588,
        "name": "9367d7def84e4f7cb7938e5bef199850",
        "description": "d76228db42db4f4991998047c6d74983",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "22",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "8",
            "MaxValue": "{None}"
          },
          {
            "Name": "MaxSlow",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "20",
            "MaxValue": "20"
          },
          {
            "Name": "MaxDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "4",
            "MaxValue": "4"
          },
          {
            "Name": "Frost",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "6cc9364c99c945e49a9bd18d5da81413",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "FrostDuration",
            "LocalizedName": "4c4c7e12f1d740bf9198b2426cbbf364",
            "SortID": 1,
            "ValueType": "MultiplativeValue",
            "UnitType": "Second",
            "Value": "2",
            "MaxValue": "4"
          }
        ],
        "icon": "ab836acfabb978c4aaee30e6395d40a8",
        "icon128": "bffd25b328052f647a5e1705071fe746"
      },
      "ability3": {
        "typeID": 2022133500,
        "name": "a2d9c7a86d774edbb4eb9b336e7d912a",
        "description": "3159760de2ea47d9be0d7727abe217b0",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{ Id: 177 Gen: 1}",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirTime",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.6",
            "MaxValue": "{None}"
          }
        ],
        "icon": "51e26fccf3e96ef4cbaed6ad198f06c6",
        "icon128": "1ac43589909cda746bafbf3da20d1559"
      },
      "ability4": {
        "typeID": 1086412191,
        "name": "53c42378816e45dab7331433231ea41d",
        "description": "4a8040ffb2bd492ba7c7b3be723738c9",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.4",
            "MaxValue": "{None}"
          },
          {
            "Name": "ShieldAmount",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "24",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Frost",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "6cc9364c99c945e49a9bd18d5da81413",
            "MaxValue": "{None}"
          },
          {
            "Name": "MaxDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "4",
            "MaxValue": "4"
          },
          {
            "Name": "MaxSlow",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "20",
            "MaxValue": "20"
          },
          {
            "Name": "FrostFactor",
            "LocalizedName": "4c4c7e12f1d740bf9198b2426cbbf364",
            "SortID": 1,
            "ValueType": "MultiplativeValue",
            "UnitType": "Second",
            "Value": "2",
            "MaxValue": "4"
          }
        ],
        "icon": "ce1e38d630a6617418e9043716d63404",
        "icon128": "257737da8189b1242be43990b8caf5a6"
      },
      "ability5": {
        "typeID": 1136590280,
        "name": "d680f2d7426f497086745afaec9a9681",
        "description": "3c85164721324b2093c529d4c91bad93",
        "tooltipData": [
          {
            "Name": "TickDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "MaxDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "4",
            "MaxValue": "4"
          },
          {
            "Name": "MaxSlow",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "20",
            "MaxValue": "20"
          },
          {
            "Name": "Frozen",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "9341cf2b3d3c4c979db06d7e4733aba2",
            "MaxValue": "{None}"
          },
          {
            "Name": "ShieldAmount",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "AreaDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "FrostFactor",
            "LocalizedName": "4c4c7e12f1d740bf9198b2426cbbf364",
            "SortID": 2,
            "ValueType": "MultiplativeValue",
            "UnitType": "Second",
            "Value": "3",
            "MaxValue": "4"
          },
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 3,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "DelayDuration",
            "LocalizedName": "c2f75a279186454aa0ad062ef601c9bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.9",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "15",
            "MaxValue": "{None}"
          }
        ],
        "icon": "8729464cd869fa34e90a88d32ccd0c6b",
        "icon128": "54bc49f3587260f45b1c4e8e2856e6b7"
      },
      "ability6": {
        "typeID": 612469406,
        "name": "2b9c9740b654456a8e441bfbecd8e929",
        "description": "1db1b2e5344a4a24ad8a316772503b87",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "{None}"
          },
          {
            "Name": "Health",
            "LocalizedName": "7aa5d92b629743f9a555ca9c079e928c",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "SubtractiveValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "5"
          },
          {
            "Name": "ChillDuration",
            "LocalizedName": "4c4c7e12f1d740bf9198b2426cbbf364",
            "SortID": 2,
            "ValueType": "MultiplativeValue",
            "UnitType": "Second",
            "Value": "2",
            "MaxValue": "4"
          }
        ],
        "icon": "884efbeb494145246b3a5564d5ad8d96",
        "icon128": "46faed2871863c34d83a612e2ddccc9e"
      },
      "ability7": {
        "typeID": 2128671887,
        "name": "66adb107b1da485babfca199d95f54eb",
        "description": "7a352fce720e490b9351db4caa449be1",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "35",
            "MaxValue": "{None}"
          },
          {
            "Name": "Frozen",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "9341cf2b3d3c4c979db06d7e4733aba2",
            "MaxValue": "{None}"
          },
          {
            "Name": "MaxDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "4",
            "MaxValue": "4"
          },
          {
            "Name": "MaxSlow",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "20",
            "MaxValue": "20"
          },
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "ShieldAmount",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "{None}"
          },
          {
            "Name": "Delay",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.9",
            "MaxValue": "{None}"
          }
        ],
        "icon": "9092e32bb792c664fa7a4d83ff9b5147",
        "icon128": "0d83b7f49bd77e847bf5b5e5dbbaf037"
      }
    },
    {
      "typeID": 1318732017,
      "name": "7351e41203ce487488813815bb872f0c",
      "devName": "Glutton",
      "title": "c0622d6d242f4456bca5ee30634e4967",
      "description": "227f5ed3829a4bee8947f75521308a5c",
      "icon": "fff8232d0fb921447b388c4ca5993c46",
      "wideIcon": "e5d5913527b842b41aed666d27d14231",
      "battlerites": [
        {
          "typeID": 236641939,
          "name": "04a1bf8ef576478888e07a47a882e3cf",
          "description": "40366792b3e1455f9b9c3e19f12e3002",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.4",
              "MaxValue": "{None}"
            }
          ],
          "icon": "037a9d14b1a74c249a0bb90af0237a7f",
          "abilitySlot": "0"
        },
        {
          "typeID": 138384306,
          "name": "151a96d9417646f28a7065ad5dd5db00",
          "description": "dc498358cc9f4733b6ac27917532baf3",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "bc4e2e34829b8af4c92bb6a8f570fc96",
          "abilitySlot": "1"
        },
        {
          "typeID": 1872141107,
          "name": "fa71243030464e1fab910456d18ff3c6",
          "description": "8cef568c26824f94b6b3cd92efdaa666",
          "tooltipData": [
            {
              "Name": "Factor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "33",
              "MaxValue": "{None}"
            },
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "bc4e2e34829b8af4c92bb6a8f570fc96",
          "abilitySlot": "1"
        },
        {
          "typeID": 1429713330,
          "name": "b022fbfdc5264492956ce952560e9716",
          "description": "99f9e980d6154b66bcc632c12995f79c",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            }
          ],
          "icon": "bc4e2e34829b8af4c92bb6a8f570fc96",
          "abilitySlot": "1"
        },
        {
          "typeID": 2121897750,
          "name": "e59b63f755cf4ac7bb0c188124e65228",
          "description": "59f83d8ee8914c5c8185f279be2427b0",
          "tooltipData": [
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "MaxCooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "0cfff8a481a64fd499bfaeb3da1cbca5",
          "abilitySlot": "2"
        },
        {
          "typeID": 535585153,
          "name": "fd27fd45d85246f6915e47bfc14a4d1d",
          "description": "bb9c5fab553841fe9dbb06a4a563c6a5",
          "tooltipData": [],
          "icon": "0cfff8a481a64fd499bfaeb3da1cbca5",
          "abilitySlot": "2"
        },
        {
          "typeID": 1637634020,
          "name": "62805cbf5a4c42f487ea20b31ee61dd5",
          "description": "3c58220db5cc41a786031689b2763be5",
          "tooltipData": [
            {
              "Name": "BerserkDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "Berserk",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "5ba9908aca97424f91ae8a789ebbca22",
              "MaxValue": "{None}"
            },
            {
              "Name": "AttackSpeed",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "33",
              "MaxValue": "{None}"
            },
            {
              "Name": "Haste",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "{None}"
            }
          ],
          "icon": "0cfff8a481a64fd499bfaeb3da1cbca5",
          "abilitySlot": "2"
        },
        {
          "typeID": 489494744,
          "name": "12bc043c28fe40fc9327519e0bc7abb2",
          "description": "8daa2c5a01fd4630b82c2edd2408434e",
          "tooltipData": [
            {
              "Name": "HasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "30",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "{None}",
              "MaxValue": "{None}"
            }
          ],
          "icon": "df78f943fca96314181fdf1827f825db",
          "abilitySlot": "3"
        },
        {
          "typeID": 1374006316,
          "name": "b27d8bd0bae8441090e63791d46b4718",
          "description": "586c17f3341e49158681c21e46f80929",
          "tooltipData": [
            {
              "Name": "Factor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "30",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "{None}",
              "MaxValue": "{None}"
            }
          ],
          "icon": "df78f943fca96314181fdf1827f825db",
          "abilitySlot": "3"
        },
        {
          "typeID": 1651660531,
          "name": "3cc59cb715774ddea0220919cab1503c",
          "description": "ff9dbe38946a455d9b3182a8bd691f54",
          "tooltipData": [
            {
              "Name": "SlowDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            },
            {
              "Name": "SlowPercent",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0",
              "MaxValue": "{None}"
            },
            {
              "Name": "Slow",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "b5b19aeaa91c4354a330bd761a1f0d86",
              "MaxValue": "{None}"
            }
          ],
          "icon": "df78f943fca96314181fdf1827f825db",
          "abilitySlot": "3"
        },
        {
          "typeID": 1715075778,
          "name": "f2c0d62cf6584a59b6ede5e96d0184bb",
          "description": "6c78d4cf58b24b59b85e884bcf3eb831",
          "tooltipData": [
            {
              "Name": "KnockbackBonus",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "ec50e13a62a38194186bf0763d8ae951",
          "abilitySlot": "4"
        },
        {
          "typeID": 2018410467,
          "name": "9f331b40b34c4174b581502e444017df",
          "description": "53164227dd6640c8abc535584611f156",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "ec50e13a62a38194186bf0763d8ae951",
          "abilitySlot": "4"
        },
        {
          "typeID": 1921598726,
          "name": "f148bf9245bf4e5385962d4a72c8b938",
          "description": "8b95442423b447939afe7395a4b569d6",
          "tooltipData": [],
          "icon": "bbbaccf727b1c9547841f8f90c1b3336",
          "abilitySlot": "6"
        }
      ],
      "ability1": {
        "typeID": 340641571,
        "name": "1144bf3234c249fba5580487d89eb0a5",
        "description": "ae965e8aa8bc45589b6c90cec08eadfd",
        "tooltipData": [
          {
            "Name": "Damage1",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage2",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage3",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "4",
            "MaxValue": "{None}"
          },
          {
            "Name": "CooldownReduction",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.5",
            "MaxValue": "{None}"
          }
        ],
        "icon": "7aa8a307d4b9e7647ac346c086fcad70",
        "icon128": "037a9d14b1a74c249a0bb90af0237a7f"
      },
      "ability2": {
        "typeID": 1397275147,
        "name": "475c827e87154cc097d244a4603a6a96",
        "description": "24a6eed6d39141d0b06b6daac81584bd",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "16",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "ArmorBreak",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "d319461aecce409480bbe0a0dad35ad0",
            "MaxValue": "{None}"
          },
          {
            "Name": "AmplifyDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirTime",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "AmplifyPercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "20",
            "MaxValue": "{None}"
          }
        ],
        "icon": "7ec58ff5590b4d44896002e0a0d5eba1",
        "icon128": "bc4e2e34829b8af4c92bb6a8f570fc96"
      },
      "ability3": {
        "typeID": 1077458428,
        "name": "9fd53039f98f48e6bcfb5ca76708695c",
        "description": "b64a29d953994439bbdaf02a2015aef4",
        "tooltipData": [
          {
            "Name": "MinDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "Stun",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "4c898668b22b487786e7382d634603e7",
            "MaxValue": "{None}"
          },
          {
            "Name": "StunDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "8",
            "MaxValue": "{None}"
          },
          {
            "Name": "MaxDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "24",
            "MaxValue": "{None}"
          }
        ],
        "icon": "84d2d80696d41f94384763208ae0965d",
        "icon128": "0cfff8a481a64fd499bfaeb3da1cbca5"
      },
      "ability4": {
        "typeID": 1413535840,
        "name": "5ba9908aca97424f91ae8a789ebbca22",
        "description": "2bcf23ed21964e37a53c8b3d26e1b2a2",
        "tooltipData": [
          {
            "Name": "Duration2",
            "LocalizedName": "a1875cef6de04fb391bf2228dfe0e71b",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          },
          {
            "Name": "ShieldAmount",
            "LocalizedName": "83036c5743b642abbf5ba0426e2e77aa",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "a307304ca3ed4c0db9d232cf2580f450",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          },
          {
            "Name": "BerserkDuration",
            "LocalizedName": "db9c15c0c2924539babe9cb4e5894129",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "Haste",
            "LocalizedName": "2d69eb51423e4f0d8410e80c274a747f",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "50",
            "MaxValue": "{None}"
          },
          {
            "Name": "InvulnerableDuration",
            "LocalizedName": "9edc22588ea2448aa0fcffd95c740643",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          },
          {
            "Name": "Berserk",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "5ba9908aca97424f91ae8a789ebbca22",
            "MaxValue": "{None}"
          },
          {
            "Name": "AttackSpeed",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "33",
            "MaxValue": "{None}"
          }
        ],
        "icon": "70c68cfde02e3ed4db16dc80b69bd63a",
        "icon128": "df78f943fca96314181fdf1827f825db"
      },
      "ability5": {
        "typeID": 2054544101,
        "name": "5752ed9f215a4400ba5dec72c3edbd1f",
        "description": "85df8c7c91ae4f95ac9c07edebcdc4a4",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "16",
            "MaxValue": "{None}"
          },
          {
            "Name": "GradualSlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          },
          {
            "Name": "Stun",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "e6ee239b70b64b0cbdd9525e06acda60",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirTime",
            "LocalizedName": "c2f75a279186454aa0ad062ef601c9bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.9",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "7",
            "MaxValue": "{None}"
          }
        ],
        "icon": "f76d29a9842866b499e3fcf3ee1f40b1",
        "icon128": "ec50e13a62a38194186bf0763d8ae951"
      },
      "ability6": {
        "typeID": 1264792448,
        "name": "5341a3a68c074a069986d8ef5d7a67d0",
        "description": "186c12178ba04eb2bfdcac047f0478f3",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "IncapDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Incapacitate",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "2380868a24734a4e9db5d584ee49bb70",
            "MaxValue": "{None}"
          },
          {
            "Name": "AmplifyPercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          }
        ],
        "icon": "96885c34f7a7ae64cb3e205c70b35bea",
        "icon128": "f6715ff10dc080b468230b00c7de1c58"
      },
      "ability7": {
        "typeID": 744233813,
        "name": "2d00a2825196484f85cd52c8bed1342b",
        "description": "2b36220a25424ab1bb3e11130eef42e2",
        "tooltipData": [
          {
            "Name": "ChannelDuration",
            "LocalizedName": "171abb321fe24867a96d497e7771f113",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3.6",
            "MaxValue": "4"
          },
          {
            "Name": "Damage1",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "24",
            "MaxValue": "24"
          },
          {
            "Name": "AoEDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "4"
          },
          {
            "Name": "Damage2",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "30",
            "MaxValue": "30"
          },
          {
            "Name": "Damage3",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "36",
            "MaxValue": "36"
          },
          {
            "Name": "Times",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "3",
            "MaxValue": "{None}"
          }
        ],
        "icon": "05537ce6588e5004da83c365cccaa238",
        "icon128": "bbbaccf727b1c9547841f8f90c1b3336"
      }
    },
    {
      "typeID": 65687534,
      "name": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "devName": "Gunner",
      "title": "058cf66defd44dacb90dabb21e1af623",
      "description": "eed446c8ae174f799e37c6078b1c9bfd",
      "icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "wideIcon": "38b75268719e2b640a6d62250e102ffa",
      "battlerites": [
        {
          "typeID": 1423275395,
          "name": "68c7bd5416794f65bc466f8486f5dcb1",
          "description": "9ec180bd1f5848f29c4d515b53cef3fe",
          "tooltipData": [
            {
              "Name": "cooldownreduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.35",
              "MaxValue": "{None}"
            }
          ],
          "icon": "6410a3c5ef2055247ad58f6ed2e36953",
          "abilitySlot": "0"
        },
        {
          "typeID": 1545224575,
          "name": "2c5ed4abb6ca49d692eb46ccfb0c6098",
          "description": "9809ed83eb6f4ace94725a5761fbad0d",
          "tooltipData": [
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            }
          ],
          "icon": "20e8f262eca757942bc23d94aa73ab2a",
          "abilitySlot": "1"
        },
        {
          "typeID": 555638884,
          "name": "c309edde977244e0ac43af8d78289200",
          "description": "b9dceb87d0e0464691107b977aa436e4",
          "tooltipData": [
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            }
          ],
          "icon": "20e8f262eca757942bc23d94aa73ab2a",
          "abilitySlot": "1"
        },
        {
          "typeID": 176663060,
          "name": "597620e08e354735a77fb900b40d119b",
          "description": "0f1c5329e0fa4cac8d53dfdab7ce654a",
          "tooltipData": [
            {
              "Name": "BonusDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "20e8f262eca757942bc23d94aa73ab2a",
          "abilitySlot": "1"
        },
        {
          "typeID": 923624373,
          "name": "6b8e68e6518640509870b666acadb814",
          "description": "8ad9b749ebf8407499a04c5904c6960a",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.75",
              "MaxValue": "{None}"
            }
          ],
          "icon": "ead2d318c0e3f8f4793207ab3e12da21",
          "abilitySlot": "2"
        },
        {
          "typeID": 307332016,
          "name": "88d234788054406a9b6046b883e88160",
          "description": "4c163963af78498db58019bae1b3b0d0",
          "tooltipData": [
            {
              "Name": "Reduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "SubtractiveValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "7"
            }
          ],
          "icon": "ead2d318c0e3f8f4793207ab3e12da21",
          "abilitySlot": "2"
        },
        {
          "typeID": 311499373,
          "name": "aed8c7b0ada94f7fa1807d45428af6fd",
          "description": "185cd5d1380d44d2ba49702006adb5b9",
          "tooltipData": [
            {
              "Name": "Shots",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusEnergy",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "ead2d318c0e3f8f4793207ab3e12da21",
          "abilitySlot": "2"
        },
        {
          "typeID": 826286707,
          "name": "948dabab8f6545019d66cd870986ada3",
          "description": "1b750d0101e6438d9fbea7dbb5f5fad2",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.3",
              "MaxValue": "{None}"
            },
            {
              "Name": "Reduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "6",
              "MaxValue": "{None}"
            }
          ],
          "icon": "c5da66a86ca45a1449a49d55cc92d1fc",
          "abilitySlot": "3"
        },
        {
          "typeID": 199599970,
          "name": "67d7e62ba692499ea1642d6f6f46f76c",
          "description": "04ac6a0f3b0a4539b73e733413cb5d4a",
          "tooltipData": [
            {
              "Name": "ImpactDelay",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            },
            {
              "Name": "SlowDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "c5da66a86ca45a1449a49d55cc92d1fc",
          "abilitySlot": "3"
        },
        {
          "typeID": 1373077114,
          "name": "c35dc20f56a94232921617251803979c",
          "description": "b4e9bccc95ab42709b604064767e4e13",
          "tooltipData": [
            {
              "Name": "Haste1",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "AdditiveValue",
              "UnitType": "ModifierPercent",
              "Value": "40.3",
              "MaxValue": "30"
            },
            {
              "Name": "Haste2",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "40",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "NewDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "{None}",
              "MaxValue": "{None}"
            }
          ],
          "icon": "c5da66a86ca45a1449a49d55cc92d1fc",
          "abilitySlot": "3"
        },
        {
          "typeID": 1105722445,
          "name": "f412d1bcf5844501b90ca12a38092750",
          "description": "91c6359790774ccb9bcd86feb39fe299",
          "tooltipData": [
            {
              "Name": "Charges",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            }
          ],
          "icon": "6f9f331dd6c2fb347a4e5cb5bbba0740",
          "abilitySlot": "4"
        },
        {
          "typeID": 171345218,
          "name": "6e08dd993702433fa93b682f09519b20",
          "description": "4e7ee342f5474d8da43c51003ee94cf0",
          "tooltipData": [
            {
              "Name": "InterruptHealing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            },
            {
              "Name": "ImpactHealing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            }
          ],
          "icon": "6f9f331dd6c2fb347a4e5cb5bbba0740",
          "abilitySlot": "4"
        },
        {
          "typeID": 285637964,
          "name": "6c3832d5bb264bb1af95a69edac2ac6a",
          "description": "05eb9072dde14997aa4804930c73f0f6",
          "tooltipData": [],
          "icon": "6f9f331dd6c2fb347a4e5cb5bbba0740",
          "abilitySlot": "4"
        },
        {
          "typeID": 1047556063,
          "name": "77b05c760ae74890982cf1d36623570e",
          "description": "24d35253e9b2436ebb612d31aa8fa949",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "KnockbackBonus",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "25",
              "MaxValue": "{None}"
            }
          ],
          "icon": "789010c418d3eac4f8684cd72e7cf950",
          "abilitySlot": "5"
        },
        {
          "typeID": 412058724,
          "name": "3e412b8f42b8421ebbc568f61079469f",
          "description": "06b37e7081584986820d406f71051148",
          "tooltipData": [
            {
              "Name": "SlowPercent",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "{None}"
            },
            {
              "Name": "SlowDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "0744f151cec368244801a70330232ab0",
          "abilitySlot": "6"
        },
        {
          "typeID": 388545879,
          "name": "ec3d0532a2b24e2aac27e72527fe36fe",
          "description": "e874ec87517249608552845306999a6e",
          "tooltipData": [
            {
              "Name": "HasteModifier",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "bbe2697d5982f654d8dab2223790bd77",
          "abilitySlot": "999"
        }
      ],
      "ability1": {
        "typeID": 56844512,
        "name": "f525255214f244b7b2c0ad16bf3981c2",
        "description": "df8238f6e7d742b295579ae1549c48c1",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "ReloadDuration",
            "LocalizedName": "f978a8f83cbe449ea3da837bc8697897",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          }
        ],
        "icon": "14cb0159b1c367d40aa564f6176779a3",
        "icon128": "6410a3c5ef2055247ad58f6ed2e36953"
      },
      "ability2": {
        "typeID": 830935979,
        "name": "78930f3f750b44f1a4d72e8c30d91507",
        "description": "52c720eb74394f8584a7e7045eba5319",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "38",
            "MaxValue": "{None}"
          },
          {
            "Name": "ReducePercent",
            "LocalizedName": "d2a07fd6b5284efc9dc826e763f3c006",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "35",
            "MaxValue": "{None}"
          },
          {
            "Name": "StunDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Stun",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "14",
            "MaxValue": "{None}"
          }
        ],
        "icon": "f1a3737fe5b6c7e4ab6729ccef169c55",
        "icon128": "20e8f262eca757942bc23d94aa73ab2a"
      },
      "ability3": {
        "typeID": 512745910,
        "name": "afdf5ff5d87146dba2d08d4486306f60",
        "description": "5bcd3a9865df4b8eb71adb31d741718a",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "StunDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.25",
            "MaxValue": "{None}"
          },
          {
            "Name": "Stun",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirTime",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.8",
            "MaxValue": "0.55"
          }
        ],
        "icon": "6347a2ea1f483164485b3dc3b7d05c1a",
        "icon128": "ead2d318c0e3f8f4793207ab3e12da21"
      },
      "ability4": {
        "typeID": 308288579,
        "name": "0e2f6e1df6e94d5e969b504e0a57b2fc",
        "description": "770afd5bade2472996075dcc0991b74c",
        "tooltipData": [
          {
            "Name": "GradualHasteDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "GradualHasteFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "30",
            "MaxValue": "{None}"
          },
          {
            "Name": "FadingHaste",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "4b7bb80fa4464eb7bd26a8138ec64d99",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2.4",
            "MaxValue": "{None}"
          }
        ],
        "icon": "e6a0181eb176dc94faa4637fa999b2a3",
        "icon128": "c5da66a86ca45a1449a49d55cc92d1fc"
      },
      "ability5": {
        "typeID": 1632681037,
        "name": "374f6878d9c440149849af33e7036b68",
        "description": "2c4278e8c7574b8a875eb2123993493b",
        "tooltipData": [
          {
            "Name": "SlowPercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "15",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.2",
            "MaxValue": "{None}"
          },
          {
            "Name": "Slow",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "SpellBlock",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "6bfadddf8e07473695d1f84687e595b5",
            "MaxValue": "{None}"
          },
          {
            "Name": "SilenceDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.2",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "7",
            "MaxValue": "{None}"
          },
          {
            "Name": "SpellBlockDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Silence",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "b91665804df04ff599466f3714f3c9f1",
            "MaxValue": "{None}"
          }
        ],
        "icon": "785a6dfc09425304a9443b781a291af0",
        "icon128": "6f9f331dd6c2fb347a4e5cb5bbba0740"
      },
      "ability6": {
        "typeID": 833520584,
        "name": "9d050098e2af46b583887400cb4ee891",
        "description": "9764c2e97d46497e9b36b2f64c3d5b59",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "18",
            "MaxValue": "3"
          },
          {
            "Name": "ReducePercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "0",
            "MaxValue": "{None}"
          },
          {
            "Name": "BulletCount",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "3",
            "MaxValue": "{None}"
          }
        ],
        "icon": "e16cd89dc62169d459ae449f36b79456",
        "icon128": "789010c418d3eac4f8684cd72e7cf950"
      },
      "ability7": {
        "typeID": 1014869658,
        "name": "3e5f8118bb36478b8539b784dc9bf0ca",
        "description": "0c9ca5588a0143bdaa374a8c7624d724",
        "tooltipData": [
          {
            "Name": "ChannelDuration",
            "LocalizedName": "171abb321fe24867a96d497e7771f113",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "4"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "112",
            "MaxValue": "4"
          },
          {
            "Name": "AoEDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "64",
            "MaxValue": "4"
          },
          {
            "Name": "Shells",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "4",
            "MaxValue": "{None}"
          }
        ],
        "icon": "8a5cb675319f08346bf5b75d7aa7e1ab",
        "icon128": "0744f151cec368244801a70330232ab0"
      }
    },
    {
      "typeID": 550061327,
      "name": "75edf47280604ea4a632ae97664d3c23",
      "devName": "Harbinger",
      "title": "c31931403df34bf1ba88299e19db954c",
      "description": "d371955bef5a4f72be5f91671dd06c76",
      "icon": "b6baa190db3bf814cae790b79f622ea0",
      "wideIcon": "bb37e5d448c511e47b808987d0d4f9e8",
      "battlerites": [
        {
          "typeID": 808068036,
          "name": "687b0f6d5a794daf8fe70a3b194a981e",
          "description": "eb8e9bd210e84c489dc99d3882a833cb",
          "tooltipData": [
            {
              "Name": "NewDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.8",
              "MaxValue": "{None}"
            },
            {
              "Name": "OldDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "76c658cdb74fac345b0629a77fd6fc91",
          "abilitySlot": "0"
        },
        {
          "typeID": 1340272428,
          "name": "3f7deb2533f04b33afefbc2ba0eda12d",
          "description": "e359502145364317824f5060af9a802c",
          "tooltipData": [
            {
              "Name": "BonusHealing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusHealingPerHit",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "76c658cdb74fac345b0629a77fd6fc91",
          "abilitySlot": "0"
        },
        {
          "typeID": 261184191,
          "name": "67894c6d6e784527afa50c253a545fbd",
          "description": "fc99f17647c04c11907d6845de6ab1b6",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "76c658cdb74fac345b0629a77fd6fc91",
          "abilitySlot": "0"
        },
        {
          "typeID": 1808202129,
          "name": "3dc1a3eb534546c8b52823267c406718",
          "description": "ff13cac14d6142bbb22d79c1bccb8b67",
          "tooltipData": [
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            }
          ],
          "icon": "2a54393ededda834a8070123fbc265cc",
          "abilitySlot": "1"
        },
        {
          "typeID": 1454640478,
          "name": "6e8718c3215e4652b9a78be9cf256433",
          "description": "a3eb723ed3df49c3929ae72c23ad908b",
          "tooltipData": [
            {
              "Name": "Factor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "15",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "4",
              "MaxValue": "{None}"
            }
          ],
          "icon": "2a54393ededda834a8070123fbc265cc",
          "abilitySlot": "1"
        },
        {
          "typeID": 1830220910,
          "name": "ea086fcd33864688a252d005c00e49f4",
          "description": "42588a31a1264e61ad44ddb67733d5ac",
          "tooltipData": [
            {
              "Name": "BuffDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "CurseDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            },
            {
              "Name": "CurseHealing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            },
            {
              "Name": "Curse",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "19ecf92fd0264b27bfda3596e3de4ddb",
              "MaxValue": "{None}"
            }
          ],
          "icon": "fe85f5b940cf1ff44825f090b2bb34ce",
          "abilitySlot": "2"
        },
        {
          "typeID": 1537519905,
          "name": "6f73c0f781e04b4cbf996347516067a1",
          "description": "0e5b7f3ffe4a46c1a51d7d18a99e714d",
          "tooltipData": [
            {
              "Name": "Charges",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "CooldownIncrease",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "fe85f5b940cf1ff44825f090b2bb34ce",
          "abilitySlot": "2"
        },
        {
          "typeID": 975611872,
          "name": "9fb08e0950b142939d1adc712d0fb1d8",
          "description": "0af174c7163c458198b2d76818f8fc2a",
          "tooltipData": [
            {
              "Name": "Charges",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "c84fd648ae9f196428ba4e9b3bc42d1e",
          "abilitySlot": "3"
        },
        {
          "typeID": 267198260,
          "name": "6577410dce354c2c9eb55cec92457565",
          "description": "f4e1489b48fb45d5b9350eb498c128c2",
          "tooltipData": [
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{ Id: 203 Gen: 1}",
              "MaxValue": "{None}"
            },
            {
              "Name": "StaticCooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "c84fd648ae9f196428ba4e9b3bc42d1e",
          "abilitySlot": "3"
        },
        {
          "typeID": 55173662,
          "name": "1bfeab00f6b54a7c8e9257916dc43686",
          "description": "a782d2a2c65a4b23b7f21a255a91dbdb",
          "tooltipData": [
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "13fbbdb9e7cbde8429053e33e1022fa8",
          "abilitySlot": "4"
        },
        {
          "typeID": 2087589388,
          "name": "66853afda2114c69be0ad53afb2105fd",
          "description": "6b4cf0c972884b65bca4e7cddb72d748",
          "tooltipData": [
            {
              "Name": "BuffDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "Curse",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "19ecf92fd0264b27bfda3596e3de4ddb",
              "MaxValue": "{None}"
            },
            {
              "Name": "CurseDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            },
            {
              "Name": "CurseHealing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            },
            {
              "Name": "ImmobilizeDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "13fbbdb9e7cbde8429053e33e1022fa8",
          "abilitySlot": "4"
        },
        {
          "typeID": 190893318,
          "name": "42599af41a3a4d00b383d6701abb8714",
          "description": "9e1a8a5ab82f4e0480d3462be028ae87",
          "tooltipData": [
            {
              "Name": "RangeFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "12",
              "MaxValue": "{None}"
            },
            {
              "Name": "Drain",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "13fbbdb9e7cbde8429053e33e1022fa8",
          "abilitySlot": "4"
        },
        {
          "typeID": 9507398,
          "name": "2445c0fc7f5d46478b055be5a5fad1f9",
          "description": "9a7a955160604166bc84d9dc501df122",
          "tooltipData": [],
          "icon": "5a7e98c96d8346948b9f3f2a907e84ea",
          "abilitySlot": "6"
        },
        {
          "typeID": 1902286890,
          "name": "b2b715b39a644aed94bc1871f08c978d",
          "description": "6d092bf155f048d7b245068baa61a19b",
          "tooltipData": [
            {
              "Name": "HasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "35",
              "MaxValue": "{None}"
            }
          ],
          "icon": "5a7e98c96d8346948b9f3f2a907e84ea",
          "abilitySlot": "6"
        },
        {
          "typeID": 1948858917,
          "name": "a36f1367049e41d690140c585f37e205",
          "description": "164a3277a05e4243a60e49ac701d9bfa",
          "tooltipData": [
            {
              "Name": "Factor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "30",
              "MaxValue": "{None}"
            }
          ],
          "icon": "76c658cdb74fac345b0629a77fd6fc91",
          "abilitySlot": "0"
        },
        {
          "typeID": 339423991,
          "name": "117aade7a1034b319a1b32a5bfd9c914",
          "description": "26cdf55d3a1b476e888968a1156614a2",
          "tooltipData": [
            {
              "Name": "Factor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "16",
              "MaxValue": "{None}"
            }
          ],
          "icon": "76c658cdb74fac345b0629a77fd6fc91",
          "abilitySlot": "999"
        }
      ],
      "ability1": {
        "typeID": 2003546873,
        "name": "7773b8fde07f4446958994efe8f1694e",
        "description": "c64cca0fe1784f7ab8f986eb603b8ef7",
        "tooltipData": [
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "18",
            "MaxValue": "8"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "CurseDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "CurseHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "BuffDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "ChargeDuration",
            "LocalizedName": "9374a7bef5ce4d7793ffb78a814db85a",
            "SortID": 1,
            "ValueType": "MultiplativeValue",
            "UnitType": "Second",
            "Value": "8",
            "MaxValue": "1"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "8",
            "MaxValue": "{None}"
          },
          {
            "Name": "Curse",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "19ecf92fd0264b27bfda3596e3de4ddb",
            "MaxValue": "{None}"
          },
          {
            "Name": "Silence",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "b91665804df04ff599466f3714f3c9f1",
            "MaxValue": "{None}"
          },
          {
            "Name": "SilenceDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.3",
            "MaxValue": "{None}"
          }
        ],
        "icon": "c71b7408e49361a4381d870021d961ac",
        "icon128": "76c658cdb74fac345b0629a77fd6fc91"
      },
      "ability2": {
        "typeID": 921344682,
        "name": "f203a7c0ad07452fae70c85f5eb0ba67",
        "description": "bdfd453464104ea0a426f5e4e0ee1bb8",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "28",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "9",
            "MaxValue": "{None}"
          }
        ],
        "icon": "6d90fdf462da6f04caec85ffa856f262",
        "icon128": "2a54393ededda834a8070123fbc265cc"
      },
      "ability3": {
        "typeID": 1599533417,
        "name": "25463d88bd2a4c629183001d4970903e",
        "description": "1efc7fdc17aa4d23a305eeb3dc15b678",
        "tooltipData": [
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "16",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirTime",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.3",
            "MaxValue": "0.2"
          }
        ],
        "icon": "20a56e00c06f90748afa2bd1f763ebf2",
        "icon128": "fe85f5b940cf1ff44825f090b2bb34ce"
      },
      "ability4": {
        "typeID": 1697456501,
        "name": "eff66a0841744828be333d069a4986ea",
        "description": "8e3b8d48e23f40518cd4ed6ba9a53801",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "GradualSlow",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "e6ee239b70b64b0cbdd9525e06acda60",
            "MaxValue": "{None}"
          },
          {
            "Name": "ShadowBoltDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Stacks",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "HasteFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "GradualSlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Rage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "1",
            "MaxValue": "{None}"
          }
        ],
        "icon": "288088072ded1ca4ea29ca952280fb3e",
        "icon128": "c84fd648ae9f196428ba4e9b3bc42d1e"
      },
      "ability5": {
        "typeID": 1703342344,
        "name": "f6fffec58b224979b1c7a16b4ec89c41",
        "description": "02f2c9a253e14939a36e1392e7de9054",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "HealingFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "{None}",
            "MaxValue": "4"
          },
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "7",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "BuffDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2.5",
            "MaxValue": "{None}"
          }
        ],
        "icon": "1fe09bae419390b4289df926d5ec7803",
        "icon128": "13fbbdb9e7cbde8429053e33e1022fa8"
      },
      "ability6": {
        "typeID": 676298304,
        "name": "cb973cbdde534d98bd38ad58dba70040",
        "description": "175bce66b53f4e9cbcd155da2cb4ed5b",
        "tooltipData": [
          {
            "Name": "Delay",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 1,
            "ValueType": "AdditiveValue",
            "UnitType": "Second",
            "Value": "0.8",
            "MaxValue": "0.6"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Silence",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "19ecf92fd0264b27bfda3596e3de4ddb",
            "MaxValue": "{None}"
          },
          {
            "Name": "BuffDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "CurseDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "CurseHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6",
            "MaxValue": "{None}"
          }
        ],
        "icon": "95b4d207a9eb283439bc3f8ca142c2d1",
        "icon128": "7b751ce8dbfb97c43bd173914a35e14b"
      },
      "ability7": {
        "typeID": 2112537315,
        "name": "e970ace7fd9a4ae899079d5208e55392",
        "description": "86353518f257435a850877d30ba3de07",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "5",
            "MaxValue": "{None}"
          }
        ],
        "icon": "997b33703daaae94b8d8a98ddc4d722b",
        "icon128": "5a7e98c96d8346948b9f3f2a907e84ea"
      }
    },
    {
      "typeID": 1908945514,
      "name": "185585849e33412ab192917339444df1",
      "devName": "Herald",
      "title": "188ddeb387e74ec19a9e06ff649f1d3f",
      "description": "9de0d26093bc40c6ad7eb49d012330d5",
      "icon": "9de8223b455d0474a9bbf2f32f9c7102",
      "wideIcon": "b0d66b8b9f228724093b8a3e66c3fef6",
      "battlerites": [
        {
          "typeID": 1806673794,
          "name": "5cff35bc067843cdab664a39b059c1d1",
          "description": "64f7c2006ec54c1ba1143965413ceebd",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "1e376cc95b8550443b527db1234300bd",
          "abilitySlot": "0"
        },
        {
          "typeID": 201314590,
          "name": "10b561ab7cc6431dbd60bedbf35373eb",
          "description": "1d1b6d253ef54da59223fd0cea0e34de",
          "tooltipData": [
            {
              "Name": "HealingModifier",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "20",
              "MaxValue": "{None}"
            },
            {
              "Name": "DamageModifier",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "1e376cc95b8550443b527db1234300bd",
          "abilitySlot": "0"
        },
        {
          "typeID": 1269730667,
          "name": "eb4ec0b1707a49b7b25ceeba534f5903",
          "description": "2c0a80efaf924053908297ec899861b8",
          "tooltipData": [
            {
              "Name": "Factor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "6",
              "MaxValue": "{None}"
            }
          ],
          "icon": "838ae06cda41a2544a1d2a528389d5b5",
          "abilitySlot": "1"
        },
        {
          "typeID": 1248184226,
          "name": "fa8734fc72d04d6ca049d8214af25697",
          "description": "bcae8312d149413c8bf4dc6535707bac",
          "tooltipData": [
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            },
            {
              "Name": "Delay",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "838ae06cda41a2544a1d2a528389d5b5",
          "abilitySlot": "1"
        },
        {
          "typeID": 20562677,
          "name": "092bd4c364f042e99bb58c8a8d186056",
          "description": "4bd981bb5f824ff5be20dc5f0e6f3c7c",
          "tooltipData": [
            {
              "Name": "Health",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "16",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "89c37320af892ae43b410f4d610d7ea8",
          "abilitySlot": "2"
        },
        {
          "typeID": 98401366,
          "name": "029617a3b9f646f291ee6fbe6e4b09ab",
          "description": "493add3cb6294c2faa6faa42540ae60f",
          "tooltipData": [],
          "icon": "89c37320af892ae43b410f4d610d7ea8",
          "abilitySlot": "2"
        },
        {
          "typeID": 1593407006,
          "name": "85021219ed3b4eae94b77c6cc66d8c73",
          "description": "623e65d3d5314f46b8d9ef7c966cba23",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "GradualSlow",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "e6ee239b70b64b0cbdd9525e06acda60",
              "MaxValue": "{None}"
            },
            {
              "Name": "GradualSlowDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            }
          ],
          "icon": "89c37320af892ae43b410f4d610d7ea8",
          "abilitySlot": "2"
        },
        {
          "typeID": 491976489,
          "name": "263928926f6e45f69d8eb664f11723ad",
          "description": "3dd5205148ef4362b24e89f0ed10c73a",
          "tooltipData": [
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            }
          ],
          "icon": "89c37320af892ae43b410f4d610d7ea8",
          "abilitySlot": "2"
        },
        {
          "typeID": 1545217945,
          "name": "ec58be00b3ce49c0ae51d8a55c64d7de",
          "description": "6990148e3f484720a2d9314a30e05218",
          "tooltipData": [
            {
              "Name": "Reduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "a22c6c4bc967d4e48a44f0e87a93023e",
          "abilitySlot": "3"
        },
        {
          "typeID": 1950760496,
          "name": "9935d81388b34d7bb9c2ab6bf2bcf1fb",
          "description": "1d15c56c757849f58ab7cf19ae3aee1f",
          "tooltipData": [
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "ShieldAmounts",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{ Id: 207 Gen: 1}",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "a22c6c4bc967d4e48a44f0e87a93023e",
          "abilitySlot": "3"
        },
        {
          "typeID": 1841895896,
          "name": "ff938089753c4ea59820af5ae19c64aa",
          "description": "070fc4aa06494edd9d180c677c4408fc",
          "tooltipData": [
            {
              "Name": "PowerFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "20",
              "MaxValue": "{None}"
            }
          ],
          "icon": "a22c6c4bc967d4e48a44f0e87a93023e",
          "abilitySlot": "3"
        },
        {
          "typeID": 282838847,
          "name": "aeffa2eff6404e5f80b295b05650ea7f",
          "description": "b6d22a4ca4d549f0b85efed626b53c0a",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "ImmobilizeDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "Immobilize",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "0393817baad8475c802924bce807e412",
              "MaxValue": "{None}"
            }
          ],
          "icon": "35a1515e35b5104449dfa8802c5aa0e2",
          "abilitySlot": "4"
        },
        {
          "typeID": 368403622,
          "name": "b034836a7aca40a3b1d016389c928486",
          "description": "dd4ef93da70248f7a735f2d80a8808d2",
          "tooltipData": [],
          "icon": "35a1515e35b5104449dfa8802c5aa0e2",
          "abilitySlot": "4"
        },
        {
          "typeID": 1023438624,
          "name": "84acdd4aa4f24e4f9c6d78ca80996495",
          "description": "2ef0c9b0a2b64477aa732a1c950df75c",
          "tooltipData": [
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            }
          ],
          "icon": "35a1515e35b5104449dfa8802c5aa0e2",
          "abilitySlot": "4"
        },
        {
          "typeID": 860523484,
          "name": "b1eda2489bbf41baadab8c983852e709",
          "description": "2edc961af2914e6099338c9578b7f43b",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "{None}"
            },
            {
              "Name": "Factor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "{None}"
            }
          ],
          "icon": "b97fb95168d0cb648867a4b920145f33",
          "abilitySlot": "6"
        }
      ],
      "ability1": {
        "typeID": 1866135133,
        "name": "58a2ad2fb19342d1abb2d73c233d2bf8",
        "description": "fe71216ee9504edb81a5a61a9aac8d74",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy Gain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "7",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "SelfHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Rage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "MaxRage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "0",
            "MaxValue": "{None}"
          },
          {
            "Name": "Slow",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "b5b19aeaa91c4354a330bd761a1f0d86",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowPercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "DotDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "8",
            "MaxValue": "{None}"
          },
          {
            "Name": "Delay",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "SandsOfTime",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "84add99cb10e44108df69774e2221ff7",
            "MaxValue": "{None}"
          }
        ],
        "icon": "a509235e8f0dc3344b4546e6c5dac66e",
        "icon128": "1e376cc95b8550443b527db1234300bd"
      },
      "ability2": {
        "typeID": 939588370,
        "name": "561a6f9d5f634189a35327812a66fb9c",
        "description": "b5fb79bde4b7416b9c8ea9ed80d4fd15",
        "tooltipData": [
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "14",
            "MaxValue": "{None}"
          },
          {
            "Name": "RevitalizeHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "RevitalizeDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy Gain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "Revitalize",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "MinorHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Charges",
            "LocalizedName": "6135f53b9b8641a88832495ac58aaa05",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "RechargeBoost",
            "LocalizedName": "d45b2ca84e304fe9832f713a1d9269a3",
            "SortID": 3,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "{None}"
          }
        ],
        "icon": "9e5e423312451a54eb0f216a09a06460",
        "icon128": "838ae06cda41a2544a1d2a528389d5b5"
      },
      "ability3": {
        "typeID": 994495680,
        "name": "1073d39b7cf340578240f4f981e16fae",
        "description": "5b35be155cd8466d88cff8ff2a9bffcc",
        "tooltipData": [
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowPercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "33",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirTime",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 1,
            "ValueType": "RangeValue",
            "UnitType": "Second",
            "Value": "0.5",
            "MaxValue": "0.65"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "8",
            "MaxValue": "{None}"
          }
        ],
        "icon": "bd0621c1a7155444292dbb7b7888c889",
        "icon128": "89c37320af892ae43b410f4d610d7ea8"
      },
      "ability4": {
        "typeID": 2045535040,
        "name": "1258f9e720c3475f8e9027136cd77702",
        "description": "369a3303d3914887917b3357dad1e7c1",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.2",
            "MaxValue": "{None}"
          },
          {
            "Name": "RecastDuration",
            "LocalizedName": "dd7bc1a2cae2405a9d5038f95fe638d8",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "4.5",
            "MaxValue": "{None}"
          }
        ],
        "icon": "12cf0ceb55beaf648b7a332d77abb636",
        "icon128": "a22c6c4bc967d4e48a44f0e87a93023e"
      },
      "ability5": {
        "typeID": 756563159,
        "name": "2f1c9d5894ce4a32a685cdb46cfdb4a6",
        "description": "a0c4c0a8ac874caaac32e402192cf398",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "16",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Root",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "e6ee239b70b64b0cbdd9525e06acda60",
            "MaxValue": "{None}"
          },
          {
            "Name": "GradualSlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirTime",
            "LocalizedName": "c2f75a279186454aa0ad062ef601c9bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.95",
            "MaxValue": "{None}"
          }
        ],
        "icon": "31efdd04d45607f4db168eb88ef34962",
        "icon128": "35a1515e35b5104449dfa8802c5aa0e2"
      },
      "ability6": {
        "typeID": 3981858,
        "name": "1675f4013c7d4c40b74c09e24543cb09",
        "description": "f1d4df3d18f14bbd92acf98e8a42cdaa",
        "tooltipData": [
          {
            "Name": "Petrify",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 2,
            "ValueType": "ReferenceValue",
            "UnitType": "Second",
            "Value": "51eb6130356047ee9f8209ede5f36114",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "ShieldAmount",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "{None}"
          },
          {
            "Name": "DelayDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          },
          {
            "Name": "StoneGlassBuff",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 1,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "1675f4013c7d4c40b74c09e24543cb09",
            "MaxValue": "{None}"
          }
        ],
        "icon": "73643dff4ab3c3547b863926a5ea11df",
        "icon128": "386cf7114dc088c44ad5409ec6838caf"
      },
      "ability7": {
        "typeID": 1759337751,
        "name": "5e474a91c25e4af8ae04b88c7c019bfa",
        "description": "aacbbba9ae434b7591f6362a1a37976c",
        "tooltipData": [
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "CooldownAcceleration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "25",
            "MaxValue": "{None}"
          },
          {
            "Name": "Stun",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "4c898668b22b487786e7382d634603e7",
            "MaxValue": "{None}"
          },
          {
            "Name": "StunDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "ImpactDelay",
            "LocalizedName": "c2f75a279186454aa0ad062ef601c9bf",
            "SortID": 1,
            "ValueType": "AdditiveValue",
            "UnitType": "Second",
            "Value": "2",
            "MaxValue": "1.5"
          }
        ],
        "icon": "2cbbf6ca6c1baa04b94e1fef999bbacf",
        "icon128": "b97fb95168d0cb648867a4b920145f33"
      }
    },
    {
      "typeID": 1,
      "name": "06b590e739cd4c27abebc6f98d15cdd3",
      "devName": "Igniter",
      "title": "214168f460854f5fb39a5b0b73941cc5",
      "description": "96244634ce504632a8454a971e90a475",
      "icon": "08d5adc2bbf509744a62b894ef6279c7",
      "wideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "battlerites": [
        {
          "typeID": 549211284,
          "name": "bfb3a987803248209fc3b2cd8f1d5afa",
          "description": "a1d3e076b3cd41dbb5f9cd602615e357",
          "tooltipData": [
            {
              "Name": "searingheatbonusdamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            },
            {
              "Name": "Ignite",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "6516c9a1790b4f60914e8e7698223707",
              "MaxValue": "{None}"
            },
            {
              "Name": "IgniteDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "MultiplativeValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "4"
            },
            {
              "Name": "IgniteDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "4.5",
              "MaxValue": "4"
            },
            {
              "Name": "AreaDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            }
          ],
          "icon": "117c35c7f757858428a733d8da4982be",
          "abilitySlot": "1"
        },
        {
          "typeID": 1057094168,
          "name": "865633b917b248f1b85cfac3f6f757e2",
          "description": "5304f1a4804f40eca98709a9df64b7c2",
          "tooltipData": [
            {
              "Name": "CooldownIncrease",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "SubtractiveValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "7"
            }
          ],
          "icon": "117c35c7f757858428a733d8da4982be",
          "abilitySlot": "1"
        },
        {
          "typeID": 97984982,
          "name": "dab7e0d2e1864ba48ba329f9df2fc870",
          "description": "712339461db84148a8f99ed987c86e47",
          "tooltipData": [
            {
              "Name": "SpeedFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "30",
              "MaxValue": "{None}"
            },
            {
              "Name": "FastSpeedFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "{None}"
            }
          ],
          "icon": "117c35c7f757858428a733d8da4982be",
          "abilitySlot": "1"
        },
        {
          "typeID": 285754693,
          "name": "8eaae00ad0e94c8c9a0fffbec6841641",
          "description": "354b830b7b654317a307bc7ad39e79be",
          "tooltipData": [
            {
              "Name": "SpeedModifier",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "30",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "de69286ec8d6c934c9b04c51d1814b5c",
          "abilitySlot": "2"
        },
        {
          "typeID": 1936973851,
          "name": "b9a502ba194f42c6bb74468d9dbdd42c",
          "description": "8df5a57f3ff948d29efeaf7d00b92d4f",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "{None}"
            },
            {
              "Name": "Ignite",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "6516c9a1790b4f60914e8e7698223707",
              "MaxValue": "{None}"
            },
            {
              "Name": "IgniteDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "MultiplativeValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "4"
            },
            {
              "Name": "IgniteDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "4.5",
              "MaxValue": "4"
            },
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "SubtractiveValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "15"
            }
          ],
          "icon": "de69286ec8d6c934c9b04c51d1814b5c",
          "abilitySlot": "2"
        },
        {
          "typeID": 1357081579,
          "name": "482bbcd5e6814c3abb3dc65943702623",
          "description": "9b139a64ab0d4053838fb6102f0c5f5f",
          "tooltipData": [
            {
              "Name": "DamageAbsorb",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "15",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "de69286ec8d6c934c9b04c51d1814b5c",
          "abilitySlot": "2"
        },
        {
          "typeID": 622680583,
          "name": "3884eb7ed79749ae88bcef0e6f3a064c",
          "description": "67564dce52a6463fb3230a8ee81bebf7",
          "tooltipData": [
            {
              "Name": "RadiusBonus",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "15",
              "MaxValue": "{None}"
            },
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "48122c1a1a8cae7408409c90126f11cb",
          "abilitySlot": "3"
        },
        {
          "typeID": 1435593947,
          "name": "30a1c5ea91a64f81af1307950b2de6c5",
          "description": "308667bfb0974f9eaa447cb51eef1617",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "10",
              "MaxValue": "{None}"
            },
            {
              "Name": "Ignite",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "6516c9a1790b4f60914e8e7698223707",
              "MaxValue": "{None}"
            },
            {
              "Name": "IgniteDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "MultiplativeValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "4"
            },
            {
              "Name": "IgniteDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "4.5",
              "MaxValue": "4"
            }
          ],
          "icon": "48122c1a1a8cae7408409c90126f11cb",
          "abilitySlot": "3"
        },
        {
          "typeID": 1648079120,
          "name": "d752a582bcc34de3a3ffe5639aa4c898",
          "description": "3370536ded314e878fda97a74b372e3f",
          "tooltipData": [
            {
              "Name": "HealFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "75",
              "MaxValue": "{None}"
            }
          ],
          "icon": "48122c1a1a8cae7408409c90126f11cb",
          "abilitySlot": "3"
        },
        {
          "typeID": 1114201862,
          "name": "61ec990d965f4f5b8283acbf28376742",
          "description": "6f1050fd48fc4d21bbd69d1ccb488c02",
          "tooltipData": [
            {
              "Name": "CooldownReductionOnHit",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "BaseCooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "64ae838604146444aac3474b78250f52",
          "abilitySlot": "4"
        },
        {
          "typeID": 1907262252,
          "name": "67c7295752cd4eecab7c5ccd2c7553d7",
          "description": "1c24b0e433d8420a8c2421f67d723c13",
          "tooltipData": [
            {
              "Name": "StunDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "64ae838604146444aac3474b78250f52",
          "abilitySlot": "4"
        },
        {
          "typeID": 234265417,
          "name": "de4715cfc2c14d2296e331d7546dc458",
          "description": "3922e259deb544f0ae713fc720b49047",
          "tooltipData": [
            {
              "Name": "DistanceFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "{None}"
            },
            {
              "Name": "KnockbackFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "25",
              "MaxValue": "{None}"
            }
          ],
          "icon": "64ae838604146444aac3474b78250f52",
          "abilitySlot": "4"
        },
        {
          "typeID": 1938861925,
          "name": "dea1f8e74395489386940b36ed25145e",
          "description": "b57f49c983bf47839365ecb5721d1ee0",
          "tooltipData": [
            {
              "Name": "NewCooldown",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "OldCooldown",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "20",
              "MaxValue": "{None}"
            }
          ],
          "icon": "c6d71f7b4598ec14cab637f6d9ffce64",
          "abilitySlot": "5"
        },
        {
          "typeID": 2055623446,
          "name": "6538153828df47cdb9d44fc307c43aa6",
          "description": "a1db5b16e0a2433a808ea4b796cb2980",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "b2b7f487ed9f5e64c975ee8d7a4abc4c",
          "abilitySlot": "6"
        },
        {
          "typeID": 763559277,
          "name": "77bff9c330e24219b6974e9b9085a6bc",
          "description": "e72508d8be4a4be9bb5a3a8b6ad6a23b",
          "tooltipData": [
            {
              "Name": "SlowFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "7612ba34ea3cdf9429a033d92e85c117",
          "abilitySlot": "999"
        },
        {
          "typeID": 1369609980,
          "name": "f65c39fbf51e4f9ca207fd7d42fb339f",
          "description": "576bbc887f1e4e4789a1ba6b7a7828ed",
          "tooltipData": [
            {
              "Name": "EnergyBonus",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Percent",
              "Value": "25",
              "MaxValue": "{None}"
            },
            {
              "Name": "EnergyFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "61e058b8f4b79f4419ec1496f223ee36",
          "abilitySlot": "999"
        }
      ],
      "ability1": {
        "typeID": 2031258179,
        "name": "8ac76be13b874a8c9bda8e0ccbfbbfea",
        "description": "3e65bc0efc58478bb0e6bcb2fdd4497c",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "15",
            "MaxValue": "{None}"
          },
          {
            "Name": "IgniteBuff",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6516c9a1790b4f60914e8e7698223707",
            "MaxValue": "{None}"
          },
          {
            "Name": "Ignite",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "IgniteDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "8",
            "MaxValue": "4"
          },
          {
            "Name": "IgniteDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "4.5",
            "MaxValue": "4"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "6",
            "MaxValue": "{None}"
          }
        ],
        "icon": "1efe674495ba41a4f8e3c5f6ca74ff81",
        "icon128": "c4c6d5c6e1b1aba488858c34a03b7d6b"
      },
      "ability2": {
        "typeID": 5,
        "name": "5036d68cba1943ed9b48dd3d34639eee",
        "description": "003344c7d87f4917b43d4f86ae9a165f",
        "tooltipData": [
          {
            "Name": "ChannelDuration",
            "LocalizedName": "171abb321fe24867a96d497e7771f113",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "3"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "16",
            "MaxValue": "{None}"
          },
          {
            "Name": "Ignite",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "6516c9a1790b4f60914e8e7698223707",
            "MaxValue": "{None}"
          },
          {
            "Name": "IgniteDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "8",
            "MaxValue": "4"
          },
          {
            "Name": "IgniteDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "4.5",
            "MaxValue": "4"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "7",
            "MaxValue": "{None}"
          },
          {
            "Name": "Ticks",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "3",
            "MaxValue": "{None}"
          }
        ],
        "icon": "32699c781b909c54f9ede7f0e5632341",
        "icon128": "117c35c7f757858428a733d8da4982be"
      },
      "ability3": {
        "typeID": 47,
        "name": "caf1f0ecb28a4809a4700ac9f0a22d96",
        "description": "e280fc48209540eeadda783e4a746a18",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirTime",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 1,
            "ValueType": "AdditiveValue",
            "UnitType": "Second",
            "Value": "0.75",
            "MaxValue": "0.2"
          }
        ],
        "icon": "e2fa219fa7437ca449a315a4c7604404",
        "icon128": "de69286ec8d6c934c9b04c51d1814b5c"
      },
      "ability4": {
        "typeID": 776026463,
        "name": "2e688f9f5cd14d6dbb2083568698c6c6",
        "description": "fe7dd68deb59443a95084fe1971b93d5",
        "tooltipData": [
          {
            "Name": "AoEDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "{None}"
          },
          {
            "Name": "StunDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.6",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Stun",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "DelayDuration",
            "LocalizedName": "c2f75a279186454aa0ad062ef601c9bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.1",
            "MaxValue": "{None}"
          }
        ],
        "icon": "fb2280ffc2d038a4fb3cd7f10039a8c9",
        "icon128": "48122c1a1a8cae7408409c90126f11cb"
      },
      "ability5": {
        "typeID": 64240820,
        "name": "cad9813441df46689175d126711b4de6",
        "description": "21769ab7156d49bdbc2602acbd0399d3",
        "tooltipData": [
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "Snare",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "b5b19aeaa91c4354a330bd761a1f0d86",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowPercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "ModifierPercent",
            "Value": "25",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "{None}"
          }
        ],
        "icon": "a08c8a6b979f0044498bd186f1100386",
        "icon128": "64ae838604146444aac3474b78250f52"
      },
      "ability6": {
        "typeID": 1639501394,
        "name": "464077c6fd9e4f1a94391243445ff1b1",
        "description": "77cfefabc34b4a1bb5bd587c9a383989",
        "tooltipData": [
          {
            "Name": "Ignite",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "IgniteDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "8",
            "MaxValue": "4"
          },
          {
            "Name": "IgniteDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "4.5",
            "MaxValue": "4"
          },
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2.8",
            "MaxValue": "{None}"
          }
        ],
        "icon": "1d50b7307459ba04fbfd01c5d2aeebe1",
        "icon128": "c6d71f7b4598ec14cab637f6d9ffce64"
      },
      "ability7": {
        "typeID": 972014570,
        "name": "7082d1708c3948988c206b2d773b53c0",
        "description": "8bde45242a1942ecb496a134951a4b00",
        "tooltipData": [
          {
            "Name": "IgniteBuff",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6516c9a1790b4f60914e8e7698223707",
            "MaxValue": "4"
          },
          {
            "Name": "TickDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "TriggerTime",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "36",
            "MaxValue": "{None}"
          },
          {
            "Name": "Ignite",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "6516c9a1790b4f60914e8e7698223707",
            "MaxValue": "{None}"
          },
          {
            "Name": "IgniteDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "8",
            "MaxValue": "4"
          },
          {
            "Name": "IgniteDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "4.5",
            "MaxValue": "4"
          },
          {
            "Name": "StunDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.65",
            "MaxValue": "{None}"
          },
          {
            "Name": "TickDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "AreaDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "4",
            "MaxValue": "{None}"
          },
          {
            "Name": "Stun",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "4c898668b22b487786e7382d634603e7",
            "MaxValue": "{None}"
          },
          {
            "Name": "TotalDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "24",
            "MaxValue": "8"
          },
          {
            "Name": "TotalDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "4",
            "MaxValue": "{None}"
          }
        ],
        "icon": "ba62274f00442104ea4b0a4aaa874b50",
        "icon128": "b2b7f487ed9f5e64c975ee8d7a4abc4c"
      }
    },
    {
      "typeID": 369797039,
      "name": "943be726de724906be18c214511a3f7b",
      "devName": "Inhibitor",
      "title": "8de071764eb640c2953b811f14777bac",
      "description": "8179699f798d4dbcb711aa7533e7ac12",
      "icon": "6477c7810f95a394e936caacf42d0b4e",
      "wideIcon": "f1cc53a29c58089478f6438589d9b32d",
      "battlerites": [
        {
          "typeID": 1753487832,
          "name": "394dc1f8066249268886161296a2a222",
          "description": "8fb03cb59e964a2e9293450efa25e380",
          "tooltipData": [
            {
              "Name": "SnareDuration2",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "AdditiveValue",
              "UnitType": "Second",
              "Value": "1.5",
              "MaxValue": "1"
            },
            {
              "Name": "SnareDuration1",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "fe5369baf5a80dc47b0656ae7be82e09",
          "abilitySlot": "0"
        },
        {
          "typeID": 166822147,
          "name": "afab06bdd5b14cf585ffef1263e256d7",
          "description": "8fc379e27ffc4234a00928f0ebf0dfd8",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "5",
              "MaxValue": "{None}"
            },
            {
              "Name": "HasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "8",
              "MaxValue": "{None}"
            },
            {
              "Name": "MaxStacks",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "fe5369baf5a80dc47b0656ae7be82e09",
          "abilitySlot": "0"
        },
        {
          "typeID": 287430235,
          "name": "5b96b6b239594aa2bce8705f0b5a64f5",
          "description": "9bc12b2e464947b699f797549c413364",
          "tooltipData": [
            {
              "Name": "SilenceDuration1",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "SilenceDuration2",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "c2525970f8ab5574191da4938fa5619b",
          "abilitySlot": "1"
        },
        {
          "typeID": 217292709,
          "name": "b492db9e886746828513c06f128fd169",
          "description": "4e9a07e2337c477b9cb983e2937ba664",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            }
          ],
          "icon": "c2525970f8ab5574191da4938fa5619b",
          "abilitySlot": "1"
        },
        {
          "typeID": 6258350,
          "name": "29a1ca933cc94aa3a5fbe7f0f64d6f58",
          "description": "90520a8c252b4e669986b169608ccb14",
          "tooltipData": [
            {
              "Name": "RecastDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "2771f14010b802143b0b4d5fc8e4bb9c",
          "abilitySlot": "3"
        },
        {
          "typeID": 835136512,
          "name": "9c1a8643354b4d068ec6441991cdda7c",
          "description": "86387e29ae604b55adba3cbfcb5792eb",
          "tooltipData": [
            {
              "Name": "Judgement",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "4adfb0c9a309466ab562f42159503c3b",
              "MaxValue": "{None}"
            },
            {
              "Name": "AmplifyFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "15",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "2771f14010b802143b0b4d5fc8e4bb9c",
          "abilitySlot": "3"
        },
        {
          "typeID": 540463439,
          "name": "d2bf3801b7d24247907cc82a2e46bf66",
          "description": "34f0dd164ef943eeabdd0b7815b11799",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            },
            {
              "Name": "FadingSnare",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "e6ee239b70b64b0cbdd9525e06acda60",
              "MaxValue": "{None}"
            },
            {
              "Name": "GradualSlowDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "0eb9279bebee4a24b8fe4604894d3fb6",
          "abilitySlot": "2"
        },
        {
          "typeID": 353408816,
          "name": "d3d62606d2af4184a016fe32dc0817c7",
          "description": "9f55e8520fc74b31b3e40013d53dc2d2",
          "tooltipData": [
            {
              "Name": "HasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "25",
              "MaxValue": "{None}"
            },
            {
              "Name": "DamageFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "15",
              "MaxValue": "{None}"
            }
          ],
          "icon": "0eb9279bebee4a24b8fe4604894d3fb6",
          "abilitySlot": "2"
        },
        {
          "typeID": 31464054,
          "name": "57ecade50ed1449ea482a6509f888ff5",
          "description": "a2b9b95f122a4617a30a97672403d0bc",
          "tooltipData": [
            {
              "Name": "Health",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "14",
              "MaxValue": "{None}"
            }
          ],
          "icon": "0eb9279bebee4a24b8fe4604894d3fb6",
          "abilitySlot": "2"
        },
        {
          "typeID": 670617675,
          "name": "421131ff14df40728db06cd93cff8edb",
          "description": "c5e84ee3c186468ea67497be6c69dfb2",
          "tooltipData": [
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "d6c97da35fc19134881cb5a4c44e3912",
          "abilitySlot": "4"
        },
        {
          "typeID": 1580302077,
          "name": "1aad59fb48d340f5a96c81e3a6ce7bfa",
          "description": "08daaf6991cb43a094d3052826ac6f14",
          "tooltipData": [
            {
              "Name": "AbilityCharges1",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            },
            {
              "Name": "AbilityCharges2",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "d6c97da35fc19134881cb5a4c44e3912",
          "abilitySlot": "4"
        },
        {
          "typeID": 1200081009,
          "name": "82bd30cf265d44c98c43f35a27c25123",
          "description": "34e2d6a7b8094c0a8356f0fdbea07428",
          "tooltipData": [
            {
              "Name": "SpeedFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "75",
              "MaxValue": "{None}"
            }
          ],
          "icon": "d6c97da35fc19134881cb5a4c44e3912",
          "abilitySlot": "4"
        },
        {
          "typeID": 1291502335,
          "name": "76597d4067104138a1cb83ec614d3874",
          "description": "a3380d639b1444eda8ee35761112c3f4",
          "tooltipData": [
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            },
            {
              "Name": "Corruption",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "58f6ad5625304397af45d34aa0fb2552",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "5",
              "MaxValue": "{None}"
            },
            {
              "Name": "WeakenFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "15",
              "MaxValue": "{None}"
            }
          ],
          "icon": "c38b2b35320a6894f98fd0814e08ea87",
          "abilitySlot": "5"
        },
        {
          "typeID": 1816548215,
          "name": "7a869427b7fb4de481eff9c92605ab22",
          "description": "b7b97653b5b642b591b4f95180f086eb",
          "tooltipData": [
            {
              "Name": "Repetitions",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "3",
              "MaxValue": "{None}"
            },
            {
              "Name": "ExtraRepetition",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "SubtractiveValue",
              "UnitType": "Standard",
              "Value": "1",
              "MaxValue": "2"
            }
          ],
          "icon": "af1b0c6a44fc0a34694eafc090cd68ee",
          "abilitySlot": "6"
        },
        {
          "typeID": 1701689862,
          "name": "1c96173ba1f24d57879da48b417a7dda",
          "description": "7a5e37c17d9c45beabe9d5f287c1b23c",
          "tooltipData": [
            {
              "Name": "FactorBonus",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "fe5369baf5a80dc47b0656ae7be82e09",
          "abilitySlot": "999"
        },
        {
          "typeID": 1369609980,
          "name": "f65c39fbf51e4f9ca207fd7d42fb339f",
          "description": "576bbc887f1e4e4789a1ba6b7a7828ed",
          "tooltipData": [
            {
              "Name": "EnergyBonus",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Percent",
              "Value": "25",
              "MaxValue": "{None}"
            },
            {
              "Name": "EnergyFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "61e058b8f4b79f4419ec1496f223ee36",
          "abilitySlot": "999"
        }
      ],
      "ability1": {
        "typeID": 2026099356,
        "name": "b3c7ca64b9754158b743190f29615c05",
        "description": "8b0a161ab8e54b1ab1e1409e5cd05294",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "14",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "8",
            "MaxValue": "{None}"
          },
          {
            "Name": "WeakenFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "15",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Heal",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "MaxStacks",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "1",
            "MaxValue": "{None}"
          },
          {
            "Name": "Corruption",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "58f6ad5625304397af45d34aa0fb2552",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "CooldownReduction",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "{None}",
            "MaxValue": "{None}"
          }
        ],
        "icon": "e6f9384b59b63e145bf4bef7e63c7e9d",
        "icon128": "fe5369baf5a80dc47b0656ae7be82e09"
      },
      "ability2": {
        "typeID": 538043106,
        "name": "36ec82206a4a40bbbbf20d65e0d28707",
        "description": "aa6c0832ac854967a877a6295a45179d",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "22",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "Judgement",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "4adfb0c9a309466ab562f42159503c3b",
            "MaxValue": "{None}"
          },
          {
            "Name": "AmplifyFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "15",
            "MaxValue": "{None}"
          },
          {
            "Name": "MaxStacks",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "1",
            "MaxValue": "{None}"
          },
          {
            "Name": "Heal",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "CooldownReduction",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "TrueDamageFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "{None}",
            "MaxValue": "{None}"
          }
        ],
        "icon": "4cdb1d7f1f5835943b114da887124e90",
        "icon128": "c2525970f8ab5574191da4938fa5619b"
      },
      "ability3": {
        "typeID": 238454699,
        "name": "1ee77581eb4d46599108e4c3b8ae9417",
        "description": "8db88299434643d0afe7ca41d5bb2451",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "ShieldAmount",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "28",
            "MaxValue": "{None}"
          },
          {
            "Name": "IncapDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "{None}",
            "MaxValue": "{None}"
          }
        ],
        "icon": "e4fa5829b6062124db8f23b72e8dd0f5",
        "icon128": "0eb9279bebee4a24b8fe4604894d3fb6"
      },
      "ability4": {
        "typeID": 1729824531,
        "name": "a60077f7bee34d5cacb238b8bc0021fb",
        "description": "d707507e666847168efb3e3f7190253b",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.2",
            "MaxValue": "{None}"
          },
          {
            "Name": "CounterDuration",
            "LocalizedName": "a307304ca3ed4c0db9d232cf2580f450",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.2",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirDuration",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 2,
            "ValueType": "AdditiveValue",
            "UnitType": "Second",
            "Value": "0.8",
            "MaxValue": "0.2"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 3,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          }
        ],
        "icon": "8e1ce3013715436499f43470b61e2ce9",
        "icon128": "2771f14010b802143b0b4d5fc8e4bb9c"
      },
      "ability5": {
        "typeID": 792310466,
        "name": "64a9e7bbbcf54679a1aed5d4fe336221",
        "description": "71116aeb33d749f489a8b6491de92ea4",
        "tooltipData": [
          {
            "Name": "AoEDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "SilenceDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Delay",
            "LocalizedName": "c2f75a279186454aa0ad062ef601c9bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.7",
            "MaxValue": "{None}"
          },
          {
            "Name": "GradualSlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "GradualSlow",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "e6ee239b70b64b0cbdd9525e06acda60",
            "MaxValue": "{None}"
          },
          {
            "Name": "Silence",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "b91665804df04ff599466f3714f3c9f1",
            "MaxValue": "{None}"
          }
        ],
        "icon": "ee290b6d67aac7d49a7dd8793364d7cf",
        "icon128": "d6c97da35fc19134881cb5a4c44e3912"
      },
      "ability6": {
        "typeID": 1939428505,
        "name": "b4979a22094b4e77a2e4b39226147606",
        "description": "4ae0a88d89ff4cd7bcb3004046453edb",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.2",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirDuration",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 1,
            "ValueType": "AdditiveValue",
            "UnitType": "Second",
            "Value": "0.8",
            "MaxValue": "0.2"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6",
            "MaxValue": "{None}"
          }
        ],
        "icon": "091e1cf85d3379c45be8776b3817a439",
        "icon128": "c38b2b35320a6894f98fd0814e08ea87"
      },
      "ability7": {
        "typeID": 1633833490,
        "name": "15d92440173143f9a43de41105870a05",
        "description": "6cb4b87138f547a69604e9b6a9d146dc",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "24",
            "MaxValue": "{None}"
          }
        ],
        "icon": "6128135d5d6fccf41ac6be266b6afce9",
        "icon128": "af1b0c6a44fc0a34694eafc090cd68ee"
      }
    },
    {
      "typeID": 44962063,
      "name": "6868ad46fc604034a78f3c57300c3257",
      "devName": "Inquisitor",
      "title": "d3c95ae27f714bc6ab424f213a2143e8",
      "description": "e71a99011dec4bd6a24a0f9035ef39c2",
      "icon": "b9f935b04557efa4e95d6cec4d151985",
      "wideIcon": "427116cdee46bad4cbaa99d7063e0832",
      "battlerites": [
        {
          "typeID": 517214319,
          "name": "ae52da0abf5542b9b3ebf5228ad6b8d6",
          "description": "c98d78d5f69648c7801e274ea319d064",
          "tooltipData": [
            {
              "Name": "SilenceDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.4",
              "MaxValue": "{None}"
            },
            {
              "Name": "SilenceDurationOriginal",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "Silence",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "b91665804df04ff599466f3714f3c9f1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "70a26229b7880aa44a46e8cb2af9334f",
          "abilitySlot": "0"
        },
        {
          "typeID": 1696469421,
          "name": "c84fa0c4c8154052bf9b426828658fc0",
          "description": "ca721588699c411a9b666fffbd6b221d",
          "tooltipData": [
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "5",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusRange",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "25",
              "MaxValue": "{None}"
            }
          ],
          "icon": "70a26229b7880aa44a46e8cb2af9334f",
          "abilitySlot": "0"
        },
        {
          "typeID": 2112814882,
          "name": "49994f7cef554f8d98651da04d46be88",
          "description": "4aea0473fb504a85bfc2c1063c728345",
          "tooltipData": [
            {
              "Name": "SilenceDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "SplashDamageAmount",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "Silence",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "b91665804df04ff599466f3714f3c9f1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "70a26229b7880aa44a46e8cb2af9334f",
          "abilitySlot": "0"
        },
        {
          "typeID": 1379514767,
          "name": "7efda1e79ad7400f95b334bf5d669293",
          "description": "675ce8f45a594a3ca1f3157816e6d062",
          "tooltipData": [
            {
              "Name": "FountainHeal",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "MultiplativeValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "3"
            }
          ],
          "icon": "81f898538a9eba14b82110f8ebf6654e",
          "abilitySlot": "1"
        },
        {
          "typeID": 407015891,
          "name": "0189a17f03624c2baf082f5a87edb5e8",
          "description": "221c64827e074fc7b19160af246270b6",
          "tooltipData": [
            {
              "Name": "SelfHealing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            },
            {
              "Name": "AreaHealing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "18",
              "MaxValue": "{None}"
            }
          ],
          "icon": "6c30b1e6992030e4dae06a355b7a4fb4",
          "abilitySlot": "2"
        },
        {
          "typeID": 876487792,
          "name": "966e1172342f4201b52da37fed90ddaa",
          "description": "3283bce553a346b79fbc295b3deac395",
          "tooltipData": [],
          "icon": "6c30b1e6992030e4dae06a355b7a4fb4",
          "abilitySlot": "2"
        },
        {
          "typeID": 125826883,
          "name": "4fbe521563094111b502a5e4269b754c",
          "description": "a1fac83f40f04fc8af78d707442d1fb0",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "6c30b1e6992030e4dae06a355b7a4fb4",
          "abilitySlot": "2"
        },
        {
          "typeID": 222099909,
          "name": "4587d296438c41c1b4446ef2fd231a98",
          "description": "20650eb6b2404ad9a011fcd093d87cba",
          "tooltipData": [],
          "icon": "baa9baf5b01c5ee42902398a8f946a5a",
          "abilitySlot": "3"
        },
        {
          "typeID": 216821673,
          "name": "4d777d4c04904380ba24ef40a6dcbcbd",
          "description": "39f57f9c1d224ee8bef018327e88a5dc",
          "tooltipData": [],
          "icon": "baa9baf5b01c5ee42902398a8f946a5a",
          "abilitySlot": "3"
        },
        {
          "typeID": 200449644,
          "name": "9e4c5352dcdb4cfe9efdd7ece0daefa8",
          "description": "d06e02d5433f4a2db7e60a8437df336c",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            }
          ],
          "icon": "baa9baf5b01c5ee42902398a8f946a5a",
          "abilitySlot": "3"
        },
        {
          "typeID": 1187034236,
          "name": "c7ed937149fd4c61a02faa2acc595f36",
          "description": "d0c76a264d2848f6b1ed80ef811309b4",
          "tooltipData": [
            {
              "Name": "RecastDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "dba76bbb88cac764f9a8aeff389abb99",
          "abilitySlot": "4"
        },
        {
          "typeID": 831110438,
          "name": "3b6847021f68428790151792577dc33a",
          "description": "b7bf2dc006fd45198c36e5da9e9cc96f",
          "tooltipData": [
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "10",
              "MaxValue": "{None}"
            },
            {
              "Name": "DamageFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "20",
              "MaxValue": "{None}"
            },
            {
              "Name": "BuffDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "4",
              "MaxValue": "{None}"
            }
          ],
          "icon": "dba76bbb88cac764f9a8aeff389abb99",
          "abilitySlot": "4"
        },
        {
          "typeID": 1815887668,
          "name": "9baf08086fd2497884745a84733343a4",
          "description": "32398661fa8c4b79bb9f4ccfd2ce13dd",
          "tooltipData": [
            {
              "Name": "Factor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "30",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "dba76bbb88cac764f9a8aeff389abb99",
          "abilitySlot": "4"
        },
        {
          "typeID": 245490691,
          "name": "6441be53a9fe48e8b7102073c1c63c05",
          "description": "457ef48ea3484fd28b5b2c2c2f44b19a",
          "tooltipData": [
            {
              "Name": "BonusRange",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "25",
              "MaxValue": "{None}"
            },
            {
              "Name": "SlowFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "33",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "bc8806c71e64fcf4880365f5b700a0fa",
          "abilitySlot": "6"
        }
      ],
      "ability1": {
        "typeID": 168381495,
        "name": "730ee0875eb544a0ae7c406de950da4d",
        "description": "d5b9c639764a47178f45f4c5796a89f5",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "15",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "7",
            "MaxValue": "{None}"
          },
          {
            "Name": "ChargedDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "22",
            "MaxValue": "{None}"
          },
          {
            "Name": "ChargeDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Silence",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "b91665804df04ff599466f3714f3c9f1",
            "MaxValue": "{None}"
          },
          {
            "Name": "SilenceDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          }
        ],
        "icon": "3cdb74ac10b645b48b3b6c5dd6a4323c",
        "icon128": "70a26229b7880aa44a46e8cb2af9334f"
      },
      "ability2": {
        "typeID": 1666698899,
        "name": "84da2aa8417c440b807ee3b81fa63a5b",
        "description": "886b25593fdc4700a4408f252cc5a4b5",
        "tooltipData": [
          {
            "Name": "ChannelDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.3",
            "MaxValue": "3"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "21",
            "MaxValue": "3"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "MultiplativeValue",
            "UnitType": "Percent",
            "Value": "6",
            "MaxValue": "3"
          },
          {
            "Name": "Charges",
            "LocalizedName": "6135f53b9b8641a88832495ac58aaa05",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "RechargeBoost",
            "LocalizedName": "d45b2ca84e304fe9832f713a1d9269a3",
            "SortID": 3,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "{None}"
          }
        ],
        "icon": "c25b70e7368aaed45be2691da8209e43",
        "icon128": "81f898538a9eba14b82110f8ebf6654e"
      },
      "ability3": {
        "typeID": 1180614181,
        "name": "8c02ec7ed3484196b90cbb6a55987ea1",
        "description": "7621f2142e0e4fecbf1cd2c9b0f01d98",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          }
        ],
        "icon": "9085962da5df0f040b0de1bb8ea062bf",
        "icon128": "6c30b1e6992030e4dae06a355b7a4fb4"
      },
      "ability4": {
        "typeID": 1032123680,
        "name": "babc6d109ffa430c9773ff432d4bd0d3",
        "description": "1e18b7773eeb488faa47d4257cf211d9",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "15",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "a307304ca3ed4c0db9d232cf2580f450",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.2",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "7",
            "MaxValue": "{None}"
          }
        ],
        "icon": "b9b48636e354a254a951110bcbebb3da",
        "icon128": "baa9baf5b01c5ee42902398a8f946a5a"
      },
      "ability5": {
        "typeID": 1957843087,
        "name": "c9ee09ecc97e4352833300452098e140",
        "description": "4121414536bc493c99445a818ce073ce",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "4",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          }
        ],
        "icon": "dba76bbb88cac764f9a8aeff389abb99",
        "icon128": "dba76bbb88cac764f9a8aeff389abb99"
      },
      "ability6": {
        "typeID": 1069119398,
        "name": "1cbccf069e3a41ca94dac6d883788ab1",
        "description": "970d0fd5c0be486a952a800eb1a357a6",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "ShieldAmount",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "26",
            "MaxValue": "{None}"
          },
          {
            "Name": "HasteFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "ModifierPercent",
            "Value": "{None}",
            "MaxValue": "{None}"
          }
        ],
        "icon": "577011ac21319aa48a32cb464eef7f59",
        "icon128": "439875627c694104386adec6f1bac161"
      },
      "ability7": {
        "typeID": 798948001,
        "name": "5c34af6d27214e7eb49b0ba02c519c7d",
        "description": "19a789bd6e9647abb963c65f89c5b87e",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowPercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3.4",
            "MaxValue": "{None}"
          },
          {
            "Name": "InitDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "InitHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "RecastDuration",
            "LocalizedName": "dd7bc1a2cae2405a9d5038f95fe638d8",
            "SortID": 3,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "Delay",
            "LocalizedName": "c2f75a279186454aa0ad062ef601c9bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          },
          {
            "Name": "ImpactDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "{None}"
          }
        ],
        "icon": "2e8c446756f25e8469c2c6345a6ba39d",
        "icon128": "bc8806c71e64fcf4880365f5b700a0fa"
      }
    },
    {
      "typeID": 870711570,
      "name": "3c09a1c88b5b44608679b7a34350ca52",
      "devName": "MetalWarden",
      "title": "783912761b3f400c84aa991b5ed81673",
      "description": "8b278a6772ee403d8ffb3cc4e36635c7",
      "icon": "8f50318bf676ca047b3e36d5b6de7815",
      "wideIcon": "65e28ab3b75c7cb478a1b24b46fca7d2",
      "battlerites": [
        {
          "typeID": 584699535,
          "name": "00d98163a14f40788f6c69ffbbee86d6",
          "description": "6df6f48d90d242cd8ffe36dd7677c619",
          "tooltipData": [
            {
              "Name": "ShieldValue",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusRange",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "25",
              "MaxValue": "{None}"
            }
          ],
          "icon": "87c684273ffea0845863a8f80b904890",
          "abilitySlot": "0"
        },
        {
          "typeID": 2092791983,
          "name": "60c3d20758b644cb851740a091bc2c32",
          "description": "33fe06a65f4b484f8e56edfbb2e06df1",
          "tooltipData": [
            {
              "Name": "MaxDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            },
            {
              "Name": "MinDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "9ed50d63cfb9fc74f92a64fab5cb6259",
          "abilitySlot": "1"
        },
        {
          "typeID": 2122427487,
          "name": "aedc22091cee4f85aa6631bfde956ba6",
          "description": "da33ea803f5e4525a847a8fc8b38ee1e",
          "tooltipData": [
            {
              "Name": "SilenceDuration1",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.7",
              "MaxValue": "{None}"
            },
            {
              "Name": "SilenceDuration2",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "AdditiveValue",
              "UnitType": "Second",
              "Value": "1.4",
              "MaxValue": "0.7"
            }
          ],
          "icon": "9ed50d63cfb9fc74f92a64fab5cb6259",
          "abilitySlot": "1"
        },
        {
          "typeID": 1045864183,
          "name": "218faf7a18e94536a24e7fb42e35b246",
          "description": "937799441a7e49fbb2103c62dfb63d06",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration2",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration1",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "SlowFactor1",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "25",
              "MaxValue": "{None}"
            },
            {
              "Name": "SlowFactor2",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "40",
              "MaxValue": "{None}"
            }
          ],
          "icon": "14568f096fcd91f488876796605f5063",
          "abilitySlot": "4"
        },
        {
          "typeID": 1589689187,
          "name": "1180fd765d0046d9ada41b5612df9758",
          "description": "53daa07dc41f4d299d76aa1e57e513b9",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            },
            {
              "Name": "KnockbackBonus",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "20",
              "MaxValue": "{None}"
            }
          ],
          "icon": "32189e52d279bcc498ede10b3d3ff6d1",
          "abilitySlot": "2"
        },
        {
          "typeID": 1347642488,
          "name": "4e3cd0d982fe49529fcce01c523b25ac",
          "description": "d6c58cbee5c34a8da04c2bb596f25dca",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusHasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "30",
              "MaxValue": "{None}"
            }
          ],
          "icon": "32189e52d279bcc498ede10b3d3ff6d1",
          "abilitySlot": "2"
        },
        {
          "typeID": 1553167888,
          "name": "da09302040564e0ba22262b080952f65",
          "description": "2ff7cf377fb24778a45adb93687c005c",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "12",
              "MaxValue": "{None}"
            }
          ],
          "icon": "32189e52d279bcc498ede10b3d3ff6d1",
          "abilitySlot": "2"
        },
        {
          "typeID": 1112803595,
          "name": "21cbc95a10244ee68ad17c1cad8b87b9",
          "description": "da6685d53bc44a879ed80dc371d04605",
          "tooltipData": [
            {
              "Name": "HasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "30",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "14568f096fcd91f488876796605f5063",
          "abilitySlot": "4"
        },
        {
          "typeID": 259558231,
          "name": "06b4795bfe39440aa30d6da2e6e3306b",
          "description": "8c23f6f5aa6a42bda181cabb815017c4",
          "tooltipData": [
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "751839d4f58db9445aa7fc86411521a1",
          "abilitySlot": "5"
        },
        {
          "typeID": 707113819,
          "name": "9c96236950b345479c00137547e47994",
          "description": "3a639be4f39a45bd9ba8fc829a1b203b",
          "tooltipData": [
            {
              "Name": "ShieldValue",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            },
            {
              "Name": "StartValue",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "12",
              "MaxValue": "{None}"
            },
            {
              "Name": "ShieldDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "4",
              "MaxValue": "{None}"
            }
          ],
          "icon": "1d95f324f635c9447a68299999e8597e",
          "abilitySlot": "3"
        },
        {
          "typeID": 93506493,
          "name": "1d565b3f923442bfa638ad167fe6d996",
          "description": "62a8c26511934e3e99c84b803a97f93c",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            },
            {
              "Name": "RadiusIncrease",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "15",
              "MaxValue": "{None}"
            }
          ],
          "icon": "1d95f324f635c9447a68299999e8597e",
          "abilitySlot": "3"
        },
        {
          "typeID": 863067929,
          "name": "f8146fc17e1645d4924778e4e358c1da",
          "description": "706895d1874e4d74a63e56ae07f8ccdc",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "14568f096fcd91f488876796605f5063",
          "abilitySlot": "4"
        },
        {
          "typeID": 578444245,
          "name": "5508276a24314f418ed51d04ef7cec52",
          "description": "21d18430783b4f3082ae669852a1fbb4",
          "tooltipData": [
            {
              "Name": "BonusBounces",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "00f3209be1d16c7408fddb035ff74d17",
          "abilitySlot": "6"
        }
      ],
      "ability1": {
        "typeID": 1983687638,
        "name": "80e6a5b6e07d4d8e98fda0bf8631f2e9",
        "description": "373bfbcb6b1d46c58fc8f5ba7ca7b414",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "16",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "7",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "CooldownReduction",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          },
          {
            "Name": "ChargedBoltName",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "9ac6a08830284d4c91a3286efa3d861c",
            "MaxValue": "{None}"
          }
        ],
        "icon": "a1c674a3365ea2f4eac0f08b08ce2515",
        "icon128": "87c684273ffea0845863a8f80b904890"
      },
      "ability2": {
        "typeID": 1247213693,
        "name": "9ac6a08830284d4c91a3286efa3d861c",
        "description": "2694ea41311e4d748f737c28cf116092",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "RangeValue",
            "UnitType": "Standard",
            "Value": "8",
            "MaxValue": "30"
          },
          {
            "Name": "MaxChargeDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.2",
            "MaxValue": "{None}"
          },
          {
            "Name": "SpellBlockDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "TargetDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "SpellBlock",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "6bfadddf8e07473695d1f84687e595b5",
            "MaxValue": "{None}"
          },
          {
            "Name": "SilenceDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.7",
            "MaxValue": "{None}"
          },
          {
            "Name": "Silence",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "b91665804df04ff599466f3714f3c9f1",
            "MaxValue": "{None}"
          },
          {
            "Name": "MinChargeDuration",
            "LocalizedName": "e0fa7bd940a348e09d975024a4b3acce",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.4",
            "MaxValue": "{None}"
          }
        ],
        "icon": "32040f792247e47419573fba1752e3f3",
        "icon128": "9ed50d63cfb9fc74f92a64fab5cb6259"
      },
      "ability3": {
        "typeID": 678770142,
        "name": "1b7c8cec17964b1ea64b7e7a2b83fe68",
        "description": "35da34207f9f410c82fe2bf7e1eb815a",
        "tooltipData": [
          {
            "Name": "HasteFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "125",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "16",
            "MaxValue": "{None}"
          },
          {
            "Name": "DamageCooldown",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "4",
            "MaxValue": "{None}"
          }
        ],
        "icon": "71699df18682a514cafc5d262b7b45af",
        "icon128": "32189e52d279bcc498ede10b3d3ff6d1"
      },
      "ability4": {
        "typeID": 1574749481,
        "name": "e1eb67ec3ef1440e884b8d37f814000c",
        "description": "1e493ba20d114509832a2ac5aa6dc007",
        "tooltipData": [
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.2",
            "MaxValue": "{None}"
          },
          {
            "Name": "CounterDuration",
            "LocalizedName": "a307304ca3ed4c0db9d232cf2580f450",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.2",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirDuration",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 1,
            "ValueType": "AdditiveValue",
            "UnitType": "Second",
            "Value": "0.6",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "22",
            "MaxValue": "{None}"
          }
        ],
        "icon": "518e2b1090d1fe14cb64f30234ab5c47",
        "icon128": "1d95f324f635c9447a68299999e8597e"
      },
      "ability5": {
        "typeID": 2029650450,
        "name": "19db22d7bbdb467d87c2e971cc39d23d",
        "description": "112be9554a99414f8209dffa449101d1",
        "tooltipData": [
          {
            "Name": "Root",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "b5b19aeaa91c4354a330bd761a1f0d86",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "ImmobilizeDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowPercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "25",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "{None}"
          }
        ],
        "icon": "9b4e71698ec4d684391dc847b479ccfd",
        "icon128": "14568f096fcd91f488876796605f5063"
      },
      "ability6": {
        "typeID": 346144262,
        "name": "9aaa3e2b4c6d4595b529cb30761484f8",
        "description": "0bd7a42434ee402cb93764623475d44a",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "14",
            "MaxValue": "{None}"
          },
          {
            "Name": "FadingSnare",
            "LocalizedName": "e6ee239b70b64b0cbdd9525e06acda60",
            "SortID": 1,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "e6ee239b70b64b0cbdd9525e06acda60",
            "MaxValue": "{None}"
          },
          {
            "Name": "GradualSlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          },
          {
            "Name": "M1Name",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "80e6a5b6e07d4d8e98fda0bf8631f2e9",
            "MaxValue": "{None}"
          },
          {
            "Name": "M2Name",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "9ac6a08830284d4c91a3286efa3d861c",
            "MaxValue": "{None}"
          }
        ],
        "icon": "5e38d823c486df347a7fcfc484055d96",
        "icon128": "751839d4f58db9445aa7fc86411521a1"
      },
      "ability7": {
        "typeID": 1516031719,
        "name": "220120baa6dc4f80b5d2df82dcff368d",
        "description": "88a78f81f9ff49b88b5690a70a2d7092",
        "tooltipData": [
          {
            "Name": "StunDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.6",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "40",
            "MaxValue": "{None}"
          },
          {
            "Name": "Bounces",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "DamageReduction",
            "LocalizedName": "39990cfa73d94535aa8c8e9632b27733",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "50",
            "MaxValue": "{None}"
          },
          {
            "Name": "Stun",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "4c898668b22b487786e7382d634603e7",
            "MaxValue": "{None}"
          }
        ],
        "icon": "42cc3b8250720424a9eca9dd5976bcf5",
        "icon128": "00f3209be1d16c7408fddb035ff74d17"
      }
    },
    {
      "typeID": 1496688063,
      "name": "f18695e2f3b64d37a8a0e085db007eac",
      "devName": "MirrorMage",
      "title": "3933e8fc48804c61974177dd84207e6c",
      "description": "2f5e23c7838d4f2a9ed80673d1a8ea27",
      "icon": "e10caaf367fdb6f459483a4c9be850a3",
      "wideIcon": "9c4186a6214f12448a7091710b0cde6c",
      "battlerites": [
        {
          "typeID": 87341220,
          "name": "9a219758e56046a5bf6b6fc7f40d347e",
          "description": "3639be266891433f941e60d1c2ce9940",
          "tooltipData": [
            {
              "Name": "Health",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "10",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "2632a24f2167af14f9869abb401dd67f",
          "abilitySlot": "2"
        },
        {
          "typeID": 1506154007,
          "name": "057a72186f144469865f2291ee4ffd5b",
          "description": "a62360cc36af425e90e89831ed8838c7",
          "tooltipData": [
            {
              "Name": "ShieldValue",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "12",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "af5ff3eb2bad4b04a9c6dd30739068e6",
          "abilitySlot": "3"
        },
        {
          "typeID": 595343721,
          "name": "3622635508304cb98a8d5cb2dd283ee6",
          "description": "2e0a01f1e0c2415398a39ab9f88f000e",
          "tooltipData": [
            {
              "Name": "BonusDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "1180e87d69492d442afaa79cbba36746",
          "abilitySlot": "4"
        },
        {
          "typeID": 811462613,
          "name": "321c0753d4964bb99c92574f515456a0",
          "description": "dfdf7a953ea14d97b5dbe80fc4a503c0",
          "tooltipData": [
            {
              "Name": "StunDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "f1c30ae8ed08c2847bf669726f9f478f",
          "abilitySlot": "5"
        },
        {
          "typeID": 872856903,
          "name": "f41575377de54da4ba5cf5b8f748a725",
          "description": "03c50c02a9f647e9bf6e659089f0a04c",
          "tooltipData": [],
          "icon": "a970261549d4e2b4c923db1944ac2e4b",
          "abilitySlot": "1"
        },
        {
          "typeID": 772055103,
          "name": "2c8f7f775cac4c68a415f029c3690b67",
          "description": "8b7e7171fbfe4de8b8d3476e8683e850",
          "tooltipData": [
            {
              "Name": "BonusFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "7",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "a970261549d4e2b4c923db1944ac2e4b",
          "abilitySlot": "1"
        },
        {
          "typeID": 1693818272,
          "name": "1e9b955e6ea14741a24c4b29665e1e24",
          "description": "f21965ceb71443549d7023011d1c2cd3",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "12",
              "MaxValue": "{None}"
            },
            {
              "Name": "StunDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "BigDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "20",
              "MaxValue": "{None}"
            },
            {
              "Name": "BigStunDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "2632a24f2167af14f9869abb401dd67f",
          "abilitySlot": "2"
        },
        {
          "typeID": 88894505,
          "name": "0a538a32aaf54247ba2171203292eaa9",
          "description": "17a4e984bc0c4481babd65908cc49b26",
          "tooltipData": [
            {
              "Name": "BonusFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "{None}",
              "MaxValue": "{None}"
            }
          ],
          "icon": "1180e87d69492d442afaa79cbba36746",
          "abilitySlot": "4"
        },
        {
          "typeID": 1154610081,
          "name": "09f87aa327694040af9c77875e2777db",
          "description": "31257de0240c40acaeadb26ab55041c0",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "{None}"
            },
            {
              "Name": "HasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "{None}"
            }
          ],
          "icon": "af5ff3eb2bad4b04a9c6dd30739068e6",
          "abilitySlot": "3"
        },
        {
          "typeID": 1448312839,
          "name": "d1d41c74eadc4df2949175e37523e164",
          "description": "9a48238ead8349db83a6655bda9275ac",
          "tooltipData": [
            {
              "Name": "SlowFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "15",
              "MaxValue": "{None}"
            }
          ],
          "icon": "1180e87d69492d442afaa79cbba36746",
          "abilitySlot": "4"
        },
        {
          "typeID": 1024961155,
          "name": "3ca35a1e70b64c3d97e028766f9ca6af",
          "description": "6095df2550c04fd1b74422679c293eef",
          "tooltipData": [
            {
              "Name": "HotHealing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            }
          ],
          "icon": "144efc709ac628542aee319b14932b2c",
          "abilitySlot": "0"
        },
        {
          "typeID": 1892915222,
          "name": "d7132d4175b841e0ba01b3670fe9ea29",
          "description": "d240ad0361d44662a5bb54a9f061f4db",
          "tooltipData": [
            {
              "Name": "DamageFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "{None}",
              "MaxValue": "{None}"
            }
          ],
          "icon": "2632a24f2167af14f9869abb401dd67f",
          "abilitySlot": "2"
        },
        {
          "typeID": 1120520824,
          "name": "7bf11eccfdcb46a69d014a144de1e187",
          "description": "22d944a7f8f148f49f905d9126122d39",
          "tooltipData": [
            {
              "Name": "ShieldValue",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "20",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "4ac237c3c5acfcc4abca26dcc26854ec",
          "abilitySlot": "6"
        },
        {
          "typeID": 120265487,
          "name": "dab08cc139954c908792ea1506e2f10f",
          "description": "2d5f0266049e4d48ac467af6f870c956",
          "tooltipData": [],
          "icon": "af5ff3eb2bad4b04a9c6dd30739068e6",
          "abilitySlot": "3"
        },
        {
          "typeID": 982286593,
          "name": "fb77b6ff2fce497295304cb8eff66d1e",
          "description": "af3dac898afe436782fb5a9325984fc8",
          "tooltipData": [
            {
              "Name": "RangeFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            },
            {
              "Name": "BounceAmount",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "a970261549d4e2b4c923db1944ac2e4b",
          "abilitySlot": "1"
        }
      ],
      "ability1": {
        "typeID": 1987108759,
        "name": "d329dc38ca134675a7ac2fbc3bae73e2",
        "description": "bf9d9305b094451f8e176541487341d5",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "AdditiveValue",
            "UnitType": "Percent",
            "Value": "6",
            "MaxValue": "3"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "SelfHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "HeartBuff",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "50345501d792477881f9e33e12789074",
            "MaxValue": "{None}"
          },
          {
            "Name": "FortifyFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "15",
            "MaxValue": "{None}"
          },
          {
            "Name": "FortifyDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "4",
            "MaxValue": "{None}"
          }
        ],
        "icon": "ded797cc5282a984e82c16751ac20093",
        "icon128": "144efc709ac628542aee319b14932b2c"
      },
      "ability2": {
        "typeID": 1501923214,
        "name": "09aee4cd6ac0488895081d2310c62ae8",
        "description": "43d3606dd4b948b3819a68b050018fea",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "28",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "CooldownReduction",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "ReducePercent",
            "LocalizedName": "d2a07fd6b5284efc9dc826e763f3c006",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "40",
            "MaxValue": "{None}"
          },
          {
            "Name": "ArcaneCatalyst",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "6fa84d23668c41eca3e64c5711ed48db",
            "MaxValue": "{None}"
          },
          {
            "Name": "AmplifyFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "13",
            "MaxValue": "{None}"
          },
          {
            "Name": "AmplifyDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3",
            "MaxValue": "{None}"
          }
        ],
        "icon": "b5dc44da8d9717f438e4839b6580da91",
        "icon128": "a970261549d4e2b4c923db1944ac2e4b"
      },
      "ability3": {
        "typeID": 646180756,
        "name": "ff3cf1863cfe42d5b238fe692e85b6f7",
        "description": "2b8b42b7abf444168d03c19386cb598d",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 3,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "4",
            "MaxValue": "{None}"
          },
          {
            "Name": "Health",
            "LocalizedName": "76a7e8fb73c546098f3c1fcf47f1bceb",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "30",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirTime",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 1,
            "ValueType": "AdditiveValue",
            "UnitType": "Second",
            "Value": "0.7",
            "MaxValue": "0.3"
          },
          {
            "Name": "Illusion",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "89d5b66cd00b4145be86cb02c59f8f77",
            "MaxValue": "{None}"
          }
        ],
        "icon": "b86f24f8669de7f4fab2c8e4aef57fd1",
        "icon128": "2632a24f2167af14f9869abb401dd67f"
      },
      "ability4": {
        "typeID": 450000284,
        "name": "a7986957715f4a22bccc785bd7010f60",
        "description": "8f140c2d79504e93bb829e7028c95312",
        "tooltipData": [
          {
            "Name": "RecastDuration",
            "LocalizedName": "dd7bc1a2cae2405a9d5038f95fe638d8",
            "SortID": 3,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "4",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "4",
            "MaxValue": "{None}"
          },
          {
            "Name": "DurationIncrease",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "PortalDelay",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "AdditiveValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "0.5"
          }
        ],
        "icon": "74279d22d6068ad4f8302c1409244179",
        "icon128": "af5ff3eb2bad4b04a9c6dd30739068e6"
      },
      "ability5": {
        "typeID": 1554784212,
        "name": "8ecd584bc81c455ab15673dc86203233",
        "description": "f441f1f3bf8240d7ad12ff3cecd125f2",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "ImpactDelay",
            "LocalizedName": "c2f75a279186454aa0ad062ef601c9bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.8",
            "MaxValue": "{None}"
          },
          {
            "Name": "DamageLimit",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "{None}"
          }
        ],
        "icon": "bf4c37c6dda0f9d4881c3b2e736482cc",
        "icon128": "1180e87d69492d442afaa79cbba36746"
      },
      "ability6": {
        "typeID": 1669070614,
        "name": "4a5e7a5be5944dd9b02533fc5a991d8a",
        "description": "da614f9ea7314058b5fd72411ba1b6d3",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "HasteFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "80",
            "MaxValue": "{None}"
          },
          {
            "Name": "DamageLimit",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "0",
            "MaxValue": "{None}"
          }
        ],
        "icon": "e8fb5cd11266dee42820bc431e15424b",
        "icon128": "f1c30ae8ed08c2847bf669726f9f478f"
      },
      "ability7": {
        "typeID": 1749310323,
        "name": "fdfa3ccd1f0049c4acc3a8c8967eceb6",
        "description": "4d55fb3a8faa468086837aa5931a5d0f",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "Health",
            "LocalizedName": "76a7e8fb73c546098f3c1fcf47f1bceb",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "50",
            "MaxValue": "{None}"
          },
          {
            "Name": "GranderIllusion",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "aad94a46969649b2a1bdbf2e9d133af6",
            "MaxValue": "{None}"
          }
        ],
        "icon": "2664ec61a1dd3b44dafd91a7f2fd37bd",
        "icon128": "4ac237c3c5acfcc4abca26dcc26854ec"
      }
    },
    {
      "typeID": 154382530,
      "name": "8b8ca9a3af044131a61889b28bbcb00f",
      "devName": "Nomad",
      "title": "ac0e574d29e645878fa4e60d06593007",
      "description": "94fe22f438b94453b37f1a80050821ae",
      "icon": "246d3bbb94b9f0d42932cbb2a1e43dd5",
      "wideIcon": "2905515bc00a1d64e83466ec8e50f8b6",
      "battlerites": [
        {
          "typeID": 2063908705,
          "name": "70348c6b9904443e8fa05266605edc97",
          "description": "32198361aa3f47e0b8c1ade7bfbbd9ab",
          "tooltipData": [
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            }
          ],
          "icon": "e6c2b076242187d44941ae0cefa96f62",
          "abilitySlot": "0"
        },
        {
          "typeID": 1574739435,
          "name": "4af1bd37ca4843ca99ede4a01b2b1c7b",
          "description": "d34af93e22d841468c855dabec0c5f41",
          "tooltipData": [
            {
              "Name": "GradualSlowDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.3",
              "MaxValue": "{None}"
            },
            {
              "Name": "GradualSlow",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "e6ee239b70b64b0cbdd9525e06acda60",
              "MaxValue": "{None}"
            }
          ],
          "icon": "e6c2b076242187d44941ae0cefa96f62",
          "abilitySlot": "0"
        },
        {
          "typeID": 1642275706,
          "name": "c5a9361b18a64e9fbb2565f614794b40",
          "description": "ca123cccaec549deb068a47233605cba",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            }
          ],
          "icon": "a1e1ca01cc40ea24c9e8e0fa7de49581",
          "abilitySlot": "1"
        },
        {
          "typeID": 40978156,
          "name": "96df4eb46b7d479989ed88738dc3a55e",
          "description": "a1e49d71609a4567bdfbd4b937558837",
          "tooltipData": [
            {
              "Name": "CasttimeReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "SubtractiveValue",
              "UnitType": "Second",
              "Value": "0",
              "MaxValue": "0.7"
            },
            {
              "Name": "SpeedFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "60",
              "MaxValue": "{None}"
            }
          ],
          "icon": "a1e1ca01cc40ea24c9e8e0fa7de49581",
          "abilitySlot": "1"
        },
        {
          "typeID": 130759327,
          "name": "4e2a5acfa88f46d8b177c9b6e58677a6",
          "description": "aac6ac3b03e4431283eaf29367ad5b8b",
          "tooltipData": [
            {
              "Name": "BonusDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.2",
              "MaxValue": "{None}"
            },
            {
              "Name": "IntersectBonusDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "a1e1ca01cc40ea24c9e8e0fa7de49581",
          "abilitySlot": "1"
        },
        {
          "typeID": 539038640,
          "name": "9483d26ee25d4ac2a36dbce03680f018",
          "description": "b9dfd718d1ee4996860ae8109f826f80",
          "tooltipData": [
            {
              "Name": "Factor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2.2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "a3165fe585dd0ee44a95681889b39ca8",
          "abilitySlot": "2"
        },
        {
          "typeID": 953901511,
          "name": "17013f98b4794582bc7fe15d29f3e475",
          "description": "b3d8ef8d426d47f089c1e23b94957bf7",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "9a292cf4ed808d54c922ab48f5881c5a",
          "abilitySlot": "3"
        },
        {
          "typeID": 1983744822,
          "name": "c91bbc55e1a74d59add96e5fd6743a2a",
          "description": "d0cc27ac334e4608a02c4d2022e4176d",
          "tooltipData": [],
          "icon": "9a292cf4ed808d54c922ab48f5881c5a",
          "abilitySlot": "3"
        },
        {
          "typeID": 213707086,
          "name": "67b34edcc1b543b4b3bdc0e1a307c637",
          "description": "c5ecf651191946fd82c499a997fa8cd4",
          "tooltipData": [
            {
              "Name": "StunDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.8",
              "MaxValue": "{None}"
            },
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "Stun",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "4c898668b22b487786e7382d634603e7",
              "MaxValue": "{None}"
            }
          ],
          "icon": "9a292cf4ed808d54c922ab48f5881c5a",
          "abilitySlot": "3"
        },
        {
          "typeID": 656903282,
          "name": "47425fa828534940850469d4abc63a4d",
          "description": "737f5b9d02f745c08a3bc3f24d79a641",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "b0d9d3dfe8a33054f832a71fb2ec1f3e",
          "abilitySlot": "4"
        },
        {
          "typeID": 1997274255,
          "name": "9fb3218ea6ac443cbcd9d13797feca4b",
          "description": "e9ff34177282479a9bda5ad39e60f097",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.8",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            },
            {
              "Name": "MaxHits",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "3bdfd11b16cb3f84c877519a82bdd119",
          "abilitySlot": "6"
        },
        {
          "typeID": 1369609980,
          "name": "f65c39fbf51e4f9ca207fd7d42fb339f",
          "description": "576bbc887f1e4e4789a1ba6b7a7828ed",
          "tooltipData": [
            {
              "Name": "EnergyBonus",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Percent",
              "Value": "25",
              "MaxValue": "{None}"
            },
            {
              "Name": "EnergyFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "61e058b8f4b79f4419ec1496f223ee36",
          "abilitySlot": "999"
        },
        {
          "typeID": 958165916,
          "name": "3161b103f73247d78a972d55e5be4825",
          "description": "d98046df3cc9474d8e4e4c3813cd70a5",
          "tooltipData": [
            {
              "Name": "BonusDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusHasteDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "b0d9d3dfe8a33054f832a71fb2ec1f3e",
          "abilitySlot": "4"
        }
      ],
      "ability1": {
        "typeID": 1604073547,
        "name": "3803796b5ee94939b1ac79237ebcb0db",
        "description": "a29ff82e815840fc9f5aaa220063c58c",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "14",
            "MaxValue": "{None}"
          },
          {
            "Name": "DamageReduction",
            "LocalizedName": "d2a07fd6b5284efc9dc826e763f3c006",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "35",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "6",
            "MaxValue": "{None}"
          }
        ],
        "icon": "328f478922b31dc42867a57c1ccc7ff6",
        "icon128": "e6c2b076242187d44941ae0cefa96f62"
      },
      "ability2": {
        "typeID": 373835089,
        "name": "6ceef9839afa436985319232e2b540c8",
        "description": "39d73a1bd9444688aeeaa95bbde7dd3a",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "DamageReduction",
            "LocalizedName": "d2a07fd6b5284efc9dc826e763f3c006",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "25",
            "MaxValue": "{None}"
          },
          {
            "Name": "StunDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Stun",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "CCBarType - Stunned",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "4",
            "MaxValue": "{None}"
          }
        ],
        "icon": "927e7f27b5944d54abae97df332781c8",
        "icon128": "a1e1ca01cc40ea24c9e8e0fa7de49581"
      },
      "ability3": {
        "typeID": 1700786828,
        "name": "1e19cb281ace4fafa2b1393449e36203",
        "description": "b6485d75bef341c2845dee94e490498a",
        "tooltipData": [
          {
            "Name": "HasteFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "80",
            "MaxValue": "{None}"
          },
          {
            "Name": "DamageReduction",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "EmpowerDamage",
            "LocalizedName": "8a6356ce806f4f83a2e9fda6ce2344f7",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "15",
            "MaxValue": "{None}"
          },
          {
            "Name": "GradualSlow",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "e6ee239b70b64b0cbdd9525e06acda60",
            "MaxValue": "e6ee239b70b64b0cbdd9525e06acda60"
          },
          {
            "Name": "GradualSlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Haste",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "1e19cb281ace4fafa2b1393449e36203",
            "MaxValue": "{None}"
          }
        ],
        "icon": "c922b571d179ef041acafaf880211c64",
        "icon128": "a3165fe585dd0ee44a95681889b39ca8"
      },
      "ability4": {
        "typeID": 1600053270,
        "name": "48a654e6bfb24db1aa54f5c5c7d28c16",
        "description": "ba0da004a63f4b73aec455ad73317526",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowPercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 20,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          }
        ],
        "icon": "289f3c076575f244ab073d0b2491ee15",
        "icon128": "9a292cf4ed808d54c922ab48f5881c5a"
      },
      "ability5": {
        "typeID": 1000029612,
        "name": "31ad86f5d341482d925f716ee1edb33c",
        "description": "603ecee260b340c197b5c417e2a49130",
        "tooltipData": [
          {
            "Name": "AreaDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "HasteDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          },
          {
            "Name": "ImpactDelay",
            "LocalizedName": "c2f75a279186454aa0ad062ef601c9bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.8",
            "MaxValue": "{None}"
          }
        ],
        "icon": "7681723eeba5d244fb639cb44c17fa4a",
        "icon128": "b0d9d3dfe8a33054f832a71fb2ec1f3e"
      },
      "ability6": {
        "typeID": 386203254,
        "name": "50f17b274d6749afac4bfb613e94674a",
        "description": "2302bf5afe0e47c89bee5fdffa02af5b",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 1,
            "ValueType": "AdditiveValue",
            "UnitType": "Second",
            "Value": "1.35",
            "MaxValue": "1"
          }
        ],
        "icon": "12b067be20cefc649bc50e3a1af0ac06",
        "icon128": "0431e53fdc50210419163c4effb5a743"
      },
      "ability7": {
        "typeID": 1020294001,
        "name": "4502c9faa8b4459d951408b65b26d3d1",
        "description": "9ca08ab5c3614b06bf1a1e0d6c2662e1",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "30",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 3,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "ShieldValue",
            "LocalizedName": "83036c5743b642abbf5ba0426e2e77aa",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "40",
            "MaxValue": "{None}"
          },
          {
            "Name": "Delay",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          },
          {
            "Name": "BoomerangBonus",
            "LocalizedName": "8a6356ce806f4f83a2e9fda6ce2344f7",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "15",
            "MaxValue": "{None}"
          }
        ],
        "icon": "795322d63ae1f4241a6a28438edbbb7b",
        "icon128": "3bdfd11b16cb3f84c877519a82bdd119"
      }
    },
    {
      "typeID": 1134478706,
      "name": "85e0b02e16c64eb1a5bcafb8cd769c25",
      "devName": "Psychopomp",
      "title": "bd1b516948934e84ba3e474c8fa15f7b",
      "description": "a5af274b463a4eac91e1fa829aea04c3",
      "icon": "edd99cc32ca6f2842b2cb83249945c2a",
      "wideIcon": "9872f8cd16d7327418b09294cfa319e6",
      "battlerites": [
        {
          "typeID": 1204188116,
          "name": "049c90f0dfc7436fb1d60d5b2cd56d92",
          "description": "4d8064a279b945bfb0a561124a27f844",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "dfc86226d7b2a6d438dad7dfca7a0d52",
          "abilitySlot": "1"
        },
        {
          "typeID": 2074038071,
          "name": "cc6d71a173384830b856c58ca6464899",
          "description": "bb46fbf48afc4bbab733f2e3512dc55d",
          "tooltipData": [
            {
              "Name": "OldHasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "40",
              "MaxValue": "{None}"
            },
            {
              "Name": "NewHasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "{None}"
            },
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "dfc86226d7b2a6d438dad7dfca7a0d52",
          "abilitySlot": "1"
        },
        {
          "typeID": 590816708,
          "name": "57faece0a4ce4f01aa278c32d3cdd0bc",
          "description": "4f6c585ccdc145bcbac33f35cc16afd0",
          "tooltipData": [
            {
              "Name": "OldHasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "40",
              "MaxValue": "{None}"
            },
            {
              "Name": "NewHasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "0",
              "MaxValue": "{None}"
            },
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            }
          ],
          "icon": "dfc86226d7b2a6d438dad7dfca7a0d52",
          "abilitySlot": "1"
        },
        {
          "typeID": 2082777486,
          "name": "9ce88179c200443aa7ddf77293f08265",
          "description": "748dbbc57ff4470894b5f21f77dd6d91",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            },
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            }
          ],
          "icon": "dfc86226d7b2a6d438dad7dfca7a0d52",
          "abilitySlot": "1"
        },
        {
          "typeID": 684765307,
          "name": "51e90ca8fa8946df81208355b1d64a28",
          "description": "077f271d954f4019b0de12aaf6fd18e2",
          "tooltipData": [],
          "icon": "7bd09f2f761edd0438938579a6942e82",
          "abilitySlot": "2"
        },
        {
          "typeID": 354711193,
          "name": "db2cf860e77b47d7acb08e54897bf33b",
          "description": "26f2429d41784a70a007d498266e9611",
          "tooltipData": [
            {
              "Name": "DamageReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "33",
              "MaxValue": "{None}"
            },
            {
              "Name": "DamageIncrease",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "20",
              "MaxValue": "{None}"
            }
          ],
          "icon": "7bd09f2f761edd0438938579a6942e82",
          "abilitySlot": "2"
        },
        {
          "typeID": 849902099,
          "name": "ce30f03ae93a4764a455452c591a8f20",
          "description": "362a0878e5964bf5bb414a34eb5ed82a",
          "tooltipData": [
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            },
            {
              "Name": "KnockbackBonus",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "60",
              "MaxValue": "{None}"
            }
          ],
          "icon": "7bd09f2f761edd0438938579a6942e82",
          "abilitySlot": "2"
        },
        {
          "typeID": 1740981862,
          "name": "a868dc5b08f54846bf8df054052a2285",
          "description": "096baa6624a04045bc885eb7db0cd058",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            },
            {
              "Name": "HasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "40",
              "MaxValue": "{None}"
            }
          ],
          "icon": "b6b9a08408c476c4a9f91eba6dacbb52",
          "abilitySlot": "3"
        },
        {
          "typeID": 1435895087,
          "name": "7e8d237ab56048f396ffc3135682a372",
          "description": "166f8feeb2d84e6b8c9d8bfb1f2a4925",
          "tooltipData": [
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "CooldownReduction2",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "b6b9a08408c476c4a9f91eba6dacbb52",
          "abilitySlot": "3"
        },
        {
          "typeID": 662054474,
          "name": "956ed99419034fe19a4c5be052bfdd28",
          "description": "b8b8dc260f554ab2a1bc01c73edf360c",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            },
            {
              "Name": "Range",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "70d64cab20af264438c599ba3ecdd2c4",
          "abilitySlot": "4"
        },
        {
          "typeID": 1126732750,
          "name": "d767b3bf2bfd48fd9735d5fc6319123b",
          "description": "90a3fc2969b841ec92356b948dc3b756",
          "tooltipData": [
            {
              "Name": "ImmobilizeDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "Immobilize",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "0393817baad8475c802924bce807e412",
              "MaxValue": "{None}"
            }
          ],
          "icon": "70d64cab20af264438c599ba3ecdd2c4",
          "abilitySlot": "4"
        },
        {
          "typeID": 920006272,
          "name": "238289a133b847b1a641a80a13be0f10",
          "description": "9bb965f434b646e9b9e2558d6914a746",
          "tooltipData": [
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "12",
              "MaxValue": "{None}"
            },
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "{None}"
            },
            {
              "Name": "EnergyGain",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Percent",
              "Value": "5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "70d64cab20af264438c599ba3ecdd2c4",
          "abilitySlot": "4"
        },
        {
          "typeID": 929293235,
          "name": "c70b1512cbb04ed4a7c663c5c8fe8702",
          "description": "b43b968832874ea5bf7b588c1a97793e",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "eb89a558d4c3f23498b8a442c7ef6964",
          "abilitySlot": "5"
        },
        {
          "typeID": 279904849,
          "name": "1ae95a6eb83e4660b2c4a515fcc58431",
          "description": "1265f4fb7f9148288ff1bd9a4e2e72fe",
          "tooltipData": [
            {
              "Name": "NewShareFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "70",
              "MaxValue": "50"
            },
            {
              "Name": "OldShareFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "{None}"
            }
          ],
          "icon": "510f65762365d8a47815877780d9227d",
          "abilitySlot": "0"
        },
        {
          "typeID": 1811852644,
          "name": "9b68d4b3c26646e7822db0ff080a27f1",
          "description": "d72d6af6a5d84c819942961ae16a240d",
          "tooltipData": [
            {
              "Name": "OldDamageShareFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "30",
              "MaxValue": "{None}"
            },
            {
              "Name": "NewDamageShareFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusRadius",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "20",
              "MaxValue": "{None}"
            }
          ],
          "icon": "510f65762365d8a47815877780d9227d",
          "abilitySlot": "0"
        },
        {
          "typeID": 1641788288,
          "name": "64f8fff55ad84e938314b7342d2689be",
          "description": "eebc00baa165463fb3d13f63d811ccde",
          "tooltipData": [],
          "icon": "eba62d2ea3d30194e83f9f410a98ca03",
          "abilitySlot": "6"
        },
        {
          "typeID": 1080091564,
          "name": "9e3e4769eaae4a9faf04e7c0fec4db15",
          "description": "59af996460174943bbe1d4d828239a52",
          "tooltipData": [
            {
              "Name": "StunDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "eba62d2ea3d30194e83f9f410a98ca03",
          "abilitySlot": "6"
        }
      ],
      "ability1": {
        "typeID": 540689967,
        "name": "d32fc75d56cb4896ada78adf3eca01c8",
        "description": "e9de2cbe925f4a599bce1be5e1242454",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "SoulBindDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy Gain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "SoulBindPercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "30",
            "MaxValue": "{None}"
          },
          {
            "Name": "SoulBindAmount",
            "LocalizedName": "c5625631e5e6426a90434fd1e1d7d5f5",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "{None}"
          },
          {
            "Name": "SoulBind",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "cce4384f9d094d1db6d39a0039a8c7fb",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "8",
            "MaxValue": "{None}"
          },
          {
            "Name": "SpiritualLink",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "f97ed3f5630f45c299606ed4c7816e0d",
            "MaxValue": "{None}"
          },
          {
            "Name": "Spiritlinkpercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "50",
            "MaxValue": "{None}"
          },
          {
            "Name": "Spiritlinkduration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "6",
            "MaxValue": "{None}"
          }
        ],
        "icon": "ea50266437f561947963d989f6fff157",
        "icon128": "510f65762365d8a47815877780d9227d"
      },
      "ability2": {
        "typeID": 887586317,
        "name": "8b137310d6174da6af5064fd104011dd",
        "description": "31e3d1655d9342b38e3d5fa24d945d27",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.8",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "HasteFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "40",
            "MaxValue": "{None}"
          }
        ],
        "icon": "458e7c8ac63794342ab1b8eb969856bd",
        "icon128": "dfc86226d7b2a6d438dad7dfca7a0d52"
      },
      "ability3": {
        "typeID": 920831585,
        "name": "a5573c707c6349b68f1b2a9b728caeba",
        "description": "ee00706fe5004711aa445f29f0f58669",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "16",
            "MaxValue": "{None}"
          },
          {
            "Name": "RecastDuration",
            "LocalizedName": "dd7bc1a2cae2405a9d5038f95fe638d8",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "7",
            "MaxValue": "{None}"
          }
        ],
        "icon": "fd84e14e3b971594ea0bc2aa130e32ec",
        "icon128": "7bd09f2f761edd0438938579a6942e82"
      },
      "ability4": {
        "typeID": 502476848,
        "name": "bb881c861dcf450f9e8ff39fbae2fdba",
        "description": "68c3abb4878f4b669b27e0ba8cb9ca34",
        "tooltipData": [
          {
            "Name": "SpellBlockDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "PanicDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "HasteFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "20",
            "MaxValue": "{None}"
          },
          {
            "Name": "DamageBreak",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "{None}"
          },
          {
            "Name": "Spell Block",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "6bfadddf8e07473695d1f84687e595b5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Panic",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "1585a81a75fd4738869c06517e1b455d",
            "MaxValue": "{None}"
          }
        ],
        "icon": "673e4fa44ddd99f418c840a1d5485175",
        "icon128": "b6b9a08408c476c4a9f91eba6dacbb52"
      },
      "ability5": {
        "typeID": 7667133,
        "name": "a892fa1468ea455392024daa317189a7",
        "description": "13fa56ccfd8b4181b22254aebd9f684c",
        "tooltipData": [
          {
            "Name": "SoulBind",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "cce4384f9d094d1db6d39a0039a8c7fb",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{ Id: 259 Gen: 1}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Bounces",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "SoulBindPercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "30",
            "MaxValue": "{None}"
          },
          {
            "Name": "SoulBindAmount",
            "LocalizedName": "c5625631e5e6426a90434fd1e1d7d5f5",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "SoulBindDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          }
        ],
        "icon": "59b510d642ceedf4691de19bc15aeb27",
        "icon128": "70d64cab20af264438c599ba3ecdd2c4"
      },
      "ability6": {
        "typeID": 1294678396,
        "name": "a70caebf152d4b8797fc7cdb9b7578ae",
        "description": "1e01f0436153425d8f7b03e3447bfe34",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 3,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "4",
            "MaxValue": "{None}"
          },
          {
            "Name": "OutputFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "cb4a28b211c54c228e2abbe29eeeaaa4",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "7",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "9f372c5c72ca49c0a25a703c49e7037a",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6",
            "MaxValue": "{None}"
          }
        ],
        "icon": "37a1498cfac0a574b81355b60c2e9964",
        "icon128": "eb89a558d4c3f23498b8a442c7ef6964"
      },
      "ability7": {
        "typeID": 1363812572,
        "name": "4431517716a24a1c8131cbc74e9628b4",
        "description": "9e7d3ccff92242dba172201793ebe048",
        "tooltipData": [
          {
            "Name": "Delay",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "OutputFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "16",
            "MaxValue": "{None}"
          },
          {
            "Name": "Enddamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "36",
            "MaxValue": "{None}"
          },
          {
            "Name": "Endhealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "24",
            "MaxValue": "{None}"
          },
          {
            "Name": "GradualSlow",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "e6ee239b70b64b0cbdd9525e06acda60",
            "MaxValue": "{None}"
          },
          {
            "Name": "GradualSlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "PreDelay",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.7",
            "MaxValue": "{None}"
          }
        ],
        "icon": "26f50c08669c3a349885e786580270b8",
        "icon128": "eba62d2ea3d30194e83f9f410a98ca03"
      }
    },
    {
      "typeID": 1208445212,
      "name": "75e925f886164954b000e65caf1d35ee",
      "devName": "Ranid",
      "title": "263d50c2dc2143ce93cd3c7f05c34ccf",
      "description": "c8e0dddedb2e4756a594fa430d205924",
      "icon": "0380b89b0ba8de847843f22c25b41a56",
      "wideIcon": "d3038956f9767d74bbbce0659b07474d",
      "battlerites": [
        {
          "typeID": 757991986,
          "name": "1565d14a05724043995fc4e60c6463b0",
          "description": "fb4c9b5e20be4360be9a416f2071580b",
          "tooltipData": [
            {
              "Name": "SlowFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "NewHealing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "AdditiveValue",
              "UnitType": "Standard",
              "Value": "16",
              "MaxValue": "8"
            },
            {
              "Name": "OriginalHealing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            }
          ],
          "icon": "84e29daadee87714294bbdabd3fdd4ab",
          "abilitySlot": "1"
        },
        {
          "typeID": 479638717,
          "name": "5d0a5d2e8bc846178da97a819e9881c6",
          "description": "53017ffb1faf4b019944649a648da456",
          "tooltipData": [
            {
              "Name": "CooldownIncrease",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "Charges",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "1",
              "MaxValue": "2"
            }
          ],
          "icon": "84e29daadee87714294bbdabd3fdd4ab",
          "abilitySlot": "1"
        },
        {
          "typeID": 1229349902,
          "name": "22372826a84a4eca852c881fd2892108",
          "description": "10482282cb694aa0818e8454f1d63844",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            },
            {
              "Name": "Hits",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "3",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "f4d1c9994ff77524bacb0bfe5347e118",
          "abilitySlot": "2"
        },
        {
          "typeID": 716028279,
          "name": "707481847ae042a1b0827662ed153762",
          "description": "1913d001307441eca2878e9865895819",
          "tooltipData": [
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "f4d1c9994ff77524bacb0bfe5347e118",
          "abilitySlot": "2"
        },
        {
          "typeID": 2041812115,
          "name": "369fd331ad4a4d4d914de86feffcf132",
          "description": "ec27816cd761416088f61139ce80d874",
          "tooltipData": [
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "12",
              "MaxValue": "{None}"
            }
          ],
          "icon": "f4d1c9994ff77524bacb0bfe5347e118",
          "abilitySlot": "2"
        },
        {
          "typeID": 1996009437,
          "name": "f157d385376f45309102be63a73c3ef5",
          "description": "86de6d37273645dbbf56f4e40425a833",
          "tooltipData": [
            {
              "Name": "Delay",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "{None}"
            },
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "97d6d4df3883adc4d99a900f62576ff7",
          "abilitySlot": "3"
        },
        {
          "typeID": 672696819,
          "name": "539d18817cda42389628d84bdafedfa4",
          "description": "39d4de7bd75e477081f863524030d65d",
          "tooltipData": [
            {
              "Name": "BonusDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "97d6d4df3883adc4d99a900f62576ff7",
          "abilitySlot": "3"
        },
        {
          "typeID": 1371108188,
          "name": "92060c10ced04de1a222cbd070548f1d",
          "description": "7339b1b74053444e8ea4156cd25e048c",
          "tooltipData": [
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "ImmobilizeDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "Immobilize",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "0393817baad8475c802924bce807e412",
              "MaxValue": "{None}"
            }
          ],
          "icon": "d5d88de7e41c6cd4fb0b51a9f9a534cf",
          "abilitySlot": "4"
        },
        {
          "typeID": 1163215076,
          "name": "a93a337007fc4960841b53f776e7f78c",
          "description": "d0a6ba3271a64911bfc94c542b4c4451",
          "tooltipData": [
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "d5d88de7e41c6cd4fb0b51a9f9a534cf",
          "abilitySlot": "4"
        },
        {
          "typeID": 1670553801,
          "name": "644f7b19d53e4384bd86a1b39a8ece86",
          "description": "cfce74ad2d36436da7601f6c73163c64",
          "tooltipData": [
            {
              "Name": "Weaken",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "43445ed05b4b429ab98fafd501b38516",
              "MaxValue": "{None}"
            },
            {
              "Name": "WeakenPercent",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "{None}"
            },
            {
              "Name": "WeakenDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "RangeIncrease",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "75",
              "MaxValue": "{None}"
            }
          ],
          "icon": "d5d88de7e41c6cd4fb0b51a9f9a534cf",
          "abilitySlot": "4"
        },
        {
          "typeID": 569684799,
          "name": "533914af536241ddbbd8fd0de14ab06d",
          "description": "28bbd1c7357f4f3bac25aa4db7d2e7b4",
          "tooltipData": [
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "EnergyReturn",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Percent",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "Ticks",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "2c885df2336558e489fbe57b32a9fb94",
          "abilitySlot": "5"
        },
        {
          "typeID": 2068941749,
          "name": "39b625bab5904ad19615358835a6c531",
          "description": "33af1d5fb090427b9a892a413fc1e35d",
          "tooltipData": [
            {
              "Name": "HasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "40",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "4",
              "MaxValue": "{None}"
            }
          ],
          "icon": "949484b0afc4e8d409e2af2061897fbb",
          "abilitySlot": "6"
        },
        {
          "typeID": 659102222,
          "name": "c2c9b76078b4408cb7c5486fa4c1a691",
          "description": "2aeacab60de749169ec6fc9ce2760bb4",
          "tooltipData": [],
          "icon": "f4d1c9994ff77524bacb0bfe5347e118",
          "abilitySlot": "2"
        },
        {
          "typeID": 1137504969,
          "name": "a714b6770d934943ba0ad4c1f8e0a04d",
          "description": "b41199f72d2346a2bb7cd5c0fb96ac7d",
          "tooltipData": [
            {
              "Name": "ImpactDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "TickDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            },
            {
              "Name": "SlowFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "12",
              "MaxValue": "{None}"
            }
          ],
          "icon": "84e29daadee87714294bbdabd3fdd4ab",
          "abilitySlot": "1"
        }
      ],
      "ability1": {
        "typeID": 1643112648,
        "name": "a6e4dc4b8ea04a1eaaed0bbb012b0f3e",
        "description": "023e5919087048258cac4456122e9912",
        "tooltipData": [
          {
            "Name": "Damage1",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "8",
            "MaxValue": "8"
          },
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "4",
            "MaxValue": "{None}"
          },
          {
            "Name": "RechargeDuration",
            "LocalizedName": "a8f787bdec92478fb88a311c60633a39",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "MaxCharges",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "4",
            "MaxValue": "{None}"
          }
        ],
        "icon": "d0e5b0a748bf56342afc7055c97d2a01",
        "icon128": "2928cb95361378944bf3ecfa563d7af9"
      },
      "ability2": {
        "typeID": 1203276857,
        "name": "125e794825b24ef89ba7f0ad6ee4f751",
        "description": "3b4c8201c72f41369ec6bb0722ef6767",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "Toxin",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "37c654018db64fee85500775411e05fe",
            "MaxValue": "{None}"
          },
          {
            "Name": "ToxinDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "5",
            "MaxValue": "4"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "ToxinDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "8",
            "MaxValue": "4"
          },
          {
            "Name": "ToxinHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "8",
            "MaxValue": "4"
          },
          {
            "Name": "AirTime",
            "LocalizedName": "c2f75a279186454aa0ad062ef601c9bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.8",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          }
        ],
        "icon": "4f6910c856066ae4c94503c568f19918",
        "icon128": "6d14ae72757e4e94399d0c528593ff75"
      },
      "ability3": {
        "typeID": 31909461,
        "name": "940e7f5dded543afa7ca5f41ebaaed95",
        "description": "e15b4f9b23384193872934e6afbdaa57",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "20"
          },
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 3,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "RecastDuration",
            "LocalizedName": "dd7bc1a2cae2405a9d5038f95fe638d8",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.8",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirTime",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.55",
            "MaxValue": "{None}"
          }
        ],
        "icon": "df8431f2cbe4b07439cbcc4ef2a06248",
        "icon128": "f4d1c9994ff77524bacb0bfe5347e118"
      },
      "ability4": {
        "typeID": 168550327,
        "name": "823311ac7fa04152901d012078c4cc0b",
        "description": "01cc9f6b6e044eea8008e45d94f5c9cd",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3.5",
            "MaxValue": "3.5"
          },
          {
            "Name": "GradualHasteFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "30",
            "MaxValue": "30"
          },
          {
            "Name": "Stun",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "StunDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          },
          {
            "Name": "GradualHasteDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "3.5"
          },
          {
            "Name": "FadingHaste",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "4b7bb80fa4464eb7bd26a8138ec64d99",
            "MaxValue": "{None}"
          }
        ],
        "icon": "2d1ffcd5487cdb14fb5bf3dc4b3d5720",
        "icon128": "97d6d4df3883adc4d99a900f62576ff7"
      },
      "ability5": {
        "typeID": 885884722,
        "name": "1f7b103f4573408fa235f19aa55cac0b",
        "description": "3f1094b8879242369f7a1374cfc7f9d1",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "4",
            "MaxValue": "{None}"
          },
          {
            "Name": "ImmobilizeDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "{None}",
            "MaxValue": "{None}"
          }
        ],
        "icon": "6e43c4c02bb4844458d75c09abd6ed32",
        "icon128": "d5d88de7e41c6cd4fb0b51a9f9a534cf"
      },
      "ability6": {
        "typeID": 1113164067,
        "name": "15a3dfb63f034553ba913a09e3277aaf",
        "description": "c8dce200706c43a8b376dec1e883e065",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "4",
            "MaxValue": "{None}"
          },
          {
            "Name": "Toxin",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "37c654018db64fee85500775411e05fe",
            "MaxValue": "{None}"
          },
          {
            "Name": "ToxinDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "8",
            "MaxValue": "4"
          },
          {
            "Name": "ToxinDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "5",
            "MaxValue": "4"
          },
          {
            "Name": "ToxinHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "8",
            "MaxValue": "4"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "2",
            "MaxValue": "{None}"
          }
        ],
        "icon": "e4abffcb424b16d4ea8b8b0975947144",
        "icon128": "2c885df2336558e489fbe57b32a9fb94"
      },
      "ability7": {
        "typeID": 934578362,
        "name": "19a969ec60124707b08e9b3a7592abd9",
        "description": "cf3483c77f9b42aba0c2de7488c7decf",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Venom",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "VenomDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2",
            "MaxValue": "3"
          },
          {
            "Name": "VenomDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "18",
            "MaxValue": "3"
          },
          {
            "Name": "VenomAoEDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "38",
            "MaxValue": "{None}"
          }
        ],
        "icon": "3b49caa426003bf40b9bcacbb9930b12",
        "icon128": "949484b0afc4e8d409e2af2061897fbb"
      }
    },
    {
      "typeID": 1606711539,
      "name": "ebc196a9d95b4adbab1277e00712a32e",
      "devName": "Ravener",
      "title": "8fc4920e92f54dfd9f39ec3d4144b1e1",
      "description": "616086f271954f02bd8962c849403458",
      "icon": "66b9694ba8595124badb339297eae3b7",
      "wideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "battlerites": [
        {
          "typeID": 1684733100,
          "name": "bb06501399bf471bb2b8345e151fcc3f",
          "description": "c3d2425525c347a7bf7d257044d1f9b5",
          "tooltipData": [
            {
              "Name": "StaticHammersDurationBonus",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "MaxDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "6",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "8df5b9cfc6dd7cd469d9b211f42c1076",
          "abilitySlot": "0"
        },
        {
          "typeID": 530788143,
          "name": "d27d8bb80553492e90171040ef47da60",
          "description": "8f9eccc1714348ecb832ad939076caa2",
          "tooltipData": [
            {
              "Name": "Amount",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "IncreasedCooldown",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "92dd476aa2340694c9f1167dfc761287",
          "abilitySlot": "1"
        },
        {
          "typeID": 1782477926,
          "name": "8e0014faf738438a8cd327b5fac76e00",
          "description": "c147cf1a0bd4421fba94714a7a7bebd0",
          "tooltipData": [
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "92dd476aa2340694c9f1167dfc761287",
          "abilitySlot": "1"
        },
        {
          "typeID": 339680124,
          "name": "a787210bf7a14874a9db74d046ea1493",
          "description": "3dfe8467f5c641d1892e60a27bf2247a",
          "tooltipData": [
            {
              "Name": "HasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "35",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "92dd476aa2340694c9f1167dfc761287",
          "abilitySlot": "1"
        },
        {
          "typeID": 362441621,
          "name": "3c8244b82b974ffebc525ddc3c039eac",
          "description": "77a375513ff54bd0975d39a3f9d50339",
          "tooltipData": [
            {
              "Name": "BonusDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "1.5"
            }
          ],
          "icon": "883e2720ad11f2d49b51d9f649c67203",
          "abilitySlot": "2"
        },
        {
          "typeID": 1148917272,
          "name": "6215d6ef1d0642fe854b2b169fd6305d",
          "description": "09d87ac828e340c1be4f5e92c826ca2e",
          "tooltipData": [
            {
              "Name": "Hits",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "883e2720ad11f2d49b51d9f649c67203",
          "abilitySlot": "2"
        },
        {
          "typeID": 63336457,
          "name": "abe769e510794d038da0879a5772f3a2",
          "description": "555b74b1a3d34123bf34582075c3a61a",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            },
            {
              "Name": "ShieldAmount",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "14",
              "MaxValue": "{None}"
            }
          ],
          "icon": "883e2720ad11f2d49b51d9f649c67203",
          "abilitySlot": "2"
        },
        {
          "typeID": 2057222888,
          "name": "e0519d305f1e4402a74d0ba128d82200",
          "description": "b72f29c6136e48d48236f4eb73fc4a16",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "Static",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "386c13c670f54b36ad9bdd3d230f8964",
              "MaxValue": "{None}"
            },
            {
              "Name": "StaticDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            },
            {
              "Name": "ShieldValue",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "16",
              "MaxValue": "{None}"
            },
            {
              "Name": "ShieldDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "11106dc7b3c44144c94a5cfa08bbb84f",
          "abilitySlot": "3"
        },
        {
          "typeID": 1552462404,
          "name": "30a438ee317945d2a739ea7dee485225",
          "description": "91bb4e9f616b4e168724f73dcd7f3438",
          "tooltipData": [
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "4",
              "MaxValue": "{None}"
            }
          ],
          "icon": "11106dc7b3c44144c94a5cfa08bbb84f",
          "abilitySlot": "3"
        },
        {
          "typeID": 1304375702,
          "name": "7de89784d7ce42408b46a5efffcd6c41",
          "description": "72154dd4e201417c902f19f76becad24",
          "tooltipData": [
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "f5f7b137c0c9d444899035c91cedda42",
          "abilitySlot": "4"
        },
        {
          "typeID": 741331570,
          "name": "57492408a3b64094a0ef8e5a7a24296c",
          "description": "d8288a72bff44b59befa1da190a345c8",
          "tooltipData": [],
          "icon": "f5f7b137c0c9d444899035c91cedda42",
          "abilitySlot": "4"
        },
        {
          "typeID": 1886608885,
          "name": "37b0fb73684f462fb651c4c9295c9463",
          "description": "9bea9d5d9a574cbc899e4870d4d41970",
          "tooltipData": [
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            },
            {
              "Name": "EnergyReturn",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Percent",
              "Value": "25",
              "MaxValue": "{None}"
            }
          ],
          "icon": "54d351d4df0d47e48b37ee2b1959c2aa",
          "abilitySlot": "5"
        },
        {
          "typeID": 507002134,
          "name": "8c1edf2acbc64f99bec0879519e91ccc",
          "description": "f7f8c6e8a00f43249fe3508c4796f503",
          "tooltipData": [
            {
              "Name": "StunDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "Stun",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "4c898668b22b487786e7382d634603e7",
              "MaxValue": "{None}"
            }
          ],
          "icon": "296bc93338f9bc94a8afca3763e4a778",
          "abilitySlot": "6"
        },
        {
          "typeID": 1259138549,
          "name": "0da36303446648569e088d745ef8dbb1",
          "description": "0fdaea9491884db394c090f3a9305895",
          "tooltipData": [
            {
              "Name": "DamageFractor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "15",
              "MaxValue": "{None}"
            }
          ],
          "icon": "a4b023549fa7dbb46bb159a9b8557df2",
          "abilitySlot": "999"
        },
        {
          "typeID": 191073251,
          "name": "4edf77c150b743c280d0e2a0e952862e",
          "description": "a5204f2cc027487ea0a12fde8304141b",
          "tooltipData": [
            {
              "Name": "ShieldValue",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "10",
              "MaxValue": "{None}"
            },
            {
              "Name": "ShieldDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "f5f7b137c0c9d444899035c91cedda42",
          "abilitySlot": "4"
        }
      ],
      "ability1": {
        "typeID": 1973670146,
        "name": "2d8c1339c9d148979f1ac1153a937c06",
        "description": "9ed4a931ee4b4488bcee585019a3b8bf",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "10",
            "MaxValue": "10"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "5"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "2",
            "MaxValue": "2"
          },
          {
            "Name": "RageStacks",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "0",
            "MaxValue": "{None}"
          },
          {
            "Name": "MaxRage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "3",
            "MaxValue": "3"
          },
          {
            "Name": "Damage1",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage2",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage3",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "16",
            "MaxValue": "{None}"
          }
        ],
        "icon": "eeca038a5331f5a4b9182859b7ca6789",
        "icon128": "8df5b9cfc6dd7cd469d9b211f42c1076"
      },
      "ability2": {
        "typeID": 578492749,
        "name": "79f5444fc92046c5adecc8ac21509d56",
        "description": "71333fd703b947b487a837dd8656c567",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Static",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "386c13c670f54b36ad9bdd3d230f8964",
            "MaxValue": "{None}"
          },
          {
            "Name": "StaticDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "IncapDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Incapacitate",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "2380868a24734a4e9db5d584ee49bb70",
            "MaxValue": "{None}"
          }
        ],
        "icon": "df55c6f02fcc1d04d8edd98879c3f473",
        "icon128": "92dd476aa2340694c9f1167dfc761287"
      },
      "ability3": {
        "typeID": 717638893,
        "name": "abbc59b5433f469b95e8ba3fd075e399",
        "description": "3c5022661b4041b39b5d52765f842942",
        "tooltipData": [
          {
            "Name": "GradualHasteDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "GradualHasteFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "100",
            "MaxValue": "{None}"
          },
          {
            "Name": "LeechAmount",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "StaticSlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "StaticSlowFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "BuffDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirTime",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.45",
            "MaxValue": "{None}"
          },
          {
            "Name": "SpringBuff",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "abbc59b5433f469b95e8ba3fd075e399",
            "MaxValue": "{None}"
          }
        ],
        "icon": "9ecc9fa7c009d444fba0974db1d4fbfe",
        "icon128": "883e2720ad11f2d49b51d9f649c67203"
      },
      "ability4": {
        "typeID": 98085269,
        "name": "36c05215318d424e8b99d4db59eab2e3",
        "description": "d85f86496f924b75a69ac84768db7924",
        "tooltipData": [
          {
            "Name": "Duration2",
            "LocalizedName": "a1875cef6de04fb391bf2228dfe0e71b",
            "SortID": 3,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "ShieldAmount",
            "LocalizedName": "83036c5743b642abbf5ba0426e2e77aa",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "18",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "a307304ca3ed4c0db9d232cf2580f450",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          },
          {
            "Name": "Static",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "386c13c670f54b36ad9bdd3d230f8964",
            "MaxValue": "{None}"
          },
          {
            "Name": "StaticDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 4,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "6",
            "MaxValue": "{None}"
          }
        ],
        "icon": "47f728bb42b7c7e4c9df84339bf52f73",
        "icon128": "11106dc7b3c44144c94a5cfa08bbb84f"
      },
      "ability5": {
        "typeID": 645715500,
        "name": "67b431b107db495db6fe1858026a3920",
        "description": "a4eb244e4db0470d8d07ed5bd2b64cf6",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Static",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "386c13c670f54b36ad9bdd3d230f8964",
            "MaxValue": "{None}"
          },
          {
            "Name": "StaticDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirTime",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.4",
            "MaxValue": "{None}"
          }
        ],
        "icon": "ddcce07da3ee902448fd4b1f49761bf6",
        "icon128": "f5f7b137c0c9d444899035c91cedda42"
      },
      "ability6": {
        "typeID": 1729583804,
        "name": "8f3a1c415c944aee8d4b084a6a4ff570",
        "description": "51287819601e4660bc17a3d4ec28d1ca",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "14",
            "MaxValue": "{None}"
          },
          {
            "Name": "ShieldAmount",
            "LocalizedName": "83036c5743b642abbf5ba0426e2e77aa",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "14",
            "MaxValue": "{None}"
          },
          {
            "Name": "ShieldAmountStatic",
            "LocalizedName": "77c366ff2d87487088d10616141a5f21",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "14",
            "MaxValue": "{None}"
          },
          {
            "Name": "ShieldDuration",
            "LocalizedName": "a1875cef6de04fb391bf2228dfe0e71b",
            "SortID": 3,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3",
            "MaxValue": "{None}"
          }
        ],
        "icon": "8ee8cc514c240a941b4ccb55248ebd55",
        "icon128": "54d351d4df0d47e48b37ee2b1959c2aa"
      },
      "ability7": {
        "typeID": 773505836,
        "name": "e91481a71ed24ad29606637a048e2052",
        "description": "de3cabafdc594cb9b323da9004e93c66",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "45",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "15",
            "MaxValue": "{None}"
          },
          {
            "Name": "Static",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "386c13c670f54b36ad9bdd3d230f8964",
            "MaxValue": "{None}"
          },
          {
            "Name": "StaticDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirTime",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 1,
            "ValueType": "AdditiveValue",
            "UnitType": "Second",
            "Value": "0.9",
            "MaxValue": "0.6"
          }
        ],
        "icon": "5aca1d169f1f9854ab094752d5d17eeb",
        "icon128": "296bc93338f9bc94a8afca3763e4a778"
      }
    },
    {
      "typeID": 39373466,
      "name": "96665f8e798b4b50ba7834bddfdd937f",
      "devName": "Seeker",
      "title": "f1a7c8f3dde14014b7bb2f0f9c73efc5",
      "description": "554d2c2a60314249a3dffb9f56c1e3bd",
      "icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "wideIcon": "42a665b9c285a1243a201c8d533980e5",
      "battlerites": [
        {
          "typeID": 1259209412,
          "name": "3074486faa6841efb96919540f804680",
          "description": "b5207c716caf402b905efb3842fb72c9",
          "tooltipData": [
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "0",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "594fdf8c70a83404da422aa6463e0e03",
          "abilitySlot": "1"
        },
        {
          "typeID": 947794119,
          "name": "fe00f93761ae4559b3bf21503721c3a0",
          "description": "17f629b280aa466787b1c612d0358ac9",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            }
          ],
          "icon": "594fdf8c70a83404da422aa6463e0e03",
          "abilitySlot": "1"
        },
        {
          "typeID": 1291322215,
          "name": "884a28a42c0847be83fdf3d73570053b",
          "description": "0bf57c525fb646d28a9c0d9ff011b7cb",
          "tooltipData": [
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "16",
              "MaxValue": "{None}"
            }
          ],
          "icon": "594fdf8c70a83404da422aa6463e0e03",
          "abilitySlot": "1"
        },
        {
          "typeID": 775113179,
          "name": "0ca9fde233b0464cbe0c5bb7f86e6701",
          "description": "e44dbcd5fe764cd1bb02115dd16294e7",
          "tooltipData": [
            {
              "Name": "AmplifyPercent",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "SpeedModifier",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "{None}"
            }
          ],
          "icon": "4b81fcaeb29b2cd4e81e67d224552899",
          "abilitySlot": "2"
        },
        {
          "typeID": 1717360654,
          "name": "d18f31653fdc4c0fafeab763c1ac4227",
          "description": "279e3e5106d24c14a4c6df23412f70ce",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            },
            {
              "Name": "Energy",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Percent",
              "Value": "4",
              "MaxValue": "{None}"
            }
          ],
          "icon": "4b81fcaeb29b2cd4e81e67d224552899",
          "abilitySlot": "2"
        },
        {
          "typeID": 578500328,
          "name": "71a00f0d03a041cdaf8fdae00c15e629",
          "description": "43730c35e703489593a8b32c4daa6323",
          "tooltipData": [
            {
              "Name": "Charges",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "4b81fcaeb29b2cd4e81e67d224552899",
          "abilitySlot": "2"
        },
        {
          "typeID": 1042943470,
          "name": "61ce11a5656d475c99f92d74b99fec9f",
          "description": "4d079c69823b42dbbfcc23b64e9e1b40",
          "tooltipData": [
            {
              "Name": "OldFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "20",
              "MaxValue": "{None}"
            },
            {
              "Name": "NewFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "35",
              "MaxValue": "{None}"
            }
          ],
          "icon": "ce1e01246a2a09145a192bb0deeeb400",
          "abilitySlot": "3"
        },
        {
          "typeID": 1813257010,
          "name": "46f27179c92d43e8ba3b159a0c6f7140",
          "description": "3fe56c025e394d5d9f6e90a4c8c28d08",
          "tooltipData": [
            {
              "Name": "RadiusIncrease",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "15",
              "MaxValue": "{None}"
            },
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "SubtractiveValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "20"
            }
          ],
          "icon": "ce1e01246a2a09145a192bb0deeeb400",
          "abilitySlot": "3"
        },
        {
          "typeID": 963393208,
          "name": "6cd1c439af9b4e18a5f576d3282ad03a",
          "description": "52473467ff0642b29f6a53c1a7497a94",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "6e30eed38d549fa4794a4543bf2b8de2",
          "abilitySlot": "4"
        },
        {
          "typeID": 157163352,
          "name": "5684406b83594cd99db9d3484841535c",
          "description": "f76a41cf8aa74f05ad7970971e64293e",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            }
          ],
          "icon": "6e30eed38d549fa4794a4543bf2b8de2",
          "abilitySlot": "4"
        },
        {
          "typeID": 293805237,
          "name": "406bdfdc40974b6cae039daab9a2e400",
          "description": "c1a748c4d9ca4325865fdfc71c37f42a",
          "tooltipData": [
            {
              "Name": "Factor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "40",
              "MaxValue": "{None}"
            }
          ],
          "icon": "6e30eed38d549fa4794a4543bf2b8de2",
          "abilitySlot": "4"
        },
        {
          "typeID": 318830898,
          "name": "a1a3a36ceaf2489385eda658f30a6242",
          "description": "eba8b213f8b74ff8b93f4b7119b85f61",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "MultiplativeValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "MultiplativeValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            }
          ],
          "icon": "6e30eed38d549fa4794a4543bf2b8de2",
          "abilitySlot": "4"
        },
        {
          "typeID": 1709776181,
          "name": "c5314931ff3043fb82b4b3310b6d0196",
          "description": "20becc93ba0c47c69ff7a9b3a96b74ee",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "bcb5bbf5676057e4bb4278f5c20bb865",
          "abilitySlot": "5"
        },
        {
          "typeID": 1240189838,
          "name": "913c89421c91416497d036b267505a7f",
          "description": "c974ae745e1b4300aa04203de12496be",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "15",
              "MaxValue": "{None}"
            }
          ],
          "icon": "3ea8ba4321475c3459e91ad1f71f6e6e",
          "abilitySlot": "6"
        },
        {
          "typeID": 1020343513,
          "name": "7d82a0530ad342e4933933197ad90682",
          "description": "d2514d83bd3d4f54814b9c490b16f3f2",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            }
          ],
          "icon": "60a73a3140321ec448f7f97f00a07897",
          "abilitySlot": "999"
        },
        {
          "typeID": 388545879,
          "name": "ec3d0532a2b24e2aac27e72527fe36fe",
          "description": "e874ec87517249608552845306999a6e",
          "tooltipData": [
            {
              "Name": "HasteModifier",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "bbe2697d5982f654d8dab2223790bd77",
          "abilitySlot": "999"
        }
      ],
      "ability1": {
        "typeID": 1702843065,
        "name": "abe1b70e319143dca0f29f49a85c4d7a",
        "description": "6f3e894627004811a44f23cf5e76610e",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "16",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "9",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "MaxRage",
            "LocalizedName": "24d5ab8752df490684916d178557755b",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "3",
            "MaxValue": "{None}"
          }
        ],
        "icon": "384ae17ffa395a442b2c1bb8c366b69a",
        "icon128": "60a73a3140321ec448f7f97f00a07897"
      },
      "ability2": {
        "typeID": 1845720173,
        "name": "f2af9c8e39a44411a5caf8efa09f75f5",
        "description": "6c323f2b5eab4da499db3c2fe4a0e9f3",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "28",
            "MaxValue": "{None}"
          },
          {
            "Name": "ReducePercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "AreaDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          }
        ],
        "icon": "b7b20d14d3ab83a4d8180635ad8e4b5d",
        "icon128": "594fdf8c70a83404da422aa6463e0e03"
      },
      "ability3": {
        "typeID": 131957505,
        "name": "6a4ce8cefbb74155b231b132acbdea2d",
        "description": "cecf699c22d346ba9aedd7b2d229c0dd",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "8",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "PoisonDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "{None}",
            "MaxValue": "{None}"
          }
        ],
        "icon": "d6c1ee41f3341d243ad88a49d1b04aa4",
        "icon128": "4b81fcaeb29b2cd4e81e67d224552899"
      },
      "ability4": {
        "typeID": 1338599461,
        "name": "fd1d6235eba34b0d89fc0e32b9f9470b",
        "description": "b3f30f46ba934fc3adbc2ee122c33815",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "4"
          },
          {
            "Name": "TickDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "ImpactDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowPercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "20",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "4"
          },
          {
            "Name": "Slow",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "b5b19aeaa91c4354a330bd761a1f0d86",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          },
          {
            "Name": "SeekersMark",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "0f8a91ad01f84ac8a27a15de2d3cd05a",
            "MaxValue": "{None}"
          },
          {
            "Name": "ConsumeHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "MarkDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "10",
            "MaxValue": "2"
          },
          {
            "Name": "ImpactDelay",
            "LocalizedName": "c2f75a279186454aa0ad062ef601c9bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.6",
            "MaxValue": "{None}"
          }
        ],
        "icon": "646de184359cbd448b756591198112f6",
        "icon128": "ce1e01246a2a09145a192bb0deeeb400"
      },
      "ability5": {
        "typeID": 508323608,
        "name": "6ee923d6dc7148d6925df8919b751e13",
        "description": "f66dd9b99a2d414ab0fe9df70deee322",
        "tooltipData": [
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "DebuffDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "Root",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "0393817baad8475c802924bce807e412",
            "MaxValue": "{None}"
          },
          {
            "Name": "ImmobilizeDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2",
            "MaxValue": "{None}"
          }
        ],
        "icon": "919958cff710b2b44bc6a143b83e9f3f",
        "icon128": "6e30eed38d549fa4794a4543bf2b8de2"
      },
      "ability6": {
        "typeID": 895907877,
        "name": "80f7467af85e4b00aed9148d9ef3187d",
        "description": "9e8d99886f3d4a85b8586fe69d8f4557",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.2",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "HasteFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "100",
            "MaxValue": "{None}"
          },
          {
            "Name": "Mark",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "0f8a91ad01f84ac8a27a15de2d3cd05a",
            "MaxValue": "{None}"
          },
          {
            "Name": "IncapDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "MarkDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "ConsumeHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          }
        ],
        "icon": "f8c0a4dceca28c4439e6f5b591c4bf2c",
        "icon128": "bcb5bbf5676057e4bb4278f5c20bb865"
      },
      "ability7": {
        "typeID": 478592007,
        "name": "7ec5a698b8eb418ba4c68a9f07eebafe",
        "description": "c0e3fb6d4b254632be8e1f6b77f23255",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "RangeValue",
            "UnitType": "Standard",
            "Value": "45",
            "MaxValue": "60"
          },
          {
            "Name": "MaxChargeDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "StunDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.2",
            "MaxValue": "{None}"
          },
          {
            "Name": "TargetDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "30",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.2",
            "MaxValue": "{None}"
          },
          {
            "Name": "Stun",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "4c898668b22b487786e7382d634603e7",
            "MaxValue": "{None}"
          },
          {
            "Name": "MinChargeDuration",
            "LocalizedName": "e0fa7bd940a348e09d975024a4b3acce",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.8",
            "MaxValue": "{None}"
          }
        ],
        "icon": "1a87e00e34bdb48409fef4994fad98ab",
        "icon128": "3ea8ba4321475c3459e91ad1f71f6e6e"
      }
    },
    {
      "typeID": 763360732,
      "name": "ed420e0ca45a4eaeb1010151e236f334",
      "devName": "Spearmaster",
      "title": "e1e760a8d21348d1aff0e805a4ab71b5",
      "description": "2cc48cf2c81f46c8ab00f7bb70ba120f",
      "icon": "7853a4b1214bef74a8bbdf17f0a45bb8",
      "wideIcon": "6f69edc7410650c43bee267eef585b06",
      "battlerites": [
        {
          "typeID": 981930995,
          "name": "a2fa2e7ceceb46b3b8e7563e5b643d75",
          "description": "36cfea2d299f4141bfa0a63e1ec2b1be",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDamagePerCharge",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "18eee826117df534d91bd518653fc360",
          "abilitySlot": "1"
        },
        {
          "typeID": 1733483752,
          "name": "d481607885334501ba34d64d996adaa6",
          "description": "a1d72a17a0c14fa7937a938b8391ec92",
          "tooltipData": [],
          "icon": "18eee826117df534d91bd518653fc360",
          "abilitySlot": "1"
        },
        {
          "typeID": 1643480921,
          "name": "94137fad6b4241428081d978b52c8b17",
          "description": "49c25f23bbec41b0a36945b6ae0b92f1",
          "tooltipData": [
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusHealing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusHealingPerCharge",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "18eee826117df534d91bd518653fc360",
          "abilitySlot": "1"
        },
        {
          "typeID": 744679762,
          "name": "6e37a8f3039a4324bc86fd4bb59c0012",
          "description": "dd3a65ec4fa34994b5242dca9ec4e578",
          "tooltipData": [
            {
              "Name": "DamageModifier",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "10"
            },
            {
              "Name": "BonusEnergy",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Percent",
              "Value": "8",
              "MaxValue": "{None}"
            }
          ],
          "icon": "0b6f5070063c16f4eb62990034cffd29",
          "abilitySlot": "2"
        },
        {
          "typeID": 1340706488,
          "name": "41daf2ef48cd4aa0a9b41f37bd5cc13b",
          "description": "4a999788cd9446b393a2057804a918dc",
          "tooltipData": [
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "14",
              "MaxValue": "{None}"
            }
          ],
          "icon": "0b6f5070063c16f4eb62990034cffd29",
          "abilitySlot": "2"
        },
        {
          "typeID": 6049383,
          "name": "036557c384f049c19a86eb490a3f23ec",
          "description": "2cd9e16d87e6493e9ae910510dcc2b41",
          "tooltipData": [
            {
              "Name": "HasteFactor1",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "35"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.5",
              "MaxValue": "1.3"
            },
            {
              "Name": "HasteFactor2",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "35",
              "MaxValue": "{None}"
            }
          ],
          "icon": "0b6f5070063c16f4eb62990034cffd29",
          "abilitySlot": "2"
        },
        {
          "typeID": 1423694444,
          "name": "f148e54cc6a34e97a7185c690ee638bb",
          "description": "c5e4e567f72b43abb0b4c7eb1e1eea18",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "19e037c83991916449cd9475c20ca0d1",
          "abilitySlot": "3"
        },
        {
          "typeID": 55134935,
          "name": "0cc486e3cd96408d952621b59a05ee73",
          "description": "0b257db7f5784ca6a1bb41986459b1c4",
          "tooltipData": [
            {
              "Name": "AreaHeal",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "SelfHeal",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "14",
              "MaxValue": "{None}"
            }
          ],
          "icon": "19e037c83991916449cd9475c20ca0d1",
          "abilitySlot": "3"
        },
        {
          "typeID": 1018739404,
          "name": "8578c386a2224b2fbf26376fdd39a2f8",
          "description": "0bac800ebe4c4be387a741d9a818f17e",
          "tooltipData": [
            {
              "Name": "RecastDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            },
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "2b30312258b7fec4a90040d475f5b31f",
          "abilitySlot": "4"
        },
        {
          "typeID": 1962320608,
          "name": "5dc5323a8b1b40b98f432db3bde56a08",
          "description": "a3fa25ed77574565ad306c589446bcf1",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            },
            {
              "Name": "RangeFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "2b30312258b7fec4a90040d475f5b31f",
          "abilitySlot": "4"
        },
        {
          "typeID": 1873968515,
          "name": "1bdba27da0b34b038f98ad99c45fb629",
          "description": "a60a929e6b2f43ebbfd422206b5cc9c4",
          "tooltipData": [
            {
              "Name": "Root",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "0393817baad8475c802924bce807e412",
              "MaxValue": "{None}"
            },
            {
              "Name": "ImmobilizeDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.2",
              "MaxValue": "{None}"
            },
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "0",
              "MaxValue": "{None}"
            }
          ],
          "icon": "2b30312258b7fec4a90040d475f5b31f",
          "abilitySlot": "4"
        },
        {
          "typeID": 540902775,
          "name": "a844225b43204be1948d985f12987f77",
          "description": "cb24762b81634ee9a6562c17466564f4",
          "tooltipData": [
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "EnergyReturn",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Percent",
              "Value": "15",
              "MaxValue": "{None}"
            },
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            }
          ],
          "icon": "51550c5d60b411544a130bfc026b306d",
          "abilitySlot": "5"
        },
        {
          "typeID": 891584855,
          "name": "32c3d9805d474d878b55a9c8ddd4c0cc",
          "description": "cd0027520e984693aebec2762615a0e6",
          "tooltipData": [
            {
              "Name": "MovementModifier2",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "{None}"
            },
            {
              "Name": "MovementModifier1",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "20",
              "MaxValue": "{None}"
            }
          ],
          "icon": "94c55dd8947efe74ca760d4c29728ee0",
          "abilitySlot": "6"
        },
        {
          "typeID": 513315594,
          "name": "4fe637d86e3d47d7858e931a514abf46",
          "description": "d7ca9430f7d64f09808513d008e03b98",
          "tooltipData": [
            {
              "Name": "RageBonus",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "WeaponCharge",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "19e037c83991916449cd9475c20ca0d1",
          "abilitySlot": "3"
        }
      ],
      "ability1": {
        "typeID": 760884262,
        "name": "0515e9d9039f476ebceb645dd8429168",
        "description": "e66c5ae2fe9140d6bd70ce2bdb2aa100",
        "tooltipData": [
          {
            "Name": "Damage1",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage2",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage3",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "RageStacks",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "1",
            "MaxValue": "{None}"
          },
          {
            "Name": "MaxRage",
            "LocalizedName": "24d5ab8752df490684916d178557755b",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "3",
            "MaxValue": "{None}"
          }
        ],
        "icon": "bd757dba64f8037428b852b6125ab6bd",
        "icon128": "b7b5cef2c38f3b04a94a59baea22e368"
      },
      "ability2": {
        "typeID": 1176812756,
        "name": "f95c651a168d4101b598a18b4974553b",
        "description": "8465d033b0664b9dbd20860aef62b35b",
        "tooltipData": [
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "9",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "ReducePercent",
            "LocalizedName": "d2a07fd6b5284efc9dc826e763f3c006",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "40",
            "MaxValue": "{None}"
          }
        ],
        "icon": "d95e482b4c2f4d048810fd70f2a1e070",
        "icon128": "18eee826117df534d91bd518653fc360"
      },
      "ability3": {
        "typeID": 1493003740,
        "name": "ce8eada758d44ae7a7ed7a4943cc37e7",
        "description": "46d2b9040a5d44f28cb914b0c93b22d6",
        "tooltipData": [
          {
            "Name": "SpeedPercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "35",
            "MaxValue": "{None}"
          },
          {
            "Name": "ImmaterialDuration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.3",
            "MaxValue": "{None}"
          },
          {
            "Name": "DamageReduction",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "50",
            "MaxValue": "{None}"
          },
          {
            "Name": "Immaterial",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "5c1d72c2891b43008334207eb7f9f12c",
            "MaxValue": "{None}"
          }
        ],
        "icon": "d465bdaf2643cad4e80015a96d077c44",
        "icon128": "0b6f5070063c16f4eb62990034cffd29"
      },
      "ability4": {
        "typeID": 1750205777,
        "name": "c9dc7588a36540389a45a4282bd3ef8b",
        "description": "37c285be8e5f4b41911a901357662f47",
        "tooltipData": [
          {
            "Name": "KunjuHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "16",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowPercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "a307304ca3ed4c0db9d232cf2580f450",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.2",
            "MaxValue": "{None}"
          },
          {
            "Name": "ImmaterialDuration",
            "LocalizedName": "34a41b0937a4464bb4a7241fdd5bf924",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Immaterial",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "5c1d72c2891b43008334207eb7f9f12c",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamageDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "SubtractiveValue",
            "UnitType": "Standard",
            "Value": "7",
            "MaxValue": "10"
          },
          {
            "Name": "BonusDamageBuff",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "43549f3caadf47389a7eec8e3a3ab2d8",
            "MaxValue": "{None}"
          }
        ],
        "icon": "3cbf86803e7ea4442ad1d144f64ffc8c",
        "icon128": "19e037c83991916449cd9475c20ca0d1"
      },
      "ability5": {
        "typeID": 467552288,
        "name": "7c95c71d1af54b458e49a1b385573ab5",
        "description": "d475ef2b9fd9459fa8f67fbe3c5f4a29",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "8",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirTime",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 1,
            "ValueType": "RangeValue",
            "UnitType": "Second",
            "Value": "0.2",
            "MaxValue": "0.4"
          }
        ],
        "icon": "1bb34e49929482146aa92a2692fa4446",
        "icon128": "2b30312258b7fec4a90040d475f5b31f"
      },
      "ability6": {
        "typeID": 1724894578,
        "name": "bd6afb65e8fc4491a85d7cd073d7c4f7",
        "description": "6e7588bd0d3343e0b171d051642602bb",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "IncapDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2.6",
            "MaxValue": "{None}"
          },
          {
            "Name": "Incapacitate",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          }
        ],
        "icon": "a8096ee9d46e27c41b3dad4f88e24e8c",
        "icon128": "51550c5d60b411544a130bfc026b306d"
      },
      "ability7": {
        "typeID": 500738102,
        "name": "6749e829595a4ba496c0621045a3ed16",
        "description": "0c603d5bba4c4a42ac5908ee6368c2fa",
        "tooltipData": [
          {
            "Name": "SpeedPercent",
            "LocalizedName": "2d69eb51423e4f0d8410e80c274a747f",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "20",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2.75",
            "MaxValue": "12"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "112",
            "MaxValue": "{None}"
          },
          {
            "Name": "Absorb",
            "LocalizedName": "83036c5743b642abbf5ba0426e2e77aa",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "30",
            "MaxValue": "{None}"
          }
        ],
        "icon": "43faa063a5e119143bd1e4cc8d33df3f",
        "icon128": "94c55dd8947efe74ca760d4c29728ee0"
      }
    },
    {
      "typeID": 1377055301,
      "name": "051b83cf1878426a9bc0a329babbea8f",
      "devName": "Stormcaller",
      "title": "d543ff906ca0427884b8fdf36b02ba1c",
      "description": "35047d6ed65841b29f82a661d2b6f04d",
      "icon": "6e29d30d928547b4e941ce3e6e4e83b3",
      "wideIcon": "3af1fdc53169d044b939cce7ffb561a1",
      "battlerites": [
        {
          "typeID": 1948090688,
          "name": "a310fe23f5a148b6ba1340ac29400544",
          "description": "cf06a3e796ce4f08bddbd8676977d6a6",
          "tooltipData": [
            {
              "Name": "Number",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "3",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.4",
              "MaxValue": "{None}"
            }
          ],
          "icon": "18ab7b3d5a6d72c4983b091360323f41",
          "abilitySlot": "0"
        },
        {
          "typeID": 886310780,
          "name": "695226c7338141f185cdd3dbb80db977",
          "description": "d38c6a124bfe408180748965b3bcde91",
          "tooltipData": [
            {
              "Name": "RangeIncrease",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "25",
              "MaxValue": "{None}"
            }
          ],
          "icon": "da12579e4ef58ba4c87c1819bf1c699b",
          "abilitySlot": "1"
        },
        {
          "typeID": 1391836164,
          "name": "be9d5b666fff40b0a3a46c3ff6c7607b",
          "description": "a140867068774779820ec14b055d93b8",
          "tooltipData": [
            {
              "Name": "MinDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.4",
              "MaxValue": "{None}"
            },
            {
              "Name": "MaxDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.8",
              "MaxValue": "{None}"
            }
          ],
          "icon": "da12579e4ef58ba4c87c1819bf1c699b",
          "abilitySlot": "1"
        },
        {
          "typeID": 1423255236,
          "name": "eb7eb8c839c34ee4bec2de5ea0b0e440",
          "description": "5b1d7c917feb4a9b909df70e5e0d47ac",
          "tooltipData": [
            {
              "Name": "MinDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            },
            {
              "Name": "MaxDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            }
          ],
          "icon": "da12579e4ef58ba4c87c1819bf1c699b",
          "abilitySlot": "1"
        },
        {
          "typeID": 1075244276,
          "name": "5e6b532d77834c179ee488df0084637c",
          "description": "2f5017fad5b04f4f8610d08466a8b47f",
          "tooltipData": [
            {
              "Name": "HasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "{None}",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusCharges",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "SubtractiveValue",
              "UnitType": "Standard",
              "Value": "0",
              "MaxValue": "3"
            }
          ],
          "icon": "99a21ff998aff1248a10df2d317faa20",
          "abilitySlot": "2"
        },
        {
          "typeID": 1352137996,
          "name": "d677b10bfc784c3086a7c0a651d5bf24",
          "description": "9617eb0160fc4d40870b7d2d463bfbcd",
          "tooltipData": [
            {
              "Name": "WeaponCharges",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "99a21ff998aff1248a10df2d317faa20",
          "abilitySlot": "2"
        },
        {
          "typeID": 392734428,
          "name": "6bfbb76c4ced42269ce9808c9c90b79e",
          "description": "83b8999ae348473dafb94a402de998b0",
          "tooltipData": [
            {
              "Name": "HasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "60",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "99a21ff998aff1248a10df2d317faa20",
          "abilitySlot": "2"
        },
        {
          "typeID": 1071140601,
          "name": "cb3993db27f8486e9f64a3e6f32d3df6",
          "description": "735c8d2db4d14804919dd97ba9b03077",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            },
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            },
            {
              "Name": "ChargesConsumed",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "{None}",
              "MaxValue": "{None}"
            }
          ],
          "icon": "563027e5fd687db4697308c54fe91381",
          "abilitySlot": "3"
        },
        {
          "typeID": 1890671384,
          "name": "fc9b9e6904314e3ead4d45333362e602",
          "description": "63840846ee4c465fb97e0d681a639197",
          "tooltipData": [
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            }
          ],
          "icon": "563027e5fd687db4697308c54fe91381",
          "abilitySlot": "3"
        },
        {
          "typeID": 2065576029,
          "name": "8c9b78ef93ac40ea861d2dcec78e7dc6",
          "description": "cfe86a8be8bb49fab6f4645c9e5583e4",
          "tooltipData": [
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "HasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "40",
              "MaxValue": "{None}"
            }
          ],
          "icon": "563027e5fd687db4697308c54fe91381",
          "abilitySlot": "3"
        },
        {
          "typeID": 1251073547,
          "name": "9a1ff4058df548c88cdb52fa5fb7d6b0",
          "description": "0e380def97aa43728a5b9bef1e63b9f8",
          "tooltipData": [
            {
              "Name": "HealingFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "b51e6f88de6853d46bec81bbb3a655a4",
          "abilitySlot": "4"
        },
        {
          "typeID": 649036082,
          "name": "fc822906932448cd9c50c43b377c9267",
          "description": "835f10937adb48e59243aab40e5b29aa",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "b51e6f88de6853d46bec81bbb3a655a4",
          "abilitySlot": "4"
        },
        {
          "typeID": 1525908617,
          "name": "d264c255b50a4ce59679d360781900ff",
          "description": "b382bf8c46c94e1cb376376dbe0e73cb",
          "tooltipData": [
            {
              "Name": "RangeFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "{None}"
            },
            {
              "Name": "Charges",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "b51e6f88de6853d46bec81bbb3a655a4",
          "abilitySlot": "4"
        },
        {
          "typeID": 971215325,
          "name": "0b015976cbe244879f5276c5a6c23ff3",
          "description": "b2a68c6f03704deda090814ba2915d13",
          "tooltipData": [
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "MultiplativeValue",
              "UnitType": "Standard",
              "Value": "32",
              "MaxValue": "8"
            }
          ],
          "icon": "09c45aed2b0414a42a18c1b81c9e589a",
          "abilitySlot": "5"
        },
        {
          "typeID": 718289394,
          "name": "0558366d357e4e4991f512c82c3adbd7",
          "description": "bcf2ea8b256849deba0fe08f9d3b65c9",
          "tooltipData": [
            {
              "Name": "BonusForce",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "40",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "41cc34493bbdcb44985028d3000656d8",
          "abilitySlot": "6"
        }
      ],
      "ability1": {
        "typeID": 1090264556,
        "name": "06b5daf0f665467d8ebbd06645d22e11",
        "description": "e1b4de2860b74b289475df710034288e",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "8",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "4",
            "MaxValue": "{None}"
          },
          {
            "Name": "Charge",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "ReloadDuration",
            "LocalizedName": "f978a8f83cbe449ea3da837bc8697897",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.9",
            "MaxValue": "{None}"
          }
        ],
        "icon": "5d9583ca605e75b40bf51433c71f1e35",
        "icon128": "18ab7b3d5a6d72c4983b091360323f41"
      },
      "ability2": {
        "typeID": 1087070488,
        "name": "451910f8ebc14c4dbab8ab3cbe198651",
        "description": "9bee2a80705540f88282fdf05e5d9c18",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "RangeValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "20"
          },
          {
            "Name": "MaxChargeDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.3",
            "MaxValue": "{None}"
          },
          {
            "Name": "StunDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "TargetDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "8",
            "MaxValue": "{None}"
          },
          {
            "Name": "MinChargeDuration",
            "LocalizedName": "e0fa7bd940a348e09d975024a4b3acce",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.4",
            "MaxValue": "{None}"
          }
        ],
        "icon": "b884502dd8b9c294593b8f7386d444c9",
        "icon128": "da12579e4ef58ba4c87c1819bf1c699b"
      },
      "ability3": {
        "typeID": 181252060,
        "name": "cf8689b8d3a54a07909993811d2ad394",
        "description": "baa21e376e424ab691db074edd38d242",
        "tooltipData": [
          {
            "Name": "RecastDuration",
            "LocalizedName": "dd7bc1a2cae2405a9d5038f95fe638d8",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.8",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirTime",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.3",
            "MaxValue": "{None}"
          }
        ],
        "icon": "e67cd48746fb20046b0af93045be2f1f",
        "icon128": "99a21ff998aff1248a10df2d317faa20"
      },
      "ability4": {
        "typeID": 110685516,
        "name": "0f256aac6d3446b8ae9492f71853d597",
        "description": "450dc69d32a841bbb6730764f3c550bc",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "Charges",
            "LocalizedName": "24d5ab8752df490684916d178557755b",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6",
            "MaxValue": "{None}"
          }
        ],
        "icon": "adfefcb6cbdeb0140859c98518c8b682",
        "icon128": "563027e5fd687db4697308c54fe91381"
      },
      "ability5": {
        "typeID": 461675303,
        "name": "3cb627f144b145db82f85a35a5ddac75",
        "description": "69b036d3aad64121940894a2c39efb78",
        "tooltipData": [
          {
            "Name": "ImmobilizeDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "Root",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "0393817baad8475c802924bce807e412",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "8",
            "MaxValue": "{None}"
          },
          {
            "Name": "DamagePerShield",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "AreaDamageFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Delay",
            "LocalizedName": "c2f75a279186454aa0ad062ef601c9bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.3",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "7",
            "MaxValue": "{None}"
          }
        ],
        "icon": "6688cd4fb3749b848b98ec70389604fd",
        "icon128": "b51e6f88de6853d46bec81bbb3a655a4"
      },
      "ability6": {
        "typeID": 1257680118,
        "name": "44bb3d9445d4478884cfdcaefbc6a347",
        "description": "138d07824415466d8ca10e6584481178",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "OutputFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "cb4a28b211c54c228e2abbe29eeeaaa4",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "4",
            "MaxValue": "{None}"
          }
        ],
        "icon": "c40e175edf4cb2c4d966b1dfae9ec588",
        "icon128": "09c45aed2b0414a42a18c1b81c9e589a"
      },
      "ability7": {
        "typeID": 1627711587,
        "name": "c9ffece92aab447ea5e21f4136e1d3ce",
        "description": "8903b05a529141559b326beb2540b411",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "55",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "ImpactDelay",
            "LocalizedName": "c2f75a279186454aa0ad062ef601c9bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.2",
            "MaxValue": "{None}"
          }
        ],
        "icon": "edc47529509153e4d8555ffd4ba44347",
        "icon128": "41cc34493bbdcb44985028d3000656d8"
      }
    },
    {
      "typeID": 1749055646,
      "name": "6b3efda7c227421b9736be7006f7035e",
      "devName": "Swordmaster",
      "title": "b67f1524bead463c82e9d3819a0595e3",
      "description": "8111f80af62743e48515e0a7ad1d2ba3",
      "icon": "e0b418f839ba5ff4baa728af4f454d89",
      "wideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "battlerites": [
        {
          "typeID": 949987667,
          "name": "c6b984fd97974e9d8de07d5ce7db81be",
          "description": "160347353e494020b674791f88ca6704",
          "tooltipData": [
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "12",
              "MaxValue": "{None}"
            },
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "10",
              "MaxValue": "{None}"
            },
            {
              "Name": "SlicingWind",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "c3852ddc5b6b444caf1a2e21695f0944",
              "MaxValue": "{None}"
            }
          ],
          "icon": "47dabb046c0ec4d4c96bde0832713a46",
          "abilitySlot": "2"
        },
        {
          "typeID": 1305500345,
          "name": "08ef3eba3b9c40aa9ddff060458753dd",
          "description": "f57941bb23834e8cb76d1a961c56c3df",
          "tooltipData": [
            {
              "Name": "LengthIncrease",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "20",
              "MaxValue": "{None}"
            }
          ],
          "icon": "d5c38afdefecf224b9a71bdfdb60dee1",
          "abilitySlot": "1"
        },
        {
          "typeID": 2062860382,
          "name": "eba4fc32bc1c4a73a34faba6248ea984",
          "description": "6036950ebbea41cfb648339652f84cce",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "d5c38afdefecf224b9a71bdfdb60dee1",
          "abilitySlot": "1"
        },
        {
          "typeID": 674446208,
          "name": "f5574154be8a451e88462a3454d0b339",
          "description": "59f3a4559ecf406c9fa0ed16074115ef",
          "tooltipData": [
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "47dabb046c0ec4d4c96bde0832713a46",
          "abilitySlot": "2"
        },
        {
          "typeID": 1190140093,
          "name": "7b58031aa8c642cdb5cfb2a63b21dd74",
          "description": "244a39131530460da98e2a5df11860ff",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "{None}"
            },
            {
              "Name": "WeakenFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "{None}"
            }
          ],
          "icon": "47dabb046c0ec4d4c96bde0832713a46",
          "abilitySlot": "2"
        },
        {
          "typeID": 1701488355,
          "name": "b01e673198d44c699d280ff908af86f9",
          "description": "40efc09275a545a681fcef15c754a1a6",
          "tooltipData": [],
          "icon": "47dabb046c0ec4d4c96bde0832713a46",
          "abilitySlot": "2"
        },
        {
          "typeID": 2044243739,
          "name": "301108ff4b704c1fb1b3e74a8c1ea4fc",
          "description": "ef98399967974cfd9549d418523f9e62",
          "tooltipData": [
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            }
          ],
          "icon": "fbfb00ff4fa4bc542b54639b84406f01",
          "abilitySlot": "3"
        },
        {
          "typeID": 1732729597,
          "name": "c22f06c878ec44258478d17b3b1fc30b",
          "description": "6e4c6c1a593c41408c307bdd0adb2d4f",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "fbfb00ff4fa4bc542b54639b84406f01",
          "abilitySlot": "3"
        },
        {
          "typeID": 495562173,
          "name": "9ca814aeeab5408ca43cc257c99f6b22",
          "description": "807304573be246f79a6c7fe59947913a",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "10",
              "MaxValue": "{None}"
            },
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "12",
              "MaxValue": "{None}"
            },
            {
              "Name": "MaxCharges",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "3",
              "MaxValue": "{None}"
            },
            {
              "Name": "Health",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            },
            {
              "Name": "SlicingWind",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "c3852ddc5b6b444caf1a2e21695f0944",
              "MaxValue": "{None}"
            }
          ],
          "icon": "fbfb00ff4fa4bc542b54639b84406f01",
          "abilitySlot": "3"
        },
        {
          "typeID": 2072828814,
          "name": "a480a76ce62847fca49ec68d2ef05e5a",
          "description": "49f8f0d8703d48669e76d2a881a9d7dd",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.7",
              "MaxValue": "{None}"
            }
          ],
          "icon": "3c1f1a5c65f54594a9d3ba17b8f1b2a2",
          "abilitySlot": "4"
        },
        {
          "typeID": 1069414475,
          "name": "c803935d21d84f509ce3009588ea882e",
          "description": "b14279e544ed414ebd1283fc016ea0ab",
          "tooltipData": [
            {
              "Name": "TargetDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "10",
              "MaxValue": "{None}"
            },
            {
              "Name": "AreaDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "16",
              "MaxValue": "{None}"
            }
          ],
          "icon": "3c1f1a5c65f54594a9d3ba17b8f1b2a2",
          "abilitySlot": "4"
        },
        {
          "typeID": 131339215,
          "name": "86467087337549ed8568a5c936b32992",
          "description": "67c083cb13aa49cba5ae62610852e5e0",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "Factor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "70",
              "MaxValue": "{None}"
            }
          ],
          "icon": "3c1f1a5c65f54594a9d3ba17b8f1b2a2",
          "abilitySlot": "4"
        },
        {
          "typeID": 1554437885,
          "name": "c9507b80fdbf4d2aa55cadff34df7fd2",
          "description": "5a82fba8d98a43e1be7a9dd95714684d",
          "tooltipData": [
            {
              "Name": "RecastDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "d25b4fc0d427d424891492d2b61469a9",
          "abilitySlot": "5"
        },
        {
          "typeID": 286613610,
          "name": "7833b5889bd24193bd59b683637b3b70",
          "description": "eda1c89b234f47c898c3a89b654a092a",
          "tooltipData": [],
          "icon": "9712b4171f1869245b0f079805f126d3",
          "abilitySlot": "6"
        },
        {
          "typeID": 388545879,
          "name": "ec3d0532a2b24e2aac27e72527fe36fe",
          "description": "e874ec87517249608552845306999a6e",
          "tooltipData": [
            {
              "Name": "HasteModifier",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "bbe2697d5982f654d8dab2223790bd77",
          "abilitySlot": "999"
        }
      ],
      "ability1": {
        "typeID": 718188854,
        "name": "b4fecf0198aa4015a042587275f10d43",
        "description": "220ebb10ed3e4dd89362edda4a25a6a4",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage2",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "CooldownReduction",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          }
        ],
        "icon": "43326ae6c99dc0948812078ee147474d",
        "icon128": "0e8d61a83da2c394e87bb8de37950482"
      },
      "ability2": {
        "typeID": 565246006,
        "name": "b940350df1234a309ac780c55b5f4a51",
        "description": "70818f08da0c41a49de68aa592c2fd97",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "11",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "7",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 3,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "7",
            "MaxValue": "{None}"
          },
          {
            "Name": "DamageReductionPerHit",
            "LocalizedName": "d2a07fd6b5284efc9dc826e763f3c006",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "35",
            "MaxValue": "{None}"
          },
          {
            "Name": "HealingReductionPerHit",
            "LocalizedName": "86516eef63cb41d2a66ddd98d13d70bf",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "35",
            "MaxValue": "{None}"
          }
        ],
        "icon": "8ef10d31511fd634895b9db19a156ce0",
        "icon128": "d5c38afdefecf224b9a71bdfdb60dee1"
      },
      "ability3": {
        "typeID": 1900368609,
        "name": "db2df67cb2e747829ffd08ab0d9bd674",
        "description": "253adda61eee4f8a95040ac5e5bc826a",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "20"
          },
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "7",
            "MaxValue": "{None}"
          },
          {
            "Name": "AirTime",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.55",
            "MaxValue": "{None}"
          }
        ],
        "icon": "19f733680d3ade9459771567d5469796",
        "icon128": "47dabb046c0ec4d4c96bde0832713a46"
      },
      "ability4": {
        "typeID": 690503554,
        "name": "aa7d1ecce46947fcb37f6dd95c7057d1",
        "description": "0ced8893bdf94c8c8c771953825c2fba",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "Reflects",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Counterattack Damage",
            "LocalizedName": "de015e295aaf4e3f924215a58fb9669d",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "ParryDuration",
            "LocalizedName": "27da2e2f294449478aaf6e7921deaa0a",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Stun",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "4c898668b22b487786e7382d634603e7",
            "MaxValue": "{None}"
          },
          {
            "Name": "StunDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.5",
            "MaxValue": "{None}"
          }
        ],
        "icon": "c8e260a70eb12884fa7cca2bbcec6c98",
        "icon128": "fbfb00ff4fa4bc542b54639b84406f01"
      },
      "ability5": {
        "typeID": 2039596325,
        "name": "35bc6901107a4fb4b250cec0e4fcac50",
        "description": "668b1ff38cee4eb6aeb69f9407b2e7e6",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "StunDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.4",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "7",
            "MaxValue": "{None}"
          }
        ],
        "icon": "e05cbf6225316de44b94309ffdcc9196",
        "icon128": "3c1f1a5c65f54594a9d3ba17b8f1b2a2"
      },
      "ability6": {
        "typeID": 664746763,
        "name": "6610a007ed4e4c9cbcdc6b02262eb858",
        "description": "cb30d7d32e2441a78892a161cfe09cfa",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "8",
            "MaxValue": "{None}"
          },
          {
            "Name": "ExtraDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "FadingSnare",
            "LocalizedName": "e6ee239b70b64b0cbdd9525e06acda60",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "e6ee239b70b64b0cbdd9525e06acda60",
            "MaxValue": "{None}"
          },
          {
            "Name": "GradualSlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          }
        ],
        "icon": "5b7b2a1e5e415054caa42d4271f91820",
        "icon128": "d25b4fc0d427d424891492d2b61469a9"
      },
      "ability7": {
        "typeID": 1319449529,
        "name": "4212c49d840f4843a6ff76dd407f77b7",
        "description": "0e981204dba44d389ff5c49e5a19ec21",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "{None}"
          },
          {
            "Name": "TickDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "84",
            "MaxValue": "14"
          },
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3",
            "MaxValue": "{None}"
          }
        ],
        "icon": "097521894db7e6e4c9089140e45b0042",
        "icon128": "9712b4171f1869245b0f079805f126d3"
      }
    },
    {
      "typeID": 1463164578,
      "name": "d25b42991ba94cbeb7234aad3e176351",
      "devName": "Thorn",
      "title": "756ec8d6d27848a5a193528f83dfe0c0",
      "description": "7838abade7f249eba30c6454cb00d3f4",
      "icon": "57f133d34e231d04d922dd5e5d234a71",
      "wideIcon": "aab126231d9ff344f9f88ab230a5e66f",
      "battlerites": [
        {
          "typeID": 366089384,
          "name": "41aa70b9f1e54cf18e8a4410fc4d71eb",
          "description": "1a4b3d18d9244e1e9584a4c0bfba368b",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "9",
              "MaxValue": "{None}"
            }
          ],
          "icon": "024cb70192c82c9468e69a41161f490a",
          "abilitySlot": "3"
        },
        {
          "typeID": 1251618107,
          "name": "b823a0d5a8e042f48e63fc3a76321604",
          "description": "5cb266970e004673af09a38ff270ede3",
          "tooltipData": [
            {
              "Name": "BonusHasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "15",
              "MaxValue": "{None}"
            }
          ],
          "icon": "297830658f259844cb3ce7d0711f15d8",
          "abilitySlot": "2"
        },
        {
          "typeID": 473718270,
          "name": "f1ba3cfde399484bab90f12b47df6d09",
          "description": "13f10e9c956a4d71b1eba8d1a8803323",
          "tooltipData": [
            {
              "Name": "DurationIncrease",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "297830658f259844cb3ce7d0711f15d8",
          "abilitySlot": "2"
        },
        {
          "typeID": 2049539565,
          "name": "a1d34127bb4f4f3985605c324a7e6559",
          "description": "ff3c17ef2aa94b6b84ad051d29466585",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "10",
              "MaxValue": "{None}"
            },
            {
              "Name": "ImpactDelay",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "297830658f259844cb3ce7d0711f15d8",
          "abilitySlot": "2"
        },
        {
          "typeID": 1145760312,
          "name": "d6932956635546de9603184bc34b0603",
          "description": "4829d8e14b01453e99a4589a49aede3f",
          "tooltipData": [
            {
              "Name": "WeakenFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "20",
              "MaxValue": "{None}"
            },
            {
              "Name": "WeakenDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "3bf2758e82cebed44856097532c5dd9b",
          "abilitySlot": "1"
        },
        {
          "typeID": 648166358,
          "name": "7256a6f3cdb2444a94f852aa910c502a",
          "description": "c27ead7b14d141698f6c1f4c6ec81310",
          "tooltipData": [
            {
              "Name": "SlowFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "20",
              "MaxValue": "{None}"
            }
          ],
          "icon": "3bf2758e82cebed44856097532c5dd9b",
          "abilitySlot": "1"
        },
        {
          "typeID": 2096305174,
          "name": "43a897038aed4e31bb058cd8f7da6cf9",
          "description": "f71587ddb3e84c6e8f278f27ba987e32",
          "tooltipData": [
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusHealing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "3bf2758e82cebed44856097532c5dd9b",
          "abilitySlot": "1"
        },
        {
          "typeID": 1884098191,
          "name": "44a14e229d6f4a4db26b6c65d9e7cf62",
          "description": "3b42c99e37574fb0bc4796f2d20f7c07",
          "tooltipData": [
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            },
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            }
          ],
          "icon": "0939b3a016f47504e99e00148489743b",
          "abilitySlot": "4"
        },
        {
          "typeID": 803048834,
          "name": "4889cab20d8a43fd920e76fb0a5e1341",
          "description": "c3fba813550942ccabc431e5b0a1fe91",
          "tooltipData": [
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "e6cee4151f85f62479addb2c5f459016",
          "abilitySlot": "5"
        },
        {
          "typeID": 1195945169,
          "name": "353ebb4b4d7e4fdb9256965a7a32d0b1",
          "description": "85e61cde5535445d86694d4f90cbc3cd",
          "tooltipData": [
            {
              "Name": "DamageReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2.2",
              "MaxValue": "{None}"
            },
            {
              "Name": "MaxStacks",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "d33ad2a139ec3194e9ba84e1d2d6e3f4",
          "abilitySlot": "0"
        },
        {
          "typeID": 1569020024,
          "name": "a48f1818f96a43ce8d3a0023f5faec28",
          "description": "babd451aa5d34a8cbb09db9cf2a2a58c",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "AdditiveValue",
              "UnitType": "Second",
              "Value": "1.25",
              "MaxValue": "-0.5"
            }
          ],
          "icon": "1ab62461fd3d7784f99630bc3350498c",
          "abilitySlot": "6"
        },
        {
          "typeID": 1906802537,
          "name": "d384b967d79c4b94943d00a8afa00036",
          "description": "d4896106bc7f420c99cae377db25b18e",
          "tooltipData": [
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            },
            {
              "Name": "LesserEntanglingRoots",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "2670d219b6e143c989f56a37377ab9dc",
              "MaxValue": "{None}"
            },
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            },
            {
              "Name": "EntangleDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.25",
              "MaxValue": "{None}"
            },
            {
              "Name": "ShieldAmount",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "20",
              "MaxValue": "{None}"
            }
          ],
          "icon": "0939b3a016f47504e99e00148489743b",
          "abilitySlot": "4"
        },
        {
          "typeID": 1931152114,
          "name": "f086f7079af34d5fa0b4b90fa441a229",
          "description": "cfa7b8fcc68c489880710bc0e98a213d",
          "tooltipData": [
            {
              "Name": "ShieldValue",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "14",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "3",
              "MaxValue": "{None}"
            }
          ],
          "icon": "297830658f259844cb3ce7d0711f15d8",
          "abilitySlot": "2"
        },
        {
          "typeID": 1967360634,
          "name": "7f8ec71b27574eb4a7d214601ed87523",
          "description": "51e47787fc0344359b7c6f73765a4ce5",
          "tooltipData": [
            {
              "Name": "SilenceDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "024cb70192c82c9468e69a41161f490a",
          "abilitySlot": "3"
        },
        {
          "typeID": 1775607993,
          "name": "ab78c6f5f78b493f9ebe5a8b28d29caa",
          "description": "9bf0bfef743b45b2b01d475974fd5947",
          "tooltipData": [
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            },
            {
              "Name": "RangeIncrease",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "20",
              "MaxValue": "{None}"
            }
          ],
          "icon": "d33ad2a139ec3194e9ba84e1d2d6e3f4",
          "abilitySlot": "0"
        }
      ],
      "ability1": {
        "typeID": 924650616,
        "name": "036349a9b4284ac38cc30ff3c50f6cd1",
        "description": "900f933b1869480b9582ce1cf33c04fa",
        "tooltipData": [
          {
            "Name": "DamageList",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "RangeValue",
            "UnitType": "Standard",
            "Value": "{ Id: 313 Gen: 1}",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "AdditiveValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "6",
            "MaxValue": "{None}"
          }
        ],
        "icon": "e7b20d2d14f0e98488d8162339e8ea35",
        "icon128": "d33ad2a139ec3194e9ba84e1d2d6e3f4"
      },
      "ability2": {
        "typeID": 503632860,
        "name": "123efe303b984cf58378f5336996da78",
        "description": "27c1355aee4a4d32b7038cc371aaf20c",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "Amount",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "2",
            "MaxValue": "{None}"
          },
          {
            "Name": "BarbSlowFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "BarbDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "4",
            "MaxValue": "{None}"
          },
          {
            "Name": "Barbs",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "276dcf1bec2f4e80b8d20fd2fd508931",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "ChargeCost",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "BarbHealing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "8",
            "MaxValue": "4"
          },
          {
            "Name": "BarbDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "4",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          },
          {
            "Name": "ChannelDuration",
            "LocalizedName": "171abb321fe24867a96d497e7771f113",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.7",
            "MaxValue": "{None}"
          }
        ],
        "icon": "0ad2ed0c3dfbd6149aed763c6fc1a7c2",
        "icon128": "3bf2758e82cebed44856097532c5dd9b"
      },
      "ability3": {
        "typeID": 1959850778,
        "name": "f56533119b51412cb49ffe207cd00bdc",
        "description": "6373c754b99a4f57abe987b115c8f337",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "14",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 3,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "7",
            "MaxValue": "{None}"
          },
          {
            "Name": "Stun",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "4c898668b22b487786e7382d634603e7",
            "MaxValue": "{None}"
          },
          {
            "Name": "StunDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.75",
            "MaxValue": "1.75"
          },
          {
            "Name": "HasteFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "100",
            "MaxValue": "{None}"
          },
          {
            "Name": "ImpactDelay",
            "LocalizedName": "c2f75a279186454aa0ad062ef601c9bf",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.5",
            "MaxValue": "{None}"
          }
        ],
        "icon": "5e3bd65b40d504a498a0a878457a91ba",
        "icon128": "297830658f259844cb3ce7d0711f15d8"
      },
      "ability4": {
        "typeID": 1104790984,
        "name": "cd4c08b426f843afbb29a704a3bbea72",
        "description": "b009f7bb44e54b47809ad1a796d46631",
        "tooltipData": [
          {
            "Name": "Delay",
            "LocalizedName": "c2f75a279186454aa0ad062ef601c9bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.9",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 999,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          }
        ],
        "icon": "3cb94990c7b2a1e419a3dd94a97a9058",
        "icon128": "024cb70192c82c9468e69a41161f490a"
      },
      "ability5": {
        "typeID": 571225273,
        "name": "2a64cd53345d4516aa6e33bc8fa7c8a4",
        "description": "7a326d253f5c4fcf9e4690ef2ca17f54",
        "tooltipData": [
          {
            "Name": "EnergyGain",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "8",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "16",
            "MaxValue": "{None}"
          },
          {
            "Name": "ShieldAmount",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "20",
            "MaxValue": "{None}"
          },
          {
            "Name": "EntangleDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "8",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Entangle",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "e3373146e2af4d6e9c8509fc2c44881d",
            "MaxValue": "{None}"
          }
        ],
        "icon": "fdf2d06db8967e94980b61e7c2c750b3",
        "icon128": "0939b3a016f47504e99e00148489743b"
      },
      "ability6": {
        "typeID": 735405928,
        "name": "d610435c0dbe4a298add2e29b0a5ed47",
        "description": "1fc9c47441f449eda41552e3a7c56d87",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "a1875cef6de04fb391bf2228dfe0e71b",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.6",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "10",
            "MaxValue": "{None}"
          },
          {
            "Name": "InternalCooldown",
            "LocalizedName": "4ef963ca5e32495c8272cc951256d6e2",
            "SortID": 3,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.3",
            "MaxValue": "{None}"
          },
          {
            "Name": "ShieldValue",
            "LocalizedName": "83036c5743b642abbf5ba0426e2e77aa",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "50",
            "MaxValue": "{None}"
          }
        ],
        "icon": "e4b07848a877b37428225984cc034808",
        "icon128": "e6cee4151f85f62479addb2c5f459016"
      },
      "ability7": {
        "typeID": 1086483653,
        "name": "8cfde3377ce24752ac985a659a395e64",
        "description": "fac5a8381d114f458389f5acc681bf77",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "MultiplativeValue",
            "UnitType": "Standard",
            "Value": "56",
            "MaxValue": "8"
          },
          {
            "Name": "Slow",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "b5b19aeaa91c4354a330bd761a1f0d86",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowPercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "40",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "AreaDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "3.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "ImpactDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "16",
            "MaxValue": "{None}"
          }
        ],
        "icon": "d08fb7b6c99f8254db82679b2a7c89ed",
        "icon128": "1ab62461fd3d7784f99630bc3350498c"
      }
    },
    {
      "typeID": 1422481252,
      "name": "f05ef57b8e994e5e9d43bbfcae9a09a6",
      "devName": "Vanguard",
      "title": "83ebfbd92d2c4195b83ce454e252e495",
      "description": "b256a94c8b804688a7b8eb57b17019a9",
      "icon": "0a89df4b6bcde3d469185186eab7138b",
      "wideIcon": "6154d6c0556261343844bf7caebb67a7",
      "battlerites": [
        {
          "typeID": 525547855,
          "name": "56197c56140e4ce3a769f0e62212868a",
          "description": "e655e3c293144fba95caec33e2b00b38",
          "tooltipData": [
            {
              "Name": "CooldownReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "e0a2c1fab3bd3d5468cbc7f4942b5448",
          "abilitySlot": "0"
        },
        {
          "typeID": 1988118460,
          "name": "04d080c459f74e2b91680f4945754f47",
          "description": "dc765931c1034b8c89c5e54026ee9853",
          "tooltipData": [
            {
              "Name": "Healing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusHealing",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            }
          ],
          "icon": "741da913acab25641862d0312d75a7a1",
          "abilitySlot": "1"
        },
        {
          "typeID": 1704813012,
          "name": "2ef2d84b91504c569d13b3148edac908",
          "description": "9720b459d7114c4c815ebde3864e16e4",
          "tooltipData": [
            {
              "Name": "Reduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "741da913acab25641862d0312d75a7a1",
          "abilitySlot": "1"
        },
        {
          "typeID": 864889084,
          "name": "a88b38fde8934997877ba3ff61b48deb",
          "description": "9e9447ba7ea54b6aa3c53aca0fba20e6",
          "tooltipData": [
            {
              "Name": "GradualSlowDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "1.2",
              "MaxValue": "{None}"
            },
            {
              "Name": "GradualSlow",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "e6ee239b70b64b0cbdd9525e06acda60",
              "MaxValue": "{None}"
            }
          ],
          "icon": "741da913acab25641862d0312d75a7a1",
          "abilitySlot": "1"
        },
        {
          "typeID": 646847542,
          "name": "6c324c68cee44c50aa505f2d70d6e89a",
          "description": "d523e7eb7f4149bfa4540c5f949a2a4e",
          "tooltipData": [
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "2",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDamagePerCharge",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "1",
              "MaxValue": "{None}"
            }
          ],
          "icon": "741da913acab25641862d0312d75a7a1",
          "abilitySlot": "1"
        },
        {
          "typeID": 1864097346,
          "name": "fea67ab4192249cda9e65533f0dca098",
          "description": "fa08fd9b47da407989d5891dd5c3d963",
          "tooltipData": [
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            }
          ],
          "icon": "16e7e84d6c786cf4abc695c9b1c29b31",
          "abilitySlot": "2"
        },
        {
          "typeID": 1132855849,
          "name": "f2c10499a04c453d9a5200363a2d48b4",
          "description": "699ba849b3d049f6854c62ce239105d7",
          "tooltipData": [
            {
              "Name": "DamageReduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "33",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2.5",
              "MaxValue": "{None}"
            }
          ],
          "icon": "16e7e84d6c786cf4abc695c9b1c29b31",
          "abilitySlot": "2"
        },
        {
          "typeID": 330477715,
          "name": "2286eab1340541b0be3178d87d4827c7",
          "description": "53eed0e06c98494b8179cddfd37d0b5d",
          "tooltipData": [
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "3",
              "MaxValue": "22"
            }
          ],
          "icon": "16e7e84d6c786cf4abc695c9b1c29b31",
          "abilitySlot": "2"
        },
        {
          "typeID": 1420218818,
          "name": "7c7de4823efb4d41b04a9f3623b56bd5",
          "description": "d12d3b65a67b480c9064021349deb102",
          "tooltipData": [
            {
              "Name": "Damage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4",
              "MaxValue": "{None}"
            },
            {
              "Name": "Factor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "{None}"
            },
            {
              "Name": "Weaken",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "43445ed05b4b429ab98fafd501b38516",
              "MaxValue": "{None}"
            },
            {
              "Name": "WeakenDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2",
              "MaxValue": "{None}"
            },
            {
              "Name": "WeakenPercent",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "50",
              "MaxValue": "{None}"
            }
          ],
          "icon": "1d33cdf1e3619d74b8b0e7eb9f19a531",
          "abilitySlot": "3"
        },
        {
          "typeID": 1031506765,
          "name": "3811ef0e54314e4ebb7c60fcbcb780b7",
          "description": "ed8c6744dde34b71bd17cb2ce2e24464",
          "tooltipData": [
            {
              "Name": "HasteFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "60",
              "MaxValue": "{None}"
            }
          ],
          "icon": "1d33cdf1e3619d74b8b0e7eb9f19a531",
          "abilitySlot": "3"
        },
        {
          "typeID": 2052646879,
          "name": "67aeebcc33194a9ba0cd1a3fcf3c4a60",
          "description": "e0f1220ce1a245ea97a7dddb75c4cc07",
          "tooltipData": [
            {
              "Name": "SlowDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "2.5",
              "MaxValue": "{None}"
            },
            {
              "Name": "Slow",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ReferenceValue",
              "UnitType": "Standard",
              "Value": "b5b19aeaa91c4354a330bd761a1f0d86",
              "MaxValue": "{None}"
            },
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            },
            {
              "Name": "SlowPercent",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "15",
              "MaxValue": "{None}"
            }
          ],
          "icon": "84ba51168b08df3489362e3a9be59704",
          "abilitySlot": "4"
        },
        {
          "typeID": 515896055,
          "name": "8c1d214f894c4be9b5ecefdbcc31f54b",
          "description": "690c91645c9f4e4b9ba1b0c3c782d47f",
          "tooltipData": [
            {
              "Name": "BonusDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "8",
              "MaxValue": "{None}"
            }
          ],
          "icon": "84ba51168b08df3489362e3a9be59704",
          "abilitySlot": "4"
        },
        {
          "typeID": 1945460476,
          "name": "5318640440d64316889e36bcaa3b803a",
          "description": "9b0725e0dea9453abdd45f5120ccd44f",
          "tooltipData": [
            {
              "Name": "Range",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "4.8",
              "MaxValue": "{None}"
            },
            {
              "Name": "NewRange",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "6",
              "MaxValue": "{None}"
            },
            {
              "Name": "Reduction",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "SubtractiveValue",
              "UnitType": "Second",
              "Value": "1",
              "MaxValue": "7"
            },
            {
              "Name": "NewDamage",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Standard",
              "Value": "12",
              "MaxValue": "{None}"
            }
          ],
          "icon": "84ba51168b08df3489362e3a9be59704",
          "abilitySlot": "4"
        },
        {
          "typeID": 702946126,
          "name": "539e726a0f724dbd9cf83540918f104d",
          "description": "0b5d25e3897845549383283acfc4867a",
          "tooltipData": [
            {
              "Name": "Factor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "15",
              "MaxValue": "{None}"
            },
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "4",
              "MaxValue": "{None}"
            }
          ],
          "icon": "b778ec70cf3198442a522a40aefd88df",
          "abilitySlot": "5"
        },
        {
          "typeID": 1649637372,
          "name": "84ba2eea2521414aba13d8ea42c32ba1",
          "description": "5f446e51f388434083f498ccb7e2a31d",
          "tooltipData": [
            {
              "Name": "Duration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "SubtractiveValue",
              "UnitType": "Second",
              "Value": "0.75",
              "MaxValue": "0.25"
            },
            {
              "Name": "OldDuration",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Second",
              "Value": "0.25",
              "MaxValue": "{None}"
            }
          ],
          "icon": "1c5109f70b75da840a551747febdf716",
          "abilitySlot": "6"
        },
        {
          "typeID": 1369609980,
          "name": "f65c39fbf51e4f9ca207fd7d42fb339f",
          "description": "576bbc887f1e4e4789a1ba6b7a7828ed",
          "tooltipData": [
            {
              "Name": "EnergyBonus",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "Percent",
              "Value": "25",
              "MaxValue": "{None}"
            },
            {
              "Name": "EnergyFactor",
              "LocalizedName": "00000000000000000000000000000000",
              "SortID": 0,
              "ValueType": "ConstantValue",
              "UnitType": "ModifierPercent",
              "Value": "10",
              "MaxValue": "{None}"
            }
          ],
          "icon": "61e058b8f4b79f4419ec1496f223ee36",
          "abilitySlot": "999"
        }
      ],
      "ability1": {
        "typeID": 713928362,
        "name": "5320fad5c75448df9c440695b7f537b4",
        "description": "67bd710a54d04b7f879d89afa14a2156",
        "tooltipData": [
          {
            "Name": "Damage1",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "9",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage2",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "9",
            "MaxValue": "{None}"
          },
          {
            "Name": "Damage3",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "MaxRage",
            "LocalizedName": "24d5ab8752df490684916d178557755b",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "3",
            "MaxValue": "{None}"
          },
          {
            "Name": "CooldownReduction",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.6",
            "MaxValue": "{None}"
          }
        ],
        "icon": "35f1a479470e6bb4c8cedd8eedede76f",
        "icon128": "e0a2c1fab3bd3d5468cbc7f4942b5448"
      },
      "ability2": {
        "typeID": 375275413,
        "name": "bd5c27d4bac24a80945ee73ba931b7c1",
        "description": "46bfe0758f7e460e93cb964fd4d60598",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "16",
            "MaxValue": "{None}"
          },
          {
            "Name": "BonusDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "4",
            "MaxValue": "{None}"
          },
          {
            "Name": "GradualSlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "0",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "6",
            "MaxValue": "{None}"
          }
        ],
        "icon": "641fda2f57c47f04fa3c41ad8bce6c72",
        "icon128": "741da913acab25641862d0312d75a7a1"
      },
      "ability3": {
        "typeID": 1353508382,
        "name": "a11050c39c31460abc19d750f70cda8e",
        "description": "b6392eb0c6e443c3a333d1390d8a45fc",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "22",
            "MaxValue": "22"
          },
          {
            "Name": "Duration",
            "LocalizedName": "56ffe227681a4a149b5c946aa00d3d30",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "1"
          },
          {
            "Name": "Snare",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1",
            "MaxValue": "{None}"
          },
          {
            "Name": "SlowPercent",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "30",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 2,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "5",
            "MaxValue": "{None}"
          }
        ],
        "icon": "6fb6a21f109000d46b1c8d548144cb31",
        "icon128": "16e7e84d6c786cf4abc695c9b1c29b31"
      },
      "ability4": {
        "typeID": 1445018825,
        "name": "cdabf4710a004fbda52ffd7bf0e3d775",
        "description": "cdc4a59522f240239cba042883608d8f",
        "tooltipData": [
          {
            "Name": "Duration",
            "LocalizedName": "08ba106f0989406899d27e6e919e70bf",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "StunDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "1.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "Stun",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "HasteFactor",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "ModifierPercent",
            "Value": "{None}",
            "MaxValue": "{None}"
          }
        ],
        "icon": "dd3af5b1255adef4f85311b8eecc5b78",
        "icon128": "1d33cdf1e3619d74b8b0e7eb9f19a531"
      },
      "ability5": {
        "typeID": 1546404495,
        "name": "0938bd031bff41e0867384d7716e72f9",
        "description": "b0db09a213774b5cb4c585e7091df88e",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "12",
            "MaxValue": "{None}"
          },
          {
            "Name": "Energy",
            "LocalizedName": "d1483421b93940a38871e8c48f0f7ea3",
            "SortID": 1,
            "ValueType": "ConstantValue",
            "UnitType": "Percent",
            "Value": "6",
            "MaxValue": "{None}"
          },
          {
            "Name": "Stun",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "4c898668b22b487786e7382d634603e7",
            "MaxValue": "{None}"
          },
          {
            "Name": "StunDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.45",
            "MaxValue": "{None}"
          }
        ],
        "icon": "1cebf272b37340e42a539b2dc82d6a94",
        "icon128": "84ba51168b08df3489362e3a9be59704"
      },
      "ability6": {
        "typeID": 1283963825,
        "name": "633ae0841cf4460ba56863a45aec1ba9",
        "description": "598aef8cbc1a4e169168a0ec1138a3a7",
        "tooltipData": [
          {
            "Name": "Stacks",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "Healing",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "AegisAmount",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "40",
            "MaxValue": "{None}"
          },
          {
            "Name": "Duration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "2.5",
            "MaxValue": "{None}"
          },
          {
            "Name": "ShieldValue",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "40",
            "MaxValue": "{None}"
          }
        ],
        "icon": "60babe8c62d237542b791b7d2e4706b7",
        "icon128": "b778ec70cf3198442a522a40aefd88df"
      },
      "ability7": {
        "typeID": 16920816,
        "name": "ca64717decf44b34aea1c1c454321e5e",
        "description": "6ce2c26b8f4349b49ae6079a5ee3f228",
        "tooltipData": [
          {
            "Name": "Damage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "35",
            "MaxValue": "{None}"
          },
          {
            "Name": "AreaDamage",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Standard",
            "Value": "28",
            "MaxValue": "{None}"
          },
          {
            "Name": "Stun",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ReferenceValue",
            "UnitType": "Standard",
            "Value": "{None}",
            "MaxValue": "{None}"
          },
          {
            "Name": "StunDuration",
            "LocalizedName": "00000000000000000000000000000000",
            "SortID": 0,
            "ValueType": "ConstantValue",
            "UnitType": "Second",
            "Value": "0.25",
            "MaxValue": "{None}"
          }
        ],
        "icon": "4b53ffe5f42d8ce49ad4856681507308",
        "icon128": "1c5109f70b75da840a551747febdf716"
      }
    }
  ]
);

function _championMap(champion) {
  _.set(champion, 'abilities', _.filter(champion, (item, key) => key.includes('ability')));
  return _.pick(champion, ['typeID', 'name', 'devName', 'title', 'description', 'battlerites', 'abilities']);
}

exports.getByLocalizedName = function (localizedName) {
  return _gameplay.find({ name: localizedName });
}

exports.getByDevName = function (devName) {
  return _gameplay.find({ devName });
}

exports.getByTypeID = function (typeID) {
  return _championMap(_gameplay.find({ typeID }));
}
