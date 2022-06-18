

import React from 'react'
import uuid from 'react-uuid'








const data = {
  "_id": "629d024ca83af658df637020",
  "college": "SRM",
  "year": "3",
  "sem": "2",
  "subjects": [
    {
      "subject_id": uuid(),
      "name": "Software management and design",
      "codename": "SEPM",
      "notes": [
        {
          "notes_id":uuid(),
          "title": "Unit 1",
          "material": [
            { "material_id": uuid(), "heading": "All in one", "link": "wwo.gon.com" },
            {"material_id": uuid(),  "heading": "Question bank", "link": "wwo.gon.com" },
            {"material_id": uuid(),  "heading": "Merged", "link": "wwo.gon.com" }
          ]
        },
        {
          "notes_id":uuid(),
          "title": "Unit 2",
          "material": [{"material_id": uuid(),  "heading": "All in one", "link": "wwo.gon.com" }]
        },
        {
          "notes_id":uuid(),
          "title": "Unit 3",
          "material": [{"material_id": uuid(),  "heading": "All in one", "link": "wwo.gon.com" }]
        }
      ]
    },
    {
      "subject_id": uuid(),
      "name": "Operating System",
      "codename": "OS",
      "notes": [
        {
          "notes_id":uuid(),
          "title": "Unit 1",
          "material": [
            {"material_id": uuid(),
              "heading": "Full PPT",
              "link": "https://drive.google.com/uc?export=download&id=1G72eececNQeWxDTY6_lss4YP3x6bERfk"
            },
            {"material_id": uuid(),
              "heading": "Unit Summary Notes",
              "link": "https://drive.google.com/uc?export=download&id=1yQDU82xC-5MlW20Y1r6Evx5Lfy4XBT6D"
            },
            { "material_id": uuid(),
               "heading": "Question Bank",
              "link": "https://drive.google.com/uc?export=download&id=1HCV28fNbaKDvBnRp4OUMNlz2DnY-yvD5" }
          ]
        },
        {
          "notes_id":uuid(),
          "title": "Unit 2",
          "material": [
              {"material_id": uuid(),
                 "heading": "Unit Summary",
                "link": "https://drive.google.com/uc?export=download&id=1P4ztWkBnGI6nkOYLW-md2kZ3CAXpRxzI" 
              },
              {"material_id": uuid(),
                 "heading": "Hand-Written Notes",
                "link": "https://drive.google.com/uc?export=download&id=1ZHWVrdtR1ADMhw3D3Ra1xm4Kirrd2BbY" 
              },
              { "material_id": uuid(),
                "heading": "Question Bank",
                "link": "https://drive.google.com/uc?export=download&id=1qUYyOYHPwrOwahKm5G705cI1iqQV6IQH" 
              }
            ]
        },
        {
          "notes_id":uuid(),
          "title": "Unit 3",
          "material": [
            {"material_id": uuid(),
               "heading": "Unit Summary",
              "link": "https://drive.google.com/uc?export=download&id=1N2T5HGUGuqKsU43MO-N329DD3jnx2Bl-" 
            },
            { "material_id": uuid(),
              "heading": "Hand-Written Notes",
              "link": "https://drive.google.com/uc?export=download&id=1WruyxAltKhEl2fnOCo_YHXK04Ca95kG3" 
            },
            { "material_id": uuid(),
              "heading": "Question Bank",
              "link": "https://drive.google.com/uc?export=download&id=1QgoT6_Y_ScprBBFeQHxa_pP7AIdVvsvf" 
            }
          ]
        },
        {
          "notes_id":uuid(),
            "title": "Unit 4",
            "material": [
              { "material_id": uuid(),
                "heading": "Full Unit PPT",
                "link": "https://drive.google.com/uc?export=download&id=1gOTr5TUV61BMHIf-yvKMA5aeKGe-HZoK" 
              },
              { "material_id": uuid(),
                "heading": "Question Bank",
                "link": "https://drive.google.com/uc?export=download&id=1wThvN9sgjs6L4bnIqqq_tWn1IK3KbVaT" 
              }
            ]
        },
        {
          "notes_id":uuid(),
          "title": "Unit 5",
          "material": [
            { "material_id": uuid(),
              "heading": "Full Unit PPT",
              "link": "https://drive.google.com/uc?export=download&id=1FEN8uJSbqh2PHBa0W_ljfgOfXyCBB1Qd" 
            },
            { "material_id": uuid(),
              "heading": "Unit Summary",
              "link": "https://drive.google.com/uc?export=download&id=1_Ntp_FJ1UUKdifD9tgaV6fjLldh4JkhH" 
            },
            { "material_id": uuid(),
              "heading": "Question Bank",
              "link": "https://drive.google.com/uc?export=download&id=1dqaPNq-qBf20kiH16ekrDbm_QWU6-QZK" 
            }
          ]
      }
      ]
    }
  ]
}
