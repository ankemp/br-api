const _ = require('lodash');

const _stackable = _(
  [
    {
      "LocalizedName": "7e960b795d3a4917829e590246cfec6f",
      "DevName": "Alchemist_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150001
    },
    {
      "LocalizedName": "45cf3a34b514456b9f2ebf27800a9f1f",
      "DevName": "Alchemist_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150002
    },
    {
      "LocalizedName": "5160c9a0c8b1436385e21741a3f9451f",
      "DevName": "Alchemist_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150003
    },
    {
      "LocalizedName": "3b8904afd5c0461d81f8ee14741e8fcd",
      "DevName": "Alchemist_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150004
    },
    {
      "LocalizedName": "4f22ac6bdb1346b6ba57af3b5b9497ed",
      "DevName": "Alchemist_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150005
    },
    {
      "LocalizedName": "d5eb77d48040484ea32396ca13a69c37",
      "DevName": "Alchemist_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150006
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Alchemist_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150007
    },
    {
      "LocalizedName": "83a5b580c9334d34b8d5f9f24548f6e7",
      "DevName": "Alchemist_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150008
    },
    {
      "LocalizedName": "9de07da58d6249c19dbb2da206cf4da7",
      "DevName": "Alchemist_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150009
    },
    {
      "LocalizedName": "b744876c9bfc4189ba3ed7cf383860a7",
      "DevName": "Astronomer_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150010
    },
    {
      "LocalizedName": "41f972d3c1c94990a46c8e41a711edd9",
      "DevName": "Astronomer_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150011
    },
    {
      "LocalizedName": "de3100cbf8504f8cb2edb62971958f69",
      "DevName": "Astronomer_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150012
    },
    {
      "LocalizedName": "ebaab7dce45b4efaaea830779b25cabc",
      "DevName": "Astronomer_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150013
    },
    {
      "LocalizedName": "6b0bf1ed6d9845688868e27de96a38f0",
      "DevName": "Astronomer_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150014
    },
    {
      "LocalizedName": "3bb1a00e155f497594ed323d05b9f614",
      "DevName": "Astronomer_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150015
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Astronomer_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150016
    },
    {
      "LocalizedName": "487c1732b38548439d79ad9de9061319",
      "DevName": "Astronomer_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150017
    },
    {
      "LocalizedName": "8564ca70f6fe4530bc4d4d5b430c6e0f",
      "DevName": "Astronomer_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150018
    },
    {
      "LocalizedName": "690495f751e44baebae14db30b674233",
      "DevName": "Engineer_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150019
    },
    {
      "LocalizedName": "8869ad85554643b5b9a7b55ca08ee69c",
      "DevName": "Engineer_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150020
    },
    {
      "LocalizedName": "8ff80513309d4a29886d5c7ec96fe5a6",
      "DevName": "Engineer_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150021
    },
    {
      "LocalizedName": "b49a3ecad6774f7f9dabf590d71dcdad",
      "DevName": "Engineer_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150022
    },
    {
      "LocalizedName": "621ce2cf07a74b8d9cc20d78ba955c21",
      "DevName": "Engineer_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150023
    },
    {
      "LocalizedName": "c1d185cad5bb40ada3f71306537941f0",
      "DevName": "Engineer_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150024
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Engineer_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150025
    },
    {
      "LocalizedName": "5ab6714427a247fd94da2c5d2cf35e88",
      "DevName": "Engineer_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150026
    },
    {
      "LocalizedName": "8e8bf076f3634f98ac914e89196bf73c",
      "DevName": "Engineer_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150027
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Glutton_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150028
    },
    {
      "LocalizedName": "acfd2bdb9a304ba89073e2046ff41121",
      "DevName": "Glutton_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150029
    },
    {
      "LocalizedName": "48dbc90ed2e645c9ae67707999f1c329",
      "DevName": "Glutton_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150030
    },
    {
      "LocalizedName": "5f2bfa27a8924eb3a8a6cad89f3a553c",
      "DevName": "Gunner_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150031
    },
    {
      "LocalizedName": "c988e254a1284ee2a4d1fe88d198936c",
      "DevName": "Gunner_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150032
    },
    {
      "LocalizedName": "aefc4c90279743039c2257efa5a841aa",
      "DevName": "Gunner_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150033
    },
    {
      "LocalizedName": "f7e58c2b022348aa8bbb20eebe45fdd6",
      "DevName": "Gunner_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150034
    },
    {
      "LocalizedName": "aa82a0c2c1e142c2a506c34cce33301c",
      "DevName": "Gunner_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150035
    },
    {
      "LocalizedName": "32e2726e7d1645c691b2ee3832954e60",
      "DevName": "Gunner_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150036
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Gunner_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150037
    },
    {
      "LocalizedName": "e1214eb22f6f4447be9935a8fa98fdc0",
      "DevName": "Gunner_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150038
    },
    {
      "LocalizedName": "98e64c4b3e594cbcb265abfff7c5e40e",
      "DevName": "Gunner_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150039
    },
    {
      "LocalizedName": "c6f929c95c21405f9d09494425b8a355",
      "DevName": "Harbinger_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150040
    },
    {
      "LocalizedName": "335e8bfd2f13415d846d7da5ddd68186",
      "DevName": "Harbinger_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150041
    },
    {
      "LocalizedName": "9742cb5cbb7541f1a6404e8836746e1c",
      "DevName": "Harbinger_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150042
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Harbinger_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150043
    },
    {
      "LocalizedName": "a6d619037f0c4363bd8f0f2b187aefec",
      "DevName": "Harbinger_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150044
    },
    {
      "LocalizedName": "270296b3652e4a1eb9b7233a76cef383",
      "DevName": "Harbinger_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150045
    },
    {
      "LocalizedName": "c9859ef346df475cb921cd75c516562e",
      "DevName": "Herald_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150046
    },
    {
      "LocalizedName": "fa0192e71fc6485b8ac34d05f36832f2",
      "DevName": "Herald_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150047
    },
    {
      "LocalizedName": "21ce898f9d3f4a1cb3687ad39ceef396",
      "DevName": "Herald_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150048
    },
    {
      "LocalizedName": "66952b189a3548da866d1db94ed1814a",
      "DevName": "Herald_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150049
    },
    {
      "LocalizedName": "50543a07b7fe4b1bbae94cce65cd8299",
      "DevName": "Herald_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150050
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Herald_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150051
    },
    {
      "LocalizedName": "e0a12f99cf4e4e20b84c0c42bd7795ad",
      "DevName": "Herald_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150052
    },
    {
      "LocalizedName": "2c9e8f40a80d493e843d95cc21464ed8",
      "DevName": "Herald_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150053
    },
    {
      "LocalizedName": "6008c7ff46b94718a193d57043151c49",
      "DevName": "Igniter_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150054
    },
    {
      "LocalizedName": "f68c2d9d568d42eda0e67d49eb5a49b6",
      "DevName": "Igniter_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150055
    },
    {
      "LocalizedName": "9f80ba5bf41649188a3ade5b97d3f8b2",
      "DevName": "Igniter_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150056
    },
    {
      "LocalizedName": "4f3a446bf15e417bb85be2060ff22939",
      "DevName": "Igniter_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150057
    },
    {
      "LocalizedName": "54f5e2e5e52d4cfbbddea56dafd52810",
      "DevName": "Igniter_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150058
    },
    {
      "LocalizedName": "4de5261f69c941f5a7091114b808571e",
      "DevName": "Igniter_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150059
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Igniter_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150060
    },
    {
      "LocalizedName": "80d06288c9f14cfe9652f24d1ddf4332",
      "DevName": "Igniter_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150061
    },
    {
      "LocalizedName": "e5d0f1fd9d524d0c870768f3731a829c",
      "DevName": "Igniter_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150062
    },
    {
      "LocalizedName": "1b169516001140a7bb0e13139f847893",
      "DevName": "Inhibitor_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150063
    },
    {
      "LocalizedName": "06aaeb7017794598a1d2af98c09067f5",
      "DevName": "Inhibitor_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150064
    },
    {
      "LocalizedName": "80a8b5832bd349b493ac840a388a7149",
      "DevName": "Inhibitor_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150065
    },
    {
      "LocalizedName": "320e8777b35d4ce682dba8debf06426f",
      "DevName": "Inhibitor_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150066
    },
    {
      "LocalizedName": "8d93a3de19854ac880568fb0a4e46f4a",
      "DevName": "Inhibitor_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150067
    },
    {
      "LocalizedName": "715732139b614cb9a377330200fb4af4",
      "DevName": "Inhibitor_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150068
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Inhibitor_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150069
    },
    {
      "LocalizedName": "437b11967b844089bb206cb65860c65f",
      "DevName": "Inhibitor_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150070
    },
    {
      "LocalizedName": "2c687e5b34d64217b3266ded9bee52a5",
      "DevName": "Inhibitor_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150071
    },
    {
      "LocalizedName": "fe7bf8f59af64c8d901e08665df0c412",
      "DevName": "Inquisitor_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150072
    },
    {
      "LocalizedName": "f9f9a98d09e54c2e8028c40aeb08d6ea",
      "DevName": "Inquisitor_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150073
    },
    {
      "LocalizedName": "3d39d98593b74526b9e852ef10cf25ee",
      "DevName": "Inquisitor_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150074
    },
    {
      "LocalizedName": "f99de7d545714a979630b50a5fc967a9",
      "DevName": "Inquisitor_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150075
    },
    {
      "LocalizedName": "45ec0632e6324272acebf62201433727",
      "DevName": "Inquisitor_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150076
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Inquisitor_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150078
    },
    {
      "LocalizedName": "e4c7224d27a2478aaebe5d439def27bf",
      "DevName": "Inquisitor_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150079
    },
    {
      "LocalizedName": "ef6b42655a3f4e5da4110d08a1cd8228",
      "DevName": "Inquisitor_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150080
    },
    {
      "LocalizedName": "08ffd3f0218247dfb0c61ba4971b9d43",
      "DevName": "Nomad_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150081
    },
    {
      "LocalizedName": "ac4b84d481ec4c1298dd374454180e28",
      "DevName": "Nomad_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150082
    },
    {
      "LocalizedName": "26b038603eb443258d4077c223f5fc0b",
      "DevName": "Nomad_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150083
    },
    {
      "LocalizedName": "11b4c2749ca845e2bc15646cf4d44c90",
      "DevName": "Nomad_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150084
    },
    {
      "LocalizedName": "de4f2c1fec22453db1d081bb65694b8d",
      "DevName": "Nomad_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150085
    },
    {
      "LocalizedName": "7f5e8de5b5654ae38ad5b2648c914719",
      "DevName": "Nomad_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150086
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Nomad_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150087
    },
    {
      "LocalizedName": "b996412b14134915b34d51423bd8b88e",
      "DevName": "Nomad_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150088
    },
    {
      "LocalizedName": "a8ec64debbc94350a86e79ffd7f54456",
      "DevName": "Nomad_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150089
    },
    {
      "LocalizedName": "626569a72bb7439587a8e0f41105c8c8",
      "DevName": "Psychopomp_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150090
    },
    {
      "LocalizedName": "ce54f86c40194d97b5255a7c466cb64b",
      "DevName": "Psychopomp_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150091
    },
    {
      "LocalizedName": "3ae3e4f233494553971cb6595e074d10",
      "DevName": "Psychopomp_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150092
    },
    {
      "LocalizedName": "dc8ae50bb3214f74aa41dd6f8d0a2907",
      "DevName": "Psychopomp_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150093
    },
    {
      "LocalizedName": "ab956f625f304665a4a43746bf975c55",
      "DevName": "Psychopomp_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150094
    },
    {
      "LocalizedName": "95f8d49065c3497d805f962760384aed",
      "DevName": "Psychopomp_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150095
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Psychopomp_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150096
    },
    {
      "LocalizedName": "599cb666be934cfa8b0f6e2958f7649e",
      "DevName": "Psychopomp_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150097
    },
    {
      "LocalizedName": "f721e8b3f0ea456da9fec660f1be7aca",
      "DevName": "Psychopomp_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150098
    },
    {
      "LocalizedName": "856226ec382d40f6899fc74b4d77f611",
      "DevName": "Ranid_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150099
    },
    {
      "LocalizedName": "abd954ec219a4720beb3762837de1f57",
      "DevName": "Ranid_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150100
    },
    {
      "LocalizedName": "c34c8e4905ca42c19b0733fd332c011d",
      "DevName": "Ranid_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150101
    },
    {
      "LocalizedName": "50e22c8765d44eac9d4822cd1ac0822f",
      "DevName": "Ranid_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150102
    },
    {
      "LocalizedName": "92d28973cef14d988055f58cabc7f395",
      "DevName": "Ranid_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150103
    },
    {
      "LocalizedName": "69904d53a242401da2ff156cdb962139",
      "DevName": "Ranid_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150104
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Ranid_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150105
    },
    {
      "LocalizedName": "57b582cad5f74f028bee5af4e3760581",
      "DevName": "Ranid_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150106
    },
    {
      "LocalizedName": "3f12838836554446a7fb92bbcbadd163",
      "DevName": "Ranid_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150107
    },
    {
      "LocalizedName": "a8c4271b2a754ba88192ace9069e150a",
      "DevName": "Ravener_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150108
    },
    {
      "LocalizedName": "f356a4e7a57a4265b1c7f10cfedba308",
      "DevName": "Ravener_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150109
    },
    {
      "LocalizedName": "a7e2a073a8b04563873cfe69c551f46a",
      "DevName": "Ravener_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150110
    },
    {
      "LocalizedName": "b52d47f43fed4982b067e8a5eefe6d55",
      "DevName": "Ravener_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150111
    },
    {
      "LocalizedName": "35cc56609c014f419a8a8cb5ddff3209",
      "DevName": "Ravener_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150112
    },
    {
      "LocalizedName": "e60a8616784e429180f20937e8feb50d",
      "DevName": "Ravener_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150113
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Ravener_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150114
    },
    {
      "LocalizedName": "5e862dea0a7040a3a4bb0a878cce22ee",
      "DevName": "Ravener_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150115
    },
    {
      "LocalizedName": "fffee9eadf56404b9ac4a4721c96f83b",
      "DevName": "Ravener_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150116
    },
    {
      "LocalizedName": "d49e0fdbc2b64575bee17686f6b16d3d",
      "DevName": "Seeker_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150117
    },
    {
      "LocalizedName": "9780524b564c42408227dc5543470dc9",
      "DevName": "Seeker_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150118
    },
    {
      "LocalizedName": "d9732cd676a84aa391853a725c07441c",
      "DevName": "Seeker_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150119
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Seeker_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150120
    },
    {
      "LocalizedName": "5dc356e8135d4ac19b3fa799f2f8ba5a",
      "DevName": "Seeker_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150121
    },
    {
      "LocalizedName": "8d77940e674e4cac87a286974e233c80",
      "DevName": "Seeker_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150122
    },
    {
      "LocalizedName": "d9eaa98b8fbe49cc9aeb87505343e472",
      "DevName": "Spearmaster_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150123
    },
    {
      "LocalizedName": "b2d94e137c2e4070a3f0be3bd8805c24",
      "DevName": "Spearmaster_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150124
    },
    {
      "LocalizedName": "83ed475735854a4a8e68dd35413f6725",
      "DevName": "Spearmaster_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150125
    },
    {
      "LocalizedName": "de5036a5aef1432eba2ccb0272e13aa2",
      "DevName": "Spearmaster_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150126
    },
    {
      "LocalizedName": "5c37a1c788b44aa5b474444a3a17c208",
      "DevName": "Spearmaster_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150127
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Spearmaster_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150128
    },
    {
      "LocalizedName": "fdf2664349a34fa5a991c65221574b59",
      "DevName": "Spearmaster_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150129
    },
    {
      "LocalizedName": "3662c55477fa49628ebd1a53f6ceb2e8",
      "DevName": "Spearmaster_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150130
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Stormcaller_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150131
    },
    {
      "LocalizedName": "6958aa8b905c4deda0561264af71819f",
      "DevName": "Stormcaller_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150132
    },
    {
      "LocalizedName": "125e365008be4604a4abb39c930db367",
      "DevName": "Stormcaller_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150133
    },
    {
      "LocalizedName": "0e1f18f288224e919b803d7289a00057",
      "DevName": "Vanguard_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150134
    },
    {
      "LocalizedName": "61c2114cdd4a4eecb85eca3144010043",
      "DevName": "Vanguard_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150135
    },
    {
      "LocalizedName": "3dd141195d404229a27a7f60a07c838c",
      "DevName": "Vanguard_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150136
    },
    {
      "LocalizedName": "69bed74ea9874717a08ead5095036559",
      "DevName": "Vanguard_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150137
    },
    {
      "LocalizedName": "4e2f9198162f46d7bf7aba76cf618abc",
      "DevName": "Vanguard_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150138
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Vanguard_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150140
    },
    {
      "LocalizedName": "1938ebf6073e49e881057f7704af27fb",
      "DevName": "Vanguard_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150141
    },
    {
      "LocalizedName": "fb21caeff4f24b03bcb9a5f6915cb2e4",
      "DevName": "Vanguard_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150142
    },
    {
      "LocalizedName": "06b3f83f6e1040fcb25b1640120b1537",
      "DevName": "Vanguard_Standard_Weapon04",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150143
    },
    {
      "LocalizedName": "6634925eba79428da962b5bb857ba10e",
      "DevName": "Vanguard_Standard_Weapon05",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150144
    },
    {
      "LocalizedName": "bdc10fde0f0243f19f02e69bfd4ac22d",
      "DevName": "Spearmaster_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150149
    },
    {
      "LocalizedName": "02a16023ad2547bdb8a25266a44e7ceb",
      "DevName": "Spearmaster_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150150
    },
    {
      "LocalizedName": "cf7204a72d5a49c6b017c93eb9894b99",
      "DevName": "Spearmaster_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150151
    },
    {
      "LocalizedName": "f277d4a0ee2c489380bb90aa27933b8c",
      "DevName": "Glutton_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150152
    },
    {
      "LocalizedName": "24a1b7cfc7994ff39494821f09446d0b",
      "DevName": "Glutton_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150153
    },
    {
      "LocalizedName": "7af99a26e27540d996a91f9e4c6eac63",
      "DevName": "Glutton_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150154
    },
    {
      "LocalizedName": "63a6305019404402bb85ef88ec332f3d",
      "DevName": "Glutton_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150155
    },
    {
      "LocalizedName": "191948f90ec54e6bb1b26d6e556ca99d",
      "DevName": "Glutton_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150156
    },
    {
      "LocalizedName": "683123e3e6ab4371a3511198170061fd",
      "DevName": "Glutton_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150157
    },
    {
      "LocalizedName": "3e8ec3f766a347f398fa906ee61c266d",
      "DevName": "Glutton_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150158
    },
    {
      "LocalizedName": "5688fef02a76410eb211937f582be5bb",
      "DevName": "Glutton_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150159
    },
    {
      "LocalizedName": "168235992f11490f8d112745770fea93",
      "DevName": "Herald_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150160
    },
    {
      "LocalizedName": "064727d6e3aa41b8b0db435b9972f2f5",
      "DevName": "Herald_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150161
    },
    {
      "LocalizedName": "af3474d0ba0b4748b6a1cbebe88b4554",
      "DevName": "Herald_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150162
    },
    {
      "LocalizedName": "9b5912dc34b6414ab165a51996ce0450",
      "DevName": "Inquisitor_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150163
    },
    {
      "LocalizedName": "d0e07b3b08774daa88051252797b13f1",
      "DevName": "Inquisitor_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150164
    },
    {
      "LocalizedName": "2b036e6eff90434296c820809c345977",
      "DevName": "Inquisitor_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150165
    },
    {
      "LocalizedName": "83bc3c4b4bd840a2b5d70ac4f37055a1",
      "DevName": "Vanguard_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150166
    },
    {
      "LocalizedName": "cb3eedd2fbe544b6b8cd85903cb05163",
      "DevName": "Vanguard_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150167
    },
    {
      "LocalizedName": "c49fb9d633ca457b8a9bb84864f45914",
      "DevName": "Vanguard_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150168
    },
    {
      "LocalizedName": "ce3936df007045f3a9d8b12d24ba5e5a",
      "DevName": "Seeker_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150169
    },
    {
      "LocalizedName": "75f13dbab58e4cef93f22aa599516a8f",
      "DevName": "Seeker_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150170
    },
    {
      "LocalizedName": "78f11ed6a98c4c6f8c274d5a196dffd1",
      "DevName": "Seeker_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150171
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "BloodPriest_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150172
    },
    {
      "LocalizedName": "f809cce7403d44c8a380a38606271e64",
      "DevName": "Harbinger_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150173
    },
    {
      "LocalizedName": "a58a3bc882874da7a91ac7bffc384e93",
      "DevName": "Harbinger_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150174
    },
    {
      "LocalizedName": "f2ecdc793d79491db136ce2ea81f2927",
      "DevName": "Harbinger_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150175
    },
    {
      "LocalizedName": "721355f1890c4b339f1ed47855941ff5",
      "DevName": "Seeker_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150176
    },
    {
      "LocalizedName": "3a05b9c70157477c936effcc6e9630fa",
      "DevName": "Seeker_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150177
    },
    {
      "LocalizedName": "8f376b0cc9f9485b8ea521b5fbe534b3",
      "DevName": "Ranid_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150178
    },
    {
      "LocalizedName": "8db7e0cd84fc4002a830b967f8d726ec",
      "DevName": "Ranid_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150179
    },
    {
      "LocalizedName": "6e517664f43a49b1849cab0264fee345",
      "DevName": "Igniter_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150180
    },
    {
      "LocalizedName": "fab26f208fd64d41a1ce22fa9880c544",
      "DevName": "Igniter_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150181
    },
    {
      "LocalizedName": "ba73eb68512346b5813f34f52a8a08c8",
      "DevName": "Gunner_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150182
    },
    {
      "LocalizedName": "b6752392fa38420381033bb374c12440",
      "DevName": "Gunner_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150183
    },
    {
      "LocalizedName": "e6698fa98b8040faa13d46b461c81ba1",
      "DevName": "Harbinger_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150184
    },
    {
      "LocalizedName": "384e432d82f947c09f2e10f7fa7ddae4",
      "DevName": "Harbinger_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150185
    },
    {
      "LocalizedName": "7f2b9086bf9b47239aa819da742d6e65",
      "DevName": "Engineer_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150186
    },
    {
      "LocalizedName": "4355a9fc2d3a420d877dd3883919dd7e",
      "DevName": "Engineer_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150187
    },
    {
      "LocalizedName": "6dd5ac7d23094c1b9c4e66238b0b2ee9",
      "DevName": "Alchemist_Halloween_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150188
    },
    {
      "LocalizedName": "5ee3a60540614aa7b01a59e065a9196e",
      "DevName": "Astronomer_Halloween_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150189
    },
    {
      "LocalizedName": "3f406018eccc4141a7fdbd06bfb5ac36",
      "DevName": "Engineer_Halloween_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150190
    },
    {
      "LocalizedName": "f5db979553084f7692816b18443915e7",
      "DevName": "Glutton_Halloween_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150191
    },
    {
      "LocalizedName": "621f88bd7c364ea88fa70b89bd13a64a",
      "DevName": "Gunner_Halloween_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150192
    },
    {
      "LocalizedName": "10ab5750da2b40f6b1466feaa2921bb0",
      "DevName": "Harbinger_Halloween_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150193
    },
    {
      "LocalizedName": "e890e8094ebc4d7789fb5203840d9fd3",
      "DevName": "Herald_Halloween_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150194
    },
    {
      "LocalizedName": "60583753b8d4456082585a8d77aac04a",
      "DevName": "Igniter_Halloween_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150195
    },
    {
      "LocalizedName": "acfa2e8f3c0e406096d898c2a851b8eb",
      "DevName": "Inhibitor_Halloween_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150196
    },
    {
      "LocalizedName": "0a6f8eb8e78d4574ae0d69374db8f725",
      "DevName": "Inquisitor_Halloween_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150197
    },
    {
      "LocalizedName": "b2edd02fac464ca6b8bceeb1915ae36f",
      "DevName": "Nomad_Halloween_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150198
    },
    {
      "LocalizedName": "9a74fe3640ac4facafaecdd793802dc2",
      "DevName": "Psychopomp_Halloween_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150199
    },
    {
      "LocalizedName": "618fbcd6f0b74e0ea5358d3060a0fcb2",
      "DevName": "Ranid_Halloween_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150200
    },
    {
      "LocalizedName": "4c7687a3893142efa915f4c7d7741c0b",
      "DevName": "Ravener_Halloween_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150201
    },
    {
      "LocalizedName": "b08e38eee50541279dbb5e4a2769b0a8",
      "DevName": "Seeker_Halloween_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150202
    },
    {
      "LocalizedName": "16e24b270664423c88b293615243e269",
      "DevName": "Spearmaster_Halloween_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150203
    },
    {
      "LocalizedName": "5c40d8f20fa74aaa890932d47b50554c",
      "DevName": "Vanguard_Halloween_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150204
    },
    {
      "LocalizedName": "a230d7ff5a2840228cdc5087a1dbf4ca",
      "DevName": "Psychopomp_Set03_Toki01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150205
    },
    {
      "LocalizedName": "3566767a913344a28fedf696a6b73ab7",
      "DevName": "Psychopomp_Set03_Toki02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150206
    },
    {
      "LocalizedName": "e905df779a6f4026b65c052ae43b9ff2",
      "DevName": "Ravener_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150207
    },
    {
      "LocalizedName": "319b709a0076451a89112c8a25679f91",
      "DevName": "Ravener_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150208
    },
    {
      "LocalizedName": "b7ee222899914926a184d86956a362d5",
      "DevName": "Alchemist_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150209
    },
    {
      "LocalizedName": "362015f7b3a84dccbde71da4d09cd878",
      "DevName": "Alchemist_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150210
    },
    {
      "LocalizedName": "2b7946f905f6471494783c8b1a13e938",
      "DevName": "Nomad_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150211
    },
    {
      "LocalizedName": "06b0116b8f924b6da0449eaa22188e1f",
      "DevName": "Nomad_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150212
    },
    {
      "LocalizedName": "8789d87ebb294ee3814b0ef4660da304",
      "DevName": "Inhibitor_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150213
    },
    {
      "LocalizedName": "9a32b294f964473d8b783f943fc47bfd",
      "DevName": "Astronomer_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150214
    },
    {
      "LocalizedName": "e98e575235c24972928ac50724583264",
      "DevName": "Astronomer_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150215
    },
    {
      "LocalizedName": "478ffb4583114c928df4147d4d361cec",
      "DevName": "Inhibitor_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150216
    },
    {
      "LocalizedName": "9ff955d607ad469b8c4872d6fe52f591",
      "DevName": "Harbinger_Weapon_SpecialReward",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150217
    },
    {
      "LocalizedName": "6b3cd2eeb4684d029d67234bfa141e75",
      "DevName": "Stormcaller_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150218
    },
    {
      "LocalizedName": "0e3ae577a5a441cba28241f79a0638a2",
      "DevName": "Stormcaller_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150219
    },
    {
      "LocalizedName": "4e0c949d88c74b2187c747e4a4477298",
      "DevName": "Stormcaller_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150220
    },
    {
      "LocalizedName": "716c4577b2064ec69027bce211241e3e",
      "DevName": "Stormcaller_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150221
    },
    {
      "LocalizedName": "7405f26b394e4c89a70c528eb489c126",
      "DevName": "Stormcaller_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150222
    },
    {
      "LocalizedName": "070aa39040004608b5def2706d44db8d",
      "DevName": "Stormcaller_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150223
    },
    {
      "LocalizedName": "81d1e61495244cb2984a85e9e799b7bc",
      "DevName": "Stormcaller_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150224
    },
    {
      "LocalizedName": "f747375c0c8348eea719b4bda42832b1",
      "DevName": "Stormcaller_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150225
    },
    {
      "LocalizedName": "88f7c08fd4e74ee0948d8b2b644e22e4",
      "DevName": "Bloodpriest_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150226
    },
    {
      "LocalizedName": "76b86b9ece864a70a4103c6bc0e9cbd2",
      "DevName": "Bloodpriest_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150227
    },
    {
      "LocalizedName": "e952b03d7e1d4650aa1ed76dbb556471",
      "DevName": "Bloodpriest_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150228
    },
    {
      "LocalizedName": "ab6ee5feeab94141b33970c608f9ee6b",
      "DevName": "Bloodpriest_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150229
    },
    {
      "LocalizedName": "418fd538b1714c039a89e23f13f2615d",
      "DevName": "Bloodpriest_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150230
    },
    {
      "LocalizedName": "710cfb2c6c3e4e629a6d5ee65055ac85",
      "DevName": "Bloodpriest_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150231
    },
    {
      "LocalizedName": "d270f7b83ec04621a9c9948f858b02b1",
      "DevName": "Bloodpriest_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150232
    },
    {
      "LocalizedName": "03a59a03fa50475f8ecd4b1c276ba620",
      "DevName": "Bloodpriest_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150233
    },
    {
      "LocalizedName": "fc6aacadff37452695465a75e2cc108a",
      "DevName": "Bloodpriest_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150234
    },
    {
      "LocalizedName": "2bfc9933791a4853b380a6fbc1f30af7",
      "DevName": "Bloodpriest_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150235
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Swordmaster_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150236
    },
    {
      "LocalizedName": "c608fbeef33a47a78f4db6338aa0da42",
      "DevName": "Alchemist_Winter_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150237
    },
    {
      "LocalizedName": "ad0eed9d405f467f90eeb35c89f15f5b",
      "DevName": "Astronomert_Winter_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150238
    },
    {
      "LocalizedName": "1a9b6e7c14b64464bc73e5d94ceb924f",
      "DevName": "Bloodpriest_Winter_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150239
    },
    {
      "LocalizedName": "0127bc92669249fabb502b946f7297e6",
      "DevName": "Engineer_Winter_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150240
    },
    {
      "LocalizedName": "ba6569cba1644c01953b1b0c1407f748",
      "DevName": "Glutton_Winter_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150241
    },
    {
      "LocalizedName": "6fe7b78a9d2c4c5bbbb510fda7d7d485",
      "DevName": "Gunner_Winter_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150242
    },
    {
      "LocalizedName": "d03efb9e21bb482f8337e60320d6948c",
      "DevName": "Harbinger_Winter_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150243
    },
    {
      "LocalizedName": "0e7c3e9c30864d36832e7d35aeba2119",
      "DevName": "Herald_Winter_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150244
    },
    {
      "LocalizedName": "905a27886879496b92efdd07520163c3",
      "DevName": "Igniter_Winter_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150245
    },
    {
      "LocalizedName": "12f2aa0752bd4579a6e3196aa2dccd1f",
      "DevName": "Inhibitor_Winter_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150246
    },
    {
      "LocalizedName": "496b6996d47f4747b3d94bdc857aa828",
      "DevName": "Inquisitor_Winter_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150247
    },
    {
      "LocalizedName": "9d82a1819ba1430dadf6f1dde6924aa3",
      "DevName": "Nomad_Winter_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150248
    },
    {
      "LocalizedName": "66b56f72ead341718b9868c22158e33c",
      "DevName": "Psychopomp_Winter_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150249
    },
    {
      "LocalizedName": "ee7fcff40c9a4e79a39a34224e31979a",
      "DevName": "Ranid_Winter_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150250
    },
    {
      "LocalizedName": "84be490312b047ee871e3709234ee73b",
      "DevName": "Ravener_Winter_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150251
    },
    {
      "LocalizedName": "d0a3821f31c747e8b7cdae01ea91d038",
      "DevName": "Seeker_Winter_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150252
    },
    {
      "LocalizedName": "409483bc1c5c4151bb1e55e3e9ba9d28",
      "DevName": "Spearmaster_Winter_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150253
    },
    {
      "LocalizedName": "2d902e7fe08245a6bceabd8593670538",
      "DevName": "Vanguard_Winter_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150254
    },
    {
      "LocalizedName": "ef81b6d4c26e4a93a949bb04e75ff78f",
      "DevName": "Stormcaller_Winter_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150255
    },
    {
      "LocalizedName": "a5e0b59c7ba744d4a20b5b8f033b3a9b",
      "DevName": "Swordmaster_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150256
    },
    {
      "LocalizedName": "bd997f76bd1f4883b3e210832c91227d",
      "DevName": "Swordmaster_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150257
    },
    {
      "LocalizedName": "a582ac1e1b53457ab08d46e7750f1829",
      "DevName": "Swordmaster_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150258
    },
    {
      "LocalizedName": "abffbf604d6541b5a8d1d60181781bce",
      "DevName": "Swordmaster_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150259
    },
    {
      "LocalizedName": "85f06e5ca74d4e93a70122b03fd86c46",
      "DevName": "Swordmaster_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150260
    },
    {
      "LocalizedName": "7a8eee450f2b4134a8e1f7c92864329a",
      "DevName": "Swordmaster_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150261
    },
    {
      "LocalizedName": "202b64969f5b4963855e61ec2b292da9",
      "DevName": "Swordmaster_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150262
    },
    {
      "LocalizedName": "29b95ba5dba940f3ba780053a4f94441",
      "DevName": "Swordmaster_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150263
    },
    {
      "LocalizedName": "293da65d0146418888e95ff72c0b685d",
      "DevName": "Swordmaster_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150264
    },
    {
      "LocalizedName": "2901608e8c974e76a340f1da43baf9dc",
      "DevName": "Swordmaster_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150265
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Druid_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150266
    },
    {
      "LocalizedName": "89e3e4cb71a74162882641cbf05104dc",
      "DevName": "Druid_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150267
    },
    {
      "LocalizedName": "bc91a3da3f844f8096abfeeec3618cc2",
      "DevName": "Druid_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150268
    },
    {
      "LocalizedName": "5cc5d304278040bd8fb82941595b7eb6",
      "DevName": "Druid_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150269
    },
    {
      "LocalizedName": "7095195180664fba8f1eafc137e8c37d",
      "DevName": "Druid_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150270
    },
    {
      "LocalizedName": "e25d2365b4e6458f8c64fd98093f0c64",
      "DevName": "Druid_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150271
    },
    {
      "LocalizedName": "e1d1cc734b7b44a18159026d450c4f89",
      "DevName": "Druid_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150272
    },
    {
      "LocalizedName": "4683c7d381cd4885ba2dd90805195bda",
      "DevName": "Druid_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150273
    },
    {
      "LocalizedName": "c64ef7cc1cc24c0ca85c7c53bd97fafd",
      "DevName": "Druid_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150274
    },
    {
      "LocalizedName": "51a3bb11463b4dc3b997e991655c7da8",
      "DevName": "Druid_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150275
    },
    {
      "LocalizedName": "4e6769c7943a4e42a05d5a777cacb97d",
      "DevName": "Druid_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150276
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Minion_Axe_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150277
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Minion_Cannon_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150278
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Minion_Dynamite_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150279
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Minion_Glave_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150280
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Minion_Hammer_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150281
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Minion_Minigun_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150282
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Minion_Pistol_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150283
    },
    {
      "LocalizedName": "6942398686ca4ed5aab9a53006604ebe",
      "DevName": "Vanguard_Prehistoric01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150285
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Minion_Cannon_Gold_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150286
    },
    {
      "LocalizedName": "8e74bde3046a480a8b21ecc5499610f7",
      "DevName": "Herald_Prehistoric01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150287
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "MetalWarden_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150288
    },
    {
      "LocalizedName": "8cf304b3664a4d3482df0426c13f32b2",
      "DevName": "Inquisitor_Prehistoric01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150289
    },
    {
      "LocalizedName": "545dd34cb6384dc791215741a499a62e",
      "DevName": "Ranid_Prehistoric01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150290
    },
    {
      "LocalizedName": "45b5752f96df493094ec129e256f3d36",
      "DevName": "Nomad_Prehistoric01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150291
    },
    {
      "LocalizedName": "2062635904ee4f1087ef20a5df62adf5",
      "DevName": "Stormcaller_Prehistoric01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150292
    },
    {
      "LocalizedName": "cc77d61818534318b6d69422441af4e7",
      "DevName": "BloodPriest_Prehistoric01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150293
    },
    {
      "LocalizedName": "0d2122c8069d4e73834a70a39387c3bb",
      "DevName": "Seeker_Prehistoric01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150294
    },
    {
      "LocalizedName": "a91bb925491d4ffc86d8905ce3731897",
      "DevName": "Spearmaster_Prehistoric01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150295
    },
    {
      "LocalizedName": "5321c15572f14426a921c13a77e0cfbc",
      "DevName": "Swordmaster_Prehistoric01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150296
    },
    {
      "LocalizedName": "4964772dcbe345d2aadc705cd52b8b66",
      "DevName": "Inquisitor_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150297
    },
    {
      "LocalizedName": "941f07d78a7843e29dc695cf24b36602",
      "DevName": "Astronomer_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150298
    },
    {
      "LocalizedName": "269ea95dff58410492a4a1ef02d0e443",
      "DevName": "Inquisitor_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150299
    },
    {
      "LocalizedName": "7a12f0a7b0cb4b36ad291d9cb887bd70",
      "DevName": "Inquisitor_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150300
    },
    {
      "LocalizedName": "c92d78ba87db4d10a4c2832aef9394c8",
      "DevName": "Astronomer_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150301
    },
    {
      "LocalizedName": "fab7c0974ca544dd959658facfdf07d1",
      "DevName": "Astronomer_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150302
    },
    {
      "LocalizedName": "f8f16006f3ec42689406c993bc777073",
      "DevName": "Swordmaster_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150303
    },
    {
      "LocalizedName": "f3c62c37590e4d5caa53d311603a39a0",
      "DevName": "Swordmaster_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150304
    },
    {
      "LocalizedName": "bac1b1405286485fac19e7802147ef2d",
      "DevName": "Swordmaster_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150305
    },
    {
      "LocalizedName": "88c89e7a84544a7c94bab8732ab3fc6d",
      "DevName": "Herald_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150306
    },
    {
      "LocalizedName": "1de21b877cb4439caf2fd84409824450",
      "DevName": "Herald_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150307
    },
    {
      "LocalizedName": "8c87cae8b2ae4985bb8965f475c2ccef",
      "DevName": "Herald_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150308
    },
    {
      "LocalizedName": "a94f5d8c07a84911b33fba2bf8616357",
      "DevName": "Ravener_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150309
    },
    {
      "LocalizedName": "fc25d630c0464897b8a7713aa80b3dbc",
      "DevName": "Ravener_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150310
    },
    {
      "LocalizedName": "6aa2f618fa674746862c83825ef1c28d",
      "DevName": "Ravener_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150311
    },
    {
      "LocalizedName": "af9f899e2f754659af893f8f9c5fc9d2",
      "DevName": "Ranid_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150312
    },
    {
      "LocalizedName": "97603d44bd6c4344aa546a8bb66a8f4e",
      "DevName": "Ranid_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150313
    },
    {
      "LocalizedName": "fe79df8ab0a2448bb351417abdabfd47",
      "DevName": "Ranid_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150314
    },
    {
      "LocalizedName": "0690c54267bd4d3b8a68e78920e5e5b7",
      "DevName": "Nomad_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150315
    },
    {
      "LocalizedName": "2c9ab4b643a547aebd69bce9a77c9705",
      "DevName": "Nomad_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150316
    },
    {
      "LocalizedName": "247cc32685de477ba6ea72db0dc814a5",
      "DevName": "Nomad_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150317
    },
    {
      "LocalizedName": "1c6150e1303d48c58d38a8f0db623f8c",
      "DevName": "Harbinger_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150318
    },
    {
      "LocalizedName": "233465f4661c410191e5ffe01cba6c4c",
      "DevName": "Harbinger_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150319
    },
    {
      "LocalizedName": "79ed4520e3a5453d8547cd48b3c3c0d1",
      "DevName": "Harbinger_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150320
    },
    {
      "LocalizedName": "0bfb1f28ccbc47d587ebd6b726fcb9ed",
      "DevName": "Seeker_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150321
    },
    {
      "LocalizedName": "605c3129f8e2434d96c5a3e4f6bad25f",
      "DevName": "Seeker_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150322
    },
    {
      "LocalizedName": "bdf12be73f314e86ad3765ad91bdb03a",
      "DevName": "Seeker_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150323
    },
    {
      "LocalizedName": "3d04a7dc5cd54c7998ed64d6ebf1f014",
      "DevName": "Stormcaller_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150324
    },
    {
      "LocalizedName": "ab5583aa435c4aedb9228c2638de5b40",
      "DevName": "Stormcaller_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150325
    },
    {
      "LocalizedName": "24471e1360da4ae29f577f181b0d04f2",
      "DevName": "Stormcaller_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150326
    },
    {
      "LocalizedName": "1548b2908b424c8ba1f81bcca13d6acf",
      "DevName": "Psychopomp_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150327
    },
    {
      "LocalizedName": "9d7b236fa826406795a05b7e15ec6aae",
      "DevName": "Psychopomp_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150328
    },
    {
      "LocalizedName": "e24c44dbefb54bbdbbd3a4a8c664403b",
      "DevName": "Psychopomp_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150329
    },
    {
      "LocalizedName": "7f01a872ab3a47fdaf5ca3a55be1f078",
      "DevName": "Spearmaster_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150330
    },
    {
      "LocalizedName": "76d6f71332404d2c83270fcb2236fd96",
      "DevName": "Spearmaster_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150331
    },
    {
      "LocalizedName": "97a77d756bc94ab188dacbe24f56961c",
      "DevName": "Spearmaster_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150332
    },
    {
      "LocalizedName": "789544f9fb434f27aaf70fc8dcb30c31",
      "DevName": "Glutton_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150333
    },
    {
      "LocalizedName": "8365f21cf1754c9ea5b13d9d90c20eb1",
      "DevName": "Glutton_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150334
    },
    {
      "LocalizedName": "85ec8e64ca5143f381e7c770396bc4b9",
      "DevName": "Glutton_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150335
    },
    {
      "LocalizedName": "c3751db9327e469ca4384334e626f127",
      "DevName": "Igniter_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150336
    },
    {
      "LocalizedName": "c8e532754e27453b952dcd87dbf623e7",
      "DevName": "Igniter_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150337
    },
    {
      "LocalizedName": "fdcfa05716aa4f69859eafa5b81ae348",
      "DevName": "Igniter_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150338
    },
    {
      "LocalizedName": "f95265c806f14796944d508505cf3b35",
      "DevName": "Bloodpriest_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150339
    },
    {
      "LocalizedName": "8b4cfe179e2b439aaaa35e2c396ed2dc",
      "DevName": "BloodPriest_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150340
    },
    {
      "LocalizedName": "76493a0bf36c44a4951a00ed73695f76",
      "DevName": "BloodPriest_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150341
    },
    {
      "LocalizedName": "34a99515f1144564a8263394d4db1f9a",
      "DevName": "Vanguard_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150342
    },
    {
      "LocalizedName": "7677eef274b34d2b8d7a0ad5d5733fa6",
      "DevName": "Vanguard_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150343
    },
    {
      "LocalizedName": "165a4d0b8c0b44b2ac5421f8a6261ece",
      "DevName": "Vanguard_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150344
    },
    {
      "LocalizedName": "28b89a4132894cd2931e53937ff7ce43",
      "DevName": "Gunner_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150345
    },
    {
      "LocalizedName": "ea426e126b89498d9a880654c6f6fbd5",
      "DevName": "Gunner_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150346
    },
    {
      "LocalizedName": "cc73892218c342d890452ecdab58f95d",
      "DevName": "Gunner_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150347
    },
    {
      "LocalizedName": "2f7db540bcf14488b355f0b600d4666a",
      "DevName": "Engineer_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150348
    },
    {
      "LocalizedName": "6dc7567b0b294e3690c6d5c52571e66a",
      "DevName": "Engineer_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150349
    },
    {
      "LocalizedName": "bbf90da5d33246a7a751ceba5ea9136e",
      "DevName": "Engineer_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150350
    },
    {
      "LocalizedName": "ece600875d5d4d95894984fb1ea97e97",
      "DevName": "Alchemist_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150351
    },
    {
      "LocalizedName": "83b3527c4f244b678dd74bba577e0805",
      "DevName": "Alchemist_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150352
    },
    {
      "LocalizedName": "dfb8a0d91dae4aac8e262a8fb192d250",
      "DevName": "Alchemist_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150353
    },
    {
      "LocalizedName": "1e844b9a11174d89b8317a1310b12a16",
      "DevName": "Inhibitor_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150354
    },
    {
      "LocalizedName": "3b692b39a9d8405d94297b110b0d1238",
      "DevName": "Inhibitor_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150355
    },
    {
      "LocalizedName": "7a3e06405e614737a60822abe78adab6",
      "DevName": "Inhibitor_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150356
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Thorn_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150357
    },
    {
      "LocalizedName": "f29bc87c6a0f4a8e8ef2ff172aa7e8d3",
      "DevName": "Druid_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150358
    },
    {
      "LocalizedName": "bef2b066657b4c02b3f662023069413e",
      "DevName": "Druid_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150359
    },
    {
      "LocalizedName": "dfcf5023268d464ea5953d616e255b01",
      "DevName": "Druid_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150360
    },
    {
      "LocalizedName": "dc8d9cbaa0bf4eb3a9bf0efa92d59f6c",
      "DevName": "Swordrmaster_Halloween_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150361
    },
    {
      "LocalizedName": "80c7a28a5a1744349521e28f00341e61",
      "DevName": "Druid_Halloween_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150362
    },
    {
      "LocalizedName": "f4a0eef345254670aa42c97f4eafb22b",
      "DevName": "Stormcaller_Halloween_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150363
    },
    {
      "LocalizedName": "5aa2c6f168834b9591b92da2bf2f8ef0",
      "DevName": "BloodPriest_Halloween_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150364
    },
    {
      "LocalizedName": "a81187fb5828436c8ed4c2fd26ed1b40",
      "DevName": "MetalWarden_Winter_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150365
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "MirrorMage_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150366
    },
    {
      "LocalizedName": "562561b10ee44bf9b34b8eedb678d123",
      "DevName": "Druid_Winter_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150367
    },
    {
      "LocalizedName": "76162c75d5234f5292cb582953e10acd",
      "DevName": "Thorn_Winter_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150369
    },
    {
      "LocalizedName": "e8b8569934604f03a8a5678163c11a9a",
      "DevName": "Thorn_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150370
    },
    {
      "LocalizedName": "7c2188977ce44325b8afedf3c39caaa9",
      "DevName": "Thorn_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150371
    },
    {
      "LocalizedName": "dedf2077a34542cf8ae6ab0cbdf96ce6",
      "DevName": "Thorn_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150372
    },
    {
      "LocalizedName": "5cf14d9322324f15a0350df44de00354",
      "DevName": "Thorn_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150373
    },
    {
      "LocalizedName": "ef484286fd0e46b192c0c7335657f577",
      "DevName": "Thorn_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150374
    },
    {
      "LocalizedName": "453121b98ba74e45b94d9d7dc8ec7845",
      "DevName": "Thorn_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150375
    },
    {
      "LocalizedName": "be224e0763604190a59331d6e0dd7f3a",
      "DevName": "Thorn_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150376
    },
    {
      "LocalizedName": "b801f0fa4cce4cedb42b390fbd585402",
      "DevName": "Thorn_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150377
    },
    {
      "LocalizedName": "00a7005533f0476b9be7acc28bd86a6d",
      "DevName": "MetalWarden_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150378
    },
    {
      "LocalizedName": "35dfcb6fb20749278f18af9cf39bc6fb",
      "DevName": "MetalWarden_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150379
    },
    {
      "LocalizedName": "cb8496062d28457e86a00f4d0265e928",
      "DevName": "MetalWarden_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150380
    },
    {
      "LocalizedName": "57aded37f7674fbda480e10aaa923724",
      "DevName": "MetalWarden_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150381
    },
    {
      "LocalizedName": "269edf5db6f945d8b711784b9254d481",
      "DevName": "MetalWarden_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150382
    },
    {
      "LocalizedName": "c957d213b0c848e9b7918a41bb0260a9",
      "DevName": "MetalWarden_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150383
    },
    {
      "LocalizedName": "9b98e308504c4f498e7cd0ae7fa3f50b",
      "DevName": "MetalWarden_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150384
    },
    {
      "LocalizedName": "c6b19424ddd044a388ea1239f19accd7",
      "DevName": "MetalWarden_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150385
    },
    {
      "LocalizedName": "6d66f2818a32456e914e8c209d24a860",
      "DevName": "MetalWarden_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150386
    },
    {
      "LocalizedName": "0f506a8bc9104dd595800cb78b25748d",
      "DevName": "MetalWarden_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150387
    },
    {
      "LocalizedName": "11e00e787df54810abf9094a7c157310",
      "DevName": "MetalWarden_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150388
    },
    {
      "LocalizedName": "9a1e834ce6ff4d93ba82a9b93d6d5ba1",
      "DevName": "MetalWarden_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150389
    },
    {
      "LocalizedName": "43b1bc134b2947ac8b15f9c30aab1218",
      "DevName": "MetalWarden_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150390
    },
    {
      "LocalizedName": "492af5a1c9d6438a98dc1c478eea571b",
      "DevName": "Spearmaster_Weapon_GuardianSpear01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150391
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Minion_Axe_WTC_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150392
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Minion_Cannon_WTC_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150393
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Minion_Glave_WTC_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150394
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Seeker_WTC_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150395
    },
    {
      "LocalizedName": "0d97b180c56b420ca8cc9c5d2bf85459",
      "DevName": "Alchemist_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150396
    },
    {
      "LocalizedName": "d8345dc1a6f74113832e3e1e4259392f",
      "DevName": "Astronomer_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150397
    },
    {
      "LocalizedName": "cada4502c50e460d8d9819f8c43431a6",
      "DevName": "Bloodpriest_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150398
    },
    {
      "LocalizedName": "6f76ce27b3704b098a9aea9abce6269b",
      "DevName": "Druid_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150399
    },
    {
      "LocalizedName": "cd1dadeb8d1645efa1ea2bf84ab46236",
      "DevName": "Engineer_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150400
    },
    {
      "LocalizedName": "b71ec71880794a0d9cb340613ad6ff8d",
      "DevName": "Glutton_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150401
    },
    {
      "LocalizedName": "e73b32d20d6b400ba4923c9df944050c",
      "DevName": "Gunner_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150402
    },
    {
      "LocalizedName": "7cb5f3f419f449efb0d0801665613584",
      "DevName": "Harbinger_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150403
    },
    {
      "LocalizedName": "3352e62e2dbb4fcb8200074863570ab5",
      "DevName": "Herald_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150404
    },
    {
      "LocalizedName": "b17d7559660a4584bf375785c4520160",
      "DevName": "Igniter_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150405
    },
    {
      "LocalizedName": "5d042d66252d42b4a7dc7624001b8d0a",
      "DevName": "Igniter_Set03_Weapon04",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150406
    },
    {
      "LocalizedName": "95e0a6c6f1a84d3093bef2523c16e292",
      "DevName": "Inhibitor_Set05_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150407
    },
    {
      "LocalizedName": "f4624125b0d04a5d9ddd832425bb9dee",
      "DevName": "Vanguard_Set05_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150408
    },
    {
      "LocalizedName": "9ae48e6d203949c3ad5ab670deb39c97",
      "DevName": "Thorn_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150409
    },
    {
      "LocalizedName": "a7195031d2174e5282d3fd25ef892c22",
      "DevName": "Thorn_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150410
    },
    {
      "LocalizedName": "e77c10321dd74e2c874f497176f1beda",
      "DevName": "Inhibitor_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150411
    },
    {
      "LocalizedName": "2bbfbe0453394214865140db033f2a06",
      "DevName": "Inhibitor_Set05_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150412
    },
    {
      "LocalizedName": "55c34958d2ed48ae8642a74414dffac4",
      "DevName": "Inhibitor_Set05_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150413
    },
    {
      "LocalizedName": "ca467fd3f240423e9f7dc17642664998",
      "DevName": "Thorn_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150414
    },
    {
      "LocalizedName": "1972f6cd88be4a118e59c30b50095627",
      "DevName": "Thorn_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150415
    },
    {
      "LocalizedName": "6099301e62ee4a9f96276fb6d0d9a304",
      "DevName": "Thorn_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150416
    },
    {
      "LocalizedName": "7a1b379488d04bdc99e81a87146b2e03",
      "DevName": "Thorn_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150417
    },
    {
      "LocalizedName": "46124f206b78499e8a73ae49ba014aba",
      "DevName": "Inquisitor_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150418
    },
    {
      "LocalizedName": "94bd901fc6014122937d2cf048868374",
      "DevName": "Nomad_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150420
    },
    {
      "LocalizedName": "f681f741de4b49c3a229ae62918e191d",
      "DevName": "Psychopomp_Set03_Toki03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150421
    },
    {
      "LocalizedName": "b0935126187f4c22bbca104bbdccc306",
      "DevName": "Ranid_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150422
    },
    {
      "LocalizedName": "b054569690c84eb0a68dd4c4bacd6376",
      "DevName": "Ravener_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150423
    },
    {
      "LocalizedName": "6cdbbf56ecc0482c8e55596725b4abb3",
      "DevName": "Seeker_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150424
    },
    {
      "LocalizedName": "79f0f232256d490b96beb13660dc30cb",
      "DevName": "Spearmaster_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150425
    },
    {
      "LocalizedName": "4932b871f62b42aa86f41a0c2b7f3b49",
      "DevName": "Stormcaller_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150426
    },
    {
      "LocalizedName": "d494df8190b3493fb87d24da1603a34c",
      "DevName": "Swordmaster_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150427
    },
    {
      "LocalizedName": "67b1d53644df4e9aa01688a6828d8dee",
      "DevName": "Vanguard_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150428
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "FrostMage_Standard_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150429
    },
    {
      "LocalizedName": "cad3b6936c8e443490a79bce73ff23fa",
      "DevName": "Igniter_Weapon_Twitch01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150430
    },
    {
      "LocalizedName": "c15c23e71fd845ccb8c50b5ea177fac6",
      "DevName": "Vanguard_Set05_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150431
    },
    {
      "LocalizedName": "7047358611684d9ea984e8d904784b8b",
      "DevName": "Vanguard_Set05_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150432
    },
    {
      "LocalizedName": "d7dada046bc74a1cbdedd884038052e3",
      "DevName": "Bossilus_WTC_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150433
    },
    {
      "LocalizedName": "fce2666df04f4c0ca427c29b2050947a",
      "DevName": "MetalWarden_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150434
    },
    {
      "LocalizedName": "0c692fecdb6b409eb8400686a58fc8c3",
      "DevName": "FrostMage_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150435
    },
    {
      "LocalizedName": "0a5631c72ea546288a6cf00cd58acb3a",
      "DevName": "FrostMage_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150436
    },
    {
      "LocalizedName": "5ec1d84113724171a5615cf73f110d83",
      "DevName": "FrostMage_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150437
    },
    {
      "LocalizedName": "bd7c6627f37643149e8ca58f3f8ce3f0",
      "DevName": "FrostMage_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150438
    },
    {
      "LocalizedName": "65a31a9c95bc457e88d3a387839c2316",
      "DevName": "FrostMage_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150439
    },
    {
      "LocalizedName": "89dd8735f061497ba6fabe7260aef79a",
      "DevName": "FrostMage_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150440
    },
    {
      "LocalizedName": "28b1259c911f48668d30d4d7714d49f1",
      "DevName": "FrostMage_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150441
    },
    {
      "LocalizedName": "0388d5266895486da88ef16007f1f0a1",
      "DevName": "FrostMage_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150442
    },
    {
      "LocalizedName": "dff462b67e3a40a98cdceed345e58207",
      "DevName": "FrostMage_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150443
    },
    {
      "LocalizedName": "cbaa3e4f954146d0a63ee5c1506a2cba",
      "DevName": "FrostMage_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150444
    },
    {
      "LocalizedName": "806189c82ab642b1b64c8ebfb9e34509",
      "DevName": "FrostMage_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150445
    },
    {
      "LocalizedName": "9a590ce91fea42b79c27a8b86728cafd",
      "DevName": "FrostMage_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150446
    },
    {
      "LocalizedName": "89418bc68cc043d2acf3e60fd1161d43",
      "DevName": "FrostMage_Winter01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150447
    },
    {
      "LocalizedName": "efaa4c60fb5c4258a28bec2a0580ca83",
      "DevName": "FrostMage_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150448
    },
    {
      "LocalizedName": "3587133f845440d7a098cd537f24a283",
      "DevName": "FrostMage_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150449
    },
    {
      "LocalizedName": "98a1987772a54ef4b2f14a3e8d319bf4",
      "DevName": "MirrorMage_Standard_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150450
    },
    {
      "LocalizedName": "99c6ecfbfec540118636aa1b16a16f27",
      "DevName": "MirrorMage_Standard_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150451
    },
    {
      "LocalizedName": "d84518d358ad4be59fd7f9068a74c8a0",
      "DevName": "MirrorMage_Set01_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150452
    },
    {
      "LocalizedName": "3a6a32c8548d4ecc98dd551b840d3732",
      "DevName": "MirrorMage_Set01_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150453
    },
    {
      "LocalizedName": "a997adb4291d4d38bdf25c8e60a39d0f",
      "DevName": "MirrorMage_Set01_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150454
    },
    {
      "LocalizedName": "5b602de256724f9e9b290198cb78419b",
      "DevName": "MirrorMage_Set02_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150456
    },
    {
      "LocalizedName": "b091b21382dd4448a7b3fbfff7fb7650",
      "DevName": "MirrorMage_Set02_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150457
    },
    {
      "LocalizedName": "87abdbf355004acd879998861dd43aac",
      "DevName": "MirrorMage_Set04_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150459
    },
    {
      "LocalizedName": "16751ca4f74c40fab69377df4de2fa3e",
      "DevName": "MirrorMage_Set04_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150460
    },
    {
      "LocalizedName": "40eb0b44d75842a896239db3f1f29ff8",
      "DevName": "MirrorMage_Set03_Weapon02",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150462
    },
    {
      "LocalizedName": "4bdfb483f097443797ca3301cc82dd32",
      "DevName": "MirrorMage_Set03_Weapon03",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150463
    },
    {
      "LocalizedName": "2af5203c99e2411db68f891df37c7ef0",
      "DevName": "MirrorMage_Set02_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150464
    },
    {
      "LocalizedName": "ccecb0e2933945c69588a8092c8a6a67",
      "DevName": "MirrorMage_Set03_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150465
    },
    {
      "LocalizedName": "584b39a6ca004ac1a3f4a5456f778862",
      "DevName": "MirrorMage_Set04_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150466
    },
    {
      "LocalizedName": "2aea55249f7f4aceae189f4f3e8c0328",
      "DevName": "Swordmaster_Winter_Weapon01",
      "IdRangeName": "AttachmentEnum",
      "StackableRangeName": "Attachments",
      "StackableId": 150469
    },
    {
      "LocalizedName": "3caf9b8307a345a0bf183ab4af7c0ac7",
      "DevName": "Mount_Ram_Standard",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100000
    },
    {
      "LocalizedName": "193ee50647bf4ca9a4057b93f90b43c7",
      "DevName": "Mount_Wullbear_Black",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100001
    },
    {
      "LocalizedName": "c46a33ba6cf94ef695790b8016766dd6",
      "DevName": "Mount_Wullbear_Brown",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100002
    },
    {
      "LocalizedName": "896082d95c1849a3aa808490f564390e",
      "DevName": "Mount_Wullbear_LightBrown",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100003
    },
    {
      "LocalizedName": "1880b21346c44885b5a6a535e8d8cfbc",
      "DevName": "Mount_Ram_Demon",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100005
    },
    {
      "LocalizedName": "8ae241b9aa4643a5b0f1b5dfc4255656",
      "DevName": "Mount_Ram_Angel",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100006
    },
    {
      "LocalizedName": "241970563e1446fa9998269ada5e8f0c",
      "DevName": "Mount_Upsell_Standard",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100008
    },
    {
      "LocalizedName": "d26d71dc44354381b0a4533e0b5885f2",
      "DevName": "Mount_MoltenWarHound_Standard",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100009
    },
    {
      "LocalizedName": "93a8aaac43654ee3bc7c72f4f2a86aa9",
      "DevName": "Mount_LightningWarHound_Standard",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100010
    },
    {
      "LocalizedName": "23f4a166c5ec44779b91552562c80198",
      "DevName": "Mount_Horse_Halloween01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100011
    },
    {
      "LocalizedName": "7fef1094e49547e6a1beb8a68b120aa5",
      "DevName": "Mount_Horse_Standard01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100012
    },
    {
      "LocalizedName": "3582ce972a6b42deb42907af291874da",
      "DevName": "Mount_Horse_Standard02",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100013
    },
    {
      "LocalizedName": "5691c672e6604b3182b7b3526b629fd8",
      "DevName": "Mount_Moose_Halloween01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100014
    },
    {
      "LocalizedName": "cd3dab9c86b34f079dffb072e4d5b375",
      "DevName": "Mount_Moose_Standard01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100015
    },
    {
      "LocalizedName": "db380dd46ffa4cbe86c5a663dd4a4521",
      "DevName": "Mount_Moose_Standard02",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100016
    },
    {
      "LocalizedName": "b87b06ee3ca44591a902b9b29b8b1110",
      "DevName": "Mount_RazerWarHound_Standard",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100017
    },
    {
      "LocalizedName": "9358f740892e4ecdaa8a1e01ab1e23f0",
      "DevName": "Mount_Furrycorn_Arcane01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100018
    },
    {
      "LocalizedName": "837d40930453467bbd3daa61d74ce14f",
      "DevName": "Mount_Furrycorn_Halloween01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100019
    },
    {
      "LocalizedName": "daec8b95c9fa4e279f7ec142cf816734",
      "DevName": "Mount_Furrycorn_Standard01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100020
    },
    {
      "LocalizedName": "941fc08a8aaf4c0793f0fc1d524bfa76",
      "DevName": "Mount_Upsell_Battlewolf",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100021
    },
    {
      "LocalizedName": "b8976f2f710843a68abae0bc4be0370c",
      "DevName": "Mount_Horse_EAGift",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100022
    },
    {
      "LocalizedName": "25225077213a486982e2c424c7ee9011",
      "DevName": "Mount_Yogscast_YogYogBear",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100023
    },
    {
      "LocalizedName": "0e96b33e59324970bae2901a18f41b31",
      "DevName": "Mount_PolarBear_Winter01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100024
    },
    {
      "LocalizedName": "bcf03a0ae95f4d38ae86c1bdbb142da6",
      "DevName": "Mount_Present_Winter01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100025
    },
    {
      "LocalizedName": "efdb9311e9064c3f9020496f2ad60510",
      "DevName": "Mount_Rooster_Standard01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100026
    },
    {
      "LocalizedName": "76736578bace4f5cb40c4a0448eba848",
      "DevName": "Mount_Carpet_Standard01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100027
    },
    {
      "LocalizedName": "ec99a903fb0a4d01a8dee774693cb1e5",
      "DevName": "Mount_Raptor_Standard01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100028
    },
    {
      "LocalizedName": "71821499ee284769882271b1a850a0c6",
      "DevName": "Mount_GrandChampion_Standard01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100029
    },
    {
      "LocalizedName": "7817954506f54c3a8ef0eaa973137ded",
      "DevName": "Mount_Scorpion_Standard01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100031
    },
    {
      "LocalizedName": "5d5df0a45a1d4a82a734dd58a9d6eae0",
      "DevName": "Mount_Scorpion_Standard02",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100032
    },
    {
      "LocalizedName": "7d9ebadf85b2439592d984a7871865bd",
      "DevName": "Mount_Chicken_Standard01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100033
    },
    {
      "LocalizedName": "74d2e1df32474e889698e3e81b6d98e2",
      "DevName": "Mount_Carpet_Standard02",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100034
    },
    {
      "LocalizedName": "72b61b447ed2456b85114259d32b9c4b",
      "DevName": "Mount_Corgi_Standard01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100036
    },
    {
      "LocalizedName": "56fbcfbdb9714790b52cef825a242022",
      "DevName": "Mount_DemonicWullbear_Halloween01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100037
    },
    {
      "LocalizedName": "317219eeb41448e3a16365b6cf260367",
      "DevName": "Mount_Furrycorn_Youtube01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100039
    },
    {
      "LocalizedName": "1f040b0a72724715ae751b4f240cbd3c",
      "DevName": "Mount_Scorpion_Winter01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100040
    },
    {
      "LocalizedName": "1ca220efc8d04759acfc410106d3185d",
      "DevName": "Mount_Dino_Standard01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100041
    },
    {
      "LocalizedName": "cb4dd9e1a7774d9991a9bcbe904c7e1e",
      "DevName": "Mount_Raptor_Feather01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100042
    },
    {
      "LocalizedName": "a05444ffc1a243cf877672425f77f7cf",
      "DevName": "Mount_Raptor_Standard02",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100043
    },
    {
      "LocalizedName": "c769f6fb0a6e4085890d1e8bd92aa6bd",
      "DevName": "Mount_ElectricEel_Standard01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100044
    },
    {
      "LocalizedName": "a706734dd8b643518006bd871b3574db",
      "DevName": "Mount_ElectricEel_Standard02",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100045
    },
    {
      "LocalizedName": "c8c4117663ec49589d6d794eac7b9ade",
      "DevName": "Mount_Furrycorn_Twitch01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100046
    },
    {
      "LocalizedName": "94850b0015eb470e90548b498532d821",
      "DevName": "Mount_Cloud_Standard01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100047
    },
    {
      "LocalizedName": "a5de97e712634a27b3980701785b722c",
      "DevName": "Mount_Horse_Community01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100048
    },
    {
      "LocalizedName": "13dfc75120864c94a8a40d651c4a790a",
      "DevName": "Mount_Upsell_BattlewolfGrey",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100049
    },
    {
      "LocalizedName": "4244b6239ef146e0b075c9f30a17d645",
      "DevName": "Mount_Upsell_BattlewolfRed",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100050
    },
    {
      "LocalizedName": "5e437324dc6b488780983948bdad15b9",
      "DevName": "Mount_Upsell_Standard02",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100051
    },
    {
      "LocalizedName": "a7d54b15fde24529af4d04091f5bae8e",
      "DevName": "Mount_Upsell_Standard03",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100052
    },
    {
      "LocalizedName": "5c666e1f62f841d596b10e45d09c49d8",
      "DevName": "Mount_Dino_Standard02",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100054
    },
    {
      "LocalizedName": "0f07a6005ea948e1bda9ec3b3e827697",
      "DevName": "Mount_Raptor_Standard03",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100055
    },
    {
      "LocalizedName": "594a8a9920b74e82a70d92ac8754a34f",
      "DevName": "Mount_Hamster_Winter01",
      "IdRangeName": "MountEnum",
      "StackableRangeName": "Mount",
      "StackableId": 100056
    },
    {
      "LocalizedName": "703f566d634d4ed6941a9d6d04f92979",
      "DevName": "Alchemist",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "83cd4bf3be6455f4cbbf803035b6d0fe",
      "WideIcon": "e5554b8a15ffc1a499a3807bb3a37b56",
      "StackableId": 10001
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "Astronomer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 10002
    },
    {
      "LocalizedName": "cb26b90df02745c8b035f856a7bba58d",
      "DevName": "Engineer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "423d20132a1e9224d92e489664702e03",
      "WideIcon": "decba44679fbdae4bb7d0d1cb6a97682",
      "StackableId": 10003
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "Gunner",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 10004
    },
    {
      "LocalizedName": "75edf47280604ea4a632ae97664d3c23",
      "DevName": "Harbinger",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "b6baa190db3bf814cae790b79f622ea0",
      "WideIcon": "bb37e5d448c511e47b808987d0d4f9e8",
      "StackableId": 10005
    },
    {
      "LocalizedName": "185585849e33412ab192917339444df1",
      "DevName": "Herald",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "9de8223b455d0474a9bbf2f32f9c7102",
      "WideIcon": "b0d66b8b9f228724093b8a3e66c3fef6",
      "StackableId": 10006
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "Igniter",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 10007
    },
    {
      "LocalizedName": "943be726de724906be18c214511a3f7b",
      "DevName": "Inhibitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "6477c7810f95a394e936caacf42d0b4e",
      "WideIcon": "f1cc53a29c58089478f6438589d9b32d",
      "StackableId": 10008
    },
    {
      "LocalizedName": "6868ad46fc604034a78f3c57300c3257",
      "DevName": "Inquisitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "b9f935b04557efa4e95d6cec4d151985",
      "WideIcon": "427116cdee46bad4cbaa99d7063e0832",
      "StackableId": 10009
    },
    {
      "LocalizedName": "8b8ca9a3af044131a61889b28bbcb00f",
      "DevName": "Nomad",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "246d3bbb94b9f0d42932cbb2a1e43dd5",
      "WideIcon": "2905515bc00a1d64e83466ec8e50f8b6",
      "StackableId": 10010
    },
    {
      "LocalizedName": "85e0b02e16c64eb1a5bcafb8cd769c25",
      "DevName": "Psychopomp",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "edd99cc32ca6f2842b2cb83249945c2a",
      "WideIcon": "9872f8cd16d7327418b09294cfa319e6",
      "StackableId": 10011
    },
    {
      "LocalizedName": "75e925f886164954b000e65caf1d35ee",
      "DevName": "Ranid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "0380b89b0ba8de847843f22c25b41a56",
      "WideIcon": "d3038956f9767d74bbbce0659b07474d",
      "StackableId": 10012
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "Ravener",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 10013
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "Seeker",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 10014
    },
    {
      "LocalizedName": "ed420e0ca45a4eaeb1010151e236f334",
      "DevName": "Spearmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "7853a4b1214bef74a8bbdf17f0a45bb8",
      "WideIcon": "6f69edc7410650c43bee267eef585b06",
      "StackableId": 10015
    },
    {
      "LocalizedName": "051b83cf1878426a9bc0a329babbea8f",
      "DevName": "Stormcaller",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "6e29d30d928547b4e941ce3e6e4e83b3",
      "WideIcon": "3af1fdc53169d044b939cce7ffb561a1",
      "StackableId": 10016
    },
    {
      "LocalizedName": "f05ef57b8e994e5e9d43bbfcae9a09a6",
      "DevName": "Vanguard",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 10017
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "Glutton",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 10018
    },
    {
      "LocalizedName": "0fa51e1bd7c84e4da4ceee830532e406",
      "DevName": "BloodPriest",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "d9cffa65b2aa1414e9371fc9b2f4c561",
      "WideIcon": "a7e0c7a6f0fa2ef49bf684950de34567",
      "StackableId": 10019
    },
    {
      "LocalizedName": "3c09a1c88b5b44608679b7a34350ca52",
      "DevName": "MetalWarden",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "8f50318bf676ca047b3e36d5b6de7815",
      "WideIcon": "65e28ab3b75c7cb478a1b24b46fca7d2",
      "StackableId": 10020
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "Swordmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 10021
    },
    {
      "LocalizedName": "da0272c6ff4b48bf809f130d8e2dba02",
      "DevName": "Druid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "907a9b3d24a8c9f459e02c87d86fa9da",
      "WideIcon": "6f50396e26efe6c4bbad274e2c90b8a4",
      "StackableId": 10022
    },
    {
      "LocalizedName": "54211e1d9be54efeac2e3311e96b898b",
      "DevName": "Bakko_EasterEvent",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 10023
    },
    {
      "LocalizedName": "d25b42991ba94cbeb7234aad3e176351",
      "DevName": "Thorn",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "57f133d34e231d04d922dd5e5d234a71",
      "WideIcon": "aab126231d9ff344f9f88ab230a5e66f",
      "StackableId": 10025
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "AshkaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 10026
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "FreyaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 10027
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "JumongCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 10028
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "RaigonCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 10029
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "RookCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 10030
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "SiriusCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 10031
    },
    {
      "LocalizedName": "f18695e2f3b64d37a8a0e085db007eac",
      "DevName": "MirrorMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "e10caaf367fdb6f459483a4c9be850a3",
      "WideIcon": "9c4186a6214f12448a7091710b0cde6c",
      "StackableId": 10035
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "JadeCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 10038
    },
    {
      "LocalizedName": "448d6f054228474eb92862767d3e21a8",
      "DevName": "RandomChampion",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "c175e343deeceff48a7fc58412aabe4e",
      "WideIcon": "7823c6971f6585846a1252e279fd02da",
      "StackableId": 10040
    },
    {
      "LocalizedName": "b2c969dbc2834e9296155eb97e2db638",
      "DevName": "FrostMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Characters",
      "Icon": "f3e8949aa208a3346a497c336a7002cd",
      "WideIcon": "50404d271ae2a4f4f8b52de966688dc1",
      "StackableId": 10041
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_Alchemist_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200003
    },
    {
      "LocalizedName": "dad9c93f7d1a4b57848677e19bfc1d1d",
      "DevName": "VictoryPose_Alchemist_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200004
    },
    {
      "LocalizedName": "7a9381ab35a04bb5a7d9a06211f4d610",
      "DevName": "VictoryPose_Alchemist_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200005
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_Astronomer_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200006
    },
    {
      "LocalizedName": "5d163243fed24c1b9c0a8e9570d4a396",
      "DevName": "VictoryPose_Astronomer_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200007
    },
    {
      "LocalizedName": "29707f15f6ac4377a631fac362645b10",
      "DevName": "VictoryPose_Astronomer_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200008
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_Engineer_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200009
    },
    {
      "LocalizedName": "9b5e1008e8974595b2b8825f2cb0ead0",
      "DevName": "VictoryPose_Engineer_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200010
    },
    {
      "LocalizedName": "a7ae322c182345b383579a5951284ebd",
      "DevName": "VictoryPose_Engineer_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200011
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_Glutton_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200012
    },
    {
      "LocalizedName": "3b26472a629f415eb63a234255c39b52",
      "DevName": "VictoryPose_Glutton_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200013
    },
    {
      "LocalizedName": "b7774161177845cbaf64c566cd2e7eb5",
      "DevName": "VictoryPose_Glutton_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200014
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_Gunner_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200015
    },
    {
      "LocalizedName": "5857b498165c419ea42d8c25579808ee",
      "DevName": "VictoryPose_Gunner_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200016
    },
    {
      "LocalizedName": "5556c4eca57d4ee4a17d191c43d9f8d9",
      "DevName": "VictoryPose_Gunner_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200017
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_Herald_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200018
    },
    {
      "LocalizedName": "b9da7da1fb434722a0f6d578300e2c20",
      "DevName": "VictoryPose_Herald_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200019
    },
    {
      "LocalizedName": "07cfbc8336444e8690bb5701ad3654bd",
      "DevName": "VictoryPose_Herald_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200020
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_Igniter_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200021
    },
    {
      "LocalizedName": "380a055b635a41dab09e3aad7abfb5eb",
      "DevName": "VictoryPose_Igniter_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200022
    },
    {
      "LocalizedName": "3cdb3d763c0e4124be01e6a83d6fcbd0",
      "DevName": "VictoryPose_Igniter_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200023
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_Inhibitor_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200024
    },
    {
      "LocalizedName": "286bf38339f146c199a97f26717811d1",
      "DevName": "VictoryPose_Inhibitor_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200025
    },
    {
      "LocalizedName": "0b64ced2cbdc4d01bee6d4860e3dbc74",
      "DevName": "VictoryPose_Inhibitor_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200026
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_Inquisitor_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200027
    },
    {
      "LocalizedName": "17e2768a9e5340eead58b950e2bfcae2",
      "DevName": "VictoryPose_Inquisitor_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200028
    },
    {
      "LocalizedName": "24d80bf4b1194aa7af86385aeb83a8ad",
      "DevName": "VictoryPose_Inquisitor_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200029
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_Nomad_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200030
    },
    {
      "LocalizedName": "8cb2234a62d34eb299f11f6cace64b07",
      "DevName": "VictoryPose_Nomad_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200031
    },
    {
      "LocalizedName": "12a99654ca78466fba7c73c72eb4fa35",
      "DevName": "VictoryPose_Nomad_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200032
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_Psychopomp_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200033
    },
    {
      "LocalizedName": "e9513b7e5be64a7e95e604a9e7838caf",
      "DevName": "VictoryPose_Psychopomp_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200034
    },
    {
      "LocalizedName": "a9a866c0adad41d681650962d2b21eea",
      "DevName": "VictoryPose_Psychopomp_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200035
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_Ranid_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200036
    },
    {
      "LocalizedName": "918f19ee124c4b309ee272bf19d26b4c",
      "DevName": "VictoryPose_Ranid_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200037
    },
    {
      "LocalizedName": "5177b26a752a42169fef9b1333364f14",
      "DevName": "VictoryPose_Ranid_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200038
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_Ravener_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200039
    },
    {
      "LocalizedName": "e5d5796803714e1495c42ce00b5f18db",
      "DevName": "VictoryPose_Ravener_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200040
    },
    {
      "LocalizedName": "9809f32d59464bf293de22c64fafae6b",
      "DevName": "VictoryPose_Ravener_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200041
    },
    {
      "LocalizedName": "ff38842bf0464bd2b71164b8e733beab",
      "DevName": "VictoryPose_Seeker_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200042
    },
    {
      "LocalizedName": "c1151b17a3954f4084cbea15b7fc6f7f",
      "DevName": "VictoryPose_Seeker_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200043
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_Spearmaster_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200044
    },
    {
      "LocalizedName": "6b87a2af8a1d49d19e5e8121b4052298",
      "DevName": "VictoryPose_Spearmaster_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200045
    },
    {
      "LocalizedName": "8daacd1e6c3646088c2fb9d3c2c92ee3",
      "DevName": "VictoryPose_Spearmaster_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200048
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_Vanguard_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200049
    },
    {
      "LocalizedName": "39ec355b37d44a098016007671871212",
      "DevName": "VictoryPose_Vanguard_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200050
    },
    {
      "LocalizedName": "878791f62b0a4df5bac8bf0d246eddcf",
      "DevName": "VictoryPose_Vanguard_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200051
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_Seeker_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200056
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_Harbinger_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200057
    },
    {
      "LocalizedName": "5b52e7978413421e94aa2b17da4efff5",
      "DevName": "VictoryPose_Harbinger_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200058
    },
    {
      "LocalizedName": "e34befca1e10419e9fc7b0642c32de68",
      "DevName": "VictoryPose_Harbinger_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200059
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_Stormcaller_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200062
    },
    {
      "LocalizedName": "e53e77085327416a9ac5d819c1423db9",
      "DevName": "VictoryPose_Stormcaller_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200063
    },
    {
      "LocalizedName": "fbdddaa638f7407a9f820a636a5a581b",
      "DevName": "VictoryPose_Stormcaller_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200064
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_Bloodpriest_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200065
    },
    {
      "LocalizedName": "61d2f8c6bac348c591c608765507dade",
      "DevName": "VictoryPose_BloodPriest_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200066
    },
    {
      "LocalizedName": "339dfad54cb74acdb4624b6bd2c338b3",
      "DevName": "VictoryPose_BloodPriest_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200067
    },
    {
      "LocalizedName": "e4c7ebda69044645be94e041a08e6a8c",
      "DevName": "VictoryPose_Swordmaster_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200069
    },
    {
      "LocalizedName": "2969bb604eb645aa8a9f14f69b2706e4",
      "DevName": "VictoryPose_Swordmaster_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200070
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_Swordmaster_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200071
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_Druid_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200072
    },
    {
      "LocalizedName": "951ef2826b5d4d86a7944e4f1234e97f",
      "DevName": "VictoryPose_Druid_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200073
    },
    {
      "LocalizedName": "a2b4c0a51da541199789a7e34b5a5f05",
      "DevName": "VictoryPose_Druid_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200074
    },
    {
      "LocalizedName": "9516cce9bb7a495e9ff54a865ebb24b0",
      "DevName": "VictoryPose_Vanguard_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200076
    },
    {
      "LocalizedName": "583a54ad08db4d83b2987a6cba1e61f8",
      "DevName": "VictoryPose_Vanguard_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200077
    },
    {
      "LocalizedName": "fb274f681887491082c14223231dcde4",
      "DevName": "VictoryPose_Swordmaster_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200078
    },
    {
      "LocalizedName": "341ae27954e94d75a91759b953efb2b2",
      "DevName": "VictoryPose_Swordmaster_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200079
    },
    {
      "LocalizedName": "ab3580421b5f42fa9546fa5d9b49c429",
      "DevName": "VictoryPose_Ranid_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200080
    },
    {
      "LocalizedName": "f5d8e5e283a840feac69233293a398bc",
      "DevName": "VictoryPose_Engineer_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200081
    },
    {
      "LocalizedName": "ac1b0d648a874d8a967df3355e66b4ed",
      "DevName": "VictoryPose_Engineer_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200082
    },
    {
      "LocalizedName": "ec632f6b89d24e399f143b00cd38ab35",
      "DevName": "VictoryPose_Igniter_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200083
    },
    {
      "LocalizedName": "3e4f8dbf826b4be982b66f53344a338d",
      "DevName": "VictoryPose_Igniter_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200084
    },
    {
      "LocalizedName": "54b818f1245e42eca842ac6b86b42d16",
      "DevName": "VictoryPose_Alchemist_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200085
    },
    {
      "LocalizedName": "a2aaaf3bef4343529fea84fa1675afe9",
      "DevName": "VictoryPose_Alchemist_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200086
    },
    {
      "LocalizedName": "d22cd0a4764241519e39a7e126cd94ac",
      "DevName": "VictoryPose_Gunner_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200087
    },
    {
      "LocalizedName": "090bf958e0204c42b23cf38f44af0e30",
      "DevName": "VictoryPose_Gunner_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200088
    },
    {
      "LocalizedName": "97162c3283be4c698412c4ee4843b1e1",
      "DevName": "VictoryPose_Inhibitor_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200089
    },
    {
      "LocalizedName": "685e13d246b644c3bb5fd6671da201dd",
      "DevName": "VictoryPose_Inquisitor_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200090
    },
    {
      "LocalizedName": "2dccb3e8186c4a99ada48bd6e01f7ba5",
      "DevName": "VictoryPose_Inquisitor_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200091
    },
    {
      "LocalizedName": "5fa13134182f42269ab74fcfbbfe5fd8",
      "DevName": "VictoryPose_Glutton_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200092
    },
    {
      "LocalizedName": "ecdd9c1e41b94c2596349c18832383d8",
      "DevName": "VictoryPose_Glutton_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200093
    },
    {
      "LocalizedName": "8a6bf47677844014b43b3963f4a870ce",
      "DevName": "VictoryPose_Druid_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200094
    },
    {
      "LocalizedName": "5bbd25bd1a644f0a84cada53c233a89c",
      "DevName": "VictoryPose_Druid_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200095
    },
    {
      "LocalizedName": "cc8902a3f68842ec8dc3cbaaafdd4175",
      "DevName": "VictoryPose_Ranid_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200096
    },
    {
      "LocalizedName": "6d70d40e1fa14db1b7d59f6107b49b2f",
      "DevName": "VictoryPose_Ravener_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200097
    },
    {
      "LocalizedName": "929a53a0eb8944e1a7c7d117ab0e98c4",
      "DevName": "VictoryPose_Ravener_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200098
    },
    {
      "LocalizedName": "c9e95d2f6099429882102617aee4fa01",
      "DevName": "VictoryPose_Seeker_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200099
    },
    {
      "LocalizedName": "03bc5b2ac1804f2ca529e9007a0b1f8e",
      "DevName": "VictoryPose_Seeker_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200100
    },
    {
      "LocalizedName": "c0d38bf186694354a05630992f097c7d",
      "DevName": "VictoryPose_Herald_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200101
    },
    {
      "LocalizedName": "75356f28f6b64b7e989314a9996041fa",
      "DevName": "VictoryPose_Herald_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200102
    },
    {
      "LocalizedName": "8f104a83f10c4e3696744f54dd05a9ea",
      "DevName": "VictoryPose_BloodPriest_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200103
    },
    {
      "LocalizedName": "50e207e1173e4987a314272673672386",
      "DevName": "VictoryPose_BloodPriest_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200104
    },
    {
      "LocalizedName": "507c020eade042e0a24d3f0bcafff35c",
      "DevName": "VictoryPose_Psychopomp_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200105
    },
    {
      "LocalizedName": "2f8ca90848074907b67d40e8ae0b7f16",
      "DevName": "VictoryPose_Psychopomp_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200106
    },
    {
      "LocalizedName": "b1cd024a01514543b9798f71784d1f42",
      "DevName": "VictoryPose_Harbinger_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200107
    },
    {
      "LocalizedName": "945e62d93cf547358406ec58433dfe3a",
      "DevName": "VictoryPose_Harbinger_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200108
    },
    {
      "LocalizedName": "8cd966314f3d4b0b8786ad51754153e2",
      "DevName": "VictoryPose_Spearmaster_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200109
    },
    {
      "LocalizedName": "0877fc1a989b44309c38b4566be4fda6",
      "DevName": "VictoryPose_Spearmaster_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200110
    },
    {
      "LocalizedName": "352d700f981241deb74fb99f4ca4e8ab",
      "DevName": "VictoryPose_Astronomer_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200111
    },
    {
      "LocalizedName": "7fc88dcbd7f3483789a5e1c84eb67be2",
      "DevName": "VictoryPose_Astronomer_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200112
    },
    {
      "LocalizedName": "c91e24bad802456a9ad3b073386ce983",
      "DevName": "VictoryPose_Nomad_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200113
    },
    {
      "LocalizedName": "3873f9043ff448c4a4eb4b30dcdd025d",
      "DevName": "VictoryPose_Nomad_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200114
    },
    {
      "LocalizedName": "916e0206da48432b9821b097a58f7ed9",
      "DevName": "VictoryPose_Inhibitor_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200115
    },
    {
      "LocalizedName": "22b50cd9150c4780b54d20f43f5c4e37",
      "DevName": "VictoryPose_Stormcaller_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200116
    },
    {
      "LocalizedName": "357d32a34e804b408b81706ada0537f3",
      "DevName": "VictoryPose_Stormcaller_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200117
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_MetalWarden_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200118
    },
    {
      "LocalizedName": "fe8f948a745d45adb5cffd09ce1574c5",
      "DevName": "VictoryPose_MetalWarden_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200119
    },
    {
      "LocalizedName": "d912daab673d4507a0b6909c160923c4",
      "DevName": "VictoryPose_MetalWarden_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200120
    },
    {
      "LocalizedName": "51173b7597544cd38d3c63e9eff0a435",
      "DevName": "VictoryPose_MetalWarden_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200121
    },
    {
      "LocalizedName": "1117d8d9d5d04d868fc190ec37582c73",
      "DevName": "VictoryPose_MetalWarden_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200122
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_Thorn_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200124
    },
    {
      "LocalizedName": "de506608c82e4530b1de75b6ab9377a9",
      "DevName": "VictoryPose_Thorn_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200125
    },
    {
      "LocalizedName": "d0cb38ef3ba646b3aa4aea51ebb32c35",
      "DevName": "VictoryPose_Thorn_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200126
    },
    {
      "LocalizedName": "80a88b7d9bf048bd88e9ad5208e2eb22",
      "DevName": "VictoryPose_Thorn_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200128
    },
    {
      "LocalizedName": "62704d63a9524f72a03f46bee73e338e",
      "DevName": "VictoryPose_Thorn_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200129
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_MirrorMage_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200130
    },
    {
      "LocalizedName": "5caf1056bc4e4c15b3332b9c1059541d",
      "DevName": "VictoryPose_MirrorMage_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200131
    },
    {
      "LocalizedName": "cf1027936559410a8a61d0b7db483c22",
      "DevName": "VictoryPose_MirrorMage_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200132
    },
    {
      "LocalizedName": "4f0382fc90a147a880ccdbac11d71576",
      "DevName": "VictoryPose_MirrorMage_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200133
    },
    {
      "LocalizedName": "f25939eb5d314a1b8dabb39d31c1baef",
      "DevName": "VictoryPose_MirrorMage_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200134
    },
    {
      "LocalizedName": "bff4b582b04f413787df40484c32d335",
      "DevName": "VictoryPose_Igniter_Twitch01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200135
    },
    {
      "LocalizedName": "95e9f0bc31a848669a823618cf109c11",
      "DevName": "VictoryPose_Spearmaster_Prehistoric01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200136
    },
    {
      "LocalizedName": "f7699aec8cfc4fee9652e2bc23ba8848",
      "DevName": "VictoryPose_Vanguard_Prehistoric01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200137
    },
    {
      "LocalizedName": "0e1e7754100f4b5b89053ae4004f4aa5",
      "DevName": "VictoryPose_Stormcaller_Prehistoric01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200138
    },
    {
      "LocalizedName": "6d91132a6c0748638759f4d73bf6d869",
      "DevName": "VictoryPose_Seeker_Prehistoric01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200139
    },
    {
      "LocalizedName": "e9a0ab38502f4db094a1fb1cabe14f35",
      "DevName": "VictoryPose_Ranid_Prehistoric01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200140
    },
    {
      "LocalizedName": "414227e7104f417a8fc5ce9f464cd9ea",
      "DevName": "VictoryPose_Inquisitor_Prehistoric01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200141
    },
    {
      "LocalizedName": "42e831162569421db7b1fc0ea20f293e",
      "DevName": "VictoryPose_Herald_Prehistoric01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200142
    },
    {
      "LocalizedName": "a371c9802dab44b7bc232de12affed77",
      "DevName": "VictoryPose_Nomad_Prehistoric01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200143
    },
    {
      "LocalizedName": "df59225d131f41a9967d54baf694f7af",
      "DevName": "VictoryPose_Swordmaster_Prehistoric01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200144
    },
    {
      "LocalizedName": "ef7643ffb3704849afedda9ee4502ebc",
      "DevName": "VictoryPose_BloodPriest_Prehistoric01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200145
    },
    {
      "LocalizedName": "195e1b24a6e44afa9982e605bbd93797",
      "DevName": "VictoryPose_FrostMage_01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200146
    },
    {
      "LocalizedName": "778d3cb4a72a4e2e8de0492f4176db4a",
      "DevName": "VictoryPose_FrostMage_02",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200147
    },
    {
      "LocalizedName": "949ea1c010df407b8a55ee72f62a2666",
      "DevName": "VictoryPose_FrostMage_03",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200148
    },
    {
      "LocalizedName": "c08fdf8f4c10424ca3ee6dd91e367d83",
      "DevName": "VictoryPose_FrostMage_04",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200149
    },
    {
      "LocalizedName": "91f774938b5c448fb994a440b36c3b3f",
      "DevName": "VictoryPose_FrostMage_00",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200150
    },
    {
      "LocalizedName": "561343b301f549619b23208ffb4eb1ce",
      "DevName": "VictoryPose_Igniter_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200151
    },
    {
      "LocalizedName": "0e9907d4d8e0417d9632e77882c1c2b8",
      "DevName": "VictoryPose_Alchemist_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200152
    },
    {
      "LocalizedName": "13b802aca61145f198e43b5cf0d6ad35",
      "DevName": "VictoryPose_Vanguard_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200153
    },
    {
      "LocalizedName": "c6d1449985044504863a7914f206baad",
      "DevName": "VictoryPose_Druid_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200154
    },
    {
      "LocalizedName": "b22982e5a9684f85ab389d19cd5002ba",
      "DevName": "VictoryPose_Engineer_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200155
    },
    {
      "LocalizedName": "c821e19902704e1daea6ed5c2698cf5e",
      "DevName": "VictoryPose_Thorn_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200156
    },
    {
      "LocalizedName": "88e451aacfb64506a52d8c336959b784",
      "DevName": "VictoryPose_Harbinger_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200157
    },
    {
      "LocalizedName": "d885471898ef47e9becc6322f1abe0b3",
      "DevName": "VictoryPose_Stormcaller_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200158
    },
    {
      "LocalizedName": "20b9605e1b364fe28a4765af1af88485",
      "DevName": "VictoryPose_Ravener_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200159
    },
    {
      "LocalizedName": "d3cd92386f44402fb4014b1074e58680",
      "DevName": "VictoryPose_Inquisitor_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200160
    },
    {
      "LocalizedName": "a0ddb890449f47fb98b643f36c0014f2",
      "DevName": "VictoryPose_Ranid_05",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200161
    },
    {
      "LocalizedName": "45764bef78e54b8aa0bb938b85aa64d4",
      "DevName": "VictoryPose_Astronomer_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200163
    },
    {
      "LocalizedName": "82b72bdf35984e1d8cd8213caec2f9af",
      "DevName": "VictoryPose_Bloodpriest_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200164
    },
    {
      "LocalizedName": "5fd875ab38ec4ae49536d48e7456e136",
      "DevName": "VictoryPose_FrostMage_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200165
    },
    {
      "LocalizedName": "6b18e9643e5d4101b7f77c35b29e854b",
      "DevName": "VictoryPose_Glutton_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200166
    },
    {
      "LocalizedName": "f41f4565d60d46bba9b6adc45ef92213",
      "DevName": "VictoryPose_Gunner_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200167
    },
    {
      "LocalizedName": "98903e9e7bd447cd9a48bef050052c69",
      "DevName": "VictoryPose_MetalWarden_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200168
    },
    {
      "LocalizedName": "a9ac4c78a83a4fd281807494b6fce1f4",
      "DevName": "VictoryPose_Nomad_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200169
    },
    {
      "LocalizedName": "deaa969c03134ecea63e902e165e957c",
      "DevName": "VictoryPose_PsychoPomp_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200170
    },
    {
      "LocalizedName": "7fa7d346a6184a21b4a0951bfdea7cc8",
      "DevName": "VictoryPose_Ranid_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200171
    },
    {
      "LocalizedName": "12d029d3293849ada0469f18410dfe0a",
      "DevName": "VictoryPose_Seeker_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200172
    },
    {
      "LocalizedName": "c096b28ad1ef47dfa329e1d6f0e79325",
      "DevName": "VictoryPose_Spearmaster_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200173
    },
    {
      "LocalizedName": "a5cdca7e62184b128e58d029ddbc78de",
      "DevName": "VictoryPose_Swordmaster_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200174
    },
    {
      "LocalizedName": "25f4e50e933e4e95863ee03c4780ed82",
      "DevName": "VictoryPose_Herald_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200175
    },
    {
      "LocalizedName": "89cf7f746e1341269c2dc1e972ea4f80",
      "DevName": "VictoryPose_Inhibitor_Winter01",
      "IdRangeName": "VictoryPoseEnum",
      "StackableRangeName": "VictoryPoses",
      "StackableId": 200176
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_Alchemist_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300001
    },
    {
      "LocalizedName": "c0acbba4df5a40638e2cf088a7daaad4",
      "DevName": "Outfit_Alchemist_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300002
    },
    {
      "LocalizedName": "ee5a822fb79144a1a88e053e055c3900",
      "DevName": "Outfit_Alchemist_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300003
    },
    {
      "LocalizedName": "320288dab51f4402885fa85fa68eb535",
      "DevName": "Outfit_Alchemist_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300004
    },
    {
      "LocalizedName": "00caeeb0d42e4c77becd566a4779e6da",
      "DevName": "Outfit_Alchemist_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300005
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_Astronomer_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300006
    },
    {
      "LocalizedName": "244cc76c333b4f8696a7b9aa66ad2507",
      "DevName": "Outfit_Astronomer_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300007
    },
    {
      "LocalizedName": "8387301c6327479fa774c0ba3b534b32",
      "DevName": "Outfit_Astronomer_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300008
    },
    {
      "LocalizedName": "e6a4fe2eaedf430ab3f777a4d9975a72",
      "DevName": "Outfit_Astronomer_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300009
    },
    {
      "LocalizedName": "950a72755c1d44e387194394d146dc93",
      "DevName": "Outfit_Astronomer_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300010
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_BloodPriest_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300011
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_Engineer_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300012
    },
    {
      "LocalizedName": "cc2e0630a92243e6979a4d40c31767eb",
      "DevName": "Outfit_Engineer_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300013
    },
    {
      "LocalizedName": "9f4f2d1314f749eca6e6cb0da51dbdd3",
      "DevName": "Outfit_Engineer_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300014
    },
    {
      "LocalizedName": "384a0f480e1e41509ebf8638d04b89e9",
      "DevName": "Outfit_Engineer_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300015
    },
    {
      "LocalizedName": "809df513f68b465c9192ea7366ca75d4",
      "DevName": "Outfit_Engineer_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300016
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_Glutton_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300017
    },
    {
      "LocalizedName": "1e29ab4319654936ab4add77b3c61e41",
      "DevName": "Outfit_Glutton_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300018
    },
    {
      "LocalizedName": "c3732eac021c4be38ac5fb849472668a",
      "DevName": "Outfit_Glutton_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300019
    },
    {
      "LocalizedName": "511737d97c714e50b54c097ee3ffdf44",
      "DevName": "Outfit_Glutton_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300020
    },
    {
      "LocalizedName": "dbbda84aff09403e8f58737fafd57956",
      "DevName": "Outfit_Glutton_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300021
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_Gunner_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300022
    },
    {
      "LocalizedName": "6e4afed2d28a460699b03e0320ff21f9",
      "DevName": "Outfit_Gunner_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300023
    },
    {
      "LocalizedName": "544a6f2fc3e542fc93f5baf19b86751b",
      "DevName": "Outfit_Gunner_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300024
    },
    {
      "LocalizedName": "7dbab3a33aa045a7a71a8f5ba1ff235d",
      "DevName": "Outfit_Gunner_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300025
    },
    {
      "LocalizedName": "357a8fe4fdad465bbecaa59a2aec1167",
      "DevName": "Outfit_Gunner_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300026
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_Harbinger_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300027
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_Herald_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300028
    },
    {
      "LocalizedName": "b3ff522c34df4b6596c84e312d2f9089",
      "DevName": "Outfit_Herald_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300029
    },
    {
      "LocalizedName": "6fd9f7df715c41f9b2f5c7268160d8bd",
      "DevName": "Outfit_Herald_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300030
    },
    {
      "LocalizedName": "f96cc91a0a674d608d0ebc0fde5dd2eb",
      "DevName": "Outfit_Herald_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300031
    },
    {
      "LocalizedName": "cd7e4ec0f2434a2083d750b36433e038",
      "DevName": "Outfit_Herald_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300032
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_Igniter_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300033
    },
    {
      "LocalizedName": "5c5c750897df414d9ccbd93256e28b70",
      "DevName": "Outfit_Igniter_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300034
    },
    {
      "LocalizedName": "e0a11a23318746389303215249ec2294",
      "DevName": "Outfit_Igniter_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300035
    },
    {
      "LocalizedName": "777409f6b2c64f2ba378f0e24928a5ef",
      "DevName": "Outfit_Igniter_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300036
    },
    {
      "LocalizedName": "a2d7213ffbd448e8886a2495e2ac3ae7",
      "DevName": "Outfit_Igniter_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300037
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_Inhibitor_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300038
    },
    {
      "LocalizedName": "e8944003b2c3431286fb444338456988",
      "DevName": "Outfit_Inhibitor_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300039
    },
    {
      "LocalizedName": "e4e03d42128042fc9bfe8570151071a6",
      "DevName": "Outfit_Inhibitor_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300040
    },
    {
      "LocalizedName": "bea9bf0f36ff4822a94baba6c0cfaf04",
      "DevName": "Outfit_Inhibitor_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300041
    },
    {
      "LocalizedName": "0aaccbaca0f048eab26109d81db5592e",
      "DevName": "Outfit_Inhibitor_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300042
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_Inquisitor_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300043
    },
    {
      "LocalizedName": "a2274822b5a245e8a76938c5d23218cd",
      "DevName": "Outfit_Inquisitor_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300044
    },
    {
      "LocalizedName": "14c31557c9ba42fb943006dac3eb6f51",
      "DevName": "Outfit_Inquisitor_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300045
    },
    {
      "LocalizedName": "e66510bb0cb44b3bb3910b2a81821045",
      "DevName": "Outfit_Inquisitor_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300046
    },
    {
      "LocalizedName": "788f347cf6f24799a1e4111c1268dbd0",
      "DevName": "Outfit_Inquisitor_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300047
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_Nomad_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300048
    },
    {
      "LocalizedName": "213cc845653246e2920d7dc15a209efc",
      "DevName": "Outfit_Nomad_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300049
    },
    {
      "LocalizedName": "105e3823129c4fe597779f761cc60181",
      "DevName": "Outfit_Nomad_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300050
    },
    {
      "LocalizedName": "85d068c9bf6a4a10b5ad72139b268fd6",
      "DevName": "Outfit_Nomad_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300051
    },
    {
      "LocalizedName": "427bfa918d35445a96792ca8fb8dd5ea",
      "DevName": "Outfit_Nomad_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300052
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_Psychopomp_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300053
    },
    {
      "LocalizedName": "b0dcb6ed6ef244dfbb233b158ac9c930",
      "DevName": "Outfit_Psychopomp_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300054
    },
    {
      "LocalizedName": "ce16eb39067b4166b47a3203a94bdb28",
      "DevName": "Outfit_Psychopomp_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300055
    },
    {
      "LocalizedName": "646f28598acb4673837c93bac4f6961b",
      "DevName": "Outfit_Psychopomp_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300056
    },
    {
      "LocalizedName": "6ea2d05e61444471ad306271a58ea260",
      "DevName": "Outfit_Psychopomp_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300057
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_Ranid_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300058
    },
    {
      "LocalizedName": "cd953f347c4e45fab8b8827cdd4993c1",
      "DevName": "Outfit_Ranid_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300059
    },
    {
      "LocalizedName": "05e60ef4388f48e480894288870c3f66",
      "DevName": "Outfit_Ranid_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300060
    },
    {
      "LocalizedName": "e763c9453d004546a134faf7f1a86447",
      "DevName": "Outfit_Ranid_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300061
    },
    {
      "LocalizedName": "6782e948b0804955b3820606841044d7",
      "DevName": "Outfit_Ranid_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300062
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_Ravener_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300063
    },
    {
      "LocalizedName": "847ca5d96cdc4ccbb389311ccf95967f",
      "DevName": "Outfit_Ravener_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300064
    },
    {
      "LocalizedName": "d61019b5fb914fcf9d5800d5307a1b09",
      "DevName": "Outfit_Ravener_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300065
    },
    {
      "LocalizedName": "f11ee2571c8142899b7807579d6d76b1",
      "DevName": "Outfit_Ravener_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300066
    },
    {
      "LocalizedName": "626b7a92c8d7423dab067e1939703f52",
      "DevName": "Outfit_Ravener_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300067
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_Seeker_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300068
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_Spearmaster_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300069
    },
    {
      "LocalizedName": "f9aff0469f1b46aca95d9b62b3ecc60c",
      "DevName": "Outfit_Spearmaster_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300070
    },
    {
      "LocalizedName": "89ff051ba9ea4e7fbceeb47c276828a0",
      "DevName": "Outfit_Spearmaster_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300071
    },
    {
      "LocalizedName": "80d21670f34e4754b098e90e07be5d14",
      "DevName": "Outfit_Spearmaster_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300072
    },
    {
      "LocalizedName": "c57c327902bb45acbf38ddee036e1e27",
      "DevName": "Outfit_Spearmaster_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300073
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_Stormcaller_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300074
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_Vanguard_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300075
    },
    {
      "LocalizedName": "26a6e955704b4badb81086b094f1007a",
      "DevName": "Outfit_Vanguard_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300076
    },
    {
      "LocalizedName": "2e36e2d7d68841518118c7fdbb8186af",
      "DevName": "Outfit_Vanguard_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300077
    },
    {
      "LocalizedName": "f96e6713682f45acacc88f9353d6eec6",
      "DevName": "Outfit_Vanguard_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300078
    },
    {
      "LocalizedName": "49674a1ba5a64ccf8d03a230e11b78d6",
      "DevName": "Outfit_Vanguard_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300079
    },
    {
      "LocalizedName": "d8f7ebb4d9b846189156d2b82465b86e",
      "DevName": "Outfit_Seeker_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300080
    },
    {
      "LocalizedName": "2c731cce8a674be184a18906a2cb7fc2",
      "DevName": "Outfit_Seeker_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300081
    },
    {
      "LocalizedName": "d7fec287bda54276ad9e9b0c33e3d36b",
      "DevName": "Outfit_Seeker_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300082
    },
    {
      "LocalizedName": "c7c6ac7620a1463aa26691f99b9e4472",
      "DevName": "Outfit_Seeker_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300083
    },
    {
      "LocalizedName": "c7740de9e68e4a70a19f37473976271d",
      "DevName": "Outfit_Harbinger_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300084
    },
    {
      "LocalizedName": "defb0688ca6146308f3f17f612fe38e0",
      "DevName": "Outfit_Harbinger_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300085
    },
    {
      "LocalizedName": "3ad3edf6014f4ad38a924a8be4304e64",
      "DevName": "Outfit_Harbinger_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300086
    },
    {
      "LocalizedName": "2a0556e8a5d043b7af9d479a77559c8e",
      "DevName": "Outfit_Harbinger_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300087
    },
    {
      "LocalizedName": "cfa34387d0b2443fb555b4c0b2a829e1",
      "DevName": "Outfit_Alchemist_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300089
    },
    {
      "LocalizedName": "0f542eaf41594b8da7f2c3e28b8ed21a",
      "DevName": "Outfit_Alchemist_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300090
    },
    {
      "LocalizedName": "58e027b20f244099b53e1ba4c5725594",
      "DevName": "Outfit_Astronomer_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300092
    },
    {
      "LocalizedName": "145595326a2945e7a747280137807efe",
      "DevName": "Outfit_Stormcaller_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300093
    },
    {
      "LocalizedName": "e8d4138bb8564a93bbf3b0fc85955e50",
      "DevName": "Outfit_Stormcaller_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300094
    },
    {
      "LocalizedName": "7f779b26fee845da824e0fc624fc7981",
      "DevName": "Outfit_Stormcaller_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300095
    },
    {
      "LocalizedName": "497a6481558644818c95df7032360d96",
      "DevName": "Outfit_Stormcaller_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300096
    },
    {
      "LocalizedName": "1d2d50a1c68b457f9b0b0056ef07a3d5",
      "DevName": "Outfit_Bloodpriest_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300097
    },
    {
      "LocalizedName": "6580bf7253144934b883b7244c05e700",
      "DevName": "Outfit_Bloodpriest_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300098
    },
    {
      "LocalizedName": "dbcbb0ad41c641908f55bc4d0da30fc2",
      "DevName": "Outfit_Bloodpriest_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300099
    },
    {
      "LocalizedName": "6b4fd00c71514f139dff5c83d284a411",
      "DevName": "Outfit_Bloodpriest_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300100
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_Swordmaster_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300105
    },
    {
      "LocalizedName": "fc81839b36cd4a8cb58a34f0ec9d210e",
      "DevName": "Outfit_Astronomer_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300106
    },
    {
      "LocalizedName": "03a07efc77644c9f9fd25b2696015fad",
      "DevName": "Outfit_Psychopomp_Winter01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300107
    },
    {
      "LocalizedName": "cb89822de64547f4be1b013c1d9f57eb",
      "DevName": "Outfit_Stormcaller_Winter01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300108
    },
    {
      "LocalizedName": "bb3b93e84e5a4115a4bce7ba3ef3d399",
      "DevName": "Outfit_Inhibitor_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300109
    },
    {
      "LocalizedName": "09a72d750cd74c308593ecc2ad296453",
      "DevName": "Outfit_Swordmaster_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300110
    },
    {
      "LocalizedName": "666ec789da214e46a349cbb8a84301cd",
      "DevName": "Outfit_Swordmaster_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300111
    },
    {
      "LocalizedName": "0d42b6d2e7aa44bfb2c049d3ee8d145f",
      "DevName": "Outfit_Swordmaster_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300112
    },
    {
      "LocalizedName": "c282bf9f3bb0446f86a28ebe7fa47275",
      "DevName": "Outfit_Swordmaster_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300113
    },
    {
      "LocalizedName": "c9ff051b9e0541db82f0abfdf8b7da39",
      "DevName": "Outfit_Herald_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300114
    },
    {
      "LocalizedName": "2919b437053248b5b554385537dff2a7",
      "DevName": "Outfit_Engineer_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300115
    },
    {
      "LocalizedName": "43ab5cd1a4434ccaa1c74bc2a6a766ab",
      "DevName": "Outfit_Engineer_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300116
    },
    {
      "LocalizedName": "ec95405555494d12961f884245411f09",
      "DevName": "Outfit_Herald_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300117
    },
    {
      "LocalizedName": "459d442556ed4a2a84694ea155cebe5e",
      "DevName": "Outfit_Psychopomp_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300118
    },
    {
      "LocalizedName": "3b412f1801834ba98d8d83b5c1a8b960",
      "DevName": "Outfit_Psychopomp_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300119
    },
    {
      "LocalizedName": "10664af61382402798fadd46adb27b64",
      "DevName": "Outfit_Inhibitor_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300120
    },
    {
      "LocalizedName": "8bc9034e54d34d34a0f96e3b58eee672",
      "DevName": "Outfit_Inhibitor_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300121
    },
    {
      "LocalizedName": "656d2964bcae46c98fd6b9bd70b903ca",
      "DevName": "Outfit_Glutton_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300122
    },
    {
      "LocalizedName": "b7d4f364e0e34b3c83ff20e415dffb64",
      "DevName": "Outfit_Inquisitor_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300123
    },
    {
      "LocalizedName": "911a679babda45329ab4bbee1ba925a5",
      "DevName": "Outfit_Inquisitor_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300124
    },
    {
      "LocalizedName": "e9abff5e8d7940229746ffa45d9140e6",
      "DevName": "Outfit_Spearmaster_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300125
    },
    {
      "LocalizedName": "305cda262fb94d21b66a8d992199466f",
      "DevName": "Outfit_Vanguard_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300126
    },
    {
      "LocalizedName": "e9f6e3ad46b645298289a0e64dbdd889",
      "DevName": "Outfit_Spearmaster_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300128
    },
    {
      "LocalizedName": "583883b86bd045eca1a1c45389f2942c",
      "DevName": "Outfit_Gunner_Classic_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300129
    },
    {
      "LocalizedName": "720c16c1436b4417854b18331ad6319f",
      "DevName": "Outfit_Ranid_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300130
    },
    {
      "LocalizedName": "3f43f054a6dd40218ea645ffcdae41cb",
      "DevName": "Outfit_Gunner_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300131
    },
    {
      "LocalizedName": "fec6e4e893004cff8331134f49a50daf",
      "DevName": "Outfit_Harbinger_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300132
    },
    {
      "LocalizedName": "76f2e7f98255441aab72e4de8eea74d4",
      "DevName": "Outfit_Nomad_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300133
    },
    {
      "LocalizedName": "17339a022ae44a818237ed3ca0ad210f",
      "DevName": "Outfit_Ravener_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300134
    },
    {
      "LocalizedName": "1226f2b53059430b913c30bc29d951b9",
      "DevName": "Outfit_Igniter_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300135
    },
    {
      "LocalizedName": "555170d4410a4786b99df61db27c9d56",
      "DevName": "Outfit_Stormcaller_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300136
    },
    {
      "LocalizedName": "7f0ae89a2cc44ff7a940b07ac6b662db",
      "DevName": "Outfit_Swordmaster_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300137
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_Druid_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300138
    },
    {
      "LocalizedName": "2f6e2f65caaf4d1d98c415587982886b",
      "DevName": "Outfit_Druid_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300139
    },
    {
      "LocalizedName": "012ef37b2aa448faaf37ae3265459ce8",
      "DevName": "Outfit_Druid_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300140
    },
    {
      "LocalizedName": "e40d5bc13a9d4266a5729a177b7c1219",
      "DevName": "Outfit_Druid_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300141
    },
    {
      "LocalizedName": "5b15c6cbf0214f3eb69dc45858bacbbb",
      "DevName": "Outfit_Druid_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300142
    },
    {
      "LocalizedName": "e08a31ac1286436e9d4faec399e4c8e3",
      "DevName": "Outfit_Druid_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300143
    },
    {
      "LocalizedName": "42ed1e6343b04e1f926ade25e5cc2b89",
      "DevName": "Outfit_Seeker_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300145
    },
    {
      "LocalizedName": "f162515de27145f49cfbd17cb4d2620b",
      "DevName": "Outfit_Vanguard_Prehistoric01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300146
    },
    {
      "LocalizedName": "ccb4db0ece344601935da20b3be2477c",
      "DevName": "Outfit_Alchemist_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300147
    },
    {
      "LocalizedName": "61d81a19a18a458fb5816bce4483c955",
      "DevName": "Outfit_Vanguard_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300148
    },
    {
      "LocalizedName": "e4730ee136db46429274e666c4b36394",
      "DevName": "Outfit_Vanguard_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300149
    },
    {
      "LocalizedName": "70ccda8dd0b4499ca5f258c11a91f4ac",
      "DevName": "Outfit_Ranid_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300150
    },
    {
      "LocalizedName": "a8ca0c669ca3479dae282ad36b2d29d6",
      "DevName": "Outfit_Ranid_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300151
    },
    {
      "LocalizedName": "612d03092aa04802a5dfd9233f333259",
      "DevName": "Outfit_Seeker_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300152
    },
    {
      "LocalizedName": "1391fe05eb6b406f886dde19398741ff",
      "DevName": "Outfit_Seeker_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300153
    },
    {
      "LocalizedName": "4393b0eca9bc431484e7b9df0614c9de",
      "DevName": "Outfit_Ravener_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300154
    },
    {
      "LocalizedName": "cdbc6d43b40a4ee9bd6c59d2778c7827",
      "DevName": "Outfit_Ravener_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300155
    },
    {
      "LocalizedName": "0a9eeeacf5c74a3484905031666a0e35",
      "DevName": "Outfit_Swordmaster_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300156
    },
    {
      "LocalizedName": "882dc4904b4c4c83a5985d030db040a8",
      "DevName": "Outfit_Swordmaster_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300157
    },
    {
      "LocalizedName": "9a85bdd0ed174bc399555bf06fc30f53",
      "DevName": "Outfit_MetalWarden_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300159
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_MetalWarden_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300160
    },
    {
      "LocalizedName": "c65b06cfa76e4e2ca3cbfce71a00b3e2",
      "DevName": "Outfit_BloodPriest_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300161
    },
    {
      "LocalizedName": "fd11974a57da40a2b3886473592060b5",
      "DevName": "Outfit_Psychopomp_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300162
    },
    {
      "LocalizedName": "78bbed7935824a51bd013ec92861cf3e",
      "DevName": "Outfit_Psychopomp_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300163
    },
    {
      "LocalizedName": "e66f7721c38a4d5bbc2b30da4abeb5ff",
      "DevName": "Outfit_Herald_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300164
    },
    {
      "LocalizedName": "1f1da32ee9ea4ced8157b63b5d0c9930",
      "DevName": "Outfit_Herald_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300165
    },
    {
      "LocalizedName": "3e83b351e2c541a7a3873472b097dd7a",
      "DevName": "Outfit_BloodPriest_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300166
    },
    {
      "LocalizedName": "71a0f2cb9510422786adc9f75a2d5361",
      "DevName": "Outfit_BloodPriest_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300167
    },
    {
      "LocalizedName": "0bc9e52124c345cfa380d350ba4bc575",
      "DevName": "Outfit_Harbinger_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300168
    },
    {
      "LocalizedName": "877ef5eda6d54eb083b71702cd3de72e",
      "DevName": "Outfit_Harbinger_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300169
    },
    {
      "LocalizedName": "41fac0ce62574e2e85f56bb2cb98a152",
      "DevName": "Outfit_Igniter_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300170
    },
    {
      "LocalizedName": "38653fd2d2fb45f3bd783006e34256d6",
      "DevName": "Outfit_Igniter_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300171
    },
    {
      "LocalizedName": "37cdb17b2f534b2d866e7b1f49009e90",
      "DevName": "Outfit_Stormcaller_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300172
    },
    {
      "LocalizedName": "3963fd717d56429885384a9c69d2a608",
      "DevName": "Outfit_Stormcaller_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300173
    },
    {
      "LocalizedName": "6a6eb1440741498284f4c84556e9514e",
      "DevName": "Outfit_Spearmaster_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300174
    },
    {
      "LocalizedName": "ca9c18a60a5642a1834c3656324aa255",
      "DevName": "Outfit_Spearmaster_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300175
    },
    {
      "LocalizedName": "3e65b1b06694498b89f18603c71cccc9",
      "DevName": "Outfit_Astronomer_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300176
    },
    {
      "LocalizedName": "d33a194b8b4b483888f5bbfce615a2ab",
      "DevName": "Outfit_Astronomer_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300177
    },
    {
      "LocalizedName": "27f9d5c5cd3540d9be5ac1e1a4f19539",
      "DevName": "Outfit_Inhibitor_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300178
    },
    {
      "LocalizedName": "fbbb8851f78f4322b514c90b90bed0a5",
      "DevName": "Outfit_Inhibitor_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300179
    },
    {
      "LocalizedName": "63efd1812d5f46b48fb1baa956ee0606",
      "DevName": "Outfit_Nomad_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300180
    },
    {
      "LocalizedName": "aad973ac5dde4e87a4fcf7f58196c3e1",
      "DevName": "Outfit_Nomad_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300181
    },
    {
      "LocalizedName": "9b2b5c7109a14bdb811f5461c2149e55",
      "DevName": "Outfit_Alchemist_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300182
    },
    {
      "LocalizedName": "1119a313a7274ee591bc0771d5a3ba6e",
      "DevName": "Outfit_Gunner_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300183
    },
    {
      "LocalizedName": "8ee8e0baa9c94bbab976ad1ea59ef417",
      "DevName": "Outfit_Gunner_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300184
    },
    {
      "LocalizedName": "061fe9a71aff4467b4087a10190d172f",
      "DevName": "Outfit_Engineer_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300185
    },
    {
      "LocalizedName": "e0162050724b4d77ba14782784dba712",
      "DevName": "Outfit_Engineer_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300186
    },
    {
      "LocalizedName": "f8dfde8835e546b89e649fad98377645",
      "DevName": "Outfit_Druid_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300187
    },
    {
      "LocalizedName": "b1f270fc93ff4b8ca1a93ebf6a897d36",
      "DevName": "Outfit_Druid_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300188
    },
    {
      "LocalizedName": "c4f5b3e8459d430582437589bdce7dd4",
      "DevName": "Outfit_Inquisitor_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300189
    },
    {
      "LocalizedName": "8664465ee8a84398ad25213b0261cf01",
      "DevName": "Outfit_Inquisitor_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300190
    },
    {
      "LocalizedName": "713df783946d4c93a9ae07ae557ae874",
      "DevName": "Outfit_Glutton_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300191
    },
    {
      "LocalizedName": "35943f976bd4472c94670fd5770708b8",
      "DevName": "Outfit_Glutton_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300192
    },
    {
      "LocalizedName": "6014d93302cc470d813c96b053dfd20d",
      "DevName": "Outfit_Vanguard_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300193
    },
    {
      "LocalizedName": "2219e41806de4f729d24409505cf0d8c",
      "DevName": "Outfit_Seeker_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300194
    },
    {
      "LocalizedName": "c8dcd4e2a254448086dfcbc710c68b4c",
      "DevName": "Outfit_Swordmaster_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300195
    },
    {
      "LocalizedName": "5b0e27f90e84414a853c9d034cc2715e",
      "DevName": "Outfit_Glutton_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300196
    },
    {
      "LocalizedName": "e4687c349fb24125b5692a6f6e262e64",
      "DevName": "Outfit_Gunner_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300197
    },
    {
      "LocalizedName": "881c2179dc9e40b98e82e2e958b564e5",
      "DevName": "Outfit_Spearmaster_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300199
    },
    {
      "LocalizedName": "6902e8798cd94a4291efe32f7cdafbda",
      "DevName": "Outfit_Druid_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300201
    },
    {
      "LocalizedName": "084143f3baa24079a88ba4c904d8c458",
      "DevName": "Outfit_Herald_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300202
    },
    {
      "LocalizedName": "01248113ccf94ad584041f81c125048a",
      "DevName": "Outfit_Igniter_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300203
    },
    {
      "LocalizedName": "6b47d79d153848fca485bfaf49a7c293",
      "DevName": "Outfit_Igniter_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300204
    },
    {
      "LocalizedName": "99ce0dea373c4df6ab8ab5e344a5c466",
      "DevName": "Outfit_Glutton_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300205
    },
    {
      "LocalizedName": "d9c154c3f90941acbb688adf279fe37e",
      "DevName": "Outfit_Seeker_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300207
    },
    {
      "LocalizedName": "565cc26dc9db442f98a343402fb9a200",
      "DevName": "Outfit_Druid_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300208
    },
    {
      "LocalizedName": "0efd0d6260ad401e98ff98dd936777df",
      "DevName": "Outfit_Ranid_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300209
    },
    {
      "LocalizedName": "a417fb5036614ed18dca1eaed0145254",
      "DevName": "Outfit_Ranid_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300210
    },
    {
      "LocalizedName": "bba635550a4b4be5bab0fdc0e11e3a8b",
      "DevName": "Outfit_Swordmaster_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300211
    },
    {
      "LocalizedName": "f7020424752541698ae239b25253f8e2",
      "DevName": "Outfit_Ravener_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300212
    },
    {
      "LocalizedName": "d6a0e5b416f34b74a36fb131061ee8f8",
      "DevName": "Outfit_Ravener_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300213
    },
    {
      "LocalizedName": "44cac50edaf44d3c8626554c0d7e3bec",
      "DevName": "Outfit_Gunner_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300214
    },
    {
      "LocalizedName": "9e99f88febd7422d9d421859e9e381e8",
      "DevName": "Outfit_Alchemist_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300215
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_Thorn_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300216
    },
    {
      "LocalizedName": "c0a793e00a584290a32af845ddfc8ec0",
      "DevName": "Outfit_Glutton_Halloween01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300217
    },
    {
      "LocalizedName": "640aa4fea26e4570849478eb800297f5",
      "DevName": "Outfit_Gunner_Halloween_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300218
    },
    {
      "LocalizedName": "8778b3af21fb431195332036c347f9d6",
      "DevName": "Outfit_Astronomer_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300219
    },
    {
      "LocalizedName": "644137edd44a41509725c40e26792fee",
      "DevName": "Outfit_Harbinger_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300220
    },
    {
      "LocalizedName": "7a0b5b8f44dc4b31b0d7e33a59407efc",
      "DevName": "Outfit_Harbinger_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300221
    },
    {
      "LocalizedName": "d18935a3356d41a39eadf682660bf559",
      "DevName": "Outfit_Swordmaster_Halloween01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300222
    },
    {
      "LocalizedName": "3ae38f89712e4ae7aef913ef3f754e28",
      "DevName": "Outfit_Inquisitor_Halloween01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300223
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_MirrorMage_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300224
    },
    {
      "LocalizedName": "9fd98d262fde496fbc1881aface4d99c",
      "DevName": "Outfit_BloodPriest_Legendary02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300225
    },
    {
      "LocalizedName": "f358bcf82b514183b98b070583bec9a8",
      "DevName": "Outfit_BloodPriest_Legendary03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300226
    },
    {
      "LocalizedName": "ecd765e8e6f240d8b7952930f7b4b0f2",
      "DevName": "Outfit_Vanguard_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300227
    },
    {
      "LocalizedName": "aa94b39a846c4abfa4d7792bfb1243c2",
      "DevName": "Outfit_Stormcaller_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300228
    },
    {
      "LocalizedName": "bcb190a17ffc41f0a84c18ca14118f66",
      "DevName": "Outfit_Stormcaller_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300229
    },
    {
      "LocalizedName": "28956c76a5014897a4ccdda9b939f3e7",
      "DevName": "Outfit_MetalWarden_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300230
    },
    {
      "LocalizedName": "9d1345bddde34e75831c6cc97509b37f",
      "DevName": "Outfit_MetalWarden_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300231
    },
    {
      "LocalizedName": "0b8f430be6b94d55a13763eb3d8900e5",
      "DevName": "Outfit_MetalWarden_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300232
    },
    {
      "LocalizedName": "2aec2924c46b4e228a77824ac97147a5",
      "DevName": "Outfit_MetalWarden_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300233
    },
    {
      "LocalizedName": "eb0ac379af9441e9912bf31e2aae1c6b",
      "DevName": "Outfit_MetalWarden_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300234
    },
    {
      "LocalizedName": "79239b2969d54ad08e3afb62746d96cd",
      "DevName": "Outfit_MetalWarden_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300235
    },
    {
      "LocalizedName": "aa3f7e7a474d46888531298a9752f1da",
      "DevName": "Outfit_MetalWarden_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300236
    },
    {
      "LocalizedName": "1bd68ca030da4d5889b4ef9fcd04e997",
      "DevName": "Outfit_MetalWarden_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300237
    },
    {
      "LocalizedName": "c3c9f3092b03462eb9fb049815e85eb6",
      "DevName": "Outfit_Nomad_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300238
    },
    {
      "LocalizedName": "463e0e6618bb483091d7ad413ac0f609",
      "DevName": "Outfit_Nomad_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300239
    },
    {
      "LocalizedName": "006de779f02f4988bc7e7b1a8f22955c",
      "DevName": "Outfit_Nomad_Prehistoric01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300240
    },
    {
      "LocalizedName": "22aabd3c40d248bb903dacbb5e1a82d6",
      "DevName": "Outfit_Thorn_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300241
    },
    {
      "LocalizedName": "87fd2f21b3184f7380d44942195c4ba9",
      "DevName": "Outfit_Thorn_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300242
    },
    {
      "LocalizedName": "bafe7a7f8be24bda9c52871aef8cad5a",
      "DevName": "Outfit_Thorn_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300243
    },
    {
      "LocalizedName": "0ecc3c10dc364150a354231f5bf4032e",
      "DevName": "Outfit_Thorn_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300244
    },
    {
      "LocalizedName": "a248a20803274a02b45798954e7cc284",
      "DevName": "Outfit_Thorn_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300245
    },
    {
      "LocalizedName": "c1e16c9f75b04d77b611ab480a638ffd",
      "DevName": "Outfit_Thorn_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300246
    },
    {
      "LocalizedName": "1e695c8546504bdeb73bd2254e2b53b0",
      "DevName": "Outfit_Thorn_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300247
    },
    {
      "LocalizedName": "52eae07805dd4e4cb7dc7baa471f2157",
      "DevName": "Outfit_Thorn_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300248
    },
    {
      "LocalizedName": "5afb7bb7810a45df984c5e06eb433289",
      "DevName": "Outfit_Thorn_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300249
    },
    {
      "LocalizedName": "9e2e7600bc1a4b82bb6e95090528e5f8",
      "DevName": "Outfit_Inquisitor_Prehistoric01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300251
    },
    {
      "LocalizedName": "0af9f718b03743e2ac1d8150579705c3",
      "DevName": "Outfit_Engineer_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300252
    },
    {
      "LocalizedName": "118b3b9b77d946149abd09233a87b7d1",
      "DevName": "Outfit_Gunner_Classic_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300253
    },
    {
      "LocalizedName": "eb216e62a05f4052ab4cac7032683e20",
      "DevName": "Outfit_Gunner_Classic_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300254
    },
    {
      "LocalizedName": "ae19ec38932b46e591ae190cefd1ee58",
      "DevName": "Outfit_Ranid_Winter01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300255
    },
    {
      "LocalizedName": "262f69feefe447f7ab1ba8b1b68fd4fb",
      "DevName": "Outfit_Inquisitor_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300256
    },
    {
      "LocalizedName": "e2a422bda1a04efbb8604744396efa77",
      "DevName": "Outfit_Psychopomp_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300260
    },
    {
      "LocalizedName": "39d256271e16456e8ec352c3cb87d778",
      "DevName": "Outfit_FrostMage_01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300261
    },
    {
      "LocalizedName": "62153c3ca6df41c99a441d45dc6ab97a",
      "DevName": "Outfit_Igniter_Twitch_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300262
    },
    {
      "LocalizedName": "2a1fd797c7724166baa280f74d509e38",
      "DevName": "Outfit_FrostMage_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300263
    },
    {
      "LocalizedName": "d6ca8a8a8a36400fa7037ce7e0cf5bf9",
      "DevName": "Outfit_Ravener_Winter01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300264
    },
    {
      "LocalizedName": "5a600575a495419a8046968e328b7430",
      "DevName": "Outfit_FrostMage_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300265
    },
    {
      "LocalizedName": "ba572431085b43c3bd2995c39bd1e165",
      "DevName": "Outfit_FrostMage_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300266
    },
    {
      "LocalizedName": "11eb073e8701429d9137392864f31b58",
      "DevName": "Outfit_MirrorMage_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300267
    },
    {
      "LocalizedName": "f252ccb502bf40249e2970d2c34e03f1",
      "DevName": "Outfit_MirrorMage_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300268
    },
    {
      "LocalizedName": "6e050902cb8143799bfdaf50f1c49b40",
      "DevName": "Outfit_MirrorMage_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300269
    },
    {
      "LocalizedName": "f36ebfd28f5e44058c1ee5165a48a59c",
      "DevName": "Outfit_MirrorMage_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300270
    },
    {
      "LocalizedName": "9f07b2f9d423493ab6b3390c8a7642e5",
      "DevName": "Outfit_MirrorMage_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300271
    },
    {
      "LocalizedName": "fd6b226e587b4fb9937085c3b9aa96a3",
      "DevName": "Outfit_MirrorMage_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300272
    },
    {
      "LocalizedName": "be1754e023b348319a0060d091482212",
      "DevName": "Outfit_MirrorMage_Legendary01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300273
    },
    {
      "LocalizedName": "7aa24a1c67c44d15a423275a4f694ee8",
      "DevName": "Outfit_MirrorMage_Legendary01_Tex02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300274
    },
    {
      "LocalizedName": "dcdde67c39bd427bafb127bc37995b00",
      "DevName": "Outfit_MirrorMage_Legendary01_Tex03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300275
    },
    {
      "LocalizedName": "458da08ebebc419887c03bdd15a424dd",
      "DevName": "Outfit_FrostMage_02",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300276
    },
    {
      "LocalizedName": "66cfe42b612646bc9630bd9a07c2364d",
      "DevName": "Outfit_FrostMage_03",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300277
    },
    {
      "LocalizedName": "0afb2f17a7ac431082316a803d5cf5e4",
      "DevName": "Outfit_FrostMage_04",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300278
    },
    {
      "LocalizedName": "4c57fb6f3d8543bea115d6f15d80a066",
      "DevName": "Outfit_FrostMage_05",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300279
    },
    {
      "LocalizedName": "393a2ac47ef94a2d968c1a0ac2e1046b",
      "DevName": "Outfit_FrostMage_06",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300280
    },
    {
      "LocalizedName": "049cf980f8344098b42a3edf32ea598a",
      "DevName": "Outfit_FrostMage_07",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300281
    },
    {
      "LocalizedName": "4c96d92d60404e64b70f14ab760c1470",
      "DevName": "Outfit_Herald_Prehistoric01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300282
    },
    {
      "LocalizedName": "dff187e3510d489dbeb6b32805eee378",
      "DevName": "Outfit_Spearmaster_Prehistoric01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300283
    },
    {
      "LocalizedName": "c661e47a1873480e9e2e1e37c79553e7",
      "DevName": "Outfit_Stormcaller_Prehistoric01_Tex01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300284
    },
    {
      "LocalizedName": "005b8b2ab13f4fec97638fdf73084f31",
      "DevName": "Outfit_Druid_Winter01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300285
    },
    {
      "LocalizedName": "ae47e7d372754a24b6582e295243eccd",
      "DevName": "Outfit_Thorn_Winter01",
      "IdRangeName": "OutfitEnum",
      "StackableRangeName": "Outfits",
      "StackableId": 300286
    },
    {
      "LocalizedName": "",
      "DevName": "Wins",
      "IdRangeName": "",
      "StackableRangeName": "Wins",
      "StackableId": 2
    },
    {
      "LocalizedName": "",
      "DevName": "Losses",
      "IdRangeName": "",
      "StackableRangeName": "Losses",
      "StackableId": 3
    },
    {
      "LocalizedName": "",
      "DevName": "GradeScore",
      "IdRangeName": "",
      "StackableRangeName": "GradeScore",
      "StackableId": 4
    },
    {
      "LocalizedName": "",
      "DevName": "VsAIPlayed",
      "IdRangeName": "",
      "StackableRangeName": "VsAIPlayed",
      "StackableId": 56
    },
    {
      "LocalizedName": "14d8c4f5f6be44c0ab67175147624731",
      "DevName": "Map1_Aras",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapWins",
      "Image": "ad956aa9dd4047246840e1767bdd844f",
      "StackableId": 1001
    },
    {
      "LocalizedName": "3b173f7ae55f483e96ca721d3e1e419e",
      "DevName": "Map2_Spirit",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapWins",
      "Image": "eaf526007e4806447a821a4d58fe4f8c",
      "StackableId": 1002
    },
    {
      "LocalizedName": "01f7b4bb8895416199958302f53c04a1",
      "DevName": "Map1_Aras_Night",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapWins",
      "Image": "5e2bbaaef7733904592b2d4d4cf8fce5",
      "StackableId": 1003
    },
    {
      "LocalizedName": "7dd3caa5704a4715b8d7bfdfd500505f",
      "DevName": "Map2_Spirit_Night",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapWins",
      "Image": "e91b212a2d411934795a848d89a2ecac",
      "StackableId": 1004
    },
    {
      "LocalizedName": "7f106a092afb40ddb98f1ab63abe06e0",
      "DevName": "Map3_Cloud",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapWins",
      "Image": "64ac95cd202f9ca499d99e299190c070",
      "StackableId": 1005
    },
    {
      "LocalizedName": "e3446422f2f04ec88a9d07771d15897a",
      "DevName": "Map3_Cloud_Night",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapWins",
      "Image": "2d0079cfb92218240aec73e43b8a6c40",
      "StackableId": 1006
    },
    {
      "LocalizedName": "aaed74e4ec98455badda6927a0d21e04",
      "DevName": "Map4_Fortress",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapWins",
      "Image": "f50f88a811eca0e42b5509ca153e8562",
      "StackableId": 1007
    },
    {
      "LocalizedName": "a69a483f226741b886599cc410ac8cad",
      "DevName": "Map4_Fortress_Night",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapWins",
      "Image": "01ec8c5d7a76be94d8f6e2ee544aa747",
      "StackableId": 1008
    },
    {
      "LocalizedName": "d2f590153f894337aeee23dd75d71953",
      "DevName": "Map5_China",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapWins",
      "Image": "ba15b0f8b065512469da43b09a5be052",
      "StackableId": 1009
    },
    {
      "LocalizedName": "974733ad1bfd4479b3482c73116c2b19",
      "DevName": "Map5_China_Night",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapWins",
      "Image": "c9c64b104bd5b9548943fc19bb8dc3b8",
      "StackableId": 1013
    },
    {
      "LocalizedName": "3b173f7ae55f483e96ca721d3e1e419e",
      "DevName": "Map2_Spirit_Expanded",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapWins",
      "Image": "eaf526007e4806447a821a4d58fe4f8c",
      "StackableId": 1014
    },
    {
      "LocalizedName": "7f106a092afb40ddb98f1ab63abe06e0",
      "DevName": "Map3_Cloud_Expanded",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapWins",
      "Image": "64ac95cd202f9ca499d99e299190c070",
      "StackableId": 1015
    },
    {
      "LocalizedName": "d2f590153f894337aeee23dd75d71953",
      "DevName": "Map5_China_Expanded",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapWins",
      "Image": "ba15b0f8b065512469da43b09a5be052",
      "StackableId": 1016
    },
    {
      "LocalizedName": "14d8c4f5f6be44c0ab67175147624731",
      "DevName": "Map1_Aras",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapLosses",
      "Image": "ad956aa9dd4047246840e1767bdd844f",
      "StackableId": 1101
    },
    {
      "LocalizedName": "3b173f7ae55f483e96ca721d3e1e419e",
      "DevName": "Map2_Spirit",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapLosses",
      "Image": "eaf526007e4806447a821a4d58fe4f8c",
      "StackableId": 1102
    },
    {
      "LocalizedName": "01f7b4bb8895416199958302f53c04a1",
      "DevName": "Map1_Aras_Night",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapLosses",
      "Image": "5e2bbaaef7733904592b2d4d4cf8fce5",
      "StackableId": 1103
    },
    {
      "LocalizedName": "7dd3caa5704a4715b8d7bfdfd500505f",
      "DevName": "Map2_Spirit_Night",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapLosses",
      "Image": "e91b212a2d411934795a848d89a2ecac",
      "StackableId": 1104
    },
    {
      "LocalizedName": "7f106a092afb40ddb98f1ab63abe06e0",
      "DevName": "Map3_Cloud",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapLosses",
      "Image": "64ac95cd202f9ca499d99e299190c070",
      "StackableId": 1105
    },
    {
      "LocalizedName": "e3446422f2f04ec88a9d07771d15897a",
      "DevName": "Map3_Cloud_Night",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapLosses",
      "Image": "2d0079cfb92218240aec73e43b8a6c40",
      "StackableId": 1106
    },
    {
      "LocalizedName": "aaed74e4ec98455badda6927a0d21e04",
      "DevName": "Map4_Fortress",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapLosses",
      "Image": "f50f88a811eca0e42b5509ca153e8562",
      "StackableId": 1107
    },
    {
      "LocalizedName": "a69a483f226741b886599cc410ac8cad",
      "DevName": "Map4_Fortress_Night",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapLosses",
      "Image": "01ec8c5d7a76be94d8f6e2ee544aa747",
      "StackableId": 1108
    },
    {
      "LocalizedName": "d2f590153f894337aeee23dd75d71953",
      "DevName": "Map5_China",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapLosses",
      "Image": "ba15b0f8b065512469da43b09a5be052",
      "StackableId": 1109
    },
    {
      "LocalizedName": "974733ad1bfd4479b3482c73116c2b19",
      "DevName": "Map5_China_Night",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapLosses",
      "Image": "c9c64b104bd5b9548943fc19bb8dc3b8",
      "StackableId": 1113
    },
    {
      "LocalizedName": "3b173f7ae55f483e96ca721d3e1e419e",
      "DevName": "Map2_Spirit_Expanded",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapLosses",
      "Image": "eaf526007e4806447a821a4d58fe4f8c",
      "StackableId": 1114
    },
    {
      "LocalizedName": "7f106a092afb40ddb98f1ab63abe06e0",
      "DevName": "Map3_Cloud_Expanded",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapLosses",
      "Image": "64ac95cd202f9ca499d99e299190c070",
      "StackableId": 1115
    },
    {
      "LocalizedName": "d2f590153f894337aeee23dd75d71953",
      "DevName": "Map5_China_Expanded",
      "IdRangeName": "MapEnum",
      "StackableRangeName": "MapLosses",
      "Image": "ba15b0f8b065512469da43b09a5be052",
      "StackableId": 1116
    },
    {
      "LocalizedName": "703f566d634d4ed6941a9d6d04f92979",
      "DevName": "Alchemist",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "83cd4bf3be6455f4cbbf803035b6d0fe",
      "WideIcon": "e5554b8a15ffc1a499a3807bb3a37b56",
      "StackableId": 11001
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "Astronomer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 11002
    },
    {
      "LocalizedName": "cb26b90df02745c8b035f856a7bba58d",
      "DevName": "Engineer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "423d20132a1e9224d92e489664702e03",
      "WideIcon": "decba44679fbdae4bb7d0d1cb6a97682",
      "StackableId": 11003
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "Gunner",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 11004
    },
    {
      "LocalizedName": "75edf47280604ea4a632ae97664d3c23",
      "DevName": "Harbinger",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "b6baa190db3bf814cae790b79f622ea0",
      "WideIcon": "bb37e5d448c511e47b808987d0d4f9e8",
      "StackableId": 11005
    },
    {
      "LocalizedName": "185585849e33412ab192917339444df1",
      "DevName": "Herald",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "9de8223b455d0474a9bbf2f32f9c7102",
      "WideIcon": "b0d66b8b9f228724093b8a3e66c3fef6",
      "StackableId": 11006
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "Igniter",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 11007
    },
    {
      "LocalizedName": "943be726de724906be18c214511a3f7b",
      "DevName": "Inhibitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "6477c7810f95a394e936caacf42d0b4e",
      "WideIcon": "f1cc53a29c58089478f6438589d9b32d",
      "StackableId": 11008
    },
    {
      "LocalizedName": "6868ad46fc604034a78f3c57300c3257",
      "DevName": "Inquisitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "b9f935b04557efa4e95d6cec4d151985",
      "WideIcon": "427116cdee46bad4cbaa99d7063e0832",
      "StackableId": 11009
    },
    {
      "LocalizedName": "8b8ca9a3af044131a61889b28bbcb00f",
      "DevName": "Nomad",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "246d3bbb94b9f0d42932cbb2a1e43dd5",
      "WideIcon": "2905515bc00a1d64e83466ec8e50f8b6",
      "StackableId": 11010
    },
    {
      "LocalizedName": "85e0b02e16c64eb1a5bcafb8cd769c25",
      "DevName": "Psychopomp",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "edd99cc32ca6f2842b2cb83249945c2a",
      "WideIcon": "9872f8cd16d7327418b09294cfa319e6",
      "StackableId": 11011
    },
    {
      "LocalizedName": "75e925f886164954b000e65caf1d35ee",
      "DevName": "Ranid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "0380b89b0ba8de847843f22c25b41a56",
      "WideIcon": "d3038956f9767d74bbbce0659b07474d",
      "StackableId": 11012
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "Ravener",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 11013
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "Seeker",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 11014
    },
    {
      "LocalizedName": "ed420e0ca45a4eaeb1010151e236f334",
      "DevName": "Spearmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "7853a4b1214bef74a8bbdf17f0a45bb8",
      "WideIcon": "6f69edc7410650c43bee267eef585b06",
      "StackableId": 11015
    },
    {
      "LocalizedName": "051b83cf1878426a9bc0a329babbea8f",
      "DevName": "Stormcaller",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "6e29d30d928547b4e941ce3e6e4e83b3",
      "WideIcon": "3af1fdc53169d044b939cce7ffb561a1",
      "StackableId": 11016
    },
    {
      "LocalizedName": "f05ef57b8e994e5e9d43bbfcae9a09a6",
      "DevName": "Vanguard",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 11017
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "Glutton",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 11018
    },
    {
      "LocalizedName": "0fa51e1bd7c84e4da4ceee830532e406",
      "DevName": "BloodPriest",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "d9cffa65b2aa1414e9371fc9b2f4c561",
      "WideIcon": "a7e0c7a6f0fa2ef49bf684950de34567",
      "StackableId": 11019
    },
    {
      "LocalizedName": "3c09a1c88b5b44608679b7a34350ca52",
      "DevName": "MetalWarden",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "8f50318bf676ca047b3e36d5b6de7815",
      "WideIcon": "65e28ab3b75c7cb478a1b24b46fca7d2",
      "StackableId": 11020
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "Swordmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 11021
    },
    {
      "LocalizedName": "da0272c6ff4b48bf809f130d8e2dba02",
      "DevName": "Druid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "907a9b3d24a8c9f459e02c87d86fa9da",
      "WideIcon": "6f50396e26efe6c4bbad274e2c90b8a4",
      "StackableId": 11022
    },
    {
      "LocalizedName": "54211e1d9be54efeac2e3311e96b898b",
      "DevName": "Bakko_EasterEvent",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 11023
    },
    {
      "LocalizedName": "d25b42991ba94cbeb7234aad3e176351",
      "DevName": "Thorn",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "57f133d34e231d04d922dd5e5d234a71",
      "WideIcon": "aab126231d9ff344f9f88ab230a5e66f",
      "StackableId": 11025
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "AshkaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 11026
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "FreyaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 11027
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "JumongCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 11028
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "RaigonCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 11029
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "RookCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 11030
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "SiriusCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 11031
    },
    {
      "LocalizedName": "f18695e2f3b64d37a8a0e085db007eac",
      "DevName": "MirrorMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "e10caaf367fdb6f459483a4c9be850a3",
      "WideIcon": "9c4186a6214f12448a7091710b0cde6c",
      "StackableId": 11035
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "JadeCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 11038
    },
    {
      "LocalizedName": "448d6f054228474eb92862767d3e21a8",
      "DevName": "RandomChampion",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "c175e343deeceff48a7fc58412aabe4e",
      "WideIcon": "7823c6971f6585846a1252e279fd02da",
      "StackableId": 11040
    },
    {
      "LocalizedName": "b2c969dbc2834e9296155eb97e2db638",
      "DevName": "FrostMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "XP",
      "Icon": "f3e8949aa208a3346a497c336a7002cd",
      "WideIcon": "50404d271ae2a4f4f8b52de966688dc1",
      "StackableId": 11041
    },
    {
      "LocalizedName": "703f566d634d4ed6941a9d6d04f92979",
      "DevName": "Alchemist",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "83cd4bf3be6455f4cbbf803035b6d0fe",
      "WideIcon": "e5554b8a15ffc1a499a3807bb3a37b56",
      "StackableId": 12001
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "Astronomer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 12002
    },
    {
      "LocalizedName": "cb26b90df02745c8b035f856a7bba58d",
      "DevName": "Engineer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "423d20132a1e9224d92e489664702e03",
      "WideIcon": "decba44679fbdae4bb7d0d1cb6a97682",
      "StackableId": 12003
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "Gunner",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 12004
    },
    {
      "LocalizedName": "75edf47280604ea4a632ae97664d3c23",
      "DevName": "Harbinger",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "b6baa190db3bf814cae790b79f622ea0",
      "WideIcon": "bb37e5d448c511e47b808987d0d4f9e8",
      "StackableId": 12005
    },
    {
      "LocalizedName": "185585849e33412ab192917339444df1",
      "DevName": "Herald",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "9de8223b455d0474a9bbf2f32f9c7102",
      "WideIcon": "b0d66b8b9f228724093b8a3e66c3fef6",
      "StackableId": 12006
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "Igniter",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 12007
    },
    {
      "LocalizedName": "943be726de724906be18c214511a3f7b",
      "DevName": "Inhibitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "6477c7810f95a394e936caacf42d0b4e",
      "WideIcon": "f1cc53a29c58089478f6438589d9b32d",
      "StackableId": 12008
    },
    {
      "LocalizedName": "6868ad46fc604034a78f3c57300c3257",
      "DevName": "Inquisitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "b9f935b04557efa4e95d6cec4d151985",
      "WideIcon": "427116cdee46bad4cbaa99d7063e0832",
      "StackableId": 12009
    },
    {
      "LocalizedName": "8b8ca9a3af044131a61889b28bbcb00f",
      "DevName": "Nomad",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "246d3bbb94b9f0d42932cbb2a1e43dd5",
      "WideIcon": "2905515bc00a1d64e83466ec8e50f8b6",
      "StackableId": 12010
    },
    {
      "LocalizedName": "85e0b02e16c64eb1a5bcafb8cd769c25",
      "DevName": "Psychopomp",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "edd99cc32ca6f2842b2cb83249945c2a",
      "WideIcon": "9872f8cd16d7327418b09294cfa319e6",
      "StackableId": 12011
    },
    {
      "LocalizedName": "75e925f886164954b000e65caf1d35ee",
      "DevName": "Ranid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "0380b89b0ba8de847843f22c25b41a56",
      "WideIcon": "d3038956f9767d74bbbce0659b07474d",
      "StackableId": 12012
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "Ravener",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 12013
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "Seeker",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 12014
    },
    {
      "LocalizedName": "ed420e0ca45a4eaeb1010151e236f334",
      "DevName": "Spearmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "7853a4b1214bef74a8bbdf17f0a45bb8",
      "WideIcon": "6f69edc7410650c43bee267eef585b06",
      "StackableId": 12015
    },
    {
      "LocalizedName": "051b83cf1878426a9bc0a329babbea8f",
      "DevName": "Stormcaller",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "6e29d30d928547b4e941ce3e6e4e83b3",
      "WideIcon": "3af1fdc53169d044b939cce7ffb561a1",
      "StackableId": 12016
    },
    {
      "LocalizedName": "f05ef57b8e994e5e9d43bbfcae9a09a6",
      "DevName": "Vanguard",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 12017
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "Glutton",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 12018
    },
    {
      "LocalizedName": "0fa51e1bd7c84e4da4ceee830532e406",
      "DevName": "BloodPriest",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "d9cffa65b2aa1414e9371fc9b2f4c561",
      "WideIcon": "a7e0c7a6f0fa2ef49bf684950de34567",
      "StackableId": 12019
    },
    {
      "LocalizedName": "3c09a1c88b5b44608679b7a34350ca52",
      "DevName": "MetalWarden",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "8f50318bf676ca047b3e36d5b6de7815",
      "WideIcon": "65e28ab3b75c7cb478a1b24b46fca7d2",
      "StackableId": 12020
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "Swordmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 12021
    },
    {
      "LocalizedName": "da0272c6ff4b48bf809f130d8e2dba02",
      "DevName": "Druid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "907a9b3d24a8c9f459e02c87d86fa9da",
      "WideIcon": "6f50396e26efe6c4bbad274e2c90b8a4",
      "StackableId": 12022
    },
    {
      "LocalizedName": "54211e1d9be54efeac2e3311e96b898b",
      "DevName": "Bakko_EasterEvent",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 12023
    },
    {
      "LocalizedName": "d25b42991ba94cbeb7234aad3e176351",
      "DevName": "Thorn",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "57f133d34e231d04d922dd5e5d234a71",
      "WideIcon": "aab126231d9ff344f9f88ab230a5e66f",
      "StackableId": 12025
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "AshkaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 12026
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "FreyaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 12027
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "JumongCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 12028
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "RaigonCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 12029
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "RookCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 12030
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "SiriusCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 12031
    },
    {
      "LocalizedName": "f18695e2f3b64d37a8a0e085db007eac",
      "DevName": "MirrorMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "e10caaf367fdb6f459483a4c9be850a3",
      "WideIcon": "9c4186a6214f12448a7091710b0cde6c",
      "StackableId": 12035
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "JadeCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 12038
    },
    {
      "LocalizedName": "448d6f054228474eb92862767d3e21a8",
      "DevName": "RandomChampion",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "c175e343deeceff48a7fc58412aabe4e",
      "WideIcon": "7823c6971f6585846a1252e279fd02da",
      "StackableId": 12040
    },
    {
      "LocalizedName": "b2c969dbc2834e9296155eb97e2db638",
      "DevName": "FrostMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterWins",
      "Icon": "f3e8949aa208a3346a497c336a7002cd",
      "WideIcon": "50404d271ae2a4f4f8b52de966688dc1",
      "StackableId": 12041
    },
    {
      "LocalizedName": "703f566d634d4ed6941a9d6d04f92979",
      "DevName": "Alchemist",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "83cd4bf3be6455f4cbbf803035b6d0fe",
      "WideIcon": "e5554b8a15ffc1a499a3807bb3a37b56",
      "StackableId": 13001
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "Astronomer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 13002
    },
    {
      "LocalizedName": "cb26b90df02745c8b035f856a7bba58d",
      "DevName": "Engineer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "423d20132a1e9224d92e489664702e03",
      "WideIcon": "decba44679fbdae4bb7d0d1cb6a97682",
      "StackableId": 13003
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "Gunner",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 13004
    },
    {
      "LocalizedName": "75edf47280604ea4a632ae97664d3c23",
      "DevName": "Harbinger",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "b6baa190db3bf814cae790b79f622ea0",
      "WideIcon": "bb37e5d448c511e47b808987d0d4f9e8",
      "StackableId": 13005
    },
    {
      "LocalizedName": "185585849e33412ab192917339444df1",
      "DevName": "Herald",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "9de8223b455d0474a9bbf2f32f9c7102",
      "WideIcon": "b0d66b8b9f228724093b8a3e66c3fef6",
      "StackableId": 13006
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "Igniter",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 13007
    },
    {
      "LocalizedName": "943be726de724906be18c214511a3f7b",
      "DevName": "Inhibitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "6477c7810f95a394e936caacf42d0b4e",
      "WideIcon": "f1cc53a29c58089478f6438589d9b32d",
      "StackableId": 13008
    },
    {
      "LocalizedName": "6868ad46fc604034a78f3c57300c3257",
      "DevName": "Inquisitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "b9f935b04557efa4e95d6cec4d151985",
      "WideIcon": "427116cdee46bad4cbaa99d7063e0832",
      "StackableId": 13009
    },
    {
      "LocalizedName": "8b8ca9a3af044131a61889b28bbcb00f",
      "DevName": "Nomad",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "246d3bbb94b9f0d42932cbb2a1e43dd5",
      "WideIcon": "2905515bc00a1d64e83466ec8e50f8b6",
      "StackableId": 13010
    },
    {
      "LocalizedName": "85e0b02e16c64eb1a5bcafb8cd769c25",
      "DevName": "Psychopomp",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "edd99cc32ca6f2842b2cb83249945c2a",
      "WideIcon": "9872f8cd16d7327418b09294cfa319e6",
      "StackableId": 13011
    },
    {
      "LocalizedName": "75e925f886164954b000e65caf1d35ee",
      "DevName": "Ranid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "0380b89b0ba8de847843f22c25b41a56",
      "WideIcon": "d3038956f9767d74bbbce0659b07474d",
      "StackableId": 13012
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "Ravener",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 13013
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "Seeker",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 13014
    },
    {
      "LocalizedName": "ed420e0ca45a4eaeb1010151e236f334",
      "DevName": "Spearmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "7853a4b1214bef74a8bbdf17f0a45bb8",
      "WideIcon": "6f69edc7410650c43bee267eef585b06",
      "StackableId": 13015
    },
    {
      "LocalizedName": "051b83cf1878426a9bc0a329babbea8f",
      "DevName": "Stormcaller",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "6e29d30d928547b4e941ce3e6e4e83b3",
      "WideIcon": "3af1fdc53169d044b939cce7ffb561a1",
      "StackableId": 13016
    },
    {
      "LocalizedName": "f05ef57b8e994e5e9d43bbfcae9a09a6",
      "DevName": "Vanguard",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 13017
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "Glutton",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 13018
    },
    {
      "LocalizedName": "0fa51e1bd7c84e4da4ceee830532e406",
      "DevName": "BloodPriest",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "d9cffa65b2aa1414e9371fc9b2f4c561",
      "WideIcon": "a7e0c7a6f0fa2ef49bf684950de34567",
      "StackableId": 13019
    },
    {
      "LocalizedName": "3c09a1c88b5b44608679b7a34350ca52",
      "DevName": "MetalWarden",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "8f50318bf676ca047b3e36d5b6de7815",
      "WideIcon": "65e28ab3b75c7cb478a1b24b46fca7d2",
      "StackableId": 13020
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "Swordmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 13021
    },
    {
      "LocalizedName": "da0272c6ff4b48bf809f130d8e2dba02",
      "DevName": "Druid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "907a9b3d24a8c9f459e02c87d86fa9da",
      "WideIcon": "6f50396e26efe6c4bbad274e2c90b8a4",
      "StackableId": 13022
    },
    {
      "LocalizedName": "54211e1d9be54efeac2e3311e96b898b",
      "DevName": "Bakko_EasterEvent",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 13023
    },
    {
      "LocalizedName": "d25b42991ba94cbeb7234aad3e176351",
      "DevName": "Thorn",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "57f133d34e231d04d922dd5e5d234a71",
      "WideIcon": "aab126231d9ff344f9f88ab230a5e66f",
      "StackableId": 13025
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "AshkaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 13026
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "FreyaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 13027
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "JumongCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 13028
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "RaigonCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 13029
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "RookCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 13030
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "SiriusCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 13031
    },
    {
      "LocalizedName": "f18695e2f3b64d37a8a0e085db007eac",
      "DevName": "MirrorMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "e10caaf367fdb6f459483a4c9be850a3",
      "WideIcon": "9c4186a6214f12448a7091710b0cde6c",
      "StackableId": 13035
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "JadeCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 13038
    },
    {
      "LocalizedName": "448d6f054228474eb92862767d3e21a8",
      "DevName": "RandomChampion",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "c175e343deeceff48a7fc58412aabe4e",
      "WideIcon": "7823c6971f6585846a1252e279fd02da",
      "StackableId": 13040
    },
    {
      "LocalizedName": "b2c969dbc2834e9296155eb97e2db638",
      "DevName": "FrostMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterLosses",
      "Icon": "f3e8949aa208a3346a497c336a7002cd",
      "WideIcon": "50404d271ae2a4f4f8b52de966688dc1",
      "StackableId": 13041
    },
    {
      "LocalizedName": "703f566d634d4ed6941a9d6d04f92979",
      "DevName": "Alchemist",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "83cd4bf3be6455f4cbbf803035b6d0fe",
      "WideIcon": "e5554b8a15ffc1a499a3807bb3a37b56",
      "StackableId": 14001
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "Astronomer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 14002
    },
    {
      "LocalizedName": "cb26b90df02745c8b035f856a7bba58d",
      "DevName": "Engineer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "423d20132a1e9224d92e489664702e03",
      "WideIcon": "decba44679fbdae4bb7d0d1cb6a97682",
      "StackableId": 14003
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "Gunner",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 14004
    },
    {
      "LocalizedName": "75edf47280604ea4a632ae97664d3c23",
      "DevName": "Harbinger",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "b6baa190db3bf814cae790b79f622ea0",
      "WideIcon": "bb37e5d448c511e47b808987d0d4f9e8",
      "StackableId": 14005
    },
    {
      "LocalizedName": "185585849e33412ab192917339444df1",
      "DevName": "Herald",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "9de8223b455d0474a9bbf2f32f9c7102",
      "WideIcon": "b0d66b8b9f228724093b8a3e66c3fef6",
      "StackableId": 14006
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "Igniter",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 14007
    },
    {
      "LocalizedName": "943be726de724906be18c214511a3f7b",
      "DevName": "Inhibitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "6477c7810f95a394e936caacf42d0b4e",
      "WideIcon": "f1cc53a29c58089478f6438589d9b32d",
      "StackableId": 14008
    },
    {
      "LocalizedName": "6868ad46fc604034a78f3c57300c3257",
      "DevName": "Inquisitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "b9f935b04557efa4e95d6cec4d151985",
      "WideIcon": "427116cdee46bad4cbaa99d7063e0832",
      "StackableId": 14009
    },
    {
      "LocalizedName": "8b8ca9a3af044131a61889b28bbcb00f",
      "DevName": "Nomad",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "246d3bbb94b9f0d42932cbb2a1e43dd5",
      "WideIcon": "2905515bc00a1d64e83466ec8e50f8b6",
      "StackableId": 14010
    },
    {
      "LocalizedName": "85e0b02e16c64eb1a5bcafb8cd769c25",
      "DevName": "Psychopomp",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "edd99cc32ca6f2842b2cb83249945c2a",
      "WideIcon": "9872f8cd16d7327418b09294cfa319e6",
      "StackableId": 14011
    },
    {
      "LocalizedName": "75e925f886164954b000e65caf1d35ee",
      "DevName": "Ranid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "0380b89b0ba8de847843f22c25b41a56",
      "WideIcon": "d3038956f9767d74bbbce0659b07474d",
      "StackableId": 14012
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "Ravener",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 14013
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "Seeker",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 14014
    },
    {
      "LocalizedName": "ed420e0ca45a4eaeb1010151e236f334",
      "DevName": "Spearmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "7853a4b1214bef74a8bbdf17f0a45bb8",
      "WideIcon": "6f69edc7410650c43bee267eef585b06",
      "StackableId": 14015
    },
    {
      "LocalizedName": "051b83cf1878426a9bc0a329babbea8f",
      "DevName": "Stormcaller",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "6e29d30d928547b4e941ce3e6e4e83b3",
      "WideIcon": "3af1fdc53169d044b939cce7ffb561a1",
      "StackableId": 14016
    },
    {
      "LocalizedName": "f05ef57b8e994e5e9d43bbfcae9a09a6",
      "DevName": "Vanguard",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 14017
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "Glutton",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 14018
    },
    {
      "LocalizedName": "0fa51e1bd7c84e4da4ceee830532e406",
      "DevName": "BloodPriest",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "d9cffa65b2aa1414e9371fc9b2f4c561",
      "WideIcon": "a7e0c7a6f0fa2ef49bf684950de34567",
      "StackableId": 14019
    },
    {
      "LocalizedName": "3c09a1c88b5b44608679b7a34350ca52",
      "DevName": "MetalWarden",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "8f50318bf676ca047b3e36d5b6de7815",
      "WideIcon": "65e28ab3b75c7cb478a1b24b46fca7d2",
      "StackableId": 14020
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "Swordmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 14021
    },
    {
      "LocalizedName": "da0272c6ff4b48bf809f130d8e2dba02",
      "DevName": "Druid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "907a9b3d24a8c9f459e02c87d86fa9da",
      "WideIcon": "6f50396e26efe6c4bbad274e2c90b8a4",
      "StackableId": 14022
    },
    {
      "LocalizedName": "54211e1d9be54efeac2e3311e96b898b",
      "DevName": "Bakko_EasterEvent",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 14023
    },
    {
      "LocalizedName": "d25b42991ba94cbeb7234aad3e176351",
      "DevName": "Thorn",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "57f133d34e231d04d922dd5e5d234a71",
      "WideIcon": "aab126231d9ff344f9f88ab230a5e66f",
      "StackableId": 14025
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "AshkaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 14026
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "FreyaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 14027
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "JumongCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 14028
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "RaigonCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 14029
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "RookCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 14030
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "SiriusCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 14031
    },
    {
      "LocalizedName": "f18695e2f3b64d37a8a0e085db007eac",
      "DevName": "MirrorMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "e10caaf367fdb6f459483a4c9be850a3",
      "WideIcon": "9c4186a6214f12448a7091710b0cde6c",
      "StackableId": 14035
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "JadeCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 14038
    },
    {
      "LocalizedName": "448d6f054228474eb92862767d3e21a8",
      "DevName": "RandomChampion",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "c175e343deeceff48a7fc58412aabe4e",
      "WideIcon": "7823c6971f6585846a1252e279fd02da",
      "StackableId": 14040
    },
    {
      "LocalizedName": "b2c969dbc2834e9296155eb97e2db638",
      "DevName": "FrostMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterKills",
      "Icon": "f3e8949aa208a3346a497c336a7002cd",
      "WideIcon": "50404d271ae2a4f4f8b52de966688dc1",
      "StackableId": 14041
    },
    {
      "LocalizedName": "703f566d634d4ed6941a9d6d04f92979",
      "DevName": "Alchemist",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "83cd4bf3be6455f4cbbf803035b6d0fe",
      "WideIcon": "e5554b8a15ffc1a499a3807bb3a37b56",
      "StackableId": 15001
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "Astronomer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 15002
    },
    {
      "LocalizedName": "cb26b90df02745c8b035f856a7bba58d",
      "DevName": "Engineer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "423d20132a1e9224d92e489664702e03",
      "WideIcon": "decba44679fbdae4bb7d0d1cb6a97682",
      "StackableId": 15003
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "Gunner",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 15004
    },
    {
      "LocalizedName": "75edf47280604ea4a632ae97664d3c23",
      "DevName": "Harbinger",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "b6baa190db3bf814cae790b79f622ea0",
      "WideIcon": "bb37e5d448c511e47b808987d0d4f9e8",
      "StackableId": 15005
    },
    {
      "LocalizedName": "185585849e33412ab192917339444df1",
      "DevName": "Herald",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "9de8223b455d0474a9bbf2f32f9c7102",
      "WideIcon": "b0d66b8b9f228724093b8a3e66c3fef6",
      "StackableId": 15006
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "Igniter",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 15007
    },
    {
      "LocalizedName": "943be726de724906be18c214511a3f7b",
      "DevName": "Inhibitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "6477c7810f95a394e936caacf42d0b4e",
      "WideIcon": "f1cc53a29c58089478f6438589d9b32d",
      "StackableId": 15008
    },
    {
      "LocalizedName": "6868ad46fc604034a78f3c57300c3257",
      "DevName": "Inquisitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "b9f935b04557efa4e95d6cec4d151985",
      "WideIcon": "427116cdee46bad4cbaa99d7063e0832",
      "StackableId": 15009
    },
    {
      "LocalizedName": "8b8ca9a3af044131a61889b28bbcb00f",
      "DevName": "Nomad",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "246d3bbb94b9f0d42932cbb2a1e43dd5",
      "WideIcon": "2905515bc00a1d64e83466ec8e50f8b6",
      "StackableId": 15010
    },
    {
      "LocalizedName": "85e0b02e16c64eb1a5bcafb8cd769c25",
      "DevName": "Psychopomp",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "edd99cc32ca6f2842b2cb83249945c2a",
      "WideIcon": "9872f8cd16d7327418b09294cfa319e6",
      "StackableId": 15011
    },
    {
      "LocalizedName": "75e925f886164954b000e65caf1d35ee",
      "DevName": "Ranid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "0380b89b0ba8de847843f22c25b41a56",
      "WideIcon": "d3038956f9767d74bbbce0659b07474d",
      "StackableId": 15012
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "Ravener",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 15013
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "Seeker",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 15014
    },
    {
      "LocalizedName": "ed420e0ca45a4eaeb1010151e236f334",
      "DevName": "Spearmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "7853a4b1214bef74a8bbdf17f0a45bb8",
      "WideIcon": "6f69edc7410650c43bee267eef585b06",
      "StackableId": 15015
    },
    {
      "LocalizedName": "051b83cf1878426a9bc0a329babbea8f",
      "DevName": "Stormcaller",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "6e29d30d928547b4e941ce3e6e4e83b3",
      "WideIcon": "3af1fdc53169d044b939cce7ffb561a1",
      "StackableId": 15016
    },
    {
      "LocalizedName": "f05ef57b8e994e5e9d43bbfcae9a09a6",
      "DevName": "Vanguard",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 15017
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "Glutton",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 15018
    },
    {
      "LocalizedName": "0fa51e1bd7c84e4da4ceee830532e406",
      "DevName": "BloodPriest",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "d9cffa65b2aa1414e9371fc9b2f4c561",
      "WideIcon": "a7e0c7a6f0fa2ef49bf684950de34567",
      "StackableId": 15019
    },
    {
      "LocalizedName": "3c09a1c88b5b44608679b7a34350ca52",
      "DevName": "MetalWarden",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "8f50318bf676ca047b3e36d5b6de7815",
      "WideIcon": "65e28ab3b75c7cb478a1b24b46fca7d2",
      "StackableId": 15020
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "Swordmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 15021
    },
    {
      "LocalizedName": "da0272c6ff4b48bf809f130d8e2dba02",
      "DevName": "Druid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "907a9b3d24a8c9f459e02c87d86fa9da",
      "WideIcon": "6f50396e26efe6c4bbad274e2c90b8a4",
      "StackableId": 15022
    },
    {
      "LocalizedName": "54211e1d9be54efeac2e3311e96b898b",
      "DevName": "Bakko_EasterEvent",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 15023
    },
    {
      "LocalizedName": "d25b42991ba94cbeb7234aad3e176351",
      "DevName": "Thorn",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "57f133d34e231d04d922dd5e5d234a71",
      "WideIcon": "aab126231d9ff344f9f88ab230a5e66f",
      "StackableId": 15025
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "AshkaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 15026
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "FreyaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 15027
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "JumongCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 15028
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "RaigonCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 15029
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "RookCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 15030
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "SiriusCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 15031
    },
    {
      "LocalizedName": "f18695e2f3b64d37a8a0e085db007eac",
      "DevName": "MirrorMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "e10caaf367fdb6f459483a4c9be850a3",
      "WideIcon": "9c4186a6214f12448a7091710b0cde6c",
      "StackableId": 15035
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "JadeCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 15038
    },
    {
      "LocalizedName": "448d6f054228474eb92862767d3e21a8",
      "DevName": "RandomChampion",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "c175e343deeceff48a7fc58412aabe4e",
      "WideIcon": "7823c6971f6585846a1252e279fd02da",
      "StackableId": 15040
    },
    {
      "LocalizedName": "b2c969dbc2834e9296155eb97e2db638",
      "DevName": "FrostMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterDeaths",
      "Icon": "f3e8949aa208a3346a497c336a7002cd",
      "WideIcon": "50404d271ae2a4f4f8b52de966688dc1",
      "StackableId": 15041
    },
    {
      "LocalizedName": "703f566d634d4ed6941a9d6d04f92979",
      "DevName": "Alchemist",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "83cd4bf3be6455f4cbbf803035b6d0fe",
      "WideIcon": "e5554b8a15ffc1a499a3807bb3a37b56",
      "StackableId": 40001
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "Astronomer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 40002
    },
    {
      "LocalizedName": "cb26b90df02745c8b035f856a7bba58d",
      "DevName": "Engineer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "423d20132a1e9224d92e489664702e03",
      "WideIcon": "decba44679fbdae4bb7d0d1cb6a97682",
      "StackableId": 40003
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "Gunner",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 40004
    },
    {
      "LocalizedName": "75edf47280604ea4a632ae97664d3c23",
      "DevName": "Harbinger",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "b6baa190db3bf814cae790b79f622ea0",
      "WideIcon": "bb37e5d448c511e47b808987d0d4f9e8",
      "StackableId": 40005
    },
    {
      "LocalizedName": "185585849e33412ab192917339444df1",
      "DevName": "Herald",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "9de8223b455d0474a9bbf2f32f9c7102",
      "WideIcon": "b0d66b8b9f228724093b8a3e66c3fef6",
      "StackableId": 40006
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "Igniter",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 40007
    },
    {
      "LocalizedName": "943be726de724906be18c214511a3f7b",
      "DevName": "Inhibitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "6477c7810f95a394e936caacf42d0b4e",
      "WideIcon": "f1cc53a29c58089478f6438589d9b32d",
      "StackableId": 40008
    },
    {
      "LocalizedName": "6868ad46fc604034a78f3c57300c3257",
      "DevName": "Inquisitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "b9f935b04557efa4e95d6cec4d151985",
      "WideIcon": "427116cdee46bad4cbaa99d7063e0832",
      "StackableId": 40009
    },
    {
      "LocalizedName": "8b8ca9a3af044131a61889b28bbcb00f",
      "DevName": "Nomad",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "246d3bbb94b9f0d42932cbb2a1e43dd5",
      "WideIcon": "2905515bc00a1d64e83466ec8e50f8b6",
      "StackableId": 40010
    },
    {
      "LocalizedName": "85e0b02e16c64eb1a5bcafb8cd769c25",
      "DevName": "Psychopomp",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "edd99cc32ca6f2842b2cb83249945c2a",
      "WideIcon": "9872f8cd16d7327418b09294cfa319e6",
      "StackableId": 40011
    },
    {
      "LocalizedName": "75e925f886164954b000e65caf1d35ee",
      "DevName": "Ranid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "0380b89b0ba8de847843f22c25b41a56",
      "WideIcon": "d3038956f9767d74bbbce0659b07474d",
      "StackableId": 40012
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "Ravener",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 40013
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "Seeker",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 40014
    },
    {
      "LocalizedName": "ed420e0ca45a4eaeb1010151e236f334",
      "DevName": "Spearmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "7853a4b1214bef74a8bbdf17f0a45bb8",
      "WideIcon": "6f69edc7410650c43bee267eef585b06",
      "StackableId": 40015
    },
    {
      "LocalizedName": "051b83cf1878426a9bc0a329babbea8f",
      "DevName": "Stormcaller",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "6e29d30d928547b4e941ce3e6e4e83b3",
      "WideIcon": "3af1fdc53169d044b939cce7ffb561a1",
      "StackableId": 40016
    },
    {
      "LocalizedName": "f05ef57b8e994e5e9d43bbfcae9a09a6",
      "DevName": "Vanguard",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 40017
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "Glutton",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 40018
    },
    {
      "LocalizedName": "0fa51e1bd7c84e4da4ceee830532e406",
      "DevName": "BloodPriest",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "d9cffa65b2aa1414e9371fc9b2f4c561",
      "WideIcon": "a7e0c7a6f0fa2ef49bf684950de34567",
      "StackableId": 40019
    },
    {
      "LocalizedName": "3c09a1c88b5b44608679b7a34350ca52",
      "DevName": "MetalWarden",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "8f50318bf676ca047b3e36d5b6de7815",
      "WideIcon": "65e28ab3b75c7cb478a1b24b46fca7d2",
      "StackableId": 40020
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "Swordmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 40021
    },
    {
      "LocalizedName": "da0272c6ff4b48bf809f130d8e2dba02",
      "DevName": "Druid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "907a9b3d24a8c9f459e02c87d86fa9da",
      "WideIcon": "6f50396e26efe6c4bbad274e2c90b8a4",
      "StackableId": 40022
    },
    {
      "LocalizedName": "54211e1d9be54efeac2e3311e96b898b",
      "DevName": "Bakko_EasterEvent",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 40023
    },
    {
      "LocalizedName": "d25b42991ba94cbeb7234aad3e176351",
      "DevName": "Thorn",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "57f133d34e231d04d922dd5e5d234a71",
      "WideIcon": "aab126231d9ff344f9f88ab230a5e66f",
      "StackableId": 40025
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "AshkaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 40026
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "FreyaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 40027
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "JumongCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 40028
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "RaigonCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 40029
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "RookCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 40030
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "SiriusCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 40031
    },
    {
      "LocalizedName": "f18695e2f3b64d37a8a0e085db007eac",
      "DevName": "MirrorMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "e10caaf367fdb6f459483a4c9be850a3",
      "WideIcon": "9c4186a6214f12448a7091710b0cde6c",
      "StackableId": 40035
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "JadeCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 40038
    },
    {
      "LocalizedName": "448d6f054228474eb92862767d3e21a8",
      "DevName": "RandomChampion",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "c175e343deeceff48a7fc58412aabe4e",
      "WideIcon": "7823c6971f6585846a1252e279fd02da",
      "StackableId": 40040
    },
    {
      "LocalizedName": "b2c969dbc2834e9296155eb97e2db638",
      "DevName": "FrostMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "Level",
      "Icon": "f3e8949aa208a3346a497c336a7002cd",
      "WideIcon": "50404d271ae2a4f4f8b52de966688dc1",
      "StackableId": 40041
    },
    {
      "LocalizedName": "",
      "DevName": "TimePlayed",
      "IdRangeName": "",
      "StackableRangeName": "TimePlayed",
      "StackableId": 8
    },
    {
      "LocalizedName": "703f566d634d4ed6941a9d6d04f92979",
      "DevName": "Alchemist",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "83cd4bf3be6455f4cbbf803035b6d0fe",
      "WideIcon": "e5554b8a15ffc1a499a3807bb3a37b56",
      "StackableId": 16001
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "Astronomer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 16002
    },
    {
      "LocalizedName": "cb26b90df02745c8b035f856a7bba58d",
      "DevName": "Engineer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "423d20132a1e9224d92e489664702e03",
      "WideIcon": "decba44679fbdae4bb7d0d1cb6a97682",
      "StackableId": 16003
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "Gunner",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 16004
    },
    {
      "LocalizedName": "75edf47280604ea4a632ae97664d3c23",
      "DevName": "Harbinger",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "b6baa190db3bf814cae790b79f622ea0",
      "WideIcon": "bb37e5d448c511e47b808987d0d4f9e8",
      "StackableId": 16005
    },
    {
      "LocalizedName": "185585849e33412ab192917339444df1",
      "DevName": "Herald",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "9de8223b455d0474a9bbf2f32f9c7102",
      "WideIcon": "b0d66b8b9f228724093b8a3e66c3fef6",
      "StackableId": 16006
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "Igniter",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 16007
    },
    {
      "LocalizedName": "943be726de724906be18c214511a3f7b",
      "DevName": "Inhibitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "6477c7810f95a394e936caacf42d0b4e",
      "WideIcon": "f1cc53a29c58089478f6438589d9b32d",
      "StackableId": 16008
    },
    {
      "LocalizedName": "6868ad46fc604034a78f3c57300c3257",
      "DevName": "Inquisitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "b9f935b04557efa4e95d6cec4d151985",
      "WideIcon": "427116cdee46bad4cbaa99d7063e0832",
      "StackableId": 16009
    },
    {
      "LocalizedName": "8b8ca9a3af044131a61889b28bbcb00f",
      "DevName": "Nomad",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "246d3bbb94b9f0d42932cbb2a1e43dd5",
      "WideIcon": "2905515bc00a1d64e83466ec8e50f8b6",
      "StackableId": 16010
    },
    {
      "LocalizedName": "85e0b02e16c64eb1a5bcafb8cd769c25",
      "DevName": "Psychopomp",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "edd99cc32ca6f2842b2cb83249945c2a",
      "WideIcon": "9872f8cd16d7327418b09294cfa319e6",
      "StackableId": 16011
    },
    {
      "LocalizedName": "75e925f886164954b000e65caf1d35ee",
      "DevName": "Ranid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "0380b89b0ba8de847843f22c25b41a56",
      "WideIcon": "d3038956f9767d74bbbce0659b07474d",
      "StackableId": 16012
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "Ravener",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 16013
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "Seeker",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 16014
    },
    {
      "LocalizedName": "ed420e0ca45a4eaeb1010151e236f334",
      "DevName": "Spearmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "7853a4b1214bef74a8bbdf17f0a45bb8",
      "WideIcon": "6f69edc7410650c43bee267eef585b06",
      "StackableId": 16015
    },
    {
      "LocalizedName": "051b83cf1878426a9bc0a329babbea8f",
      "DevName": "Stormcaller",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "6e29d30d928547b4e941ce3e6e4e83b3",
      "WideIcon": "3af1fdc53169d044b939cce7ffb561a1",
      "StackableId": 16016
    },
    {
      "LocalizedName": "f05ef57b8e994e5e9d43bbfcae9a09a6",
      "DevName": "Vanguard",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 16017
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "Glutton",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 16018
    },
    {
      "LocalizedName": "0fa51e1bd7c84e4da4ceee830532e406",
      "DevName": "BloodPriest",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "d9cffa65b2aa1414e9371fc9b2f4c561",
      "WideIcon": "a7e0c7a6f0fa2ef49bf684950de34567",
      "StackableId": 16019
    },
    {
      "LocalizedName": "3c09a1c88b5b44608679b7a34350ca52",
      "DevName": "MetalWarden",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "8f50318bf676ca047b3e36d5b6de7815",
      "WideIcon": "65e28ab3b75c7cb478a1b24b46fca7d2",
      "StackableId": 16020
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "Swordmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 16021
    },
    {
      "LocalizedName": "da0272c6ff4b48bf809f130d8e2dba02",
      "DevName": "Druid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "907a9b3d24a8c9f459e02c87d86fa9da",
      "WideIcon": "6f50396e26efe6c4bbad274e2c90b8a4",
      "StackableId": 16022
    },
    {
      "LocalizedName": "54211e1d9be54efeac2e3311e96b898b",
      "DevName": "Bakko_EasterEvent",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 16023
    },
    {
      "LocalizedName": "d25b42991ba94cbeb7234aad3e176351",
      "DevName": "Thorn",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "57f133d34e231d04d922dd5e5d234a71",
      "WideIcon": "aab126231d9ff344f9f88ab230a5e66f",
      "StackableId": 16025
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "AshkaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 16026
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "FreyaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 16027
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "JumongCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 16028
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "RaigonCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 16029
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "RookCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 16030
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "SiriusCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 16031
    },
    {
      "LocalizedName": "f18695e2f3b64d37a8a0e085db007eac",
      "DevName": "MirrorMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "e10caaf367fdb6f459483a4c9be850a3",
      "WideIcon": "9c4186a6214f12448a7091710b0cde6c",
      "StackableId": 16035
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "JadeCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 16038
    },
    {
      "LocalizedName": "448d6f054228474eb92862767d3e21a8",
      "DevName": "RandomChampion",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "c175e343deeceff48a7fc58412aabe4e",
      "WideIcon": "7823c6971f6585846a1252e279fd02da",
      "StackableId": 16040
    },
    {
      "LocalizedName": "b2c969dbc2834e9296155eb97e2db638",
      "DevName": "FrostMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterTimePlayed",
      "Icon": "f3e8949aa208a3346a497c336a7002cd",
      "WideIcon": "50404d271ae2a4f4f8b52de966688dc1",
      "StackableId": 16041
    },
    {
      "LocalizedName": "",
      "DevName": "RatingMean",
      "IdRangeName": "",
      "StackableRangeName": "RatingMean",
      "StackableId": 70
    },
    {
      "LocalizedName": "",
      "DevName": "RatingDev",
      "IdRangeName": "",
      "StackableRangeName": "RatingDev",
      "StackableId": 71
    },
    {
      "LocalizedName": "703f566d634d4ed6941a9d6d04f92979",
      "DevName": "Alchemist",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "83cd4bf3be6455f4cbbf803035b6d0fe",
      "WideIcon": "e5554b8a15ffc1a499a3807bb3a37b56",
      "StackableId": 17001
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "Astronomer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 17002
    },
    {
      "LocalizedName": "cb26b90df02745c8b035f856a7bba58d",
      "DevName": "Engineer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "423d20132a1e9224d92e489664702e03",
      "WideIcon": "decba44679fbdae4bb7d0d1cb6a97682",
      "StackableId": 17003
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "Gunner",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 17004
    },
    {
      "LocalizedName": "75edf47280604ea4a632ae97664d3c23",
      "DevName": "Harbinger",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "b6baa190db3bf814cae790b79f622ea0",
      "WideIcon": "bb37e5d448c511e47b808987d0d4f9e8",
      "StackableId": 17005
    },
    {
      "LocalizedName": "185585849e33412ab192917339444df1",
      "DevName": "Herald",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "9de8223b455d0474a9bbf2f32f9c7102",
      "WideIcon": "b0d66b8b9f228724093b8a3e66c3fef6",
      "StackableId": 17006
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "Igniter",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 17007
    },
    {
      "LocalizedName": "943be726de724906be18c214511a3f7b",
      "DevName": "Inhibitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "6477c7810f95a394e936caacf42d0b4e",
      "WideIcon": "f1cc53a29c58089478f6438589d9b32d",
      "StackableId": 17008
    },
    {
      "LocalizedName": "6868ad46fc604034a78f3c57300c3257",
      "DevName": "Inquisitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "b9f935b04557efa4e95d6cec4d151985",
      "WideIcon": "427116cdee46bad4cbaa99d7063e0832",
      "StackableId": 17009
    },
    {
      "LocalizedName": "8b8ca9a3af044131a61889b28bbcb00f",
      "DevName": "Nomad",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "246d3bbb94b9f0d42932cbb2a1e43dd5",
      "WideIcon": "2905515bc00a1d64e83466ec8e50f8b6",
      "StackableId": 17010
    },
    {
      "LocalizedName": "85e0b02e16c64eb1a5bcafb8cd769c25",
      "DevName": "Psychopomp",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "edd99cc32ca6f2842b2cb83249945c2a",
      "WideIcon": "9872f8cd16d7327418b09294cfa319e6",
      "StackableId": 17011
    },
    {
      "LocalizedName": "75e925f886164954b000e65caf1d35ee",
      "DevName": "Ranid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "0380b89b0ba8de847843f22c25b41a56",
      "WideIcon": "d3038956f9767d74bbbce0659b07474d",
      "StackableId": 17012
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "Ravener",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 17013
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "Seeker",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 17014
    },
    {
      "LocalizedName": "ed420e0ca45a4eaeb1010151e236f334",
      "DevName": "Spearmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "7853a4b1214bef74a8bbdf17f0a45bb8",
      "WideIcon": "6f69edc7410650c43bee267eef585b06",
      "StackableId": 17015
    },
    {
      "LocalizedName": "051b83cf1878426a9bc0a329babbea8f",
      "DevName": "Stormcaller",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "6e29d30d928547b4e941ce3e6e4e83b3",
      "WideIcon": "3af1fdc53169d044b939cce7ffb561a1",
      "StackableId": 17016
    },
    {
      "LocalizedName": "f05ef57b8e994e5e9d43bbfcae9a09a6",
      "DevName": "Vanguard",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 17017
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "Glutton",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 17018
    },
    {
      "LocalizedName": "0fa51e1bd7c84e4da4ceee830532e406",
      "DevName": "BloodPriest",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "d9cffa65b2aa1414e9371fc9b2f4c561",
      "WideIcon": "a7e0c7a6f0fa2ef49bf684950de34567",
      "StackableId": 17019
    },
    {
      "LocalizedName": "3c09a1c88b5b44608679b7a34350ca52",
      "DevName": "MetalWarden",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "8f50318bf676ca047b3e36d5b6de7815",
      "WideIcon": "65e28ab3b75c7cb478a1b24b46fca7d2",
      "StackableId": 17020
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "Swordmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 17021
    },
    {
      "LocalizedName": "da0272c6ff4b48bf809f130d8e2dba02",
      "DevName": "Druid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "907a9b3d24a8c9f459e02c87d86fa9da",
      "WideIcon": "6f50396e26efe6c4bbad274e2c90b8a4",
      "StackableId": 17022
    },
    {
      "LocalizedName": "54211e1d9be54efeac2e3311e96b898b",
      "DevName": "Bakko_EasterEvent",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 17023
    },
    {
      "LocalizedName": "d25b42991ba94cbeb7234aad3e176351",
      "DevName": "Thorn",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "57f133d34e231d04d922dd5e5d234a71",
      "WideIcon": "aab126231d9ff344f9f88ab230a5e66f",
      "StackableId": 17025
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "AshkaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 17026
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "FreyaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 17027
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "JumongCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 17028
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "RaigonCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 17029
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "RookCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 17030
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "SiriusCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 17031
    },
    {
      "LocalizedName": "f18695e2f3b64d37a8a0e085db007eac",
      "DevName": "MirrorMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "e10caaf367fdb6f459483a4c9be850a3",
      "WideIcon": "9c4186a6214f12448a7091710b0cde6c",
      "StackableId": 17035
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "JadeCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 17038
    },
    {
      "LocalizedName": "448d6f054228474eb92862767d3e21a8",
      "DevName": "RandomChampion",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "c175e343deeceff48a7fc58412aabe4e",
      "WideIcon": "7823c6971f6585846a1252e279fd02da",
      "StackableId": 17040
    },
    {
      "LocalizedName": "b2c969dbc2834e9296155eb97e2db638",
      "DevName": "FrostMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Wins",
      "Icon": "f3e8949aa208a3346a497c336a7002cd",
      "WideIcon": "50404d271ae2a4f4f8b52de966688dc1",
      "StackableId": 17041
    },
    {
      "LocalizedName": "703f566d634d4ed6941a9d6d04f92979",
      "DevName": "Alchemist",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "83cd4bf3be6455f4cbbf803035b6d0fe",
      "WideIcon": "e5554b8a15ffc1a499a3807bb3a37b56",
      "StackableId": 18001
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "Astronomer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 18002
    },
    {
      "LocalizedName": "cb26b90df02745c8b035f856a7bba58d",
      "DevName": "Engineer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "423d20132a1e9224d92e489664702e03",
      "WideIcon": "decba44679fbdae4bb7d0d1cb6a97682",
      "StackableId": 18003
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "Gunner",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 18004
    },
    {
      "LocalizedName": "75edf47280604ea4a632ae97664d3c23",
      "DevName": "Harbinger",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "b6baa190db3bf814cae790b79f622ea0",
      "WideIcon": "bb37e5d448c511e47b808987d0d4f9e8",
      "StackableId": 18005
    },
    {
      "LocalizedName": "185585849e33412ab192917339444df1",
      "DevName": "Herald",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "9de8223b455d0474a9bbf2f32f9c7102",
      "WideIcon": "b0d66b8b9f228724093b8a3e66c3fef6",
      "StackableId": 18006
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "Igniter",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 18007
    },
    {
      "LocalizedName": "943be726de724906be18c214511a3f7b",
      "DevName": "Inhibitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "6477c7810f95a394e936caacf42d0b4e",
      "WideIcon": "f1cc53a29c58089478f6438589d9b32d",
      "StackableId": 18008
    },
    {
      "LocalizedName": "6868ad46fc604034a78f3c57300c3257",
      "DevName": "Inquisitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "b9f935b04557efa4e95d6cec4d151985",
      "WideIcon": "427116cdee46bad4cbaa99d7063e0832",
      "StackableId": 18009
    },
    {
      "LocalizedName": "8b8ca9a3af044131a61889b28bbcb00f",
      "DevName": "Nomad",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "246d3bbb94b9f0d42932cbb2a1e43dd5",
      "WideIcon": "2905515bc00a1d64e83466ec8e50f8b6",
      "StackableId": 18010
    },
    {
      "LocalizedName": "85e0b02e16c64eb1a5bcafb8cd769c25",
      "DevName": "Psychopomp",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "edd99cc32ca6f2842b2cb83249945c2a",
      "WideIcon": "9872f8cd16d7327418b09294cfa319e6",
      "StackableId": 18011
    },
    {
      "LocalizedName": "75e925f886164954b000e65caf1d35ee",
      "DevName": "Ranid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "0380b89b0ba8de847843f22c25b41a56",
      "WideIcon": "d3038956f9767d74bbbce0659b07474d",
      "StackableId": 18012
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "Ravener",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 18013
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "Seeker",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 18014
    },
    {
      "LocalizedName": "ed420e0ca45a4eaeb1010151e236f334",
      "DevName": "Spearmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "7853a4b1214bef74a8bbdf17f0a45bb8",
      "WideIcon": "6f69edc7410650c43bee267eef585b06",
      "StackableId": 18015
    },
    {
      "LocalizedName": "051b83cf1878426a9bc0a329babbea8f",
      "DevName": "Stormcaller",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "6e29d30d928547b4e941ce3e6e4e83b3",
      "WideIcon": "3af1fdc53169d044b939cce7ffb561a1",
      "StackableId": 18016
    },
    {
      "LocalizedName": "f05ef57b8e994e5e9d43bbfcae9a09a6",
      "DevName": "Vanguard",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 18017
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "Glutton",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 18018
    },
    {
      "LocalizedName": "0fa51e1bd7c84e4da4ceee830532e406",
      "DevName": "BloodPriest",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "d9cffa65b2aa1414e9371fc9b2f4c561",
      "WideIcon": "a7e0c7a6f0fa2ef49bf684950de34567",
      "StackableId": 18019
    },
    {
      "LocalizedName": "3c09a1c88b5b44608679b7a34350ca52",
      "DevName": "MetalWarden",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "8f50318bf676ca047b3e36d5b6de7815",
      "WideIcon": "65e28ab3b75c7cb478a1b24b46fca7d2",
      "StackableId": 18020
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "Swordmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 18021
    },
    {
      "LocalizedName": "da0272c6ff4b48bf809f130d8e2dba02",
      "DevName": "Druid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "907a9b3d24a8c9f459e02c87d86fa9da",
      "WideIcon": "6f50396e26efe6c4bbad274e2c90b8a4",
      "StackableId": 18022
    },
    {
      "LocalizedName": "54211e1d9be54efeac2e3311e96b898b",
      "DevName": "Bakko_EasterEvent",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 18023
    },
    {
      "LocalizedName": "d25b42991ba94cbeb7234aad3e176351",
      "DevName": "Thorn",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "57f133d34e231d04d922dd5e5d234a71",
      "WideIcon": "aab126231d9ff344f9f88ab230a5e66f",
      "StackableId": 18025
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "AshkaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 18026
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "FreyaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 18027
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "JumongCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 18028
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "RaigonCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 18029
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "RookCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 18030
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "SiriusCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 18031
    },
    {
      "LocalizedName": "f18695e2f3b64d37a8a0e085db007eac",
      "DevName": "MirrorMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "e10caaf367fdb6f459483a4c9be850a3",
      "WideIcon": "9c4186a6214f12448a7091710b0cde6c",
      "StackableId": 18035
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "JadeCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 18038
    },
    {
      "LocalizedName": "448d6f054228474eb92862767d3e21a8",
      "DevName": "RandomChampion",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "c175e343deeceff48a7fc58412aabe4e",
      "WideIcon": "7823c6971f6585846a1252e279fd02da",
      "StackableId": 18040
    },
    {
      "LocalizedName": "b2c969dbc2834e9296155eb97e2db638",
      "DevName": "FrostMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked2v2Losses",
      "Icon": "f3e8949aa208a3346a497c336a7002cd",
      "WideIcon": "50404d271ae2a4f4f8b52de966688dc1",
      "StackableId": 18041
    },
    {
      "LocalizedName": "703f566d634d4ed6941a9d6d04f92979",
      "DevName": "Alchemist",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "83cd4bf3be6455f4cbbf803035b6d0fe",
      "WideIcon": "e5554b8a15ffc1a499a3807bb3a37b56",
      "StackableId": 19001
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "Astronomer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 19002
    },
    {
      "LocalizedName": "cb26b90df02745c8b035f856a7bba58d",
      "DevName": "Engineer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "423d20132a1e9224d92e489664702e03",
      "WideIcon": "decba44679fbdae4bb7d0d1cb6a97682",
      "StackableId": 19003
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "Gunner",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 19004
    },
    {
      "LocalizedName": "75edf47280604ea4a632ae97664d3c23",
      "DevName": "Harbinger",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "b6baa190db3bf814cae790b79f622ea0",
      "WideIcon": "bb37e5d448c511e47b808987d0d4f9e8",
      "StackableId": 19005
    },
    {
      "LocalizedName": "185585849e33412ab192917339444df1",
      "DevName": "Herald",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "9de8223b455d0474a9bbf2f32f9c7102",
      "WideIcon": "b0d66b8b9f228724093b8a3e66c3fef6",
      "StackableId": 19006
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "Igniter",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 19007
    },
    {
      "LocalizedName": "943be726de724906be18c214511a3f7b",
      "DevName": "Inhibitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "6477c7810f95a394e936caacf42d0b4e",
      "WideIcon": "f1cc53a29c58089478f6438589d9b32d",
      "StackableId": 19008
    },
    {
      "LocalizedName": "6868ad46fc604034a78f3c57300c3257",
      "DevName": "Inquisitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "b9f935b04557efa4e95d6cec4d151985",
      "WideIcon": "427116cdee46bad4cbaa99d7063e0832",
      "StackableId": 19009
    },
    {
      "LocalizedName": "8b8ca9a3af044131a61889b28bbcb00f",
      "DevName": "Nomad",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "246d3bbb94b9f0d42932cbb2a1e43dd5",
      "WideIcon": "2905515bc00a1d64e83466ec8e50f8b6",
      "StackableId": 19010
    },
    {
      "LocalizedName": "85e0b02e16c64eb1a5bcafb8cd769c25",
      "DevName": "Psychopomp",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "edd99cc32ca6f2842b2cb83249945c2a",
      "WideIcon": "9872f8cd16d7327418b09294cfa319e6",
      "StackableId": 19011
    },
    {
      "LocalizedName": "75e925f886164954b000e65caf1d35ee",
      "DevName": "Ranid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "0380b89b0ba8de847843f22c25b41a56",
      "WideIcon": "d3038956f9767d74bbbce0659b07474d",
      "StackableId": 19012
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "Ravener",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 19013
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "Seeker",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 19014
    },
    {
      "LocalizedName": "ed420e0ca45a4eaeb1010151e236f334",
      "DevName": "Spearmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "7853a4b1214bef74a8bbdf17f0a45bb8",
      "WideIcon": "6f69edc7410650c43bee267eef585b06",
      "StackableId": 19015
    },
    {
      "LocalizedName": "051b83cf1878426a9bc0a329babbea8f",
      "DevName": "Stormcaller",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "6e29d30d928547b4e941ce3e6e4e83b3",
      "WideIcon": "3af1fdc53169d044b939cce7ffb561a1",
      "StackableId": 19016
    },
    {
      "LocalizedName": "f05ef57b8e994e5e9d43bbfcae9a09a6",
      "DevName": "Vanguard",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 19017
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "Glutton",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 19018
    },
    {
      "LocalizedName": "0fa51e1bd7c84e4da4ceee830532e406",
      "DevName": "BloodPriest",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "d9cffa65b2aa1414e9371fc9b2f4c561",
      "WideIcon": "a7e0c7a6f0fa2ef49bf684950de34567",
      "StackableId": 19019
    },
    {
      "LocalizedName": "3c09a1c88b5b44608679b7a34350ca52",
      "DevName": "MetalWarden",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "8f50318bf676ca047b3e36d5b6de7815",
      "WideIcon": "65e28ab3b75c7cb478a1b24b46fca7d2",
      "StackableId": 19020
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "Swordmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 19021
    },
    {
      "LocalizedName": "da0272c6ff4b48bf809f130d8e2dba02",
      "DevName": "Druid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "907a9b3d24a8c9f459e02c87d86fa9da",
      "WideIcon": "6f50396e26efe6c4bbad274e2c90b8a4",
      "StackableId": 19022
    },
    {
      "LocalizedName": "54211e1d9be54efeac2e3311e96b898b",
      "DevName": "Bakko_EasterEvent",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 19023
    },
    {
      "LocalizedName": "d25b42991ba94cbeb7234aad3e176351",
      "DevName": "Thorn",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "57f133d34e231d04d922dd5e5d234a71",
      "WideIcon": "aab126231d9ff344f9f88ab230a5e66f",
      "StackableId": 19025
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "AshkaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 19026
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "FreyaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 19027
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "JumongCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 19028
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "RaigonCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 19029
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "RookCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 19030
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "SiriusCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 19031
    },
    {
      "LocalizedName": "f18695e2f3b64d37a8a0e085db007eac",
      "DevName": "MirrorMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "e10caaf367fdb6f459483a4c9be850a3",
      "WideIcon": "9c4186a6214f12448a7091710b0cde6c",
      "StackableId": 19035
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "JadeCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 19038
    },
    {
      "LocalizedName": "448d6f054228474eb92862767d3e21a8",
      "DevName": "RandomChampion",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "c175e343deeceff48a7fc58412aabe4e",
      "WideIcon": "7823c6971f6585846a1252e279fd02da",
      "StackableId": 19040
    },
    {
      "LocalizedName": "b2c969dbc2834e9296155eb97e2db638",
      "DevName": "FrostMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Wins",
      "Icon": "f3e8949aa208a3346a497c336a7002cd",
      "WideIcon": "50404d271ae2a4f4f8b52de966688dc1",
      "StackableId": 19041
    },
    {
      "LocalizedName": "703f566d634d4ed6941a9d6d04f92979",
      "DevName": "Alchemist",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "83cd4bf3be6455f4cbbf803035b6d0fe",
      "WideIcon": "e5554b8a15ffc1a499a3807bb3a37b56",
      "StackableId": 20001
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "Astronomer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 20002
    },
    {
      "LocalizedName": "cb26b90df02745c8b035f856a7bba58d",
      "DevName": "Engineer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "423d20132a1e9224d92e489664702e03",
      "WideIcon": "decba44679fbdae4bb7d0d1cb6a97682",
      "StackableId": 20003
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "Gunner",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 20004
    },
    {
      "LocalizedName": "75edf47280604ea4a632ae97664d3c23",
      "DevName": "Harbinger",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "b6baa190db3bf814cae790b79f622ea0",
      "WideIcon": "bb37e5d448c511e47b808987d0d4f9e8",
      "StackableId": 20005
    },
    {
      "LocalizedName": "185585849e33412ab192917339444df1",
      "DevName": "Herald",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "9de8223b455d0474a9bbf2f32f9c7102",
      "WideIcon": "b0d66b8b9f228724093b8a3e66c3fef6",
      "StackableId": 20006
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "Igniter",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 20007
    },
    {
      "LocalizedName": "943be726de724906be18c214511a3f7b",
      "DevName": "Inhibitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "6477c7810f95a394e936caacf42d0b4e",
      "WideIcon": "f1cc53a29c58089478f6438589d9b32d",
      "StackableId": 20008
    },
    {
      "LocalizedName": "6868ad46fc604034a78f3c57300c3257",
      "DevName": "Inquisitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "b9f935b04557efa4e95d6cec4d151985",
      "WideIcon": "427116cdee46bad4cbaa99d7063e0832",
      "StackableId": 20009
    },
    {
      "LocalizedName": "8b8ca9a3af044131a61889b28bbcb00f",
      "DevName": "Nomad",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "246d3bbb94b9f0d42932cbb2a1e43dd5",
      "WideIcon": "2905515bc00a1d64e83466ec8e50f8b6",
      "StackableId": 20010
    },
    {
      "LocalizedName": "85e0b02e16c64eb1a5bcafb8cd769c25",
      "DevName": "Psychopomp",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "edd99cc32ca6f2842b2cb83249945c2a",
      "WideIcon": "9872f8cd16d7327418b09294cfa319e6",
      "StackableId": 20011
    },
    {
      "LocalizedName": "75e925f886164954b000e65caf1d35ee",
      "DevName": "Ranid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "0380b89b0ba8de847843f22c25b41a56",
      "WideIcon": "d3038956f9767d74bbbce0659b07474d",
      "StackableId": 20012
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "Ravener",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 20013
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "Seeker",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 20014
    },
    {
      "LocalizedName": "ed420e0ca45a4eaeb1010151e236f334",
      "DevName": "Spearmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "7853a4b1214bef74a8bbdf17f0a45bb8",
      "WideIcon": "6f69edc7410650c43bee267eef585b06",
      "StackableId": 20015
    },
    {
      "LocalizedName": "051b83cf1878426a9bc0a329babbea8f",
      "DevName": "Stormcaller",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "6e29d30d928547b4e941ce3e6e4e83b3",
      "WideIcon": "3af1fdc53169d044b939cce7ffb561a1",
      "StackableId": 20016
    },
    {
      "LocalizedName": "f05ef57b8e994e5e9d43bbfcae9a09a6",
      "DevName": "Vanguard",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 20017
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "Glutton",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 20018
    },
    {
      "LocalizedName": "0fa51e1bd7c84e4da4ceee830532e406",
      "DevName": "BloodPriest",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "d9cffa65b2aa1414e9371fc9b2f4c561",
      "WideIcon": "a7e0c7a6f0fa2ef49bf684950de34567",
      "StackableId": 20019
    },
    {
      "LocalizedName": "3c09a1c88b5b44608679b7a34350ca52",
      "DevName": "MetalWarden",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "8f50318bf676ca047b3e36d5b6de7815",
      "WideIcon": "65e28ab3b75c7cb478a1b24b46fca7d2",
      "StackableId": 20020
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "Swordmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 20021
    },
    {
      "LocalizedName": "da0272c6ff4b48bf809f130d8e2dba02",
      "DevName": "Druid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "907a9b3d24a8c9f459e02c87d86fa9da",
      "WideIcon": "6f50396e26efe6c4bbad274e2c90b8a4",
      "StackableId": 20022
    },
    {
      "LocalizedName": "54211e1d9be54efeac2e3311e96b898b",
      "DevName": "Bakko_EasterEvent",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 20023
    },
    {
      "LocalizedName": "d25b42991ba94cbeb7234aad3e176351",
      "DevName": "Thorn",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "57f133d34e231d04d922dd5e5d234a71",
      "WideIcon": "aab126231d9ff344f9f88ab230a5e66f",
      "StackableId": 20025
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "AshkaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 20026
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "FreyaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 20027
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "JumongCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 20028
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "RaigonCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 20029
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "RookCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 20030
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "SiriusCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 20031
    },
    {
      "LocalizedName": "f18695e2f3b64d37a8a0e085db007eac",
      "DevName": "MirrorMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "e10caaf367fdb6f459483a4c9be850a3",
      "WideIcon": "9c4186a6214f12448a7091710b0cde6c",
      "StackableId": 20035
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "JadeCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 20038
    },
    {
      "LocalizedName": "448d6f054228474eb92862767d3e21a8",
      "DevName": "RandomChampion",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "c175e343deeceff48a7fc58412aabe4e",
      "WideIcon": "7823c6971f6585846a1252e279fd02da",
      "StackableId": 20040
    },
    {
      "LocalizedName": "b2c969dbc2834e9296155eb97e2db638",
      "DevName": "FrostMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterRanked3v3Losses",
      "Icon": "f3e8949aa208a3346a497c336a7002cd",
      "WideIcon": "50404d271ae2a4f4f8b52de966688dc1",
      "StackableId": 20041
    },
    {
      "LocalizedName": "703f566d634d4ed6941a9d6d04f92979",
      "DevName": "Alchemist",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "83cd4bf3be6455f4cbbf803035b6d0fe",
      "WideIcon": "e5554b8a15ffc1a499a3807bb3a37b56",
      "StackableId": 21001
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "Astronomer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 21002
    },
    {
      "LocalizedName": "cb26b90df02745c8b035f856a7bba58d",
      "DevName": "Engineer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "423d20132a1e9224d92e489664702e03",
      "WideIcon": "decba44679fbdae4bb7d0d1cb6a97682",
      "StackableId": 21003
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "Gunner",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 21004
    },
    {
      "LocalizedName": "75edf47280604ea4a632ae97664d3c23",
      "DevName": "Harbinger",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "b6baa190db3bf814cae790b79f622ea0",
      "WideIcon": "bb37e5d448c511e47b808987d0d4f9e8",
      "StackableId": 21005
    },
    {
      "LocalizedName": "185585849e33412ab192917339444df1",
      "DevName": "Herald",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "9de8223b455d0474a9bbf2f32f9c7102",
      "WideIcon": "b0d66b8b9f228724093b8a3e66c3fef6",
      "StackableId": 21006
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "Igniter",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 21007
    },
    {
      "LocalizedName": "943be726de724906be18c214511a3f7b",
      "DevName": "Inhibitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "6477c7810f95a394e936caacf42d0b4e",
      "WideIcon": "f1cc53a29c58089478f6438589d9b32d",
      "StackableId": 21008
    },
    {
      "LocalizedName": "6868ad46fc604034a78f3c57300c3257",
      "DevName": "Inquisitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "b9f935b04557efa4e95d6cec4d151985",
      "WideIcon": "427116cdee46bad4cbaa99d7063e0832",
      "StackableId": 21009
    },
    {
      "LocalizedName": "8b8ca9a3af044131a61889b28bbcb00f",
      "DevName": "Nomad",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "246d3bbb94b9f0d42932cbb2a1e43dd5",
      "WideIcon": "2905515bc00a1d64e83466ec8e50f8b6",
      "StackableId": 21010
    },
    {
      "LocalizedName": "85e0b02e16c64eb1a5bcafb8cd769c25",
      "DevName": "Psychopomp",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "edd99cc32ca6f2842b2cb83249945c2a",
      "WideIcon": "9872f8cd16d7327418b09294cfa319e6",
      "StackableId": 21011
    },
    {
      "LocalizedName": "75e925f886164954b000e65caf1d35ee",
      "DevName": "Ranid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "0380b89b0ba8de847843f22c25b41a56",
      "WideIcon": "d3038956f9767d74bbbce0659b07474d",
      "StackableId": 21012
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "Ravener",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 21013
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "Seeker",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 21014
    },
    {
      "LocalizedName": "ed420e0ca45a4eaeb1010151e236f334",
      "DevName": "Spearmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "7853a4b1214bef74a8bbdf17f0a45bb8",
      "WideIcon": "6f69edc7410650c43bee267eef585b06",
      "StackableId": 21015
    },
    {
      "LocalizedName": "051b83cf1878426a9bc0a329babbea8f",
      "DevName": "Stormcaller",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "6e29d30d928547b4e941ce3e6e4e83b3",
      "WideIcon": "3af1fdc53169d044b939cce7ffb561a1",
      "StackableId": 21016
    },
    {
      "LocalizedName": "f05ef57b8e994e5e9d43bbfcae9a09a6",
      "DevName": "Vanguard",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 21017
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "Glutton",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 21018
    },
    {
      "LocalizedName": "0fa51e1bd7c84e4da4ceee830532e406",
      "DevName": "BloodPriest",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "d9cffa65b2aa1414e9371fc9b2f4c561",
      "WideIcon": "a7e0c7a6f0fa2ef49bf684950de34567",
      "StackableId": 21019
    },
    {
      "LocalizedName": "3c09a1c88b5b44608679b7a34350ca52",
      "DevName": "MetalWarden",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "8f50318bf676ca047b3e36d5b6de7815",
      "WideIcon": "65e28ab3b75c7cb478a1b24b46fca7d2",
      "StackableId": 21020
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "Swordmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 21021
    },
    {
      "LocalizedName": "da0272c6ff4b48bf809f130d8e2dba02",
      "DevName": "Druid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "907a9b3d24a8c9f459e02c87d86fa9da",
      "WideIcon": "6f50396e26efe6c4bbad274e2c90b8a4",
      "StackableId": 21022
    },
    {
      "LocalizedName": "54211e1d9be54efeac2e3311e96b898b",
      "DevName": "Bakko_EasterEvent",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 21023
    },
    {
      "LocalizedName": "d25b42991ba94cbeb7234aad3e176351",
      "DevName": "Thorn",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "57f133d34e231d04d922dd5e5d234a71",
      "WideIcon": "aab126231d9ff344f9f88ab230a5e66f",
      "StackableId": 21025
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "AshkaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 21026
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "FreyaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 21027
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "JumongCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 21028
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "RaigonCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 21029
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "RookCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 21030
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "SiriusCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 21031
    },
    {
      "LocalizedName": "f18695e2f3b64d37a8a0e085db007eac",
      "DevName": "MirrorMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "e10caaf367fdb6f459483a4c9be850a3",
      "WideIcon": "9c4186a6214f12448a7091710b0cde6c",
      "StackableId": 21035
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "JadeCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 21038
    },
    {
      "LocalizedName": "448d6f054228474eb92862767d3e21a8",
      "DevName": "RandomChampion",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "c175e343deeceff48a7fc58412aabe4e",
      "WideIcon": "7823c6971f6585846a1252e279fd02da",
      "StackableId": 21040
    },
    {
      "LocalizedName": "b2c969dbc2834e9296155eb97e2db638",
      "DevName": "FrostMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Wins",
      "Icon": "f3e8949aa208a3346a497c336a7002cd",
      "WideIcon": "50404d271ae2a4f4f8b52de966688dc1",
      "StackableId": 21041
    },
    {
      "LocalizedName": "703f566d634d4ed6941a9d6d04f92979",
      "DevName": "Alchemist",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "83cd4bf3be6455f4cbbf803035b6d0fe",
      "WideIcon": "e5554b8a15ffc1a499a3807bb3a37b56",
      "StackableId": 22001
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "Astronomer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 22002
    },
    {
      "LocalizedName": "cb26b90df02745c8b035f856a7bba58d",
      "DevName": "Engineer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "423d20132a1e9224d92e489664702e03",
      "WideIcon": "decba44679fbdae4bb7d0d1cb6a97682",
      "StackableId": 22003
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "Gunner",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 22004
    },
    {
      "LocalizedName": "75edf47280604ea4a632ae97664d3c23",
      "DevName": "Harbinger",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "b6baa190db3bf814cae790b79f622ea0",
      "WideIcon": "bb37e5d448c511e47b808987d0d4f9e8",
      "StackableId": 22005
    },
    {
      "LocalizedName": "185585849e33412ab192917339444df1",
      "DevName": "Herald",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "9de8223b455d0474a9bbf2f32f9c7102",
      "WideIcon": "b0d66b8b9f228724093b8a3e66c3fef6",
      "StackableId": 22006
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "Igniter",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 22007
    },
    {
      "LocalizedName": "943be726de724906be18c214511a3f7b",
      "DevName": "Inhibitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "6477c7810f95a394e936caacf42d0b4e",
      "WideIcon": "f1cc53a29c58089478f6438589d9b32d",
      "StackableId": 22008
    },
    {
      "LocalizedName": "6868ad46fc604034a78f3c57300c3257",
      "DevName": "Inquisitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "b9f935b04557efa4e95d6cec4d151985",
      "WideIcon": "427116cdee46bad4cbaa99d7063e0832",
      "StackableId": 22009
    },
    {
      "LocalizedName": "8b8ca9a3af044131a61889b28bbcb00f",
      "DevName": "Nomad",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "246d3bbb94b9f0d42932cbb2a1e43dd5",
      "WideIcon": "2905515bc00a1d64e83466ec8e50f8b6",
      "StackableId": 22010
    },
    {
      "LocalizedName": "85e0b02e16c64eb1a5bcafb8cd769c25",
      "DevName": "Psychopomp",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "edd99cc32ca6f2842b2cb83249945c2a",
      "WideIcon": "9872f8cd16d7327418b09294cfa319e6",
      "StackableId": 22011
    },
    {
      "LocalizedName": "75e925f886164954b000e65caf1d35ee",
      "DevName": "Ranid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "0380b89b0ba8de847843f22c25b41a56",
      "WideIcon": "d3038956f9767d74bbbce0659b07474d",
      "StackableId": 22012
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "Ravener",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 22013
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "Seeker",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 22014
    },
    {
      "LocalizedName": "ed420e0ca45a4eaeb1010151e236f334",
      "DevName": "Spearmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "7853a4b1214bef74a8bbdf17f0a45bb8",
      "WideIcon": "6f69edc7410650c43bee267eef585b06",
      "StackableId": 22015
    },
    {
      "LocalizedName": "051b83cf1878426a9bc0a329babbea8f",
      "DevName": "Stormcaller",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "6e29d30d928547b4e941ce3e6e4e83b3",
      "WideIcon": "3af1fdc53169d044b939cce7ffb561a1",
      "StackableId": 22016
    },
    {
      "LocalizedName": "f05ef57b8e994e5e9d43bbfcae9a09a6",
      "DevName": "Vanguard",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 22017
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "Glutton",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 22018
    },
    {
      "LocalizedName": "0fa51e1bd7c84e4da4ceee830532e406",
      "DevName": "BloodPriest",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "d9cffa65b2aa1414e9371fc9b2f4c561",
      "WideIcon": "a7e0c7a6f0fa2ef49bf684950de34567",
      "StackableId": 22019
    },
    {
      "LocalizedName": "3c09a1c88b5b44608679b7a34350ca52",
      "DevName": "MetalWarden",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "8f50318bf676ca047b3e36d5b6de7815",
      "WideIcon": "65e28ab3b75c7cb478a1b24b46fca7d2",
      "StackableId": 22020
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "Swordmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 22021
    },
    {
      "LocalizedName": "da0272c6ff4b48bf809f130d8e2dba02",
      "DevName": "Druid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "907a9b3d24a8c9f459e02c87d86fa9da",
      "WideIcon": "6f50396e26efe6c4bbad274e2c90b8a4",
      "StackableId": 22022
    },
    {
      "LocalizedName": "54211e1d9be54efeac2e3311e96b898b",
      "DevName": "Bakko_EasterEvent",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 22023
    },
    {
      "LocalizedName": "d25b42991ba94cbeb7234aad3e176351",
      "DevName": "Thorn",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "57f133d34e231d04d922dd5e5d234a71",
      "WideIcon": "aab126231d9ff344f9f88ab230a5e66f",
      "StackableId": 22025
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "AshkaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 22026
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "FreyaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 22027
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "JumongCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 22028
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "RaigonCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 22029
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "RookCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 22030
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "SiriusCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 22031
    },
    {
      "LocalizedName": "f18695e2f3b64d37a8a0e085db007eac",
      "DevName": "MirrorMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "e10caaf367fdb6f459483a4c9be850a3",
      "WideIcon": "9c4186a6214f12448a7091710b0cde6c",
      "StackableId": 22035
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "JadeCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 22038
    },
    {
      "LocalizedName": "448d6f054228474eb92862767d3e21a8",
      "DevName": "RandomChampion",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "c175e343deeceff48a7fc58412aabe4e",
      "WideIcon": "7823c6971f6585846a1252e279fd02da",
      "StackableId": 22040
    },
    {
      "LocalizedName": "b2c969dbc2834e9296155eb97e2db638",
      "DevName": "FrostMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked2v2Losses",
      "Icon": "f3e8949aa208a3346a497c336a7002cd",
      "WideIcon": "50404d271ae2a4f4f8b52de966688dc1",
      "StackableId": 22041
    },
    {
      "LocalizedName": "703f566d634d4ed6941a9d6d04f92979",
      "DevName": "Alchemist",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "83cd4bf3be6455f4cbbf803035b6d0fe",
      "WideIcon": "e5554b8a15ffc1a499a3807bb3a37b56",
      "StackableId": 24001
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "Astronomer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 24002
    },
    {
      "LocalizedName": "cb26b90df02745c8b035f856a7bba58d",
      "DevName": "Engineer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "423d20132a1e9224d92e489664702e03",
      "WideIcon": "decba44679fbdae4bb7d0d1cb6a97682",
      "StackableId": 24003
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "Gunner",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 24004
    },
    {
      "LocalizedName": "75edf47280604ea4a632ae97664d3c23",
      "DevName": "Harbinger",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "b6baa190db3bf814cae790b79f622ea0",
      "WideIcon": "bb37e5d448c511e47b808987d0d4f9e8",
      "StackableId": 24005
    },
    {
      "LocalizedName": "185585849e33412ab192917339444df1",
      "DevName": "Herald",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "9de8223b455d0474a9bbf2f32f9c7102",
      "WideIcon": "b0d66b8b9f228724093b8a3e66c3fef6",
      "StackableId": 24006
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "Igniter",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 24007
    },
    {
      "LocalizedName": "943be726de724906be18c214511a3f7b",
      "DevName": "Inhibitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "6477c7810f95a394e936caacf42d0b4e",
      "WideIcon": "f1cc53a29c58089478f6438589d9b32d",
      "StackableId": 24008
    },
    {
      "LocalizedName": "6868ad46fc604034a78f3c57300c3257",
      "DevName": "Inquisitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "b9f935b04557efa4e95d6cec4d151985",
      "WideIcon": "427116cdee46bad4cbaa99d7063e0832",
      "StackableId": 24009
    },
    {
      "LocalizedName": "8b8ca9a3af044131a61889b28bbcb00f",
      "DevName": "Nomad",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "246d3bbb94b9f0d42932cbb2a1e43dd5",
      "WideIcon": "2905515bc00a1d64e83466ec8e50f8b6",
      "StackableId": 24010
    },
    {
      "LocalizedName": "85e0b02e16c64eb1a5bcafb8cd769c25",
      "DevName": "Psychopomp",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "edd99cc32ca6f2842b2cb83249945c2a",
      "WideIcon": "9872f8cd16d7327418b09294cfa319e6",
      "StackableId": 24011
    },
    {
      "LocalizedName": "75e925f886164954b000e65caf1d35ee",
      "DevName": "Ranid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "0380b89b0ba8de847843f22c25b41a56",
      "WideIcon": "d3038956f9767d74bbbce0659b07474d",
      "StackableId": 24012
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "Ravener",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 24013
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "Seeker",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 24014
    },
    {
      "LocalizedName": "ed420e0ca45a4eaeb1010151e236f334",
      "DevName": "Spearmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "7853a4b1214bef74a8bbdf17f0a45bb8",
      "WideIcon": "6f69edc7410650c43bee267eef585b06",
      "StackableId": 24015
    },
    {
      "LocalizedName": "051b83cf1878426a9bc0a329babbea8f",
      "DevName": "Stormcaller",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "6e29d30d928547b4e941ce3e6e4e83b3",
      "WideIcon": "3af1fdc53169d044b939cce7ffb561a1",
      "StackableId": 24016
    },
    {
      "LocalizedName": "f05ef57b8e994e5e9d43bbfcae9a09a6",
      "DevName": "Vanguard",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 24017
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "Glutton",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 24018
    },
    {
      "LocalizedName": "0fa51e1bd7c84e4da4ceee830532e406",
      "DevName": "BloodPriest",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "d9cffa65b2aa1414e9371fc9b2f4c561",
      "WideIcon": "a7e0c7a6f0fa2ef49bf684950de34567",
      "StackableId": 24019
    },
    {
      "LocalizedName": "3c09a1c88b5b44608679b7a34350ca52",
      "DevName": "MetalWarden",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "8f50318bf676ca047b3e36d5b6de7815",
      "WideIcon": "65e28ab3b75c7cb478a1b24b46fca7d2",
      "StackableId": 24020
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "Swordmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 24021
    },
    {
      "LocalizedName": "da0272c6ff4b48bf809f130d8e2dba02",
      "DevName": "Druid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "907a9b3d24a8c9f459e02c87d86fa9da",
      "WideIcon": "6f50396e26efe6c4bbad274e2c90b8a4",
      "StackableId": 24022
    },
    {
      "LocalizedName": "54211e1d9be54efeac2e3311e96b898b",
      "DevName": "Bakko_EasterEvent",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 24023
    },
    {
      "LocalizedName": "d25b42991ba94cbeb7234aad3e176351",
      "DevName": "Thorn",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "57f133d34e231d04d922dd5e5d234a71",
      "WideIcon": "aab126231d9ff344f9f88ab230a5e66f",
      "StackableId": 24025
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "AshkaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 24026
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "FreyaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 24027
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "JumongCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 24028
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "RaigonCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 24029
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "RookCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 24030
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "SiriusCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 24031
    },
    {
      "LocalizedName": "f18695e2f3b64d37a8a0e085db007eac",
      "DevName": "MirrorMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "e10caaf367fdb6f459483a4c9be850a3",
      "WideIcon": "9c4186a6214f12448a7091710b0cde6c",
      "StackableId": 24035
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "JadeCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 24038
    },
    {
      "LocalizedName": "448d6f054228474eb92862767d3e21a8",
      "DevName": "RandomChampion",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "c175e343deeceff48a7fc58412aabe4e",
      "WideIcon": "7823c6971f6585846a1252e279fd02da",
      "StackableId": 24040
    },
    {
      "LocalizedName": "b2c969dbc2834e9296155eb97e2db638",
      "DevName": "FrostMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Losses",
      "Icon": "f3e8949aa208a3346a497c336a7002cd",
      "WideIcon": "50404d271ae2a4f4f8b52de966688dc1",
      "StackableId": 24041
    },
    {
      "LocalizedName": "703f566d634d4ed6941a9d6d04f92979",
      "DevName": "Alchemist",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "83cd4bf3be6455f4cbbf803035b6d0fe",
      "WideIcon": "e5554b8a15ffc1a499a3807bb3a37b56",
      "StackableId": 23001
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "Astronomer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 23002
    },
    {
      "LocalizedName": "cb26b90df02745c8b035f856a7bba58d",
      "DevName": "Engineer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "423d20132a1e9224d92e489664702e03",
      "WideIcon": "decba44679fbdae4bb7d0d1cb6a97682",
      "StackableId": 23003
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "Gunner",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 23004
    },
    {
      "LocalizedName": "75edf47280604ea4a632ae97664d3c23",
      "DevName": "Harbinger",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "b6baa190db3bf814cae790b79f622ea0",
      "WideIcon": "bb37e5d448c511e47b808987d0d4f9e8",
      "StackableId": 23005
    },
    {
      "LocalizedName": "185585849e33412ab192917339444df1",
      "DevName": "Herald",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "9de8223b455d0474a9bbf2f32f9c7102",
      "WideIcon": "b0d66b8b9f228724093b8a3e66c3fef6",
      "StackableId": 23006
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "Igniter",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 23007
    },
    {
      "LocalizedName": "943be726de724906be18c214511a3f7b",
      "DevName": "Inhibitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "6477c7810f95a394e936caacf42d0b4e",
      "WideIcon": "f1cc53a29c58089478f6438589d9b32d",
      "StackableId": 23008
    },
    {
      "LocalizedName": "6868ad46fc604034a78f3c57300c3257",
      "DevName": "Inquisitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "b9f935b04557efa4e95d6cec4d151985",
      "WideIcon": "427116cdee46bad4cbaa99d7063e0832",
      "StackableId": 23009
    },
    {
      "LocalizedName": "8b8ca9a3af044131a61889b28bbcb00f",
      "DevName": "Nomad",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "246d3bbb94b9f0d42932cbb2a1e43dd5",
      "WideIcon": "2905515bc00a1d64e83466ec8e50f8b6",
      "StackableId": 23010
    },
    {
      "LocalizedName": "85e0b02e16c64eb1a5bcafb8cd769c25",
      "DevName": "Psychopomp",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "edd99cc32ca6f2842b2cb83249945c2a",
      "WideIcon": "9872f8cd16d7327418b09294cfa319e6",
      "StackableId": 23011
    },
    {
      "LocalizedName": "75e925f886164954b000e65caf1d35ee",
      "DevName": "Ranid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "0380b89b0ba8de847843f22c25b41a56",
      "WideIcon": "d3038956f9767d74bbbce0659b07474d",
      "StackableId": 23012
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "Ravener",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 23013
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "Seeker",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 23014
    },
    {
      "LocalizedName": "ed420e0ca45a4eaeb1010151e236f334",
      "DevName": "Spearmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "7853a4b1214bef74a8bbdf17f0a45bb8",
      "WideIcon": "6f69edc7410650c43bee267eef585b06",
      "StackableId": 23015
    },
    {
      "LocalizedName": "051b83cf1878426a9bc0a329babbea8f",
      "DevName": "Stormcaller",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "6e29d30d928547b4e941ce3e6e4e83b3",
      "WideIcon": "3af1fdc53169d044b939cce7ffb561a1",
      "StackableId": 23016
    },
    {
      "LocalizedName": "f05ef57b8e994e5e9d43bbfcae9a09a6",
      "DevName": "Vanguard",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 23017
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "Glutton",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 23018
    },
    {
      "LocalizedName": "0fa51e1bd7c84e4da4ceee830532e406",
      "DevName": "BloodPriest",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "d9cffa65b2aa1414e9371fc9b2f4c561",
      "WideIcon": "a7e0c7a6f0fa2ef49bf684950de34567",
      "StackableId": 23019
    },
    {
      "LocalizedName": "3c09a1c88b5b44608679b7a34350ca52",
      "DevName": "MetalWarden",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "8f50318bf676ca047b3e36d5b6de7815",
      "WideIcon": "65e28ab3b75c7cb478a1b24b46fca7d2",
      "StackableId": 23020
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "Swordmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 23021
    },
    {
      "LocalizedName": "da0272c6ff4b48bf809f130d8e2dba02",
      "DevName": "Druid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "907a9b3d24a8c9f459e02c87d86fa9da",
      "WideIcon": "6f50396e26efe6c4bbad274e2c90b8a4",
      "StackableId": 23022
    },
    {
      "LocalizedName": "54211e1d9be54efeac2e3311e96b898b",
      "DevName": "Bakko_EasterEvent",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 23023
    },
    {
      "LocalizedName": "d25b42991ba94cbeb7234aad3e176351",
      "DevName": "Thorn",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "57f133d34e231d04d922dd5e5d234a71",
      "WideIcon": "aab126231d9ff344f9f88ab230a5e66f",
      "StackableId": 23025
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "AshkaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 23026
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "FreyaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 23027
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "JumongCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 23028
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "RaigonCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 23029
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "RookCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 23030
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "SiriusCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 23031
    },
    {
      "LocalizedName": "f18695e2f3b64d37a8a0e085db007eac",
      "DevName": "MirrorMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "e10caaf367fdb6f459483a4c9be850a3",
      "WideIcon": "9c4186a6214f12448a7091710b0cde6c",
      "StackableId": 23035
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "JadeCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 23038
    },
    {
      "LocalizedName": "448d6f054228474eb92862767d3e21a8",
      "DevName": "RandomChampion",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "c175e343deeceff48a7fc58412aabe4e",
      "WideIcon": "7823c6971f6585846a1252e279fd02da",
      "StackableId": 23040
    },
    {
      "LocalizedName": "b2c969dbc2834e9296155eb97e2db638",
      "DevName": "FrostMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterUnranked3v3Wins",
      "Icon": "f3e8949aa208a3346a497c336a7002cd",
      "WideIcon": "50404d271ae2a4f4f8b52de966688dc1",
      "StackableId": 23041
    },
    {
      "LocalizedName": "",
      "DevName": "Unranked3v3Wins",
      "IdRangeName": "",
      "StackableRangeName": "Unranked3v3Wins",
      "StackableId": 12
    },
    {
      "LocalizedName": "",
      "DevName": "Unranked3v3Losses",
      "IdRangeName": "",
      "StackableRangeName": "Unranked3v3Losses",
      "StackableId": 13
    },
    {
      "LocalizedName": "",
      "DevName": "Ranked3v3Losses",
      "IdRangeName": "",
      "StackableRangeName": "Ranked3v3Losses",
      "StackableId": 17
    },
    {
      "LocalizedName": "",
      "DevName": "Ranked3v3Wins",
      "IdRangeName": "",
      "StackableRangeName": "Ranked3v3Wins",
      "StackableId": 16
    },
    {
      "LocalizedName": "",
      "DevName": "Ranked2v2Losses",
      "IdRangeName": "",
      "StackableRangeName": "Ranked2v2Losses",
      "StackableId": 15
    },
    {
      "LocalizedName": "",
      "DevName": "Unranked2v2Losses",
      "IdRangeName": "",
      "StackableRangeName": "Unranked2v2Losses",
      "StackableId": 11
    },
    {
      "LocalizedName": "",
      "DevName": "Unranked2v2Wins",
      "IdRangeName": "",
      "StackableRangeName": "Unranked2v2Wins",
      "StackableId": 10
    },
    {
      "LocalizedName": "",
      "DevName": "Ranked2v2Wins",
      "IdRangeName": "",
      "StackableRangeName": "Ranked2v2Wins",
      "StackableId": 14
    },
    {
      "LocalizedName": "703f566d634d4ed6941a9d6d04f92979",
      "DevName": "Alchemist",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "83cd4bf3be6455f4cbbf803035b6d0fe",
      "WideIcon": "e5554b8a15ffc1a499a3807bb3a37b56",
      "StackableId": 26001
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "Astronomer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 26002
    },
    {
      "LocalizedName": "cb26b90df02745c8b035f856a7bba58d",
      "DevName": "Engineer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "423d20132a1e9224d92e489664702e03",
      "WideIcon": "decba44679fbdae4bb7d0d1cb6a97682",
      "StackableId": 26003
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "Gunner",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 26004
    },
    {
      "LocalizedName": "75edf47280604ea4a632ae97664d3c23",
      "DevName": "Harbinger",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "b6baa190db3bf814cae790b79f622ea0",
      "WideIcon": "bb37e5d448c511e47b808987d0d4f9e8",
      "StackableId": 26005
    },
    {
      "LocalizedName": "185585849e33412ab192917339444df1",
      "DevName": "Herald",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "9de8223b455d0474a9bbf2f32f9c7102",
      "WideIcon": "b0d66b8b9f228724093b8a3e66c3fef6",
      "StackableId": 26006
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "Igniter",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 26007
    },
    {
      "LocalizedName": "943be726de724906be18c214511a3f7b",
      "DevName": "Inhibitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "6477c7810f95a394e936caacf42d0b4e",
      "WideIcon": "f1cc53a29c58089478f6438589d9b32d",
      "StackableId": 26008
    },
    {
      "LocalizedName": "6868ad46fc604034a78f3c57300c3257",
      "DevName": "Inquisitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "b9f935b04557efa4e95d6cec4d151985",
      "WideIcon": "427116cdee46bad4cbaa99d7063e0832",
      "StackableId": 26009
    },
    {
      "LocalizedName": "8b8ca9a3af044131a61889b28bbcb00f",
      "DevName": "Nomad",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "246d3bbb94b9f0d42932cbb2a1e43dd5",
      "WideIcon": "2905515bc00a1d64e83466ec8e50f8b6",
      "StackableId": 26010
    },
    {
      "LocalizedName": "85e0b02e16c64eb1a5bcafb8cd769c25",
      "DevName": "Psychopomp",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "edd99cc32ca6f2842b2cb83249945c2a",
      "WideIcon": "9872f8cd16d7327418b09294cfa319e6",
      "StackableId": 26011
    },
    {
      "LocalizedName": "75e925f886164954b000e65caf1d35ee",
      "DevName": "Ranid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "0380b89b0ba8de847843f22c25b41a56",
      "WideIcon": "d3038956f9767d74bbbce0659b07474d",
      "StackableId": 26012
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "Ravener",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 26013
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "Seeker",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 26014
    },
    {
      "LocalizedName": "ed420e0ca45a4eaeb1010151e236f334",
      "DevName": "Spearmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "7853a4b1214bef74a8bbdf17f0a45bb8",
      "WideIcon": "6f69edc7410650c43bee267eef585b06",
      "StackableId": 26015
    },
    {
      "LocalizedName": "051b83cf1878426a9bc0a329babbea8f",
      "DevName": "Stormcaller",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "6e29d30d928547b4e941ce3e6e4e83b3",
      "WideIcon": "3af1fdc53169d044b939cce7ffb561a1",
      "StackableId": 26016
    },
    {
      "LocalizedName": "f05ef57b8e994e5e9d43bbfcae9a09a6",
      "DevName": "Vanguard",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 26017
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "Glutton",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 26018
    },
    {
      "LocalizedName": "0fa51e1bd7c84e4da4ceee830532e406",
      "DevName": "BloodPriest",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "d9cffa65b2aa1414e9371fc9b2f4c561",
      "WideIcon": "a7e0c7a6f0fa2ef49bf684950de34567",
      "StackableId": 26019
    },
    {
      "LocalizedName": "3c09a1c88b5b44608679b7a34350ca52",
      "DevName": "MetalWarden",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "8f50318bf676ca047b3e36d5b6de7815",
      "WideIcon": "65e28ab3b75c7cb478a1b24b46fca7d2",
      "StackableId": 26020
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "Swordmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 26021
    },
    {
      "LocalizedName": "da0272c6ff4b48bf809f130d8e2dba02",
      "DevName": "Druid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "907a9b3d24a8c9f459e02c87d86fa9da",
      "WideIcon": "6f50396e26efe6c4bbad274e2c90b8a4",
      "StackableId": 26022
    },
    {
      "LocalizedName": "54211e1d9be54efeac2e3311e96b898b",
      "DevName": "Bakko_EasterEvent",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 26023
    },
    {
      "LocalizedName": "d25b42991ba94cbeb7234aad3e176351",
      "DevName": "Thorn",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "57f133d34e231d04d922dd5e5d234a71",
      "WideIcon": "aab126231d9ff344f9f88ab230a5e66f",
      "StackableId": 26025
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "AshkaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 26026
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "FreyaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 26027
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "JumongCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 26028
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "RaigonCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 26029
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "RookCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 26030
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "SiriusCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 26031
    },
    {
      "LocalizedName": "f18695e2f3b64d37a8a0e085db007eac",
      "DevName": "MirrorMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "e10caaf367fdb6f459483a4c9be850a3",
      "WideIcon": "9c4186a6214f12448a7091710b0cde6c",
      "StackableId": 26035
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "JadeCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 26038
    },
    {
      "LocalizedName": "448d6f054228474eb92862767d3e21a8",
      "DevName": "RandomChampion",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "c175e343deeceff48a7fc58412aabe4e",
      "WideIcon": "7823c6971f6585846a1252e279fd02da",
      "StackableId": 26040
    },
    {
      "LocalizedName": "b2c969dbc2834e9296155eb97e2db638",
      "DevName": "FrostMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlLosses",
      "Icon": "f3e8949aa208a3346a497c336a7002cd",
      "WideIcon": "50404d271ae2a4f4f8b52de966688dc1",
      "StackableId": 26041
    },
    {
      "LocalizedName": "703f566d634d4ed6941a9d6d04f92979",
      "DevName": "Alchemist",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "83cd4bf3be6455f4cbbf803035b6d0fe",
      "WideIcon": "e5554b8a15ffc1a499a3807bb3a37b56",
      "StackableId": 25001
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "Astronomer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 25002
    },
    {
      "LocalizedName": "cb26b90df02745c8b035f856a7bba58d",
      "DevName": "Engineer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "423d20132a1e9224d92e489664702e03",
      "WideIcon": "decba44679fbdae4bb7d0d1cb6a97682",
      "StackableId": 25003
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "Gunner",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 25004
    },
    {
      "LocalizedName": "75edf47280604ea4a632ae97664d3c23",
      "DevName": "Harbinger",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "b6baa190db3bf814cae790b79f622ea0",
      "WideIcon": "bb37e5d448c511e47b808987d0d4f9e8",
      "StackableId": 25005
    },
    {
      "LocalizedName": "185585849e33412ab192917339444df1",
      "DevName": "Herald",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "9de8223b455d0474a9bbf2f32f9c7102",
      "WideIcon": "b0d66b8b9f228724093b8a3e66c3fef6",
      "StackableId": 25006
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "Igniter",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 25007
    },
    {
      "LocalizedName": "943be726de724906be18c214511a3f7b",
      "DevName": "Inhibitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "6477c7810f95a394e936caacf42d0b4e",
      "WideIcon": "f1cc53a29c58089478f6438589d9b32d",
      "StackableId": 25008
    },
    {
      "LocalizedName": "6868ad46fc604034a78f3c57300c3257",
      "DevName": "Inquisitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "b9f935b04557efa4e95d6cec4d151985",
      "WideIcon": "427116cdee46bad4cbaa99d7063e0832",
      "StackableId": 25009
    },
    {
      "LocalizedName": "8b8ca9a3af044131a61889b28bbcb00f",
      "DevName": "Nomad",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "246d3bbb94b9f0d42932cbb2a1e43dd5",
      "WideIcon": "2905515bc00a1d64e83466ec8e50f8b6",
      "StackableId": 25010
    },
    {
      "LocalizedName": "85e0b02e16c64eb1a5bcafb8cd769c25",
      "DevName": "Psychopomp",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "edd99cc32ca6f2842b2cb83249945c2a",
      "WideIcon": "9872f8cd16d7327418b09294cfa319e6",
      "StackableId": 25011
    },
    {
      "LocalizedName": "75e925f886164954b000e65caf1d35ee",
      "DevName": "Ranid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "0380b89b0ba8de847843f22c25b41a56",
      "WideIcon": "d3038956f9767d74bbbce0659b07474d",
      "StackableId": 25012
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "Ravener",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 25013
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "Seeker",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 25014
    },
    {
      "LocalizedName": "ed420e0ca45a4eaeb1010151e236f334",
      "DevName": "Spearmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "7853a4b1214bef74a8bbdf17f0a45bb8",
      "WideIcon": "6f69edc7410650c43bee267eef585b06",
      "StackableId": 25015
    },
    {
      "LocalizedName": "051b83cf1878426a9bc0a329babbea8f",
      "DevName": "Stormcaller",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "6e29d30d928547b4e941ce3e6e4e83b3",
      "WideIcon": "3af1fdc53169d044b939cce7ffb561a1",
      "StackableId": 25016
    },
    {
      "LocalizedName": "f05ef57b8e994e5e9d43bbfcae9a09a6",
      "DevName": "Vanguard",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 25017
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "Glutton",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 25018
    },
    {
      "LocalizedName": "0fa51e1bd7c84e4da4ceee830532e406",
      "DevName": "BloodPriest",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "d9cffa65b2aa1414e9371fc9b2f4c561",
      "WideIcon": "a7e0c7a6f0fa2ef49bf684950de34567",
      "StackableId": 25019
    },
    {
      "LocalizedName": "3c09a1c88b5b44608679b7a34350ca52",
      "DevName": "MetalWarden",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "8f50318bf676ca047b3e36d5b6de7815",
      "WideIcon": "65e28ab3b75c7cb478a1b24b46fca7d2",
      "StackableId": 25020
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "Swordmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 25021
    },
    {
      "LocalizedName": "da0272c6ff4b48bf809f130d8e2dba02",
      "DevName": "Druid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "907a9b3d24a8c9f459e02c87d86fa9da",
      "WideIcon": "6f50396e26efe6c4bbad274e2c90b8a4",
      "StackableId": 25022
    },
    {
      "LocalizedName": "54211e1d9be54efeac2e3311e96b898b",
      "DevName": "Bakko_EasterEvent",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 25023
    },
    {
      "LocalizedName": "d25b42991ba94cbeb7234aad3e176351",
      "DevName": "Thorn",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "57f133d34e231d04d922dd5e5d234a71",
      "WideIcon": "aab126231d9ff344f9f88ab230a5e66f",
      "StackableId": 25025
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "AshkaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 25026
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "FreyaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 25027
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "JumongCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 25028
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "RaigonCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 25029
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "RookCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 25030
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "SiriusCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 25031
    },
    {
      "LocalizedName": "f18695e2f3b64d37a8a0e085db007eac",
      "DevName": "MirrorMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "e10caaf367fdb6f459483a4c9be850a3",
      "WideIcon": "9c4186a6214f12448a7091710b0cde6c",
      "StackableId": 25035
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "JadeCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 25038
    },
    {
      "LocalizedName": "448d6f054228474eb92862767d3e21a8",
      "DevName": "RandomChampion",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "c175e343deeceff48a7fc58412aabe4e",
      "WideIcon": "7823c6971f6585846a1252e279fd02da",
      "StackableId": 25040
    },
    {
      "LocalizedName": "b2c969dbc2834e9296155eb97e2db638",
      "DevName": "FrostMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBrawlWins",
      "Icon": "f3e8949aa208a3346a497c336a7002cd",
      "WideIcon": "50404d271ae2a4f4f8b52de966688dc1",
      "StackableId": 25041
    },
    {
      "LocalizedName": "",
      "DevName": "BrawlWins",
      "IdRangeName": "",
      "StackableRangeName": "BrawlWins",
      "StackableId": 18
    },
    {
      "LocalizedName": "",
      "DevName": "BrawlLosses",
      "IdRangeName": "",
      "StackableRangeName": "BrawlLosses",
      "StackableId": 19
    },
    {
      "LocalizedName": "",
      "DevName": "AccountXP",
      "IdRangeName": "",
      "StackableRangeName": "AccountXP",
      "StackableId": 25
    },
    {
      "LocalizedName": "",
      "DevName": "AccountLevel",
      "IdRangeName": "",
      "StackableRangeName": "AccountLevel",
      "StackableId": 26
    },
    {
      "LocalizedName": "703f566d634d4ed6941a9d6d04f92979",
      "DevName": "Alchemist",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "83cd4bf3be6455f4cbbf803035b6d0fe",
      "WideIcon": "e5554b8a15ffc1a499a3807bb3a37b56",
      "StackableId": 27001
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "Astronomer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 27002
    },
    {
      "LocalizedName": "cb26b90df02745c8b035f856a7bba58d",
      "DevName": "Engineer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "423d20132a1e9224d92e489664702e03",
      "WideIcon": "decba44679fbdae4bb7d0d1cb6a97682",
      "StackableId": 27003
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "Gunner",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 27004
    },
    {
      "LocalizedName": "75edf47280604ea4a632ae97664d3c23",
      "DevName": "Harbinger",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "b6baa190db3bf814cae790b79f622ea0",
      "WideIcon": "bb37e5d448c511e47b808987d0d4f9e8",
      "StackableId": 27005
    },
    {
      "LocalizedName": "185585849e33412ab192917339444df1",
      "DevName": "Herald",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "9de8223b455d0474a9bbf2f32f9c7102",
      "WideIcon": "b0d66b8b9f228724093b8a3e66c3fef6",
      "StackableId": 27006
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "Igniter",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 27007
    },
    {
      "LocalizedName": "943be726de724906be18c214511a3f7b",
      "DevName": "Inhibitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "6477c7810f95a394e936caacf42d0b4e",
      "WideIcon": "f1cc53a29c58089478f6438589d9b32d",
      "StackableId": 27008
    },
    {
      "LocalizedName": "6868ad46fc604034a78f3c57300c3257",
      "DevName": "Inquisitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "b9f935b04557efa4e95d6cec4d151985",
      "WideIcon": "427116cdee46bad4cbaa99d7063e0832",
      "StackableId": 27009
    },
    {
      "LocalizedName": "8b8ca9a3af044131a61889b28bbcb00f",
      "DevName": "Nomad",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "246d3bbb94b9f0d42932cbb2a1e43dd5",
      "WideIcon": "2905515bc00a1d64e83466ec8e50f8b6",
      "StackableId": 27010
    },
    {
      "LocalizedName": "85e0b02e16c64eb1a5bcafb8cd769c25",
      "DevName": "Psychopomp",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "edd99cc32ca6f2842b2cb83249945c2a",
      "WideIcon": "9872f8cd16d7327418b09294cfa319e6",
      "StackableId": 27011
    },
    {
      "LocalizedName": "75e925f886164954b000e65caf1d35ee",
      "DevName": "Ranid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "0380b89b0ba8de847843f22c25b41a56",
      "WideIcon": "d3038956f9767d74bbbce0659b07474d",
      "StackableId": 27012
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "Ravener",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 27013
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "Seeker",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 27014
    },
    {
      "LocalizedName": "ed420e0ca45a4eaeb1010151e236f334",
      "DevName": "Spearmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "7853a4b1214bef74a8bbdf17f0a45bb8",
      "WideIcon": "6f69edc7410650c43bee267eef585b06",
      "StackableId": 27015
    },
    {
      "LocalizedName": "051b83cf1878426a9bc0a329babbea8f",
      "DevName": "Stormcaller",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "6e29d30d928547b4e941ce3e6e4e83b3",
      "WideIcon": "3af1fdc53169d044b939cce7ffb561a1",
      "StackableId": 27016
    },
    {
      "LocalizedName": "f05ef57b8e994e5e9d43bbfcae9a09a6",
      "DevName": "Vanguard",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 27017
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "Glutton",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 27018
    },
    {
      "LocalizedName": "0fa51e1bd7c84e4da4ceee830532e406",
      "DevName": "BloodPriest",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "d9cffa65b2aa1414e9371fc9b2f4c561",
      "WideIcon": "a7e0c7a6f0fa2ef49bf684950de34567",
      "StackableId": 27019
    },
    {
      "LocalizedName": "3c09a1c88b5b44608679b7a34350ca52",
      "DevName": "MetalWarden",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "8f50318bf676ca047b3e36d5b6de7815",
      "WideIcon": "65e28ab3b75c7cb478a1b24b46fca7d2",
      "StackableId": 27020
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "Swordmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 27021
    },
    {
      "LocalizedName": "da0272c6ff4b48bf809f130d8e2dba02",
      "DevName": "Druid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "907a9b3d24a8c9f459e02c87d86fa9da",
      "WideIcon": "6f50396e26efe6c4bbad274e2c90b8a4",
      "StackableId": 27022
    },
    {
      "LocalizedName": "54211e1d9be54efeac2e3311e96b898b",
      "DevName": "Bakko_EasterEvent",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 27023
    },
    {
      "LocalizedName": "d25b42991ba94cbeb7234aad3e176351",
      "DevName": "Thorn",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "57f133d34e231d04d922dd5e5d234a71",
      "WideIcon": "aab126231d9ff344f9f88ab230a5e66f",
      "StackableId": 27025
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "AshkaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 27026
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "FreyaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 27027
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "JumongCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 27028
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "RaigonCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 27029
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "RookCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 27030
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "SiriusCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 27031
    },
    {
      "LocalizedName": "f18695e2f3b64d37a8a0e085db007eac",
      "DevName": "MirrorMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "e10caaf367fdb6f459483a4c9be850a3",
      "WideIcon": "9c4186a6214f12448a7091710b0cde6c",
      "StackableId": 27035
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "JadeCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 27038
    },
    {
      "LocalizedName": "448d6f054228474eb92862767d3e21a8",
      "DevName": "RandomChampion",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "c175e343deeceff48a7fc58412aabe4e",
      "WideIcon": "7823c6971f6585846a1252e279fd02da",
      "StackableId": 27040
    },
    {
      "LocalizedName": "b2c969dbc2834e9296155eb97e2db638",
      "DevName": "FrostMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsWins",
      "Icon": "f3e8949aa208a3346a497c336a7002cd",
      "WideIcon": "50404d271ae2a4f4f8b52de966688dc1",
      "StackableId": 27041
    },
    {
      "LocalizedName": "703f566d634d4ed6941a9d6d04f92979",
      "DevName": "Alchemist",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "83cd4bf3be6455f4cbbf803035b6d0fe",
      "WideIcon": "e5554b8a15ffc1a499a3807bb3a37b56",
      "StackableId": 28001
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "Astronomer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 28002
    },
    {
      "LocalizedName": "cb26b90df02745c8b035f856a7bba58d",
      "DevName": "Engineer",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "423d20132a1e9224d92e489664702e03",
      "WideIcon": "decba44679fbdae4bb7d0d1cb6a97682",
      "StackableId": 28003
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "Gunner",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 28004
    },
    {
      "LocalizedName": "75edf47280604ea4a632ae97664d3c23",
      "DevName": "Harbinger",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "b6baa190db3bf814cae790b79f622ea0",
      "WideIcon": "bb37e5d448c511e47b808987d0d4f9e8",
      "StackableId": 28005
    },
    {
      "LocalizedName": "185585849e33412ab192917339444df1",
      "DevName": "Herald",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "9de8223b455d0474a9bbf2f32f9c7102",
      "WideIcon": "b0d66b8b9f228724093b8a3e66c3fef6",
      "StackableId": 28006
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "Igniter",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 28007
    },
    {
      "LocalizedName": "943be726de724906be18c214511a3f7b",
      "DevName": "Inhibitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "6477c7810f95a394e936caacf42d0b4e",
      "WideIcon": "f1cc53a29c58089478f6438589d9b32d",
      "StackableId": 28008
    },
    {
      "LocalizedName": "6868ad46fc604034a78f3c57300c3257",
      "DevName": "Inquisitor",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "b9f935b04557efa4e95d6cec4d151985",
      "WideIcon": "427116cdee46bad4cbaa99d7063e0832",
      "StackableId": 28009
    },
    {
      "LocalizedName": "8b8ca9a3af044131a61889b28bbcb00f",
      "DevName": "Nomad",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "246d3bbb94b9f0d42932cbb2a1e43dd5",
      "WideIcon": "2905515bc00a1d64e83466ec8e50f8b6",
      "StackableId": 28010
    },
    {
      "LocalizedName": "85e0b02e16c64eb1a5bcafb8cd769c25",
      "DevName": "Psychopomp",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "edd99cc32ca6f2842b2cb83249945c2a",
      "WideIcon": "9872f8cd16d7327418b09294cfa319e6",
      "StackableId": 28011
    },
    {
      "LocalizedName": "75e925f886164954b000e65caf1d35ee",
      "DevName": "Ranid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "0380b89b0ba8de847843f22c25b41a56",
      "WideIcon": "d3038956f9767d74bbbce0659b07474d",
      "StackableId": 28012
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "Ravener",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 28013
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "Seeker",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 28014
    },
    {
      "LocalizedName": "ed420e0ca45a4eaeb1010151e236f334",
      "DevName": "Spearmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "7853a4b1214bef74a8bbdf17f0a45bb8",
      "WideIcon": "6f69edc7410650c43bee267eef585b06",
      "StackableId": 28015
    },
    {
      "LocalizedName": "051b83cf1878426a9bc0a329babbea8f",
      "DevName": "Stormcaller",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "6e29d30d928547b4e941ce3e6e4e83b3",
      "WideIcon": "3af1fdc53169d044b939cce7ffb561a1",
      "StackableId": 28016
    },
    {
      "LocalizedName": "f05ef57b8e994e5e9d43bbfcae9a09a6",
      "DevName": "Vanguard",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 28017
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "Glutton",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 28018
    },
    {
      "LocalizedName": "0fa51e1bd7c84e4da4ceee830532e406",
      "DevName": "BloodPriest",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "d9cffa65b2aa1414e9371fc9b2f4c561",
      "WideIcon": "a7e0c7a6f0fa2ef49bf684950de34567",
      "StackableId": 28019
    },
    {
      "LocalizedName": "3c09a1c88b5b44608679b7a34350ca52",
      "DevName": "MetalWarden",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "8f50318bf676ca047b3e36d5b6de7815",
      "WideIcon": "65e28ab3b75c7cb478a1b24b46fca7d2",
      "StackableId": 28020
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "Swordmaster",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 28021
    },
    {
      "LocalizedName": "da0272c6ff4b48bf809f130d8e2dba02",
      "DevName": "Druid",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "907a9b3d24a8c9f459e02c87d86fa9da",
      "WideIcon": "6f50396e26efe6c4bbad274e2c90b8a4",
      "StackableId": 28022
    },
    {
      "LocalizedName": "54211e1d9be54efeac2e3311e96b898b",
      "DevName": "Bakko_EasterEvent",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "0a89df4b6bcde3d469185186eab7138b",
      "WideIcon": "6154d6c0556261343844bf7caebb67a7",
      "StackableId": 28023
    },
    {
      "LocalizedName": "d25b42991ba94cbeb7234aad3e176351",
      "DevName": "Thorn",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "57f133d34e231d04d922dd5e5d234a71",
      "WideIcon": "aab126231d9ff344f9f88ab230a5e66f",
      "StackableId": 28025
    },
    {
      "LocalizedName": "06b590e739cd4c27abebc6f98d15cdd3",
      "DevName": "AshkaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "08d5adc2bbf509744a62b894ef6279c7",
      "WideIcon": "02fbe1fea9e22054a9ab1b0c5007dbae",
      "StackableId": 28026
    },
    {
      "LocalizedName": "ebc196a9d95b4adbab1277e00712a32e",
      "DevName": "FreyaCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "66b9694ba8595124badb339297eae3b7",
      "WideIcon": "be081702a8e70fe44ac0a4e3a9c46368",
      "StackableId": 28027
    },
    {
      "LocalizedName": "96665f8e798b4b50ba7834bddfdd937f",
      "DevName": "JumongCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "a7576e30c80eb9f48ba9ce303e4c3582",
      "WideIcon": "42a665b9c285a1243a201c8d533980e5",
      "StackableId": 28028
    },
    {
      "LocalizedName": "6b3efda7c227421b9736be7006f7035e",
      "DevName": "RaigonCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "e0b418f839ba5ff4baa728af4f454d89",
      "WideIcon": "6c2252900d15cb344a5240f30d3ba705",
      "StackableId": 28029
    },
    {
      "LocalizedName": "7351e41203ce487488813815bb872f0c",
      "DevName": "RookCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "fff8232d0fb921447b388c4ca5993c46",
      "WideIcon": "e5d5913527b842b41aed666d27d14231",
      "StackableId": 28030
    },
    {
      "LocalizedName": "8335978482a94de1a929184211a928df",
      "DevName": "SiriusCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "f3af4ddea533f364e80c70c580ed933d",
      "WideIcon": "aa93dc83288cb954aa3a97aabe8320dd",
      "StackableId": 28031
    },
    {
      "LocalizedName": "f18695e2f3b64d37a8a0e085db007eac",
      "DevName": "MirrorMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "e10caaf367fdb6f459483a4c9be850a3",
      "WideIcon": "9c4186a6214f12448a7091710b0cde6c",
      "StackableId": 28035
    },
    {
      "LocalizedName": "41031d2dae9f4fbcb942d17a30ab9fb8",
      "DevName": "JadeCampaign",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "1cd8f3b8b7da1904c821011f50dbe616",
      "WideIcon": "38b75268719e2b640a6d62250e102ffa",
      "StackableId": 28038
    },
    {
      "LocalizedName": "448d6f054228474eb92862767d3e21a8",
      "DevName": "RandomChampion",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "c175e343deeceff48a7fc58412aabe4e",
      "WideIcon": "7823c6971f6585846a1252e279fd02da",
      "StackableId": 28040
    },
    {
      "LocalizedName": "b2c969dbc2834e9296155eb97e2db638",
      "DevName": "FrostMage",
      "IdRangeName": "CharacterEnum",
      "StackableRangeName": "CharacterBattlegroundsLosses",
      "Icon": "f3e8949aa208a3346a497c336a7002cd",
      "WideIcon": "50404d271ae2a4f4f8b52de966688dc1",
      "StackableId": 28041
    },
    {
      "LocalizedName": "",
      "DevName": "BattlegroundsWins",
      "IdRangeName": "",
      "StackableRangeName": "BattlegroundsWins",
      "StackableId": 22
    },
    {
      "LocalizedName": "",
      "DevName": "BattlegroundsLosses",
      "IdRangeName": "",
      "StackableRangeName": "BattlegroundsLosses",
      "StackableId": 23
    },
    {
      "LocalizedName": "",
      "DevName": "TwitchAccountLinked",
      "IdRangeName": "",
      "StackableRangeName": "TwitchAccountLinked",
      "StackableId": 27
    }
  ]
);

module.exports.getByStackableId = function (id) {
  return _stackable.find(s => s.StackableId == id);
}
